import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const FadeTransition: React.FC<{
	type: 'in' | 'out';
	duration: number;
	children: React.ReactNode;
}> = ({type, children, duration}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const firstFrame = videoConfig.durationInFrames - duration;

	const progress =
		type === 'in'
			? interpolate(frame, [0, duration], [0, 1], {
					extrapolateRight: 'clamp',
					extrapolateLeft: 'clamp',
			  })
			: interpolate(
					frame,
					[firstFrame, videoConfig.durationInFrames - 1],
					[1, 0],
					{
						extrapolateLeft: 'clamp',
						extrapolateRight: 'clamp',
					}
			  );

	return (
		<AbsoluteFill
			style={{
				opacity: progress,
			}}
		>
			{children}
		</AbsoluteFill>
	);
};
