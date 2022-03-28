import React from 'react';
import Select from 'react-select';

import { selectFieldStyle } from '@/shared/customStyles';
import { counties } from '@/shared/helpers';

const Filter = () => {
  return (
    <div className="flex h-[5rem] items-center rounded-lg px-[9rem] shadow-xl">
      <label className="mr-4 text-gray-500">Maakond:</label>
      <Select
        styles={selectFieldStyle}
        options={counties}
        placeholder="vali"
        onChange={(e) => console.log(e)}
      />
    </div>
  );
};

export default Filter;
