import "../../../css/style.css";
import { WorkoutCursList } from "../WorkoutCursList/WorkoutCursList";

export default function WorkoutModal() {
  return (
    <div className="flex h-[608px] w-[460px] justify-center rounded-3xl bg-white">
      <div className="w-[384px] p-[40px]">
        <div>
          <h1 className="mb-[48px] flex justify-center text-3xl">
            Выберите тренировку
          </h1>
        </div>
        <div className="h-[446px]">
          <div className="overflow-hidden scroll-smooth">
            <div className="h-[364px] overflow-y-scroll scroll-smooth">
              <WorkoutCursList />
            </div>
          </div>
          <div className="flex content-center items-center justify-center">
            <button className="mt-[24px] h-[48px] w-[288px] rounded-3xl bg-mainColor text-xl">
              Начать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
