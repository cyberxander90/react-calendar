import React, { useState } from 'react';
import TextInput from './text-input';

export default {
  title: TextInput.name
};

export const TextInputWithName = () => {
  const [value, setValue] = useState('hello');

  return (
    <TextInput
      value={value}
      onChange={({ target }) => setValue(target.value)}
    />
  );
};
