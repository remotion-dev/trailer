import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {AbsContainer} from './AbsContainer';

export const Transition: React.FC<{
	type: 'in' | 'out';
}> = ({type, children}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const firstFrame = videoConfig.durationInFrames - 9;
	const progress = spring({
		config: {
			damping: 80,
		},
		fps: videoConfig.fps,
		frame: type === 'in' ? frame : Math.max(0, frame - firstFrame),
	});

	const percent = interpolate(progress, type === 'in' ? [1, 0] : [0, 1], [
		0,
		100,
	]);

	return (
		<AbsContainer
			style={{
				transform: `translateX(${type === 'in' ? percent : 0 - percent}%)`,
			}}
		>
			{children}
		</AbsContainer>
	);
};
