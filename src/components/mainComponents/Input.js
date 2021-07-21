import React from 'react';

const Input = (props)=> {
  const {
    title, type, prop, value, changeValue
  } = props;

  return (
    <div className="input">
      <label>{title}</label>
      <input
        onChange={(e)=> changeValue(e.target.value, prop)}
        type={type}
        placeholder={title}
        value={value || ''}
      />
    </div>
  );
}

export default Input;
