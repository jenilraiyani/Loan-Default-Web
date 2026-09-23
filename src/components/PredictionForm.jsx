const sections = [
    {
        title: 'Applicant',
        fields: [
            { name: 'Age', label: 'Age', type: 'number', placeholder: '30' },
            { name: 'Education', label: 'Education', type: 'select', options: [
                { value: 0, label: 'High School' },
                { value: 1, label: "Bachelor's" },
                { value: 2, label: "Master's" },
                { value: 3, label: 'PhD' },
            ]},
            { name: 'MaritalStatus', label: 'Marital status', type: 'select', options: [
                { value: 0, label: 'Single' },
                { value: 1, label: 'Married' },
                { value: 2, label: 'Divorced' },
            ]},
            { name: 'HasDependents', label: 'Dependents', type: 'toggle' },
        ],
    },
    {
        title: 'Income & work',
        fields: [
            { name: 'Income', label: 'Annual income', type: 'number', placeholder: '85000' },
            { name: 'EmploymentType', label: 'Employment', type: 'select', options: [
                { value: 0, label: 'Unemployed' },
                { value: 1, label: 'Part-time' },
                { value: 2, label: 'Full-time' },
                { value: 3, label: 'Self-employed' },
            ]},
            { name: 'MonthsEmployed', label: 'Months employed', type: 'number', placeholder: '24' },
            { name: 'HasMortgage', label: 'Mortgage', type: 'toggle' },
        ],
    },
    {
        title: 'Loan',
        fields: [
            { name: 'LoanAmount', label: 'Loan amount', type: 'number', placeholder: '25000' },
            { name: 'LoanPurpose', label: 'Purpose', type: 'select', options: [
                { value: 0, label: 'Auto' },
                { value: 1, label: 'Business' },
                { value: 2, label: 'Education' },
                { value: 3, label: 'Home' },
                { value: 4, label: 'Other' },
            ]},
            { name: 'LoanTerm', label: 'Term (months)', type: 'select', options: [
                { value: 12, label: '12' },
                { value: 24, label: '24' },
                { value: 36, label: '36' },
                { value: 48, label: '48' },
                { value: 60, label: '60' },
            ]},
            { name: 'InterestRate', label: 'Interest rate %', type: 'number', placeholder: '7.5', step: 0.1 },
        ],
    },
    {
        title: 'Credit',
        fields: [
            { name: 'CreditScore', label: 'Credit score', type: 'number', placeholder: '720' },
            { name: 'NumCreditLines', label: 'Credit lines', type: 'number', placeholder: '4' },
            { name: 'DTIRatio', label: 'DTI ratio', type: 'number', placeholder: '0.35', step: 0.01 },
            { name: 'HasCoSigner', label: 'Co-signer', type: 'toggle' },
        ],
    },
];

const PredictionForm = ({ formData, setFormData, onSubmit, loading, selectedModel, setSelectedModel }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleToggle = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <form onSubmit={onSubmit} className="flex flex-col h-full">
            <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Workspace</p>
                    <h2 className="text-2xl font-semibold mt-1">Applicant input</h2>
                    <p className="text-sm text-muted mt-1">Change one field and run again. Values stay filled.</p>
                </div>
            </div>

            <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">Model</p>
                <div className="grid grid-cols-3 gap-2">
                    {[
                        { value: 'logistic', label: 'Logistic' },
                        { value: 'random_forest', label: 'Forest' },
                        { value: 'both', label: 'Both' },
                    ].map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => setSelectedModel(option.value)}
                            className={`h-10 rounded-lg text-sm font-medium border transition-colors ${
                                selectedModel === option.value
                                    ? 'bg-ink text-white border-ink'
                                    : 'bg-white text-ink border-line hover:border-slate-400'
                            }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-6 flex-1">
                {sections.map((section) => (
                    <div key={section.title}>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted mb-3">{section.title}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {section.fields.map((field) => (
                                <label key={field.name} className="block">
                                    <span className="block text-[13px] font-medium text-slate-600 mb-1.5">{field.label}</span>
                                    {field.type === 'toggle' ? (
                                        <Toggle
                                            on={Number(formData[field.name]) === 1}
                                            onChange={(next) => handleToggle(field.name, next ? 1 : 0)}
                                        />
                                    ) : field.type === 'select' ? (
                                        <select
                                            name={field.name}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                            className="w-full h-11 px-3 rounded-lg border border-line bg-white text-sm font-medium outline-none focus:border-accent focus:ring-2 focus:ring-accent/15"
                                        >
                                            {field.options.map((opt) => (
                                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            type="number"
                                            name={field.name}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                            placeholder={field.placeholder}
                                            step={field.step}
                                            className="w-full h-11 px-3 rounded-lg border border-line bg-white text-sm font-medium outline-none focus:border-accent focus:ring-2 focus:ring-accent/15"
                                        />
                                    )}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="sticky bottom-0 mt-6 pt-4 bg-card">
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 rounded-xl bg-ink text-white font-semibold hover:bg-ink-soft disabled:opacity-50 transition-colors"
                >
                    {loading ? 'Scoring…' : 'Run prediction'}
                </button>
            </div>
        </form>
    );
};

const Toggle = ({ on, onChange }) => (
    <div className="h-11 w-full rounded-full bg-slate-100 p-1 flex items-center">
        <button
            type="button"
            onClick={() => onChange(true)}
            className={`flex-1 h-full rounded-full text-sm font-medium transition-all ${
                on
                    ? 'bg-white text-ink border border-ink shadow-sm'
                    : 'text-slate-500 border border-transparent'
            }`}
        >
            Yes
        </button>
        <button
            type="button"
            onClick={() => onChange(false)}
            className={`flex-1 h-full rounded-full text-sm font-medium transition-all ${
                on
                    ? 'text-slate-500 border border-transparent'
                    : 'bg-white text-ink border border-ink shadow-sm'
            }`}
        >
            No
        </button>
    </div>
);

export default PredictionForm;
