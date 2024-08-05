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
  function handleClick() {
    setIsOpenedMyProgress(true);
  }

  const getProgressOrMax = exercises.find((item) => item.name)?.progress;

  return (
    <div className="rounded-[30px] bg-white p-[40px] shadow-blockShadow">
      <h1 className="mb-[20px] text-[32px]">Упражнения тренировки</h1>
      <div className="mb-[40px] grid grid-cols-1 gap-x-[60px] gap-y-[24px] md:grid-cols-3 md:gap-y-[20px]">
        {exercises?.map((item, index) => (
          <div key={index} className="flex flex-col">
            <p className="font-roboto text-[18px] font-normal">
              {item.name}
              {getProgressOrMax && getProgressOrMax > 100
                ? Math.min(getProgressOrMax, 100)
                : getProgressOrMax}
              %
            </p>
            <progress
              className="mt-[10px] block h-[6px] w-full"
              value={getProgressOrMax}
              max="100"
            ></progress>
          </div>
        ))}
      </div>

      <button
        onClick={handleClick}
        className="rounded-[30px] bg-mainColor text-[18px]"
        type="button"
      >
        <p className="mx-[37px] my-[16px]">Заполнить свой прогресс</p>
      </button>
    </div>
  );
}
