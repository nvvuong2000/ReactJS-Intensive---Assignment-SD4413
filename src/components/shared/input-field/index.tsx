import React from 'react';

interface InputFieldProps {
  label: string;
  id: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
  readOnly?: boolean;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = 'text',
  error,
  readOnly = false,
  className = ''
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`shadow-sm bg-gray-50 border ${error ? 'border-red-500' : 'border-gray-300'} text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${readOnly ? 'bg-gray-100 cursor-not-allowed opacity-60' : ''}`}
        placeholder={placeholder}
        readOnly={readOnly}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default InputField;