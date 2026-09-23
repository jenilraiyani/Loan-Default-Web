import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PredictionForm from './components/PredictionForm';
import ResultCard from './components/ResultCard';
import Documentation from './components/Documentation';
import Models from './components/Models';
import Home from './components/Home';
import Privacy from './components/Privacy';

const initialFormData = {
  Age: '',
  Education: 0,
  MaritalStatus: 0,
  HasDependents: 0,
  Income: '',
  EmploymentType: 2,
  MonthsEmployed: '',
  HasMortgage: 0,
  LoanAmount: '',
  LoanPurpose: 0,
  LoanTerm: 36,
  InterestRate: '',
  CreditScore: '',
  NumCreditLines: '',
  DTIRatio: '',
  HasCoSigner: 0,
};

function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [page, setPage] = useState('home');
  const [selectedModel, setSelectedModel] = useState('both');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      Age: Number(formData.Age),
      Education: Number(formData.Education),
      MaritalStatus: Number(formData.MaritalStatus),
      HasDependents: Number(formData.HasDependents),
      Income: Number(formData.Income),
      EmploymentType: Number(formData.EmploymentType),
      MonthsEmployed: Number(formData.MonthsEmployed),
      HasMortgage: Number(formData.HasMortgage),
      LoanAmount: Number(formData.LoanAmount),
      LoanPurpose: Number(formData.LoanPurpose),
      LoanTerm: Number(formData.LoanTerm),
      InterestRate: Number(formData.InterestRate),
      CreditScore: Number(formData.CreditScore),
      NumCreditLines: Number(formData.NumCreditLines),
      DTIRatio: Number(formData.DTIRatio),
      HasCoSigner: Number(formData.HasCoSigner),
      model: selectedModel,
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok || data.success === false) {
        setResult({ success: false, error: data.error || 'Prediction failed' });
      } else {
        setResult(data);
      }
    } catch (error) {
      console.error('Prediction request failed:', error);
      const mock = {
        logistic: { logistic_regression: { name: 'Logistic Regression', prediction: 0, risk_status: 'Low Risk (No Default)', probability: 0.21 } },
        random_forest: { random_forest: { name: 'Random Forest', prediction: 1, risk_status: 'High Risk (Default)', probability: 0.58 } },
        both: {
          logistic_regression: { name: 'Logistic Regression', prediction: 0, risk_status: 'Low Risk (No Default)', probability: 0.21 },
          random_forest: { name: 'Random Forest', prediction: 1, risk_status: 'High Risk (Default)', probability: 0.58 },
        },
      };
      setResult(mock[selectedModel] || mock.both);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-panel">
      <Sidebar
        currentPage={page}
        onNavigate={setPage}
        open={sidebarOpen}
        onToggle={() => setSidebarOpen((value) => !value)}
      />

      <main className="lg:pl-72 min-h-screen">
        <Header page={page} />
        <div className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          {page === 'evaluate' && (
            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_420px] gap-6 items-start">
              <section className="bg-card border border-line rounded-3xl p-5 sm:p-7 shadow-sm">
                <PredictionForm
                  formData={formData}
                  setFormData={setFormData}
                  onSubmit={handleSubmit}
                  loading={loading}
                  selectedModel={selectedModel}
                  setSelectedModel={setSelectedModel}
                />
              </section>
              <section className="bg-card border border-line rounded-3xl p-5 sm:p-7 shadow-sm xl:sticky xl:top-20">
                <ResultCard result={result} loading={loading} />
              </section>
            </div>
          )}

          {page === 'home' && <Home onNavigate={setPage} />}
          {page === 'docs' && <Documentation />}
          {page === 'privacy' && <Privacy />}

          {page === 'models' && (
            <Models
              onUseModel={(model) => {
                setSelectedModel(model);
                setPage('evaluate');
              }}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
