import React from 'react';
import Select, { ActionMeta, OptionsOrGroups, PropsValue, SingleValue } from 'react-select';

const styles = {
  option: (provided: any, state: any) => ({
    ...provided,
    padding: 15,
    backgroundColor: state.isSelected ? '' : '',
    color: state.isSelected ? '#1a56db' : '',
    fontWeight: state.isSelected ? 700 : '',
    cursor: 'pointer',
    '&:hover': {
      color: '#1a56db',
    },
  }),
  control: (base: any) => ({
    ...base,
    border: 'none',
    borderRadius: 0,
    borderBottom: '3px solid #1a56db',
    width: 300,
    boxShadow: 'none',
    '&:hover': {
      borderBottom: '3px solid #1a56db',
    },
  }),
  dropdownIndicator: () => ({
    color: '#1a56db',
    padding: '.5rem',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

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
        styles={styles}
        options={options}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default SelectField;
