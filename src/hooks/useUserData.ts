import { useContext } from "react";
import { UserDataContext } from "../context/UserDataProvider";

export function useUser() {
    return useContext(UserDataContext);
  }