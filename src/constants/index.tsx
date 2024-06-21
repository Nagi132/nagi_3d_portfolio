import { meta, shopify, starbucks, tesla } from "@/assets/images";
import {
    car,
    contact,

    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    twitter,
    typescript
} from "@/assets/icons";
import css from '@/assets/icons/css.svg';
interface Skill {
    imageUrl: string;
    name: string;
    type: string;
}

interface SocialLink {
    name: string;
    iconUrl: string;
    link: string;
}

interface Project {
    iconUrl: string;
    theme: string;
    name: string;
    description: string;
    link: string;
}

interface Service {
    theme: string;
    name: string;
}

export const skills: Skill[] = [
    // Frontend Technologies
    {
        imageUrl: '/assets/icons/html.svg',
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: '/assets/icons/css.svg',
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: '/assets/icons/javascript.svg',
        name: "JavaScript",
        type: "Frontend/Backend",
    },
    {
        imageUrl: '/assets/icons/typescript.svg',
        name: "TypeScript",
        type: "Frontend/Backend",
    },
    {
        imageUrl: '/assets/icons/react.svg',
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: '/assets/icons/nextjs.svg',
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: '/assets/icons/tailwindcss.svg',
        name: "Tailwind CSS",
        type: "Frontend",
    },

    // Backend Technologies
    {
        imageUrl: '/assets/icons/nodejs.svg',
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: '/assets/icons/express.svg',
        name: "Express",
        type: "Backend",
    },

    // Version Control Systems
    {
        imageUrl: '/assets/icons/git.svg',
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: '/assets/icons/github.svg',
        name: "GitHub",
        type: "Version Control",
    },

    // Containerization Technologies
    {
        imageUrl: '/assets/icons/docker.svg',
        name: "Docker",
        type: "Containerization",
    },

    // Database Technologies
    {
        imageUrl: '/assets/icons/mongodb.svg',
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: '/assets/icons/postgresql.svg',
        name: "PostgreSQL",
        type: "Database",
    },

    // Cloud Technologies
    {
        imageUrl: '/assets/icons/aws.svg',
        name: "AWS",
        type: "Cloud",
    },

    // General Purpose Programming Languages
    {
        imageUrl: '/assets/icons/cpp.svg',
        name: "C++",
        type: "System/Software Development",
    },

    // Real-Time Technologies
    {
        imageUrl: '/assets/icons/socketio.svg',
        name: "Socket.io",
        type: "Real-Time Technologies",
    },

    // Design and Prototyping
    {
        imageUrl: '/assets/icons/figma.svg',
        name: "Figma",
        type: "Design and Prototyping",
    }
];

export const socialLinks: SocialLink[] = [
    {
        name: 'twitter',
        iconUrl: twitter,
        link: 'https://twitter.com/Ritika_kaurr',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ritika789',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ritika-kaur-8b60101b5/',
    }
];

export const projects: Project[] = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'CryptoVerse',
        description: 'Developed a web application for displaying concept & algorithms of crypto currencies, including changes in values & cost, advantages, disadvantages and financial future of Cryptocurrency.',
        link: 'https://cryptoverse-96eee9.netlify.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Chocolate cafe club',
        description: 'Savor the sweetness of our Chocolate Cafe Club website, artfully designed with Bootstrap. Explore our menu, events, and more in a visually delightful and responsive online experience. Indulge in the world of chocolate elegance.',
        link: 'https://chocholatecafeclub.netlify.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'HooBank',
        description: 'Designed and built a Modern UI/UX website using React.js & Tailwind CSS inspired by Figma.',
        link: 'https://modern-ui-ux-web.vercel.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'React-codepen-clone',
        description: 'Built a complete clone of CodePen, Created a sleek text editor in React Explore real-time code rendering, collaborative editing features, and a responsive design that makes coding and sharing projects a breeze.',
        link: 'https://vxtjt7.csb.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Landing page',
        description: 'Developed a Landing page for Real estate owners now Explore your dream home on our sleek Real Estate Landing Page. Stunning visuals, detailed listings. ',
        link: 'https://realestate-locofy-livid.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Dadjokes - Chrome extension',
        description: 'This simple Chrome extension delivers random jokes from the internet, ensuring a steady supply of humor right in your browser. Install now for an instant mood lift and a daily dose of dad-approved laughter.',
        link: 'https://github.com/ritika789/dadjokes-extension',
    }
];
export const service: Service[] = [
    {

        theme: 'btn-back-red',
        name: 'Web Development',

    },
    {

        theme: 'btn-back-red',
        name: 'UI/UX Design',

    },
    {

        theme: 'btn-back-red',
        name: 'Technical Consulting',

    },
    {

        theme: 'btn-back-red',
        name: 'Content Creation',

    },
]