import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import {CodeFrame} from './CodeFrame';

const code = `
const Announcement: React.FC = () => {
  const release = new Date('2021-02-08 17:00 UTC');
  \n
  if (Date.now() < release.getTime()) {
    return null;
  }
  \n
  return (
    <Title>Introducing REMOTION ⚛️!</Title>
  );
}`;

const BlurryContainer = styled(AbsoluteFill)`
	.token.constant {
		background-color: rgba(0, 0, 0, 0.2);
		color: rgba(0, 0, 0, 0.2);
		-webkit-filter: blur(8px);
	}
`;

export const TeaserCodeFrame: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();
	const scale = spring({
		frame,
		fps,
		config: {
			damping: 200,
		},
	});
	const scaleOut = spring({
		frame: frame - durationInFrames + 13,
		fps,
		config: {
			mass: 0.4,
			damping: 100,
		},
		from: 0,
		to: 1,
	});
	return (
		<BlurryContainer style={{transform: `scale(${scale * (1 - scaleOut)})`}}>
			<CodeFrame
				code={code}
				width={1400}
				title="coming-soon.tsx"
				timing={[
					{line: 2, from: 20},

					{line: 4, from: 50},
					{line: 5, from: 50},
					{line: 6, from: 50},
					{line: 7, from: 50},

					{line: 9, from: 80},
					{line: 10, from: 80},
					{line: 11, from: 80},
					{line: 12, from: 80},
				]}
			/>
		</BlurryContainer>
	);
};
