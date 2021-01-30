import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';

const Container = styled(AbsoluteFill)`
	text-align: center;
	justify-content: center;
	align-items: center;
`;

const TitleContainer = styled.div`
	height: 300px;
`;

const Title = styled.div`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
	background: linear-gradient(to right, #4290f5, #42e9f5);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
	color: #3b5998;
	font-weight: 700;
`;

const Subtitle = styled.div`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 400;
	font-size: 45px;
	width: 900px;
	line-height: 1.5;
	font-weight: 700;
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

	const subtitleProgress = spring({
		fps,
		frame: frame - 40,
		config: {
			damping: 200,
			overshootClamping: true,
		},
	});
	const textScale = interpolate(subtitleProgress, [0, 1], [1, 0.7]);
	const subtitleTranslate = interpolate(subtitleProgress, [0, 1], [0, 20]);
	return (
		<Container>
			<TitleContainer>
				<Title
					style={{
						transform: `scale(${textScale})`,
					}}
				>
					{'Free'.split('').map((a, i) => {
						return (
							<span
								key={a + i}
								style={{
									fontSize: Math.round(
										interpolate(progress(i), [0, 0.97], [0, 300], {
											extrapolateRight: 'clamp',
										})
									),
								}}
							>
								{a}
							</span>
						);
					})}
				</Title>
			</TitleContainer>

			<Subtitle
				style={{
					opacity: subtitleProgress,
					transform: `translateY(${subtitleTranslate}px)`,
				}}
			>
				For individuals, small companies, <br /> non-profits & education
			</Subtitle>
		</Container>
	);
};
