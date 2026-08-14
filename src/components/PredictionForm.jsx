import { motion } from 'framer-motion';
import {
    User, GraduationCap, Heart, Users,
    DollarSign, Briefcase, Clock, Home,
    Landmark, Target, CalendarDays, Percent,
    CreditCard, List, TrendingDown, UserPlus,
    Loader2, ArrowRight
} from 'lucide-react';

// Container stagger effect
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
};

const itemAnim = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    show: {
        opacity: 1, y: 0, filter: "blur(0px)",
        transition: { type: 'spring', stiffness: 260, damping: 20 }
    }
};

const PredictionForm = ({ formData, setFormData, onSubmit, loading }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="relative max-w-6xl mx-auto px-4 pb-32">
            <form onSubmit={onSubmit}>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                    {/* Section A: Personal Information */}
                    <GlassSection title="Applicant Details" icon={<User className="w-4 h-4" />}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <PremiumInput icon={<User />} label="Age" name="Age" value={formData.Age} onChange={handleChange} placeholder="30" />
                            <PremiumSelect icon={<GraduationCap />} label="Education Level" name="Education" value={formData.Education} onChange={handleChange}
                                options={[
                                    { value: 0, label: "High School" },
                                    { value: 1, label: "Bachelor's Degree" },
                                    { value: 2, label: "Master's Degree" },
                                    { value: 3, label: "Doctorate (PhD)" },
                                ]}
                            />
                            <PremiumSelect icon={<Heart />} label="Marital Status" name="MaritalStatus" value={formData.MaritalStatus} onChange={handleChange}
                                options={[
                                    { value: 0, label: "Single" },
                                    { value: 1, label: "Married" },
                                    { value: 2, label: "Divorced" },
                                ]}
                            />
                            <PremiumSegmented label="Dependents" name="HasDependents" value={formData.HasDependents} onChange={handleChange} />
                        </div>
                    </GlassSection>

                    {/* Section B: Financial & Employment Profile */}
                    <GlassSection title="Financial Profile" icon={<Briefcase className="w-4 h-4" />}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <PremiumInput icon={<DollarSign />} label="Annual Income" name="Income" value={formData.Income} onChange={handleChange} placeholder="85000" isCurrency />
                            <PremiumSelect icon={<Briefcase />} label="Employment Type" name="EmploymentType" value={formData.EmploymentType} onChange={handleChange}
                                options={[
                                    { value: 0, label: "Unemployed" },
                                    { value: 1, label: "Part-time" },
                                    { value: 2, label: "Full-time" },
                                    { value: 3, label: "Self-employed" },
                                ]}
                            />
                            <PremiumInput icon={<Clock />} label="Employment Duration" name="MonthsEmployed" value={formData.MonthsEmployed} onChange={handleChange} placeholder="24" suffix="mos" />
                            <PremiumSegmented label="Owns Mortgage" name="HasMortgage" value={formData.HasMortgage} onChange={handleChange} />
                        </div>
                    </GlassSection>

                    {/* Section C: Loan Details */}
                    <GlassSection title="Loan Parameters" icon={<Landmark className="w-4 h-4" />}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <PremiumInput icon={<Landmark />} label="Requested Amount" name="LoanAmount" value={formData.LoanAmount} onChange={handleChange} placeholder="25000" isCurrency />
                            <PremiumSelect icon={<Target />} label="Loan Purpose" name="LoanPurpose" value={formData.LoanPurpose} onChange={handleChange}
                                options={[
                                    { value: 0, label: "Auto Loan" },
                                    { value: 1, label: "Business" },
                                    { value: 2, label: "Education" },
                                    { value: 3, label: "Home Improve." },
                                    { value: 4, label: "Other" },
                                ]}
                            />
                            <PremiumSelect icon={<CalendarDays />} label="Loan Term" name="LoanTerm" value={formData.LoanTerm} onChange={handleChange}
                                options={[
                                    { value: 12, label: "12 Months" },
                                    { value: 24, label: "24 Months" },
                                    { value: 36, label: "36 Months" },
                                    { value: 48, label: "48 Months" },
                                    { value: 60, label: "60 Months" },
                                ]}
                            />
                            <PremiumInput icon={<Percent />} label="Interest Rate" name="InterestRate" value={formData.InterestRate} onChange={handleChange} placeholder="7.5" suffix="%" step={0.1} />
                        </div>
                    </GlassSection>

                    {/* Section D: Credit History */}
                    <GlassSection title="Credit History" icon={<CreditCard className="w-4 h-4" />}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <PremiumInput icon={<CreditCard />} label="Credit Score" name="CreditScore" value={formData.CreditScore} onChange={handleChange} placeholder="720" />
                            <PremiumInput icon={<List />} label="Active Credit Lines" name="NumCreditLines" value={formData.NumCreditLines} onChange={handleChange} placeholder="4" />
                            <PremiumInput icon={<TrendingDown />} label="DTI Ratio" name="DTIRatio" value={formData.DTIRatio} onChange={handleChange} placeholder="0.35" step={0.01} />
                            <PremiumSegmented label="Has Co-Signer" name="HasCoSigner" value={formData.HasCoSigner} onChange={handleChange} />
                        </div>
                    </GlassSection>
                </motion.div>

                {/* Global Action Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 flex justify-center"
                >
                    <button
                        type="submit"
                        disabled={loading}
                        className="group relative flex items-center justify-center gap-2 w-full max-w-sm h-14 rounded-2xl bg-slate-900 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(15,23,42,0.5)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
                    >
                        {/* Button shine effect */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />

                        {loading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Processing...</span>
                            </>
                        ) : (
                            <>
                                <span>Run Evaluation</span>
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </>
                        )}
                    </button>
                </motion.div>
            </form>
        </div>
    );
};

