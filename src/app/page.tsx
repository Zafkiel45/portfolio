import { Header } from "@/components/header";
import { Nav } from "@/components/nav";
import { Button } from "@/components/button";
import { Main } from "@/components/main";
import { StandOutText } from "@/components/stand_out_text";
import { ContainerSVG } from "@/components/container_svg";
// svgs
import { MainSVG } from "@/components/svg/main_svg";

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
        <div className="flex justify-center">
          <div className="w-3/5 flex flex-col gap-2">
            <h1 className="text-2xl">
              <StandOutText>Desenvolvedor</StandOutText> <br />
              <StandOutText>Front-End...</StandOutText>
            </h1>
            <p className="text-base">
              Criando sites modernos 
              com excelência utilizando tecnologias de ponta.
            </p>
          </div>
          <ContainerSVG className="w-2/5 h-full">
            <MainSVG className="w-full h-full"/>
          </ContainerSVG>
        </div>
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
      </Main>
    </>
  );
}
