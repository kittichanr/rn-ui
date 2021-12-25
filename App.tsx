import React from 'react'

import { View } from 'react-native'

import { MyButton } from './src'

const App = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<MyButton text="Test" color="red" onPress={() => null} />
		</View>
	)
}

export default App
