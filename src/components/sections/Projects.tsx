import { Section } from '../layout/Section';
import { ExternalLink, Github, Play } from 'lucide-react';

const mainProjects = [
    {
        title: "TSync - RMSTU Bus & Campus",
        description: "Eliminated campus commute uncertainty for 500+ daily users with a real-time GPS tracking system. Built progressive architecture with a resilient gamified core loop and explicit privacy-by-design.",
        stats: [
            { label: "Active Buses", value: "08+" },
            { label: "Daily Users", value: "500+" },
            { label: "Routes Covered", value: "12" }
        ],
        tech: ["Android", "Google Maps API", "Firebase", "Real-time GPS"],
        link: "https://minuwu.is-a.dev/TSync",
        playStore: "https://play.google.com/store/apps/details?id=com.minuwu.tsync_rmstu",
        repo: null,
        isHero: true
    },
    {
        title: "DailyWizdom",
        description: "Digitized a 592,000-character book into a clean proprietary dataset via AI-enhanced OCR. Shipped a cross-platform React Native app with an automated daily engagement model.",
        tech: ["React Native", "AI OCR"],
        link: "https://github.com/minuwu/Daily-Wizdom/releases/tag/pre-release",
        repo: "https://github.com/minuwu/Daily-Wizdom"
    },
    {
        title: "EarthBNB",
        description: "Architected a scalable MERN property listing platform featuring seamless geolocation (Mapbox), secure session auth, and instant automated cloud media pipelines.",
        tech: ["Node.js", "Express", "MongoDB", "React", "Mapbox SDK"],
        link: "https://earthbnb-mpss.onrender.com/listings",
        repo: "https://github.com/minuwu/earthBNB"
    },
    {
        title: "RMSTU-edu",
        description: "Engineered a centralized university management platform covering complete student-faculty lifecycles, structured course orchestrations, and robust entity relationships.",
        tech: ["MERN Stack", "React.js"],
        link: "https://youtu.be/ozLhdIA8EtA",
        repo: "https://github.com/minuwu/RMSTU-edu"
    },
    {
        title: "ViteNotice",
        description: "Shipped a rapid full-stack notice board utilizing a monorepo design pattern for simplified CI/CD, integrated natively with a custom minimal API.",
        tech: ["React", "Express", "Vite JS"],
        link: "https://minuwu.github.io/ViteNotice/",
        repo: "https://github.com/minuwu/ViteNotice"
    }
];

const miniProjects = [
    {
        title: "Harry Potter Movies",
        description: "Harry Potter themed web app built around API integration, with a spooky custom UI, fonts, and styled layouts.",
        tech: ["JavaScript", "API Integration", "Thematic UI"],
        link: "https://minuwu.github.io/miniprojects/potter/",
        repo: "https://github.com/minuwu/miniprojects/"
    },
    {
        title: "todoApp",
        description: "Task Manager HTML/CSS/JS Application",
        tech: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
        link: "https://minuwu.github.io/todoApp/",
        repo: "https://github.com/minuwu/todoApp"
    },
    {
        title: "Sketch",
        description: "Web-based Etch-a-Sketch with a 10,000-pixel grid and RGB color cycling.",
        tech: ["JavaScript", "HTML", "CSS"],
        link: "https://minuwu.github.io/Sketch/",
        repo: "https://github.com/minuwu/Sketch"
    },
    {
        title: "TicTacToeJs",
        description: "Fully interactive Tic Tac Toe with glowing win effects, turn management, and animated UI.",
        tech: ["JavaScript", "HTML", "CSS"],
        link: "https://minuwu.github.io/TicTacToeJs/",
        repo: "https://github.com/minuwu/TicTacToeJs"
    },
    {
        title: "Galaxy Menu",
        description: "Galaxy-themed responsive burger menu with zero JavaScript -- checkbox toggle, animated drawer, glowing hover effects.",
        tech: ["HTML", "CSS only", "Responsive Design"],
        link: "https://minuwu.github.io/galaxyMenu/",
        repo: "https://github.com/minuwu/galaxyMenu"
    },
    {
        title: "Spotify Frontend Clone",
        description: "Spotify-inspired frontend with sidebar navigation, scrollable playlist sections, and sticky music player.",
        tech: ["HTML", "CSS", "Flexbox", "CSS Grid"],
        link: "https://minuwu.github.io/spotify-frontend-clone/",
        repo: "https://github.com/minuwu/spotify-frontend-clone"
    }
];

