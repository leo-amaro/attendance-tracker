import React, { useState } from 'react';

const Input = ({ label, id, type, value, onChange }) => {
  return (
    <div className='input__container'>
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
