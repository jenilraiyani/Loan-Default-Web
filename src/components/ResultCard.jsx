import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, AlertCircle, RefreshCcw, ArrowRight } from 'lucide-react';

const ResultCard = ({ prediction, onReset }) => {
    const isApproved = prediction === 0;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="max-w-3xl mx-auto px-4 pb-32 pt-10"
            >
                <div className={`relative overflow-hidden rounded-[2.5rem] mt-10
            ${isApproved
                        ? 'bg-gradient-to-b from-brand-50/80 to-white border border-brand-100 shadow-[0_20px_60px_-15px_rgba(20,184,166,0.15)]'
                        : 'bg-gradient-to-b from-rose-50/80 to-white border border-rose-100 shadow-[0_20px_60px_-15px_rgba(244,63,94,0.15)]'
                    }`}
                >
                    {/* Decorative Top Glow */}
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] rounded-full blur-[100px] pointer-events-none opacity-40
             ${isApproved ? 'bg-brand-300' : 'bg-rose-300'}`}
                    />

                    <div className="relative z-10 p-10 sm:p-16 text-center flex flex-col items-center">

                        {/* Icon */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                            className={`flex items-center justify-center w-24 h-24 rounded-[2rem] shadow-sm mb-8
                  ${isApproved ? 'bg-brand-500 text-white' : 'bg-rose-500 text-white'}`}
                        >
                            {isApproved
                                ? <ShieldCheck className="w-12 h-12" strokeWidth={2} />
                                : <AlertCircle className="w-12 h-12" strokeWidth={2} />
                            }
                        </motion.div>

                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className={`inline-flex items-center px-4 py-1.5 rounded-full text-[13px] font-bold tracking-widest uppercase mb-6
                ${isApproved ? 'text-brand-700 bg-brand-100/50' : 'text-rose-700 bg-rose-100/50'}`}
                        >
                            {isApproved ? 'Evaluation Passed' : 'Evaluation Failed'}
                        </motion.div>

                        {/* Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6"
                        >
                            {isApproved ? 'Low Risk Profile' : 'High Risk Profile'}
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg text-slate-500 max-w-lg mx-auto font-medium leading-relaxed"
                        >
                            {isApproved
                                ? 'Our machine learning models indicate that this applicant has a highly favorable financial trajectory. Advised to proceed with loan origination.'
                                : 'Algorithmic assessment flags significant risk factors correlating with default. Recommended to review manually or decline.'
                            }
                        </motion.p>

                        {/* Divider */}
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ delay: 0.6, duration: 0.8, ease: "anticipate" }}
                            className={`w-32 h-[1px] my-10 ${isApproved ? 'bg-brand-200' : 'bg-rose-200'}`}
                        />

                        {/* Actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
                        >
                            <button
                                onClick={onReset}
                                className="flex items-center justify-center gap-2 px-8 h-14 rounded-2xl bg-white border border-slate-200 text-slate-900 font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all w-full sm:w-auto"
                            >
                                <RefreshCcw className="w-4 h-4 text-slate-500" />
                                New Assessment
                            </button>

                            {isApproved && (
                                <button className="flex items-center justify-center gap-2 px-8 h-14 rounded-2xl bg-slate-900 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto overflow-hidden relative group">
                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                                    View Detailed Report <ArrowRight className="w-4 h-4" />
                                </button>
                            )}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ResultCard;
