type DirectionsType = {
  directions: string[];
};

export default function Directions({ directions }: DirectionsType) {
  return (
    <div className="container mx-auto flex flex-col">
      <p className="mb-6 mt-8 text-2xl font-bold md:mb-14 md:mt-14 md:text-5xl">
        Направления
      </p>
      <div className="rounded-blockRadius container flex flex-row bg-mainColor md:flex-col">
        <div className="p-l flex w-2/6">
          <div className="flex-col md:grid md:grid-cols-[284px_284px_284px] md:gap-x-28">
            {directions.map((direction, index) => (
              <div key={index} className="flex items-center py-3 md:py-8">
                <svg className="mr-2 h-6 w-6">
                  <use xlinkHref="/icons/sprite.svg#icon-star-4" />
                </svg>
                <h2 className="pl-s whitespace-nowrap font-defaultFont text-lg/8 text-black md:text-2xl">
                  {direction}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
