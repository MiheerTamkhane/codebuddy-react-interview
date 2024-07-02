import React from "react";
import { useApp } from "../context/AppContext";

const FormWrapper = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  const { step } = useApp();
  return (
    <div className="mx-auto h-[300px] max-w-xl rounded-md bg-slate-100 sm:px-2 md:border md:px-6 lg:px-12">
      <div className="flex min-h-full flex-col justify-center">
        <form action="">{childrenArray[step - 1]}</form>
      </div>
    </div>
  );
};

export default FormWrapper;
