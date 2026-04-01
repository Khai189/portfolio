import coffeeMixerImg from './assets/CoffeeMixer.png';
import spotifyRecommenderImg from './assets/SpotifyRecommender.png';
import dnaVisualizationImg from './assets/dnavis.png';
import placeHolder1 from './assets/placeHolder1.jpg';
import placeHolder2 from './assets/placeHolder2.jpg';

interface Project {
    title: string;
    description: string;
    techStack: string[];
    image?: string;
    link: string;
    inProgress?: boolean;
    isPlaceholder?: boolean;
}

interface Skill {
    name: string;
    icon: string;
    searchTerm?: string;
}

interface Experience {
    date: string;
    title: string;
    company: string;
    location: string;
    description: string[];
}


export type { Project, Skill, Experience };

const placeholders = [placeHolder1, placeHolder2];
let placeholderIndex = 0;

const rawProjects: Project[] = [
    {
        title: "CoffeeMixer",
        description: "CoffeeMixer allows users to find and create the best coffee recipes and share it to their feed, with an AI barista who can help find recipes and nearby coffee shops with those drinks.",
        techStack: ["React", "Prisma", "Node.js", "TypeScript","Express", "Figma","Tailwind CSS", "PostgreSQL", "n8n", "LangChain","Docker"],
        image: coffeeMixerImg,
        link: "https://coffeemixer.net/",
    },
    {
        title: "Spotify Recommender",
        description: "Spotify recommender that uses song harmonics and melodies to recommend songs based on tuning, rhythm, melody, and more, where users can instantly queue and search their songs. The app uses an ML model to extract the similarities and uses a pgvector search to find the best songs available.",
        techStack: ["Python", "FastAPI", "PostgreSQL", "Docker","AWS"],
        image: spotifyRecommenderImg,
        link: "https://khai-spotify-recommender.streamlit.app/",
    },
    {
        title: "Faculty Research Project",
        description: "Building a Faculty Research Site where faculty members can post their research online for student RAs and can easily set requirements and research goals, as well as publish their own research.",
        techStack: ["Next.js", "Tailwind CSS", "React.js","TypeScript","Figma", "Spring Boot", "Java", "PostgreSQL"],
        link: "https://www.5cresearch.com/",
        inProgress: true,
    },
    {
        title: "DNA Visualization Project",
        description: "A Three.js visualization of a DNA structure. Build this 3D visualization as part of a class project.",
        image: dnaVisualizationImg,
        techStack: ["JavaScript", "Three.js", "HTML", "CSS"],
        link: "https://dnavis.up.railway.app/",
    },
    {
        title: "InstaSchedule AI",
        description: "An AI-powered scheduling assistant that helps users manage their time. Users can input easy statements like 'm-f 9-5 work, t-th 10-11 class' and the AI will automatically generate a schedule for them.",
        techStack: ["Swift", "SwiftUI", "Python", "FastAPI", "PostgreSQL", "Docker","AWS","LangChain","n8n"],
        link: "https://github.com/Khai189",
        inProgress: true,
    }
];

export const projects: Project[] = rawProjects.map(project => {
    if (!project.image) {
        project.image = placeholders[placeholderIndex % placeholders.length];
        project.isPlaceholder = true;
        placeholderIndex++;
    }
    return project;
});

export const skills: Skill[] = [
    {
        name: "Swift",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
    },
    {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    {
        name: "Three.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",
    },
    {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },
    {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    },
    {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-plain.svg",
    },
    {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
        name: "Amazon Web Services",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        searchTerm: "AWS",
    }
]

export const experiences: Experience[] = [
    {
        date: "Feb 2026 - Present",
        title: "Full-Stack Developer Intern",
        company: "Axentra OS",
        location: "Remote",
        description: [
            "Building full-stack applications in React.js, Next.js, FastAPI, and PostgreSQL serving production users",
            "Designed REST APIs in FastAPI, improving response rate by 15%",
            "Building CI/CD pipelines with GitHub Actions to automate testing and deployment, cutting release cycle time by 30% and reducing manual errors",
            "Refactored old React UIs using Redux to decrease loading times by 10%"
        ]
    },
    {
        date: "Nov 2025 - Present",
        title: "Software Developer (Part Time)",
        company: "Pomona College: ITS",
        location: "Claremont",
        description: [
            "Designing PostgreSQL schemas and databases for faculty research projects, reducing query lookup time by approximately 25%",
            "Architected LangChain and n8n workflows to help increase AI agent productivity and decrease hallucination rate",
            "Developing REST APIs with Spring Boot and Spring MVC and integrating them with React and React Native front ends"
        ]
    },
    {
        date: "Jan 2025 - Nov 2025",
        title: "Solutions Developer",
        company: "Pomona College: Advancement",
        location: "Claremont",
        description: [
            "Sped up data processing by ~ 20% for donor bundles using Python data workflows.",
            "Created interactive data visualizations with D3.js, JavaScript, and Tableau, helping co-workers quickly identify donation trends",
            "Built and designed PostgreSQL schemas to decrease query lookup by 30%"
        ]
    },
    {
        date: "May 2025 - Aug 2025",
        title: "Web Development Research Assistant",
        company: "Pomona College: Security Research Lab",
        location: "Claremont",
        description: [
            "Developed a web site with JavaScript and Tailwind CSS that lets users compare privacy and security labels across similar apps, enabling faster assessment of app privacy",
            "Created responsive UI using Tailwind CSS that let users easily compare privacy labels, reducing visual clutter",
            "Set up GitHub Actions CI/CD pipelines, automating builds and tests and cutting development time by several hours each week"
        ]
    }
];