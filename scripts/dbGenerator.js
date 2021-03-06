const fs = require("fs");
const dbJson = require("../__seed.json");

const priceList = [1800, 970, 1200, 2400, 2000, 4200, 3800, 7600, 5450, 9600];
const rankList = [2, 3, 4, 5];
const daysRange = [5, 8, 10, 14, 21];
const reservationsList = new Set();


Date.prototype.addDays = function(days) {
  this.setDate(this.getDate() + parseInt(days));
  return this;
};

Date.prototype.normalized = function() {
  let month = "0" + (this.getMonth() + 1);
  let date = "0" + this.getDate();
  month = month.slice(-2);
  date = date.slice(-2);
  return date +"/" +month +"/" +this.getFullYear();
}

function generateReservationId() {
  let next = Math.floor(Math.random() * 10e3 + 1);
  while (reservationsList.has(next)) {
    next = Math.floor(Math.random() * 10e3 + 1);
  }
  reservationsList.add(next);
  return next;
}

function generateCabinsRanksAndPrices(cabins) {
  return cabins.map(c => {
    const snapshot = Object.assign({}, c) 
    snapshot.rank = rankList[Math.floor(Math.random() * rankList.length)];
    snapshot.price = priceList[Math.floor(Math.random() * priceList.length)] + " NOK"
    return snapshot;
  })
}

function generateReservations(cabins, users) {
  const reservations = [];
  cabins.map((c) => {
    const count = Math.floor(Math.random() * 5) + 1;
    for (let i = 0; i < count; i++) {
      const fromDate = new Date().addDays(Math.floor((Math.random() * 30) + 1));
      const toDate = new Date(fromDate).addDays(daysRange[Math.floor((Math.random() * daysRange.length))]);
      const reservation = {
        id: generateReservationId(),
        cid: c.id,
        uid: users[Math.floor(Math.random() * users.length)].id,
        from: fromDate.normalized(),
        to: toDate.normalized()
      }
      reservations.push(reservation);
    } 
  });
  return reservations;
}

const updatedDB = Object.assign(
  {}, 
  dbJson, 
  {
    cabins: generateCabinsRanksAndPrices(dbJson.cabins), 
    reservations: generateReservations(dbJson.cabins, dbJson.users)
  }
);

try {
  fs.writeFileSync("db.json", JSON.stringify(updatedDB), {encoding:'utf8',flag:'w'});
} catch(e) {
  console.log("\n> ERROR WHILE GENERATING DB!!!");
  console.log("> ", e);
}

console.log("\n> generated db.json - ok")