import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    Image,
    ScrollView,
    TouchableOpacity
} from "react-native";
import { Camera } from "expo-camera";
import * as FaceDetector from "expo-face-detector";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
            faces: []
        };

        this.onFacesDetected = this.onFacesDetected.bind(this);
    }
    async componentDidMount() {
        const {status} = await Camera.requestPermissionsAsync();
        this.setState({ hasCameraPermission: status === "granted" });
    }
    onFacesDetected({ faces }) {
        this.setState({ faces: faces });
    }
    
    constructor(props) {
        super(props)
        this.state = {
            hasCameraPermission: null,
            faces:[]
        }
    }

    componentDidMount() {
        Permissions
        .askAsync(Permissions.CAMERA)
        .then(this.onCameraPermission)
    }

    onCameraPermission = (status) => {
        this.setState({ hasCameraPermission: status.status === 'granted' })
    }

    onFacesDetected = (faces) => {
        this.setState({ faces: faces })
    }

    onFacesDetectionError = (error) => {
        console.log(error)
    }
     <View> style={style,middleContainer}
     <Camera
     style={{ flex: 1 }}>
     type={Camera.Constant.Type.front}
     FaceDetectorSettings={{
       mode: FaceDetector.Constant.Mode.fast,
       detectLandmarks: FaceDetector.Constant.Landmarks.all,
       runClassifications: FaceDetector.Constants.runClassifications.all
     }}
     onFacesDetected={this.onFacesDetected}
     onFacesDetectedError={this.onFacesDetectionError}
     </Camera>
     </View>
};
