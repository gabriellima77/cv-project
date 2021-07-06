import React, { Component } from 'react';
import Input from './Input';

export default class FormEducation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: '',
      study: '',
      from: '',
      to: '',
      id: '',
    }
  }

  changeState = (value, stateName)=> {
    const { changeValue } = this.props;
    const newObj = {
      ...this.state
    }

    this.setState({
      [stateName]: value
    });

    newObj[stateName] = value;
    changeValue(newObj);
  }

  componentDidMount() {
    const education = {
      ...this.props.educ
    }
    console.log(education);
    if(!this.state.id) this.setState({...education});
  }

  render() {
    const { keyValue, removeEducation } = this.props;
    return (
      <div key={keyValue} className="content">
        <form className="xp-box">
          <Input
            title="School Name"
            type="text"
            prop="school"
            changeValue={this.changeState}
            value={this.state.school}
          />
          <Input
            title="Title of Study"
            type="text"
            prop="study"
            changeValue={this.changeState}
            value={this.state.study}
          />
          <Input
            title="From"
            type="date"
            prop="from"
            changeValue={this.changeState}
            value={this.state.from}
          />
          <Input
            title="To"
            type="date"
            prop="to"
            changeValue={this.changeState}
            value={this.state.to}
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
}