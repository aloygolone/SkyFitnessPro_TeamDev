import Header from "../../components/Common/Header/Header";
import { useParams } from "react-router-dom";
import CourseLogo from "../../components/DataComponents/CourseLogo/CourseLogo";
import Directions from "../../components/DataComponents/Directions/Directions";
import FittingText from "../../components/DataComponents/FittingText/FittingTexts";
import CallText from "../../components/OtherComponents/CallText/CallText";
import LowStartMan from "../../components/OtherComponents/LowStartMan/LowStartMan";
import { useCourses } from "../../hooks/useCourses";
import { useEffect } from "react";
import { getCourses } from "../../api/courses_api";

export default function CoursePage() {
  const { id } = useParams();
  const { courses, setCourses } = useCourses();

  useEffect(() => {
    getCourses().then((data) => {
      setCourses(data)
    })
  })

  const courseData = courses.find((el) => el._id === id);
  return (
    <>
      <div className="md: container mx-auto flex flex-col">
        <Header page={"CorrectForTextPage"} />
        <CourseLogo courseName={courseData.nameRU} />
        <FittingText fittings={courseData.fitting} />
        <Directions directions={courseData.directions} />
        <div className="relative">
          
          <LowStartMan />
          <CallText />
        </div>
      </div>
    </>
  );
}	