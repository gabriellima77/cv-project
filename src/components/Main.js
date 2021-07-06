import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import '../styles/mainStyles.css';
import Experience from './Experience';
import Education from './Education';
import uniqid from "uniqid";

export default class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      xp: [],
      education: [],
    }
  }

  addXp = ()=> {
    const newXp = {
      role: '',
      company: '',
      city: '',
      from: '',
      to: '',
      id: uniqid(),
    };

    this.setState((prev)=> ({
      xp: [...prev.xp, newXp]
    }));
  }

  changeXp = (content)=> {
    const { role, company, city, from, to, id } = content;
    const newXp = {
      role,
      company,
      city,
      from,
      to,
      id
    }

    this.setState((prev)=> ({
      xp: [...prev.xp.filter((exp)=> (exp.id !== id)), newXp]
    }))
  }

  removeXp = (id)=> {
    this.setState((prev)=> ({
      xp: prev.xp.filter((xp)=> (xp.id !== id))
    }));
  }

  addEducation = ()=> {

  }

  changeEducation = ()=> {

  }

  removeEducation = ()=> {
    
  }

  render() {
    return(
      <main className="main">
        <GeneralInfo />
        <Education />
        <Experience
          xp={this.state.xp}
          addXp={this.addXp}
          changeXp={this.changeXp}
          removeXp={this.removeXp}
        />
      </main>
    );
  }
}
