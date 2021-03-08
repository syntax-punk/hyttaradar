interface APIInterface {
  cabins: string;
  users: string;
  reservations: string;
}

export const endpoints: APIInterface = {
  cabins: '/cabins',
  users: '/users',
  reservations: '/reservations',
};
