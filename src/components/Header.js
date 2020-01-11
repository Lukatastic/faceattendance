import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

var firebase = require("firebase");
export class Header extends Component {
  state = {
    isSignedIn: false // Local signed-in state.
  };

  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => this.setState({ isSignedIn: !!user }));
  }

  render() {
    return (
      <Row className="header">
        <Col>
          <h1>Face Attendance</h1>
        </Col>
        {this.profileDisplay()}
      </Row>
    );
  }

  profileDisplay = () => {
    if (!this.state.isSignedIn) {
      return (
        <Col id="signin">
          <Button onClick={this.signIn}>Sign in</Button>
        </Col>
      );
      // return <Col>{this.getUserName()};</Col>;
    } else {
      return (
        <Col id="signin">
          {this.getUserName()}{" "}
          <Button onClick={() => firebase.auth().signOut()}>Sign out</Button>
        </Col>
      );
    }
  };

  signIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };
  getUserName = () => {
    return firebase.auth().currentUser.displayName;
  };
}

export default Header;
