import { ChangeEvent, useState } from "react";
import "../../../css/style.css";
import { ExerciseType } from "../../../types";
import { updateUserProgress } from "../../../api/userCourses_api";

type MyProgress = {
  setIsOpenedMyProgress: (arg: boolean) => void;
  exercises: ExerciseType[];
  userId: string;
  workoutId: string;
  courseId: string;
};

export default function MyProgressModal({
  setIsOpenedMyProgress,
  exercises,
  userId,
  workoutId,
  courseId,
}: MyProgress) {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [progressData, setProgressData] = useState<{ [key: string]: number }>(
    {},
  );

  function handleClickSaveProgress() {
    const exercisesData = exercises.map((el) => {
      const progressKey = Object.keys(progressData).find(
        (key) => key === el.name,
      )!;
      const progressValue = progressData[progressKey];
      const quantity = exercises.find(
        (elem) => elem.name === el.name,
      )?.quantity;

      return {
        name: el.name,
        progress: progressValue,
        quantity: quantity || 0,
      };
    });

    console.log(exercisesData);

    if (exercisesData) {
      updateUserProgress(userId, courseId, workoutId, exercisesData);
      setIsSuccess(true);
    } else {
      alert("Заполните все поля.");
      /*  URL.then((response) => setSaveProgress(!isSuccess)) */
    }

    setTimeout(() => {
      setIsOpenedMyProgress(false);
      setIsSuccess(false);
    }, 2000);
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    const updatedValue = Number(value) > 100 ? 100 : Number(value);
    setProgressData({
      ...progressData,
      [name]: updatedValue,
    });
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
                {exercises?.map((el, index) => (
                  <div key={index} className="mr-[20px]">
                    <p className="mb-[10px] rounded-xl text-[16px] sm:text-[18px]">
                      {el.name}
                    </p>
                    <input
                      name={el.name}
                      value={progressData.progress}
                      onChange={(e) => handleInputChange(e)}
                      className="border-colorBorderBtn mb-[20px] h-[47px] w-[237px] rounded-lg border-[1px] p-[20px] text-[18px] opacity-75 sm:w-[288px]"
                      type="number"
                      placeholder={String(el.quantity)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex content-center items-center justify-center">
              <button
                onClick={handleClickSaveProgress}
                className="mt-[24px] block w-full rounded-[30px] bg-mainColor text-[18px] hover:bg-mainHover"
                type="button"
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
