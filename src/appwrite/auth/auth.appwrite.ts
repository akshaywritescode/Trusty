import { Client, Account, ID } from "appwrite";
import { TSignupResponseSchema } from "../../validation/signup.validate";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_API_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const account = new Account(client);

export const authAppwrite = () => {
  //create account
  const createAccount = (
    email: string,
    password: string
  ): Promise<TSignupResponseSchema> => {
    const uuid = ID.unique();
    const promise = account.create(uuid, email, password);
    return promise;
  };

  //login session
  const createLoginSession = (email: string, password: string) => {
    const promise = account.createEmailPasswordSession(email, password);
    return promise;
  };

  //create verification mail
  const createVerificationMail = () => {
    const verificationUrl = `http://localhost:5173/auth/verify/ensureVerification`;
    const promise = account.createVerification(verificationUrl);
    return promise;
  };

  return { createAccount, createLoginSession, createVerificationMail };
};
