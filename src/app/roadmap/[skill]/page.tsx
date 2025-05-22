import { StandOutDescription } from "@/components/nodes/standout_description";
import { StandOutTitle } from "@/components/nodes/standout_title";
import ScrumBoard from "../../../../public/svg/scrum_board.svg";
import { RustSVG } from "@/components/svg/rust";
import Image from "next/image";
import { DoneSvg } from "../../../../public/svg/done";
import { PendentSvg } from "../../../../public/svg/pendent";
import { JavaScriptSvg } from "@/components/svg/javascript";
import Link from "next/link";
import { MainScreenButton } from "@/components/main_screen/button_main_screen.component";

type Roadmap = {
  name: string;
  icon: React.JSX.Element;
  goals: {
    name: string;
    isFinished: boolean;
    startedAt: string;
    finishedAt: string;
  }[];
};

export default async function RoadmapRoute({
  params,
}: {
  params: Promise<{ skill: string }>;
}) {
  const currentRoadmap: Roadmap[] = [];
  const roadmaps: Roadmap[] = [
    {
      name: "rust",
      icon: <RustSVG className="sm:h-11 sm:w-11 h-9 w-9" />,
      goals: [
        {
          name: "Syntax and Semantics",
          isFinished: true,
          startedAt: "10/05/2025",
          finishedAt: "20/05/2025",
        },
        {
          name: "Ownership System",
          isFinished: false,
          startedAt: "21/05/2025",
          finishedAt: "?",
        },
        {
          name: "Concurrency and Parallelism",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
        {
          name: "Traits and Generics",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
        {
          name: "Lifetimes and Borrow Checker",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
        {
          name: "Macros and Metaprogramming",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
        {
          name: "Web Development",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
        {
          name: "Asynchronous Programming",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
        {
          name: "Networking",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
        {
          name: "Database and ORM",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
        {
          name: "Cryptography",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
        {
          name: "GUI Development",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
        {
          name: "Testing",
          isFinished: false,
          startedAt: "?",
          finishedAt: "?",
        },
      ],
    },
    {
      name: "javascript",
      icon: <JavaScriptSvg className="sm:h-11 sm:w-11 h-9 w-9" />,
      goals: [
        {
          name: "Javascript Variables",
          isFinished: true,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Datatypes",
          isFinished: false,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Prototypes",
          isFinished: false,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Type Casting",
          isFinished: true,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Indexed collections",
          isFinished: false,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Keyed Collections",
          isFinished: false,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Equality Comparisons",
          isFinished: false,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Loops and Iterations",
          isFinished: true,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Control Flow",
          isFinished: true,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Functions",
          isFinished: false,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "DOM APIs",
          isFinished: true,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Strict Mode",
          isFinished: true,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "'This' Keyword",
          isFinished: false,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Asynchronous JavaScript",
          isFinished: true,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Event Loop",
          isFinished: false,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Working with APIs",
          isFinished: true,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Modules",
          isFinished: true,
          finishedAt: "?",
          startedAt: "?",
        },
        {
          name: "Javascript Iterators and Generators",
          isFinished: false,
          finishedAt: "?",
          startedAt: "?",
        },
      ],
    },
  ];

  const { skill } = await params;

  for (const roadmap of roadmaps) {
    if (roadmap.name === skill) {
      currentRoadmap.push(roadmap);
      break;
    }
  }

  return (
    <main className="flex lg:px-20 xl:px-28 min-[490px]:px-8 pb-5  px-4 sm:px-10 flex-col gap-32">
      <div className="flex h-screen items-center">
        {/* Main Text Container */}
        <div className="flex h-full relative 2xl:gap-5 gap-5 justify-center bottom-5 flex-col sm:gap-6">
          <div className="flex flex-col gap-4">
            <StandOutTitle isCentralized={false} title="Roadmap" />
            <StandOutDescription isCentralized={false}>
              Acompanhe minha jornada nesse mar de aventuras chamado:
              Programação.
            </StandOutDescription>
          </div>
          <div>
            <Link href={'/'}>
              <MainScreenButton btnContent="Página inicial" />
            </Link>
          </div>
        </div>
        {/* Svg of main container */}
        <div className="hidden sm:block">
          <Image
            src={ScrumBoard}
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
