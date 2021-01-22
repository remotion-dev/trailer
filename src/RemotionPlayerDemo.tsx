import React from 'react';
import {Video} from 'remotion';

export const RemotionPlayerDemo: React.FC = () => {
	const playerDemo = require('./remotion-player.webm');

	return (
		<div
			style={{
				backgroundColor: 'white',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flex: 1,
			}}
		>
			<Video src={playerDemo} style={{height: 900, borderRadius: 15}} />
		</div>
	);
};
