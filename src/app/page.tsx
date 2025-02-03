import { Header } from "@/components/header";
import { Nav } from "@/components/nav";
import { Button } from "@/components/button";
import { Main } from "@/components/main";
import { StandOutText } from "@/components/stand_out_text";
import { Card } from "@/components/card";
import { CardProject } from "@/components/card-project";
// svgs
import { HTMLSvg } from "@/components/svg/html";
import { CSSSvg } from "@/components/svg/css";
import { JavaScriptSvg } from "@/components/svg/javascript";
import { ReactSVG } from "@/components/svg/react";
import { TypeScriptSVG } from "@/components/svg/typescript";
import { SassSVG } from "@/components/svg/sass";
import { NextjsSVG } from "@/components/svg/nextjs";
import { TailwindcssSVG } from "@/components/svg/tailwindcss";
import { NodejsSVG } from "@/components/svg/node";
import { SequelizeSVG } from "@/components/svg/sequelize";
import { JavaSVG } from "@/components/svg/java";


export default function Home() {
  return (
    <>
      <Header>
        <Nav extraClasses="justify-center gap-2">
          <Button 
            extraClasses="text-white hover:text-[#00FEFE] transition-colors" 
            content="Sobre"
          />
          <Button 
            extraClasses="text-white hover:text-[#00FEFE] transition-colors" 
            content="Skills"
          />
          <Button 
            extraClasses="text-white hover:text-[#00FEFE] transition-colors" 
            content="Projetos"
          />
          <Button 
            extraClasses="text-white hover:text-[#00FEFE] transition-colors" 
            content="Contato"
          />
        </Nav>
      </Header>
      <Main className="flex flex-col gap-5">
        <div className="flex h-[80vh] relative gap-2 top-24 flex-col items-center">
          <div className="w-full flex items-center flex-col gap-4">
            <h1 className="text-4xl text-center">
              <StandOutText>Desenvolvedor</StandOutText> <br />
              <StandOutText>Front-End</StandOutText>
            </h1>
            <p className="text-base text-center">
              Criando sites <StandOutText>modernos </StandOutText>
              com <StandOutText>excelência</StandOutText> utilizando 
              <StandOutText> tecnologias de ponta.</StandOutText>
            </p>
          </div>
          <div className="flex gap-2 items-center ">
            <Button 
              extraClasses="bg-[#00C8FF] rounded-md " 
              content="Contato" 
            />
            <Button 
              extraClasses="bg-white rounded-md text-black" 
              content="Github" 
            />
          </div>
        </div>
        {/* About me section */}
        <div className="flex flex-col gap-2">
          <div className="w-full">
            <h1 className="text-2xl font-semibold">
              Sobre mim:
            </h1>
          </div>
          <div>
            <p>
              Opa! Eu me chamo Murilo e eu sou atualmente um 
              <StandOutText> desenvolvedor Front-End.</StandOutText>
              <br />
              <br />
              Meu objetivo atual é <StandOutText>fortalecer os fundamentos</StandOutText>, 
              aprimorar pontos que <StandOutText>precisam de refinamento</StandOutText>, 
              e ir escalando pouco a pouco <StandOutText>rumo ao meu objetivo!</StandOutText>
              <br />
              <br />
              A longo prazo eu almejo me tornar 
              um <StandOutText>desenvolvedor Full-Stack</StandOutText>, 
              cujo domina ambos os mundos: Front-End e Back-End.
            </p>
          </div>
          
        </div>
        {/* skills section */}
        <div className="flex flex-col gap-5 w-full">
          <div className="w-full">
            <h1 className="text-2xl font-semibold">
              Skills:
            </h1>
          </div>
          <div>
            <p>
              Abaixo estão todas as tecnologias das
              quais eu já tive contato, desde uma 
              <StandOutText> simples interação até a criação de
              projetos sólidos. </StandOutText>
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <Card 
              technology={<HTMLSvg className="h-8 w-8"/>} 
              technologyLevel="experiente" 
              technologyName="HTML" 
            >
              HTML é uma linguagem de marcação que 
              é considerada a espinha dorsal da web. 
              Apesar de simples, possui modernidade e
              é amplamente utilizado no mundo todo.
            </Card>
            <Card 
              technology={<CSSSvg className="h-8 w-8"/>} 
              technologyLevel="experiente" 
              technologyName="CSS" 
            >
              CSS é uma linguagem de estilização para
              a web. Assim como HTML, CSS é utilizado
              por todo o mundo, até mesmo fora do 
              escopo da web.
            </Card>
            <Card 
              technology={<JavaScriptSvg className="h-8 w-8"/>} 
              technologyLevel="experiente" 
              technologyName="JavaScript" 
            >
              Extremamente versátil e utilizado, com 
              uma comunidade extensa, JavaScript é 
              uma das linguagens de programação mais
              populares no mundo inteiro.
            </Card>
            <Card 
              technology={<ReactSVG className="h-8 w-8"/>} 
              technologyLevel="intermediário" 
              technologyName="React" 
            >
              Criado e mantido pela a empresa meta, 
              React é uma das bibliotecas mais 
              populares para JavaScript. React é 
              poderoso, moderno e flexível.
            </Card>
            <Card 
              technology={<TypeScriptSVG className="h-8 w-8"/>} 
              technologyLevel="intermediário" 
              technologyName="TypeScript" 
            >
              TypeScript estende o JavaScript com mais
              funcionalidade. Com tipagem estática, 
              JavaScript fica mais seguro e mais fácil
              de manter e criar aplicações.
            </Card>
            <Card 
              technology={<SassSVG className="h-8 w-8"/>} 
              technologyLevel="intermediário" 
              technologyName="Sass" 
            >
              Sass é um pré-processador para CSS. Sass,
              adiciona muitas funcionalidades adicionais
              ao CSS, como variáveis e etc... Além disso, 
              é bastante simples de utilizar.
            </Card>
            <Card 
              technology={<TailwindcssSVG className="h-8 w-8"/>} 
              technologyLevel="experiente" 
              technologyName="Tailwindcss" 
            >
              Tailwindcss é um framework para CSS. 
              Tailwindcss é poderoso, leve e prático. CSS
              é levado a outro nível com Tailwindcss.
              Tailwindcss é o futuro do CSS moderno.
            </Card>
            <Card 
              technology={<NextjsSVG className="h-8 w-8"/>} 
              technologyLevel="intermediário" 
              technologyName="Next.js" 
            >
              Next.js é um framework para JavaScript  
              poderoso e popular. Next.js é mantido
              pela a gigante Vercel e é amplamente 
              adotado pela as empresas.
            </Card>
            <Card 
              technology={<NodejsSVG className="h-8 w-8"/>} 
              technologyLevel="iniciante" 
              technologyName="Node.js" 
            >
              Node.js é um runtime para JavaScript que
              permite executar JavaScript fora da web.
              Isto permite utiliza JavaScript no back-end,
              ampliado a flexibilidade do JavaScript.
            </Card>
            <Card 
              technology={<SequelizeSVG className="h-8 w-8"/>} 
              technologyLevel="iniciante" 
              technologyName="Sequelize" 
            >
              Sequelize é um ORM para Node.js. Sendo
              uma tecnologia ainda em Desenvolvimento
              , Sequelize já é uma das tecnologias mais 
              requisitadas quando se trata de ORMs.
            </Card>
            <Card 
              technology={<JavaSVG className="h-8 w-8"/>} 
              technologyLevel="iniciante" 
              technologyName="Java" 
            >
              Uma das tecnologias mais consolidadas 
              no mundo. Java apenas cresce sendo 
              utilizado na criação de sites, jogos e 
              aplicações para desktop/mobile.
            </Card>
          </div>
        </div>
        {/* project section */}
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="font-semibold text-2xl">
              Projetos:
            </h1>
          </div>
          <div className="w-full">
            <p className="text-base">
              Uma lista dos meus principais projetos
              e ferramentas. Todo os projetos estão 
              disponíveis para o público visualizar.
            </p>
          </div>
          <div>
            <CardProject 
              projectName="Projeto: To Do List" 
              projectLinkName=" To do List" 
              projectLink="https://next-todo-list-336m.vercel.app/"
              projectTags="#next.js #react #tailwindcss #typescript"
            >
              Mantenha suas tarefas organizadas e 
              atualizadas de forma eficiente, prática e 
              flexível.  
            </CardProject>
          </div>
        </div>
      </Main>
    </>
  );
}
