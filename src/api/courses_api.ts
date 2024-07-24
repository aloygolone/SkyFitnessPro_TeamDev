import { child, get, ref, set } from "firebase/database";
import { CourseType, WorkoutType } from "../types";
import { database } from "./firebase_api";

//Получить все курсы
export const getCoursesApi = () => {
  let result: CourseType[] = [];
  return get(child(ref(database), `courses`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        Object.keys(snapshot.val()).forEach((key) => {
          result.push(snapshot.val()[key]);
        });
        result = result.sort(compareByOrder);
      }
      return result;
    })
    .catch((error) => {
      console.error(error);
      return result;
    });
};

//Получить все воркауты
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

export const getCourse = async (courseId: string) => {
  let result: CourseType[] = [];
  try {
    const snapshot = await get(child(ref(database), `courses/${courseId}`));
    if (snapshot.exists()) {
      result = snapshot.val();
    }
  } catch (e) {
    console.error(e);
  }
  return result;
};

//добавленные курсы у юзера с прогрессом
export const getFavoriteCourseOfUser = async (userId: string) => {
  try {
    const snapshot = await get(child(ref(database), `users/${userId}`));
    if (snapshot.exists()) {
      const promises = Object.keys(snapshot.val()).map(async (key) => {
        const data = await getCourse(key);
        const dataWithProgress = {
          ...data,
          progress: snapshot.val()[key].progress,
        };
        return dataWithProgress;
      });
      const result = await Promise.all(promises);
      return result;
    }
  } catch (e) {
    console.error(e);
  }
};

//возвращает выбранный курс по ИД
export const getCourseById = async (courseId: string) => {
  let result: CourseType | null = null;
  try {
    const snapshot = await get(child(ref(database), `courses/${courseId}`));
    if (snapshot.exists()) {
      result = snapshot.val();
    }
  } catch (e) {
    console.error(e);
  }
  return result;
};

//воркауты назначенные относительно курса
export const getWorkoutById = async (
  workoutId: string,
  userId: string,
  courseId: string,
) => {
  console.log("getWorkoutById", workoutId, userId, courseId);
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

export function compareByOrder(a: CourseType, b: CourseType) {
  if (a.order < b.order) {
    return -1;
  }
  if (a.order > b.order) {
    return 1;
  }
  return 0;
}

//Добавление курса------------------------------------------------------
export const fetchAddFavoriteCourseToUser = async (
  userId: string,
  courseId: string
) => {
  const snapshot = await get(child(ref(database), `scheme/${courseId}`));
  if (snapshot.exists()) {
    set(ref(database, `users/${userId}/${courseId}`), snapshot.val());
  }
};
// //разделение добавления курса для API и CourseForm
// //API
// import { set, get, child, ref } from "./path/to/firebase/database";
// import { database } from "./path/to/firebase";

// export const fetchAddFavoriteCourseToUser = async (
//   userId: string,
//   courseId: string
// ) => {
//   const snapshot = await get(child(ref(database), `scheme/${courseId}`));
//   if (snapshot.exists()) {
//     set(ref(database, `users/${userId}/${courseId}`), snapshot.val());
//   }
// };
// //CourseForm
// import { fetchAddFavoriteCourseToUser } from "./api";
// // Код компонента CourseForm
// // Пример использования функции fetchAddFavoriteCourseToUser
// const handleAddCourse = async (userId: string, courseId: string) => {
//   try {
//     await fetchAddFavoriteCourseToUser(userId, courseId);
//     console.log("Курс успешно добавлен в избранное");
//   } catch (error) {
//     console.error("Ошибка при добавлении курса:", error);
//   }
// };


//удаление курсов из добавленных----------------------------------------
export const deleteFavoriteCourse = async (
  userId: string,
  courseId: string
) => {
  set(ref(database, `users/${userId}/${courseId}`), {});
};

// //Раздельно удаление для api и courseForm
// //для API
// import { set, ref } from "./path/to/firebase/database";
// import { database } from "./path/to/firebase";

// export const deleteFavoriteCourse = async (userId: string, courseId: string) => {
//   set(ref(database, `users/${userId}/${courseId}`), {});
// };

// //для courseForm
// import { deleteFavoriteCourse } from "./api";
// // Код компонента CourseForm
// // Пример использования функции deleteFavoriteCourse
// const handleDeleteCourse = async (userId: string, courseId: string) => {
//   try {
//     await deleteFavoriteCourse(userId, courseId);
//     console.log("Курс успешно удален из избранного");
//   } catch (error) {
//     console.error("Ошибка при удалении курса:", error);
//   }
// };
