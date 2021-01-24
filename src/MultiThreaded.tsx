import styled from 'styled-components';
import {Cpu} from './Cpu';

const Container = styled.div`
	background-color: white;
	flex: 1;
	justify-content: center;
	align-items: center;
	display: flex;
`;

const Title = styled.h2`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 60px;
	font-weight: 700;
	text-align: center;
	margin-bottom: 0;
`;

const Column = styled.div`
	flex-direction: column;
	display: flex;
	align-items: center;
`;

export const Multithreaded: React.FC = () => {
	return (
		<Container>
			<Column>
				<Cpu />
				<Title>Multithreaded rendering</Title>
			</Column>
		</Container>
	);
};
