import { useEffect, useState } from "react";
import "../../../css/style.css";
import { courseLogoSrc } from "../../../lib/courseSettings";
import { Link } from "react-router-dom";
import {
  deleteMatchedCourse,
  fetchAddFavoriteCourseToUser,
  getAddedCourseOfUser,
} from "../../../api/userCourses_api";
import { useUserData } from "../../../hooks/useUserData";
import WorkoutModal from "../../OtherModals/WorkoutModal/WorkoutModal";
import { useCourses } from "../../../hooks/useCourses";
import { CourseType } from "../../../types";
import { useUserCourses } from "../../../hooks/useUserCourses";

type CourseCardType = {
  isMainPage: boolean;
};

interface TooltipState {
  [key: number]: boolean;
}

export default function CourseCard({ isMainPage }: CourseCardType) {
  const [showTooltips, setShowTooltips] = useState<TooltipState>({});
  const [isOpenedWorkoutModal, setIsOpenedWorkoutModal] =
    useState<boolean>(false);

  const [filteredCourses, setFilteredCourses] = useState<CourseType[]>([]);

  const { userCourses, setUserCourses } = useUserCourses();

  const { courses } = useCourses();

  const { user } = useUserData();

  const [courseId, setCourseId] = useState<string>("");

  const handleMouseEnter = (id: number) => {
    setShowTooltips((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: number) => {
    setShowTooltips((prev) => ({ ...prev, [id]: false }));
  };

  const handleAddCourse = (id: string) => {
    if (user) {
      fetchAddFavoriteCourseToUser(user.id, id);
    } else {
      alert("Войдите, чтобы добавить курс");
    }
  };

  const handleDeleteCourse = (id: string) => {
    deleteMatchedCourse(user!.id, id);
  };

  useEffect(() => {
    if (user) {
      getAddedCourseOfUser(user.id).then((data) => {
        if (data) {
          setUserCourses(data);
        }
      });
    }
  });

  useEffect(() => {
    if (!isMainPage) {
      setFilteredCourses(
        courses.filter((element) =>
          userCourses.find((el) => el._id === element?._id),
        ),
      );
    } else {
      setFilteredCourses(courses);
    }
  }, [userCourses, courses, isMainPage]);

  const handleStartWorkout = (id: string) => {
    setCourseId(id);
    setIsOpenedWorkoutModal(true);
  };

  const setTotalProgress = (el: CourseType) => {
    return userCourses.find((element) => element._id === el._id)?.totalProgress;
  };

  return (
    <>
      <div className="mt-[50px] flex flex-wrap justify-center gap-[40px] bg-white sm:justify-center md:justify-center lg:justify-start">
        {filteredCourses?.map((el, index) => (
          <div
            key={index}
            className="rounded-[30px] bg-bgColor shadow-blockShadow"
          >
            <div className="relative mb-[24px]">
              <Link to={`/course/${el._id}`}>
                <img
                  className="rounded-[30px] object-contain"
                  src={
                    courseLogoSrc.find((element) => element.id === el._id)
                      ?.imgSrc
                  }
                  alt=""
                />
              </Link>
              <div className="absolute right-0 top-0">
                {isMainPage ? (
                  <div className="relative inline-block cursor-pointer">
                    {userCourses.find((element) => element._id === el._id) && (
                      <svg className="m-[20px] h-[32px] w-[32px] rounded-full border-[2px] border-white">
                        <use xlinkHref="/public/icons/sprite.svg#icon-done" />
                      </svg>
                    )}
                    {!userCourses.find((element) => element._id === el._id) && (
                      <svg
                        className="m-[20px] h-[32px] w-[32px]"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        onClick={() => handleAddCourse(el._id)}
                      >
                        <use xlinkHref="/public/icons/sprite.svg#icon-plus" />
                      </svg>
                    )}
                    {showTooltips[index] && !userCourses && (
                      <span className="absolute left-[64px] z-[1] whitespace-nowrap rounded-[5px] border-[1px] border-black bg-white p-[6px] pl-[20px] pr-[20px] text-center text-black">
                        Добавить курс
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="relative inline-block cursor-pointer">
                    <svg
                      className="m-[20px] h-[32px] w-[32px]"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                      onClick={() => handleDeleteCourse(el._id)}
                    >
                      <use xlinkHref="/public/icons/sprite.svg#icon-minus" />
                    </svg>
                    {showTooltips[index] && (
                      <span className="absolute left-[64px] z-[1] whitespace-nowrap rounded-[5px] border-[1px] border-black bg-white p-[6px] pl-[20px] pr-[20px] text-center text-black">
                        Удалить курс
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mx-[30px] flex flex-col">
              <h1 className="mb-[20px] flex flex-row text-[24px] sm:text-[32px]">
                {el.nameRU}
              </h1>
              <div className="mb-[20px] flex w-[288px] flex-wrap">
                <div className="m-x-[6px] m-y-[3px] flex content-center items-center p-[10px]">
                  <svg className="mr-[8px] h-[15px] w-[15px]">
                    <use xlinkHref="/public/icons/sprite.svg#icon-calendar" />
                  </svg>
                  <p className="text-[16px]">25 дней</p>
                </div>
                <div className="m-x-[6px] m-y-[3px] flex content-center items-center p-[10px]">
                  <svg className="mr-[8px] h-[15px] w-[15px]">
                    <use xlinkHref="/public/icons/sprite.svg#icon-clockface" />
                  </svg>
                  <p className="text-[16px]">20-50 мин/день</p>
                </div>
                <div className="m-x-[6px] m-y-[3px] flex content-center items-center p-[10px]">
                  <svg className="mr-[8px] h-[15px] w-[15px]">
                    <use xlinkHref="/public/icons/sprite.svg#icon-difficult-full" />
                  </svg>
                  <p className="text-[16px]">Сложность</p>
                </div>
              </div>

              {!isMainPage && (
                <div>
                  <div>
                    <p className="flex justify-start bg-bgColor text-[18px]">
                      Прогресс {setTotalProgress(el)}%
                    </p>
                    <progress
                      className="inline-block h-[6px] w-full appearance-none align-middle"
                      value={setTotalProgress(el)}
                      max="100"
                    ></progress>
                  </div>
                  <button
                    onClick={() => handleStartWorkout(el._id)}
                    className="mb-[15px] mt-[34px] block w-full rounded-[30px] bg-mainColor text-[18px] hover:bg-mainHover"
                    type="button"
                  >
                    <h2 className="mx-[68px] my-[16px]">
                      {setTotalProgress(el) === 0
                        ? "Начать тренировку"
                        : setTotalProgress(el) === 100
                          ? "Начать заново"
                          : "Продолжить"}
                    </h2>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        {isOpenedWorkoutModal && (
          <WorkoutModal
            setIsOpenedWorkoutModal={setIsOpenedWorkoutModal}
            id={courseId}
          />
        )}
      </div>
    </>
  );
}
