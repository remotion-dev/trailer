import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import {AbsContainer} from './AbsContainer';
import {EndCardRepo} from './EndCardRepo';
import {EndCardWebsite} from './EndCardWebsite';
import {EndCardYarn} from './EndCardYarn';

const Outer = styled(AbsContainer)`
	background-color: white;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`;

const Container = styled(AbsContainer)`
	background-color: rgba(0, 0, 0, 0.04);

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

const Panel = styled.div`
	flex: 1;
	background-color: white;
	border-radius: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 15px 20px rgba(0, 0, 0, 0.07);
`;

export const EndCard: React.FC = () => {
	const {fps} = useVideoConfig();
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
					<Panel style={{transform: `scale(${progress(0)})`}}>
						<EndCardYarn />
					</Panel>
				</Left>
				<div style={{width: 30}} />
				<Right>
					<Panel style={{transform: `scale(${progress(1)})`}}>
						<EndCardWebsite />
					</Panel>
					<div style={{height: 30}} />
					<Panel style={{transform: `scale(${progress(2)})`}}>
						<EndCardRepo />
					</Panel>
				</Right>
			</Container>
		</Outer>
	);
};
