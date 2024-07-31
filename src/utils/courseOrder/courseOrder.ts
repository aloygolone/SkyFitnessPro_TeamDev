import { UserCourseType } from "../../types";

export function courseOrder(a: UserCourseType, b: UserCourseType) {
  if (a.order < b.order) {
    return -1;
  }
  if (a.order > b.order) {
    return 1;
  }
  return 0;
}
