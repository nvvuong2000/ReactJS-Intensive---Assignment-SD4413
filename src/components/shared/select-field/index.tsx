import React from 'react';

interface SelectOption {
  value: string | number | boolean;
  label: string;
}

interface SelectFieldProps {
  label: string;
  id: string;
  value: string | number | boolean;
  onChange: (value: string | boolean) => void;
  options: SelectOption[];
  error?: string;
  readOnly?: boolean;
  className?: string;
  placeholder?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  id,
  value,
  onChange,
  options,
  error,
  readOnly = false,
  className = '',
  placeholder
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    if (typeof value === 'boolean') {
      onChange(selectedValue === 'true');
    } else {
      onChange(selectedValue);
    }
  };

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <select
        id={id}
        value={value.toString()}
        onChange={handleChange}
        className={`w-full px-4 py-2 mt-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${readOnly ? 'bg-gray-100 cursor-not-allowed opacity-60' : ''}`}
        disabled={readOnly}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option.value.toString()}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default SelectField;