export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="flex justify-between items-center py-4 px-8 md:px-16 bg-appBg/80 backdrop-blur-md sticky top-0 z-50 border-b border-appBorderStrong shadow-sm transition-colors duration-300">
      <span className="text-2xl font-bold tracking-tight text-appText">
        BartoszSocha<span className='text-appPrimary'>.pl</span>
      </span>
      
      <div className="flex items-center gap-4 md:gap-6">
        <button 
          onClick={toggleTheme}
          className="p-3 rounded-2xl bg-appCard border border-appBorderStrong text-appText hover:text-brand-primary transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Przełącz motyw"
          title="Przełącz motyw"
        >
          {theme === 'light' ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </button>

        <a 
          href="/cv-bartosz-socha.pdf" 
          download
          className="text-sm md:text-base font-medium bg-brand-primary text-white px-6 py-2.5 rounded-2xl hover:bg-brand-dark shadow-md hover:shadow-lg inline-block transition-all duration-300  hover:scale-105 active:scale-95"
        >
          Pobierz CV
        </a>
      </div>
    </nav>
  );
}