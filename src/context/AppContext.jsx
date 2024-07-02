import { createContext, useContext, useMemo, useReducer, useRef, useState } from "react";
import { validate } from "../utils";
const AppContext = createContext(null);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "emailId":
      return { ...state, emailId: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "firstName":
      return { ...state, firstName: action.payload };
    case "lastName":
      return { ...state, lastName: action.payload };
    case "address":
      return { ...state, address: action.payload };
    case "countryCode":
      return { ...state, countryCode: action.payload };
    case "phoneNumber":
      return { ...state, phoneNumber: action.payload };
    case "acceptTermsAndCondition":
      return { ...state, acceptTermsAndCondition: action.payload };
    default:
      return state;
  }
}
const schema = {
  emailId: "",
  password: "",
  firstName: "",
  lastName: "",
  address: "",
  countryCode: "",
  phoneNumber: "",
  acceptTermsAndCondition: false,
};
const AppProvider = ({ children }) => {
  const initialValue = JSON.parse(localStorage.getItem("user")) || schema;
  const [formData, dispatch] = useReducer(reducer, initialValue);
  const [step, setStep] = useState(1);

  return (
    <AppContext.Provider value={{ step, setStep, formData, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("Auth context error");
  }
  return context;
};

export { useApp, AppProvider };
