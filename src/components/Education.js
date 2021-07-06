import React, { Component } from 'react';
import Input from './mainContent/Input';

export default class Education extends Component {

  btnEventHandler = ()=> {
    const { addEducation } = this.props;
    addEducation();
  }

  changeValue = (value, type, educ)=> {
    let newEducation = {
      ...educ
    };
    switch(type){
      case 'school':
        newEducation.school = value;
        break;
      case 'study':
        newEducation.study = value;
        break;
      case 'from':
        newEducation.from = value;
        break;
      case 'to':
        newEducation.to = value;
        break;
      default:
        break;
    }
    this.props.changeEducation(newEducation);
  }

  getInputs = (education, key)=> {
    const { removeEducation } = this.props;
    return(
      <div key={key} className="content">
        <form className="xp-box">
            <Input
              title="School Name"
              type="text"
              prop="school"
              changeValue={this.changeValue}
              obj={education}
            />
            <Input
              title="Title of Study"
              type="text"
              prop="study"
              changeValue={this.changeValue}
              obj={education}
            />
            <Input
              title="From"
              type="date"
              prop="from"
              changeValue={this.changeValue}
              obj={education}
            />
            <Input
              title="To"
              type="date"
              prop="to"
              changeValue={this.changeValue}
              obj={education}
            />
        </form>
        <button
          onClick={()=> {removeEducation(key)}}
          className="large-btn m-vertical"
        >
          Delete
        </button>
      </div>
    );
  }

  render() {
    const { education } = this.props;
    return(
      <section className="xp">
        <h2>Education</h2>
        {education.map((educ)=> (this.getInputs(educ, educ.id)))}
        <button onClick={this.btnEventHandler} className="large-btn" >Add</button>
      </section>
    );
  }
}
