/* import Header from "../components/Common/Header"; */
import CourseCard from "../../components/Common/CourseCard/CourseCard";
import Exercises from "../../components/OtherComponents/Exercises/Exercises";
import MyProgressModal from "../../components/OtherModals/MyProgressModal/MyProgressModal";
import WorkoutModal from "../../components/OtherModals/WorkoutModal/WorkoutModal";

export default function CoursePage() {
  const objCard = [
    { id: 1, name: "Йога", progress: 40 },
    { id: 2, name: "Стретчинг", progress: 0 },
    { id: 3, name: "Зумба", progress: 100 },
  ];

  const IsMainPage = true;
  return (
    <>
      <div className="bg-black">
        <p className="mb-[40px] text-3xl text-sky-50">Мои курсы</p>
        <div className="flex justify-between">
          {objCard.map((el) => (
            <CourseCard
              id={el.id}
              key={el.id}
              cursName={el.name}
              progress={el.progress}
              url={IsMainPage}
            />
          ))}
        </div>
        <Exercises />
        <WorkoutModal />
        <MyProgressModal />
      </div>
    </>
  );
}
