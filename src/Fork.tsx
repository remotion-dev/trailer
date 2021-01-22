import {spring, useCurrentFrame, useVideoConfig, Video} from 'remotion';
import styled from 'styled-components';

const Container = styled.div`
	background-color: #fafbfc;
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const Vid = styled(Video)`
	clip-path: inset(15% 13% 15% 23%);
	position: absolute;
`;

export const Fork: React.FC = () => {
	const fork = require('./fork-trimmed.webm');

	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const scale = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});
	return (
		<Container>
			<Vid
				style={{
					transform: `scale(${scale * 2})`,
				}}
				src={fork}
			/>
		</Container>
	);
};
