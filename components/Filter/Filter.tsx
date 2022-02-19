import React from 'react'

import { Formik } from 'formik'
import Select from 'react-select'

const options = [
  { value: 'harju', label: 'Harju' },
  { value: 'hiiu', label: 'Hiiu' },
  { value: 'ida-viru', label: 'Ida-viru' },
  { value: 'jõgeva', label: 'Jõgeva' },
  { value: 'järva', label: 'Järva' },
  { value: 'lääne', label: 'Lääne' },
  { value: 'lääne-viru', label: 'Lääne-viru' },
  { value: 'põlva', label: 'Põlva' },
  { value: 'pärnu', label: 'Pärnu' },
  { value: 'rapla', label: 'Rapla' },
  { value: 'saare', label: 'Saare' },
  { value: 'tartu', label: 'Tartu' },
  { value: 'viljandi', label: 'Viljandi' },
  { value: 'võru', label: 'Võru' },
  { value: 'valga', label: 'Valga' },
]

const customStyles = {
  option: (provided, state) => ({
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
  control: (base) => ({
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
}

const Filter = () => {
  return (
    <div className="flex h-[5rem] items-center rounded-lg px-[9rem] shadow-xl">
      <label className="mr-4 text-gray-500">Maakond</label>
      <Select styles={customStyles} options={options} />
    </div>
  )
}

export default Filter
