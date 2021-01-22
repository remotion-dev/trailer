import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';

const Container = styled.div`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 120px;
	font-weight: 700;
	text-align: center;
`;

export const Howto: React.FC = () => {
	const {fps, width} = useVideoConfig();
	const frame = useCurrentFrame();
	const progress = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});

	const translateY = interpolate(progress, [0, 1], [600, 0]);

	const moveOutProgress = spring({
		fps,
		frame: frame - 50,
		config: {
			damping: 200,
		},
	});

	const translateX = interpolate(moveOutProgress, [0, 1], [0, -width]);

	return (
		<Container
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flex: 1,
				backgroundColor: 'white',
			}}
		>
			<div
				style={{
					transform: `translateY(${translateY}px) translateX(${translateX}px)`,
				}}
			>
				How to write a <br /> video in React?
			</div>
		</Container>
	);
};
