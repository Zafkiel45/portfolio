'use client';
import Link from "next/link";
import { MainScreenButton } from "./button_main_screen.component";

export function MainScreen() {
  return (
    <div className="flex h-screen relative 2xl:gap-5 gap-5 justify-center bottom-5 flex-col md:items-center sm:gap-6">
      <div className="w-full flex md:items-center lg:gap-6 flex-col gap-4">
        <h1 className="text-4xl flex flex-col lg:gap-2 lg:text-5xl 2xl:text-6xl sm:text-5xl md:text-center">
          <p className="text-shadow-purple">Desenvolvedor Full-Stack</p>
        </h1>
      </div>
      <div className="md:text-center lg:w-2/4 text-balance sm:text-lg">
        <p>
          Foco, aprendizado, destreza e determinação. Com esses pilares, 
          todo problema encontra sua solução.
        </p>
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
