import React, { Component } from 'react';

export default class Buttons extends Component{
  render() {
    const { changePreview } = this.props;
    return(
      <div className="btn-box">
        <button onClick={()=> {changePreview(false)}} className="edit-btn">Edit</button>
        <span className="middle">or</span>
        <button onClick={()=> {changePreview(true)}} className="preview-btn">Preview</button>
      </div>
    );
  }
}