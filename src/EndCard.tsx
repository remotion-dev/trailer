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

const Container = styled.div`import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
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
