import React, { Component } from "react";
import Webcam from "react-webcam";
import "./App.css";
import { Button, Container } from "react-bootstrap";
import Camera from "./components/Camera";
import Header from "./components/Header";

// const firebaseConfig = {
//   apiKey: "AIzaSyDcYzTu9WHrvdmTvrG1YUWhyE2kL5nYOJk",
//   authDomain: "face-attendance-21890.firebaseapp.com",
//   databaseURL: "https://face-attendance-21890.firebaseio.com",
//   projectId: "face-attendance-21890",
//   storageBucket: "face-attendance-21890.appspot.com",
//   messagingSenderId: "815622007400",
//   appId: "1:815622007400:web:e5a16839c8b62a1665a9dd",
//   measurementId: "G-VVDPE2MSW0"
// };

// var firebase = require("firebase");
// var app = firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Camera />
      </Container>
    );
  }
}

export default App;
