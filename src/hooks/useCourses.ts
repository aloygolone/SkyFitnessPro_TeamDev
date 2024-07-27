import { useContext } from "react";
import { CoursesContext } from "../context/CoursesProvider";

export function useCourses() {
  const context = useContext(CoursesContext);
  if (!context) {
    throw new Error("err");
  }
  return context;
}
