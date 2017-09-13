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
	
	  this.state = {
      x: 0,
      y: 0,
    };
	  this.animatedScale = new Animated.Value(1);

    
	}

  componentWillMount() {
    if (this.props.children) {

          // console.log(this.props.children)
          // console.log(this.props.children.props.style.width,this.props.children.props.style.height)
          let xcenter = this.props.children.props.style.width*0.5;
          let ycenter = this.props.children.props.style.height*0.5;
          // alert(xcenter);

          this.setState({
            x: this.props.x - xcenter,
            y: this.props.y - ycenter,
          })
      }
  }

  componentWillReceiveProps(nextProps) {
    // alert(nextProps);
    // console.log('MARK get props: ',nextProps);
  }

  componentDidMount(){
    // console.log(DeviceEventEmitter);
    this.subscription = DeviceEventEmitter.addListener('scaleChanged', (param)=>{
        // console.log('notify param:',param);
        let scale=1;

        if (param.scale >= 1) {
          scale = 1.0/param.scale;
        } else {
          // scale = param.scale;
        }
        this.animatedScale.setValue(scale);
        // this.animatedScale.setValue(0.1);
    });
  };

  componentWillUnmount(){
      this.subscription.remove();
  };

  render() {
  	
  	// const animateConf = {
  	// 		flex:1,position:'absolute', left:this.state.x, top:this.state.y,
   //          transform: [{
   //              scale: this.animatedScale
   //          }, 
   //          // {
   //          //     translateX: this.animatedPositionX
   //          // }, {
   //          //     translateY: this.animatedPositionY
   //          // }
   //          ]
   //      }
     //    if (this.props.children) {
	    //     // console.log(this.props.children)
	    //     // console.log(this.props.children.props.style.width,this.props.children.props.style.height)
     //      let xcenter = this.props.children.props.style.width*0.5;
     //      let ycenter = this.props.children.props.style.height*0.5;

     //      this.setState({
     //        // x: this.props.x - xcenter,
     //        // y: this.props.y - ycenter,
     //        x: -25
     //      })
	    // }

     return (

	    	<Animated.View style={{
        flex:1,position:'absolute', left:this.state.x, top:this.state.y,
            transform: [{
                scale: this.animatedScale
            }, 
            // {
            //     translateX: this.animatedPositionX
            // }, {
            //     translateY: this.animatedPositionY
            // }
            ]
        }}>
	    		<TouchableOpacity onPress={()=> {
	    			if (this.props.onPress) {
	    				this.props.onPress();
	    				return;
	    			}
	    		}}>
	            	{this.props.children}
	            </TouchableOpacity>
	        </Animated.View>
    );	

  }
}

export default Mark;