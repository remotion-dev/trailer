import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';

const Container = styled.div`
	background-color: white;
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const Img = styled.img`
	width: 1300px;
`;

export const PullRequest: React.FC = () => {
	const pullRequest = require('./pull-request.png');

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
			<Img
				style={{
					transform: `scale(${scale})`,
				}}
				src={pullRequest}
			/>
		</Container>
	);
};
