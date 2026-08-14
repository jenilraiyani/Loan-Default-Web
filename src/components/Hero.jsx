import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-40 pb-20 overflow-hidden bg-canvas">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-40" />
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-200/40 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-indigo-200/40 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative max-w-4xl mx-auto px-4 z-10 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-brand-700 text-xs font-bold uppercase tracking-wider mb-8"
                >
                    <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                    Enterprise Loan Intelligence
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6"
                >
                    Predict Defaults with <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
                        Machine Precision.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg sm:text-xl text-slate-500 max-w-2xl font-medium leading-relaxed"
                >
                    An algorithmic approach to credit risk. Input applicant data below and leverage our advanced ML model for instantaneous, data-driven decisions.
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;
