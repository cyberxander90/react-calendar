import React, { useState } from 'react';
import TextInput from './text-input';

export default {
  title: TextInput.name
};

export const TextInputWithName = () => {
  const [value, setValue] = useState('hello');

  return (
    <div style={{ width: 200 }}>
      <TextInput
        label="My Label"
        name="city"
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </div>
  );
};
