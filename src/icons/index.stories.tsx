import React from 'react'

import { Text, View } from 'react-native'

import { Story } from '@storybook/react'

const Template: Story = ({ icons, backgroundColor, ...props }) => {
	return (
		<View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
			{icons.map(({ name, Component }: { name: string; Component: React.FC }) => (
				<View key={name} style={{ width: 100, height: 100, alignItems: 'center', margin: 16 }}>
					<Component {...props} />
					<Text style={{ marginTop: 12 }}>{name}</Text>
				</View>
			))}
		</View>
	)
}

export default { title: 'All Icons' }

export const Icons: Story = props => {
	const icons = require
		.context('../icons', false, /^((?!index).+\.tsx$)*$/)
		.keys()
		.filter((fileName: string) => !fileName.match('index.stories.tsx'))
		.map((fileName: string) => {
			const name = fileName.substring(2, fileName.length - 4)
			const Component = require(`../icons/${name}.tsx`).default

			return { name, Component }
		})

	return <Template {...props} icons={icons} />
}

Icons.argTypes = {
	color: {
		defaultValue: '',
		control: {
			type: 'color',
		},
	},
	backgroundColor: {
		defaultValue: '#f2f2f2',
		control: {
			type: 'color',
		},
	},
}
