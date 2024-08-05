import { useContext } from "react";
import { CoursesContext } from "../context/CoursesProvider";


export function useCourses() {
  return useContext(CoursesContext);
}