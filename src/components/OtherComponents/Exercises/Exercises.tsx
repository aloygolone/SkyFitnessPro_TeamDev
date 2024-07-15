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
    <div className="mt-[40px] flex rounded-3xl bg-white">
      <div className="p-[40px]">
        <h1 className="mb-[20px] text-3xl">Упражнения тренировки 2</h1>
        <div className="mb-[40px] flex flex-wrap">
          {testArr.map((el, index) => {
            return (
              <p
                className="mb-[20px] mr-[160px] h-[20px] w-[320px]"
                key={index}
              >
                {el.info}
                {el.progress}
              </p>
            );
          })}
        </div>
        <button className="mt-[8px] h-[48px] w-[288px] rounded-3xl bg-mainColor text-xl">
          Заполнить свой прогресс
        </button>
      </div>
    </div>
  );
}
