import { AstroSVG } from "@/components/svg/astro"
import { BunSVG } from "@/components/svg/bun"
import { CSSSvg } from "@/components/svg/css"
import { HTMLSvg } from "@/components/svg/html"
import { JavaScriptSvg } from "@/components/svg/javascript"
import { NextjsSVG } from "@/components/svg/nextjs"
import { NodejsSVG } from "@/components/svg/node"
import { ReactSVG } from "@/components/svg/react"
import { RustSVG } from "@/components/svg/rust"
import { TailwindcssSVG } from "@/components/svg/tailwindcss"
import { TypeScriptSVG } from "@/components/svg/typescript"

export const FRONT_END_SKILLS = [
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
export const BACK_END_SKILLS = [
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