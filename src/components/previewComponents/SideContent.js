import React from 'react';

const SideContent = ({ general })=> {
  return (
    <div className="side">
      <h2 className="name">
        {general.firstName || 'Henry'} {general.lastName || 'Ford'}
      </h2>
      <div className="general-info">
        <h3 className="personal">Personal Info</h3>
        <div className="info-box">
          <p>Phone</p>
          <p>{general.phone || '(55) 1234-5678'}</p>
        </div>
        <div className="info-box">
          <p>Email</p>
          <p>{general.email || 'example@example.com'}</p>
        </div>
      </div>
    </div>
  );
}

export default SideContent;