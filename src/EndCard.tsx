import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import {EndCardRepo} from './EndCardRepo';
import {EndCardWebsite} from './EndCardWebsite';
import {EndCardYarn} from './EndCardYarn';
import {GlowingStroke} from './GlowingStroke';

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

const Right = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const RADIUS = 30;

const Panel = styled.div`
	position: absolute;
	background-color: white;
	border-radius: ${RADIUS}px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 15px 20px rgba(0, 0, 0, 0.07);
`;

const Centered = styled(AbsoluteFill)`
	justify-content: center;
	align-items: center;
`;

export const EndCard: React.FC = () => {
	const {fps, width, height} = useVideoConfig();

	const PADDING = 40;
	const SPACING = 30;
	const PANEL_WIDTH = (width - PADDING * 2 - SPACING) / 2;
	const BIG_PANEL_HEIGHT = height - PADDING * 2;
	const SMALL_PANEL_HEIGHT = (height - PADDING * 2 - SPACING) / 2;
	const frame = useCurrentFrame();
	const progress = (i: number) =>
		spring({
			fps,
			frame: frame - i * 10 - 15,
			config: {
				damping: 100,
				mass: 2,
			},
		});

	return (
		<Outer>
			<Container>
				<Left>
					<Panel
						style={{
							transform: `scale(${progress(0)})`,
							height: BIG_PANEL_HEIGHT,
							width: PANEL_WIDTH,
						}}
					>
						<Centered style={{opacity: progress(1)}}>
							<GlowingStroke
								width={PANEL_WIDTH}
								height={BIG_PANEL_HEIGHT}
								radius={30}
								color1="#4290f5"
								color2="#42e9f5"
								offset={15}
							/>
							<EndCardYarn />
						</Centered>
					</Panel>
				</Left>
				<div style={{width: 30}} />
				<Right>
					<Panel
						style={{
							transform: `scale(${progress(1)})`,
							width: PANEL_WIDTH,
							height: SMALL_PANEL_HEIGHT,
						}}
					>
						<Centered style={{opacity: progress(2)}}>
							<GlowingStroke
								width={PANEL_WIDTH}
								height={SMALL_PANEL_HEIGHT}
								radius={30}
								color1="#e01d67"
								color2="#79367a"
								offset={35}
							/>
							<EndCardWebsite />
						</Centered>
					</Panel>
					<div style={{height: 30}} />
					<Panel
						style={{
							transform: `scale(${progress(2)})`,
							width: PANEL_WIDTH,
							height: SMALL_PANEL_HEIGHT,
							top: SMALL_PANEL_HEIGHT + SPACING + PADDING,
						}}
					>
						<Centered style={{opacity: progress(3)}}>
							<GlowingStroke
								width={PANEL_WIDTH}
								height={SMALL_PANEL_HEIGHT}
								radius={30}
								color1="#f5ad43"
								color2="#fd764a"
								offset={55}
							/>
							<EndCardRepo />
						</Centered>
					</Panel>
				</Right>
			</Container>
		</Outer>
	);
};
