import React, {Component} from 'react';
import {StyleSheet, Text, View, Animated, Easing} from 'react-native';

export default class Basic extends Component<Props> {
  
  componentWillMount() {
    this.animatedValue = new Animated.Value(100);
  }

  componentDidMount() {
    
    Animated.timing(this.animatedValue, {
      toValue: 300,
      duration: 1000,
      easing: Easing.bounce
    }).start()
  }

  render() {

    const animatedStyle = { height: this.animatedValue }

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
    backgroundColor: 'green',
    width: 200,
    height: 100
  }
});
