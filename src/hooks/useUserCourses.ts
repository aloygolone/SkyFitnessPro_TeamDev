import { useContext } from "react";
import { UserCoursesContext } from "../context/UserCoursesProvider";

export function useUserCourses() {
  const context = useContext(UserCoursesContext);
  if (context) {
    return context;
  } else {
    throw new Error("Ошибка");
  }
}
