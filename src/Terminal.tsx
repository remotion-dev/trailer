import 'hack-font/build/web/hack.css';
import {interpolate, useCurrentFrame} from 'remotion';
import styled from 'styled-components';

const Container = styled.div`
	background-color: #252a2e;
	flex: 1;
	border-radius: 20px;
	padding-left: 60px;
	padding-top: 40px;
	font-family: Hack;
	color: white;
	font-size: 30px;
	line-height: 1.8;
	pre {
		margin: 0;
	}
`;

const command = 'npm run build';

export const Terminal: React.FC = () => {
	const frame = useCurrentFrame();
	const npmStart = command.length + 2;
	const renderStart = npmStart + 3;
	const renderBars = 20;
	const renderProgress = interpolate(
		frame,
		[renderStart, renderStart + renderBars],
		[0, renderBars],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const stitchStart = renderStart + renderBars;
	const readyStart = stitchStart + 3;

	return (
		<Container>
			<div>
				<span style={{color: '#5ef766'}}>➜ </span>
				<span style={{color: '#5ef8fa'}}>remotion-trailer</span>
				<span /> {command.slice(0, frame)}
			</div>
			{frame > npmStart ? (
				<>
					<div>
						{'>'} remotion-template@1.0.0 build
						/Users/jonnyburger/remotion-trailer
					</div>
					<div>{'>'} ts-node render.ts HelloWorld out.mp4</div>
					<br />
					<div>📦 (1/3) Bundling video...</div>
				</>
			) : null}
			{frame > renderStart ? (
				<>
					<div>
						📼 (2/3) Rendering frames{'...'.slice(0, frame - renderStart)}
					</div>
					{renderProgress < renderBars ? (
						<pre>
							|{'='.repeat(renderProgress)}
							{' '.repeat(renderBars - renderProgress)}|{' '}
							{`(${renderProgress}/${renderBars})`}
						</pre>
					) : null}
				</>
			) : null}
			{renderProgress === renderBars ? (
				<>
					<div>
						🧵 (3/3) Stitching frames together
						{'...'.slice(0, frame - stitchStart)}
					</div>{' '}
					<br />
				</>
			) : null}
			{frame > readyStart ? (
				<div>▶️ Your video is now ready: out.mp4</div>
			) : null}
		</Container>
	);
};
