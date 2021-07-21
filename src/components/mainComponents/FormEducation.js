import React, { useState, useEffect } from 'react';
import Input from './Input';

const FormEducation = (props)=> {
  const [state, setState] = useState({});
  const {
    educ, changeValue,
    keyValue, removeEducation
  } = props;

  useEffect(()=> {
    setState({...educ});
  }, [educ]);


  const changeState = (value, stateName)=> {
    const newObj = {...state};

    newObj[stateName] = value;

    setState(newObj);
    changeValue(newObj);
  }

  return (
    <div key={keyValue} className="content">
      <form className="xp-box">
        <Input
          title="School Name"
          type="text"
          prop="school"
          changeValue={changeState}
          value={state.school}
        />
        <Input
          title="Title of Study"
          type="text"
          prop="study"
          changeValue={changeState}
          value={state.study}
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
        onClick={()=> {removeEducation(keyValue)}}
        className="large-btn m-vertical"
      >
        Delete
      </button>
    </div>
  );
}

export default FormEducation;