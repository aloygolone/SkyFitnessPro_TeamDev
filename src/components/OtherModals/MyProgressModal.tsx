import "../../css/style.css";

export default function MyProgressModal() {
    const testArr = [
        { id: 1, title: "Сколько раз вы сделали наклоны вперед?" },
        { id: 2, title: "Сколько раз вы сделали наклоны назад?" },
        { id: 3, title: "Сколько раз вы сделали поднятие ног, согнутых в коленях?" },
        { id: 4, title: "Сколько раз вы сделали приседаний?" },
    ];
    return (
        <div className=" h-workoutH w-widthMyProgress bg-white rounded-3xl flex justify-center">
            <div className="p-10 w-96 ">
                <div>
                    <h1 className="mb-12 text-3xl flex justify-start">
                        Мой прогресс
                    </h1>
                </div>
                <div className="overflow-hidden scroll-smooth h-heightCursArr2">
                    <div className="scroll-smooth overflow-y-scroll h-heightCursArr">
                        {testArr.map((el) => {
                            return (
                                <div key={el.id}>
                                    <p  className="mb-2.5 rounded-xl">
                                        {el.title}
                                    </p>
                                    <input 
                                        className="p-5 text-lg mb-5 rounded-lg w-72 h-12 border-[1px] border-colorBorderBtn"
                                        type="number"
                                    />
                                  </div>
                            );
                        })}
                    </div>
                </div>
                <div className="flex justify-center items-center content-center">
                    <button className="rounded-3xl h-12 w-72 bg-mainColor mt-6">
                        <p className="text-xl">Сохранить</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
