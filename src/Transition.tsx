import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

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

	const percent = interpolate(
		progress,
		[0, 1],
		type === 'in' ? [100, 0] : [0, 100]
	);

	return (
		<AbsoluteFill
			style={{
				transform: `translateX(${type === 'in' ? percent : 0 - percent}%)`,
			}}
		>
			{children}
		</AbsoluteFill>
	);
};
