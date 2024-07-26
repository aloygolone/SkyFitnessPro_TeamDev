import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { useUserData } from "../../../hooks/useUserData";

type UserModalType = {
  setIsOpenedUserModal: (arg: boolean) => void;
};

export default function UserModal({
  setIsOpenedUserModal,
}: UserModalType) {
  const { user, logout } = useUserData();
  const handleLogout = () => {
    setIsOpenedUserModal(false);
    logout?.();
  };

  return (
    <div className="rounded-blockRadius p-l absolute right-0 top-16 z-[9999] mt-[74px] grid gap-[34px] bg-white text-center shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)]">
      <div className="grid gap-2.5">
        <div className=" text-lg/[19.8px] font-normal">Сергей</div>
        <div className="text-lg/[19.8px] font-normal md:text-stone-500">
          {user?.email}
        </div>
      </div>
      <div className="grid gap-2.5">
        <Link to={appRoutes.USER_PROFILE}>
          <button className=" h-[52px] w-[206px] rounded-buttonRadius bg-mainColor font-defaultFont font-normal hover:bg-mainHover">
            Мой профиль
          </button>
        </Link>
        <Link to={appRoutes.MAIN}>
          <button
            onClick={handleLogout}
            className="h-[52px] w-[206px] rounded-buttonRadius border-[1px] border-solid border-black bg-white px-btnX py-btnY font-defaultFont font-normal text-black hover:bg-bgColor"
            type="button"
          >
            Выйти
          </button>
        </Link>
      </div>
    </div>
  );
}
