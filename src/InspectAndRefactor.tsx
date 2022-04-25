import {
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import {Inspect} from './Inspect';
import inspectandrefactor from './inspect-and-refactor.png';

const Container = styled.div`
	background-color: white;
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const start = 25;

export const InspectAndRefactor: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const progress = spring({
		fps,
		frame: frame - start,
		config: {
			damping: 200,
			stiffness: 200,
		},
	});

	const browserY = interpolate(progress, [0, 1], [0, -150]);
	const translateY = interpolate(progress, [0, 1], [1500, 0]);

	return (
		<Container>
			<div
				style={{
					transform: ` translateY(${browserY}px)`,
					position: 'absolute',
				}}
			>
				<Inspect />
			</div>
			<div style={{position: 'absolute', zIndex: 1}}>
				<Img
					src={inspectandrefactor}
					style={{width: 1400, transform: `translateY(${translateY}px)`}}
				/>
			</div>
		</Container>
	);
};
