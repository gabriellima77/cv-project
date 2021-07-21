import React, { useState, useEffect } from 'react';
import Input from './Input';

const FormXp = (props)=> {
  const [state, setState] = useState({});
  const {xp, changeValue, keyValue, removeXp} = props;

  useEffect(()=> {
    setState({...xp});
  }, [xp]);

  const changeState = (value, stateName)=> {
    const newObj = {...state};
    newObj[stateName] = value;

    setState(newObj);
    changeValue(newObj);
  }

  return(
    <div key={keyValue} className="content">
      <form className="xp-box">
        <Input
          title="Role"
          type="text"
          prop="role"
          changeValue={changeState}
          value={state.role}
        />
        <Input
          title="Company"
          type="text"
          prop="company"
          changeValue={changeState}
          value={state.company}
        />
        <Input
          title="City"
          type="text"
          prop="city"
          changeValue={changeState}
          value={state.city}
        />
        <Input
          title="From"
          type="text"
          prop="from"
          changeValue={changeState}
          value={state.from}
        />
        <Input
          title="To"
          type="text"
          prop="to"
          changeValue={changeState}
          value={state.to}
        />
      </form>
      <button
        onClick={()=> {removeXp(keyValue)}}
        className="large-btn m-vertical"
      >
        Delete
      </button>
    </div>
  );
}

export default FormXp;
