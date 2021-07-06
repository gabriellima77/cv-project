import React, { Component } from 'react';
import FormEducation from './mainComponents/FormEducation';

export default class Education extends Component {

  btnEventHandler = ()=> {
    const { addEducation } = this.props;
    addEducation();
  }

  changeValue = (educ)=> {
    let newEducation = {
      ...educ
    };
  
    this.props.changeEducation(newEducation);
  }

  render() {
    const { education, removeEducation } = this.props;
    return(
      <section className="xp">
        <h2>Education</h2>
        {education.map((educ)=> (
          <FormEducation 
            key={educ.id}
            keyValue={educ.id}
            changeValue={this.changeValue}
            removeEducation={removeEducation}
            educ={educ}
          />))
        }
        <button onClick={this.btnEventHandler} className="large-btn" >Add</button>
      </section>
    );
  }
}
