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
            <Card
              technology={<HTMLSvg className="sm:h-10 sm:w-10 h-8 w-8"  />}
              technologyName="HTML"
              hasRoadmap={false}
              url="/#"
            >
              HTML é uma linguagem de marcação para a web, simples de usar e
              muito poderoso também. HTML é considerado a espinha dorsal da web.
            </Card>
            <Card
              technology={<CSSSvg className="sm:h-10 sm:w-10 h-8 w-8"  />}
              technologyName="CSS"
              hasRoadmap={false}
              url="/#"
            >
              CSS é uma linguagem de estilização, utilizado para trazer designs
              de alto nível para a web. Moderno, flexível e poderoso!
            </Card>
            <Card
              technology={<JavaScriptSvg className="sm:h-10 sm:w-10 h-8 w-8"  />}
              technologyName="JavaScript"
              hasRoadmap={true}
              url="/roadmap/javascript"
            >
              Um das linguagens mais populares do mundo, tanto para Front-end,
              quanto para Backend.
            </Card>
            <Card
              technology={<TypeScriptSVG className="sm:h-10 sm:w-10 h-8 w-8"  />}
              technologyName="TypeScript"
              hasRoadmap={false}
              url="/#"
            >
              Typescript é superset para JavaScript, adicionando tipagem
              estática e muito mais para uma das linguagens mais usadas no
              mundo.
            </Card>
            <Card
              technology={<TailwindcssSVG className="sm:h-10 sm:w-10 h-8 w-8"  />}
              technologyName="Tailwindcss"
              hasRoadmap={false}
              url="/#"
            >
              Tailwincss é um framework para CSS, aprimorando a produtividade
              com CSS.
            </Card>
            <Card
              technology={<NextjsSVG className="sm:h-10 sm:w-10 h-8 w-8"  />}
              technologyName="Next.js"
              hasRoadmap={false}
              url="/#"
            >
              Next.js é um framework para JavaScript. Next.js é considerado uma
              das opção mais consolidadas na criação de sites modernos.
            </Card>
            <Card
              technology={<ReactSVG className="sm:h-10 sm:w-10 h-8 w-8"  />}
              technologyName="React"
              hasRoadmap={false}
              url="/#"
            >
              React é uma biblioteca para JavaScript, criado e mantido pela a
              Meta. React é a tecnologia que sustenta o Next.js por debaixo dos
              panos.
            </Card>
            <Card
              technology={<AstroSVG className="sm:h-10 sm:w-10 h-8 w-8"  />}
              technologyName="Astro"
              hasRoadmap={false}
              url="/#"
            >
              Astro é um framework para JavaScript moderno, leve e moderno. 
              Astro é 0 JavaScript por padrão, permitindo a criação de sites 
              ultra performáticos.
            </Card>
          </CardContainer>
        </SkillContainer>
        <SkillContainer>
          <SkillSeparator title="Back-end" />
          <CardContainer>
            <Card
              technology={<NodejsSVG className="sm:h-10 sm:w-10 h-8 w-8" />}
              technologyName="Node.js"
              hasRoadmap={false}
              url="/#"
            >
              Node.js é um runtime para JavaScript, cujo permite a execução de
              JavaScript fora da web.
            </Card>
            <Card
              technology={<BunSVG className="sm:h-10 sm:w-10 h-8 w-8" />}
              technologyName="Bun"
              hasRoadmap={false}
              url="/#"
            >
              Bun é um runtime alternativo ao Node.js. Bun tem o proposito de 
              ser um substituto do Node.js, provendo mas modernidade e segurança.
            </Card>
            <Card
              technology={<RustSVG className="sm:h-10 sm:w-10 h-8 w-8"  />}
              technologyName="Rust"
              hasRoadmap={true}
              url="/roadmap/rust"
            >
              Rust é uma linguagem de programação com foco em segurança e performance. 
            </Card>
          </CardContainer>
        </SkillContainer>
      </div>
    </div>
  );
}
