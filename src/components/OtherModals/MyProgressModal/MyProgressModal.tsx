import "../../../css/style.css";

export default function MyProgressModal() {
  const testArr = [
    { id: 1, title: "Сколько раз вы сделали наклоны вперед?" },
    { id: 2, title: "Сколько раз вы сделали наклоны назад?" },
    {
      id: 3,
      title: "Сколько раз вы сделали поднятие ног, согнутых в коленях?",
    },
    { id: 4, title: "Сколько раз вы сделали приседаний?" },
  ];
  return (
    <div className="flex h-[596px] w-[426px] justify-center rounded-3xl bg-white">
      <div className="w-[384px] p-[40px]">
        <div>
          <h1 className="mb-[48px] flex justify-start text-3xl">
            Мой прогресс
          </h1>
        </div>
        <div className="h-[364px] overflow-hidden scroll-smooth">
          <div className="h-[380px] overflow-y-scroll scroll-smooth">
            {testArr.map((el) => {
              return (
                <div key={el.id}>
                  <p className="mb-[10px] rounded-xl">{el.title}</p>
                  <input
                    className="border-colorBorderBtn mb-[20px] h-[48px] w-[288px] rounded-lg border-[1px] p-[20px] text-lg"
                    type="number"
                    placeholder="0 - 1000"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex content-center items-center justify-center">
          <button className="mt-[24px] h-[48px] w-[288px] rounded-3xl bg-mainColor">
            <p className="text-xl">Сохранить</p>
          </button>
        </div>
      </div>
    </div>
  );
}
