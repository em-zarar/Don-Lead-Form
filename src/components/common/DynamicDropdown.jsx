import React ,{ useState } from 'react'
import { Dropdown } from "primereact/dropdown";
import { Controller } from "react-hook-form";

function DynamicDropdown({ name, options, control, placeholder, required }) {

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
          options={options}
          onChange={(e) => field.onChange(e.value)}
          optionLabel="name"
          placeholder={placeholder}
          onClick={() => handleClick(name)}
          className={`input-style text-gray-400 ${
            activeIndex === name ? "active" : ""
          }`}
        />
      )}
    />
  )
}

export default DynamicDropdown
