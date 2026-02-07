import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Placement Cell Website',
            description: 'A comprehensive management system for recruitment and student data visualization, streamlining the placement process for educational institutions.',
            tech: ['React.js', 'Node.js', 'MySQL', 'Express'],
            github: '#',
            live: '#'
        },
        {
            title: 'AR Plant Implementation',
            description: 'An innovative Augmented Reality educational tool designed to help users identify and learn about diverse plant species through an interactive 3D interface.',
            tech: ['Unity', 'Vuforia', 'Android'],
            github: '#',
            live: '#'
        },
        {
            title: 'E-Commerce Application',
            description: 'Full-stack platform featuring seamless cart management, secure user authentication, and a sleek product discovery interface.',
            tech: ['MERN Stack', 'Redux', 'Cloudinary'],
            github: '#',
            live: '#'
        },
        {
            title: 'OLX Clone',
            description: 'A classifieds platform enabling users to buy and sell items. Features real-time listings, user profiles, and secure authentication.',
            tech: ['React', 'Firebase', 'Tailwind CSS'],
            github: '#',
            live: '#'
        }
    ];

    return (
        <section id="projects" className="min-h-screen py-20 px-10 md:px-20 bg-slate-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-12 flex items-center">
                    <span className="text-blue-500 mr-4 font-mono">04.</span> Featured Work
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full overflow-hidden"
                        >
                            {/* Decorative Accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-x-12 -translate-y-12 blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all"></div>

                            <div className="flex justify-between items-start mb-8">
                                <Folder size={40} className="text-blue-500" />
                                <div className="flex space-x-4 text-slate-400">
                                    <a href={project.github} className="hover:text-blue-400 transition-colors"><Github size={20} /></a>
                                    <a href={project.live} className="hover:text-blue-400 transition-colors"><ExternalLink size={20} /></a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed mb-8 flex-1">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, ti) => (
                                    <span key={ti} className="text-xs font-mono text-blue-500 px-2 py-1 bg-blue-500/10 rounded">
                                        {t}
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

export default Projects;
