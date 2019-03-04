import React, {Component} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';

export default class Parallel extends Component<Props> {

  constructor(props) {
    super(props);
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(1);
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.animatedValue1, {
        toValue: 300,
        duration: 2000
      }),
      Animated.spring(this.animatedValue2, {
        toValue: 2
      })
    ]).start()
  }

  render() {

    const animatedStyle = {
      transform: [
        { translateY: this.animatedValue1 },
        { scale: this.animatedValue2 }
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
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#202020'
  }
});
