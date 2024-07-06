/* import Header from "../components/Common/Header"; */
import CourseCard from "../components/Common/CourseCard";
import Exercises from "../components/OtherComponents/Exercises";
import MyProgressModal from "../components/OtherModals/MyProgressModal";
import WorkoutModal from "../components/OtherModals/WorkoutModal";

export default function CoursePage() {
    const objCard = [
        { id: 1, name: "Йога", progress: 40 },
        { id: 2, name: "Стретчинг", progress: 0 },
        { id: 3, name: "Зумба", progress: 100 },
    ];
  return (<><div className="w-cardBlockWidth h-cardBlockHeight flex flex-col justify-center">
  <p className="flex flex-row text-3xl text-sky-50 mb-10">
      Мои курсы
  </p>
  <div className="flex justify-between">
      {objCard.map((el) => (
          <CourseCard
              id={el.id}
              key={el.id}
              cursName={el.name}
              progress={el.progress}
          />
      ))}
  </div>
</div>
<Exercises/>
<WorkoutModal/>
<MyProgressModal/>
</>)
}