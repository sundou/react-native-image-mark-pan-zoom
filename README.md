# react-native-image-mark-pan-zoom

## Getting Started

### Installation

```bash
npm i react-native-image-mark-pan-zoom --save
```

### Basic Usage


```JavaScript
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Modal
} from 'react-native';

import {ImageZoom ,Mark} from 'react-native-image-mark-pan-zoom';

class ImageViewer extends React.Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<ImageZoom 
					ref={(r) => this.ImageZoom=r}
					cropWidth={Dimensions.get('window').width}
					cropHeight={Dimensions.get('window').height}
					imageWidth={200}
					imageHeight={200}
				>

					<Image style={{width:200, height:200,}}
						source={require('./test.jpg')}
					>

					<Mark x={0} y={0} 
						onPress={() => {
							this.ImageZoom.zoomIn();
						}}
					>
						<View style={{width:50,height:51,backgroundColor:'yellow'}}/>
					</Mark>

					<Mark x={50} y={50} 
						onPress={() => {
							this.ImageZoom.zoomOut();
						}}
					>
						<View style={{width:50,height:51,backgroundColor:'yellow'}}/>
					</Mark>

					</Image>
				</ImageZoom>

			</View>
		)
	}
}

AppRegistry.registerComponent('myproject', () => ImageViewer);
```
