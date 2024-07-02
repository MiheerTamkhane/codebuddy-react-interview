export const validate = (formData, step = 1) => {
  console.log({ formData });
  switch (step) {
    case 1: {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex =
        /^(?=(?:[^A-Z]*[A-Z]){2})(?=(?:[^a-z]*[a-z]){2})(?=(?:[^0-9]*[0-9]){2})(?=(?:[^!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\-]*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\-]){2})/;

      if (!formData?.emailId || !emailRegex.test(formData?.emailId)) {
        return {
          message: "Please enter a valid email address.",
        };
      }

      if (!formData?.password || !passwordRegex.test(formData?.password)) {
        return {
          message:
            "Password must contain at least 2 uppercase letters, 2 lowercase letters, 2 numbers, and 2 special characters.",
        };
      }
    }
    default:
      return {
        message: "success",
      };
  }
};
