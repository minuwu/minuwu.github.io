import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    defaultExpanded?: boolean;
}

export function Section({ id, title, children, defaultExpanded = false }: SectionProps) {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    return (
        <motion.section
            id={id}
            className="border-b-2 border-border last:border-b-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between py-12 md:py-16 group cursor-pointer text-left focus:outline-none focus-visible:bg-neutral-100 transition-colors newsprint-texture"
                aria-expanded={isExpanded}
                aria-controls={`section-content-${id}`}
            >
                <h2 className="text-4xl sm:text-6xl md:text-8xl font-black font-serif uppercase tracking-tighter text-primary group-hover:text-accent transition-colors duration-200">
                    {title}
                </h2>
                <div className={`text-primary group-hover:text-accent transition-all duration-300 shrink-0 ml-4 border-2 border-primary p-2 group-hover:bg-neutral-100 ${isExpanded ? 'rotate-90' : ''}`}>
                    {isExpanded ? (
                        <Minus className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                    ) : (
                        <Plus className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                    )}
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isExpanded && (
                    <motion.div
                        id={`section-content-${id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-12 md:pb-24 pt-4">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
}
