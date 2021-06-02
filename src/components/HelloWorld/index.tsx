import React, { useState } from 'react';
import { Input } from './style';

const HelloWorld: React.FC = () => {

  const [inputValue, setInputValue] = useState("");

  const handleValue = ( e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  }

  return (
    <div>
        <Input type="text" name="name" onChange={handleValue} value={inputValue} autoComplete="off" />
        <h2>{inputValue}</h2>
    </div>
  )
}

export default HelloWorld;