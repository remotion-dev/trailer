import {AbsContainer} from './AbsContainer';

export const JustWhite: React.FC = () => {
	return (
		<AbsContainer
			style={{
				backgroundColor: 'white',
				boxShadow: '0 15px 20px rgba(0, 0, 0, 0.07)',
			}}
		/>
	);
};
