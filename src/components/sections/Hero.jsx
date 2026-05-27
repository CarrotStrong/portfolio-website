export default function Hero() {
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
      
      <div className="w-56 h-56 md:w-80 md:h-80 rounded-full shadow-2xl border-4 border-appCardElevated flex items-center justify-center overflow-hidden bg-appCardElevated shrink-0 relative transition-colors duration-300">
        <div className="absolute inset-0 bg-linear-to-tr from-brand-surface to-transparent opacity-50"></div>
        <svg className="w-24 h-24 text-appMuted/50 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      </div>
    </section>
  );
}