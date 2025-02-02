import { Header } from "@/components/header";
import { Nav } from "@/components/nav";
import { Button } from "@/components/button";

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
    </>
  );
}
