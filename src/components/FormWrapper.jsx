import React from "react";
import { useApp } from "../context/AppContext";

const FormWrapper = ({ children }) => {
  // React.Children helps to iterate over the array of children more efficiently adds 'key' attribute if not present.
  const childrenArray = React.Children.toArray(children);
  const { step } = useApp();
  return (
    <div className="mx-auto h-[300px] max-w-xl rounded-md bg-slate-100 sm:px-2 md:border md:px-6 lg:px-12">
      <div className="flex min-h-full flex-col justify-start pt-8">
        <form action="">{childrenArray[step - 1]}</form>
      </div>
    </div>
  );
};

export default FormWrapper;
