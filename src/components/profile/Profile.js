import React from 'react';
import ProfileIcon from '../profile-icon/ProfileIcon';
import ProfileName from '../profile-name/ProfileName';
import ProfileAddress from '../profile-address/ProfileAddress';
import './Profile.css'

const Profile = (props) => {
  return(
    <div className= "wrapper">
      <div className="leftSide">
        <ProfileIcon imgObj={props.profileCard.picture}/>
      </div>
      <div>
        <ProfileName nameObj={props.profileCard.name} login={props.profileCard.login}/>
        <ProfileAddress addressObj={props.profileCard.location}/>
        <span>Cell: {props.profileCard.cell}</span>
      </div>


    </div>
  );
}

export default Profile