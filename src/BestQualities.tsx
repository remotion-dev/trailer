import styled from 'styled-components';
import {AbsContainer} from './AbsContainer';
import {Feature} from './Qualities';

const Container = styled(AbsContainer)`
	background-color: white;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Title = styled.div`
	font-weight: bold;
	font-size: 65px;
	line-height: 1.1;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	margin-bottom: 30px;
`;

const ListItem = styled.div`
	font-size: 40px;
	line-height: 1.5;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
	return (
		<Container>
			<Row>
				<Left>
					<Title>
						Benefits of <br /> programming
					</Title>
					{programmingFeatures.map((f, index) => {
						return <Feature index={index}>{f}</Feature>;
					})}
				</Left>
				<Spacer />
				<Right>
					<Title>
						Video editing <br />
						features
					</Title>
					{[
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
							<Feature index={index + programmingFeatures.length + 30}>
								{f}
							</Feature>
						);
					})}
				</Right>
			</Row>
		</Container>
	);
};
