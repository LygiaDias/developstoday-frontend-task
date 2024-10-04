// components/SelectInput.tsx
import React from 'react';

interface SelectInputProps {
  label?: string;
  id?: string;
  value: string;
  options: Array<{ value: string | number; label: string }>; 
  onChange: (value: string) => void;
  placeholder?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({ label, id, value, options, onChange, placeholder }) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-sm font-semibold text-gray-700">
          {label}:
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-md p-2 text-black h-7 focus:outline-none focus:ring-2 focus:ring-blue-500"

      >
        <option value="" className="text-black">
          {placeholder || 'Select an option'}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
