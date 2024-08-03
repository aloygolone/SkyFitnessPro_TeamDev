import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { useUserData } from "../../../hooks/useUserData";
import { changePassword } from "../../../api/userAuth_api";

type ErrorType = {
  oldPassword: string;
  newPassword: string;
};

export default function UserProfile() {
  const { user, logout } = useUserData();

  const navigate = useNavigate();

  const [passwordData, setPasswordData] = useState<ErrorType>({
    oldPassword: "",
    newPassword: "",
  });

  // const [isMismatchPassword, setIsMismatchPassword] = useState(false);

  const [isChangeMode, setIsChangeMode] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value,
    });
  };

  function handleChangePassword() {
    setIsChangeMode(true);
  }

  const handleSubmit = async () => {
    changePassword(passwordData.newPassword).then(() => setIsChangeMode(false));
  };

  const handleLogout = () => {
    logout?.();
    navigate(appRoutes.MAIN);
  };

  return (
    <>
      <h2
        data-tid="titleProfile"
        className="mb-10 ml-8 text-[40px] font-semibold leading-[44px] sm:text-[26px] md:text-[32px]"
      >
        Профиль
      </h2>
      <div
        data-tid="profileUserInfoBlock"
        className="bg-white-base mb-10 ml-8 mr-8 mt-10 h-[257px] rounded-[30px] p-[30px] shadow-xl sm:mt-6 sm:h-auto md:mt-6"
      >
        <div
          data-tid="contentBlock"
          className="flex flex-row gap-[30px] md:gap-6"
        >
          <svg className="">
            <use xlinkHref="./public/icons/sprite.svg#icon-profile-nophoto-full" />
          </svg>
          <div data-tid="userData" className="flex flex-col gap-[10px]">
            <h3 className="text-[32px] font-medium leading-[35px] sm:text-[26px]">
              Сергей
            </h3>
            <div className="mt-3 text-[18px] font-normal leading-[19px]">
              Логин: {user?.email}
            </div>
            {!isChangeMode ? (
              <div className="flex items-center text-[18px] font-normal leading-[19px]">
                Пароль:
                <button
                  className="w-[120px] rounded-blockRadiusMin border bg-gray-400 text-gray-400 sm:h-[25px]"
                  type="button"
                ></button>
              </div>
            ) : (
              <>
                <input
                  className="rounded-small border-gray-extra bg-white-base text-black-base placeholder-gray-extra mb-2.5 h-[52px] w-[280px] appearance-none rounded-inputRadius border px-[18px] py-[12px] text-lg"
                  name="oldPassword"
                  type="password"
                  placeholder="Старый пароль"
                  value={passwordData.oldPassword}
                  onChange={handleInputChange}
                />
                <input
                  className="border-error rounded-small border-gray-extra bg-white-base text-black-base placeholder-gray-extra h-[52px] w-[280px] appearance-none rounded-inputRadius border px-[18px] py-[12px] text-lg"
                  name="newPassword"
                  type="password"
                  placeholder="Новый пароль"
                  value={passwordData.newPassword}
                  onChange={handleInputChange}
                />
              </>
            )}

            <div className="mt-5 flex w-[394px] flex-row gap-[10px] sm:items-center">
              {!isChangeMode ? (
                <button
                  onClick={handleChangePassword}
                  className="w-[192px] rounded-buttonRadius border bg-mainColor text-[18px] font-normal leading-[19.8px] hover:bg-mainHover active:bg-black sm:h-[50px]"
                  type="button"
                >
                  Изменить пароль
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="w-[192px] rounded-buttonRadius border bg-mainColor text-[18px] font-normal leading-[19.8px] hover:bg-mainHover active:bg-black sm:h-[50px]"
                  type="button"
                >
                  Сохранить
                </button>
              )}
              <Link to={appRoutes.MAIN}>
                <button
                  onClick={handleLogout}
                  className="w-[192px] rounded-buttonRadius border border-zinc-900 text-[18px] font-normal leading-[19.8px] hover:bg-bgColor active:bg-blackout sm:h-[50px]"
                  type="button"
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
