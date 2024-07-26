import { CourseType, WorkoutType } from "../types";
import { ref, get, child } from "firebase/database";
import { courseOrder } from "../utils/courseOrder/courseOrder";
import { database } from "./db_config";

export const getCourses = async () => {
  let result: CourseType[] = [];

  try {
    const snapshot = await get(child(ref(database), `courses`));

    if (snapshot.exists()) {
      Object.keys(snapshot.val()).forEach((key) => {
        result.push(snapshot.val()[key]);
      });

      result = result.sort(courseOrder);
    }
  } catch (e) {
    console.error(e);
  }

  return result;
};

export const getCourseByID = async (courseId: string) => {
  // let result: CourseType | null = null;

  try {
    const snapshot = await get(child(ref(database), `courses/${courseId}`));

    if (snapshot.exists()) {
      return snapshot.val();
    }
  } catch (e) {
    console.error(e);
  }
};

export const getWorkouts = async () => {
  const result: WorkoutType[] = [];

  try {
    const snapshot = await get(child(ref(database), `workouts`));

    if (snapshot.exists()) {
      Object.keys(snapshot.val()).forEach((key) => {
        result.push(snapshot.val()[key]);
      });
    }
  } catch (e) {
    console.error(e);
  }

  return result;
};
