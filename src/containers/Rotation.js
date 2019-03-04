import React, {Component} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';

export default class Rotation extends Component<Props> {

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1500
    }).start()
  }

  render() {

    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0,1],
      outputRange: ['0deg','360deg']
    })

    const animatedStyle = {
      transform: [
        { rotate: interpolateRotation }
      ]
    }

    return (
      <View style={styles.container}>

        <Animated.View style={[styles.box, animatedStyle]} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  box: {
    backgroundColor: '#202020',
    width: 150,
    height: 150
  }
});
