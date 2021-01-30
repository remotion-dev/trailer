import {AbsoluteFill} from 'remotion';
import styled from 'styled-components';
import {DockerIcon, Feature, GithubIcon, NodeIcon} from './Feature';

const Container = styled(AbsoluteFill)`
	background-color: white;
	justify-content: center;
	align-items: center;
`;

export const Ssr: React.FC = () => {
	return (
		<Container>
			<Feature
				title="Server-side rendering"
				features={[
					{
						name: 'Node.JS',
						icon: <NodeIcon />,
					},
					{
						name: 'Docker',
						icon: <DockerIcon />,
					},
					{
						name: 'Actions',
						icon: <GithubIcon />,
					},
				]}
			/>
		</Container>
	);
};
