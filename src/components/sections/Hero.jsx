import React from 'react';
import profileImage from '../../assets/images/foto.PNG';
import profileImage2 from '../../assets/images/foto3.PNG';

export default function Hero({ theme }) {
  const patternColor = theme === 'dark' ? '%23ffffff' : '%23000000';
  
  const patternSvg = `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 18h-2v4h2v-4zm0 0v-2h2v2h-2zm0 0v2h-2v-2h2zm0 0h2v-2h-2v2zM0 0h2v2H0V0zm0 38h2v2H0v-2zm38 0h2v2h-2v-2zm0-38h2v2h-2V0z' fill='${patternColor}' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E`;

  return (
    <section className="relative flex flex-col-reverse md:flex-row justify-center md:justify-between items-center px-8 md:px-32 py-20 md:py-32 gap-12 max-w-7xl mx-auto overflow-hidden">
      
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.04] transition-opacity duration-700 pointer-events-none"
        style={{
          backgroundImage: `url("${patternSvg}")`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
        }}
      ></div>

      <div className="relative z-10 flex flex-col gap-6 text-center md:text-left max-w-lg">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-appText leading-[1.1] transition-colors duration-300">
          Hej, jestem<br />
          <span className="text-brand-primary">Bartek</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-light text-appMuted transition-colors duration-300">
          Fullstack Developer
        </h2>
        <p className="text-appMuted leading-relaxed mt-2 hidden md:block transition-colors duration-300">
          Tworzę nowoczesne i wydajne aplikacje internetowe, dbając o płynne działanie na każdym etapie – od bazy danych po interfejs użytkownika.
        </p>
      </div>

      <div className="relative z-10 w-56 h-56 md:w-80 md:h-80 rounded-full shadow-2xl border-4 border-appCardElevated flex items-center justify-center overflow-hidden bg-appCardElevated shrink-0 transition-colors duration-300 group">
        
        <img 
          src={profileImage} 
          alt="Bartosz Socha" 
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105 ${
            theme === 'dark' ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
        <img 
          src={profileImage2} 
          alt="Bartosz Socha" 
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105 ${
            theme === 'light' ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
        
      </div>
    </section>
  );
}