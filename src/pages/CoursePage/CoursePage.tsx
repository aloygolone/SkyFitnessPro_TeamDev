import Header from "../../components/Common/Header/Header";
import { useParams } from "react-router-dom";
import CourseLogo from "../../components/DataComponents/CourseLogo/CourseLogo";
import Directions from "../../components/DataComponents/Directions/Directions";
import FittingText from "../../components/DataComponents/FittingText/FittingTexts";
import CallText from "../../components/OtherComponents/CallText/CallText";
import LowStartMan from "../../components/OtherComponents/LowStartMan/LowStartMan";
import { useCourses } from "../../hooks/useCourses";
import { useEffect, useState } from "react";
import { getCourses } from "../../api/courses_api";
import SigninForm from "../../components/Common/SigninForm/SigninForm";
import SignupForm from "../../components/Common/SignupForm/SignupForm";

export default function CoursePage() {
  const { id } = useParams();
  const { courses, setCourses } = useCourses();
  const [isOpenedSigninForm, setIsOpenedSigninForm] = useState<boolean>(false);
  const [isOpenedSignupForm, setIsOpenedSignupForm] = useState<boolean>(false);

  useEffect(() => {
    getCourses().then((data) => {
      setCourses(data)
    })
  }, [setCourses])

  const courseData = courses.find((el) => el._id === id);
  return (
    <>
      <div className="md: container mx-auto flex flex-col">
        <Header page={"CorrectForTextPage"} />
        <CourseLogo courseName={courseData?.nameRU} />
        <FittingText fittings={courseData?.fitting} />
        <Directions directions={courseData?.directions} />
        <div className="relative">
          
          <LowStartMan />
          <CallText setIsOpenedSigninForm={setIsOpenedSigninForm}/>
        </div>
        {isOpenedSigninForm && (
            <SigninForm
              setIsOpenedSigninForm={setIsOpenedSigninForm}
              setIsOpenedSignupForm={setIsOpenedSignupForm}
            />
          )}
          {isOpenedSignupForm && (
            <SignupForm
              setIsOpenedSigninForm={setIsOpenedSigninForm}
              setIsOpenedSignupForm={setIsOpenedSignupForm}
            />
          )}
      </div>
    </>
  );
}	