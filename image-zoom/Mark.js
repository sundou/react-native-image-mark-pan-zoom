'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  DeviceEventEmitter,
  Animated,
  TouchableOpacity,
  Image
} from 'react-native';

class Mark extends Component {

	// private animatedScale = new Animated.Value(0.5)
	constructor(props) {
	  super(props);
	
	  // this.state = {};
	  this.animatedScale = new Animated.Value(1);
	}

  componentWillReceiveProps(nextProps) {
    // alert(nextProps);
    console.log('MARK get props: ',nextProps);
  }

  componentDidMount(){
    console.log(DeviceEventEmitter);
    this.subscription = DeviceEventEmitter.addListener('scaleChanged', (param)=>{
        console.log('notify param:',param);
        this.animatedScale.setValue(1.0/param.scale);
        // this.animatedScale.setValue(0.1);
    });
  };

  componentWillUnmount(){
      this.subscription.remove();
  };

  render() {
  	
  	const animateConf = {
  			flex:1,position:'absolute', left:this.props.x, top:this.props.y,
            transform: [{
                scale: this.animatedScale
            }, 
            // {
            //     translateX: this.animatedPositionX
            // }, {
            //     translateY: this.animatedPositionY
            // }
            ]
        }
        if (this.props.children) {
	        console.log(this.props.children)
	        console.log(this.props.children.props.style.width,this.props.children.props.style.height)

	    }

     return (

	    	<Animated.View style={animateConf}>
	    		<TouchableOpacity onPress={()=> {
	    			if (this.props.onPress) {
	    				this.props.onPress();
	    				return;
	    			}
	    			alert('index'+this.props.width)
	    		}}>
	            	{this.props.children}
	            </TouchableOpacity>
	        </Animated.View>
    );	

    return (
    	<View style={{width: 50,height: 50,position:'absolute', left:this.props.width*50, top:0,}}>
	    	<Animated.View style={animateConf}>
	            <View style={{width: 50,height:50,backgroundColor:'red'}}/>
	        </Animated.View>
        </View>
    );
  }
}

export default Mark;