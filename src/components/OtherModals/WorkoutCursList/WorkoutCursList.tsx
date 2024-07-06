import { useState } from "react";

export function WorkoutCursList() {
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

    const [select, setSelect] = useState("ellipsAdd.png");

    function handleClick() {
        if (select === "ellipsAdd.png") {
            setSelect("task.png");
        } else {
            setSelect("ellipsAdd.png");
        }
    }


    return (
        <>
            {testArr.map((el, index) => {
                return (
                    <div key={index} className="pb-2 mb-2.5 h-14">
                        <div className=" border-b-[1px] border-colorBorderBtn flex justify-start items-center content-center mb-2.5">
                            {el.active === "finish" ? (
                                <img
                                    className="pointer-events-none mr-3 ml-0.5"
                                    src="/icons/done_icon.svg"
                                    alt=""
                                    title="Тренировка завершина"
                                    key={el.day}
                                />
                            ) : (
                                <img
                                    onClick={handleClick}
                                    className="cursor-pointer mr-3 ml-0.5"
                                    /* src={`../public/${select}`} */
                                    alt=""
                                    key={el.day}
                                />
                            )}
                            <div className="mr-2.5">
                                <p className="text-lg">{el.title}</p>
                                <p>
                                    {el.description} / {el.day} день
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
            ;
        </>
    );
}
