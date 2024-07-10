import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";

export default function Directions() {
  return (
    <div className="container mx-auto flex flex-col">
      <Link to={appRoutes.MAIN}>
        <img src="images/logo.png" alt="logo" />
      </Link>
      <p className="p-5 pb-10 text-5xl font-bold">Направления</p>
      <div className="rounded-blockRadius container flex flex-row bg-mainColor">
        <div className="mx-auto flex flex-col">
          <div className="items-centr flex">
            <div className="flex items-center pb-8 pt-8">
              <svg className="h-6 w-6">
                <use xlinkHref="/icons/sprite.svg#icon-star-4" />
              </svg>
              <h2 className="pl-s font-defaultFont text-2xl text-black">
                Йога для новичков
              </h2>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center pb-8 pt-8">
              <svg className="h-6 w-6">
                <use xlinkHref="/icons/sprite.svg#icon-star-4" />
              </svg>
              <h2 className="pl-s font-defaultFont text-2xl text-black">
                Классическая йога
              </h2>
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-col">
          <div className="flex items-center">
            <div className="flex items-center pb-8 pt-8">
              <svg className="h-6 w-6">
                <use xlinkHref="/icons/sprite.svg#icon-star-4" />
              </svg>
              <h2 className="pl-s font-defaultFont text-2xl text-black">
                Кундалини-йога
              </h2>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center pb-8 pt-8">
              <svg className="h-6 w-6">
                <use xlinkHref="/icons/sprite.svg#icon-star-4" />
              </svg>
              <h2 className="pl-s font-defaultFont text-2xl text-black">
                Йогатерапия
              </h2>
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-col">
          <div className="flex items-center">
            <div className="flex items-center pb-8 pt-8">
              <svg className="h-6 w-6">
                <use xlinkHref="/icons/sprite.svg#icon-star-4" />
              </svg>
              <h2 className="pl-s font-defaultFont text-2xl text-black">
                Хатха-йога
              </h2>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center pb-8 pt-8">
              <svg className="h-6 w-6">
                <use xlinkHref="/icons/sprite.svg#icon-star-4" />
              </svg>
              <h2 className="pl-s font-defaultFont text-2xl text-black">
                Аштанга-йога
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
