import { BarChart3, BookOpen, Boxes, Home, Menu, Shield, X } from 'lucide-react';

const items = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'evaluate', label: 'Prediction', icon: BarChart3 },
    { id: 'models', label: 'Models', icon: Boxes },
    { id: 'docs', label: 'Documentation', icon: BookOpen },
    { id: 'privacy', label: 'Privacy policy', icon: Shield },
];

const Sidebar = ({ currentPage, onNavigate, open, onToggle }) => {
    return (
        <>
            <button
                type="button"
                onClick={onToggle}
                className="lg:hidden fixed top-4 left-4 z-50 w-11 h-11 rounded-xl bg-ink text-white flex items-center justify-center shadow-lg"
            >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {open && (
                <button
                    type="button"
                    className="lg:hidden fixed inset-0 z-30 bg-ink/40"
                    onClick={onToggle}
                />
            )}

            <aside className={`fixed inset-y-0 left-0 z-40 w-72 bg-ink text-white flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                <div className="px-6 pt-8 pb-6 border-b border-white/10">
                    <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-teal-300/80">Credit desk</p>
                    <h1 className="mt-2 text-2xl font-semibold tracking-tight">LoanML</h1>
                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                        Dual-model loan default scoring.
                    </p>
                </div>

                <nav className="flex-1 px-3 py-6 space-y-1">
                    {items.map((item) => {
                        const Icon = item.icon;
                        const active = currentPage === item.id;
                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => {
                                    onNavigate(item.id);
                                    if (window.innerWidth < 1024) onToggle();
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                                    active
                                        ? 'bg-white text-ink'
                                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                                <Icon className="w-4 h-4" />
                                {item.label}
                            </button>
                        );
                    })}
                </nav>

                <div className="px-6 py-5 border-t border-white/10 text-xs text-slate-500">
                    5 Unit-3 classifiers ready
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
