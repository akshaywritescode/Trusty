import { Client, Account } from "appwrite";
import { v4 as uuidv4 } from "uuid";
import { TSignupResponseSchema } from "../../validation/signup.validate";

const client = new Client()
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const account = new Account(client);

export const authAppwrite = () => {
  const createAccount = (
    email: string,
    password: string
  ): Promise<TSignupResponseSchema> => {
    const uuid = uuidv4();
    const promise = account.create(uuid, email, password);
    return promise;
  };

  const verifyAccount = () => {
    const promise = account.createVerification("https://example.com");
    return promise;
  };

  return { createAccount, verifyAccount };
};
