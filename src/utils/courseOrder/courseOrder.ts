import { CourseType, UserCourseType } from "../../types";

export function courseOrder(a: CourseType, b: CourseType) {
  if (a.order < b.order) {
    return -1;
  }
  if (a.order > b.order) {
    return 1;
  }
  return 0;
}

export function userCourseOrder(a: UserCourseType, b: UserCourseType) {
  if (a.order < b.order) {
    return -1;
  }
  if (a.order > b.order) {
    return 1;
  }
  return 0;
}
