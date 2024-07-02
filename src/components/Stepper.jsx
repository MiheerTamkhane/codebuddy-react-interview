import React, { useState } from "react";
import { useApp } from "../context/AppContext";
// should not able to jumb directly on 3rd form.
const Step = ({ step, onStep, handleNextStep }) => {
  const bgColor = onStep >= step ? "bg-orange-600" : "bg-slate-300";
  return (
    <li className={`group shrink basis-0  ${step !== 1 ? "flex-1" : ""}`}>
      <div className="min-w-7 min-h-7 inline-flex w-full items-center align-middle text-xs">
        <div className={`mx-2 h-px w-full flex-1 group-first:hidden ${bgColor}`}></div>
        <span
          className={`size-7  flex flex-shrink-0 cursor-pointer items-center justify-center rounded-full px-3 py-2 font-medium text-gray-800 dark:text-white ${bgColor}`}
          onClick={() => handleNextStep(step)}
        >
          {step}
        </span>
      </div>
      <div className="mt-3">
        <span className="block text-sm font-medium text-gray-800 dark:text-white">Step</span>
      </div>
    </li>
  );
};

const Stepper = ({ steps, onStep, handleNextStep }) => {
  //   const onStep = 0;
  return (
    <div>
      <ul className="relative flex flex-row">
        {steps.map((step) => (
          <Step key={step} step={step} onStep={onStep} handleNextStep={handleNextStep} />
        ))}
      </ul>
    </div>
  );
};

export default Stepper;
