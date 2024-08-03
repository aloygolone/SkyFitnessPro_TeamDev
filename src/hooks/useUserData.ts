import { useContext } from "react";
import { UserDataContext } from "../context/UserDataProvider";

//это хук React, который позволяет читать и подписываться на контекст из компонента UserDataContext
export function useUserData() {
  return useContext(UserDataContext);
}
