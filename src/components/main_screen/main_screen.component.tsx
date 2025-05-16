import Link from "next/link";
import { MainScreenButton } from "./button_main_screen.component";

export function MainScreen() {
  return (
    <div className="flex h-[84vh] relative 2xl:gap-5 gap-5 justify-center bottom-5 flex-col items-center">
      <div className="w-full flex items-center lg:gap-6 flex-col gap-4">
        <h1 className="text-4xl lg:text-5xl 2xl:text-6xl sm:text-5xl text-center">
            Desenvolvedor <br />
            Front-End
        </h1>
      </div>
      <div className="flex gap-2 items-center ">
        <Link href={'/#contato'}>
          <MainScreenButton btnContent="Contato"/>
        </Link>
        <Link href={'https://github.com/Zafkiel45'} target="_blank">
          <MainScreenButton btnContent="Github"/>
        </Link>
      </div>
    </div>
  );
}
