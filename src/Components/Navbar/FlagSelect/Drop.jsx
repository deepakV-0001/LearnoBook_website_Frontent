import React, { useState } from 'react';
import '../FlagSelect/Drop.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import img from '../flag-img.png'

const animatedComponents = makeAnimated();

const Drop = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      value: '',
      label: '',
      image: img,
    },
    {
      value: '',
      label: '',
      image: img,
    },
    {
      value: '',
      label: '',
      image: img,
    },
  ];

  const customStyles = {
    control: (base) => ({
      ...base,
      minHeight: '30px',
    }),
    option: (styles) => ({
      ...styles,
      display: 'flex',
      alignItems: 'center',
    }),
    singleValue: (styles) => ({
      ...styles,
      display: 'flex',
      alignItems: 'center',
    }),
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className='main-cont'>
      <label htmlFor="imageSelect"></label>
      <Select
        id="imageSelect"
        options={options}
        components={animatedComponents}
        styles={customStyles}
        value={selectedOption}
        onChange={handleSelectChange}
        isClearable
        getOptionLabel={(option) => (
          <div>
            <img
              src={option.image}
              alt=''
              style={{ width: '30px', marginRight: '10px' }}
            />
            {option.label}
          </div>
        )}
        getOptionValue={(option) => option.value}
      />

      {selectedOption && (
        <p>{selectedOption.label}</p>
      )}
    </div>
  );
};

export default Drop;
