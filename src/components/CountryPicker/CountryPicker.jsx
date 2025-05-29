import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@mui/material';
import styles from './CountryPicker.module.css';

import { countries } from '../../api';

function CountryPicker({handleCountryChange}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await countries(); 
      setData(result);
    };
    fetchApi();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {data.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;
