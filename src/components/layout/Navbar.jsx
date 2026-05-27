import { useState, useEffect, useRef } from 'react';

export default function Navbar({ theme, toggleTheme }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const modalRef = useRef(null);

  useEffect(() => {
    if (!isModalOpen) return;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
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
        const inputElement = modalRef.current.querySelector('input');
        if (inputElement) {
          inputElement.focus();
        } else {
          const firstButton = modalRef.current.querySelector('button');
          if (firstButton) firstButton.focus();
        }
      }
    }, 10);

    return () => {
      document.body.style.overflow = ''; 
      document.documentElement.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/xkoekvye', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          email: email, 
          message: 'Prośba o przesłanie CV z portfolio' 
        })
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => {
          setIsModalOpen(false);
          setStatus('idle');
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center py-4 px-8 md:px-16 bg-appBg/80 backdrop-blur-md sticky top-0 z-50 border-b border-appBorderStrong shadow-sm">
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

          <button 
            onClick={() => {
              setIsModalOpen(true);
              setStatus('idle'); 
            }}
            className="text-sm md:text-base font-medium bg-brand-primary text-white px-6 py-2.5 rounded-2xl hover:bg-brand-dark shadow-md hover:shadow-lg inline-block transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Pobierz CV
          </button>
        </div>
      </nav>

      {isModalOpen && (
        <div 
          className="fixed inset-0 z-100 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            className="bg-appCard border border-appBorderStrong rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-appMuted hover:text-appText transition-colors p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-full"
              aria-label="Zamknij"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-2xl font-bold text-appText mb-2">Zdobądź moje CV</h3>
            
            {status === 'success' ? (
              <div className="py-8 text-center flex flex-col items-center gap-4 animate-fade-in">
                <div className="w-16 h-16 bg-brand-surface text-brand-primary rounded-full flex items-center justify-center mb-2">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-appText font-medium text-lg">Dzięki za zainteresowanie!</p>
                <p className="text-appMuted text-sm">Zapisalem Twój adres e-mail. Prześlę Ci CV najszybciej jak to możliwe.</p>
              </div>
            ) : (
              <>
                <p className="text-appMuted text-sm mb-6">
                  Zostaw swój adres e-mail, a ja osobiście prześlę Ci zaktualizowany plik w wiadomości zwrotnej.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="email" className="sr-only">Adres e-mail</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="twoj.adres@email.com"
                      className="w-full px-4 py-3 bg-appInputBg border border-appBorderStrong rounded-xl text-appText focus:outline-none focus-visible:ring-2 focus:ring-2 focus:ring-brand-primary transition-all"
                    />
                  </div>
                  
                  {status === 'error' && (
                    <span className="text-red-500 text-sm font-medium">Coś poszło nie tak. Spróbuj ponownie później.</span>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full bg-brand-primary text-white font-medium py-3 rounded-xl hover:bg-brand-dark transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-appCardElevated focus-visible:ring-brand-primary"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Wysyłanie...
                      </>
                    ) : (
                      'Wyślij prośbę o CV'
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}