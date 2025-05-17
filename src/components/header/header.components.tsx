'use client';
import { HeaderButton } from "./button_header.component";
import { useScroll } from "@/hooks/useScroll";

export function HeaderSection() {
  const isScroll = useScroll();

  return (
    <nav className={`w-fit h-fit lg:px-3 lg:py-2 rounded-xl flex items-center transition-transform gap-2 ${isScroll ? 'bg-[#0d0d0d] scale-105 border border-[#525252] shadow-md shadow-[#a2ff006b]':'scale-100'}`}>
      <HeaderButton target="sobre" content="Sobre" />
      <HeaderButton target="skills" content="Skills" />
      <HeaderButton target="projetos" content="Projetos" />
      <HeaderButton target="contato" content="Contato" />
    </nav>
  );
}
