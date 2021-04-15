import {
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import github from './inspect.png';

const Container = styled.div`
	background-color: white;
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const Inspect: React.FC = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const progress = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});

	const scale = interpolate(progress, [0, 1], [3.7, 1]);
	const translateY = interpolate(progress, [0, 1], [125, 0]);
	const translateX = interpolate(progress, [0, 1], [120, 0]);

	return (
		<Container>
			<Img
				style={{
					transform: `scale(${scale}) translateY(${translateY}px) translateX(${translateX}px)`,
				}}
				src={github}
			/>
		</Container>
	);
};
