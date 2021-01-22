import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Logo: React.FC<{
	transitionStart: number;
}> = ({transitionStart}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const scaleIn = spring({
		frame,
		config: {
			mass: 0.5,
		},
		fps: videoConfig.fps,
	});

	const translation = interpolate(
		spring({
			frame: frame - transitionStart,
			fps: videoConfig.fps,
			config: {
				damping: 100,
				mass: 0.5,
			},
		}),
		[0, 1],
		[0, -150]
	);

	const scale = frame < 50 ? scaleIn : 1;

	const logoRotation = interpolate(
		frame,
		[0, videoConfig.durationInFrames],
		[0, 360]
	);

	return (
		<div
			style={{
				position: 'absolute',
				width: videoConfig.width,
				height: videoConfig.height,
				transform: `scale(${scale}) translateY(${translation}px) rotate(${logoRotation}deg)`,
			}}
		/>
	);
};
