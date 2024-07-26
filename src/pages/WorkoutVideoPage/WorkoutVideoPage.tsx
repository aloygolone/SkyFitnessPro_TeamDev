import Header from "../../components/Common/Header/Header";
import MyProgressModal from "../../components/OtherModals/MyProgressModal/MyProgressModal";
import Exercises from "../../components/OtherComponents/Exercises/Exercises";
import { getWorkouts } from "../../api/courses_api";
import { WorkoutType } from "../../types";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function WorkoutVideoPage() {
  const [isOpenedMyProgress, setIsOpenedMyProgress] = useState<boolean>(false);
  const { id } = useParams();

  const [workout, setWorkout] = useState<WorkoutType>({
    name: "",
    _id: "",
    exercises: [{ name: "", progress: 0, quantity: 0 }],
    video: "",
  });

  getWorkouts().then((data) => {
    const matchedWorkout = data.find((el) => el._id === id);
    setWorkout({
      name: matchedWorkout!.name,
      _id: matchedWorkout!._id,
      exercises: matchedWorkout!.exercises,
      video: matchedWorkout!.video,
    });
  });

  return (
    <>
      <Header page={"NotCorrectForText"} />
      <div className="flex-start mt-[20px] flex flex-col">
        {/* <h1 className="mb-[24px] text-[60px] font-medium">{courseName}</h1> */}
        <p className="mb-[40px] w-[800px] border-b-[2px] border-black text-[32px]">
          {workout!.name}
        </p>
      </div>
      <div className="mb-[40px] flex items-center justify-center bg-gray-100">
        <div className="aspect-w-16 aspect-h-9 relative max-h-[639px] w-full max-w-[1160px] overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="left-0 top-0 h-[639px] w-full"
            src={workout!.video}
            title={workout!.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Exercises
        setIsOpenedMyProgress={setIsOpenedMyProgress}
        exercises={workout!.exercises}
      />
      {isOpenedMyProgress && (
        <MyProgressModal
          setIsOpenedMyProgress={setIsOpenedMyProgress}
          exercises={workout!.exercises}
        />
      )}
    </>
  );
}
