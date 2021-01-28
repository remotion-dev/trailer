import styled from 'styled-components';
import {Triangle} from './Logo/Triangle';

const Container = styled.div`
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
`;

const Title = styled.div`
	font-weight: 700;
	font-family: -apple-system, BlinkMacSystemFont;
	font-size: 30px;
	margin-bottom: 5px;
`;

const YarnCreateVideo = styled.div`
	font-weight: 700;
	font-size: 60px;
	font-family: -apple-system, BlinkMacSystemFont;
	background: linear-gradient(to right, #4290f5, #42e9f5);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
`;

export const EndCardYarn: React.FC = () => {
	return (
		<Container>
			<div style={{height: 150, width: 150, transform: `rotate(3600deg)`}}>
				<Triangle opacity={1} scale={1} size={150} />
			</div>
			<br />
			<br />
			<Title>Create your first video:</Title>
			<YarnCreateVideo>yarn create video</YarnCreateVideo>
		</Container>
	);
};
