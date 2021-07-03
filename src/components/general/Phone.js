import React from 'react';

const Phone = ({ phone, changePhone })=> {
  return(
    <div className="input">
      <label htmlFor="phone">Phone: </label>
      <input
        id="phone"
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={changePhone}
      />
    </div>
  );
}

export default Phone;