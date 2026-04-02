import React from 'react';
import { FaReact, FaNodeJs, FaAngular, FaJava } from 'react-icons/fa';
import { SiSpringboot, SiExpress, SiTypescript, SiThreedotjs } from 'react-icons/si';

export default function Skills() {
  const technologies = [
    { name: 'Spring', icon: <SiSpringboot /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Angular', icon: <FaAngular /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Three.js', icon: <SiThreedotjs /> }
  ];

  return (
    // bg-[#1a1a1a] = fundo da seção
    <section className="bg-[#1a1a1a] py-12 w-full overflow-hidden">
      
      {/* Aqui chamamos a animação que criamos no tailwind.config.js */}
      <div className="flex flex-row items-center w-max animate-scroll-infinite">
        
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center justify-center gap-3 text-[#555] min-w-[160px] transition-colors duration-300 hover:text-[#ccc]">
            <span className="text-6xl flex">{tech.icon}</span>
            <span className="text-sm font-medium lowercase tracking-wide">{tech.name}</span>
          </div>
        ))}

        {technologies.map((tech, index) => (
          <div key={`copy-${index}`} className="flex flex-col items-center justify-center gap-3 text-[#555] min-w-[160px] transition-colors duration-300 hover:text-[#ccc]">
            <span className="text-6xl flex">{tech.icon}</span>
            <span className="text-sm font-medium lowercase tracking-wide">{tech.name}</span>
          </div>
        ))}

      </div>
    </section>
  );
}