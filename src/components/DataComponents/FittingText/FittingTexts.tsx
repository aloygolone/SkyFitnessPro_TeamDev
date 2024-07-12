
export default function FittingText() {
  return (
    <div className="container flex flex-col mx-auto py-l">
      <p className="pb-10 font-bold text-5xl">
        Подойдет для вас, если:
      </p>
      <div className="container flex align-items-center mx-auto">
        <div className="  w-4/12">
          <div className="h-36 flex items-centr bg-black rounded-blockRadius">
            <div className="flex items-center p-3">
              <h2 className=" text-mainColor font-medium text-7xl pr-5">1</h2>
              <h2 className=" text-white text-2xl font-normal">
                Давно хотели попробовать йогу, но не решались начать
              </h2>
            </div>
          </div>
        </div>
        <div className=" px-inptX w-4/12">
          <div className="h-36 flex items-center  bg-black rounded-blockRadius">
            <div className="flex items-center p-3">
              <h2 className=" text-mainColor font-medium text-7xl pr-5">2</h2>
              <h2 className=" text-white text-2xl font-normal">
                Хотите укрепить позвоночник, избавиться от болей в спине и
                суставах
              </h2>
            </div>
          </div>
        </div>
        <div className=" w-4/12">
          <div className="h-36 flex items-center  bg-black rounded-blockRadius">
            <div className="flex items-center p-3">
              <h2 className=" text-mainColor font-medium text-7xl pr-5">3</h2>
              <h2 className=" text-white text-2xl font-normal">
                Ищете активность, полезную для тела и души
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
