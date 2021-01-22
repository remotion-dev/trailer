import styled from 'styled-components';

const Front = styled.div<{
	rotate: number;
}>`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 2;
	clip-path: inset(0px 0 0px 50%);
	transform: rotate(${(props) => props.rotate}deg);
`;

const Back = styled.div<{
	rotate: number;
}>`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 0;
	clip-path: inset(0px 50% 0px 0);
	transform: rotate(${(props) => props.rotate}deg);
`;

export const ZIndexEffect: React.FC<{
	rotate: number;
}> = ({children, rotate}) => {
	return (
		<>
			<Front rotate={rotate}>{children}</Front>
			<Back rotate={rotate}>{children}</Back>
		</>
	);
};
