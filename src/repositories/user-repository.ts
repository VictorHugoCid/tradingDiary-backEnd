import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function findByEmail(email: string, select?: Prisma.UserSelect) {
  const params: Prisma.UserFindUniqueArgs = {
    where: {
      email,
    },
  };
  if (select) {
    params.select = select;
  }
  // const user = prisma.user.findFirst(params);
  return prisma.user.findFirst(params);
}

// async function findByEmailGitHub(email: string) {
//   const user = await prisma.user.findUnique({ where: { email } });
//   return user;
// }

async function create(data) {
  return await prisma.user.create({
    data,
  });
}

const userRepository = {
  findByEmail,
  create,
  // findByEmailGitHub,
};

export { userRepository };
