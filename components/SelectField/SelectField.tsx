import React from 'react';
import Select, { ActionMeta, OptionsOrGroups, PropsValue, SingleValue } from 'react-select';

import { selectFieldStyle } from '@/shared/customStyles';

interface SelectFieldProps {
  label: string;
  defaultValue: PropsValue<any>;
  placeholder: string;
  options: OptionsOrGroups<string, any> | undefined;
  // eslint-disable-next-line no-unused-vars
  onChange: (newValue: SingleValue<string>, actionMeta: ActionMeta<string>) => void;
}

const SelectField = ({ label, defaultValue, options, placeholder, onChange }: SelectFieldProps) => {
  return (
    <div className="flex h-[5rem] items-center rounded-lg px-[4rem] shadow-xl">
      <label className="mr-4 text-gray-500">{label}</label>
      <Select
        defaultValue={defaultValue}
        styles={selectFieldStyle}
        options={options}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default SelectField;
