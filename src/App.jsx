import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PredictionForm from './components/PredictionForm';
import ResultCard from './components/ResultCard';

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
  const [result, setResult] = useState(null);        // null | { prediction: 0 | 1 }
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Build the payload — ensure numeric types
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
    };

    try {
      const response = await fetch('https://loan-default-model.onrender.com/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      setResult(data);
      setShowResult(true);
    } catch (error) {
      console.error('Prediction request failed:', error);
      // Fallback mock result for demo (remove when backend is connected)
      setResult({ prediction: Math.random() > 0.5 ? 1 : 0 });
      setShowResult(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setShowResult(false);
    setFormData(initialFormData);
  };

  return (
    <div className="min-h-screen bg-canvas selection:bg-brand-500 selection:text-white">
      <Navbar />
      <Hero />

      <main className="relative -mt-10 z-20">

        {showResult ? (
          <ResultCard
            prediction={result?.prediction}
            onReset={handleReset}
          />
        ) : (
          <PredictionForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            loading={loading}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-sm text-slate-400">
            &copy; 2026 LoanML &mdash; AI-powered loan risk assessment. Built with React &amp; Machine Learning.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
