export const selectFieldStyle = {
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

export const spinnerStyle = {
  margin: '0 auto',
};
