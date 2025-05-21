import type { StandoutText } from "@/types/standout_texts";

export function StandOutTitle({title, isCentralized}:StandoutText) {
  return (
    <h1 className={`text-4xl flex flex-col lg:gap-2 lg:text-5xl 2xl:text-6xl sm:text-5xl ${isCentralized ? 'md:text-center':''}`}>
      {title}
    </h1>
  )
}