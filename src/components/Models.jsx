const logisticImportance = [
    { name: 'Age', value: 22.84, direction: 'Protects (lower default)' },
    { name: 'Interest rate', value: 17.82, direction: 'Raises default risk' },
    { name: 'Income', value: 13.71, direction: 'Protects (lower default)' },
    { name: 'Months employed', value: 13.06, direction: 'Protects (lower default)' },
    { name: 'Loan amount', value: 11.73, direction: 'Raises default risk' },
    { name: 'Credit score', value: 4.76, direction: 'Protects (lower default)' },
    { name: 'Has co-signer', value: 3.18, direction: 'Protects (lower default)' },
    { name: 'Credit lines', value: 3.02, direction: 'Raises default risk' },
];

const forestImportance = [
    { name: 'Age', value: 22.75 },
    { name: 'Income', value: 19.17 },
    { name: 'Interest rate', value: 16.97 },
    { name: 'Loan amount', value: 12.82 },
    { name: 'Months employed', value: 10.03 },
    { name: 'Credit score', value: 4.96 },
    { name: 'DTI ratio', value: 3.40 },
    { name: 'Employment type', value: 1.93 },
];

const comparison = [
    { metric: 'Library', logistic: 'scikit-learn LogisticRegression', forest: 'scikit-learn RandomForestClassifier' },
    { metric: 'Role', logistic: 'Baseline linear model', forest: 'Advanced ensemble model' },
    { metric: 'Test accuracy', logistic: '88.59%', forest: '88.63%' },
    { metric: '5-fold CV accuracy', logistic: '—', forest: '88.55%' },
    { metric: 'Key settings', logistic: 'max_iter = 1000', forest: 'n_estimators = 100, max_depth = 10, min_samples_split = 2' },
    { metric: 'Tuning', logistic: 'Default library fit', forest: 'GridSearchCV, cv = 3' },
    { metric: 'Top feature', logistic: 'Age (22.84%)', forest: 'Age (22.75%)' },
    { metric: 'Strength', logistic: 'Fast and easy to explain', forest: 'Slightly higher test accuracy' },
];

const ImportanceList = ({ items, showDirection }) => (
    <div className="space-y-3">
        {items.map((item) => (
            <div key={item.name}>
                <div className="flex items-center justify-between gap-3 text-sm mb-1">
                    <span className="font-medium">{item.name}</span>
                    <span className="font-mono text-xs text-muted">{item.value.toFixed(2)}%</span>
                </div>
                <div className="h-2 rounded-full bg-panel overflow-hidden">
                    <div className="h-full rounded-full bg-accent" style={{ width: `${Math.min(item.value * 3.2, 100)}%` }} />
                </div>
                {showDirection && item.direction && (
                    <p className="text-xs text-muted mt-1">{item.direction}</p>
                )}
            </div>
        ))}
    </div>
);

const Models = ({ onUseModel }) => {
    return (
        <div className="w-full">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Registry</p>
            <h2 className="text-3xl font-semibold mt-2 mb-2">Models</h2>
            <p className="text-muted mb-8">
                Both models use scikit-learn, the same 16 features, and the same 80/20 train-test split on Loan_default.csv.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <article className="rounded-2xl border border-line bg-card p-6">
                    <h3 className="text-xl font-semibold">Logistic Regression</h3>
                    <p className="text-sm text-muted mt-1">Library: scikit-learn</p>
                    <p className="font-mono text-3xl font-semibold mt-4">88.59%</p>
                    <p className="text-xs text-muted mt-1">Test-set accuracy</p>
                    <ul className="mt-5 space-y-2 text-sm text-muted">
                        <li>• Class: <span className="text-ink">LogisticRegression(max_iter=1000)</span></li>
                        <li>• Saved file: logistic_model.pkl</li>
                        <li>• Reads linear weights to rank feature impact</li>
                        <li>• Fast baseline used in Task 4</li>
                    </ul>
                    <h4 className="text-sm font-semibold mt-6 mb-3">Feature importance</h4>
                    <ImportanceList items={logisticImportance} showDirection />
                    <button
                        type="button"
                        onClick={() => onUseModel('logistic')}
                        className="mt-6 w-full h-11 rounded-xl bg-ink text-white font-medium hover:bg-ink-soft"
                    >
                        Use on prediction desk
                    </button>
                </article>

                <article className="rounded-2xl border border-line bg-card p-6">
                    <h3 className="text-xl font-semibold">Random Forest</h3>
                    <p className="text-sm text-muted mt-1">Library: scikit-learn</p>
                    <p className="font-mono text-3xl font-semibold mt-4">88.63%</p>
                    <p className="text-xs text-muted mt-1">Test-set accuracy · CV 88.55%</p>
                    <ul className="mt-5 space-y-2 text-sm text-muted">
                        <li>• Class: <span className="text-ink">RandomForestClassifier</span></li>
                        <li>• Best params: 100 trees, depth 10, min split 2</li>
                        <li>• Tuned with GridSearchCV</li>
                        <li>• Saved file: rf_model.pkl</li>
                    </ul>
                    <h4 className="text-sm font-semibold mt-6 mb-3">Feature importance</h4>
                    <ImportanceList items={forestImportance} />
                    <button
                        type="button"
                        onClick={() => onUseModel('random_forest')}
                        className="mt-6 w-full h-11 rounded-xl bg-ink text-white font-medium hover:bg-ink-soft"
                    >
                        Use on prediction desk
                    </button>
                </article>
            </div>

            <article className="rounded-2xl border border-line bg-card p-6 mt-5">
                <h3 className="text-xl font-semibold mb-1">Model comparison</h3>
                <p className="text-sm text-muted mb-5">Same test data. Random Forest is slightly ahead on accuracy.</p>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="text-left border-b border-line">
                                <th className="py-3 pr-4 font-semibold">Metric</th>
                                <th className="py-3 pr-4 font-semibold">Logistic Regression</th>
                                <th className="py-3 font-semibold">Random Forest</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparison.map((row) => (
                                <tr key={row.metric} className="border-b border-line/70">
                                    <td className="py-3 pr-4 font-medium whitespace-nowrap">{row.metric}</td>
                                    <td className="py-3 pr-4 text-muted">{row.logistic}</td>
                                    <td className="py-3 text-muted">{row.forest}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </article>
        </div>
    );
};

export default Models;
