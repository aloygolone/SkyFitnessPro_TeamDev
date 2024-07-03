import "../../css/style.css";

export default function Header() {
  return (
    <div className="container flex justify-between mx-auto">
      <div className="flex flex-col space-y-[15px]">
        <div>
          {/* <Link to="/">
            <img src="" alt="logo">
          </Link> */}
        </div>
        <div>
          <p className="text-black">Онлайн тренировки для занятий дома</p>
        </div>
      </div>

      <div
        className="rounded-button bg-mainColor text-black" /* onClick={handleSigninForm} */
      >
        Войти
      </div>
      {/* user Блок */}
      <div>
        <div>profile_icon</div>

        <div>
          <div>Сергей</div>
          <svg>{/*  <use user_arrow_icon="/" /> */}</svg>
        </div>
      </div>
    </div>
  );
}
