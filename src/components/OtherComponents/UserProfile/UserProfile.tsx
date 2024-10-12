import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { useUserData } from "../../../hooks/useUserData";

type ErrorType = {
  password: string,
  repeatPassword: string,
}

export default function UserProfile() {
  const { user, logout } = useUserData();

  const navigate = useNavigate();

  const [passwordData, setPasswordData] = useState<ErrorType>({ password: "", repeatPassword: "" });

  const [isChangeMode, setIsChangeMode] = useState(false);

  const [isNotCorrect, setIsNotCorrect] = useState(false);

  const [isNotCorrect1, setIsNotCorrect1] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswordData({
      ...passwordData,
      [name]: value
    })
  }

  function handleChangePassword() {
    setIsChangeMode(true);

  }

  function handleSubmit() {
    setIsNotCorrect(false);
    setIsNotCorrect1(false);
    if (!passwordData.password.trim() || !passwordData.repeatPassword.trim()) {
      setIsNotCorrect(true);
      return;
    }
    if (passwordData.password === passwordData.repeatPassword) {
      setIsNotCorrect1(true);
      return;
    }
    setIsChangeMode(false);
  }

  const handleLogout = () => {
    logout?.();
    navigate(appRoutes.MAIN);
  };

  return (
    <>
      <h2
        data-tid="titleProfile"
        className="mb-10 ml-8 text-[40px] sm:text-[26px] md:text-[32px] font-semibold leading-[44px]"
      >
        Профиль
      </h2>
      <div
        data-tid="profileUserInfoBlock"
        className="mb-10 ml-8 mr-8 bg-white-base mt-10 sm:mt-6 md:mt-6 h-[257px] sm:h-auto p-[30px] rounded-[30px] shadow-xl"
      >
        <div
          data-tid="contentBlock"
          className="flex flex-row gap-[30px] md:gap-6 "
        >
          <svg className="">
            <use xlinkHref="./public/icons/sprite.svg#icon-profile-nophoto-full" />
          </svg>
          <div
            data-tid="userData"
            className="flex flex-col gap-[10px] "
          >
            <h3 className="text-[32px] sm:text-[26px] font-medium leading-[35px]">
              Сергей
            </h3>
            <div className="mt-3 text-[18px] font-normal leading-[19px]">
              Логин: {user?.email}
            </div>
            {!isChangeMode ? (
              <div className="flex items-center text-[18px] font-normal leading-[19px] ">
                Пароль:
                <button
                  className="w-[120px] sm:h-[25px] rounded-blockRadiusMin border bg-gray-400 text-gray-400"
                >
                </button>
              </div>
            ) : (
              <>
                <input
                  className="mb-2.5 h-[52px] w-[280px] px-[18px] py-[12px] text-lg rounded-inputRadius appearance-none border rounded-small border-gray-extra  bg-white-base text-black-base placeholder-gray-extra"
                  name="password"
                  type="password"
                  placeholder="Старый пароль"
                  value={passwordData.password}
                  onChange={handleInputChange} />
                <input
                  className="border-error h-[52px] w-[280px] px-[18px] py-[12px] rounded-inputRadius text-lg appearance-none border rounded-small border-gray-extra bg-white-base text-black-base placeholder-gray-extra"
                  name="repeatPassword"
                  type="password"
                  placeholder="Новый пароль"
                  value={passwordData.repeatPassword}
                  onChange={handleInputChange} />
                {isNotCorrect && (<div className="text-red-500">Заполните все поля!</div>)}
                {isNotCorrect1 && (<div className="text-red-500">Пароли не должны совпадать!</div>)}
              </>
            )}

            <div className="mt-5 w-[394px] flex flex-row gap-[10px] sm:items-center">

              {!isChangeMode ? (
                <button
                  onClick={handleChangePassword}
                  className="w-[192px] sm:h-[50px] rounded-buttonRadius text-[18px] font-normal leading-[19.8px] 
                  border  bg-mainColor hover:bg-mainHover active:bg-black"
                >
                  Изменить пароль
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="w-[192px] sm:h-[50px] rounded-buttonRadius text-[18px] font-normal leading-[19.8px] 
                  border  bg-mainColor hover:bg-mainHover active:bg-black"
                >
                  Сохранить
                </button>
              )}
              <Link to={appRoutes.MAIN}>
                <button
                  onClick={handleLogout}
                  className="w-[192px] sm:h-[50px] rounded-buttonRadius 
                text-[18px] font-normal leading-[19.8px] 
                border hover:bg-bgColor active:bg-blackout border-zinc-900"
                >
                  Выйти
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
