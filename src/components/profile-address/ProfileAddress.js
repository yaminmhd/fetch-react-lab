import React from 'react';

const ProfileAddress = (props) => {
  const {street,city} = props.addressObj
  return(
    <div>
      <span>Address: {street} {city}</span>
    </div>
  );
}

export default ProfileAddress