import "../../../css/style.css";

import UserModal from "../UserModal/UserModal";

export default function Header() {
  return (
    <div className="mx-auto mt-[50px] flex items-center justify-between">
      <div className="flex flex-col space-y-[15px]">
        <div className="">
          <a>
            <img src="/images/logo.png" alt="logo" />
          </a>
        </div>
        <div className="space-y-[60px]">
          <p className="font-roboto hidden md:flex">
            Онлайн тренировки для занятий дома
          </p>
        </div>
      </div>
      

      {/* <button
        className="h-[52px] w-[103px] rounded-buttonRadius bg-mainColor px-btnX py-btnY text-center font-defaultFont font-normal text-black hover:bg-mainHover" 
      >
        Войти
      </button> */}
     
      
      {/* Если пользователь авторизован, то user Блок */}
      <div>
        <svg className="">
           <use xlinkHref="public/icons/profile_icon.svg" /> 
        </svg>

        <div>
          <div>Сергей</div>
          <svg className="">
           <use xlinkHref="public/icons/user_arrow_icon.svg" /> 
          </svg>
        </div>
      </div>
      <UserModal />
    </div>
  );
}