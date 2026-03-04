import { Section } from '../layout/Section';

const traits = [
    { name: 'Resilient', desc: 'Ships despite constraints. Built TSync while a student, solving a real campus problem.' },
    { name: 'Creative', desc: 'Turns functional software into thoughtful experiences with thematic UI and strong UX instincts.' },
    { name: 'Detail-Oriented', desc: 'Processed a 592k-character analog book into a clean proprietary dataset. Sweats the details.' },
    { name: 'Security-Aware', desc: 'Holds IBM Cybersecurity Analyst Professional Certificate and Google IT Support cert. Privacy-by-design in all products.' },
];

export function About() {
    return (
        <Section id="about" title="01. About">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                <div className="lg:col-span-7 flex flex-col gap-8">
                    <img src="/cover.jpg" alt="Mohammad Minhazul Abedin" className="w-full h-[400px] object-cover border border-border grayscale hover:grayscale-0 hover:sepia-[20%] transition-all duration-700 sharp-corners" />
                    <p className="text-lg md:text-xl text-primary font-body leading-relaxed text-justify hyphens-auto">
                        <span className="text-7xl float-left font-serif pr-3 pt-2 text-primary font-black leading-[0.6]">M</span>
                        ohammad Minhazul Abedin is a Software Engineer and CS graduate (<span className="font-bold underline decoration-[3px] underline-offset-4 decoration-accent font-mono text-sm">CGPA 3.73/4.00</span>) from Bangladesh who builds products that matter—from a real-time Android bus-tracking system used by 500+ daily commuters, to full-stack web platforms powering real workflows.
                    </p>
                    <p className="text-lg md:text-xl text-secondary font-body leading-relaxed text-justify hyphens-auto">
                        He pairs a full-stack engineering background with professional certifications in cybersecurity from Google and IBM, bringing a security-first lens to everything he ships. Whether architecting databases, crafting pixel-perfect UIs, or publishing Android apps to the Play Store, Minhaz brings attentiveness to detail, resilience under pressure, and a creative instinct that shows up in the work.
                    </p>
                </div>
                <div className="lg:col-span-5 grid grid-cols-1 border-t border-r border-l border-border h-fit sharp-corners">
                    {traits.map((trait) => (
                        <div key={trait.name} className="bg-bg p-6 border-b border-border hover:bg-neutral-100 transition-colors duration-300">
                            <h3 className="text-xl font-bold font-serif uppercase tracking-tight text-primary mb-3">{trait.name}</h3>
                            <p className="text-sm text-secondary leading-relaxed font-body">{trait.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
