interface Skill {
    imageUrl: string;
    name: string;
    type: string;
}

// interface SocialLink {
//     name: string;
//     iconUrl: string;
//     link: string;
// }

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

interface Experience {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
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
    {
        imageUrl: '/assets/icons/threejs.svg', 
        name: "Three.js",
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

// export const socialLinks: SocialLink[] = [
//     {
//         name: 'GitHub',
//         iconUrl: github,
//         link: 'https://github.com/Nagi132',
//     },
//     {
//         name: 'LinkedIn',
//         iconUrl: linkedin,
//         link: 'https://www.linkedin.com/in/nagi1/',
//     }
// ];

export const projects: Project[] = [
    {
        iconUrl: 'assets/icons/sketch.svg',
        theme: 'btn-back-orange',
        name: 'Sketch and Guess',
        description: 'A real-time drawing and guessing game. Built with React, Node.js, and MongoDB. Real-time communication via Socket.IO.',
        link: 'https://github.com/cmartinez131/sketch',
    },
    {
        iconUrl: 'assets/icons/pingpong.svg',
        theme: 'btn-back-blue',
        name: 'Ping Pong Online',
        description: 'Multiplayer ping pong game with lobby creation and CPU play. Built with React, Node.js, and Socket.IO, deployed on Heroku.',
        link: 'https://github.com/Nagi132/ping-pong-online',
    },
    {
        iconUrl: 'assets/icons/boardgame.svg',
        theme: 'btn-back-black',
        name: 'Gobble Four',
        description: 'An engaging multiplayer board game inspired by Gobblet Gobblers. Built with React.js and Firebase for real-time gameplay.',
        link: 'https://gobblet-gobblers-3bb43.web.app/',
    },
    {
        iconUrl: 'assets/icons/question.svg',
        theme: 'btn-back-green',
        name: 'QuizApp',
        description: 'Quiz management platform using React, Node.js, and AWS. Features user authentication, Dockerized deployment, and AWS integration.',
        link: 'https://github.com/Nagi132/quiz-app',
    },
    {
        iconUrl: 'assets/icons/mentor.svg',
        theme: 'btn-back-pink',
        name: 'PrePair',
        description: 'Mentoring platform for STEM students. Developed with HTML, CSS, Bootstrap, Figma, MongoDB, and Node.js/Express. Won 1st place in Funathon 2022.',
        link: 'https://github.com/gislainm/funathon-2022',
    },
    {
        iconUrl: 'assets/icons/stars.svg',
        theme: 'btn-back-yellow',
        name: 'DirectMedia Layer Particle System',
        description: 'C++ particle system using SDL, featuring particle movement, collision detection, and generation.',
        link: 'https://github.com/ritika789/dadjokes-extension',
    },
    {
        iconUrl: 'assets/icons/mandelbrot.svg',
        theme: 'btn-back-red',
        name: 'Mandelbrot Generato',
        description: 'Mandelbrot set generator using C++, creating detailed fractal patterns and saving images for visualization.',
        link: 'https://github.com/Nagi132/mandelbrot_generator',
    },
    {
        iconUrl: 'assets/icons/rgb.svg',
        theme: 'btn-back-blue',
        name: 'RGB Color Picker',
        description: 'C++ RGB color picker tool with GUI, converting selected RGB values to HTML and Hexadecimal formats.',
        link: 'https://github.com/Nagi132/rgbpicker',
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

export const experiences: Experience[] = [
    {
        title: 'CUNY Tech Prep Fellow',
        company_name: 'CUNY Tech Prep',
        icon: 'assets/images/ctp.jpg',
        iconBg: '#accbe1',
        date: 'June 2023 - June 2024',
        points: [
            "Developed and deployed a full-stack application using React, Node.js, and Socket.io.",
            "Collaborated with peers in an agile environment, practicing Scrum methodology.",
            "Gained experience in MVC architecture, TDD, and CI/CD pipelines.",
            "Participated in workshops and coding challenges to enhance technical skills."],
    },
    {
        title: 'Bachelor of Arts in Computer Science',
        company_name: 'Hunter College',
        icon: 'assets/images/hunter.jpg',
        iconBg: '#b19cd9',
        date: 'Graduated May 2024',
        points: [
            "Completed courses in Algorithms, Data Structures, Web Development, and Software Engineering.",
            "Worked on various projects, including an online multiplayer drawing and guessing game using React.js and Socket.io.",
            "Participated in hackathons and coding competitions, winning 1st place in the YPstem Hackathon for 'PrePair'."],
    },
    {
        title: 'Associate of Science in Computer Science',
        company_name: 'LaGuardia Community College',
        icon: 'assets/images/lgcc.png',
        iconBg: '#ffcccb',
        date: 'Graduated May 2021',
        points: [
            "Gained a foundational understanding of Object-Oriented Programming (OOP) in C++.",
            "Deepened knowledge in Data Structures and Algorithms.",
            "Enhanced understanding of software development principles through projects and coursework."
        ],
    }
];