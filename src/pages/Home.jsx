import Stepper from "../components/Stepper";
import FormWrapper from "../components/FormWrapper";
import Field from "../components/Filed";
import { useApp } from "../context/AppContext";
import { useEffect, useReducer, useRef, useState } from "react";
import { validate } from "../utils";

const Form = ({ children }) => {
  return <>{children}</>;
};

const Home = () => {
  const steps = [1, 2, 3];
  const { step, setStep, formData, dispatch } = useApp();

  function handleSubmit(step) {
    const value = validate(formData, 1);
    if (value?.message !== "success") {
      alert(value.message);
      return;
    }
    setStep((prev) => step || prev + 1);
  }
  const disabled = step === steps.length;
  return (
    <div className="mx-auto max-w-6xl rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h2 className="mb-3  text-2xl">Welcome to the home page!</h2>
      <div className="w-full">
        <Stepper steps={steps} onStep={step} handleNextStep={handleSubmit} />

        <FormWrapper>
          <Form>
            <Field
              label={"Email address"}
              type="email"
              placeholder="abc@gmail.com"
              required
              value={formData?.emailId}
              onChange={(e) => dispatch({ type: "emailId", payload: e.target.value })}
            />
            <Field
              label={"Password"}
              type="password"
              placeholder="********"
              required
              value={formData?.password}
              onChange={(e) => dispatch({ type: "password", payload: e.target.value })}
            />
          </Form>
          <Form>
            <Field
              label={"First Name"}
              type="text"
              placeholder="John"
              value={formData?.firstName}
              required
              onChange={(e) => dispatch({ type: "firstName", payload: e.target.value })}
            />
            <Field
              label={"Last Name"}
              type="text"
              placeholder="Doe"
              value={formData?.lastName}
              required
              onChange={(e) => dispatch({ type: "lastName", payload: e.target.value })}
            />
            <Field
              label={"Address"}
              type="text"
              placeholder="Address..."
              value={formData?.address}
              required
              onChange={(e) => dispatch({ type: "address", payload: e.target.value })}
            />
          </Form>
          <Form>
            <Field
              label={"Contry Code"}
              type="select"
              required
              value={formData?.countryCode}
              options={[
                { value: "IN", label: "India" },
                { value: "US", label: "USA" },
              ]}
              onChange={(e) => dispatch({ type: "countryCode", payload: e.target.value })}
            />
            <Field
              label={"Phone Number"}
              type="tel"
              placeholder="+919767..."
              value={formData?.phoneNumber}
              required
              onChange={(e) => dispatch({ type: "phoneNumber", payload: e.target.value })}
            />
            <Field label={"Accept Terms And Condition"} type="checkbox" required />
          </Form>
        </FormWrapper>

        <div className="mx-auto mt-10 max-w-xs">
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              onClick={() => {
                setStep((prev) => prev - 1);
              }}
              disabled={step === 1}
            >
              Back
            </button>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                console.log("called...");
                handleSubmit();
              }}
              disabled={disabled}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
