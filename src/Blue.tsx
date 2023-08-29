import {AbsoluteFill} from 'remotion';

export const Blue: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				background: 'linear-gradient(to right, #4290f5, #42e9f5)',
				boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
			}}
		/>
	);
};
const Outer = styled(AbsoluteFill)`
	background-color: white;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
	background-color: rgba(0, 0, 0, 0.04);
	display: flex;
	flex: 1;
	flex-direction: row;
	padding: 40px;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
`;
