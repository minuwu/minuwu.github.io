import { Section } from '../layout/Section';
import { ExternalLink, Trophy } from 'lucide-react';

const competitions = [
    {
        contest: "PU-CSE IT FEST 2024 Programming Contest",
        location: "Premier University",
        result: "Participant",
        date: "Jan 27, 2024",
        url: "https://drive.google.com/file/d/1GCYI5gr6RSM47x0UolcQzW5EcEjKk9OW/view?usp=drive_link"
    },
    {
        contest: "2021 ICPC Asia Dhaka Regional Contest",
        location: "",
        result: "Rank 112",
        date: "Oct 08, 2022",
        url: "https://drive.google.com/file/d/1pqVVLXDuMIoIxVQo0U91mFSFiJbK0dc-/view?usp=drive_link"
    },
    {
        contest: "2021 ICPC Asia Dhaka Regional Online Preliminary",
        location: "",
        result: "University Top Rank",
        date: "Sep 03, 2022",
        url: "https://linkedin.com/in/minuwu"
    },
    {
        contest: "RMSTU Bangabandhu Online Divisional Programming Contest 2021",
        location: "",
        result: "Participant",
        date: "May 03, 2021",
        url: "https://drive.google.com/file/d/1rPmaJwlIGjKmwXgRETzRe-sdK_2O8M7Q/view?usp=drive_link"
    }
];

export function Competitions() {
    return (
        <Section id="competitions" title="06. Competitions">
            <div className="flex flex-col border border-border mt-4">
                {competitions.map((comp, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 hover:bg-neutral-100 transition-colors duration-300 ${index !== competitions.length - 1 ? 'border-b border-border' : ''}`}
                    >
                        <div className="flex-1 mb-4 md:mb-0">
                            <div className="flex items-center gap-3 mb-2">
                                <Trophy className="w-5 h-5 text-primary shrink-0 stroke-1" />
                                <h3 className="text-xl md:text-3xl font-black font-serif text-primary leading-tight uppercase tracking-tighter">
                                    {comp.contest}
                                </h3>
                            </div>
                            {comp.location && (
                                <p className="text-secondary font-body text-lg mb-2 pl-8">{comp.location}</p>
                            )}
                            <div className="flex flex-wrap items-center gap-4 pl-8">
                                <span className="font-mono text-xs text-primary uppercase tracking-widest font-bold">
                                    {comp.result}
                                </span>
                                <span className="font-mono text-xs text-muted">/</span>
                                <span className="font-mono text-xs text-secondary uppercase tracking-widest">
                                    {comp.date}
                                </span>
                            </div>
                        </div>

                        <div className="pl-8 md:pl-0 shrink-0">
                            <a
                                href={comp.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary font-mono text-[10px] uppercase font-bold tracking-widest hover:bg-primary hover:text-white transition-colors sharp-corners"
                            >
                                Certificate <ExternalLink className="w-3 h-3 stroke-1" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
