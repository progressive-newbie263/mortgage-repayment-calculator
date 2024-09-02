import React from "react";
import Empty from "./svg-component/Empty.jsx";

function Result({ monthlyPayment, totalPayment, isCalculated }) {
  return (
    <div className="bg-[hsl(200,44%,25%)] flex flex-col text-white 
     w-full rounded-2xl lg:w-[450px]">
      {isCalculated ? ( 
        //precalcuted (default image)
        <div className="p-6">
          <span className="text-2xl font-bold">
            Your results
          </span>

          <p className="text-gray-200 my-4">
            Your results are shown below based on the information you 
            provided. To adjust the results, edit the form and click 
            "calculate repayments" again.
          </p>

          <div className="flex bg-[#CCCE3B] w-full h-[196px] rounded-xl">
            <div className="flex bg-[hsl(202,55%,16%)] w-full mt-1 
              h-[192px] rounded-xl flex-col px-3 py-4
            ">
              {/* monthly pay */}
              <label htmlFor="monthly-repayments" className="text-gray-200">
                Your monthly repayments
              </label>
              <span id="monthly-pay" className="text-[40px] mb-1 text-[#CCCE3B]">
                <b>&#163;{monthlyPayment}</b>
              </span>

              <div className="h-[1px] bg-white"></div>

              {/* total pay */}
              <label htmlFor="total-pay" className="text-gray-200 mb-1 mt-2">
                Total you'll repay over the term
              </label>
              <span id="total-pay" className="text-2xl">
                <b>&#163;{totalPayment}</b>
              </span>
            </div>
          </div>
        </div>
      ) : (
        //calculated (return numbers)
        <div className="text-center items-center p-8">
          <div className="mx-14 my-[14px]">
            <Empty />
          </div>

          <span className="text-2xl font-bold">
            Results shown here
          </span>
          
          <p className="mt-4">
            Complete the form and click "calculate repayments" to see
            what your monthly repayments would be
          </p>
        </div>
      )}
    </div>
  );
}

export default Result;
