const sections = [
    {
        id: 'contact',
        title: 'Contact',
        body: [
            'After reviewing this policy, if you have questions about how LoanML handles data in this demo, speak with the project owner on the same machine or course team.',
            'This is a local semester project. There is no customer-support inbox and no account login.',
        ],
    },
    {
        id: 'collecting',
        title: 'Collecting personal information',
        body: [
            'When you use the Prediction desk, the values you type (age, income, loan amount, credit fields, and similar) are sent only to the local API at http://127.0.0.1:5000/predict so a model can return a score.',
            'LoanML does not create user accounts and does not save form submissions to a database.',
        ],
        bullets: [
            'Device information: your browser keeps page state until you refresh.',
            'Purpose: run a local default-risk score, not advertising.',
            'Source: only what you type in the form, plus the public Loan_default.csv used for training.',
        ],
    },
    {
        id: 'sharing',
        title: 'Sharing personal information',
        body: [
            'This demo does not share form values with advertisers, analytics vendors, or cloud accounts unless you yourself deploy the app elsewhere.',
            'If you run the frontend and backend on your own computer, the request stays on localhost.',
        ],
    },
    {
        id: 'using',
        title: 'Using personal information',
        body: [
            'Typed values are used only to build one prediction request. They are not used to build a marketing profile or to sell a product.',
            'Training used the public Loan_default.csv file. That file is separate from anything you enter in the browser.',
        ],
    },
    {
        id: 'rights',
        title: 'Your rights',
        body: [
            'Because this project does not store submissions, there is no retained profile to download or delete after you close the page.',
            'Clear the form or refresh the browser if you do not want values left on screen.',
        ],
    },
    {
        id: 'cookies',
        title: 'Cookies',
        body: [
            'This frontend does not set advertising cookies, pixels, or third-party trackers.',
            'Only normal browser session state is used to keep the current page and form values.',
        ],
    },
    {
        id: 'models',
        title: 'Model files',
        body: [
            'logistic_model.pkl, rf_model.pkl, scaler.pkl, and label_encoder.pkl stay on the computer that runs the backend.',
            'Those files hold trained weights. They do not store your live form inputs.',
        ],
    },
    {
        id: 'accuracy',
        title: 'Accuracy and fairness',
        body: [
            'Scores can be wrong. Test accuracy is about 88.6%. A High Risk or Low Risk label is not a legal credit decision.',
            'Do not use this desk to approve or reject a real loan.',
        ],
    },
    {
        id: 'changes',
        title: 'Changes',
        body: [
            'This policy can be updated as the project changes. The date below the title shows the latest edit.',
        ],
    },
    {
        id: 'complaints',
        title: 'Complaints',
        body: [
            'For coursework concerns, contact your project supervisor. This page is not a bank or licensed credit service.',
        ],
    },
];

const Privacy = () => {
    return (
        <div className="w-full bg-transparent">
            <div className="text-center max-w-3xl mx-auto pt-6 pb-14">
                <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">Privacy policy</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] gap-10 lg:gap-16">
                <nav className="lg:sticky lg:top-20 self-start">
                    <ol className="space-y-0">
                        {sections.map((section, index) => (
                            <li key={section.id} className="border-b border-line">
                                <a
                                    href={`#${section.id}`}
                                    className="block py-3 text-sm text-muted hover:text-ink"
                                >
                                    {index + 1}. {section.title}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>

                <div className="max-w-3xl space-y-12 pb-10">
                    {sections.map((section, index) => (
                        <section key={section.id} id={section.id}>
                            <h3 className="text-2xl font-semibold tracking-tight">
                                {index + 1}. {section.title}
                            </h3>
                            {section.body.map((paragraph) => (
                                <p key={paragraph} className="text-[15px] text-slate-600 leading-7 mt-4">
                                    {paragraph}
                                </p>
                            ))}
                            {section.bullets && (
                                <ul className="mt-4 space-y-2 text-[15px] text-slate-600 leading-7">
                                    {section.bullets.map((item) => (
                                        <li key={item}>- {item}</li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Privacy;
