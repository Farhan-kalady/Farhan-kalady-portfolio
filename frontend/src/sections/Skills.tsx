import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'C']
        },
        {
            title: 'Web Technologies',
            skills: ['React.js', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'Tailwind CSS']
        },
        {
            title: 'Databases',
            skills: ['MongoDB', 'MySQL']
        },
        {
            title: 'Core Fundamentals',
            skills: ['Data Structures', 'Algorithms', 'REST APIs', 'Git & GitHub']
        }
    ];

    return (
        <section id="skills" className="min-h-screen py-20 px-6 md:px-20 bg-slate-900">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center">
                    <span className="text-blue-500 mr-4 font-mono">03.</span> Technical Expertise
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                            className="bg-slate-950/50 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all group"
                        >
                            <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center">
                                <span className="w-8 h-[2px] bg-blue-500 mr-3"></span>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-4 py-2 bg-slate-900 border border-slate-700 text-slate-300 rounded-lg text-sm font-medium hover:border-blue-500 hover:text-white transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
