import { Menu, X } from 'lucide-react';

interface MobileHeaderProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const MobileHeader = ({ isOpen, toggleMenu }: MobileHeaderProps) => {
    return (
        <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50 flex items-center justify-between px-6">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs">
                    MF
                </div>
                <span className="text-white font-bold tracking-tight">Farhan K</span>
            </div>

            <button
                onClick={toggleMenu}
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </header>
    );
};

export default MobileHeader;
