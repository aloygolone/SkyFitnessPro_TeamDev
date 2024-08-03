// import { useState } from "react";
import { useEffect } from "react";
import CourseCard from "../../components/Common/CourseCard/CourseCard";
import Header from "../../components/Common/Header/Header";
import { useCourses } from "../../hooks/useCourses";
import { getCourses } from "../../api/courses_api";

export default function MainPage() {
  const { setCourses } = useCourses();
  const page = "CorrectForTextPage";

  useEffect(() => {
    getCourses().then((data) => {
      setCourses(data);
    });
  }, [setCourses]);

  return (
    <>
      <div className="">
        <Header page={page} />
        <div className="flex items-center justify-between">
          <h1 className="inline-block text-left align-middle text-3xl/[35.2px] font-medium md:text-pretty md:text-6xl/[60px]">
            Начните заниматься спортом и улучшите качество жизни
          </h1>
          <div className="hidden flex-col items-center md:flex">
            <div className="rounded-[5px] bg-mainColor px-[16px] py-[20px] text-3xl/[35.2px] font-normal md:h-[102px] md:w-[288px]">
              Измени своё <br /> тело за полгода!
            </div>
            <svg className="absolute mt-[85px] h-[36px] w-[31px]">
              <use xlinkHref="./public/icons/sprite.svg#icon-polygon-for-slogan" />
            </svg>
          </div>
        </div>
        <CourseCard isMainPage={true} />
        <div className="flex justify-end md:justify-center">
          <div
            className="mb-[29px] mt-[24px] justify-center rounded-buttonRadius bg-mainColor px-btnX py-btnY text-center font-defaultFont text-lg/[19.8px] font-normal text-black hover:bg-mainHover md:mb-[81px] md:mt-[34px] md:flex"
            onClick={() => window.scrollTo(0, 0)}
          >
            Наверх ↑
          </div>
        </div>
      </div>
    </>
  );
}
