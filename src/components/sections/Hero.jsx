import profileImage from '@/assets/images/foto.png';
import profileImage2 from '@/assets/images/foto3.png';

export default function Hero({ theme }) {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center px-8 md:px-32 py-20 md:py-32 gap-12 max-w-7xl mx-auto">
      <div className="flex flex-col gap-6 text-center md:text-left max-w-lg">
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
      
      <div className="w-56 h-56 md:w-80 md:h-80 rounded-full shadow-2xl border-4 border-appCardElevated flex items-center justify-center overflow-hidden bg-appCardElevated shrink-0 relative transition-colors duration-300 group">
        
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