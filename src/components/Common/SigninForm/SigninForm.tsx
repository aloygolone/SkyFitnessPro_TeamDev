import { ChangeEvent, useState } from "react";
import { useUserData } from "../../../hooks/useUserData";
import { userSignin } from "../../../api/userAuth_api";

type SigninFormProps = {
  setIsOpenedSignupForm: (arg: boolean) => void;
  setIsOpenedSigninForm: (arg: boolean) => void;
};

type SigninData = {
  email: string;
  password: string;
  isNotCorrectPassword: boolean;
};

export default function SigninForm({
  setIsOpenedSigninForm,
  setIsOpenedSignupForm,
}: SigninFormProps) {
  const { login } = useUserData();
  const [isOpenedEmailForm, setIsOpenedEmailForm] = useState(false);
  const [loginData, setLoginData] = useState<SigninData>({
    email: "",
    password: "",
    isNotCorrectPassword: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
      isNotCorrectPassword: false,
    }));
  };

  const handleOpenSignupForm = () => {
    setIsOpenedSigninForm(false);
    setIsOpenedSignupForm(true);
  };

  const handleRecoverPassword = () => {
    setIsOpenedEmailForm(true);
    setTimeout(() => setIsOpenedEmailForm(false), 3000);
  };

  const handleLogin = async () => {
    try {
      const userData = await userSignin(loginData.email, loginData.password);
      login?.({
        id: userData.uid,
        email: userData.email,
        token: userData.refreshToken,
      });
      setIsOpenedSigninForm(false);
    } catch {
      setLoginData((prev) => ({ ...prev, isNotCorrectPassword: true }));
    }
  };

  return (
    <>
      <div className="absolute left-0 top-0 z-50 flex h-full min-h-screen w-full flex-col items-center justify-center bg-black bg-opacity-20">
        <div className="block h-[425px] w-full max-w-[360px] rounded-blockRadiusMax border border-zinc-300 bg-white px-20 py-10">
          <div className="mb-12 flex items-center justify-center">
            <img
              onClick={() => setIsOpenedSigninForm(false)}
              src="/images/logo.png"
              alt="logo"
            />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <input
                className="rounded-small border-gray-extra bg-white-base text-black-base placeholder-gray-extra mb-2.5 h-[52px] w-[280px] appearance-none border px-[18px] py-[12px] text-lg"
                name="email"
                type="email"
                placeholder="Email"
                value={loginData.email}
                onChange={handleInputChange}
                required
              />
              <input
                className={`rounded-small border-gray-extra bg-white-base text-black-base placeholder-gray-extra mb-3 h-[52px] w-[280px] appearance-none border px-[18px] py-[12px] text-lg ${loginData.isNotCorrectPassword ? "border-errorColor" : ""}`}
                name="password"
                type="password"
                placeholder="Пароль"
                value={loginData.password}
                onChange={handleInputChange}
                required
              />
              {loginData.isNotCorrectPassword && (
                <div className="text-error w-[270px] text-center text-sm text-errorColor">
                  Пароль введен неверно, попробуйте еще раз.&nbsp;
                  <button
                    className="text-errorColor underline"
                    type="button"
                    onClick={handleRecoverPassword}
                  >
                    Восстановить пароль?
                  </button>
                </div>
              )}
              {isOpenedEmailForm && (
                <div className="absolute left-0 top-0 z-50 flex min-h-screen w-full flex-col items-center justify-center bg-black bg-opacity-20">
                  <div className="flex h-[450px] w-full max-w-[360px] items-center rounded-blockRadiusMax border border-zinc-300 bg-white px-20 py-10">
                    <div className="flex flex-col items-center justify-center">
                      <img src="/images/logo.png" alt="logo" />
                      <div className="mt-10 text-center text-[18px]">
                        Ссылка для восстановления пароля отправлена на{" "}
                        {loginData.email}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-3 flex flex-col items-center justify-center">
              <button
                className="h-[52px] w-[280px] rounded-buttonRadius bg-mainColor text-[18px] font-normal hover:bg-mainHover active:bg-black"
                type="submit"
              >
                Войти
              </button>
              <button
                className="disabled:bg-gray-light disabled:text-gray-dark disabled:border-gray-dark mt-3 h-[52px] w-[280px] rounded-buttonRadius border border-zinc-900 text-[18px] font-normal leading-[19.8px] transition-colors duration-300 hover:bg-bgColor active:bg-blackout"
                onClick={handleOpenSignupForm}
                type="button"
              >
                Зарегистрироваться
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
