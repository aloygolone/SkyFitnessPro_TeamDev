import { useState } from "react";
import "../../../css/style.css";

const CourseData = [
  {
    id: 1,
    courseName: "Йога",
    totalProgress: 40,
    imgSrc: "/public/images/images_small/yoga_female_sm.png",
  },
  {
    id: 2,
    courseName: "Стретчинг",
    totalProgress: 0,
    imgSrc: "/public/images/images_small/stretching_female_sm.png",
  },
  {
    id: 3,
    courseName: "Зумба",
    totalProgress: 100,
    imgSrc: "/public/images/images_small/zumba_female_sm.png",
  },
];

interface TooltipState {
  [key: number]: boolean;
}

export default function CourseCard({ isMainPage }: { isMainPage: boolean }) {
  const [showTooltips, setShowTooltips] = useState<TooltipState>({});

  const handleMouseEnter = (id: number) => {
    setShowTooltips((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: number) => {
    setShowTooltips((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <>
      <div className="mt-[40px] flex flex-wrap justify-center gap-[40px] sm:mt-[50px] sm:justify-center md:justify-center lg:justify-start">
        {CourseData.map((el, index) => (
          <div
            key={index}
            className="rounded-[30px] bg-bgColor shadow-blockShadow"
          >
            <div className="relative mb-[24px]">
              <img
                className="rounded-[30px] object-contain"
                src={el.imgSrc}
                alt=""
              />
              <div className="absolute right-0 top-0">
                {isMainPage ? (
                  <div className="relative inline-block cursor-pointer">
                    <svg
                      className="m-[20px] h-[32px] w-[32px]"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                    >
                      <use xlinkHref="/public/icons/sprite.svg#icon-plus" />
                    </svg>
                    {showTooltips[index] && (
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
                {el.courseName}
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
                      Прогресс {el.totalProgress}%
                    </p>
                    <progress
                      className="inline-block h-[6px] w-full appearance-none align-middle"
                      value={el.totalProgress}
                      max="100"
                    ></progress>
                  </div>
                  <button className="mb-[15px] mt-[34px] block w-full rounded-[30px] bg-mainColor text-[18px] hover:bg-mainHover">
                    <h2 className="mx-[68px] my-[16px]">
                      {el.totalProgress === 0 && "Начать тренировку"}
                      {el.totalProgress === 100 && "Начать заново"}
                      {el.totalProgress > 0 &&
                        el.totalProgress !== 100 &&
                        "Продолжить"}
                    </h2>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
