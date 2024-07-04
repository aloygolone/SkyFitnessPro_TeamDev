  import { Link } from "react-router-dom";
  // import MainPage from "../../pages/MainPage";
  import { appRoutes } from "../../lib/appRoutes";
  export default function Directions() {
    return (
      <div className="container flex flex-col mx-auto">
        <Link to={appRoutes.COURSE}>
          <img src="images/logo.png" alt="logo" />
        </Link>
        <p className="pb-10 font-bold text-5xl p-5">Направления</p>
        <div className="container  flex flex-row  bg-mainColor rounded-blockRadiusFrame">
          <div className="flex flex-col mx-auto">
            <div className=" flex items-centr ">
              <div className="flex items-center pt-8 pb-8">
                <svg className="w-6 h-6">
                  <use xlinkHref="/icons/star_4_icon.svg" />
                </svg>
                <h2 className=" text-black font-defaultFont text-2xl">
                  Йога для новичков
                </h2>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center pt-8 pb-8">
              <svg className="w-6 h-6" >
                <use xlinkHref="/icons/star_4_icon.svg" />
                </svg>
                <h2 className=" text-black font-defaultFont text-2xl">
                  Классическая йога
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto">
            <div className=" flex items-center">
              <div className="flex items-center pt-8 pb-8">
              <svg className="w-6 h-6" >
                <use xlinkHref="/icons/star_4_icon.svg" />
                </svg>
                <h2 className=" text-black font-defaultFont text-2xl">
                  Кундалини-йога
                </h2>
              </div>
            </div>
            <div className=" flex items-center">
              <div className="flex items-center pt-8 pb-8">
              <svg className="w-6 h-6" >
                <use xlinkHref="/icons/star_4_icon.svg" />
                </svg>
                <h2 className=" text-black font-defaultFont text-2xl">
                  Йогатерапия
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto">
            <div className=" flex items-center">
              <div className="flex items-center pt-8 pb-8">
              <svg className="w-6 h-6" >
                <use xlinkHref="/icons/star_4_icon.svg" />
                </svg>
                <h2 className=" text-black font-defaultFont text-2xl">
                  Хатха-йога
                </h2>
              </div>
            </div>
            <div className=" flex items-center ">
              <div className="flex items-center pt-8 pb-8">
              <svg className="w-6 h-6" >
                <use xlinkHref="/icons/star_4_icon.svg" />
                </svg>
                <h2 className=" text-black font-defaultFont text-2xl">
                  Аштанга-йога
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  