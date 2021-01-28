import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import {AbsContainer} from './AbsContainer';
import {PricingFree} from './PricingFree';
import {PricingRight} from './PricingRight';

const Container = styled.div`
	flex: 1;
	background-color: white;
`;

export const Pricing: React.FC = () => {
	const {fps, width} = useVideoConfig();
	const frame = useCurrentFrame();
	const transitionProgress = spring({
		fps,
		frame: frame - 80,
		config: {
			damping: 200,
		},
	});

	const freeTranslateX = interpolate(
		transitionProgress,
		[0, 1],
		[0, -width / 4]
	);
	const rightTranslateX = interpolate(
		transitionProgress,
		[0, 1],
		[0, width / 4]
	);
	const rightOpacity = interpolate(transitionProgress, [0.6, 1], [0, 1]);

	return (
		<Container>
			<AbsContainer style={{transform: `translateX(${freeTranslateX}px)`}}>
				<PricingFree />
			</AbsContainer>
			<AbsContainer
				style={{
					transform: `translateX(${rightTranslateX}px)`,
					opacity: rightOpacity,
				}}
			>
				<PricingRight />
			</AbsContainer>
		</Container>
	);
};
