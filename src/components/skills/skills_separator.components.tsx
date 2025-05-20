type props = { 
  title: string;
}

export function SkillSeparator({title}: props) {
  return (
    <div className="2xl:text-4xl lg:text-3xl sm:text-2xl text-xl font-medium w-full rounded-xl shadow-md border border-[#444444] p-4 bg-[#000000]">
      <h2>{title}</h2>
    </div>
  );
}
