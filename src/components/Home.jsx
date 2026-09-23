import { ArrowRight, GitCompare, ShieldCheck, SlidersHorizontal } from 'lucide-react';

const metrics = [
    { value: '88.63%', label: 'Random Forest accuracy' },
    { value: '88.59%', label: 'Logistic Regression accuracy' },
    { value: '16', label: 'Applicant features' },
    { value: '255k', label: 'Training rows' },
];

const steps = [
    { icon: SlidersHorizontal, title: 'Capture the file', body: 'Enter income, credit, and loan terms. Yes/No fields stay as toggles. Values remain after each score.' },
    { icon: GitCompare, title: 'Select the engine', body: 'Run Logistic Regression, Random Forest, or both on the same applicant in one request.' },
    { icon: ShieldCheck, title: 'Read the decision', body: 'Get low/high risk plus default probability. Change one input and rescore instantly.' },
];

const Home = ({ onNavigate }) => {
    return (
        <div className="w-full space-y-6">
            <section className="relative overflow-hidden rounded-3xl bg-ink text-white">
                <div className="absolute -top-24 -right-16 w-80 h-80 rounded-full bg-teal-400/15 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-indigo-400/10 blur-3xl pointer-events-none" />

                <div className="relative grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-10 p-8 sm:p-12">
                    <div>
                        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-teal-300">
                            Credit intelligence
                        </p>
                        <h2 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-tight leading-[1.08] mt-6 max-w-xl">
                            Institutional risk scoring, in one desk.
                        </h2>
                        <p className="text-slate-300 mt-5 max-w-xl text-base leading-relaxed">
                            Two production-style scikit-learn models score the same 16 features. Built for a clean, repeatable credit review — not a marketing landing page.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-8">
                            <button
                                type="button"
                                onClick={() => onNavigate('evaluate')}
                                className="h-12 px-6 rounded-xl bg-white text-ink font-semibold inline-flex items-center gap-2 hover:bg-slate-100"
                            >
                                Start scoring
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <button
                                type="button"
                                onClick={() => onNavigate('models')}
                                className="h-12 px-6 rounded-xl border border-white/20 text-white font-medium hover:bg-white/10"
                            >
                                Model registry
                            </button>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-sm">
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">Live snapshot</p>
                        <div className="mt-5 space-y-4">
                            <div className="flex items-center justify-between pb-4 border-b border-white/10">
                                <div>
                                    <p className="text-sm text-slate-400">Recommended engine</p>
                                    <p className="text-lg font-semibold mt-1">Random Forest</p>
                                </div>
                                <span className="rounded-full bg-teal-400/15 text-teal-300 text-xs font-semibold px-3 py-1">Tuned</span>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="rounded-xl bg-black/20 p-4">
                                    <p className="text-xs text-slate-400">Default probability</p>
                                    <p className="font-mono text-2xl font-semibold mt-2">11.8%</p>
                                </div>
                                <div className="rounded-xl bg-black/20 p-4">
                                    <p className="text-xs text-slate-400">Decision</p>
                                    <p className="text-2xl font-semibold mt-2 text-teal-300">Low risk</p>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Sample output only. Real scores come from your current form values on the Prediction desk.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                {metrics.map((item) => (
                    <article key={item.label} className="rounded-2xl border border-line bg-card px-5 py-5">
                        <p className="font-mono text-2xl sm:text-3xl font-semibold tracking-tight">{item.value}</p>
                        <p className="text-xs sm:text-sm text-muted mt-2">{item.label}</p>
                    </article>
                ))}
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {steps.map((step) => {
                    const Icon = step.icon;
                    return (
                        <article key={step.title} className="rounded-2xl border border-line bg-card p-6">
                            <div className="w-10 h-10 rounded-xl bg-ink text-white flex items-center justify-center">
                                <Icon className="w-4 h-4" />
                            </div>
                            <h3 className="text-lg font-semibold mt-5">{step.title}</h3>
                            <p className="text-sm text-muted mt-2 leading-relaxed">{step.body}</p>
                        </article>
                    );
                })}
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-4">
                <article className="rounded-2xl border border-line bg-card p-6 sm:p-8">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Scope</p>
                    <h3 className="text-2xl font-semibold mt-3">Designed for review, not origination.</h3>
                    <p className="text-sm text-muted mt-3 leading-relaxed">
                        LoanML standardizes 16 fields, applies the training scaler, and returns a comparable score from one or both models. It does not store applicants, issue credit, or replace an underwriter.
                    </p>
                    <button
                        type="button"
                        onClick={() => onNavigate('docs')}
                        className="mt-6 text-sm font-semibold text-ink inline-flex items-center gap-2"
                    >
                        Read documentation
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </article>
                <article className="rounded-2xl border border-line bg-card p-6 sm:p-8">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Governance</p>
                    <h3 className="text-2xl font-semibold mt-3">Local scoring. No account graph.</h3>
                    <p className="text-sm text-muted mt-3 leading-relaxed">
                        Form data is posted only to the local API for inference. There are no user accounts, cookies, or analytics pixels in this demo. Review the privacy note before sharing a machine.
                    </p>
                    <button
                        type="button"
                        onClick={() => onNavigate('privacy')}
                        className="mt-6 text-sm font-semibold text-ink inline-flex items-center gap-2"
                    >
                        Privacy policy
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </article>
            </section>
        </div>
    );
};

export default Home;
