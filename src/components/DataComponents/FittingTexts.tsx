// import MainPage from "../../pages/MainPage";

export default function FittingText() {
  return (
    <div className="container flex flex-col mx-auto">
      <p className="pb-10 font-bold text-5xl p-5">
        Подойдет для вас, если:
      </p>
      <div className="container flex align-items-center mx-auto">
        <div className=" p-[10px] w-4/12">
          <div className="h-36 flex items-centr bg-black rounded-blockRadiusFrame">
            <div className="flex items-center p-3">
              <h2 className=" text-mainColor font-bold text-6xl pr-5">1</h2>
              <h2 className=" text-white">
                Давно хотели попробовать йогу, но не решались начать
              </h2>
            </div>
          </div>
        </div>
        <div className=" p-[10px] w-4/12">
          <div className="h-36 flex items-center  bg-black rounded-blockRadiusFrame">
            <div className="flex items-center p-3">
              <h2 className=" text-mainColor font-bold text-6xl pr-5">2</h2>
              <h2 className=" text-white">
                Хотите укрепить позвоночник, избавиться от болей в спине и
                суставах
              </h2>
            </div>
          </div>
        </div>
        <div className=" p-[10px] w-4/12">
          <div className="h-36 flex items-center  bg-black rounded-blockRadiusFrame">
            <div className="flex items-center p-3">
              <h2 className=" text-mainColor font-bold text-6xl pr-5">3</h2>
              <h2 className=" text-white">
                Ищете активность, полезную для тела и души
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
