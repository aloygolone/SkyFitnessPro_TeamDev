import "../../../css/style.css";

export default function Exercises() {
  const testArr = [
    { info: "Наклоны вперед", progress: " 0%" },
    { info: "Наклоны назад", progress: " 2%" },
    { info: "Поднятие ног, согнутых в коленях", progress: " 23%" },
    { info: "Наклоны вперед", progress: " 21%" },
    { info: "Наклоны вперед", progress: " 42%" },
    { info: "Наклоны назад", progress: " 3%" },
    { info: "Поднятие ног, согнутых в коленях", progress: " 12%" },
    { info: "Поднятие ног, согнутых в коленях", progress: " 13%" },
    { info: "Поднятие ног, согнутых в коленях", progress: " 23%" },
  ];
  return (
    <div className="bg-white  rounded-3xl w-widthBlockExercises h-heightBlockExercises">
      <div className="p-10 w-ExercisesW2 h-ExercisesH2">
        <h1 className="text-3xl mb-5">Упражнения тренировки 2</h1>
        <div className="flex flex-wrap">
          {testArr.map((el, index) => {
            return (
              <p className="w-80 mb-9" key={index}>
                {el.info}
                {el.progress}
              </p>
            );
          })}
        </div>
        <button className="rounded-3xl h-12 w-72 bg-mainColor mt-2 text-xl">
          Заполнить свой прогресс
        </button>
      </div>
    </div>
  );
}
