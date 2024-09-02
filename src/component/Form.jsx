import React, {useState} from "react";
import Calculator from "./svg-component/Calculator.jsx";
//import Select from "react-select"; //lib for mortgage type selection

function Form() {
  const [mortgageType, setMortgageType] = useState('');

  const handleChange = (e) => {
    setMortgageType(e.target.value);
  };
  
  return (
    <form className="flex flex-col px-6 py-8 text-slate-500">
      <span className="text-2xl font-bold text-slate-700">
        Mortgage Calculator
      </span>
      
      <button className="w-fit underline mt-1 mb-4
        hover:text-slate-900
      ">
        Clear All
      </button>

      {/* amount label */}
      <label htmlFor="amount">Mortgage Amount</label>
      <div className="inline-block relative mt-2 mb-4">
        <span className="absolute my-[1px] mx-[1px] py-[7px] 
        px-4 rounded bg-sky-100 ">
            <b>&#163;</b>
        </span>

        <input className="border border-slate-500 w-full rounded h-10 
          hover:border-slate-900 cursor-pointer pl-12 font-bold text-slate-700" 
          type="number" id="amount" />
      </div>


      {/* flex col for phone, flex-row for large screen */}
      <div className="flex flex-col">
        {/* mortgage term */}
        <label htmlFor="term">Mortgage Amount</label>
        <div className="inline-block relative mt-2 mb-4">
          <span className="absolute right-0 my-[1px] mx-[1px] py-[7px] 
          px-4 rounded bg-sky-100">
              <b>years</b>
          </span>

          <input className="border border-slate-500 w-full rounded h-10 
            hover:border-slate-900 cursor-pointer pl-4 font-bold text-slate-700" 
            type="number" id="term" />
        </div>

        {/* interest rate label*/}
        <label htmlFor="rate">Interest Rate</label>
        <div className="inline-block relative mt-2 mb-4">
          <span className="absolute right-0 my-[1px] mx-[1px] py-[7px] 
          px-4 rounded bg-sky-100">
              <b>%</b>
          </span>

          <input className="border border-slate-500 w-full rounded h-10 
            hover:border-slate-900 cursor-pointer pl-4 font-bold text-slate-700" 
            type="number" id="rate" />
        </div>
      </div>

      {/*  */}
      <div>
        <label>Mortgage Type</label>
        <div>
          <label className="block border border-solid p-2 rounded
        border-slate-500 hover:border-[#CCCE3B] mt-2 cursor-pointer">
            <input type="radio" value="Repayment" checked={mortgageType === 'Repayment'}
              onChange={handleChange} className="mr-2"
            />
            <span className="font-bold text-slate-700">Repayment</span>
          </label>

          <label className="block border border-solid p-2 rounded
        hover:border-[#CCCE3B] border-slate-500 mt-2 cursor-pointer">
            <input type="radio" value="Interest Only" checked={mortgageType === 'Interest Only'}
              onChange={handleChange} className="mr-2"
            />
            <span className="font-bold text-slate-700">Interest Only</span>
          </label>
        </div>
      </div>

      {/* custom lime didn't work, so i will use a converted hex color of it here (CCCE3B) */}
      <button className="flex bg-[#CCCE3B] hover:bg-lime-200 justify-center rounded-full py-2 mt-6"
        
      >
        <span className="mr-4"><Calculator/></span>
        Calculate Repayments
      </button>
    </form>
  );
}

export default Form;