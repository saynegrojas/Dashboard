import React, { useState } from 'react';
import { FormControl, Select, MenuItem, Box, Typography } from '@mui/material';

const ToggleComponent = ({ isDefault, defaultContent, options }) => {
  const [selectedValue, setSelectedValue] = useState(isDefault ? '' : options[0]?.value);

  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Update the selected value
  };

  // Find the content based on the selected value
  const selectedContent = options.find((option) => option.value === selectedValue)?.content;

  return (
    <Box>
      <FormControl fullWidth variant='outlined' sx={{ mb: 2 }}>
        <Select value={selectedValue} onChange={handleChange}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {
        isDefault
          ? defaultContent // Show default content if isDefault is true
          : selectedContent // Show content based on the selected option
      }
    </Box>
  );
};

export default ToggleComponent;
