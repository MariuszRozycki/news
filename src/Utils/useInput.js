import React, { useState } from "react";

function useInput(initialValue = '') {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return [value, handleChange];
}

export default useInput;