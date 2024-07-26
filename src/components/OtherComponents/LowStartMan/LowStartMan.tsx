export default function LowStartMan() {
  return (
    <div className="absolute left-16 top-[-100px] z-10 flex h-full w-full justify-around md:right-[100px] md:top-0 ">
      <div className="absolute right-[95px] top-[75px] z-30 md:pr-110 md:pt-28 md:top-0 md:right-[280px]">
        <svg className="h-12 pb-4 md:pb-0">
          <use xlinkHref="/icons/sprite.svg#icon-arc-small" />
        </svg>
      </div>
      <div className="absolute z-10 top[480px] right-[50px] w-[270px] h-[351px] bg-cover 
     
     bg-[url('/images/images_full/low_start_man_hd.png')] md:ml-[500px] md:h-[551px] md:w-[500px]  
     ">
     {/*  */}
        {/* <img
          className="absolute object-contain object-center right-0 md:right-[100px]"
          src="/images/images_full/low_start_man_hd.png"
        /> */}
      </div>
      <div className="absolute right-8 top-[90px] z-0 md:top-[190px] ">
        <svg className="h-[370px] w-[475px] pl-[75px] object-contain object-center md:h-[431px] md:w-[770px] md:pl-0">
          <use xlinkHref="/icons/sprite.svg#icon-arc-big " />
        </svg>
      </div>
    </div>
  );
}
