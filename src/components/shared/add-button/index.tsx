import React from 'react';

interface AddButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
}

const AddButton: React.FC<AddButtonProps> = ({ onClick, text, className = '' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-4 ${className}`}
    >
      {text}
    </button>
  );
};

export default AddButton;