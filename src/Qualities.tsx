import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';

const ListItem = styled.div`
	font-size: 40px;
	line-height: 1.5;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const Feature: React.FC<{
	index: number;
}> = ({children, index}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const progress = spring({
		fps,
		frame: frame - index * 1,
		config: {
			damping: 200,
		},
	});
	const translateY = interpolate(progress, [0, 1], [800, 0]);
	return (
		<ListItem
			style={{
				transform: `translateY(${translateY}px)`,
			}}
		>
			{children}
		</ListItem>
	);
};
