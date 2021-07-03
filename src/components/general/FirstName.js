import React from 'react';

const FirstName = ({firstName, changeFirstName})=> {
  return(
    <div className="input">
      <label htmlFor="firstName">First Name: </label>
      <input
        id="firstName"
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={changeFirstName}
      />
    </div>
  );
}

export default FirstName;