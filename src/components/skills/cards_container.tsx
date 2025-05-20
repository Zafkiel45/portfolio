type Props = {
  children: React.ReactNode;
}

export function CardContainer({children}: Props) {
  return (
    <div className="flex flex-col sm:flex-row md:gap-5 sm:flex-wrap gap-3 items-center">
      {children}
    </div>
  )
}