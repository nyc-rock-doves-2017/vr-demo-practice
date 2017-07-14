import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Box,
  Sphere,
  Cylinder,
} from 'react-vr';

/*
  X - horizontal (+ to the right, - to the left)
  Y - vertical (+^, -v)
  Z - depth
*/

export default class VRPractice extends React.Component {
  constructor(){
    super();
    this.state = {
      color: 'white'
    }
  }
  render() {
    return (
      <View>
        <View style={{layoutOrigin: [1,1]}}>
        <VrButton onClick={() => console.log("Keep learning JavaScript!")}>
          <Box dimWidth={.2} dimHeight={.3} dimDepth={.2} style={{color: 'skyblue'}}></Box>
        </VrButton>
        <View style={{layoutOrigin: [-3, 1]}}>
          <Sphere widthSegments={.6} heightSegments={.1} radius={.6} style={{color: 'green'}}/>
        </View>
      </View>
          <View style={{layoutOrigin: [0,2],
                        transform: [{translate: [-.5, -.5, -1]}],
                      }}>
            <Text>
              Features to implement
            </Text>
            <Text>
              1) Learn more about VR
            </Text>
            <Text>
              2) Learn more about React VR
            </Text>
            <Text>
              3) Learn more about animation
            </Text>
        </View>
    </View>
    );
  }
};

AppRegistry.registerComponent('VRPractice', () => VRPractice);
