import {AbsoluteFill, Sequence} from 'remotion';
import {Intro} from './Intro/Intro';
import {Logo} from './Logo/Logo';
import {TeaserCodeFrame} from './TeaseCodeFrame';
import {Transition} from './Transition';

export const Trailer: React.FC = () => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<Sequence from={0} durationInFrames={85}>
				<Intro offset={0} showText={false} />
			</Sequence>
			<Sequence from={75} durationInFrames={84}>
				<Transition type="in">
					<AbsoluteFill
						style={{
							overflow: 'hidden',
							boxShadow: '0 0 10px rgba(0, 0,0, 0.1)',
						}}
					>
						<Logo showText={false} offset={-20} textStartOffset={30} />
					</AbsoluteFill>
				</Transition>
			</Sequence>
			<Sequence from={152} durationInFrames={163}>
				<TeaserCodeFrame />
			</Sequence>
		</AbsoluteFill>
	);
};
