import React from 'react';

interface RemoveButtonProps {
  onClick: () => void;
  className?: string;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({ onClick, className = '' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-red-500 hover:text-red-700 font-bold text-sm ${className}`}
    >
      x
    </button>
  );
};

export default RemoveButton;