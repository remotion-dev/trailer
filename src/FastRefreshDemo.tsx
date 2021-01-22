import {useVideoConfig, Video} from 'remotion';

export const FastRefreshDemo: React.FC = () => {
	const fastRefreshDemo = require('./fast-refresh-demo.webm');
	const {height} = useVideoConfig();
	return <Video src={fastRefreshDemo} style={{height}} />;
};
