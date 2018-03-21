import React, { Component } from "react";
import Profile from '../profile/Profile';
class ProfilesPage extends Component {
  constructor() {
    super();
    this.state = {
      profiles: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api?results=100")
      .then(data => {
        return data.json();
      })
      .then(data => data.results)
      .then(data => {
        console.log(data);
        return this.setState({ profiles: data });
      })

  }

  render() {
    return (
      this.state.profiles.map((profile, i) => {
        return (
          <div key={i}>
            <Profile profileCard={profile}/>
          </div>
        )
      })
    )

    // <ProfileIcon key={i} imgUrl={profile.picture.large} />
    // <ProfileName key={i} nameObj={profile.name}/>
    // return this.state.profiles.map((profile, i) => {
    //   return <img key={i} src={profile.picture.large}/>
    // });
  }
}

export default ProfilesPage;
