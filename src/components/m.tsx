import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useInView, AnimatePresence } from 'framer-motion';
import BubbleText from './BubbleText';

import img2021 from '../assets/experience/2021.png';
import img2022 from '../assets/experience/2022.png';
import img2023 from '../assets/experience/2023.png';
import img2024 from '../assets/experience/2024.png';

const experienceData = [
    {
        year: "2023",
        title: "The Genesis",
        subtitle: "Self-Taught & Curiosity",
        description: "Started my journey with HTML, CSS, and Vanilla JavaScript. Built over 20+ mini-projects exploring the fundamentals of DOM manipulation and CSS architecture.",
        image: img2021,
    },
    {
        year: "2024",
        title: "Full-Stack Bloom",
        subtitle: "MERN Stack Exploration",
        description: "Mastered React, Node.js, and Express. Transitioned from simple UI to complex state management and database design. Built my first production-ready SaaS platforms.",
        image: img2022,
    },
    {
        year: "2025",
        title: "Architectural Precision",
        subtitle: "Senior Engineering & System Design",
        description: "Focused on high-performance architectures, SQL optimization, and Cloud deployment. Specialized in Next.js and high-end visual storytelling through code.",
        image: img2023,
    },
    {
        year: "2026",
        title: "Technical Visionary",
        subtitle: "Leadership & Future Tech",
        description: "Leading complex engineering teams and refining the 'Premium Web' aesthetic. Exploring AI integrations and highly interactive 3D digital experiences.",
        image: img2024,
    },
];

const ExperienceCard = ({ item, index, onInView }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

    useEffect(() => {
        if (isInView) {
            onInView(index);
        }
    }, [isInView, index, onInView]);

    return (
        <div
            ref={ref}
            className="relative flex gap-12 pb-32 last:pb-64"
        >
            {/* Year on the left */}
            <div className="w-24 pt-2">
                <motion.span
                    animate={{
                        color: isInView ? "var(--theme-primary)" : "var(--theme-text-muted)",
                        scale: isInView ? 1.2 : 1
                    }}
                    className="text-2xl font-black font-display tracking-tight transition-all duration-500"
                >
                    {item.year}
                </motion.span>
            </div>

            {/* Content Card */}
            <div className="flex-1">
                <motion.div
                    initial={{ opacity: 0, x: -300, rotateY: -15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, x: -100, rotateY: -10 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{
                        duration: 1.0,
                        type: "spring",
                        stiffness: 40,
                        damping: 15,
                        delay: 0.1
                    }}
                    className="glass-card p-10 hover:border-purple-500/30 transition-all duration-500 group"
                >
                    <span className="text-[10px] font-black text-purple-500 dark:text-white uppercase tracking-[0.4em] mb-4 block">
                        {item.subtitle}
                    </span>
                    <h3 className="text-3xl font-black text-[var(--theme-text)] mb-6 group-hover:text-purple-400 dark:group-hover:text-white transition-colors font-display tracking-tight">
                        {item.title}
                    </h3>
                    <p className="text-[var(--theme-text-muted)] text-lg font-light leading-relaxed font-sans">
                        {item.description}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

const Experience = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <section id="experience" className="py-32 px-6 relative" ref={containerRef}>
            <div className="container mx-auto">
                <div className="text-center mb-32">
                    <h2 className="text-6xl md:text-8xl font-black text-[var(--theme-text)] mb-8 tracking-tighter font-display leading-[1]">
                        <BubbleText text="Evolution & Growth" className="text-purple-500" />
                    </h2>
                    <p className="text-[var(--theme-text-muted)] text-xl font-light max-w-2xl mx-auto leading-relaxed font-sans">
                        Linear progression through technical mastery and architectural evolution.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-20 items-stretch">
                    {/* Left: Timeline & Cards */}
                    <div className="flex-1 relative">
                        {/* The Vertical Line */}
                        <div className="absolute left-[108px] top-0 bottom-0 w-px bg-[var(--theme-card-border)] overflow-hidden">
                            <motion.div
                                style={{ scaleY: scrollYProgress, originY: 0 }}
                                className="w-full h-full bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-500"
                            />
                        </div>

                        <div className="space-y-0">
                            {experienceData.map((item, index) => (
                                <ExperienceCard
                                    key={index}
                                    item={item}
                                    index={index}
                                    onInView={setActiveIndex}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Sticky Image Container */}
                    <div className="hidden lg:block w-[40%] relative">
                        <div className="sticky top-40 h-[500px] w-full">
                            <div className="glass-card w-full h-full p-4 overflow-hidden relative">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                        exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="absolute inset-4 flex items-center justify-center"
                                    >
                                        <div className="relative w-full h-full group">
                                            <div className="absolute inset-0 bg-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full" />
                                            <img
                                                src={experienceData[activeIndex].image}
                                                alt={experienceData[activeIndex].title}
                                                className="w-full h-full object-cover rounded-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                                            />
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Corner Decorations */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 blur-[80px]" />
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/10 blur-[80px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;