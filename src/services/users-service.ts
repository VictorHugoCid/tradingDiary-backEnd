import { duplicatedEmailError } from "@/errors";
import userRepository from "@/repositories/users-repository";
import bcrypt from "bcrypt";

export async function createUser({ email, password }: CreateUserParams): Promise<User> {
  await validateUniqueEmailOrFail(email);

  const hashedPassword = await bcrypt.hash(password, 12);
  const data = {
    email,
    password: hashedPassword.toString(),
  };

  return userRepository.create(data);
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}

export type User = {
  id: number;
  email: string;
  password: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateUserParams = Pick<User, "email" | "password">;
