
import CourseCard from "../../components/Common/CourseCard/CourseCard";
import Header from "../../components/Common/Header/Header";
import UserProfile from "../../components/OtherComponents/UserProfile/UserProfile";


export default function UserProfilePage() {
  return (
    <>
      <div>
        <Header page={""} />
        <UserProfile/>
        <h2
          className="mb-10 ml-8 text-[40px] sm:text-[26px] md:text-[32px] font-semibold leading-[44px]">
          Мои курсы
        </h2>
        <CourseCard isMainPage={false} />
      </div>
    </>
  );
}
