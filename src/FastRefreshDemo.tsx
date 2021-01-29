import {useVideoConfig, Video} from 'remotion';
import fastRefreshDemo from './fast-refresh-demo.webm';

export const FastRefreshDemo: React.FC = () => {
	const {height} = useVideoConfig();
	return <Video src={fastRefreshDemo} style={{height}} />;
};
