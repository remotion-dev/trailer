import 'hack-font/build/web/hack.css';
import Highlight, {defaultProps} from 'prism-react-renderer';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import './prism.css';

const Pre = styled.pre<{
	width: number;
}>`
	text-align: left;
	margin: 1em 0;
	font-size: 40px;
	width: ${(props) => props.width}px;
`;

const Line = styled.div`
	display: table-row;
`;

const LineContent = styled.span`
	display: table-cell;
`;

const Container = styled.div`
	flex: 1;
	justify-content: center;
	align-items: center;
	display: flex;
`;

const Frame = styled.div`
	border: 2px solid rgba(0, 0, 0, 0.14);
	border-radius: 20px;
	background-color: white;

	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Title = styled.div`
	padding: 20px;
	text-align: center;
	font-size: 28px;
`;

const getProgressOfLine = ({
	line,
	frame,
	fps,
	timing,
}: {
	line: number;
	frame: number;
	fps: number;
	timing: Timing[];
}) => {
	const segment = timing.find((t) => t.line === line);
	if (!segment) {
		return 1;
	}
	return spring({
		fps,
		frame: frame - segment.from,
		config: {
			stiffness: 200,
			damping: 100,
			mass: 0.5,
			overshootClamping: true,
		},
	});
};

type Timing = {
	line: number;
	from: number;
};

export const CodeFrame: React.FC<{
	code: string;
	timing: Timing[];
	title: string;
	width: number;
}> = ({code, timing, title, width}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	return (
		<Container>
			<Frame>
				<Title>{title}</Title>
				<div>
					<Highlight
						{...defaultProps}
						theme={undefined}
						code={code}
						language="tsx"
					>
						{({className, style, tokens, getLineProps, getTokenProps}) => (
							<Pre width={width} className={className} style={style}>
								{tokens.map((line, i) => {
									return (
										<Line
											// eslint-disable-next-line react/no-array-index-key
											key={i}
											{...getLineProps({line, key: i})}
											style={{
												opacity: getProgressOfLine({
													line: i,
													frame,
													fps,
													timing,
												}),
												lineHeight: interpolate(
													getProgressOfLine({
														line: i,
														frame,
														fps,
														timing,
													}),
													[0, 1],
													[0, 1.53]
												),
												fontSize:
													getProgressOfLine({
														line: i,
														frame,
														fps,
														timing,
													}) + 'em',
											}}
										>
											<LineContent>
												{line.map((token, key) => {
													const props = getTokenProps({token, key});
													return (
														<span
															// eslint-disable-next-line react/no-array-index-key
															key={key}
															{...props}
															style={{
																fontSize:
																	props.children.trim() === '' ? 40 : '1em',
															}}
														/>
													);
												})}
											</LineContent>
										</Line>
									);
								})}
							</Pre>
						)}
					</Highlight>
				</div>
			</Frame>
		</Container>
	);
};
