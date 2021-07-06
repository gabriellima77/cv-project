import React, { Component } from 'react';

export default class Input extends Component {

  changeInput = (e)=> {
    const { changeValue, prop } = this.props;
    changeValue(e.target.value, prop);
  }

  render() {
    const { title, type, value } = this.props;
    return (
      <div className="input">
        <label>{title}</label>
        <input
          onChange={this.changeInput}
          type={type}
          placeholder={title}
          value={value}
        />
      </div>
    )
  }
}