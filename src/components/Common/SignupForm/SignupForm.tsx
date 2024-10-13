import { ChangeEvent, useState } from "react";
import { useUserData } from "../../../hooks/useUserData";
import { userSignup } from "../../../api/userAuth_api";

type SignupFormProps = {
  setIsOpenedSignupForm: (arg: boolean) => void;
  setIsOpenedSigninForm: (arg: boolean) => void;
};

type SignupData = {
  email: string;
  passwordFirst: string;
  passwordSecond: string;
  isNotCorrectEmail: boolean;
  isNotCorrectPassword: boolean;
};

export default function SignupForm({
  setIsOpenedSigninForm,
  setIsOpenedSignupForm,
}: SignupFormProps) {
  const { login } = useUserData();
  const [registrationData, setRegistrationData] = useState<SignupData>({
    email: "",
    passwordFirst: "",
    passwordSecond: "",
    isNotCorrectEmail: false,
    isNotCorrectPassword: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegistrationData((prev) => ({
      ...prev,
      [name]: value,
      isNotCorrectEmail: false,
      isNotCorrectPassword: false,
    }));
  };

  const handleOpenSigninForm = () => {
    setIsOpenedSigninForm(true);
    setIsOpenedSignupForm(false);
  };

  const handleSignUp = async () => {
    const { passwordFirst, passwordSecond, email } = registrationData;

    if (passwordFirst !== passwordSecond) {
      setRegistrationData((prev) => ({ ...prev, isNotCorrectPassword: true }));
      return;
    }

    try {
      const userData = await userSignup(email, passwordFirst);
      login?.({
        id: userData.uid,
        email: userData.email,
        token: userData.refreshToken,
      });
      setIsOpenedSignupForm(false);
    } catch {
      setRegistrationData((prev) => ({ ...prev, isNotCorrectEmail: true }));
    }
  };

  return (
    <div className="min-w-375 absolute left-0 top-0 z-50 flex h-full min-h-screen w-full flex-col items-center justify-center bg-black bg-opacity-20">
      <div className="block h-[490px] w-full max-w-[360px] rounded-blockRadiusMax border border-zinc-300 bg-white px-20 py-10">
        <div className="mb-12 flex items-center justify-center">
          <img
            onClick={() => setIsOpenedSignupForm(false)}
            src="/images/logo.png"
            alt="logo"
          />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <input
              className={`rounded-small border-gray-extra bg-white-base text-black-base placeholder-gray-extra mb-2.5 h-[52px] w-[280px] appearance-none rounded-inputRadius border px-[18px] py-[12px] text-lg ${registrationData.isNotCorrectEmail ? "border-errorColor" : ""}`}
              name="email"
              type="email"
              placeholder="Email"
              value={registrationData.email}
              onChange={handleInputChange}
              required
            />
            <input
              className={`rounded-small border-gray-extra bg-white-base text-black-base placeholder-gray-extra mb-2.5 h-[52px] w-[280px] appearance-none rounded-inputRadius border px-[18px] py-[12px] text-lg`}
              name="passwordFirst"
              type="password"
              placeholder="Пароль"
              value={registrationData.passwordFirst}
              onChange={handleInputChange}
              required
            />
            <input
              className={`rounded-small border-gray-extra bg-white-base text-black-base placeholder-gray-extra mb-4 h-[52px] w-[280px] appearance-none rounded-inputRadius border px-[18px] py-[12px] text-lg ${registrationData.isNotCorrectPassword ? "border-errorColor" : ""}`}
              name="passwordSecond"
              type="password"
              placeholder="Повторите пароль"
              value={registrationData.passwordSecond}
              onChange={handleInputChange}
              required
            />
          </div>
          {registrationData.isNotCorrectPassword && (
            <div className="text-error w-[220px] text-center text-sm text-errorColor">
              Пароли не совпадают...
            </div>
          )}
          {registrationData.isNotCorrectEmail && (
            <div className="text-error w-[220px] text-center text-sm text-errorColor">
              Данная почта уже используется. Попробуйте войти.
            </div>
          )}
          <div className="flex flex-col items-center justify-center">
            <button
              className="mt-4 h-[52px] w-[280px] rounded-buttonRadius bg-mainColor text-[18px] font-normal hover:bg-mainHover active:bg-black"
              type="submit"
            >
              Зарегистрироваться
            </button>
            <button
              className="disabled:bg-gray-light disabled:text-gray-dark disabled:border-gray-dark mt-3 h-[52px] w-[280px] rounded-buttonRadius border border-zinc-900 text-[18px] font-normal leading-[19.8px] transition-colors duration-300 hover:bg-bgColor active:bg-blackout"
              onClick={handleOpenSigninForm}
              type="button"
            >
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
