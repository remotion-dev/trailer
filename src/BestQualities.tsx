import {
	AbsoluteFill,
	Img,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import {Feature} from './Qualities';
import remotionLogo from './remotion-logo.png';

const Container = styled(AbsoluteFill)`
	background-color: white;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Left = styled.div``;

const Right = styled.div`
	padding-right: 100px;
`;

const Spacer = styled.div`
	width: 500px;
`;

const Row = styled.div`
	flex-direction: row;
	display: flex;
`;

const programmingFeatures = [
	'Benefits of\nprogramming',
	'Type safety',
	'Testability',
	'Server-side rendering',
	'Continuous rendering',
	'Continuous delivery',
	'Git version control',
	'Parametrization',
	'Fast Refresh',
	'Package ecosystem',
];

export const BestQualities: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const logoProgress = spring({
		frame: frame - 180,
		fps,
		config: {
			damping: 200,
		},
	});

	return (
		<Container>
			<Row>
				<Left>
					{programmingFeatures.map((f, index) => {
						return (
							<Feature
								color1="#f5ad43"
								color2="#fd764a"
								title={index === 0}
								x={500}
								index={index + 40}
								fadeOutIndex={index * 0.66}
							>
								{f}
							</Feature>
						);
					})}
				</Left>
				<Spacer />
				<Right>
					{[
						'Video editing\nfeatures',
						'Visual Preview',
						'Timeline Scrubbing',
						'Video footage export',
						'Animation primitives',
						'Composition primitives',
						'Layers',
						'Dynamic FPS',
						'Audio support (Alpha)',
						'MP4 export',
					].map((f, index) => {
						return (
							<Feature
								color1="#5757f5"
								color2="#00005b"
								title={index === 0}
								x={-500}
								index={index + programmingFeatures.length + 80}
								fadeOutIndex={index * 0.66}
							>
								{f}
							</Feature>
						);
					})}
				</Right>
			</Row>
			<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
				<Img
					src={remotionLogo}
					style={{
						height: 400,
						width: 400,
						transform: `scale(${logoProgress})`,
					}}
				/>
			</AbsoluteFill>
		</Container>
	);
};
