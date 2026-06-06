import coffeeMixerImg from './assets/CoffeeMixer.png';
import spotifyRecommenderImg from './assets/SpotifyRecommender.png';
import anyoneCanWorkoutImg from './assets/AnyoneCanWorkout.png';
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
        title: "GoVR Combat AI",
        description: "Distributed Go simulation engine built around goroutines, worker pools, Kafka message queues, and Kubernetes orchestration to process 10,000 concurrent game events with sub-50ms decision latency.",
        techStack: ["Go", "Kafka", "Kubernetes", "Apache Spark", "PyTorch"],
        link: "https://github.com/Khai189",
        inProgress: true,
    },
    {
        title: "ChessAnalyzer",
        description: "Distributed chess data platform that streams and processes more than 30GB of compressed data across 10 million games using Spark, PySpark, and MapReduce-backed analytics jobs.",
        techStack: ["Apache Spark", "PySpark", "MapReduce", "Python", "NumPy", "Pandas", "Next.js", "D3.js"],
        link: "https://chess-vis-frontend.vercel.app/",
    },
    {
        title: "5CResearch",
        description: "Secure academic research platform with Spring Boot and GraphQL services, JWT authentication, PostgreSQL-backed lab data, and a graph-based recommendation engine for matching students with faculty labs.",
        techStack: ["Spring Boot", "GraphQL", "Java", "PostgreSQL", "JWT", "TypeScript", "Next.js"],
        link: "https://www.5cresearch.com/",
    },
    {
        title: "Spotify Recommender Backend",
        description: "Recommendation API that extracts audio similarity features and uses PostgreSQL pgvector search to retrieve nearby songs for queueing and discovery workflows.",
        techStack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Docker", "AWS"],
        image: spotifyRecommenderImg,
        link: "https://khai-spotify-recommender.streamlit.app/",
    },
    {
        title: "CoffeeMixer Service Layer",
        description: "Backend-heavy recipe platform using Express, Prisma, PostgreSQL, Docker, and LangChain/n8n workflows to coordinate recipe generation, user feeds, and location-aware coffee search.",
        techStack: ["Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL", "Docker", "LangChain", "n8n"],
        image: coffeeMixerImg,
        link: "https://coffeemixer.net/",
    },
    {
        title: "AnyoneCanWorkout API Platform",
        description: "Spring Boot and PostgreSQL application backend for adaptive workout planning, reminder scheduling, user progress tracking, and accessible fitness data workflows.",
        techStack: ["Spring Boot", "Java", "PostgreSQL", "TypeScript", "Next.js"],
        link: "https://anyonecanworkout.com",
        image: anyoneCanWorkoutImg,
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
        name: "Go",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
    },
    {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    },
    {
        name: "Kafka",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg",
        searchTerm: "Kafka",
    },
    {
        name: "Apache Spark",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg",
        searchTerm: "Spark",
    },
    {
        name: "Kubernetes",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
    },
    {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    },
    {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
        name: "CockroachDB",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/cockroachlabs.svg",
    },
    {
        name: "GraphQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
    },
    {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-plain.svg",
    },
    {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
        name: "Google Cloud",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
        searchTerm: "GCP",
    }
]

export const experiences: Experience[] = [
    {
        date: "May 2026 - Present",
        title: "Software Engineer Intern",
        company: "Nordic Analytics",
        location: "Remote",
        description: [
            "Developed Java graph algorithms and AI n8n automations to optimize resource allocation, cutting client infrastructure spend by 30%",
            "Implemented Apache Kafka queues across Spring microservices to decouple processing and improve distributed system availability",
            "Deployed concurrent Go data pipelines and GraphQL APIs to ingest and stream real-time financial data feeds",
            "Partitioned CockroachDB instances using geo-distribution strategies, reducing financial workflow processing latency by 40%"
        ]
    },
    {
        date: "May 2026 - Present",
        title: "Software Developer",
        company: "ASPC",
        location: "Claremont, CA",
        description: [
            "Optimized MongoDB with text and hashed indexes, accelerating NoSQL query execution for course search systems",
            "Developed scalable TypeScript and Express backend services to reliably support over 2,000 production users",
            "Integrated AWS SQS message queues to manage transaction concurrency and prevent bottlenecks during high-traffic intervals",
            "Reduced application latency by 30% through Redis set and write-through caching strategies"
        ]
    },
    {
        date: "Nov 2025 - Apr 2026",
        title: "Software Developer",
        company: "Pomona College: ITS",
        location: "Claremont, CA",
        description: [
            "Optimized PostgreSQL vector similarity searches using pgvector and GIN indexing to minimize retrieval latency for large datasets",
            "Implemented Redis LRU caching mechanisms to achieve sub-second data loading times and accelerate read throughput",
            "Deployed a containerized microservice architecture using Kubernetes to test cluster self-healing and system resiliency",
            "Configured Resilience4j circuit breakers within Spring Cloud to stabilize data streams and mitigate high-traffic spikes",
            "Built automated CI/CD deployment pipelines to streamline backend service integration and maintain high application uptime"
        ]
    },
    {
        date: "Jan 2025 - Nov 2025",
        title: "Assistant Software Developer",
        company: "Pomona College: Advancement",
        location: "Claremont, CA",
        description: [
            "Developed Python ETL pipelines to automate data migration into Salesforce, processing thousands of client records concurrently",
            "Optimized Python script automation to streamline data processing workflows, reducing manual review overhead by 20%",
            "Architected relational database schemas using MySQL and PostgreSQL to store and scale over 20,000 donor records",
            "Indexed database tables to accelerate search query performance and optimize retrieval times for constituent datasets"
        ]
    }
];
