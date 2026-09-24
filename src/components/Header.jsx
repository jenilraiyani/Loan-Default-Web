const titles = {
    home: 'Home',
    evaluate: 'Prediction',
    models: 'Models',
    docs: 'Documentation',
    privacy: 'Privacy policy',
};

const Header = ({ page }) => {
    return (
        <header className="sticky top-0 z-20 h-14 m-0 border-b border-line bg-card/95 backdrop-blur flex items-center justify-between px-4 sm:px-6">
            <div className="flex items-center gap-3 min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">LoanML</p>
                <span className="text-line">|</span>
                <h1 className="text-sm font-semibold truncate">{titles[page] || 'LoanML'}</h1>
            </div>
            <p className="hidden sm:block text-xs text-muted">5 models</p>
        </header>
    );
};

export default Header;
