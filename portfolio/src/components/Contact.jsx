import React from "react";

export default function Contact() {
  return (
    <section id="contato" className="flex flex-col items-center py-24 px-5 bg-[#0a0a0a]">
      
      {/* TEXTOS DO CTA */}
      <div className="text-center max-w-2xl mb-12">
        <h1 className="text-4xl md:text-5xl font-medium text-white mb-6">
          Vamos trabalhar juntos?
        </h1>
        <p className="text-[#aaa] text-lg leading-relaxed">
          Tem um projeto em mente ou precisa de ajuda para tirar uma ideia do papel? 
          Preencha o formulário abaixo e entrarei em contato o mais rápido possível!
        </p>
      </div>

      {/* FORMULÁRIO */}
      {/* Substitua o link do action pelo seu link real do Formspree depois */}
      <form 
        action="https://formspree.io/f/SEU_LINK_AQUI" 
        method="POST"
        className="w-full max-w-2xl bg-[#1c1c1c] border border-[#2a2a2a] rounded-[2rem] p-8 md:p-12 flex flex-col gap-5"
      >
        
        {/* Campo de Nome */}
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="text-[#ccc] text-sm font-medium ml-2">Nome / Empresa</label>
          <input 
            type="text" 
            id="nome"
            name="Nome" 
            placeholder="Digite seu nome"
            required
            // focus:border-[#00a8ff] faz a borda ficar azul (igual ao seu header) quando clica no campo
            className="w-full bg-[#111] border border-[#333] text-white px-5 py-4 rounded-2xl focus:outline-none focus:border-[#00a8ff] transition-colors"
          />
        </div>

        {/* Campo de E-mail */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[#ccc] text-sm font-medium ml-2">E-mail</label>
          <input 
            type="email" 
            id="email"
            name="Email" 
            placeholder="seu@melhoremail.com"
            required
            className="w-full bg-[#111] border border-[#333] text-white px-5 py-4 rounded-2xl focus:outline-none focus:border-[#00a8ff] transition-colors"
          />
        </div>

        {/* Campo de Mensagem */}
        <div className="flex flex-col gap-2">
          <label htmlFor="mensagem" className="text-[#ccc] text-sm font-medium ml-2">Mensagem</label>
          <textarea 
            id="mensagem"
            name="Mensagem" 
            placeholder="Descreva brevemente o seu projeto ou necessidade..."
            required
            rows="5"
            // resize-none impede que o usuário estique a caixa e quebre o seu design
            className="w-full bg-[#111] border border-[#333] text-white px-5 py-4 rounded-2xl focus:outline-none focus:border-[#00a8ff] transition-colors resize-none"
          ></textarea>
        </div>

        {/* Botão de Enviar */}
        <button 
          type="submit" 
          className="mt-4 w-full bg-white text-black font-bold text-lg py-4 rounded-full transition-transform duration-300 hover:scale-[1.02] active:scale-95"
        >
          Enviar Mensagem
        </button>

      </form>
    </section>
  );
}