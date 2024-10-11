import React, {useState} from 'react';
import { Controller } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';

const DynamicDropdown = ({ name, options, control, placeholder, required }) => {

  const mappedOptions = options.map(option => ({
    label: option.label,
    value: option.value,
  }));

  const [activeIndex, setActiveIndex] = useState();

  const handleClick = (name) => {
    setActiveIndex(name);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field }) => (
        <Dropdown
          {...field}
          options={mappedOptions} 
          onChange={(e) => field.onChange(e.value)} 
          value={field.value} 
          placeholder={placeholder}
          onClick={() => handleClick(name)}
          className={`input-style !w-full p-[0.67rem] pl-8 text-gray-400 ${
            activeIndex === name ? "active" : ""
          }`}
        />
      )}
    />
  );
};

export default DynamicDropdown;
