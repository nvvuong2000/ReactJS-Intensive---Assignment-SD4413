import React from 'react';

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const FormSection: React.FC<FormSectionProps> = ({ title, children, className = '' }) => {
  return (
    <fieldset className={`border border-gray-300 rounded-md p-4 ${className}`}>
      <legend className="text-lg font-semibold text-gray-700 px-2">{title}</legend>
      <div className="panel">
        {children}
      </div>
    </fieldset>
  );
};

export default FormSection;