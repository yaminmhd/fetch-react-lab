import React from 'react';
import './ProfileIcon.css';

const ProfileIcon = (props) => {
  const {large} = props.imgObj;
  return(
    <img className="profileStyle" src={large} alt="Profile Icon"/>
  );
}


export default ProfileIcon