import React from 'react';

const Email = ({ email, changeEmail })=> {
  return(
    <div className="input">
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={changeEmail}
      />
    </div>
  );
}

export default Email;