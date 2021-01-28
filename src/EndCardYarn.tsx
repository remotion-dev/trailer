import styled from 'styled-components';

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
`;

export const EndCardYarn: React.FC = () => {
	return (
		<Container>
			<Title>Create your first video:</Title>
			<YarnCreateVideo>yarn create video</YarnCreateVideo>
		</Container>
	);
};
