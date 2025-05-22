import { Card } from "./card";
import { SkillSeparator } from "./skills_separator.components";
import { SkillContainer } from "./skills_container.components";
import { CardContainer } from "./cards_container";
import { SKILL_CATEGORY } from "@/data/skills/skills_category.data";

export function SkillsSection() {

  return (
    <section className="flex flex-col 2xl:gap-10 gap-5 w-full">
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
        {SKILL_CATEGORY.map((item) => {
          return (
            <SkillContainer key={item.title}>
              <SkillSeparator title={item.title}/>
              <CardContainer>
                {item.skills.map((skill) => {
                  return (
                    <Card 
                      key={skill.name}
                      hasRoadmap={skill.hasRoadmap}
                      technology={skill.icon}
                      technologyName={skill.name}
                      url={skill.roadmapUrl}
                    >
                      {skill.description}
                    </Card>
                  )
                })}
              </CardContainer>
            </SkillContainer>
          )
        })}
      </div>
    </section>
  );
}
