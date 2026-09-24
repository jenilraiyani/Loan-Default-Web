const treeImportance = [
    { name: 'Age', value: 17.24 },
    { name: 'Income', value: 17.19 },
    { name: 'Interest rate', value: 16.72 },
    { name: 'Loan amount', value: 16.60 },
    { name: 'Months employed', value: 10.91 },
    { name: 'Credit score', value: 7.20 },
    { name: 'DTI ratio', value: 4.20 },
    { name: 'Employment type', value: 1.89 },
];

const adaImportance = [
    { name: 'Age', value: 46.74 },
    { name: 'Interest rate', value: 11.75 },
    { name: 'Income', value: 11.53 },
    { name: 'Months employed', value: 7.24 },
    { name: 'Loan amount', value: 5.87 },
    { name: 'Employment type', value: 3.15 },
    { name: 'Credit score', value: 2.26 },
    { name: 'Has co-signer', value: 2.15 },
];

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

const modelCards = [
    {
        id: 'logistic',
        name: 'Logistic Regression',
        kind: 'Linear baseline',
        accuracy: '88.59%',
        file: 'logistic_model.pkl',
        className: 'LogisticRegression(max_iter=1000)',
        notes: ['Fast and easy to explain', 'Uses linear weights for feature impact'],
        importance: logisticImportance,
        showDirection: true,
    },
    {
        id: 'decision_tree',
        name: 'Decision Tree',
        kind: 'Tree classifier',
        accuracy: '87.51%',
        file: 'decision_tree_model.pkl',
        className: 'DecisionTreeClassifier(max_depth=12)',
        notes: ['Unit-3 core algorithm', 'Readable rule-style splits'],
        importance: treeImportance,
    },
    {
        id: 'naive_bayes',
        name: 'Naive Bayes',
        kind: 'Probabilistic classifier',
        accuracy: '88.54%',
        file: 'naive_bayes_model.pkl',
        className: 'GaussianNB()',
        notes: ['Based on Bayes theorem', 'Not an ensemble / not bagging'],
        importance: null,
    },
    {
        id: 'random_forest',
        name: 'Random Forest',
        kind: 'Bagging ensemble',
        accuracy: '88.63%',
        file: 'rf_model.pkl',
        className: 'RandomForestClassifier(n_estimators=100)',
        notes: ['Tuned with GridSearchCV', 'Default model on the prediction desk'],
        importance: forestImportance,
    },
    {
        id: 'adaboost',
        name: 'AdaBoost',
        kind: 'Boosting ensemble',
        accuracy: '88.61%',
        file: 'adaboost_model.pkl',
        className: 'AdaBoostClassifier(n_estimators=50)',
        notes: ['Unit-3 boosting example', 'Focuses on hard-to-classify samples'],
        importance: adaImportance,
    },
];

const comparison = [
    { metric: 'Type', logistic: 'Linear', tree: 'Tree', nb: 'Probabilistic', forest: 'Bagging', ada: 'Boosting' },
    { metric: 'Test accuracy', logistic: '88.59%', tree: '87.51%', nb: '88.54%', forest: '88.63%', ada: '88.61%' },
    { metric: 'Library', logistic: 'sklearn', tree: 'sklearn', nb: 'sklearn', forest: 'sklearn', ada: 'sklearn' },
    { metric: 'From PPT Unit-3', logistic: 'Yes', tree: 'Yes', nb: 'Yes', forest: 'Yes', ada: 'Yes' },
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
                Five scikit-learn models from Unit-3 Classification, trained on the same 16 features and Loan_default.csv split.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {modelCards.map((model) => (
                    <article key={model.id} className="rounded-2xl border border-line bg-card p-6 flex flex-col">
                        <h3 className="text-xl font-semibold">{model.name}</h3>
                        <p className="text-sm text-muted mt-1">{model.kind}</p>
                        <p className="font-mono text-3xl font-semibold mt-4">{model.accuracy}</p>
                        <p className="text-xs text-muted mt-1">Test-set accuracy</p>
                        <ul className="mt-5 space-y-2 text-sm text-muted">
                            <li>• Class: <span className="text-ink">{model.className}</span></li>
                            <li>• Saved file: {model.file}</li>
                            {model.notes.map((note) => (
                                <li key={note}>• {note}</li>
                            ))}
                        </ul>
                        {model.importance ? (
                            <>
                                <h4 className="text-sm font-semibold mt-6 mb-3">Feature importance</h4>
                                <ImportanceList items={model.importance} showDirection={model.showDirection} />
                            </>
                        ) : (
                            <p className="text-sm text-muted mt-6">
                                Naive Bayes does not expose tree-style feature importance. It scores using class-conditional probabilities.
                            </p>
                        )}
                        <button
                            type="button"
                            onClick={() => onUseModel(model.id)}
                            className="mt-6 w-full h-11 rounded-xl bg-ink text-white font-medium hover:bg-ink-soft"
                        >
                            Use on prediction desk
                        </button>
                    </article>
                ))}
            </div>

            <article className="rounded-2xl border border-line bg-card p-6 mt-5 overflow-x-auto">
                <h3 className="text-xl font-semibold mb-1">Model comparison</h3>
                <p className="text-sm text-muted mb-5">Same test data. Random Forest leads slightly on accuracy.</p>
                <table className="w-full text-sm min-w-[760px]">
                    <thead>
                        <tr className="text-left border-b border-line">
                            <th className="py-3 pr-3 font-semibold">Metric</th>
                            <th className="py-3 pr-3 font-semibold">Logistic</th>
                            <th className="py-3 pr-3 font-semibold">Decision Tree</th>
                            <th className="py-3 pr-3 font-semibold">Naive Bayes</th>
                            <th className="py-3 pr-3 font-semibold">Random Forest</th>
                            <th className="py-3 font-semibold">AdaBoost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparison.map((row) => (
                            <tr key={row.metric} className="border-b border-line/70">
                                <td className="py-3 pr-3 font-medium whitespace-nowrap">{row.metric}</td>
                                <td className="py-3 pr-3 text-muted">{row.logistic}</td>
                                <td className="py-3 pr-3 text-muted">{row.tree}</td>
                                <td className="py-3 pr-3 text-muted">{row.nb}</td>
                                <td className="py-3 pr-3 text-muted">{row.forest}</td>
                                <td className="py-3 text-muted">{row.ada}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </article>
        </div>
    );
};

export default Models;
