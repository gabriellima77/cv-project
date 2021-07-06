import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import '../styles/mainStyles.css';
import Experience from './Experience';
import Education from './Education';

export default class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      xp: [],
      education: [],
    }
  }

  render() {
    const { data, events, education, xp, educationEvents, xpEvents } = this.props;
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
}
