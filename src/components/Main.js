import React from 'react';
import GeneralInfo from './GeneralInfo';
import '../styles/mainStyles.css';
import Experience from './Experience';
import Education from './Education';

const Main = (props)=> {
  const { data, events, education, xp, educationEvents, xpEvents } = props;
  const { addEducation, changeEducation, removeEducation } = educationEvents;
  const { addXp, changeXp, removeXp } = xpEvents;

  return(
    <main className="main">
      <GeneralInfo data={data} events={events}/>
      <Education
        education={education}
        addEducation={addEducation}
        changeEducation={changeEducation}
        removeEducation={removeEducation}
      />
      <Experience
        xp={xp}
        addXp={addXp}
        changeXp={changeXp}
        removeXp={removeXp}
      />
    </main>
  );
}

export default Main;
