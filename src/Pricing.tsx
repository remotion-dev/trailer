import styled from 'styled-components';
import {PricingFree} from './PricingFree';

const Container = styled.div`
	flex: 1;
	background-color: white;
`;

export const Pricing: React.FC = () => {
	return (
		<Container>
			<PricingFree />
		</Container>
	);
};
