import React from 'react'

import Svg, { Path, SvgProps } from 'react-native-svg'

const AddIcon = (props: SvgProps) => {
	return (
		<Svg viewBox="0 0 20 20" {...props}>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10 3.5C10.4142 3.5 10.75 3.83579 10.75 4.25V15.75C10.75 16.1642 10.4142 16.5 10 16.5C9.58579 16.5 9.25 16.1642 9.25 15.75V4.25C9.25 3.83579 9.58579 3.5 10 3.5Z"
				fill="currentColor"
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.5 10C16.5 10.4142 16.1642 10.75 15.75 10.75L4.25 10.75C3.83579 10.75 3.5 10.4142 3.5 10C3.5 9.58579 3.83579 9.25 4.25 9.25L15.75 9.25C16.1642 9.25 16.5 9.58579 16.5 10Z"
				fill="currentColor"
			/>
		</Svg>
	)
}

export default AddIcon
