import { User } from "@prisma/client";
import { exclude } from "@/utils/prisma-utils";
import { invalidCredentialsError } from "@/errors";
import { sessionRepository, userRepository } from "@/repositories";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

async function signIn(params: SignInParams): Promise<SignInResult> {
  const { email, password } = params;

  const user = await getUserOrFail(email);

  await validatePasswordOrFail(password, user.password);

  const token = await createSession(user.id);

  return {
    user: exclude(user, "password"),
    token,
  };
}

async function getUserOrFail(email: string): Promise<GetUserOrFailResult> {
  const user = await userRepository.findByEmail(email, { id: true, email: true, password: true });
  console.log("🚀🚀🚀 ~ file: authentication-service.ts:25 ~ getUserOrFail ~ user", user);

  if (!user) throw invalidCredentialsError();

  return user;
}

async function validatePasswordOrFail(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw invalidCredentialsError();
}

async function createSession(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  await sessionRepository.create({
    token,
    userId,
  });

  return token;
}

export type SignInParams = Pick<User, "email" | "password">;

export type SignInParamsGitHub = {
  email: "email";
  token: "token";
};

type SignInResult = {
  user: Pick<User, "id" | "email">;
  token: string;
};

type GetUserOrFailResult = Pick<User, "id" | "email" | "password">;

const authenticationService = {
  signIn,
};

export { authenticationService };
