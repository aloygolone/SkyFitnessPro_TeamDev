import "../../../css/style.css";

export default function WorkoutModal() {
  const testArr = [
    {
      title: "Утренняя практика",
      description: "Йога на каждый день",
      day: 1,
      active: "finish",
    },
    {
      title: "Красота и здоровье",
      description: "Йога на каждый день",
      day: 2,
      active: "finish",
    },
    {
      title: "Асаны стоя",
      description: "Йога на каждый день",
      day: 3,
      active: "start",
    },
    {
      title: "Растягиваем мышцы бедра",
      description: "Йога на каждый день",
      day: 4,
      active: "start",
    },
    {
      title: "Гибкость спины",
      description: "Йога на каждый день",
      day: 5,
      active: "start",
    },
    {
      title: "Гибкость рук",
      description: "Йога на каждый день",
      day: 6,
      active: "start",
    },
    {
      title: "Сальто назад",
      description: "Йога на каждый день",
      day: 7,
      active: "start",
    },
  ];

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
              {testArr.map((el, index) => {
                return (
                  <div key={index} className="mb-[10px] h-[56px] pb-[8px]">
                    <div className="border-colorBorderBtn mb-[10px] flex content-center items-center justify-start border-b-[1px]">
                      {el.active === "finish" ? (
                        <svg
                          className="pointer-events-none ml-[2px] mr-[12px] h-[20px] w-[20px]"
                          key={el.day}
                        >
                          <use xlinkHref="/public/icons/sprite.svg#icon-done" />
                        </svg>
                      ) : (
                        <svg
                          className="ml-[2px] mr-[12px] h-[20px] w-[20px] cursor-pointer"
                          key={el.day}
                        >
                          <use xlinkHref="/public/icons/sprite.svg#icon-done" />
                        </svg>
                      )}
                      <div className="mr-[10px]">
                        <p className="text-lg">{el.title}</p>
                        <p>
                          {el.description} / {el.day} день
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex content-center items-center justify-center">
            <button className="h-[48px] w-[288px] rounded-3xl bg-mainColor text-xl">
              Начать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
