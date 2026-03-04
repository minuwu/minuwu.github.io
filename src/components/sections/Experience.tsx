import { Section } from '../layout/Section';

const experiences = [
    {
        role: "Intern (Full-Stack Developer)",
        company: "CodeChefer",
        date: "May 2025 – August 2025",
        description: "Developed a collaborative full-stack web application using React.js, Express.js, Firebase, and MongoDB. Applied skills from structured training sessions—including programming fundamentals, database management, and website deployment—under expert mentorship.",
        details: [
            "Implemented project features including secure access, responsive UI, and database integration.",
            "Gained mentorship guidance in Agile practices, code reviews, teamwork, and industry-standard techniques."
        ],
        tech: ["React.js", "Express.js", "Firebase", "MongoDB"],
        cert: "https://drive.google.com/file/d/14y1dEz2OhXArt6w2NzGh2fVqCxbmpi1Z/view?usp=drive_link"
    },
    {
        role: "Volunteer",
        company: "UNICEF Bangladesh",
        date: "January 2019 – Present",
        description: "Actively volunteering for UNICEF Bangladesh to support children's programs. Recognized for contributions in organizing initiatives, vaccination awareness campaigns, and community engagement efforts.",
        details: [
            "Demonstrates long-term commitment to social impact, mentorship, and youth development over six-plus years."
        ],
        tech: [],
        url: "https://www.unicef.org/bangladesh/en"
    }
];

export function Experience() {
    return (
        <Section id="experience" title="05. Experience">
            <div className="flex flex-col border-y-4 border-border">
                {experiences.map((exp, index) => (
                    <div key={index} className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 lg:gap-12 group border-b border-border last:border-b-0 py-12 md:py-16 hover:bg-neutral-100 transition-colors duration-300 px-4 md:px-8">
                        <div className="font-mono text-sm md:text-base text-primary uppercase tracking-widest pt-2 font-bold">
                            {exp.date}
                        </div>
                        <div>
                            <h3 className="text-4xl md:text-6xl font-black font-serif uppercase tracking-tighter text-primary mb-2 group-hover:underline decoration-4 underline-offset-4 transition-colors">
                                {exp.role}
                            </h3>
                            <h4 className="text-xl md:text-2xl font-mono text-secondary mb-6 tracking-widest uppercase">
                                @ {exp.company}
                            </h4>
                            <p className="text-lg text-secondary leading-relaxed mb-6 font-sans">
                                {exp.description}
                            </p>
                            <ul className="list-disc list-inside space-y-2 mb-6 text-secondary text-base md:text-lg">
                                {exp.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                            {exp.tech.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {exp.tech.map(t => (
                                        <span key={t} className="bg-transparent border border-border text-primary font-mono text-xs px-3 py-1 uppercase tracking-widest">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {exp.cert && (
                                <a href={exp.cert} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm font-mono border border-primary px-4 py-2 text-primary font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors sharp-corners">
                                    Verify Certificate →
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
