// import { useState } from "react";
import CourseCard from "../../components/Common/CourseCard/CourseCard";
import Header from "../../components/Common/Header/Header";
import { database } from "../../api/firebase_api";
import { useEffect, useState } from "react";
import { child, get, ref } from "firebase/database";

interface CourseTypeId {
  id: string;
  title: string;
}

export default function MainPage() {
  // const [courses, setCourses] = useState<CourseType[]>();
  // const { courses, setCourses } = useCourses();
  const page = "CorrectForTextPage";
  const [courses, setCourses] = useState<CourseTypeId[]>([]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const snapshot = await get(child(ref(database), "courses"));
        if (snapshot.exists()) {
          const coursesData = snapshot.val();
          const coursesArray = Object.keys(coursesData).map((key) => ({
            id: key,
            title: coursesData[key].title,
          }));
          setCourses(coursesArray);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getCourses();
  }, []); 
  // useEffect(() => {
  //   getCoursesApi() функция API получения курсов с базы
  //     .then((courses) => {
  //       setCourses(courses.courses);
  //
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  // }, []);
  // const courseData = [
  //   {
  //     courseName: "Йога",
  //     totalProgress: 40,
  //     imgSrc: "/public/images/images_small/yoga_female_sm.png",
  //   },
  //   {
  //     courseName: "Стретчинг",
  //     totalProgress: 0,
  //     imgSrc: "/public/images/images_small/stretching_female_sm.png",
  //   },
  //   {
  //     courseName: "Зумба",
  //     totalProgress: 100,
  //     imgSrc: "/public/images/images_small/zumba_female_sm.png",
  //   },
  // ];
  return (
    <>
      <div className="">
        <Header page={page} />
        <div className="flex items-center justify-between">
          <h1 className="inline-block text-left align-middle text-3xl/[35.2px] font-medium md:text-pretty md:text-6xl/[60px]">
            Начните заниматься спортом и улучшите качество жизни
          </h1>
          <div className="hidden flex-col items-center md:flex">
            <div className="rounded-[5px] bg-mainColor px-[16px] py-[20px] text-3xl/[35.2px]  font-normal md:w-[288px] md:h-[102px]">
              Измени своё <br /> тело за полгода!
            </div>
            <svg className="absolute mt-[85px] h-[36px] w-[31px]">
              <use xlinkHref="./public/icons/sprite.svg#icon-polygon-for-slogan" />
            </svg>
          </div>
        </div>
        <CourseCard isMainPage={true} />
        <div className="flex justify-end md:justify-center">
        {courses.map((course) => (
          <li key={course.id}>{course.title}</li>
        ))}
          <div
            className="text-lg/[19.8px] mb-[29px] mt-[24px] justify-center rounded-buttonRadius bg-mainColor px-btnX py-btnY text-center font-defaultFont font-normal text-black hover:bg-mainHover md:mb-[81px] md:mt-[34px] md:flex"
            onClick={() => window.scrollTo(0, 0)}
          >
            Наверх ↑
          </div>
        </div>
      </div>
    </>
  );
}
