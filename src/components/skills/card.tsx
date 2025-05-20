type TechnologyCard = {
  technology: React.JSX.Element;
  technologyName: string;
  children: string;
};

export const Card = ({
  technology,
  technologyName,
  children,
}: TechnologyCard) => {
  return (
    <div className=" 2xl:min-h-64 lg:hover:shadow-lg lg:hover:shadow-[#a2ff009e] transition-shadow md:basis-0 md:flex-grow md:flex-shrink md:max-w-full md:min-w-80 sm:max-h-56 sm:h-56 sm:gap-5 w-full min-h-48 flex flex-col gap-2 p-5 border border-[#444444] bg-[#000000] rounded-xl shadow-sm">
      <div className="flex items-center justify-between">
        <div className="md:text-lg flex items-center gap-3">
          <div>{technology}</div>
          <div className="font-medium 2xl:text-xl">{technologyName}</div>
        </div>
      </div>
      <div className="md:text-lg 2xl:text-xl">{children}</div>
    </div>
  );
};
