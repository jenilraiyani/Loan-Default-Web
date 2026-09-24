import { ShieldCheck, AlertTriangle } from 'lucide-react';

const ResultCard = ({ result, loading }) => {
    const models = [
        result?.logistic_regression,
        result?.decision_tree,
        result?.naive_bayes,
        result?.random_forest,
        result?.adaboost,
    ].filter(Boolean);
    const displayModels = models.length
        ? models
        : (result?.prediction != null
            ? [{ name: 'Selected Model', prediction: result.prediction, risk_status: result.risk_status, probability: result.probability }]
            : []);

    return (
        <div className="h-full flex flex-col">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Output</p>
            <h2 className="text-2xl font-semibold mt-1 mb-1">Prediction</h2>
            <p className="text-sm text-muted mb-6">
                Results stay on this side. Edit one input and score again.
            </p>

            {result?.error && (
                <div className="rounded-2xl border border-rose-200 bg-danger-soft px-5 py-4 text-sm text-danger mb-4">
                    {result.error}
                </div>
            )}

            {loading && (
                <div className="rounded-2xl border border-line bg-panel px-5 py-4 text-sm text-muted mb-4">
                    Updating score with the current form values…
                </div>
            )}

            {displayModels.length === 0 && !loading && (
                <div className="flex-1 rounded-2xl border border-dashed border-line bg-panel px-6 py-16 text-center">
                    <p className="text-lg font-semibold">No score yet</p>
                    <p className="text-sm text-muted mt-2 max-w-sm mx-auto">
                        Fill the form on the left and run a prediction. The applicant data will not be cleared.
                    </p>
                </div>
            )}

            <div className="space-y-4">
                {displayModels.map((model) => {
                    const lowRisk = model.prediction === 0;
                    return (
                        <article
                            key={model.name}
                            className={`rounded-2xl border p-6 ${
                                lowRisk
                                    ? 'bg-accent-soft/40 border-teal-200'
                                    : 'bg-danger-soft border-rose-200'
                            }`}
                        >
                            <p className="font-mono text-[11px] uppercase tracking-widest text-slate-500">{model.name}</p>
                            <div className="flex items-start gap-4 mt-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${lowRisk ? 'bg-accent' : 'bg-danger'}`}>
                                    {lowRisk ? <ShieldCheck className="w-6 h-6" /> : <AlertTriangle className="w-6 h-6" />}
                                </div>
                                <div>
                                    <p className={`text-sm font-semibold uppercase tracking-wide ${lowRisk ? 'text-accent' : 'text-danger'}`}>
                                        {lowRisk ? 'Low risk' : 'High risk'}
                                    </p>
                                    <h3 className="text-xl font-semibold mt-1">
                                        {model.risk_status || (lowRisk ? 'Low Risk (No Default)' : 'High Risk (Default)')}
                                    </h3>
                                    {model.probability != null && (
                                        <p className="text-sm text-muted mt-2">
                                            Default probability: <span className="font-mono font-medium text-ink">{(model.probability * 100).toFixed(1)}%</span>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
};

export default ResultCard;
