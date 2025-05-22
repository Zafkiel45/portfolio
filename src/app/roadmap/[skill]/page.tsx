import { StandOutDescription } from "@/components/nodes/standout_description";
import { StandOutTitle } from "@/components/nodes/standout_title";
import ScrumBoard from "../../../../public/svg/scrum_board.svg";
import Image from "next/image";
import { DoneSvg } from "../../../../public/svg/done";
import { PendentSvg } from "../../../../public/svg/pendent";
import Link from "next/link";
import { MainScreenButton } from "@/components/main_screen/button_main_screen.component";
import { ROADMAPS } from "@/data/roadmap/roadmap.data";
import type { Roadmap } from "@/types/roadmap.type";

export default async function RoadmapRoute({
  params,
}: {
  params: Promise<{ skill: string }>;
}) {
  const currentRoadmap: Roadmap[] = [];
  const { skill } = await params;

  for (const roadmap of ROADMAPS) {
    if (roadmap.name === skill) {
      currentRoadmap.push(roadmap);
      break;
    }
  }

  return (
    <main className="flex lg:px-20 xl:px-28 min-[490px]:px-8 pb-5  px-4 sm:px-10 flex-col gap-32">
      {/* Main container */}
      <div className="flex flex-col relative top-12 gap-5 sm:flex-row h-screen justify-center items-center">
        {/* Main Text Container */}
        <div className="flex h-fit relative 2xl:gap-5 gap-5 justify-center bottom-5 flex-col sm:gap-6">
          <div className="flex flex-col gap-4">
            <StandOutTitle isCentralized={false} title="Roadmap" />
            <StandOutDescription isCentralized={false}>
              Acompanhe minha jornada nesse mar de aventuras chamado:
              Programação.
            </StandOutDescription>
          </div>
          <div>
            <Link href={"/"}>
              <MainScreenButton btnContent="Página inicial" />
            </Link>
          </div>
        </div>
        {/* Svg of main container */}
        <div className="relative">
          <Image
            src={ScrumBoard}
            height={500}
            width={500}
            className="max-h-60 sm:max-h-none"
            alt="A scrum board with two people maneging it"
          />
        </div>
      </div>
      <div className="w-full h-fit">
        <div>
          <div className="bg-[#0c0c0c] shadow-md p-5 flex gap-2 items-center rounded-t-md border border-[#444444]">
            <div>{currentRoadmap[0].icon}</div>
            <div className="capitalize">{currentRoadmap[0].name}</div>
          </div>
          {/* List of Goals of current Map*/}
          {currentRoadmap[0].goals.map((item, idx) => {
            return (
              <div
                key={idx + 1}
                className="flex last:rounded-b-md p-5 border border-[#444444] justify-between w-full"
              >
                {/* name and Icon */}
                <div className="flex gap-2 items-center w-full">
                  <div>
                    {item.isFinished ? (
                      <DoneSvg className="sm:h-9 sm:w-9 h-6 w-6 fill-green-400" />
                    ) : (
                      <PendentSvg className="sm:h-9 sm:w-9 h-6 w-6 fill-red-400" />
                    )}
                  </div>
                  <div className="sm:text-lg">{item.name}</div>
                </div>
                {/* Dates */}
                <div className="hidden sm:flex gap-2 text-slate-400 items-center">
                  from
                  <div>{item.startedAt}</div>
                  to
                  <div>{item.finishedAt}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
