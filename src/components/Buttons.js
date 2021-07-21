import React from 'react';

const Buttons = ({changePreview, isPreview}) => {
  return (
    <div className="btn-box">
      <button
        onClick={()=> {changePreview(false)}}
        className={`edit-btn ${(!isPreview)? 'active': ''}`}
      >
        Edit
      </button>
      <span className="middle">or</span>
      <button
        onClick={()=> {changePreview(true)}}
        className={`preview-btn ${(isPreview)?'active': ''}`}
      >
        Preview
      </button>
    </div>
  );
}

export default Buttons;
