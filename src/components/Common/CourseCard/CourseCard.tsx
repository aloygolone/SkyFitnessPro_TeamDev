import { useEffect, useState } from "react";
import "../../../css/style.css";
import { courseLogoSrc } from "../../../lib/courseSettings";
import { Link } from "react-router-dom";
import { getCourses } from "../../../api/courses_api";
import {
  deleteMatchedCourse,
  fetchAddFavoriteCourseToUser,
  
} from "../../../api/userCourses_api";
import { useUserData } from "../../../hooks/useUserData";
import { CourseType } from "../../../types";
import WorkoutModal from "../../OtherModals/WorkoutModal/WorkoutModal";

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

  const [addedCourse, setAddedCourse] = useState<string[]>([]);

  const [courses, setCourses] = useState<CourseType[]>();

  const { user } = useUserData();

  const [courseId, setCourseId] = useState<string>("");

  const handleMouseEnter = (id: number) => {
    setShowTooltips((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: number) => {
    setShowTooltips((prev) => ({ ...prev, [id]: false }));
  };

  useEffect(() => {
    getCourses().then((data) => {
      setCourses(data);
    });
  });

  const handleAddCourse = (id: string) => {
    if (user) {
      fetchAddFavoriteCourseToUser(user.id, id)
      setAddedCourse([...id])
    } else {
      alert("Войдите, чтобы добавить курс");
    }
  };

  const handleDeleteCourse = (id: string) => {
    deleteMatchedCourse(user!.id, id);
  };

  // useEffect(() => {
  //   if (user) {
  //     getAddedCourseOfUser(user.id).then((data) => {
  //       if (data) {
  //         setAddedCourse(data);
  //       }
  //     });
  //   }
  // });

  // useEffect(() => {
  //   if (user && !isMainPage) {
  //     getAddedCourseOfUser(user.id).then((data) => {
  //       const addedCourses = courses?.filter((el) => data.includes(el._id))
  //       setCourses()
  //       setAddedCourse(data);
  //     });
  //   }
  // })

  const handleStartWorkout = (id: string) => {
    setCourseId(id);
    setIsOpenedWorkoutModal(true);
  };

  return (
    <>
      <div className="mt-[50px] flex flex-wrap justify-center gap-[40px] sm:justify-center md:justify-center lg:justify-start">
        {courses?.map((el, index) => (
          <div
            key={index}
            className="rounded-[30px] bg-bgColor shadow-blockShadow"
          >
            <div className="relative mb-[24px]">
              <Link to={`/course/${el._id}`}>
                <img
                  className="rounded-[30px] object-contain"
                  src={courseLogoSrc.find((el) => el.id === index)?.imgSrc}
                  alt=""
                />
              </Link>
              <div className="absolute right-0 top-0">
                {isMainPage ? (
                  <div className="relative inline-block cursor-pointer">
                    {addedCourse.includes(el._id) && (
                      <svg className="m-[20px] h-[32px] w-[32px]">
                        <use xlinkHref="/public/icons/sprite.svg#icon-done" />
                      </svg>
                    )}
                    {!addedCourse.includes(el._id) && (
                      <svg
                        className="m-[20px] h-[32px] w-[32px]"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        onClick={() => handleAddCourse(el._id)}
                      >
                        <use xlinkHref="/public/icons/sprite.svg#icon-plus" />
                      </svg>
                    )}
                    {showTooltips[index] && !addedCourse && (
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
                      Прогресс {0}%
                    </p>
                    <progress
                      className="inline-block h-[6px] w-full appearance-none align-middle"
                      value={0}
                      max="100"
                    ></progress>
                  </div>
                  <button
                    onClick={() => handleStartWorkout(el._id)}
                    className="mb-[15px] mt-[34px] block w-full rounded-[30px] bg-mainColor text-[18px] hover:bg-mainHover"
                    type="button"
                  >
                    <h2 className="mx-[68px] my-[16px]">
                      {"Начать тренировку"}
                      {/* {el.totalProgress === 100 && "Начать заново"}
                      {el.totalProgress > 0 &&
                        el.totalProgress !== 100 &&
                        "Продолжить"} */}
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
