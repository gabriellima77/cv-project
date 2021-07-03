import React from 'react';
import GeneralInfo from './GeneralInfo';
import '../styles/mainStyles.css';
import Experience from './Experience';
import Education from './Education';

const Main = ()=> {
  return(
    <main className="main">
      <GeneralInfo />
      <Experience />
      <Education />
    </main>
  )
}

export default Main;