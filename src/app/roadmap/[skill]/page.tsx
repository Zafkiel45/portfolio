import { StandOutDescription } from "@/components/nodes/standout_description";
import { StandOutTitle } from "@/components/nodes/standout_title";
import ScrumBoard from '../../../../public/svg/scrum_board.svg';
import Image from "next/image";

export default async function Roadmap({params}:{params: Promise<{skill: string}>}) {
  const { skill } = await params;
 
  return (
    <main className="flex lg:px-20 xl:px-28 min-[490px]:px-8 px-4 sm:px-10 flex-col gap-32">
      <div className="flex h-screen items-center">
        {/* Main Text Container */}
        <div className="flex h-full relative 2xl:gap-5 gap-5 justify-center bottom-5 flex-col sm:gap-6">
          <StandOutTitle isCentralized={false} title="Roadmap" />
          <StandOutDescription isCentralized={false}>
            Acompanhe minha jornada nesse mar de aventuras chamado: Programação.
          </StandOutDescription>
        </div>
        {/* Svg of main container */}
        <div className="hidden sm:block">
          <Image src={ScrumBoard} alt="A scrum board with two people maneging it" />
        </div>
      </div>
    </main>
  )
}