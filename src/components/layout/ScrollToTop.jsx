import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Funkcja sprawdzająca pozycję scrolla
  const toggleVisibility = () => {
    if (document.body.style.overflow === 'hidden') {
      setIsVisible(false);
      return;
    }

    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    const observer = new MutationObserver(() => {
      if (document.body.style.overflow === 'hidden') {
        setIsVisible(false);
      } else {
        toggleVisibility();
      }
    });

    observer.observe(document.body, { 
      attributes: true, 
      attributeFilter: ['style'] 
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      observer.disconnect();
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-3 rounded-2xl bg-brand-primary text-white shadow-xl transition-all duration-300 hover:bg-brand-dark hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-appBg ${
        isVisible 
          ? 'opacity-100 translate-y-0 cursor-pointer' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Wróć na górę strony"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}