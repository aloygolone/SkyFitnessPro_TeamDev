import { useEffect, useState } from "react";
import "../../../css/style.css";
import { ExerciseType } from "../../../types";
// import { useCourses } from "../../../hooks/useCourses";

type Exercises = {
  setIsOpenedMyProgress: (arg: boolean) => void;
  exercises: ExerciseType[];
};

export default function Exercises({
  setIsOpenedMyProgress,
  exercises,
}: Exercises) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  // const { courses } = useCourses();
  // const trainingNumber = courses
  //   .find((el) => el.workouts._id === workout._id)
  //   .indexOf(workout._id);

  useEffect(() => {
    setIsButtonDisabled(exercises.length === 0);
  }, [exercises]);

  function handleClick() {
    if (!isButtonDisabled) {
      setIsOpenedMyProgress(true);
    }
  }

  return (
    <div className="rounded-[30px] bg-white p-[40px] shadow-blockShadow">
      <h1 className="mb-[20px] text-[32px]">Упражнения тренировки</h1>
      <div className="mb-[40px] grid grid-cols-1 gap-x-[60px] gap-y-[24px] md:grid-cols-3 md:gap-y-[20px]">
        {exercises?.map((item, index) => (
          <div key={index} className="flex flex-col">
            <p className="font-roboto text-[18px] font-normal">
              {item.name} 50%
            </p>
            <progress
              className="mt-[10px] block h-[6px] w-full"
              value={50}
              max="100"
            ></progress>
          </div>
        ))}
      </div>

      <button
        onClick={handleClick}
        type="button"
        disabled={isButtonDisabled}
        className={`rounded-[30px] text-[18px] ${isButtonDisabled ? "cursor-not-allowed bg-gray-300 text-gray-600" : "bg-mainColor hover:bg-mainHover active:bg-black active:text-bgColor"}`}
      >
        <p className="mx-[37px] my-[16px]">Заполнить свой прогресс</p>
      </button>
    </div>
  );
}
