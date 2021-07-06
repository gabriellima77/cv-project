import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
  }

  changeInput = (e)=> {
    const { changeValue, obj, prop } = this.props;
    this.setState({
      value: e.target.value
    });
    changeValue(e.target.value, prop, obj);
  }

  render() {
    const { title, type } = this.props;
    return (
      <div className="input">
        <label>{title}</label>
        <input
          onChange={this.changeInput}
          type={type}
          placeholder={title}
          value={this.state.value}
        />
      </div>
    )
  }
}