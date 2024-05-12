import prisma from "../db";

const findUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export { findUsers };
