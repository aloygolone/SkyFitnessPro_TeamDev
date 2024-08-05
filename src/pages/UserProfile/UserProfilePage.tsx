import { useEffect } from "react";
import CourseCard from "../../components/Common/CourseCard/CourseCard";
import Header from "../../components/Common/Header/Header";
import UserProfile from "../../components/OtherComponents/UserProfile/UserProfile";
import { useCourses } from "../../hooks/useCourses";
import { useUserData } from "../../hooks/useUserData";
import { getCourses } from "../../api/courses_api";

export default function UserProfilePage() {
  const { setCourses } = useCourses();
  const { user } = useUserData();

  useEffect(() => {
    if (user) {
      getCourses().then((data) => {
        setCourses(data);
      });
    }
  }, [setCourses, user]);

  return (
    <>
      <div>
        <Header page={""} />
        <UserProfile />
        <h2 className="mb-10 ml-8 text-[40px] font-semibold leading-[44px] sm:text-[26px] md:text-[32px]">
          Мои курсы
        </h2>
        <CourseCard isMainPage={false} />
      </div>
    </>
  );
}
