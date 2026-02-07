import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen py-20 px-10 md:px-20 bg-slate-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-12 flex items-center">
                    <span className="text-blue-500 mr-4 font-mono">06.</span> Get In Touch
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-6">Let's build something amazing together.</h3>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                            Whether you have a question, want to discuss a project, or just want to say hi,
                            my inbox is always open. I'll get back to you as soon as I can!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-6 p-4 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-slate-500 text-sm font-mono uppercase">Email</h4>
                                    <a href="mailto:farhancherushola@gmail.com" className="text-white font-medium hover:text-blue-400">farhancherushola@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6 p-4 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-slate-500 text-sm font-mono uppercase">Phone</h4>
                                    <a href="tel:+919846465260" className="text-white font-medium hover:text-blue-400">+91 9846465260</a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6 p-4 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-slate-500 text-sm font-mono uppercase">Location</h4>
                                    <p className="text-white font-medium">Kerala, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 p-10 rounded-3xl border border-slate-800 space-y-6 shadow-2xl shadow-blue-500/5"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-slate-400 font-mono text-xs uppercase mb-2 tracking-widest">Your Name</label>
                                <input
                                    type="text"
                                    placeholder="Farhan K"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:border-blue-500 outline-none transition-all font-sans"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-400 font-mono text-xs uppercase mb-2 tracking-widest">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="email@example.com"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:border-blue-500 outline-none transition-all font-sans"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-slate-400 font-mono text-xs uppercase mb-2 tracking-widest">Subject</label>
                            <input
                                type="text"
                                placeholder="Let's collaborate!"
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:border-blue-500 outline-none transition-all font-sans"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-400 font-mono text-xs uppercase mb-2 tracking-widest">Message</label>
                            <textarea
                                rows={5}
                                placeholder="Tell me about your project..."
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:border-blue-500 outline-none transition-all font-sans resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-5 rounded-xl transition-all flex items-center justify-center space-x-3 group shadow-lg shadow-blue-500/20"
                        >
                            <span>Send Message</span>
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </motion.form>
                </div>
            </div>

            <footer className="mt-20 pt-10 border-t border-slate-900 text-center text-slate-600 font-mono text-sm">
                <p>© 2026 Designed & Built by Mohammed Farhan K</p>
            </footer>
        </section>
    );
};

export default Contact;
