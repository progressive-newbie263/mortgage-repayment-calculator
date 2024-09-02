import { useState } from 'react';
import './styles/App.css';
import Footer from './component/Footer.jsx';
import Result from './component/Result.jsx';
import Form from './component/Form.jsx';


function App() {
  const [mortgageType, setMortgageType] = useState('');
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState('');
  const [rate, setRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [totalPayment, setTotalPayment] = useState("");
  const [isCalculated, setIsCalculated] = useState(false); //for toggling 

  const calculateRepayments = () => {
    const principal = parseFloat(amount);
    const years = parseInt(term);
    const interestRate = parseFloat(rate) / 100;
    const monthlyRate = interestRate / 12;

    let monthlyRepayment = 0;
    let totalRepayment = 0;

    if (mortgageType === 'Repayment') {
      // Repayment mortgage calculation
      monthlyRepayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -years * 12));
      totalRepayment = monthlyRepayment * years * 12;
    } else if (mortgageType === 'Interest Only') {
      // Interest-only mortgage calculation
      monthlyRepayment = principal * monthlyRate;
      totalRepayment = (monthlyRepayment * years * 12) + principal;
    }

    setMonthlyPayment(monthlyRepayment.toFixed(2));
    setTotalPayment(totalRepayment.toFixed(2));
    setIsCalculated(true); 
  };

  return (
    <>
      {/* i will select media screen for laptop is lg/1024px */}
      <div className='flex flex-col justify-center h-fit w-96 
      bg-white rounded-2xl my-10
      lg:flex-row lg:w-[900px]
      '>
        <Form
          mortgageType={mortgageType}
          setMortgageType={setMortgageType}
          amount={amount}
          setAmount={setAmount}
          term={term}
          setTerm={setTerm}
          rate={rate}
          setRate={setRate}
          calculateRepayments={calculateRepayments}
        />
        
        <Result
          monthlyPayment={monthlyPayment}
          totalPayment={totalPayment}
          isCalculated={isCalculated}
        />
      </div>

      <Footer />
    </>
    
  );
}

export default App;

