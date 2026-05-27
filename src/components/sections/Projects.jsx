import React from 'react';
import { projects } from '../../data/content';

export default function Projects() {
  return (
    <section className="px-8 md:px-32 py-24 flex flex-col gap-24 max-w-7xl mx-auto">
      <div>
        <div className="flex items-center gap-4 mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-appText transition-colors duration-300">Wybrane projekty</h3>
          <div className="h-px bg-appBorderStrong flex-1 mt-2 transition-colors duration-300"></div>
        </div>
        <p className="text-xs uppercase tracking-widest">*Ze względu na charakter komercyjny niektórych projektów, wersje demonstracyjne zostały zanonimizowane i pozbawione elementów wewnętrznych (API, oryginalnej logiki backendowej, danych produkcyjnych oraz identyfikacji wizualnej klientów).</p>
      </div>
      

      {projects.map((project, index) => {
        const isEven = index % 2 !== 0;

        return (
          <div key={project.id} className="flex flex-col md:flex-row items-center gap-12 md:gap-16 group">
            
            <div className={`w-full md:w-1/2 aspect-video bg-appCardElevated rounded-2xl shadow-lg border border-appBorderStrong flex items-center justify-center overflow-hidden shrink-0 transition-all duration-500 group-hover:shadow-glass group-hover:-translate-y-1 ${isEven ? 'md:order-2' : ''}`}>
              <img 
                src={project.image} 
                alt={project.imageAlt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>

            <div className={`flex flex-col gap-4 w-full md:w-1/2 ${isEven ? 'md:order-1' : ''}`}>
              <h4 className="text-2xl font-bold text-appText transition-colors duration-300">{project.title}</h4>
              
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 text-xs font-bold bg-brand-surface text-brand-dark rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-appMuted leading-relaxed transition-colors duration-300">
                {project.description}
              </p>
              
              <a href={project.link} target="_blank" className="text-brand-primary font-medium hover:text-brand-dark mt-2 inline-flex items-center gap-2 group/link w-fit transition-colors">
                Live demo 
                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
}