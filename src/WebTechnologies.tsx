import {chunk} from 'lodash';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';

interface Technology {
	name: string;
	color: string;
}

const Container = styled.div`
	padding: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff;
`;

const Title = styled.div`
	font-weight: bold;
	font-size: 120px;
	line-height: 1em;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const technologies: Technology[] = [
	{
		name: 'HTML',
		color: '#f16529',
	},
	{
		name: 'CSS',
		color: '#16a1dc',
	},
	{name: 'JS', color: '#fddc22'},
	{
		name: 'SVG',
		color: '#27ae60',
	},
	{
		name: 'Canvas',
		color: '#9b59b6',
	},
	{
		name: 'WebGL',
		color: '#91191e',
	},
	{
		name: 'Three.JS',
		color: '#000',
	},
	{
		name: 'styled-components',
		color: '#e59ad9',
	},
	{
		name: 'Tailwind',
		color: '#19b4b9',
	},
	{
		name: 'Bootstrap',
		color: '#573f7e',
	},
	{
		name: 'jQuery',
		color: '#0268ad',
	},
];

export const WebTechnologies: React.FC = () => {
	const config = useVideoConfig();
	const frame = useCurrentFrame();
	const chunks = chunk(technologies, Math.ceil(technologies.length / 2));
	return (
		<Container style={{flex: 1}}>
			<div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
				{chunks.map((ch) => {
					return (
						<div style={{flex: 1}}>
							{ch.map((t, i) => {
								const pos = spring({
									fps: config.fps,
									frame: frame - i * 2,
									config: {
										stiffness: 100,
										mass: 0.5,
										damping: 50,
									},
								});
								return (
									<Title
										style={{
											color: t.color,
											transform: `translateY(${interpolate(
												pos,
												[0, 1],
												[200, 0]
											)}px)`,
											opacity: pos,
										}}
									>
										{t.name}
									</Title>
								);
							})}
						</div>
					);
				})}
			</div>
		</Container>
	);
};
