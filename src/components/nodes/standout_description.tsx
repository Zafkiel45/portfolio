import type { StandoutDescrition } from "@/types/standout_texts";

export function StandOutDescription({children, isCentralized}: StandoutDescrition) {
  return (
    <div className={`${isCentralized ? 'md:text-center':''} text-balance min-[420px]:text-pretty sm:text-lg`}>
      <p>
        {children}
      </p>
    </div>
  )
}