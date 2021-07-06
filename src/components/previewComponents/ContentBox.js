import React from 'react';

const ContentBox = ({ data })=> {
  return (
    <div>
      <div  className="item-box">
        <div className="period">
          <p>{data.from} - {data.to}</p>
        </div>
        <div className="m-box">
          <p className="m-text">{data.role || data.study}</p>
          <p>{data.company || data.school}{(data.city)?`, ${data.city}`: ''}</p>
        </div>
      </div>
    </div>
  );
}

export default ContentBox;