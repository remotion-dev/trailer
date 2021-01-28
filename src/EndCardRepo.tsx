import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Title = styled.div`
	font-weight: 700;
	font-family: -apple-system, BlinkMacSystemFont;
	font-size: 30px;
	margin-bottom: 5px;
`;

const Link = styled.div`
	font-weight: 700;
	font-size: 40px;
	font-family: -apple-system, BlinkMacSystemFont;
	border-bottom: 3px solid black;
`;

export const EndCardRepo: React.FC = () => {
	return (
		<Container>
			<Title>This video is open source:</Title>
			<Link>github.com/JonnyBurger/remotion-trailer</Link>
		</Container>
	);
};
