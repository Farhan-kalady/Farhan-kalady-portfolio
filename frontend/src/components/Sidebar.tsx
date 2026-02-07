import React from 'react';
import { Github, Linkedin, Mail, Phone, Home, User, Briefcase, GraduationCap, Code, Award, MessageSquare } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Sidebar = () => {
    const menuItems = [
        { name: 'Home', icon: <Home size={20} />, href: '#home' },
        { name: 'About', icon: <User size={20} />, href: '#about' },
        { name: 'Education', icon: <GraduationCap size={20} />, href: '#education' },
        { name: 'Skills', icon: <Code size={20} />, href: '#skills' },
        { name: 'Projects', icon: <Briefcase size={20} />, href: '#projects' },
        { name: 'Vault', icon: <Award size={20} />, href: '#vault' },
        { name: 'Contact', icon: <MessageSquare size={20} />, href: '#contact' },
    ];

    return (
        <div className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white border-r border-slate-800 flex flex-col items-center py-10 transition-all duration-300 overflow-y-auto">
            {/* Profile Header */}
            <div className="flex flex-col items-center mb-10 text-center px-4">
                <div className="w-32 h-32 rounded-full border-4 border-blue-500 overflow-hidden mb-4 bg-slate-800 flex items-center justify-center">
                    <img src={profileImg} alt="Mohammed Farhan K" className="w-full h-full object-cover object-top" />
                </div>
                <h1 className="text-xl font-bold">Mohammed Farhan K</h1>
                <p className="text-sm text-slate-400 mt-2">MCA Student & Full-Stack Developer</p>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 w-full px-6">
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-600/20 hover:text-blue-400 transition-colors group"
                            >
                                <span className="text-slate-400 group-hover:text-blue-400">{item.icon}</span>
                                <span className="font-medium text-sm lg:text-base">{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Social Hub */}
            <div className="mt-auto pt-6 border-t border-slate-800 w-full px-6 flex justify-center space-x-4">
                <a href="https://github.com/Farhan-kalady" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
                    <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/farhan-kalady-70651523b" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
                    <Linkedin size={20} />
                </a>
                <a href="mailto:farhancherushola@gmail.com" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
                    <Mail size={20} />
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
