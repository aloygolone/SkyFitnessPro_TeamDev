import { ExerciseType, UserCourseType, UserWorkoutType } from "../types";
import { ref, get, child, set } from "firebase/database";
import { database } from "./db_config";
import { courseOrder } from "../utils/courseOrder/courseOrder";

export const getAddedCourseOfUser = async (userId: string) => {
  let sortResult: UserCourseType[] = []; 
  try {
    const snapshot = await get(child(ref(database), `users/${userId}`));

    if (snapshot.exists()) {
      Object.keys(snapshot.val()).forEach((key) => {
        sortResult.push(snapshot.val()[key]);
      });

      sortResult = sortResult.sort(courseOrder);

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

// export const getUserWorkouts = async (userId: string, courseId: string) => {
//   try {
//     const workoutIdsSnapshot = await get(
//       child(ref(database), `courses/${courseId}/workouts`),
//     );

//     if (workoutIdsSnapshot.exists()) {
//       const workoutIds = workoutIdsSnapshot.val();
//       const workouts = [];

//       for (const id of workoutIds) {
//         const workoutDataSnapshot = await get(
//           child(ref(database), `workouts/${id}/name`),
//         );

//         if (workoutDataSnapshot.exists()) {
//           const progressSnapshot = await get(
//             child(ref(database), `users/${userId}/${courseId}/${id}/done`),
//           );

//           if (progressSnapshot.exists()) {
//             workouts.push({
//               name: workoutDataSnapshot.val(),

//               id,
//               progress: progressSnapshot.val(),
//             });
//           }
//         }
//       }

//       return workouts; // Возвращаем готовый массив тренировок
//     }

//     return []; // Возвращаем пустой массив, если workoutIds не существует
//   } catch (e) {
//     console.error(e);
//     return []; // Возвращаем пустой массив в случае ошибки
//   }
// };

// export const getWorkoutById = async (
//   workoutId: string,
//   userId: string,
//   courseId: string,
// ) => {
//   let result: WorkoutType | null = null;

//   try {
//     const snapshot = await get(
//       child(ref(database), `users/${userId}/${courseId}/${workoutId}`),
//     );

//     if (snapshot.exists()) {
//       result = snapshot.val();
//     }
//   } catch (e) {
//     console.error(e);
//   }

//   return result;
// };

// export const updateExercisesProgress = async (
//   userId: string,
//   courseId: string,
//   workoutId: string,
//   newExercisesList: Record<string, unknown>,
// ) => {
//   try {
//     set(
//       ref(database, `users/${userId}/${courseId}/${workoutId}`),
//       newExercisesList,
//     );
//   } catch (e) {
//     console.error(e);
//   }
// };

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

  // Записываем на сервер полученный результат

  if (courseSnapshot.exists()) {
    set(ref(database, `users/${userId}/${courseId}`), courseData);
  }
};
