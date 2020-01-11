import Webcam from "react-webcam";
import React, { Component } from "react";
import { Container } from "react-bootstrap";

const firebaseConfig = {
  apiKey: "AIzaSyDcYzTu9WHrvdmTvrG1YUWhyE2kL5nYOJk",
  authDomain: "face-attendance-21890.firebaseapp.com",
  databaseURL: "https://face-attendance-21890.firebaseio.com",
  projectId: "face-attendance-21890",
  storageBucket: "face-attendance-21890.appspot.com",
  messagingSenderId: "815622007400",
  appId: "1:815622007400:web:e5a16839c8b62a1665a9dd",
  measurementId: "G-VVDPE2MSW0"
};

var firebase = require("firebase");
var app = firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
var storageRef = storage.ref();
var uploads = firebase.firestore().collection("images");
// var faceRef = storageRef.child("face.jpeg");

export class Camera extends Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture = () => {
    var ts = new Date();
    var imagedesc = firebase.auth().currentUser.displayName + ts.toISOString();
    var faceRef = storageRef.child(imagedesc + ".jpeg");
    const imageSrc = this.webcam.getScreenshot();
    // alert(imageSrc);

    faceRef.putString(imageSrc, "data_url").then(function(snapshot) {
      console.log("Uploaded a data_url string!");
    });
    this.save(imagedesc);
  };

  save = (imagedesc) => {
    return uploads
      .add({
        name: imagedesc,
        value: 0,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .catch(function(error) {
        console.error("Error writing new message to database", error);
      });
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <Container>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <br />

        <button onClick={this.capture}>Capture and Submit photo</button>
      </Container>
    );
  }
}

export default Camera;
