import { CourseType, WorkoutType } from "../types";
import { ref, get, child, set } from "firebase/database";
import { getCourseByID } from "./courses_api";
import { database } from "./db_config";

export const getAddedCourseOfUser = async (
  userId: string,
): Promise<CourseType[]> => {
  try {
    const snapshot = await get(child(ref(database), `users/${userId}`));

    if (snapshot.exists()) {
      const promises = Object.keys(snapshot.val()).map(async (key) => {
        const data = await getCourseByID(key);
        const dataWithProgress = {
          ...data,
          progress: snapshot.val()[key].progress,
        };
        return dataWithProgress;
      });

      const result = await Promise.all(promises);
      return result;
    }
    return [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const deleteMatchedCourse = async (userId: string, courseId: string) => {
  set(ref(database, `users/${userId}/${courseId}`), {});
};

export const getUserWorkouts = async (userId: string, courseId: string) => {
  try {
    const workoutIdsSnapshot = await get(
      child(ref(database), `courses/${courseId}/workouts`),
    );

    if (workoutIdsSnapshot.exists()) {
      const workoutIds = workoutIdsSnapshot.val();
      const workouts = [];

      for (const id of workoutIds) {
        const workoutDataSnapshot = await get(
          child(ref(database), `workouts/${id}/name`),
        );

        if (workoutDataSnapshot.exists()) {
          const progressSnapshot = await get(
            child(ref(database), `users/${userId}/${courseId}/${id}/done`),
          );

          if (progressSnapshot.exists()) {
            workouts.push({
              name: workoutDataSnapshot.val(),

              id,
              progress: progressSnapshot.val(),
            });
          }
        }
      }

      return workouts; // Возвращаем готовый массив тренировок
    }

    return []; // Возвращаем пустой массив, если workoutIds не существует
  } catch (e) {
    console.error(e);
    return []; // Возвращаем пустой массив в случае ошибки
  }
};

export const getWorkoutById = async (
  workoutId: string,
  userId: string,
  courseId: string,
) => {

  let result: WorkoutType | null = null;

  try {
    const snapshot = await get(
      child(ref(database), `users/${userId}/${courseId}/${workoutId}`),
    );

    if (snapshot.exists()) {
      result = snapshot.val();
    }
  } catch (e) {
    console.error(e);
  }

  return result;
};

export const updateExercisesProgress = async (
  userId: string,
  courseId: string,
  workoutId: string,
  newExercisesList: Record<string, unknown>,
) => {
  try {
    set(
      ref(database, `users/${userId}/${courseId}/${workoutId}`),
      newExercisesList,
    );
  } catch (e) {
    console.error(e);
  }
};

export const fetchAddFavoriteCourseToUser = async (
  userId: string,
  courseId: string,
) => {
  const snapshot = await get(child(ref(database), `courses/${courseId}`));
  if (snapshot.exists()) {
    set(ref(database, `users/${userId}/${courseId}`), snapshot.val());
  }
};
