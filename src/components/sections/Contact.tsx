import { Section } from '../layout/Section';
import { Github, Linkedin, Mail, Smartphone, MapPin, Instagram, Facebook } from 'lucide-react';

export function Contact() {
    return (
        <Section id="contact" title="08. Contact" defaultExpanded={true}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 border-y-4 border-border relative">
                <div className="py-12 lg:pr-12 md:pl-0 lg:border-r-2 lg:border-border">
                    <h3 className="text-5xl md:text-7xl font-black font-serif uppercase tracking-tighter text-primary mb-6 leading-none">
                        Ready to initiate a build?
                    </h3>
                    <p className="text-xl text-secondary font-body leading-relaxed mb-12 max-w-lg">
                        My inbox is open for engineering roles, technical consultations, and strategic product builds. I typically respond within 24 hours. No recruiter spam, just direct developer-to-developer conversation.
                    </p>

                    <div className="space-y-6">
                        <a href="mailto:minhazulab3din@gmail.com" className="flex items-center gap-4 text-xl md:text-2xl font-mono text-primary hover:text-accent transition-colors group">
                            <Mail className="w-8 h-8 group-hover:scale-110 transition-transform stroke-1" />
                            minhazulab3din@gmail.com
                        </a>
                        <a href="tel:+8801533651224" className="flex items-center gap-4 text-xl md:text-2xl font-mono text-primary hover:text-accent transition-colors group">
                            <Smartphone className="w-8 h-8 group-hover:scale-110 transition-transform stroke-1" />
                            +880 1533 651 224
                        </a>
                        <div className="flex items-center gap-4 text-xl md:text-2xl font-mono text-primary">
                            <MapPin className="w-8 h-8 stroke-1" />
                            Chattogram, Bangladesh
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-100 lg:px-16 py-12 px-6 flex flex-col newsprint-texture">
                    <h4 className="text-3xl md:text-4xl font-serif font-black uppercase tracking-tight relative z-10 mb-8 mt-2">Socials & Networks</h4>
                    <div className="flex flex-col gap-6 relative z-10 pb-4">
                        <a href="https://github.com/minuwu" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-b-2 border-primary pb-4 hover:pl-4 transition-all duration-300">
                            <span className="font-mono text-lg uppercase tracking-widest font-bold">GitHub</span>
                            <Github className="w-6 h-6 stroke-1" />
                        </a>
                        <a href="https://linkedin.com/in/minuwu" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-b-2 border-primary pb-4 hover:pl-4 transition-all duration-300">
                            <span className="font-mono text-lg uppercase tracking-widest font-bold">LinkedIn</span>
                            <Linkedin className="w-6 h-6 stroke-1" />
                        </a>
                        <a href="https://twitter.com/minhaz_bro" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-b-2 border-primary pb-4 hover:pl-4 transition-all duration-300">
                            <span className="font-mono text-lg uppercase tracking-widest font-bold">X (Twitter)</span>
                            <span className="font-black text-xl font-sans">𝕏</span>
                        </a>
                        <a href="https://instagram.com/minhaz_bro" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-b-2 border-primary pb-4 hover:pl-4 transition-all duration-300">
                            <span className="font-mono text-lg uppercase tracking-widest font-bold">Instagram</span>
                            <Instagram className="w-6 h-6 stroke-1" />
                        </a>
                        <a href="https://facebook.com/minuuu6" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-b-2 border-primary pb-4 hover:pl-4 transition-all duration-300">
                            <span className="font-mono text-lg uppercase tracking-widest font-bold">Facebook</span>
                            <Facebook className="w-6 h-6 stroke-1" />
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
}
