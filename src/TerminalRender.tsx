import {
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import {Terminal} from './Terminal';
import fileicon from './videothumbnail.png';

const Container = styled.div`
	background-color: white;
	flex: 1;
	display: flex;
`;

export const TerminalRender: React.FC = () => {
	const {width, height, fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const progress = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});
	const fileProgress = spring({
		fps,
		frame: frame - 50,
		config: {
			damping: 200,
		},
	});
	const terminalScale = interpolate(progress, [0, 1], [0.8, 0.6]);
	const translateX = interpolate(fileProgress, [0, 1], [0, -600]);
	return (
		<Container>
			<div
				style={{
					width: width * 0.8,
					marginLeft: width * 0.1,
					height,
					display: 'flex',
					transform: `scale(${terminalScale}) translateX(${translateX}px)`,
					position: 'absolute',
				}}
			>
				<Terminal />
			</div>
			<Img
				src={fileicon}
				style={{
					width: 260,
					height: 340,
					position: 'absolute',
					top: height / 2 - 340 / 2,
					right: 300,
					transform: `scale(${fileProgress})`,
				}}
			/>
		</Container>
	);
};
