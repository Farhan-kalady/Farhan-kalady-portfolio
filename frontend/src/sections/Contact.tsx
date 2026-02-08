import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const apiBase = import.meta.env.VITE_API_BASE_URL || '/api';
            await axios.post(`${apiBase}/contact`, formData);
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err: any) {
            setStatus('error');
            setErrorMessage(err.response?.data?.message || 'Something went wrong. Please try again later.');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="min-h-screen py-20 px-6 md:px-20 bg-slate-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center">
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
                                    <p className="text-white font-medium">Malappuram, Kerala, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 p-6 md:p-10 rounded-3xl border border-slate-800 space-y-6 shadow-2xl shadow-blue-500/5"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-slate-400 font-mono text-xs uppercase mb-2 tracking-widest">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Farhan K"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:border-blue-500 outline-none transition-all font-sans"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-400 font-mono text-xs uppercase mb-2 tracking-widest">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="email@example.com"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:border-blue-500 outline-none transition-all font-sans"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-slate-400 font-mono text-xs uppercase mb-2 tracking-widest">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="Let's collaborate!"
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:border-blue-500 outline-none transition-all font-sans"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-400 font-mono text-xs uppercase mb-2 tracking-widest">Message</label>
                            <textarea
                                rows={5}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Tell me about your project..."
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:border-blue-500 outline-none transition-all font-sans resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className={`w-full ${status === 'loading' ? 'bg-blue-800' : 'bg-blue-500 hover:bg-blue-600'} text-white font-bold py-5 rounded-xl transition-all flex items-center justify-center space-x-3 group shadow-lg shadow-blue-500/20`}
                        >
                            {status === 'loading' ? (
                                <Loader2 size={18} className="animate-spin" />
                            ) : status === 'success' ? (
                                <CheckCircle2 size={18} />
                            ) : status === 'error' ? (
                                <AlertCircle size={18} />
                            ) : (
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            )}
                            <span>
                                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed to Send' : 'Send Message'}
                            </span>
                        </button>

                        {status === 'error' && (
                            <p className="text-red-400 text-sm text-center font-medium">{errorMessage}</p>
                        )}
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
