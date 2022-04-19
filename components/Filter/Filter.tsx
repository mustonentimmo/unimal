import React from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';

import { selectFieldStyle } from '@/shared/customStyles';
import { counties } from '@/shared/helpers';

import { setLocationFilter } from '../../features/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex h-[5rem] items-center rounded-lg px-[4rem] shadow-xl">
      <label className="mr-4 text-gray-500">Maakond:</label>
      <Select
        defaultValue={{ label: 'Kõik', value: 'Kõik' }}
        styles={selectFieldStyle}
        options={counties}
        placeholder="vali"
        onChange={(location) => dispatch(setLocationFilter(location))}
      />
    </div>
  );
};

export default Filter;
