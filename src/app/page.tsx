import { Button } from "@/components/button";
import { CardProject } from "@/components/card-project";
import Link from "next/link";
import { MainScreen } from "@/components/main_screen/main_screen.component";
import { AboutMe } from "@/components/about_me/about_me_section.component";
import { SkillsSection } from "@/components/skills/skills_section.components";

export default function Home() {
  return (
    <>
      <main className="flex lg:px-20 xl:px-28 min-[490px]:px-8 px-4  sm:px-10 flex-col gap-32">
        {/* main screen section */}
        <MainScreen />
        {/* About me section */}
        <AboutMe />
        {/* skills section */}
        <SkillsSection/>
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
