import { courseLogoSrc } from "../../../lib/courseSettings";

type CourseLogoType = {
  courseName?: string;
};

export default function CourseLogo({ courseName }: CourseLogoType) {
  const matchedCourse = courseLogoSrc.find(
    (el) => el.courseName === courseName);
  return (
    <>
      <div
        className={`rounded-blockRadius container mx-auto md:my-l0 bg-${matchedCourse?.bgColor} `}>
        <div className="marker p-30 mx-auto flex h-80 items-start">
          <div className=" md:w-1/3 md:pr-[800px]">
            <h2 className="hidden p-xl m-10 whitespace-nowrap font-defaultFont text-7xl font-normal text-white md:flex "  >
              {matchedCourse?.courseName}
            </h2>
          </div>
          <div
            className={` rounded-blockRadius  h-full w-full bg-cover `}>
            {/* bg-center bg-${matchedCourse!.imgSrc} md:bg-${matchedCourse!.imgSrcHD} */}
            <img
              className="rounded-blockRadius h-full"
              src={matchedCourse?.imgSrc}
            />
          </div>
        </div>
      </div>
    </>
  );
}

