import 'hack-font/build/web/hack.css';
import styled from 'styled-components';

const Container = styled.div`
	background-color: #252a2e;
	color: white;
	padding: 20px;
	padding-left: 60px;
	padding-top: 40px;
	padding-bottom: 40px;
	padding-right: 60px;
	font-size: 60px;
	font-family: Hack;
	border-radius: 20px;
`;

export const InstallFrame: React.FC = () => {
	return (
		<Container>
			<span style={{color: '#5ef766'}}>➜ </span>
			<span style={{color: '#5ef8fa'}}>~ </span> yarn create video
		</Container>
	);
};
