import {AbsoluteFill, Audio, Sequence, useCurrentFrame} from 'remotion';
import {BestQualities} from './BestQualities';
import {Blue} from './Blue';
import {CodeFrame} from './CodeFrame';
import {EndCard} from './EndCard';
import {FadeTransition} from './FadeTransition';
import {FastRefreshDemo} from './FastRefreshDemo';
import {Fork} from './Fork';
import {GoToGithub} from './GoToGithub';
import {Howto} from './HowTo';
import {InspectAndRefactor} from './InspectAndRefactor';
import {Install} from './Install';
import {Intro} from './Intro/Intro';
import {JustWhite} from './JustWhite';
import {Logo} from './Logo/Logo';
import {Multithreaded} from './MultiThreaded';
import {OpenSource} from './OpenSource';
import {Pricing} from './Pricing';
import {PullRequest} from './PullRequest';
import {RemotionPlayerDemo} from './RemotionPlayerDemo';
import {Ssr} from './SSRMultithreaded';
import {TerminalRender} from './TerminalRender';
import {Transition} from './Transition';
import voiceover from './voiceover-no-music.mp3';
import {Website} from './Website';
import {WebTechnologies} from './WebTechnologies';

export const Main: React.FC = () => {
	const frame = useCurrentFrame();

	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<div>
				<Sequence from={0} durationInFrames={120 + 8}>
					<Transition type="out">
						<Intro showText offset={0} />
					</Transition>
				</Sequence>
				<Sequence from={120} durationInFrames={60}>
					<Transition type="in">
						<GoToGithub />
					</Transition>
				</Sequence>
				<Sequence from={180} durationInFrames={40}>
					<Fork />
				</Sequence>
				<Sequence from={220} durationInFrames={78}>
					<Transition type="out">
						<InspectAndRefactor />
					</Transition>
				</Sequence>
				<Sequence from={290} durationInFrames={60}>
					<Transition type="in">
						<PullRequest />
					</Transition>
				</Sequence>
				<Sequence from={350} durationInFrames={90}>
					<Intro showText offset={-40} />
				</Sequence>
				<Sequence from={440} durationInFrames={58}>
					<Transition type="out">
						<AbsoluteFill>
							<Howto />
						</AbsoluteFill>
					</Transition>
				</Sequence>
				<Sequence from={490} durationInFrames={170}>
					<Transition type="in">
						<AbsoluteFill style={{overflow: 'hidden'}}>
							<Logo showText offset={0} textStartOffset={0} />
						</AbsoluteFill>
					</Transition>
				</Sequence>
				<Sequence from={660} durationInFrames={190}>
					<CodeFrame
						width={1200}
						title="Video.tsx"
						code={`
export const RemotionVideo = () => {
	return (
		<Composition
			id="MyVideo"
			component={MyVideo}
			durationInFrames={90}
			fps={30}
			width={1920}
			height={1080}
		/>
	);
}

					`.trim()}
						timing={[
							{
								line: 5,
								from: 50,
							},
							{
								line: 6,
								from: 75,
							},
							{
								line: 7,
								from: 110,
							},
							{
								line: 8,
								from: 115,
							},
						]}
					/>
				</Sequence>
				<Sequence from={850} durationInFrames={240}>
					<CodeFrame
						width={1200}
						title="MyVideo.tsx"
						code={`
export const MyVideo = () => {
	const frame = useCurrentFrame() // ${frame}
${'    '}
	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}}>
			Frame number {frame} 🔥
		</div>
	)
}

									`.trim()}
						timing={[
							{
								line: 1,
								from: 50,
							},
							{
								line: 3,
								from: 170,
							},
							{
								line: 4,
								from: 170,
							},
							{
								line: 5,
								from: 170,
							},
							{
								line: 6,
								from: 170,
							},
							{
								line: 7,
								from: 170,
							},
							{
								line: 8,
								from: 170,
							},
							{
								line: 9,
								from: 170,
							},
							{
								line: 10,
								from: 170,
							},
							{
								line: 11,
								from: 170,
							},
						]}
					/>
				</Sequence>
				<Sequence from={1090} durationInFrames={70}>
					<WebTechnologies />
				</Sequence>
				<Sequence from={1160} durationInFrames={180}>
					<RemotionPlayerDemo />
				</Sequence>
				<Sequence from={1340} durationInFrames={180}>
					<FastRefreshDemo />
				</Sequence>
				<Sequence from={1520} durationInFrames={128}>
					<Transition type="out">
						<TerminalRender />
					</Transition>
				</Sequence>
				<Sequence from={1640} durationInFrames={80 + 9}>
					<Transition type="in">
						<Transition type="out">
							<Ssr />
						</Transition>
					</Transition>
				</Sequence>
				<Sequence from={1720} durationInFrames={120}>
					<Transition type="in">
						<FadeTransition type="out" duration={9}>
							<Multithreaded />
						</FadeTransition>
					</Transition>
				</Sequence>
				<Sequence from={1840} durationInFrames={240}>
					<BestQualities />
				</Sequence>
				<Sequence from={2080} durationInFrames={100}>
					<FadeTransition type="out" duration={5}>
						<FadeTransition type="in" duration={5}>
							<OpenSource />
						</FadeTransition>
					</FadeTransition>
				</Sequence>
				<Sequence from={2180} durationInFrames={150}>
					<Pricing />
				</Sequence>
				<Sequence from={2330 - 10} durationInFrames={100}>
					<Transition type="in">
						<Blue />
					</Transition>
				</Sequence>
				<Sequence from={2330} durationInFrames={180 + 8}>
					<Transition type="in">
						<Transition type="out">
							<Install />
						</Transition>
					</Transition>
				</Sequence>
				<Sequence from={2510} durationInFrames={138}>
					<Transition type="in">
						<Transition type="out">
							<Website />
						</Transition>
					</Transition>
				</Sequence>
				<Sequence from={2640} durationInFrames={289}>
					<Transition type="in">
						<EndCard />
					</Transition>
				</Sequence>
				<Sequence from={2920} durationInFrames={14}>
					<Transition type="in">
						<JustWhite />
					</Transition>
				</Sequence>
				<Audio src={voiceover} />
			</div>
		</div>
	);
};
