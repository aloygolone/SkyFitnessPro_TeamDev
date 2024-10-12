import { useEffect, useState } from "react";
import "../../../css/style.css";

import { getWorkouts } from "../../../api/courses_api";
import { useNavigate } from "react-router-dom";
import { WorkoutType } from "../../../types";
import { useCourses } from "../../../hooks/useCourses";
import { useUserCourses } from "../../../hooks/useUserCourses";

type WorkoutModalType = {
  setIsOpenedWorkoutModal: (arg: boolean) => void;
  id: string;
};

export default function WorkoutModal({
  setIsOpenedWorkoutModal,
  id,
}: WorkoutModalType) {
  const [training, setTraining] = useState<string>("");
  const { courses } = useCourses();
  const { userCourses } = useUserCourses();
  const [workouts, setWorkouts] = useState<WorkoutType[]>();

  const navigate = useNavigate();

  function handleSelectTraining(id: string) {
    setTraining(id);
  }

  function handleClickStart() {
    setIsOpenedWorkoutModal(false);
    navigate(`/userprofile/workout/${training}`);
  }

  useEffect(() => {
    getWorkouts().then((data) => {
      const matchedCourse = courses?.find((el) => el._id === id);
      const courseWorkouts = matchedCourse?.workouts;
      const matchedWorkouts = data.filter((element) =>
        courseWorkouts?.find((el) => el === element._id),
      );

      setWorkouts(matchedWorkouts);
    });
  }, [id, courses]);

  const isWorkoutCompleted = (workoutId: string): boolean => {
    const userCourse = userCourses.find((course) => course._id === id);
    if (!userCourse) return false;

    const userWorkout = userCourse.workouts.find(
      (workout) => workout._id === workoutId,
    );
    if (!userWorkout) return false;

    return userWorkout.exercises.every((exercise) => exercise.progress === 100);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-20">
      <div className="flex w-[343px] justify-center rounded-[30px] bg-white p-[30px] shadow-blockShadow sm:w-[460px] sm:p-[40px]">
        <div>
          <div className="mb-[34px] w-[283px] sm:mb-[48px] sm:w-[346px]">
            <h1 className="text-[32px]">Выберите тренировку</h1>
          </div>
          <div>
            <div className="w-[283px] overflow-hidden scroll-smooth sm:w-auto">
              <div className="flex h-[314px] flex-col overflow-y-scroll scroll-smooth sm:h-[354px]">
                {workouts?.map((el, index) => (
                  <div key={index} className="pb-[8px] sm:mb-[20px]">
                    {isWorkoutCompleted(el._id) ? (
                      <div className="pointer-events-none flex content-center items-center justify-start border-b-[1px] border-underLineColor sm:mb-[20px]">
                        <div>
                          <svg className="ml-[2px] mr-[12px] h-[20px] w-[20px]">
                            <use xlinkHref="/public/icons/sprite.svg#icon-done" />
                          </svg>
                        </div>
                        <div className="mr-[10px] sm:mb-[10px]">
                          <p className="text-[18px] text-zinc-500 sm:text-[24px]">
                            {el.name}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={() => handleSelectTraining(el!._id)}
                        className="border-b-[1px] border-underLineColor sm:mb-[20px]"
                      >
                        <div
                          className={`flex cursor-pointer content-center items-center justify-start ${training === el._id && `rounded-[8px] border-[2px] border-mainColor`}`}
                        >
                          <div>
                            <svg className="ml-[2px] mr-[12px] h-[20px] w-[20px]">
                              <use xlinkHref="/public/icons/sprite.svg#icon-not-done" />
                            </svg>
                          </div>
                          <div className="mr-[10px] sm:mb-[10px]">
                            <p className="text-[18px] sm:text-[24px]">
                              {el.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-[34px] flex content-center items-center justify-center">
              <button
                className={`block w-full rounded-[30px] text-[18px] active:bg-black active:text-white ${training !== "" ? "bg-mainColor hover:bg-mainHover" : "bg-[#F7F7F7] text-[#999999]"}`}
                disabled={training === null && true}
                onClick={handleClickStart}
                type="button"
              >
                <p className="my-[16px]">Начать</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
