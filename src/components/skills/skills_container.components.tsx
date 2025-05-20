type props = {
  children: React.ReactNode;
}

export function SkillContainer({children}: props) {
  return (
    <div className="md:gap-5 sm:flex-row sm:flex-wrap flex flex-col gap-3 items-center">
      { children }
    </div>
  )  
}