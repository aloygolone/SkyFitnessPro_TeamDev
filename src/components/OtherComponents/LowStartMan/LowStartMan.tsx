export default function LowStartMan() {
  return (
    <div className="absolute left-16 top-[-100px] z-10 flex h-full w-full justify-around md:right-[100px] md:top-0">
      <div className="md:pr-110 absolute right-[95px] top-[75px] z-30 md:right-[280px] md:top-0 md:pt-28">
        <svg className="h-12 pb-4 md:pb-0">
          <use xlinkHref="/icons/sprite.svg#icon-arc-small" />
        </svg>
      </div>
      <div className="top[480px] absolute right-[50px] z-10 h-[351px] w-[270px] bg-[url('/images/images_full/low_start_man_hd.png')] bg-cover md:ml-[500px] md:h-[551px] md:w-[500px]">
        {/*  */}
        {/* <img
          className="absolute object-contain object-center right-0 md:right-[100px]"
          src="/images/images_full/low_start_man_hd.png"
        /> */}
      </div>
      <div className="absolute right-8 top-[90px] z-0 md:top-[190px]">
        <svg className="h-[370px] w-[475px] object-contain object-center pl-[75px] md:h-[431px] md:w-[770px] md:pl-0">
          <use xlinkHref="/icons/sprite.svg#icon-arc-big " />
        </svg>
      </div>
    </div>
  );
}
