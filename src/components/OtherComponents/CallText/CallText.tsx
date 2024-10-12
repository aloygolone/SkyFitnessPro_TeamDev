import { useEffect, useState } from "react";
import { useUserData } from "../../../hooks/useUserData";
import { fetchAddFavoriteCourseToUser } from "../../../api/userCourses_api";
import { useParams } from "react-router-dom";
import { useUserCourses } from "../../../hooks/useUserCourses";

type CallTextType = {
  setIsOpenedSigninForm: (arg: boolean) => void;
};

export default function CallText({ setIsOpenedSigninForm }: CallTextType) {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const { id } = useParams() as { id: string };
  const { user } = useUserData();
  const { userCourses } = useUserCourses();

  useEffect(() => {
    setIsAuthorized(!!user);
  }, [user]);

  const handleAddCourse = () => {
    if (user) {
      fetchAddFavoriteCourseToUser(user.id, id);
    }
  };

  function handleOpenSigninForm() {
    setIsOpenedSigninForm(true);
  }

  const isCourseAdded = userCourses.some((course) => course._id === id);

  return (
    <div className="rounded-blockRadius container absolute top-[95px] z-40 mx-auto mb-10 mt-20 flex overflow-hidden shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)] md:relative">
      <div className="container relative flex flex-col p-7">
        <h2 className="text-3xl font-medium md:text-6xl">
          Начните путь <br /> к новому телу
        </h2>
        <ul className="list-disc py-7 pl-7 text-lg/8 font-normal md:text-2xl">
          <li>проработка всех групп мышц</li>
          <li>тренировка суставов</li>
          <li>улучшение циркуляции крови</li>
          <li>упражнения заряжают бодростью</li>
          <li>помогают противостоять стрессам</li>
        </ul>
        <div>
          {isCourseAdded ? (
            <button
              className="w-full cursor-not-allowed rounded-buttonRadius bg-gray-400 py-inptY font-defaultFont text-base/5 font-normal text-white md:w-1/3"
              disabled
            >
              Курс уже добавлен
            </button>
          ) : (
            <button
              className="w-full rounded-buttonRadius bg-mainColor py-inptY font-defaultFont text-base/5 font-normal hover:bg-mainHover md:w-1/3"
              onClick={isAuthorized ? handleAddCourse : handleOpenSigninForm}
              type="button"
            >
              {isAuthorized ? "Добавить курс" : "Войдите, чтобы добавить курс"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
