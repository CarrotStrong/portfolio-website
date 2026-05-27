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
    id: 1,
    title: "Reserver Hardware IT - Internal Store (Wystawka)",
    tags: ["React", "TailwindCSS", "Express", "Node.js", "PostgreSQL"],
    description: "Autorski, pełnoprawny system sprzedaży w firmie. Zapewnia wydajne zarządzanie i responsywny interfejs użytkownika.",
    imageAlt: "Screenshot - Wystawka IT",
    link: "#",
    image: "/src/assets/images/image.jpg"
  },
  {
    id: 2,
    title: "System obiadowy",
    tags: ["PHP", "JavaScript", "Tailwind CSS"],
    description: "Zautomatyzowany system do obsługi zamówień. Poniższe demo obejmuje jedynie wyświetlanie zamówień i wydarzeń.",
    imageAlt: "Screenshot - System obiadowy",
    link: "https://carrotstrong.github.io/dinner-system/",
    image: "/src/assets/images/system-obiadowy.png"
  }
];