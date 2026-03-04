import { Section } from '../layout/Section';

const stackCategories = [
    { name: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "Python", "C", "C++", "Java", "Prolog", "LaTeX"] },
    { name: "Frontend", items: ["React.js", "React Native", "Next.js", "Expo", "Tailwind CSS", "Bootstrap", "Shadcn/ui", "Ant Design", "HTML5", "CSS3"] },
    { name: "Backend", items: ["Node.js", "Express.js", "NestJS", "Passport.js", "OAuth", "Firebase"] },
    { name: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "SQL Server"] },
    { name: "DevOps & Tools", items: ["Docker", "Git/GitHub", "Postman", "Figma", "Canva", "AutoCAD", "VS Code", "Netlify", "Ubuntu/Linux", "Vite"] },
    { name: "Security", items: ["Cybersecurity Fundamentals", "Network Security and Database Vulnerabilities", "Penetration Testing and Incident Response", "Cyber Threat Intelligence", "Compliance Frameworks", "OS Security and System Administration"] },
    { name: "Other", items: ["OOP", "MVC", "REST API design", "Agile collaboration", "AI-enhanced data processing (OCR)", "SEO fundamentals"] }
];

export function TechStack() {
    return (
        <Section id="stack" title="03. Arsenal">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 border-t-4 border-border">
                {stackCategories.map((category) => (
                    <div key={category.name} className="border-b border-border md:border-r p-6 md:p-8 hover:bg-neutral-100 transition-colors duration-300">
                        <h3 className="font-serif text-2xl font-bold uppercase tracking-tight text-primary mb-6">
                            {category.name}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.items.map(item => (
                                <span
                                    key={item}
                                    className={`font-mono text-xs uppercase tracking-widest px-3 py-1 transition-colors duration-200 border sharp-corners ${(item === "JavaScript (ES6+)" || item === "TypeScript" || item === "React.js" || item === "Next.js" || item === "Node.js")
                                        ? "bg-primary text-bg border-primary hover:bg-bg hover:text-primary"
                                        : "bg-transparent text-primary border-border hover:border-primary"
                                        }`}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
