import Image from "next/image";
import ProgrammerSvg from '../../../public/programmer.svg';

export function AboutMe() {
  return (
    <div id="sobre" className="flex h-fit xl:min-h-[70vh] min-h-screen flex-col 2xl:gap-6 gap-4">
      <div className="w-full">
        <h1 className="text-2xl 2xl:text-5xl lg:text-4xl sm:text-3xl font-semibold">
          Sobre mim:
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full lg:justify-between">
        <div className="flex md:w-2/4 flex-col gap-5 sm:text-lg 2xl:text-2xl lg:text-xl">
          <p>
            Eu me chamo Murilo, sou desenvolvedor Full-stack, <strong>em busca de 
            oportunidades no mercado de trabalho.</strong> Atualmente tenho 
            <strong> experiência de 2 anos</strong> criando projetos pessoais 
            e trabalhando de forma freelancer. 
          </p>
          <p>
            Apaixonado pela a tecnologia, em especial <strong>Back-end</strong>, 
            decidi perseguir meu sonho e estudar programação com o intuito de um 
            dia, exercer o cargo de <strong>desenvolvedor Full-Stack</strong>
          </p>
        </div>
        <div className="lg:w-[60%] md:w-2/4  2xl:w-[40%] xl:w-1/3 flex justify-center items-center">
          <Image src={ProgrammerSvg} height={500} width={500} alt="A programmer programming" />
        </div>
      </div>
    </div>
  );
}
