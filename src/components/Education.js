import React from 'react';
import FormEducation from './mainComponents/FormEducation';

const Education = (props)=> {
  const {
    education, addEducation,
    changeEducation, removeEducation
  } = props;

  return (
    <section className="xp">
      <h2>Education</h2>
      {education.map((educ)=> (
        <FormEducation 
          key={educ.id}
          keyValue={educ.id}
          changeValue={changeEducation}
          removeEducation={removeEducation}
          educ={educ}
        />))
      }
      <button onClick={addEducation} className="large-btn" >Add</button>
    </section>
  );
}

export default Education;
