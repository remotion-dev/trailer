import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';

const Container = styled.div<{
	width: number;
	height: number;
}>`
	position: absolute;
	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;
`;

export const GlowingStroke: React.FC<{
	width: number;
	height: number;
	radius: number;
	color1: string;
	color2: string;
	offset: number;
}> = ({width, height, radius, color1, color2, offset}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const start = 40 + offset;
	const progress = spring({
		frame: frame - start,
		fps,
		config: {
			damping: 200,
			stiffness: 50,
			mass: 6,
		},
	});
	const circumference = width * 2 + height * 2;
	const strokeDashoffset = interpolate(
		progress,
		[0, 1],
		[0, -circumference + 250]
	);
	const opacity = (() => {
		if (frame < start + 10) {
			return interpolate(frame, [start, start + 10], [0, 1], {
				extrapolateLeft: 'clamp',
				extrapolateRight: 'clamp',
			});
		}
		return interpolate(progress, [0.9, 0.95], [1, 0]);
	})();
	const gId = `g-${color1}-${color2}`;
	return (
		<Container width={width} height={height}>
			<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
				<defs>
					<linearGradient id={gId}>
						<stop stopColor={color1} offset={0} opacity={1} />
						<stop stopColor={color2} offset={1} opacity={1} />
					</linearGradient>
				</defs>
				<rect
					width={width - 6}
					height={height - 6}
					x={3}
					y={3}
					rx={radius}
					ry={radius}
					stroke={`url(#${gId})`}
					fill="none"
					strokeDasharray={`250 ${circumference - 250}`}
					strokeDashoffset={strokeDashoffset}
					strokeLinecap="round"
					strokeWidth={6}
					style={{
						opacity,
					}}
				/>
			</svg>
		</Container>
	);
};
