import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden">
            {/* Abstract Circuit/Brain Graphic Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M 10 10 L 90 10 L 90 90 L 10 90 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M 50 10 L 50 90" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M 10 50 L 90 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            <circle cx="50" cy="50" r="2" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit)" className="text-blue-500" />
                </svg>
            </div>

            <div className="z-10 text-center px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-blue-500 font-mono text-lg mb-4 tracking-widest uppercase">Hi, my name is</h2>
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
                        Mohammed Farhan K.
                    </h1>
                    <h3 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8 leading-tight">
                        I build digital experiences for the future.
                    </h3>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
                        MCA Student at Mar Athanasius College of Engineering specializing in Full-Stack Development,
                        AI, and Data Science. I transform complex problems into elegant, high-performance solutions.
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="#projects"
                            className="px-10 py-4 bg-transparent border-2 border-blue-500 text-blue-500 font-bold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-10 py-4 bg-blue-500 border-2 border-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20"
                        >
                            Let's Talk
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Animated Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-slate-500"
            >
                <span className="text-xs uppercase tracking-widest mb-2 font-semibold">Scroll Down</span>
                <div className="w-1 h-12 bg-slate-800 rounded-full relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-500 rounded-full animate-bounce"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
