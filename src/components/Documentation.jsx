const features = [
    'Age', 'Income', 'Loan amount', 'Credit score', 'Months employed', 'Credit lines',
    'Interest rate', 'Loan term', 'DTI ratio', 'Education', 'Employment type',
    'Marital status', 'Mortgage', 'Dependents', 'Loan purpose', 'Co-signer',
];

const Documentation = () => {
    return (
        <div className="w-full space-y-8">
            <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Reference</p>
                <h2 className="text-3xl font-semibold mt-2 mb-2">Documentation</h2>
                <p className="text-muted max-w-3xl">
                    LoanML scores loan-default risk with two scikit-learn models. This page covers how the desk works, which fields are used, and how the API returns a result.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <article className="rounded-2xl border border-line bg-card p-6">
                    <h3 className="text-lg font-semibold">1. How to run a score</h3>
                    <ol className="mt-4 space-y-3 text-sm text-muted leading-relaxed list-decimal pl-5">
                        <li>Open Prediction from the sidebar.</li>
                        <li>Fill applicant, income, loan, and credit fields. Yes/No fields use a toggle.</li>
                        <li>Choose Logistic, Forest, or Both.</li>
                        <li>Click Run prediction. The form stays filled so you can change one value and score again.</li>
                    </ol>
                </article>

                <article className="rounded-2xl border border-line bg-card p-6">
                    <h3 className="text-lg font-semibold">2. How to read the output</h3>
                    <p className="mt-4 text-sm text-muted leading-relaxed">
                        <span className="text-ink font-medium">Low Risk (0)</span> means the model does not expect default.
                        <span className="text-ink font-medium"> High Risk (1)</span> means the model flags default risk.
                        Probability is the estimated chance of default. This is a decision-support score, not a legal credit decision.
                    </p>
                </article>

                <article className="rounded-2xl border border-line bg-card p-6">
                    <h3 className="text-lg font-semibold">3. Training pipeline</h3>
                    <ul className="mt-4 space-y-2 text-sm text-muted leading-relaxed">
                        <li>• Dataset: Loan_default.csv (255,347 rows)</li>
                        <li>• LoanID dropped, columns cleaned, outliers checked</li>
                        <li>• Label encoding for categories, MinMax scaling for numbers</li>
                        <li>• 80% train / 20% test, random_state = 42</li>
                        <li>• Logistic Regression baseline, then tuned Random Forest</li>
                    </ul>
                </article>

                <article className="rounded-2xl border border-line bg-card p-6">
                    <h3 className="text-lg font-semibold">4. Model performance</h3>
                    <ul className="mt-4 space-y-2 text-sm text-muted leading-relaxed">
                        <li>• Logistic Regression test accuracy: 88.59%</li>
                        <li>• Random Forest test accuracy: 88.63%</li>
                        <li>• Random Forest 5-fold CV: 88.55%</li>
                        <li>• RF best params: 100 trees, max depth 10, min split 2</li>
                        <li>• Library: scikit-learn for both models</li>
                    </ul>
                </article>
            </div>

            <article className="rounded-2xl border border-line bg-card p-6">
                <h3 className="text-lg font-semibold mb-3">5. Features sent to the model</h3>
                <p className="text-sm text-muted mb-4">The backend expects these 16 fields in the same order used in training.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                    {features.map((name) => (
                        <div key={name} className="rounded-xl border border-line bg-panel px-3 py-2 text-sm font-medium">
                            {name}
                        </div>
                    ))}
                </div>
            </article>

            
        </div>
    );
};

export default Documentation;
