import React from "react";

function Form() {
  
  return (
    <form className="flex flex-col px-6 py-8 text-slate-500">
      <span className="text-2xl font-bold text-slate-700">
        Mortgage Calculator
      </span>
      
      <button className="w-fit underline mt-1 mb-4">Clear All</button>

      {/* amount label */}
      <label for="amount">Mortgage Amount</label>
      <div className="inline-block relative">
        <span className="absolute my-[1px] mx-[1px] py-[7px] 
        px-4 rounded bg-sky-100">
            <b>&#163;</b>
        </span>

        <input className="border border-slate-500 w-full rounded h-10" 
          type="number" name="amount" />
      </div>


      {/* flex col for phone, flex-row for large screen */}
      <div className="flex flex-col">
        {/* mortgage term */}
        <label for="amount">Mortgage Amount</label>
        <div className="inline-block relative">
          <span className="absolute my-[1px] mx-[1px] py-[7px] 
          px-4 rounded bg-sky-100">
              <b>&#163;</b>
          </span>

          <input className="border border-slate-500 w-full rounded h-10" 
            type="number" name="amount" />
        </div>

        {/* interest rate label*/}
        <label for="amount">Mortgage Amount</label>
        <div className="inline-block relative">
          <span className="absolute my-[1px] mx-[1px] py-[7px] 
          px-4 rounded bg-sky-100">
              <b>&#163;</b>
          </span>

          <input className="border border-slate-500 w-full rounded h-10" 
            type="number" name="amount" />
        </div>
      </div>
    </form>
  );
}

export default Form;