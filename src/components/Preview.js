import React, { Component } from 'react';

export default class Preview extends Component {

  render() {
    const { general, xp, education } = this.props;
    console.log(general, xp, education);
    return (
      <div className="preview">

      </div>
    );
  }
}