import React from 'react';
const UserCompany = ({ company }) => {
    return (
      <div>
        <p>{company.name}, {company.catchPhrase}, {company.bs}</p>
      </div>
    );
  };

export default UserCompany;
  