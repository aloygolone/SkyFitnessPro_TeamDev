import "../../../css/style.css";
/* import { useState } from "react"; */

type FiltersItemType = {
  id: number;
  cursName: string;
  progress: number;
  url: boolean;
};

export default function CourseCard({
  id,
  cursName,
  progress,
  url,
}: FiltersItemType) {
  function setImg() {
    if (cursName === "Йога") {
      return "yoga_female_sm.png";
    } else if (cursName === "Стретчинг") {
      return "stretching_female_sm.png";
    } else {
      return "zumba_female_sm.png";
    }
  }

  return (
    <>
      <div className={`rounded-3xl bg-white`} key={id}>
        <div className="relative mb-[24px]">
          <img
            className="rounded-3xl object-contain"
            src={`/images/images_small/${setImg()}`}
            alt=""
          />
          <div className="absolute right-0 top-0">
            {url ? (
              <svg className="m-[20px] h-[32px] w-[32px] cursor-default">
                <use xlinkHref="/public/icons/sprite.svg#icon-minus" />
              </svg>
            ) : (
              <svg className="m-[20px] h-[32px] w-[32px] cursor-default">
                <use xlinkHref="/public/icons/sprite.svg#icon-plus" />
              </svg>
            )}
          </div>
        </div>

        <div className="mx-[32px] flex list-none flex-col rounded-[12px]">
          <div>
            <h1 className="mb-[2px] flex flex-row text-3xl">{cursName}</h1>
            <div className="mb-[2px] flex w-[288px] flex-wrap">
              <div className="m-[6px] flex content-center items-center">
                <svg className="m-[8px] h-[15px] w-[15px]">
                  <use xlinkHref="/public/icons/sprite.svg#icon-calendar" />
                </svg>
                <p className="text-base">25 дней</p>
              </div>
              <div className="m-[6px] flex content-center items-center">
                <svg className="m-[8px] h-[15px] w-[15px]">
                  <use xlinkHref="/public/icons/sprite.svg#icon-clockface" />
                </svg>
                <p className="text-base">20-50 мин/день</p>
              </div>
              <div className="m-[6px] flex content-center items-center">
                <svg className="m-[8px] h-[15px] w-[15px]">
                  <use xlinkHref="/public/icons/sprite.svg#icon-difficult-full" />
                </svg>
                <p className="text-base">Сложность</p>
              </div>
            </div>

            {url && (
              <div className="mb-[40px]">
                <p className="flex justify-start bg-bgColor text-lg">
                  Прогресс {progress}%
                </p>
                <progress
                  className="inline-block h-[6px] w-[288px] appearance-none align-middle"
                  value={progress}
                  max="100"
                ></progress>
              </div>
            )}
          </div>
          {url && (
            <button className="flex h-[48px] w-[288px] content-center items-center justify-center rounded-3xl bg-mainColor text-xl">
              <h2>
                {progress === 0 && "Начать тренировку"}
                {progress === 100 && "Начать заново"}
                {progress > 0 && progress !== 100 && "Продолжить"}
              </h2>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