/* ──────────────── Reusable Highly Styled UI Components ──────────────── */

const GlassSection = ({ title, icon, children }) => (
    <motion.div variants={itemAnim} className="glass-card rounded-[2rem] p-1">
        <div className="bg-white/50 rounded-[1.8rem] p-6 sm:p-8 h-full">
            <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-white border border-slate-200 shadow-sm text-slate-700">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h3>
            </div>
            <div>{children}</div>
        </div>
    </motion.div>
);

const labelClass = "block text-[13px] font-semibold text-slate-600 mb-2 tracking-wide uppercase";
const inputContainerClass = "relative flex items-center overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-500/10 hover:border-slate-300 shadow-sm";
const iconWrapperClass = "absolute left-3.5 flex items-center justify-center text-slate-400 [&>svg]:w-[18px] [&>svg]:h-[18px]";

const PremiumInput = ({ icon, label, name, value, onChange, placeholder, isCurrency, suffix, step }) => (
    <div>
        <label className={labelClass}>{label}</label>
        <div className={inputContainerClass}>
            {isCurrency ? (
                <span className="absolute left-4 font-bold text-slate-400">$</span>
            ) : (
                <div className={iconWrapperClass}>{icon}</div>
            )}
            <input
                type="number"
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                step={step}
                className="w-full h-12 bg-transparent text-slate-900 font-medium placeholder:text-slate-300 placeholder:font-normal pl-11 pr-4 outline-none"
            />
            {suffix && (
                <span className="absolute right-4 text-sm font-semibold text-slate-400">{suffix}</span>
            )}
        </div>
    </div>
);

const PremiumSelect = ({ icon, label, name, value, onChange, options }) => (
    <div>
        <label className={labelClass}>{label}</label>
        <div className={inputContainerClass + " cursor-pointer"}>
            <div className={iconWrapperClass}>{icon}</div>
            <select
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                className="w-full h-12 bg-transparent text-slate-900 font-medium pl-11 pr-10 outline-none appearance-none cursor-pointer"
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
            <div className="absolute right-4 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
            </div>
        </div>
    </div>
);

const PremiumSegmented = ({ label, name, value, onChange }) => (
    <div>
        <label className={labelClass}>{label}</label>
        <div className="flex p-1 rounded-xl border border-slate-200 bg-slate-50/50 h-12">
            <button
                type="button"
                onClick={() => onChange({ target: { name, value: 1 } })}
                className={`flex-1 rounded-lg text-sm font-semibold transition-all duration-300
          ${Number(value) === 1
                        ? 'bg-white shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] text-slate-900 border border-slate-200/50'
                        : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100/50 border border-transparent'
                    }`}
            >
                Yes
            </button>
            <button
                type="button"
                onClick={() => onChange({ target: { name, value: 0 } })}
                className={`flex-1 rounded-lg text-sm font-semibold transition-all duration-300
          ${Number(value) === 0
                        ? 'bg-white shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] text-slate-900 border border-slate-200/50'
                        : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100/50 border border-transparent'
                    }`}
            >
                No
            </button>
        </div>
    </div>
);

export default PredictionForm;
