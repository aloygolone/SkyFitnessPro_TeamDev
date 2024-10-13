import { courseLogoSrc } from "../../../lib/courseSettings";

type CourseLogoProps = {
  courseName?: string;
};

export default function CourseLogo({ courseName }: CourseLogoProps) {
  const matchedCourse = courseLogoSrc.find(
    (el) => el.courseName === courseName,
  );

  if (!matchedCourse) {
    return null;
  }

  return (
    <div
      className={`rounded-blockRadius md:my-l0 container mx-auto bg-${matchedCourse.bgColor}`}
    >
      <div className="marker p-30 mx-auto flex h-80 items-start">
        <div className="md:w-1/3 md:pr-[800px]">
          <h2 className="p-xl m-10 hidden whitespace-nowrap font-defaultFont text-7xl font-normal text-white md:flex">
            {matchedCourse.courseName}
          </h2>
        </div>
        <div className="rounded-blockRadius h-full w-full bg-cover">
          <img
            className="rounded-blockRadius h-full"
            src={matchedCourse.imgSrc}
            alt={matchedCourse.courseName}
          />
        </div>
      </div>
    </div>
  );
}
