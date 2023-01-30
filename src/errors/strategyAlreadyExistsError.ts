import { ApplicationError } from "@/protocols";

export function strategyAlreadyExistsError(): ApplicationError {
  return {
    name: "strategyAlreadyExistsError",
    message: "There is already an user with given email",
  };
}
