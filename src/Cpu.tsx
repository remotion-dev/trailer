import {mix} from 'polished';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';

const colors = ['#42e9f5', '#4290f5'];

const Container = styled.div`
	height: 350px;
	width: 350px;
	border: 10px solid ${colors[1]};
	border-radius: 20px;
	display: flex;
	padding: 5px;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1;
`;

const Core = styled.div<{
	x: number;
	y: number;
}>`
	flex: 1;
	background-color: ${(props) => {
		const g = interpolate(props.x + props.y, [0, 6], [0, 1]);
		return mix(g, colors[0], colors[1]);
	}};
	margin: 5px;
	border-radius: 6px;
`;

const CoreContainer: React.FC<{
	x: number;
	y: number;
}> = ({x, y}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const offset = x * 4 + y;
	const progress = spring({
		fps,
		frame: frame - Number(offset),
	});
	return <Core style={{transform: `scale(${progress})`}} x={x} y={y} />;
};

export const Cpu: React.FC = () => {
	return (
		<Container>
			<Column>
				{new Array(4).fill(true).map((k, i) => {
					return (
						<Row>
							{new Array(4).fill(true).map((x, j) => {
								return <CoreContainer x={i} y={j} />;
							})}
						</Row>
					);
				})}
			</Column>
		</Container>
	);
};
