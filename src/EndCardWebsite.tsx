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
	background: linear-gradient(to right, #e01d67, #79367a);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
`;

export const EndCardWebsite: React.FC = () => {
	return (
		<Container>
			<Title>Read the documentation:</Title>
			<a
				href="https://remotion.dev"
				target="_blank"
				style={{
					textDecoration: 'none',
				}}
			>
				<Link>remotion.dev</Link>
			</a>
		</Container>
	);
};
