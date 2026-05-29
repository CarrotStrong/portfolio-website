import React, { useState, useEffect, useRef } from 'react';
import { projects } from '@/data/content';

const ProjectCard = ({ project, isEven }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  
  const modalRef = useRef(null);

  const imageList = project.images || [project.image];

  useEffect(() => {
    if (project.images && project.images.length > 1 && !isModalOpen) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [project.images, isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) return;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) { 
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else { 
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus(); 
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    setTimeout(() => {
      if (modalRef.current) {
        const firstButton = modalRef.current.querySelector('button');
        if (firstButton) firstButton.focus();
      }
    }, 10);

    return () => {
      document.body.style.overflow = ''; 
      document.documentElement.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const openModal = () => {
    setModalImageIndex(currentImageIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setModalImageIndex((prev) => (prev + 1) % imageList.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setModalImageIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        
        <div 
          onClick={openModal}
          className={`w-full md:w-1/2 aspect-video bg-appCardElevated rounded-2xl shadow-lg border border-appBorderStrong flex group items-center justify-center overflow-hidden shrink-0 relative transition-all duration-500 group-hover:shadow-glass group-hover:-translate-y-1 cursor-pointer ${isEven ? 'md:order-2' : ''}`}
        >
          <div className="absolute inset-0 bg-brand-dark/20 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/90 p-3 rounded-full text-brand-dark transform scale-50 group-hover:scale-100 transition-transform duration-300 shadow-lg">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>

          {project.images ? (
            project.images.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`${project.imageAlt} - klatka ${index + 1}`} 
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              />
            ))
          ) : (
            <img 
              src={project.image} 
              alt={project.imageAlt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          )}
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
          
          {project.link ? (
            <a href={project.link} target="_blank" rel="noreferrer" className="text-brand-primary font-medium hover:text-brand-dark mt-2 inline-flex items-center gap-2 group/link w-fit transition-colors">
              Live Demo 
              <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          ) : (
            <span className="text-appMuted/60 text-sm font-medium mt-2 flex items-center gap-2">
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Live Demo niedostępne
            </span>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div 
          ref={modalRef} 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[500] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={closeModal}
        >
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-full"
            aria-label="Zamknij podgląd"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={imageList[modalImageIndex]} 
              alt={`${project.title} - powiększenie`} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />

            {imageList.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-brand-primary text-white p-3 rounded-full backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                  aria-label="Poprzednie zdjęcie"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={nextImage}
                  className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-brand-primary text-white p-3 rounded-full backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                  aria-label="Następne zdjęcie"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/80 font-medium tracking-widest text-sm">
                  {modalImageIndex + 1} / {imageList.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

// Dodaliśmy parametr 'theme'
export default function Projects({ theme }) {
  // Dynamiczny kolor wzoru z fffuel
  const patternColor = theme === 'dark' ? '%23ffffff' : '%23000000';
  const patternSvg = `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 18h-2v4h2v-4zm0 0v-2h2v2h-2zm0 0v2h-2v-2h2zm0 0h2v-2h-2v2zM0 0h2v2H0V0zm0 38h2v2H0v-2zm38 0h2v2h-2v-2zm0-38h2v2h-2V0z' fill='${patternColor}' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E`;

  return (
    // Dodane relative i overflow-hidden
    <section className="relative px-8 md:px-32 py-24 flex flex-col gap-24 max-w-7xl mx-auto overflow-hidden">
      
      {/* TŁO Z TEKSTURĄ (fffuel) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.04] transition-opacity duration-700 pointer-events-none"
        style={{
          backgroundImage: `url("${patternSvg}")`,
          backgroundSize: '40px 40px',
          // Maskowanie krawędzi, aby wzór nie urywał się nagle
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      ></div>

      {/* Kontener podbijający właściwe elementy nad tło z patternem */}
      <div className="relative z-10 flex flex-col gap-24 w-full">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <h3 className="text-3xl md:text-4xl font-bold text-appText transition-colors duration-300">Wybrane projekty</h3>
            <div className="h-px bg-appBorderStrong flex-1 mt-2 transition-colors duration-300"></div>
          </div>
          
          <p className="text-appMuted text-sm md:text-base leading-relaxed italic transition-colors duration-300 max-w-4xl">
            *Ze względu na charakter komercyjny niektórych projektów, wersje demonstracyjne zostały zanonimizowane i pozbawione elementów wewnętrznych (API, oryginalnej logiki backendowej, danych produkcyjnych oraz identyfikacji wizualnej klientów).
          </p>
        </div>

        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} isEven={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}