import React from 'react';
// ❌ APAGUE O IMPORT: import '../styles/Hero.css';

export default function Hero() {
  return (
    // bg-[#111] = cor de fundo exata, min-h-[80vh] = altura mínima
    <section className="flex flex-col min-h-[80vh] bg-[#111] text-white">
      
      {/* CABEÇALHO */}
      <header className="flex justify-between items-center py-4 px-10 border-b-2 border-[#2F2E2E]">
        <div className="text-[#ccc] text-base">João Guilherme</div>
        
        <nav className="flex gap-8">
          <a href="#home" className="text-[#ccc] no-underline text-sm transition-colors duration-300 hover:text-[#00a8ff]">Home</a>
          <a href="#projetos" className="text-[#ccc] no-underline text-sm transition-colors duration-300 hover:text-[#00a8ff]">Projetos</a>
          <a href="#trabalhos" className="text-[#ccc] no-underline text-sm transition-colors duration-300 hover:text-[#00a8ff]">Trabalhos</a>
          <a href="#sobre" className="text-[#ccc] no-underline text-sm transition-colors duration-300 hover:text-[#00a8ff]">Sobre Mim</a>
        </nav>
      </header>

      {/* CONTEÚDO CENTRAL */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-5">
        <p className="text-[#ccc] text-lg mb-2">Hi, I'm João Guilherme</p>
        
        <h1 className="text-6xl font-medium leading-tight mb-8">
          I'm Full-Stack<br />
          <span className="italic font-light text-[#aaa]">Developer</span>
        </h1>
        
        <button className="bg-transparent text-white border border-[#333] py-3 px-8 rounded-full text-base cursor-pointer transition-all duration-300 hover:bg-[#333]">
          Ver projetos
        </button>
      </main>

    </section>
  );
}