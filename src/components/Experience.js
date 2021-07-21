import React from 'react';
import FormXp from './mainComponents/FormXp';

const Experience = ({xp, addXp, changeXp, removeXp})=> {
  
  return (
    <section className="xp">
      <h2>Experience</h2>
      {xp.map((exp)=> (
        <FormXp
        key={exp.id}
        keyValue={exp.id}
        changeValue={changeXp}
        removeXp={removeXp}
        xp={exp}
      />))
    }
      <button onClick={addXp} className="large-btn">
        Add
      </button>
    </section>
  );
}

export default Experience;