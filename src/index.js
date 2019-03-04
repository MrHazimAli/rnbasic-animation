import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './containers/Home';
import Basic from './containers/Basic';
import Spring from './containers/Spring';
import Draggable from './containers/Draggable';
import Color from './containers/Color';
import Rotation from './containers/Rotation';
import Sequence from './containers/Sequence';
import Stagger from './containers/Stagger';
import Parallel from './containers/Parallel';
import Flip from './containers/Flip';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Basic: {
    screen: Basic
  },
  Spring: {
    screen: Spring
  },
  Draggable: {
  	screen: Draggable
  },
  Color: {
  	screen: Color
  },
  Rotation: {
    screen: Rotation
  },
  Sequence: {
    screen: Sequence
  },
  Stagger: {
    screen: Stagger
  },
  Parallel: {
    screen: Parallel
  },
  Flip: {
    screen: Flip
  }
});

export default createAppContainer(AppNavigator);