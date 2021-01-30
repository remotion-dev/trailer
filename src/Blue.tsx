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
