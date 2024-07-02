const Field = ({ type, label, name, value, onChange, options, placeholder, required, checked }) => {
  const renderField = () => {
    switch (type) {
      case "text":
      case "password":
      case "email":
      case "tel":
        return (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        );
      case "select":
        return (
          <select
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value} className="p-2">
                {option.label}
              </option>
            ))}
          </select>
        );
      case "checkbox":
        return (
          <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={onChange}
            required={required}
            className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label} {required ? <span className="text-red-700">*</span> : null}
        </label>
      )}
      {renderField()}
    </div>
  );
};

export default Field;
