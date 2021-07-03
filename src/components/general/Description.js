import React from 'react';

const Description = ({ description, changeDescription })=> {
  return(
    <div className="input">
      <label htmlFor="description">Description: </label>
      <textarea
        id="description"
        placeholder="Description"
        value={description}
        onChange={changeDescription}
      />
    </div>
  );
}

export default Description;