import {AbsoluteFill} from 'remotion';
import styled from 'styled-components';

const Container = styled(AbsoluteFill)`
	text-align: center;
	justify-content: center;
	align-items: center;
`;

const TitleContainer = styled.div`
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Title = styled.div`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
	background: linear-gradient(to right, #e01d67, #79367a);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
	color: #3b5998;
	font-weight: 800;
	font-size: 120px;
	line-height: 1;
`;

const Subtitle = styled.div`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 400;
	font-size: 45px;
	font-weight: 700;
	width: 900px;
	line-height: 1.5;
`;

export const PricingRight: React.FC = () => {
	return (
		<Container>
			<TitleContainer>
				<Title style={{transform: `translateY(30px)`}}>
					Licensing <br /> model
				</Title>
			</TitleContainer>
			<Subtitle style={{transform: `translateY(20px)`}}>
				with support, for companies with <br /> 3 or more people
			</Subtitle>
		</Container>
	);
};
