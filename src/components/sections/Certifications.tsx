import { Section } from '../layout/Section';
import { Award, ExternalLink } from 'lucide-react';

const certs = [
    {
        title: "IBM Cybersecurity Analyst Professional Certificate",
        issuer: "IBM / Coursera",
        date: "December 2020",
        url: "https://www.credly.com/badges/fc026553-7359-40fc-b586-4a9c9fb6e1da"
    },
    {
        title: "Google IT Support Professional Certificate",
        issuer: "Google / Coursera",
        date: "November 2020",
        url: "https://www.credly.com/badges/7bc2ea8c-28dd-4cb6-8362-c4ad810c7299"
    },
    {
        title: "Security Analyst Fundamentals Specialization",
        issuer: "IBM / Coursera",
        url: "https://www.credly.com/badges/c450f707-a9e9-4ce3-bbff-b5894583ecf9"
    },
    {
        title: "Cybersecurity IT Fundamentals Specialization",
        issuer: "IBM / Coursera",
        url: "https://www.credly.com/badges/faa0d4d8-b55d-4aeb-97d8-7f0556f1f8a8"
    },
    {
        title: "Cybersecurity Breach Case Studies",
        issuer: "IBM / Coursera",
        url: "https://www.credly.com/badges/b3f8d7a7-ee8b-4808-913d-144afc79f931"
    },
    {
        title: "Cyber Threat Intelligence",
        issuer: "IBM / Coursera",
        url: "https://www.credly.com/badges/95d1fc85-814c-44a0-be4b-8dd1f23fc47d"
    },
    {
        title: "Penetration Testing, Incident Response and Forensics",
        issuer: "IBM / Coursera",
        url: "https://www.credly.com/badges/505f0a0d-6e9d-4698-a8b6-039a29bb8e35"
    },
    {
        title: "Network Security and Database Vulnerabilities",
        issuer: "IBM / Coursera",
        url: "https://www.credly.com/badges/b3d897fe-7cbc-46cf-83be-d0c29a20cb59"
    },
    {
        title: "Cybersecurity Compliance Framework and System Administration",
        issuer: "IBM / Coursera",
        url: "https://www.credly.com/badges/7ff8e1ad-bb1e-4569-9893-b704fb38d4c7"
    },
    {
        title: "Cybersecurity Roles, Processes and Operating System Security",
        issuer: "IBM / Coursera",
        url: "https://www.credly.com/badges/c2cec9a6-4d31-4eb6-bd0a-d4fe83436035"
    },
    {
        title: "Introduction to Cybersecurity Tools and Cyber Attacks",
        issuer: "IBM / Coursera",
        url: "https://www.credly.com/badges/30bd0157-ad47-484f-bf63-499b292495fe"
    },
    {
        title: "AI For Everyone",
        issuer: "DeepLearning.AI / Coursera",
        date: "April 2021",
        url: "https://www.coursera.org/account/accomplishments/verify/E5UJE3JGD4LE"
    },
    {
        title: "Search Engine Optimization (SEO) Specialization",
        issuer: "UC Davis / Coursera",
        date: "July 2020",
        url: "https://coursera.org/verify/specialization/64CGD6SHYPAQ"
    },
    {
        title: "English for STEM",
        issuer: "University of Pennsylvania / OPEN MOOCs",
        date: "July 2021",
        url: "https://www.linkedin.com/in/minuwu/overlay/1635462453681/single-media-viewer/?type=DOCUMENT&profileId=ACoAADPAosIBRogY1ekm7qrkrdUmTRuINvDSuSU"
    }
];

export function Certifications() {
    return (
        <Section id="certifications" title="07. Certifications">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border">
                {certs.map((cert, index) => (
                    <a
                        key={index}
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col justify-between p-6 md:p-8 border border-border hover:bg-neutral-100 hover:border-primary transition-all h-full relative"
                    >
                        <div>
                            <div className="flex items-start justify-between mb-4">
                                <Award className="text-primary group-hover:text-accent transition-colors w-8 h-8 stroke-1" />
                                <ExternalLink className="text-secondary group-hover:text-primary transition-colors w-5 h-5 stroke-1" />
                            </div>
                            <h3 className="font-serif font-black text-2xl md:text-3xl text-primary leading-[1.1] tracking-tighter mb-2 group-hover:underline underline-offset-2 decoration-2 decoration-accent">
                                {cert.title}
                            </h3>
                        </div>
                        <div className="mt-8 pt-4 border-t-2 border-border/50">
                            <p className="font-mono text-xs text-primary font-bold uppercase tracking-widest">
                                {cert.issuer}
                            </p>
                            {cert.date && (
                                <p className="font-mono text-xs text-secondary mt-1 uppercase tracking-wider">
                                    {cert.date}
                                </p>
                            )}
                        </div>
                    </a>
                ))}
            </div>
        </Section>
    );
}
