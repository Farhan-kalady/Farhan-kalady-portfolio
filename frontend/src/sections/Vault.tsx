import { motion } from 'framer-motion';
import { Award, ShieldCheck, Download } from 'lucide-react';

const Vault = () => {
    const certificates = [
        {
            title: 'DSA Bootcamp Completion',
            issuer: 'Premium Learning Platform',
            category: 'Technical',
            date: '2025',
            highlight: true
        },
        {
            title: 'Full-Stack Development Certification',
            issuer: 'MACE Engineering',
            category: 'Academic',
            date: '2025',
            highlight: false
        },
        {
            title: 'React Performance Optimization',
            issuer: 'Meta/Coursera',
            category: 'Technical',
            date: '2024',
            highlight: false
        }
    ];

    return (
        <section id="vault" className="min-h-screen py-20 px-10 md:px-20 bg-slate-900">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <h2 className="text-4xl font-bold text-white flex items-center mb-6 md:mb-0">
                        <span className="text-blue-500 mr-4 font-mono">05.</span> The Digital Vault
                    </h2>
                    <div className="flex space-x-4">
                        <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-bold border border-blue-500/20">
                            {certificates.length} Total Verified
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`p-6 rounded-2xl border ${cert.highlight ? 'bg-blue-600/10 border-blue-500/50' : 'bg-slate-950/50 border-slate-800'} relative group overflow-hidden`}
                        >
                            {cert.highlight && (
                                <div className="absolute top-0 right-0 p-2 bg-blue-500 text-white rounded-bl-xl font-bold text-[10px] uppercase tracking-tighter shadow-lg">
                                    Featured Item
                                </div>
                            )}

                            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
                                <ShieldCheck size={28} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                                {cert.title}
                            </h3>
                            <p className="text-slate-400 text-sm mb-6">
                                Issued by <span className="text-slate-300 font-medium">{cert.issuer}</span> • {cert.date}
                            </p>

                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">{cert.category}</span>
                                <button className="text-blue-400 hover:text-white flex items-center space-x-2 text-sm font-medium transition-colors">
                                    <Download size={14} />
                                    <span>View PDF</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* AI-Inspired Graphics placeholder for empty vault space */}
                <div className="mt-20 p-12 rounded-3xl border-2 border-dashed border-slate-800 flex flex-col items-center justify-center text-center">
                    <Award size={64} className="text-slate-700 mb-4 opacity-50" />
                    <h4 className="text-xl font-bold text-slate-500">More certifications being indexed...</h4>
                    <p className="text-slate-600 max-w-md mt-2">The digital vault automatically synchronizes with professional credentials upon verification.</p>
                </div>
            </div>
        </section>
    );
};

export default Vault;
