import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';

const ListItem = styled.div<{
	color1: string;
	color2: string;
}>`
	font-size: 40px;
	line-height: 1.7;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Title = styled.div<{
	color1: string;
	color2: string;
}>`
	font-weight: bold;
	font-size: 65px;
	line-height: 1.1;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	margin-bottom: 30px;
	white-space: pre;
	background: linear-gradient(
		to right,
		${(props) => props.color1},
		${(props) => props.color2}
	);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
`;

export const Feature: React.FC<{
	index: number;
	fadeOutIndex: number;
	x: number;
	title: boolean;
	color1: string;
	color2: string;
	children: React.ReactNode;
}> = ({children, index, title, fadeOutIndex, x, color1, color2}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const progress = spring({
		fps,
		frame: frame - Number(index),
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
			color1={color1}
			color2={color2}
			style={{
				opacity,
				transform: `translateY(${translateY}px) translateX(${translateX}px)`,
			}}
		>
			{children}
		</Comp>
	);
};
