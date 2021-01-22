import {Audio, Sequence, useCurrentFrame} from 'remotion';
import {CodeFrame} from './CodeFrame';
import {FastRefreshDemo} from './FastRefreshDemo';
import {GoToGithub} from './GoToGithub';
import {Intro} from './Intro/Intro';
import {Logo} from './Logo/Logo';
import {RemotionPlayerDemo} from './RemotionPlayerDemo';
import voiceover from './voiceover.mp3';
import {WebTechnologies} from './WebTechnologies';

export const HelloWorld: React.FC = () => {
	const frame = useCurrentFrame();

	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<div>
				<Sequence from={0} durationInFrames={4.5 * 30}>
					<Intro />
				</Sequence>
				<Sequence from={4.5 * 30} durationInFrames={60}>
					<GoToGithub />
				</Sequence>
				<Sequence from={600} durationInFrames={150}>
					<Logo />
				</Sequence>
				<Sequence from={750} durationInFrames={180}>
					<CodeFrame
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
				<Sequence from={930} durationInFrames={240}>
					<CodeFrame
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
				<Sequence from={1170} durationInFrames={90}>
					<WebTechnologies />
				</Sequence>
				<Sequence from={1260} durationInFrames={6 * 30}>
					<RemotionPlayerDemo />
				</Sequence>
				<Sequence from={1260 + 6 * 30} durationInFrames={5 * 30}>
					<FastRefreshDemo />
				</Sequence>
				<Audio src={voiceover} />
			</div>
		</div>
	);
};
