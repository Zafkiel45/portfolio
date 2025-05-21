import { Card } from "./card";
import { JavaScriptSvg } from "../svg/javascript";
import { HTMLSvg } from "../svg/html";
import { CSSSvg } from "../svg/css";
import { TypeScriptSVG } from "../svg/typescript";
import { TailwindcssSVG } from "../svg/tailwindcss";
import { NextjsSVG } from "../svg/nextjs";
import { NodejsSVG } from "../svg/node";
import { ReactSVG } from "../svg/react";
import { SkillSeparator } from "./skills_separator.components";
import { SkillContainer } from "./skills_container.components";
import { CardContainer } from "./cards_container";
import { BunSVG } from "../svg/bun";
import { RustSVG } from "../svg/rust";
import { AstroSVG } from "../svg/astro";

export function SkillsSection() {

const FRONT_END_SKILLS = [
    {
      name: "HTML",
      icon: <HTMLSvg className="w-full h-full"/>,
      hasRoadmap: false,
      roadmapUrl: '/#',
      description: 'HTML é uma linguagem de marcação para a web, simples de usar e muito poderoso também. HTML é considerado a espinha dorsal da web.'
    },
    {
      name: "CSS",
      icon: <CSSSvg className="w-full h-full"/>,
      hasRoadmap: false,
      roadmapUrl: '/#',
      description: 'CSS é uma linguagem de estilização, utilizado para trazer designs de alto nível para a web. Moderno, flexível e poderoso!'
    },
    {
      name: "JavaScript",
      icon: <JavaScriptSvg className="w-full h-full"/>,
      hasRoadmap: true,
      roadmapUrl: '/roadmap/javascript',
      description: 'Um das linguagens mais populares do mundo, tanto para Front-end, quanto para Backend.'
    },
    {
      name: "TypeScript",
      icon: <TypeScriptSVG className="w-full h-full"/>,
      hasRoadmap: false,
      roadmapUrl: '/#',
      description: 'Typescript é superset para JavaScript, adicionando tipagem estática e muito mais para uma das linguagens mais usadas no mundo.'
    },
    {
      name: "Tailwindcss",
      icon: <TailwindcssSVG className="w-full h-full"/>,
      hasRoadmap: false,
      roadmapUrl: '/#',
      description: 'Tailwincss é um framework para CSS, aprimorando a produtividade com CSS.'
    },
    {
      name: "Next.js",
      icon: <NextjsSVG className="w-full h-full"/>,
      hasRoadmap: false,
      roadmapUrl: '/#',
      description: 'Next.js é um framework para JavaScript. Next.js é considerado uma das opção mais consolidadas na criação de sites modernos.'
    },
    {
      name: "React",
      icon: <ReactSVG className="w-full h-full"/>,
      hasRoadmap: false,
      roadmapUrl: '/#',
      description: 'React é uma biblioteca para JavaScript, criado e mantido pela a Meta. React é a tecnologia que sustenta o Next.js por debaixo dos panos.'
    },
    {
      name: "Astro",
      icon: <AstroSVG className="w-full h-full"/>,
      hasRoadmap: false,
      roadmapUrl: '/#',
      description: 'Astro é um framework para JavaScript moderno, leve e moderno. Astro é 0 JavaScript por padrão, permitindo a criação de sites ultra performáticos.'
    },
  ]
const BACK_END_SKILLS = [
  {
    name: "Node.js",
    icon: <NodejsSVG className="w-full h-full"/>,
    hasRoadmap: false,
    roadmapUrl: '/#',
    description: 'Node.js é um runtime para JavaScript, cujo permite a execução de JavaScript fora da web.'
  },
  {
    name: "Bun",
    icon: <BunSVG className="w-full h-full"/>,
    hasRoadmap: false,
    roadmapUrl: '/#',
    description: 'Bun é um runtime alternativo ao Node.js. Bun tem o proposito de ser um substituto do Node.js, provendo mas modernidade e segurança.'
  },
  {
    name: "Rust",
    icon: <RustSVG className="w-full h-full"/>,
    hasRoadmap: true,
    roadmapUrl: '/roadmap/rust',
    description: 'Rust é uma linguagem de programação com foco em segurança e performance.'
  },
]

  return (
    <div className="flex flex-col 2xl:gap-10 gap-5 w-full">
      <div className="w-full">
        <h1 className="text-2xl 2xl:text-5xl lg:text-4xl sm:text-3xl font-semibold">
          Skills:
        </h1>
      </div>
      <div className="sm:text-lg 2xl:text-2xl lg:text-xl">
        <p >
          Uma lista de todas as tecnologias e ferramentas de meu domínio. Para
          cada tecnologia, eu tenho ao menos um projeto sólido usando a
          tecnologia em questão.
        </p>
        <br />
        <p>
          Tecnologias com uma bolinha verde pulsando possui um roadmap. Clique 
          no cartão da &quot;skill&quot; para abrir o Roadmap. Tecnologias que 
          não tem um Roadmap podem ter um no futuro, mas algumas outras não teram,
          como HTML e CSS.
        </p>
      </div>
      <div className="md:gap-5 sm:flex-row sm:flex-wrap flex flex-col gap-3 items-center">
        <SkillContainer>
          <SkillSeparator title="Front-end" />
          <CardContainer>
            {FRONT_END_SKILLS.map((item, idx) => {
              return (
                <Card 
                  key={1 + idx}
                  technology={item.icon} 
                  hasRoadmap={item.hasRoadmap} 
                  url={item.roadmapUrl} 
                  technologyName={item.name} 
                >
                  {item.description}
                </Card>
              )
            })}
          </CardContainer>
        </SkillContainer>
        <SkillContainer>
          <SkillSeparator title="Back-end" />
          <CardContainer>
            {BACK_END_SKILLS.map((item, idx) => {
              return (
                <Card 
                  hasRoadmap={item.hasRoadmap}
                  technology={item.icon} 
                  technologyName={item.name}
                  url={item.roadmapUrl}
                  key={1 + idx}
                >
                  {item.description}
                </Card>
              )
            })}
          </CardContainer>
        </SkillContainer>
      </div>
    </div>
  );
}
