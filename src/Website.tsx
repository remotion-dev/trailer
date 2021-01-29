import styled from 'styled-components';
import {AbsContainer} from './AbsContainer';
import remotionWebsite from './remotion-website.png';

const Container = styled(AbsContainer)`
	background-color: white;
	justify-content: center;
	align-items: center;
`;

const Subtitle = styled.div`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 400;
	font-size: 65px;
	line-height: 1.5;
	font-weight: 700;
	text-align: center;
`;

export const Website: React.FC = () => {
	return (
		<Container>
			<Subtitle>www.remotion.dev</Subtitle>
			<br />
			<br />
			<img src={remotionWebsite} style={{width: 1400}} />
		</Container>
	);
};
