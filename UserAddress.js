import React from 'react';
const UserAddress = ({ address }) => {
    return (
      <div>
        <p>{address.street}, {address.suite}, {address.city}, {address.zipcode}, {address.geo.lat}, {address.geo.lng}</p>
      </div>
    );
  };

export default UserAddress;
  