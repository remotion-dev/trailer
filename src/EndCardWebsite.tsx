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
	font-size: 60px;
	font-family: -apple-system, BlinkMacSystemFont;
	border-bottom: 3px solid black;
`;

export const EndCardWebsite: React.FC = () => {
	return (
		<Container>
			<Title>Read the documentation:</Title>
			<Link>remotion.dev</Link>
		</Container>
	);
};
