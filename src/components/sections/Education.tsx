import { Section } from '../layout/Section';

export function Education() {
    return (
        <Section id="education" title="04. Education">
            <div className="border-4 border-border p-8 md:p-16 hover:bg-neutral-100 transition-colors duration-300 newsprint-texture group">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 relative z-10">
                    <div>
                        <h3 className="text-4xl md:text-6xl lg:text-7xl font-black font-serif uppercase tracking-tighter text-primary mb-2 leading-none">
                            B.Sc. Engineering in CSE
                        </h3>
                        <h4 className="text-xl md:text-2xl font-mono text-secondary tracking-tight">
                            Rangamati Science and Technology University (RMSTU)
                        </h4>
                    </div>
                    <div className="text-left md:text-right shrink-0">
                        <div className="text-6xl md:text-8xl font-black font-serif text-primary leading-none tracking-tighter group-hover:text-accent transition-colors">
                            3.73<span className="text-3xl md:text-4xl text-secondary">/4.00</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t-2 border-border pt-8 relative z-10">
                    <div>
                        <div className="font-mono text-xs text-primary font-bold uppercase tracking-widest mb-1">Timeline</div>
                        <div className="text-lg text-secondary font-mono tracking-wide">March 2020 – February 2026</div>
                    </div>
                    <div>
                        <div className="font-mono text-xs text-primary font-bold uppercase tracking-widest mb-1">Location</div>
                        <div className="text-lg text-secondary font-mono tracking-wide">Rangamati, Bangladesh</div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
