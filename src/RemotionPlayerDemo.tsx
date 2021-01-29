import React from 'react';
import {Video} from 'remotion';
import playerDemo from './remotion-player.webm';

export const RemotionPlayerDemo: React.FC = () => {
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
