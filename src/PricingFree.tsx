import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import {AbsContainer} from './AbsContainer';

const Container = styled(AbsContainer)`
	text-align: center;
	justify-content: center;
	align-items: center;
`;

const Title = styled.div`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
`;

const Subtitle = styled.div`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 400;
	font-size: 40px;
	width: 500px;
	line-height: 1.5;
`;

export const PricingFree: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const progress = (i: number) =>
		spring({
			fps,
			frame: frame - 2 * i,
			config: {
				damping: 200,
				overshootClamping: true,
			},
		});
	return (
		<Container>
			<Title>
				{'Free'.split('').map((a, i) => {
					// eslint-disable-next-line react/no-array-index-key
					return (
						<span
							key={a + i}
							style={{
								fontSize: Math.round(
									interpolate(progress(i), [0, 1], [0, 250])
								),
							}}
						>
							{a}
						</span>
					);
				})}
			</Title>
			<Subtitle>Individuals, small companies, </Subtitle>
		</Container>
	);
};
