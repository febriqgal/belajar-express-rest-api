import { findUsers } from "./users.repository";

const getAllProductsService = async () => {
  const res = await findUsers();
  return res;
};

export { getAllProductsService };
