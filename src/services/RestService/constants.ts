interface APIInterface {
  cabins: string;
  users: string;
  reservations: string;
}

export const apiUrls: APIInterface = {
  cabins: '/cabins',
  users: '/users',
  reservations: '/reservations',
};
