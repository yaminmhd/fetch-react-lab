import React from 'react';
import './ProfileName.css';

const ProfileName = (props) => {
  const {first,last} = props.nameObj;
  const {username} = props.login;
  return(
    <div>
      <p>{first} {last}</p>
      <p>@{username}</p>
    </div>
  );
}

export default ProfileName