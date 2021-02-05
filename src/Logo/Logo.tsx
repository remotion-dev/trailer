import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import {Triangle} from './Triangle';

const Outer = styled.div`
	display: flex;
	justify-content: center;
	flex: 1;
	align-items: center;
	background-color: white;
`;

const Introducing = styled.div`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	color: white;
	font-size: 120px;
	font-weight: 700;
`;

const Title = styled.div`
	font-size: 210px;
	font-family: 'SF Pro Text';
	font-weight: 700;
`;

const scaleStart = 45;

export const Logo: React.FC<{
	showText: boolean;
	offset: number;
	textStartOffset: number;
}> = ({showText, offset, textStartOffset}) => {
	const textStart = 85 + textStartOffset;
	const {fps, width, height} = useVideoConfig();
	const currentFrame = useCurrentFrame();
	const frame = currentFrame - offset;
	const blueOpacity = interpolate(frame, [0, 5], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const textOpacity = interpolate(
		frame,
		[scaleStart - 10, scaleStart - 0],
		[1, 0]
	);

	const scale = (index: number) => {
		const progress = spring({
			fps,
			frame: frame - index * 10 - scaleStart,
			config: {
				damping: 200,
				mass: 0.7,
			},
		});
		return interpolate(progress, [0, 1], [20, 1]);
	};

	const textAnimated = spring({
		fps,
		frame: frame - textStart,
		config: {
			damping: 100,
			mass: 2,
			stiffness: 200,
		},
	});

	return (
		<Outer>
			<div
				style={{
					position: 'absolute',
					justifyContent: 'center',
					alignItems: 'center',
					flex: 1,
					transform: `translateX(${interpolate(
						textAnimated,
						[0, 1],
						[100, 300]
					)}px)`,
					opacity: interpolate(textAnimated, [0.5, 1], [0, 1]),
				}}
			>
				<Title>Remotion</Title>
			</div>
			<div
				style={{
					position: 'absolute',
					width,
					height,
					justifyContent: 'center',
					alignItems: 'center',
					display: 'flex',
					transform: `translateX(${interpolate(
						textAnimated,
						[0, 1],
						[0, -450]
					)}px)`,
				}}
			>
				<Triangle
					scale={scale(2)}
					size={1100 / 2}
					opacity={blueOpacity * 0.2}
				/>
				<Triangle scale={scale(1)} size={900 / 2} opacity={blueOpacity * 0.4} />
				<Triangle scale={scale(0)} size={700 / 2} opacity={blueOpacity * 1} />
			</div>
			{showText ? (
				<div
					style={{
						position: 'absolute',
						justifyContent: 'center',
						alignItems: 'center',
						flex: 1,
						opacity: textOpacity,
					}}
				>
					<Introducing>Introducing</Introducing>
				</div>
			) : null}
		</Outer>
	);
};