export function Projects() {
    return (
        <Section id="projects" title="02. Selected Works" defaultExpanded={true}>
            <div className="flex flex-col gap-12">
                {mainProjects.map((project) => (
                    <div
                        key={project.title}
                        className={`border border-border p-6 md:p-12 transition-all duration-300 hover:bg-neutral-100 sharp-corners group ${project.isHero ? 'bg-white' : 'bg-transparent'}`}
                    >
                        {project.title === "TSync - RMSTU Bus & Campus" ? (
                            <div className="w-full aspect-[21/9] md:aspect-[3/1] bg-white border-b border-border mb-10 flex items-center justify-center overflow-hidden relative group-hover:bg-neutral-100 transition-colors duration-500 sharp-corners">
                                <img src="/gplayFeatureTSyncFormBanner.jpg" alt="TSync Feature Graphic" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                            </div>
                        ) : (
                            <div className="w-full aspect-[21/9] md:aspect-[3/1] bg-neutral-100 border-b border-border mb-10 flex items-center justify-center overflow-hidden relative transition-colors duration-500 sharp-corners">
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
                                <h4 className="text-7xl md:text-9xl font-black font-serif text-primary uppercase tracking-tighter opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700 select-none">
                                    {project.title.split(' ')[0]}
                                </h4>
                            </div>
                        )}
                        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-8">
                            <div>
                                <h3 className="text-3xl md:text-5xl font-black font-serif uppercase tracking-tight text-primary mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-lg text-secondary font-body leading-relaxed max-w-3xl">
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 shrink-0">
                                {project.repo && (
                                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="p-3 border border-border hover:bg-primary hover:text-white transition-all sharp-corners" title="Source Code">
                                        <Github className="w-6 h-6 stroke-1" />
                                    </a>
                                )}
                                {project.playStore && (
                                    <a href={project.playStore} target="_blank" rel="noopener noreferrer" className="px-4 py-3 border border-border hover:bg-primary hover:text-white transition-all flex items-center gap-2 sharp-corners" title="Get it on Google Play">
                                        <Play className="w-5 h-5 stroke-1" />
                                        <span className="hidden sm:inline font-mono text-xs uppercase tracking-widest font-bold">Play Store</span>
                                    </a>
                                )}
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-primary text-white hover:bg-white hover:text-primary border border-transparent hover:border-primary transition-all flex items-center justify-center sharp-corners" title="Live Preview">
                                        <ExternalLink className="w-6 h-6 stroke-1" />
                                    </a>
                                )}
                            </div>
                        </div>

                        {project.stats && (
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8 border-y border-border py-6">
                                {project.stats.map(stat => (
                                    <div key={stat.label} className="border-l-4 border-accent pl-4">
                                        <div className="text-xs font-mono text-secondary uppercase tracking-widest mb-1">{stat.label}</div>
                                        <div className="text-3xl md:text-4xl font-black font-serif text-primary">{stat.value}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(t => (
                                <span key={t} className="bg-tag-bg text-primary font-mono text-xs px-3 py-1 uppercase tracking-widest border border-border sharp-corners">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="mt-8 mb-4">
                    <h4 className="text-2xl md:text-4xl font-black font-serif uppercase tracking-tighter text-primary mb-8 border-b-4 border-border pb-4">
                        Mini-Projects & Experiments
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-y border-x border-border">
                        {miniProjects.map((project) => (
                            <div key={project.title} className="flex flex-col justify-between border-b border-border md:border-r p-6 hover:bg-neutral-100 transition-colors duration-300">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <h5 className="text-xl font-bold font-serif uppercase text-primary leading-tight">
                                            {project.title}
                                        </h5>
                                        <div className="flex gap-2 shrink-0">
                                            {project.repo && (
                                                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors border border-border p-1 bg-white">
                                                    <Github className="w-4 h-4 stroke-1" />
                                                </a>
                                            )}
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors border border-border p-1 bg-white">
                                                    <ExternalLink className="w-4 h-4 stroke-1" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm text-secondary font-body leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="bg-transparent border border-border text-primary font-mono text-[10px] px-2 py-1 uppercase tracking-widest">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 text-center border-t border-border pt-8">
                    <a href="https://github.com/minuwu" target="_blank" rel="noopener noreferrer" className="inline-block border-b-2 border-primary text-primary font-mono text-sm uppercase tracking-widest pb-1 hover:text-accent hover:border-accent transition-colors">
                        View full archive on GitHub ↗
                    </a>
                </div>
            </div>
        </Section>
    );
}
