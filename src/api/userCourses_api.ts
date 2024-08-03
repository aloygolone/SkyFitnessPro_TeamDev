import { ExerciseType, UserCourseType, UserWorkoutType } from "../types";
import { ref, get, child, set } from "firebase/database";
import { database } from "./db_config";
import { userCourseOrder } from "../utils/courseOrder/courseOrder";

export const getAddedCourseOfUser = async (userId: string) => {
  let sortResult: UserCourseType[] = [];
  try {
    const snapshot = await get(child(ref(database), `users/${userId}`));

    if (snapshot.exists()) {
      Object.keys(snapshot.val()).forEach((key) => {
        sortResult.push(snapshot.val()[key]);
      });

      sortResult = sortResult.sort(userCourseOrder);

      return sortResult;
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

export const fetchAddFavoriteCourseToUser = async (
  userId: string,
  courseId: string,
) => {
  // Получаем конкретный курс по ID

  const courseSnapshot = await get(child(ref(database), `courses/${courseId}`));

  const courseData = courseSnapshot.val();

  // Получаем все существующие workouts

  const workoutsSnapshot = await get(child(ref(database), `workouts`));
  const workoutsValues: UserWorkoutType[] = Object.values(
    workoutsSnapshot.val(),
  );

  //Получаем массив workouts из конкретного курса

  const workoutsByCourseIdSnapshot = await get(
    child(ref(database), `courses/${courseId}/workouts`),
  );

  const workoutsByCourseId = workoutsByCourseIdSnapshot.val();

  // Создаем массив с данными workouts для конкретного выбранного курса

  const workoutsDataByCourseId = workoutsValues.filter((element) =>
    workoutsByCourseId.find((el: string) => el === element?._id),
  );

  // Создаем объект workouts, который будем записывать внутри БД - /users/${userId}/${courseId}/${workoutId}

  const workoutsOfUser = workoutsDataByCourseId.map((el) => {
    if (el.exercises) {
      const userExercises = el.exercises.map((element: ExerciseType) => {
        return (element = {
          name: element.name,
          quantity: element.quantity || 0,
          progress: 0,
        });
      });

      return (el = {
        _id: el._id,
        exercises: userExercises,
      });
    } else {
      return {};
    }
  });

  // Оставляем только те данные, которые нам нужны в БД для user

  delete courseData.workouts;
  delete courseData.description;
  delete courseData.directions;
  delete courseData.fitting;
  courseData.workouts = workoutsOfUser;
  courseData.totalProgress = 0;

  // Записываем на сервер полученный результат

  if (courseSnapshot.exists()) {
    set(ref(database, `users/${userId}/${courseId}`), courseData);
  }
};

export const updateUserProgress = (
  userId: string,
  courseId: string,
  newWorkoutsData: UserWorkoutType[],
) => {
  set(ref(database, `users/${userId}/${courseId}/workouts/`), newWorkoutsData);
};

export const updateTotalProgress = (
  userId: string,
  courseId: string,
  newProgress: number,
) => {
  set(ref(database, `users/${userId}/${courseId}/totalProgress/`), newProgress);
};
