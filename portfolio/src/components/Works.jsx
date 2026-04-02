import React from "react";

export default function Works() {
    return(
        <section id="trabalhos" className="flex flex-col items-center py-20 bg-[#0a0a0a]">
            <h1 className="text-3xl font-medium text-white mb-12">Trabalhos</h1>

        {/* Grid para alinhar os cards lado a lado (caso tenha mais de um) */}
        <div className="flex gap-6 flex-wrap justify-center px-5">

            {/* --- INÍCIO DO SEU CARD --- */}
            <div className="w-full max-w-[350px] rounded-[2rem] overflow-hidden bg-[#1c1c1c] border border-[#2a2a2a]">
            
            {/* 1. ÁREA DA IMAGEM (Topo) */}
            <div className="bg-[#8b8b8b] h-52 flex items-center justify-center relative">
                {/* Simulando a sua logo do DeFlash por enquanto */}
                <h3 className="text-4xl font-bold text-black tracking-tight flex items-center gap-2">
                Simulador
                </h3>
            </div>

            {/* 2. ÁREA DE CONTEÚDO (Baixo) */}
            <div className="p-7">
                <h2 className="text-xl font-bold text-white mb-3">
                Simulador de Estampa
                </h2>
                
                <p className="text-sm text-[#aaa] leading-relaxed mb-6">
                Simulador de estampa em camisas dentro de mockup onde o cliente pode personalizar conforme o seu gosto
                </p>

                {/* CONTAINER DAS TECNOLOGIAS */}
                {/* flex-wrap garante que se os itens passarem da tela, eles descem pra linha de baixo */}
                <div className="flex flex-wrap gap-2">
                    {/* Transformei os <p> em <span> pois é o padrão correto para essas "tags" */}
                    <span className="border border-[#444] bg-[#222] text-[#ccc] px-3 py-1 rounded-full text-xs font-medium">Angular</span>
                    <span className="border border-[#444] bg-[#222] text-[#ccc] px-3 py-1 rounded-full text-xs font-medium">Express</span>
                    <span className="border border-[#444] bg-[#222] text-[#ccc] px-3 py-1 rounded-full text-xs font-medium">Firebase</span>
                    <span className="border border-[#444] bg-[#222] text-[#ccc] px-3 py-1 rounded-full text-xs font-medium">TypeScript</span>
                    <span className="border border-[#444] bg-[#222] text-[#ccc] px-3 py-1 rounded-full text-xs font-medium">SCSS</span>
                </div>
            </div>

            </div>

            {/* --- DeFlash --- */}

            <div className="w-full max-w-[350px] rounded-[2rem] overflow-hidden bg-[#1c1c1c] border border-[#2a2a2a]">
            
            {/* 1. ÁREA DA IMAGEM (Topo) */}
            <div className="bg-[#8b8b8b] h-52 flex items-center justify-center relative">
                {/* Simulando a sua logo do DeFlash por enquanto */}
                <h3 className="text-4xl font-bold text-black tracking-tight flex items-center gap-2">
                DeFlash
                </h3>
            </div>

            {/* 2. ÁREA DE CONTEÚDO (Baixo) */}
            <div className="p-7">
                <h2 className="text-xl font-bold text-white mb-3">
                DeFlash
                </h2>
                
                <p className="text-sm text-[#aaa] leading-relaxed mb-6">
                Site de agendamento de serviços de aula de inglês para crianças , consultoria e comércio
                </p>

                {/* CONTAINER DAS TECNOLOGIAS */}
                {/* flex-wrap garante que se os itens passarem da tela, eles descem pra linha de baixo */}
                <div className="flex flex-wrap gap-2">
                    {/* Transformei os <p> em <span> pois é o padrão correto para essas "tags" */}
                    <span className="border border-[#444] bg-[#222] text-[#ccc] px-3 py-1 rounded-full text-xs font-medium">React</span>
                    <span className="border border-[#444] bg-[#222] text-[#ccc] px-3 py-1 rounded-full text-xs font-medium">Express</span>
                    <span className="border border-[#444] bg-[#222] text-[#ccc] px-3 py-1 rounded-full text-xs font-medium">PostgreSQL</span>
                    <span className="border border-[#444] bg-[#222] text-[#ccc] px-3 py-1 rounded-full text-xs font-medium">TypeScript</span>
                    <span className="border border-[#444] bg-[#222] text-[#ccc] px-3 py-1 rounded-full text-xs font-medium">Tailwind</span>
                </div>
            </div>

            </div>

            {/* --- OticaCRM --- */}

            <div className="w-full max-w-[350px] rounded-[2rem] overflow-hidden bg-[#1c1c1c] border border-[#2a2a2a]">
            
            {/* 1. ÁREA DA IMAGEM (Topo) */}
            <div className="bg-[#8b8b8b] h-52 flex items-center justify-center relative">
                {/* Simulando a sua logo do DeFlash por enquanto */}
                <h3 className="text-4xl font-bold text-black tracking-tight flex items-center gap-2">
                ÓticaCRM
                </h3>
            </div>

            {/* 2. ÁREA DE CONTEÚDO (Baixo) */}
            <div className="p-7">
                <h2 className="text-xl font-bold text-white mb-3">
                Ótica CRM
                </h2>
                
                <p className="text-sm text-[#aaa] leading-relaxed mb-6">
                Sistema de gestão para ótica, com funcionalidades de gerenciamento de clientes, produtos e vendas.
                </p>

                {/* CONTAINER DAS TECNOLOGIAS */}
                {/* flex-wrap garante que se os itens passarem da tela, eles descem pra linha de baixo */}
                <div className="flex flex-wrap gap-2">
                    {/* Transformei os <p> em <span> pois é o padrão correto para essas "tags" */}
                    <span className="border border-[#444] bg-[#222] text-[#ccc] px-3 py-1 rounded-full text-xs font-medium">React</span>
                    <span className="border border-[#444] bg-[#222] text-[#ccc] px-3 py-1 rounded-full text-xs font-medium">Express</span>
                    <span className="border border-[#444] bg-[#222] text-[#ccc] px-3 py-1 rounded-full text-xs font-medium">PostgreSQL</span>
                    <span className="border border-[#444] bg-[#222] text-[#ccc] px-3 py-1 rounded-full text-xs font-medium">TypeScript</span>
                    <span className="border border-[#444] bg-[#222] text-[#ccc] px-3 py-1 rounded-full text-xs font-medium">Tailwind</span>
                </div>
            </div>

            </div>

        </div>
        </section>
    )
}