import React from "react";
// 💡 DICA: Importe sua foto aqui em cima! 
import minhaFoto from '../assets/me.png';

export default function AboutMe() {
  return (
    <section id="sobre" className="flex flex-col items-center py-20 bg-[#0a0a0a]">
      <h1 className="text-3xl font-medium text-white mb-12">Sobre mim</h1>

      {/* Container que alinha o card e a foto. 
          flex-col (celular) -> md:flex-row (telas maiores colocam lado a lado) */}
      <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center px-5 max-w-5xl w-full">

        {/* 1. CARD DE TEXTO */}
        {/* flex-1 faz o card de texto ocupar o maior espaço possível */}
        <div className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-[2rem] p-8 md:p-10 flex-1">
          <p className="text-[#ccc] leading-relaxed mb-6 text-lg">
            Sou um desenvolvedor Full Stack movido pela curiosidade e paixão em resolver problemas. Domino tecnologias como Node, Express e React, unindo performance no back-end com usabilidade no front-end.
          </p>
          <p className="text-[#ccc] leading-relaxed text-lg">
            Meu objetivo é claro: criar softwares que não apenas funcionem, mas que entreguem soluções inovadoras e facilitem o dia a dia. Bem-vindo ao meu mundo de código
          </p>
        </div>

        {/* 2. ÁREA DA FOTO */}
        {/* shrink-0 impede que a foto seja esmagada pelo texto. Largura fixa no PC e 100% no celular */}
        <div className="shrink-0 w-full md:w-[320px] md:h-auto">
          <img 
            // Substitua esta string pela variável da sua imagem importada (ex: src={minhaFoto})
            src={minhaFoto} 
            alt="Foto de João Guilherme" 
            className="w-full h-full object-cover rounded-[2rem] border border-[#2a2a2a]"
          />
        </div>

      </div>
    </section>
  );
}