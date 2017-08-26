# react-native-image-mark-pan-zoom

## Getting Started

### Installation

```bash
npm i react-native-image-mark-pan-zoom --save
```

### Basic Usage

- Install react-native first

```bash
$ npm i react-native -g
```

- Initialization of a react-native project

```bash
$ react-native init myproject
```

- Then, edit myproject/index.ios.js, like this:

```typescript
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
	render: function() {
		return (
		<View style={{flex: 1}}>
			<ImageZoom cropWidth={Dimensions.get('window').width}
				cropHeight={Dimensions.get('window').height}
				imageWidth={200}
				imageHeight={200}
				testChangeProp={this.state.testChangeProp}>



				<Image style={{width:200, height:200,}}
				source={require('./test.jpg')}>


					<Mark x={0} y={0} onPress={()=>{
						alert('press first mark')
					}}>
						<View style={{width:50,height:51,backgroundColor:'yellow'}}/>
					</Mark>

					<Mark x={50} y={50}>
						<View style={{width:50,height:51,backgroundColor:'yellow'}}/>
					</Mark>

					<Mark x={0} y={100}>
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
