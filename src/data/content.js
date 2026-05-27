import wystawka from "@/assets/images/image.jpg";
import systemObiadowy from "@/assets/images/system-obiadowy.png";
import lcu1 from "@/assets/images/lcu-1.png";
import lcu3 from "@/assets/images/lcu-3.png";
import lcu4 from "@/assets/images/lcu-4.png";
import lcu5 from "@/assets/images/lcu-5.png";
import coming from "@/assets/images/coming.png";

const baseTechStack = [
  { 
    name: "React", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
  },
  { 
    name: "Tailwind CSS", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
  },
  { 
    name: "Bootstrap", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" 
  },
  { 
    name: "Node.js", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" 
  },
  { 
    name: "Express", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" 
  },
  { 
    name: "MySQL", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" 
  },
  { 
    name: "PostgreSQL", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" 
  },
  { 
    name: "Docker", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" 
  },
  { 
    name: "PHP", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
  },
  { 
    name: "HTML5", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" 
  },
  { 
    name: "CSS", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" 
  },
  { 
    name: "SASS", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" 
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
  },
  { 
    name: "TypeScript", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" 
  },
  {
    name: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
  },
];

export const techStack = [...baseTechStack, ...baseTechStack];

export const projects = [
  {
    id: 0,
    title: "Reserver Hardware IT - Internal Store (Wystawka)",
    tags: ["React", "TailwindCSS", "Express", "Node.js", "PostgreSQL", "Prisma ORM", "Docker", "Keycloak"],
    description: "Kompleksowa aplikacja Fullstack do zarządzania dystrybucją poleasingowego sprzętu IT wśród pracowników. Wyposażona w rygorystyczny system ról i autoryzacji, zaawansowane filtrowanie, śledzenie historii cyklu życia urządzeń oraz w pełni skonteneryzowane, zautomatyzowane środowisko wdrożeniowe.",
    imageAlt: "Screenshot - Wystawka IT",
    link: "#",
    image: wystawka
  },
  {
    id: 1,
    title: "System obiadowy",
    tags: ["PHP", "JavaScript", "Tailwind CSS"],
    description: "Zautomatyzowany system do obsługi zamówień. Zawiera dwa tryby wyświetlania: 1. Monitory dotykowe (Możliwość scrollowania tabeli, ręcznego odświeżenia, rozwinięcia inicjałów). 2. TV (Automatycznie scrollowana tabela). Poniższe demo obejmuje jedynie wyświetlanie zamówień i wydarzeń.",
    imageAlt: "Screenshot - System obiadowy",
    link: "https://carrotstrong.github.io/dinner-system/tv.html",
    image: systemObiadowy
  },
  {
    id: 2,
    title: "Monolith - LCU Engine",
    tags: ["React", "Tailwind CSS", "Express", "Node.js", "LCU RIOT API"],
    description: "Nowoczesny klient i narzędzie analityczne dla League of Legends zintegrowane bezpośrednio z API gry. Oferuje zaawansowane zarządzanie Warsztatem Hextech, autorski widget społecznościowy z czatem oraz moduły automatyzacji (Auto-Akcept, Insta-lock). *Wymaga uruchomionego League of Legends Client do działania.",
    imageAlt: "Screenshot- Monolith - LCU Engine",
    images: [
      lcu1, lcu3, lcu4, lcu5
    ]
  },
  {
    id: 3,
    title: "Coming Soon...",
    tags: ["NextJS", "React", "TypeScript", "Tailwind CSS", "Strapi"],
    description: "Projekt w trakcie budowy.",
    imageAlt: "Screenshot - Coming Soon",
    image: coming
  }
];