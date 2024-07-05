import "../../css/style.css";
import { WorkoutCursList } from "./WorkoutCursList/WorkoutCursList";

export default function WorkoutModal() {
    return (
        <div className=" h-workoutH w-workoutW bg-white rounded-3xl flex justify-center">
            <div className="p-10 w-96 ">
                <div>
                    <h1 className="mb-12 text-2xl flex justify-center">
                        Выберите тренировку
                    </h1>
                </div>
                <div className="overflow-hidden scroll-smooth h-heightCursArr2">
                    <div className="scroll-smooth overflow-y-scroll h-heightCursArr">
                        <WorkoutCursList />
                    </div>
                </div>
                <div className="flex justify-center items-center content-center">
                    <button className="rounded-3xl h-12 w-72 bg-colorGreen mt-6 text-xl">
                        Начать
                    </button>
                </div>
            </div>
        </div>
    );
}
