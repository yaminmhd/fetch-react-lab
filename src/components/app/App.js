import React, { Component } from "react";
import ProfilesPage from "../profiles-page/ProfilesPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div class="grid">
        <ProfilesPage />
      </div>
    );
  }
}

export default App;
