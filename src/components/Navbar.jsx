import { motion } from 'framer-motion';
import { Target, BarChart2, Zap } from 'lucide-react';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-6 inset-x-0 z-50 px-4 pointer-events-none"
        >
            <div className="max-w-5xl mx-auto flex items-center justify-between glass px-6 py-3.5 rounded-2xl pointer-events-auto shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border border-slate-800 shadow-sm">
                        <Target className="w-4 h-4 text-brand-400" />
                    </div>
                    <span className="text-lg font-bold text-slate-900 tracking-tight">
                        LoanML
                    </span>
                </div>

                {/* Links */}
                <div className="hidden sm:flex items-center gap-6">
                    <a href="#" className="text-sm font-medium text-slate-900 flex items-center gap-1.5 transition-colors hover:text-brand-600">
                        <BarChart2 className="w-4 h-4" />
                        Evaluation
                    </a>
                    <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                        Documentation
                    </a>
                    <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                        Models
                    </a>
                </div>

                {/* Actions */}
                <div className="hidden sm:flex items-center">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-slate-900/20 active:scale-95">
                        <Zap className="w-3.5 h-3.5 text-brand-300" />
                        Get API Key
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
