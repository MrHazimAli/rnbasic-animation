import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
	Animated,
	Easing,
	Image,
	Switch
} from 'react-native';
import LottieView from 'lottie-react-native';

const { width } = Dimensions.get('window');

export default class Launch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			onStatus: false
		}

		this.animatedFlex = new Animated.Value(200);

		this.animatedCircle = {
			dimension: new Animated.Value(.6 * width),
			radius: new Animated.Value(.3 * width),
			top: new Animated.Value(-.3 * width),
			left: new Animated.Value((width - (.6 * width))/2)
		};

		this.animatedBox = new Animated.Value(100);

		this.animatedImage = {
			height: new Animated.Value(0),
			width: new Animated.Value(0),
			top: new Animated.Value(90),
			left: new Animated.Value(width / 2)
		};

		this.animatedOffice = new Animated.Value(40)

		this.progress = new Animated.Value(0)
	}

	onSwitchChange = (value) => {
		this.setState({ onStatus: value }, () => {
			const { onStatus } = this.state;

			if(onStatus) {
				Animated.parallel([
					Animated.timing(this.animatedFlex, {
						toValue: 300,
						duration: 500,
						easing: Easing.ease
					}),
					Animated.timing(this.animatedCircle.dimension, {
						toValue: .9 * width,
						duration: 500
					}),
					Animated.timing(this.animatedCircle.radius, {
						toValue: .45 * width,
						duration: 500
					}),
					Animated.timing(this.animatedCircle.top, {
						toValue: -20,
						duration: 500
					}),
					Animated.timing(this.animatedCircle.left, {
						toValue: width - (.5 * width),
						duration: 500
					}),
					Animated.timing(this.animatedBox, {
						toValue: 200,
						duration: 500
					}),
					Animated.timing(this.animatedImage.height, {
						toValue: 155.3,
						duration: 500
					}),
					Animated.timing(this.animatedImage.width, {
						toValue: 175.3,
						duration: 500
					}),
					Animated.timing(this.animatedImage.top, {
						toValue: 59,
						duration: 500,
						easing: Easing.ease
					}),
					Animated.timing(this.animatedImage.left, {
						toValue: (width-175.3) / 2,
						duration: 500
					}),
					Animated.timing(this.animatedOffice, {
						toValue: 140,
						duration: 500
					}),
					Animated.timing(this.progress, {
			      toValue: 1,
			      duration: 1000,
			      easing: Easing.linear,
			    })
				]).start()
			} else {
				Animated.parallel([
					Animated.timing(this.animatedFlex, {
						toValue: 200,
						duration: 500,
						easing: Easing.ease
					}),
					Animated.timing(this.animatedCircle.dimension, {
						toValue: .6 * width,
						duration: 500
					}),
					Animated.timing(this.animatedCircle.radius, {
						toValue: .3 * width,
						duration: 500
					}),
					Animated.timing(this.animatedCircle.top, {
						toValue: -.3 * width,
						duration: 500
					}),
					Animated.timing(this.animatedCircle.left, {
						toValue: (width - (.6 * width))/2,
						duration: 500
					}),
					Animated.timing(this.animatedBox, {
						toValue: 100,
						duration: 500
					}),
					Animated.timing(this.animatedImage.height, {
						toValue: 0,
						duration: 500
					}),
					Animated.timing(this.animatedImage.width, {
						toValue: 0,
						duration: 500
					}),
					Animated.timing(this.animatedImage.top, {
						toValue: 90,
						duration: 500,
						easing: Easing.ease
					}),
					Animated.timing(this.animatedImage.left, {
						toValue: width/2,
						duration: 500
					}),
					Animated.timing(this.animatedOffice, {
						toValue: 40,
						duration: 500
					}),
					Animated.timing(this.progress, {
						toValue: 0,
						duration: 1
					})
				]).start()
			}

		})
	}

  render() {

  	const { onStatus } = this.state;

  	const viewStyle = { height: this.animatedFlex }
  	const circleStyle = {
  		height: this.animatedCircle.dimension,
  		width: this.animatedCircle.dimension,
  		borderRadius: this.animatedCircle.radius,
  		top: this.animatedCircle.top,
  		left: this.animatedCircle.left
  	}
  	const boxStyle = { top: this.animatedBox }
  	const imageStyle = {
  		height: this.animatedImage.height,
  		width: this.animatedImage.width,
  		top: this.animatedImage.top,
  		left: this.animatedImage.left
  	}
  	const officeStyle = { top: this.animatedOffice }

    return (
      <View style={styles.container}>
      	<Animated.View style={[styles.topContainer, viewStyle]}>
      		<Animated.View style={[styles.circle, circleStyle]} />

      		<Animated.View style={[styles.leftTitleContainer, officeStyle]}>
      			<Text style={styles.normalText}>Hazim's</Text>
      			<Text style={styles.boldText}>Office</Text>
      		</Animated.View>

      		<Animated.View style={[styles.rightTitleContainer, officeStyle]}>
      			<Text style={styles.normalText}>23° indoor</Text>
      			<Text style={styles.normalText}>Door closed</Text>
      		</Animated.View>

      		<LottieView
      			progress={this.progress}
      			source={require('../assets/confetti.json')}
      		/>

      	</Animated.View>
      	
      	<View style={styles.bottomContainer}>
      		
      	</View>

      	<Animated.View style={[styles.box, boxStyle]}>	
      		<View style={styles.eachSegment}>
      		
      		</View>
      		<View style={styles.eachSegment}>
      			<Text style={styles.blueBoldText}>Gateway</Text>
      			<Text style={styles.blueNormalText}>Online</Text>
      			<View style={styles.hr} />
      			<Text style={styles.blueNormalText}>Alarming</Text>
      			<Switch
	      			value={onStatus}
	      			onValueChange={this.onSwitchChange}
	      			thumbColor={onStatus && '#fff'}
	      			onTintColor="#fd5a87"
	      		/>	
      		</View>
      	</Animated.View>

      	<Animated.Image 
    			source={require('../assets/robot.png')}
    			style={[styles.image, imageStyle]}
    		/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	topContainer: {
		backgroundColor: '#37469b'
	},
	bottomContainer: {
		flex: 1,
		backgroundColor: '#fff'
	},
	circle: {
		backgroundColor: '#fd5a87',
		position: 'absolute'
	},
	box: {
		width: width-40,
		marginLeft: 20,
		height: 150,
		borderRadius: 5,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#ececec',
		position: 'absolute',
		flexDirection: 'row'
	},
	image: {
		position: 'absolute'
	},
	normalText: {
		fontSize: 15,
		color: '#fff'
	},
	boldText: {
		fontSize: 20,
		color: '#fff',
		fontWeight: 'bold'
	},
	leftTitleContainer: {
		position: 'absolute',
		left: 25
	},
	rightTitleContainer: {
		position: 'absolute',
		right: 25
	},
	eachSegment: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	blueNormalText: {
		marginVertical: 7,
		color: '#b5bfe3',
		fontSize: 15
	},
	blueBoldText: {
		fontSize: 20,
		color: '#0f1f7d'
	},
	hr: {
		height: 1,
		backgroundColor: '#b5bfe3',
		width: 100
	}
})
