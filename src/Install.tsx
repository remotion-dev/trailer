import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import {InstallFrame} from './InstallFrame';
import {ExcalidrawYesThisWorks} from './YesThisWorks';

const Container = styled(AbsoluteFill)`
	background-color: white;
	justify-content: center;
	align-items: center;
`;

export const Install: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const progress = spring({
		frame: frame - 60,
		fps,
		config: {
			damping: 200,
		},
	});
	const arrowProgress = spring({
		frame: frame - 65,
		fps,
		config: {
			damping: 200,
		},
	});

	const framePosition = interpolate(progress, [0, 1], [1200, 50]);
	const arrowPosition = interpolate(arrowProgress, [0, 1], [1200, 50]);
	return (
		<Container>
			<div style={{transform: `translateY(${framePosition}px)`}}>
				<InstallFrame />
			</div>
			<div style={{height: 40}} />
			<div style={{transform: `translateY(${arrowPosition}px)`}}>
				<ExcalidrawYesThisWorks />
			</div>
		</Container>
	);
};
