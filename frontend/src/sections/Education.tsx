import { motion } from 'framer-motion';

const Education = () => {
    const timeline = [
        {
            degree: 'MCA (Master of Computer Applications)',
            institution: 'Mar Athanasius College of Engineering, Kothamangalam',
            duration: '2025 – Present',
            description: 'Focusing on advanced computing, software engineering, AI, and data science. Actively involved in building modern full-stack applications.',
        },
        {
            degree: 'BCA (Bachelor of Computer Applications)',
            institution: 'Majlis Arts and Science College, Puramannur',
            duration: '2022 – 2025',
            description: 'Foundational studies in computer science, programming languages (C, Python, Java), and web technologies.',
        }
    ];

    return (
        <section id="education" className="min-h-screen py-20 px-10 md:px-20 bg-slate-950">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-12 flex items-center">
                    <span className="text-blue-500 mr-4 font-mono">02.</span> My Academic Journey
                </h2>

                <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-12">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-10 group"
                        >
                            {/* Dot */}
                            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-slate-900 border-2 border-blue-500 rounded-full group-hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"></div>

                            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all">
                                <span className="text-blue-400 font-mono text-sm mb-2 block">{item.duration}</span>
                                <h3 className="text-2xl font-bold text-white mb-1">{item.degree}</h3>
                                <h4 className="text-lg text-slate-300 mb-4">{item.institution}</h4>
                                <p className="text-slate-400 leading-relaxed max-w-3xl">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
