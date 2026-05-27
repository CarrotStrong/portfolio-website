import { techStack } from '@/data/content';

export default function TechStackCarousel() {
  return (
    <section className="w-full bg-appBg border-y border-appBorderStrong py-12 overflow-hidden shadow-sm relative">
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 100s linear infinite;
        }
      `}</style>

      <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-appBg to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-appBg to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex w-max group">
        
        <div className="flex animate-marquee shrink-0 group-hover:[animation-play-state:paused]">
          {techStack.map((tech, index) => (
            <div key={`track1-${index}`} className="px-8">
              <div className="flex flex-col items-center gap-4 transition-transform hover:scale-110 cursor-default">
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-4 bg-appCardElevated rounded-2xl shadow-sm border border-appBorderStrong hover:shadow-glass hover:border-brand-primary/30 transition-all duration-300">
                  <img 
                    src={tech.icon} 
                    alt={`Logo ${tech.name}`} 
                    className="w-full h-full object-contain drop-shadow-sm" 
                  />
                </div>
                <span className="text-base md:text-lg font-medium text-appText transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex animate-marquee shrink-0 group-hover:[animation-play-state:paused]" aria-hidden="true">
          {techStack.map((tech, index) => (
            <div key={`track2-${index}`} className="px-8">
              <div className="flex flex-col items-center gap-4 transition-transform hover:scale-110 cursor-default">
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-4 bg-appCardElevated rounded-2xl shadow-sm border border-appBorderStrong hover:shadow-glass hover:border-brand-primary/30 transition-all duration-300">
                  <img 
                    src={tech.icon} 
                    alt={`Logo ${tech.name}`} 
                    className="w-full h-full object-contain drop-shadow-sm" 
                  />
                </div>
                <span className="text-base md:text-lg font-medium text-appText transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}