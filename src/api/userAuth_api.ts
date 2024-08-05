import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword,
} from "firebase/auth";
import { auth } from "./db_config";

export async function userSignin(email: string, password: string) {
  const resSignin = await signInWithEmailAndPassword(auth, email, password);
  if (!resSignin) {
    throw new Error("Ошибка");
  }
  const dataSignin = await resSignin.user;
  return dataSignin;
}

export async function userSignup(email: string, password: string) {
  const resSignup = await createUserWithEmailAndPassword(auth, email, password);
  if (!resSignup) {
    throw new Error("Ошибка");
  }
  const dataSignup = await resSignup.user;
  return dataSignup;
}

export const changePassword = async (password: string) => {
  try {
    if (!auth.currentUser) {
      throw new Error("Нет авторизации");
    }
    await updatePassword(auth.currentUser, password);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
