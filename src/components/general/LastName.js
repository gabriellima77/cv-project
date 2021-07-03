import React from 'react';

const LastName = ({ lastName, changeLastName })=> {
  return(
    <div className="input">
      <label htmlFor="lastName">Last Name: </label>
      <input
        id="lastName"
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={changeLastName}
      />
    </div>
  )
}

export default LastName;