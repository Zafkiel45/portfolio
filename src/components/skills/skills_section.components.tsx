import { Card } from "./card";
import { FRONT_END_SKILLS, BACK_END_SKILLS } from "@/data/skills/skills.data";
import { SkillSeparator } from "./skills_separator.components";
import { SkillContainer } from "./skills_container.components";
import { CardContainer } from "./cards_container";

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
