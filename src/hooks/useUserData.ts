import { useContext } from "react";
import { UserDataContext } from "../context/UserDataProvider";
// import { useAppSelector } from "./redux-hooks";

//это хук React, который позволяет читать и подписываться на контекст из компонента UserDataContext
export function useUserData() {
  return useContext(UserDataContext);
}
