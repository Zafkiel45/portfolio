import { Header } from "@/components/header";
import { Nav } from "@/components/nav";
import { Button } from "@/components/button";
import { StandOutText } from "@/components/stand_out_text";
import { Card } from "@/components/card";
import { CardProject } from "@/components/card-project";
import Link from "next/link";
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
import { HeaderButton } from "@/components/header/button_header.component";
import { MainScreen } from "@/components/main_screen/main_screen.component";
import { AboutMe } from "@/components/about_me/about_me_section.component";

export default function Home() {
  return (
    <>
      <Header extraClasses="pt-5 px-4 2xl:px-14 lg:px-10 sm:px-6 2xl:mb-12 mb-5">
        <Nav extraClasses="justify-center gap-2">
          <HeaderButton target="sobre" content="Sobre" />
          <HeaderButton target="skills" content="Skills" />
          <HeaderButton target="projetos" content="Projetos" />
          <HeaderButton target="contato" content="Contanto" />
        </Nav>
      </Header>
      <main className="flex lg:px-16 px-4 sm:px-6 flex-col gap-10">
        {/* main screen section */}
        <MainScreen />
        {/* About me section */}
        <AboutMe />
        {/* skills section */}
        <div className="flex flex-col 2xl:gap-10 gap-5 w-full">
          <div className="w-full">
            <h1 className="text-2xl 2xl:text-5xl lg:text-4xl sm:text-3xl font-semibold">
              Skills:
            </h1>
          </div>
          <div>
            <p className="sm:text-lg 2xl:text-2xl lg:text-xl">
              Abaixo estão todas as tecnologias das quais eu já tive contato,
              desde uma
              <StandOutText>
                simples interação até a criação de projetos sólidos.
              </StandOutText>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:gap-5 sm:flex-wrap gap-3 items-center">
            <Card
              technology={<HTMLSvg className="h-11 w-11" />}
              technologyLevel="experiente"
              technologyName="HTML"
            >
              HTML é uma linguagem de marcação que é considerada a espinha
              dorsal da web. Apesar de simples, possui modernidade e é
              amplamente utilizado no mundo todo.
            </Card>
            <Card
              technology={<CSSSvg className="h-11 w-11" />}
              technologyLevel="experiente"
              technologyName="CSS"
            >
              CSS é uma linguagem de estilização para a web. Assim como HTML,
              CSS é utilizado por todo o mundo, até mesmo fora do escopo da web.
            </Card>
            <Card
              technology={<JavaScriptSvg className="h-11 w-11" />}
              technologyLevel="experiente"
              technologyName="JavaScript"
            >
              Extremamente versátil e utilizado, com uma comunidade extensa,
              JavaScript é uma das linguagens de programação mais populares no
              mundo inteiro.
            </Card>
            <Card
              technology={<ReactSVG className="h-11 w-11" />}
              technologyLevel="intermediário"
              technologyName="React"
            >
              Criado e mantido pela a empresa meta, React é uma das bibliotecas
              mais populares para JavaScript. React é poderoso, moderno e
              flexível.
            </Card>
            <Card
              technology={<TypeScriptSVG className="h-11 w-11" />}
              technologyLevel="intermediário"
              technologyName="TypeScript"
            >
              TypeScript estende o JavaScript com mais funcionalidade. Com
              tipagem estática, JavaScript fica mais seguro e mais fácil de
              manter e criar aplicações.
            </Card>
            <Card
              technology={<SassSVG className="h-11 w-11" />}
              technologyLevel="intermediário"
              technologyName="Sass"
            >
              Sass é um pré-processador para CSS. Sass, adiciona muitas
              funcionalidades adicionais ao CSS, como variáveis e etc... Além
              disso, é bastante simples de utilizar.
            </Card>
            <Card
              technology={<TailwindcssSVG className="h-11 w-11" />}
              technologyLevel="experiente"
              technologyName="Tailwindcss"
            >
              Tailwindcss é um framework para CSS. Tailwindcss é poderoso, leve
              e prático. CSS é levado a outro nível com Tailwindcss. Tailwindcss
              é o futuro do CSS moderno.
            </Card>
            <Card
              technology={<NextjsSVG className="h-11 w-11" />}
              technologyLevel="intermediário"
              technologyName="Next.js"
            >
              Next.js é um framework para JavaScript poderoso e popular. Next.js
              é mantido pela a gigante Vercel e é amplamente adotado pela as
              empresas.
            </Card>
            <Card
              technology={<NodejsSVG className="h-11 w-11" />}
              technologyLevel="iniciante"
              technologyName="Node.js"
            >
              Node.js é um runtime para JavaScript que permite executar
              JavaScript fora da web. Isto permite utiliza JavaScript no
              back-end, ampliado a flexibilidade do JavaScript.
            </Card>
            <Card
              technology={<SequelizeSVG className="h-11 w-11" />}
              technologyLevel="iniciante"
              technologyName="Sequelize"
            >
              Sequelize é um ORM para Node.js. Sendo uma tecnologia ainda em
              Desenvolvimento , Sequelize já é uma das tecnologias mais
              requisitadas quando se trata de ORMs.
            </Card>
            <Card
              technology={<JavaSVG className="h-11 w-11" />}
              technologyLevel="iniciante"
              technologyName="Java"
            >
              Uma das tecnologias mais consolidadas no mundo. Java apenas cresce
              sendo utilizado na criação de sites, jogos e aplicações para
              desktop/mobile.
            </Card>
          </div>
        </div>
        {/* project section */}
        <div className="flex flex-col 2xl:gap-6 gap-4">
          <div>
            <h1 className="font-semibold sm:text-3xl 2xl:text-5xl lg:text-4xl text-2xl">
              Projetos:
            </h1>
          </div>
          <div className="w-full">
            <p className="text-base sm:text-lg 2xl:text-2xl lg:text-xl ">
              Uma lista dos meus principais projetos e ferramentas. Todo os
              projetos estão disponíveis para o público visualizar.
            </p>
          </div>
          <div>
            <CardProject
              projectName="Projeto: To Do List"
              projectLinkName=" To do List"
              projectLink="https://next-todo-list-336m.vercel.app/"
              projectTags="#next.js #react #tailwindcss #typescript"
            >
              Mantenha suas tarefas organizadas e atualizadas de forma
              eficiente, prática e flexível.
            </CardProject>
          </div>
        </div>
        {/* contact section */}
        <div className="flex flex-col lg:gap-5 gap-3">
          <div className="w-full">
            <h1 className="text-2xl sm:text-3xl 2xl:text-5xl lg:text-4xl font-semibold">
              Contato:
            </h1>
          </div>
          <div className="w-full sm:text-lg 2xl:text-2xl lg:text-xl">
            Gostou do que viu ate agora? Que tal contratar meus serviços e
            garantir um site moderno, responsivo, e bem otimizado agora mesmo?
            Basta entrar em contato comigo agora mesmo!
          </div>
          <div className="w-full flex items-center gap-3">
            <Link
              className="bg-white 2xl:text-2xl text-black sm:text-lg lg:text-xl rounded-md px-2"
              href={
                "https://api.whatsapp.com/send?phone=5583996364857&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento."
              }
            >
              <Button content="Whatsapp" />
            </Link>
            <Link
              className="bg-white 2xl:text-2xl text-black sm:text-lg lg:text-xl rounded-md px-2"
              href={"https://www.instagram.com/murilo__silva_dev/"}
            >
              <Button content="Instagram" />
            </Link>
            <Link
              className="bg-white 2xl:text-2xl text-black  sm:text-lg  lg:text-xl rounded-md px-2"
              href={
                "https://mail.google.com/mail/?view=cm&fs=1&to=murilosilvapb45@gmail.com&su=Olá, gostaria de entrar em contato&body=Corpo do Email"
              }
            >
              <Button content="Email" />
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-[#151515] px-4 sm:px-6 py-5 flex items-center flex-col gap-3 mt-5 relative bottom-0 w-screen border-t border-t-[#444444] h-full">
        <div className="lg:text-lg 2xl:text-2xl">
          <Link href={"https://github.com/Zafkiel45"}>Github</Link> -
          <Link href={"https://www.tabnews.com.br/Programmer404"}>
            {" "}
            Tabnews
          </Link>{" "}
          -<Link href={"https://roadmap.sh/account"}> Roadmap.sh</Link>
        </div>
        <div>
          <p className="italic 2xl:text-xl lg:text-base text-sm text-[#BEBEBE]">
            todos os direitos reservados - 2025
          </p>
        </div>
      </footer>
    </>
  );
}
