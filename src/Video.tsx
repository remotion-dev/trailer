import {Composition} from 'remotion';
import {BestQualities} from './BestQualities';
import {CodeFrame} from './CodeFrame';
import {FastRefreshDemo} from './FastRefreshDemo';
import {Fork} from './Fork';
import {GoToGithub} from './GoToGithub';
import {HelloWorld} from './HelloWorld';
import {Howto} from './HowTo';
import {InspectAndRefactor} from './InspectAndRefactor';
import {Intro} from './Intro/Intro';
import {Logo} from './Logo/Logo';
import {Multithreaded} from './MultiThreaded';
import {PullRequest} from './PullRequest';
import {RemotionPlayerDemo} from './RemotionPlayerDemo';
import {Ssr} from './SSRMultithreaded';
import {TerminalRender} from './TerminalRender';
import {WebTechnologies} from './WebTechnologies';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={101 * 30}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="WebTechnologies"
				component={WebTechnologies}
				durationInFrames={1.5 * 30}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="CodeFrame"
				component={CodeFrame}
				durationInFrames={3 * 30}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					code: `
export const RemotionVideo = () => {
	return (
		<Composition
			id="CodeFrame"
			component={CodeFrame}
			durationInFrames={3 * 30}
			fps={30}
			width={1920}
			height={1080}
		/>
	);
}

					`.trim(),
					timing: [
						{
							line: 6,
							from: 0,
						},
					],
					title: 'Video.tsx',
				}}
			/>
			<Composition
				id="RemotionPlayerDemo"
				component={RemotionPlayerDemo}
				width={1920}
				height={1080}
				fps={30}
				durationInFrames={7 * 30}
			/>
			<Composition
				id="FastRefreshDemo"
				component={FastRefreshDemo}
				width={1920}
				height={1080}
				fps={30}
				durationInFrames={7 * 30}
			/>
			<Composition
				id="Intro"
				component={Intro}
				width={1920}
				height={1080}
				fps={30}
				durationInFrames={4 * 30}
			/>
			<Composition
				component={Logo}
				width={1920}
				height={1080}
				fps={30}
				durationInFrames={6 * 30}
				id="Logo"
			/>
			<Composition
				component={GoToGithub}
				width={1920}
				height={1080}
				fps={30}
				durationInFrames={6 * 30}
				id="GoToGithub"
			/>
			<Composition
				component={Fork}
				width={1920}
				height={1080}
				fps={30}
				durationInFrames={6 * 30}
				id="Fork"
			/>
			<Composition
				component={InspectAndRefactor}
				width={1920}
				height={1080}
				fps={30}
				durationInFrames={6 * 30}
				id="Inspect"
			/>
			<Composition
				component={PullRequest}
				width={1920}
				height={1080}
				fps={30}
				durationInFrames={6 * 30}
				id="PullRequest"
			/>
			<Composition
				component={Howto}
				width={1920}
				height={1080}
				fps={30}
				durationInFrames={6 * 30}
				id="Howto"
			/>
			<Composition
				component={TerminalRender}
				width={1920}
				height={1080}
				fps={30}
				durationInFrames={6 * 30}
				id="TerminalRender"
			/>
			<Composition
				component={Ssr}
				width={1920}
				height={1080}
				fps={30}
				durationInFrames={6 * 30}
				id="SSR"
			/>
			<Composition
				component={Multithreaded}
				width={1920}
				height={1080}
				fps={30}
				durationInFrames={6 * 30}
				id="Multithreaded"
			/>
			<Composition
				component={BestQualities}
				width={1920}
				height={1080}
				fps={30}
				durationInFrames={4 * 30}
				id="BestQualities"
			/>
		</>
	);
};
