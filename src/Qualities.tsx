import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';

const ListItem = styled.div`
	font-size: 40px;
	line-height: 1.7;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Title = styled.div`
	font-weight: bold;
	font-size: 65px;
	line-height: 1.1;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	margin-bottom: 30px;
	white-space: pre;
`;

export const Feature: React.FC<{
	index: number;
	fadeOutIndex: number;
	x: number;
	title: boolean;
}> = ({children, index, title, fadeOutIndex, x}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const progress = spring({
		fps,
		frame: frame - index * 1,
		config: {
			damping: 200,
		},
	});
	const translateY = interpolate(progress, [0, 1], [1000, 0]);
	const horizontalProgress = spring({
		fps,
		frame: frame - fadeOutIndex - 180,
		config: {
			damping: 200,
		},
	});
	const opacity = interpolate(horizontalProgress, [0, 0.7], [1, 0]);
	const translateX = interpolate(horizontalProgress, [0, 1], [0, x]);

	const Comp = title ? Title : ListItem;
	return (
		<Comp
			style={{
				opacity,
				transform: `translateY(${translateY}px) translateX(${translateX}px)`,
			}}
		>
			{children}
		</Comp>
	);
};
