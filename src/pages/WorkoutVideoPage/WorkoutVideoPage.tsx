import Header from "../../components/Common/Header/Header";
import MyProgressModal from "../../components/OtherModals/MyProgressModal/MyProgressModal";
import Exercises from "../../components/OtherComponents/Exercises/Exercises";
import { useState } from "react";

export default function WorkoutVideoPage() {
  const [isOpenedMyProgress, setIsOpenedMyProgress] = useState<boolean>(false);

  const workoutProgress = [
    { id: 1, info: "Наклоны вперед", progress: 90 },
    { id: 2, info: "Наклоны назад", progress: 100 },
    { id: 3, info: "Поднятие ног, согнутых в коленях", progress: 100 },
    { id: 4, info: "Поднятие ног, согнутых в коленях", progress: 63 },
    { id: 5, info: "Наклоны вперед", progress: 42 },
    { id: 6, info: "Наклоны назад", progress: 93 },
    { id: 7, info: "Поднятие ног, согнутых в коленях", progress: 100 },
    { id: 8, info: "Наклоны вперед", progress: 100 },
    { id: 9, info: "Поднятие ног, согнутых в коленях", progress: 23 },
  ];

  const NameSelectedCourse = "Йога";
  const workoutNumber = "2";
  const paths = "Красота и здоровье / Йога на каждый день / 2 день";
  const page = "WorkoutVideoPage";

  return (
    <>
      <Header page={page} />
      <div className="flex-start mt-[20px] flex flex-col">
        <h1 className="mb-[24px] text-[60px] font-medium">
          {NameSelectedCourse}
        </h1>
        <p className="mb-[40px] w-[800px] border-b-[2px] border-black text-[32px]">
          {paths}
        </p>
      </div>
      <div className="mb-[40px] flex items-center justify-center bg-gray-100">
        <div className="aspect-w-16 aspect-h-9 relative max-h-[639px] w-full max-w-[1160px] overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="left-0 top-0 h-[639px] w-full"
            src="https://cdn.pixabay.com/video/2023/01/27/148212-793717957_large.mp4"
            title="Vidio training"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Exercises
        setIsOpenedMyProgress={setIsOpenedMyProgress}
        workoutProgress={workoutProgress}
        workoutNumber={workoutNumber}
      />
      {isOpenedMyProgress && (
        <MyProgressModal setIsOpenedMyProgress={setIsOpenedMyProgress} />
      )}
    </>
  );
}
