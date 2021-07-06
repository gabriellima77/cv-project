import React, { Component } from 'react';
import Input from './Input';

export default class FormXp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      role: '',
      company: '',
      city: '',
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
    const xp = {
      ...this.props.xp
    }
    if(!this.state.id) this.setState({...xp});
  }

  render() {
    const { keyValue, removeXp } = this.props;
    return (
      <div key={keyValue} className="content">
        <form className="xp-box">
          <Input
            title="Role"
            type="text"
            prop="role"
            changeValue={this.changeState}
            value={this.state.role}
          />
          <Input
            title="Company"
            type="text"
            prop="company"
            changeValue={this.changeState}
            value={this.state.company}
          />
          <Input
            title="City"
            type="text"
            prop="city"
            changeValue={this.changeState}
            value={this.state.city}
          />
          <Input
            title="From"
            type="text"
            prop="from"
            changeValue={this.changeState}
            value={this.state.from}
          />
          <Input
            title="To"
            type="text"
            prop="to"
            changeValue={this.changeState}
            value={this.state.to}
          />
        </form>
        <button
          onClick={()=> {removeXp(keyValue)}}
          className="large-btn m-vertical"
        >
          Delete
        </button>
      </div>
    );
  }
}