import { ChangeEvent, useState, useEffect } from "react";
import "../../../css/style.css";
import { UserWorkoutType, WorkoutType } from "../../../types";
import { useUserCourses } from "../../../hooks/useUserCourses";
import {
  updateTotalProgress,
  updateUserProgress,
} from "../../../api/userCourses_api";
import { useUserData } from "../../../hooks/useUserData";
import {
  exerciseProgress,
  totalProgress,
} from "../../../utils/progressCalculator/progressCalculator";

type MyProgress = {
  setIsOpenedMyProgress: (arg: boolean) => void;
  workout: WorkoutType;
  setWorkout: (arg: WorkoutType) => void;
};

export default function MyProgressModal({
  setIsOpenedMyProgress,
  workout,
  setWorkout,
}: MyProgress) {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [progressData, setProgressData] = useState<{ [key: string]: string }>(
    {},
  );
  const [allFieldsFilled, setAllFieldsFilled] = useState<boolean>(false);

  const { userCourses } = useUserCourses();
  const { user } = useUserData();

  useEffect(() => {
    const allFilled = workout.exercises.every(
      (exercise) =>
        progressData[exercise.name] !== undefined &&
        progressData[exercise.name] !== "",
    );
    setAllFieldsFilled(allFilled);
  }, [progressData, workout.exercises]);

  function handleClickSaveProgress() {
    const exercisesData = workout.exercises.map((el) => {
      const progressKey = Object.keys(progressData).find(
        (key) => key === el.name,
      )!;

      const quantity = workout.exercises.find(
        (elem) => elem.name === el.name,
      )!.quantity;

      let progressValue;

      if (quantity === 0 && el.progress === 0) {
        progressValue = 100;
      } else {
        progressValue = exerciseProgress(
          quantity,
          Number(progressData[progressKey]),
        );
      }

      return {
        name: el.name,
        progress: progressValue || 100,
        quantity: quantity || 0,
      };
    });

    const currentCourse = userCourses.find((element) =>
      element.workouts?.find((elem) => elem._id === workout._id),
    );
    const workoutId = currentCourse!.workouts.find(
      (element) => element._id === workout._id,
    )?._id;

    const newWorkoutData: UserWorkoutType = {
      _id: String(workoutId),
      exercises: exercisesData,
    };

    const newWorkouts = currentCourse?.workouts.map((element) =>
      String(element._id) === String(workoutId)
        ? (element = newWorkoutData)
        : element,
    );

    const courseId = currentCourse!._id;
    const newTotalProgress = newWorkouts!
      .map((item) => item.exercises.map((element) => element.progress))
      .flat();

    if (newWorkouts) {
      updateUserProgress(user!.id, courseId!, newWorkouts);
      updateTotalProgress(user!.id, courseId!, totalProgress(newTotalProgress));
      setIsSuccess(true);
      setWorkout({
        name: workout.name,
        _id: workout._id,
        exercises: exercisesData,
        video: workout.video,
      });
    }

    setTimeout(() => {
      setIsOpenedMyProgress(false);
      setIsSuccess(false);
    }, 1000);
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    if (/^\d*\.?\d*$/.test(value)) {
      const updatedValue =
        value === "" ? "" : Math.min(Number(value), 100).toString();

      setProgressData({
        ...progressData,
        [name]: updatedValue,
      });
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-20">
      <div className="flex-col justify-center rounded-[30px] bg-white">
        {isSuccess ? (
          <>
            <div className="flex w-[343px] flex-col items-center justify-center p-[40px] sm:w-[426px]">
              <h1 className="mb-[34px] text-center text-[32px] sm:text-[40px]">
                Ваш прогресс засчитан!
              </h1>
              <svg className="h-[68px] w-[68px]">
                <use xlinkHref="/public/icons/sprite.svg#icon-done" />
              </svg>
            </div>
          </>
        ) : (
          <div className="w-[343px] p-[40px] sm:w-[426px]">
            <div>
              <h1 className="mb-[48px] flex justify-start text-[32px]">
                Мой прогресс
              </h1>
            </div>
            <div className="overflow-hidden scroll-smooth">
              <div className="h-[364px] overflow-y-scroll scroll-smooth">
                {workout.exercises?.map((el, index) => (
                  <div key={index} className="mr-[20px]">
                    <p className="mb-[10px] rounded-xl text-[16px] sm:text-[18px]">
                      {el.name}
                    </p>
                    <input
                      name={el.name}
                      value={progressData[el.name] || ""}
                      onChange={(e) => handleInputChange(e)}
                      className="border-colorBorderBtn mb-[20px] h-[47px] w-[237px] rounded-lg border-[1px] p-[20px] text-[18px] opacity-75 sm:w-[288px]"
                      type="number"
                      placeholder={String(el.quantity)}
                      min="0"
                      max="100"
                      pattern="[0-9]*"
                      inputMode="numeric"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex content-center items-center justify-center">
              <button
                onClick={handleClickSaveProgress}
                className={`mt-[24px] block w-full rounded-[30px] text-[18px] active:bg-black active:text-white ${allFieldsFilled ? "bg-mainColor hover:bg-mainHover" : "bg-[#F7F7F7] text-[#999999]"}`}
                type="button"
                disabled={!allFieldsFilled}
              >
                <p className="my-[16px]">Сохранить</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
