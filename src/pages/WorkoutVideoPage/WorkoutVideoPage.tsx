import Header from "../../components/Common/Header/Header";
import MyProgressModal from "../../components/OtherModals/MyProgressModal/MyProgressModal";
import Exercises from "../../components/OtherComponents/Exercises/Exercises";
import { getWorkouts } from "../../api/courses_api";
import { WorkoutType } from "../../types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserCourses } from "../../hooks/useUserCourses";
import { getAddedCourseOfUser } from "../../api/userCourses_api";
import { useUserData } from "../../hooks/useUserData";

export default function WorkoutVideoPage() {
  const [isOpenedMyProgress, setIsOpenedMyProgress] = useState<boolean>(false);
  const [isExistExercises, setIsExistExercises] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const { userCourses, setUserCourses } = useUserCourses();
  const { user } = useUserData();

  const [workout, setWorkout] = useState<WorkoutType>({
    name: "",
    _id: "",
    exercises: [{ name: "", progress: 0, quantity: 0 }],
    video: "",
  });

  useEffect(() => {
    const fetchUserCourses = async () => {
      if (user) {
        try {
          const data = await getAddedCourseOfUser(user.id);
          if (data) {
            setUserCourses(data);
          }
        } catch (error) {
          console.error("Курсы не загрузились:", error);
        }
      }
    };

    fetchUserCourses();
  }, [setUserCourses, user]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const data = await getWorkouts();
        const matchedWorkout = data.find((el) => el._id === id);
        const exercisesData = userCourses
          .find((element) => element.workouts?.some((elem) => elem._id === id))
          ?.workouts.find((e) => e._id === id)?.exercises;

        setIsExistExercises(!!exercisesData);
        setWorkout({
          name: matchedWorkout?.name || "",
          _id: matchedWorkout?._id || "",
          exercises: exercisesData || [],
          video: matchedWorkout?.video || "",
        });
      } catch (error) {
        console.error("Тренировки не загрузились:", error);
      }
    };

    fetchWorkouts();
  }, [id, userCourses]);

  return (
    <>
      <Header page={"NotCorrectForText"} />
      <div className="flex-start mt-[20px] flex flex-col">
        <p className="mb-[40px] w-[800px] border-b-[2px] border-black text-[32px]">
          {workout.name}
        </p>
      </div>
      <div className="mb-[40px] flex items-center justify-center bg-gray-100">
        <div className="aspect-w-16 aspect-h-9 relative max-h-[639px] w-full max-w-[1160px] overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="left-0 top-0 h-[639px] w-full"
            src={workout.video}
            title={workout.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {isExistExercises && (
        <Exercises
          setIsOpenedMyProgress={setIsOpenedMyProgress}
          exercises={workout.exercises}
        />
      )}
      {isOpenedMyProgress && (
        <MyProgressModal
          setIsOpenedMyProgress={setIsOpenedMyProgress}
          workout={workout}
          setWorkout={setWorkout}
        />
      )}
    </>
  );
}
