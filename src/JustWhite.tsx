import {AbsoluteFill} from 'remotion';

export const JustWhite: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
				boxShadow: '0 15px 20px rgba(0, 0, 0, 0.07)',
			}}
		/>
	);
};
