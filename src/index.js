import React from 'react';
import { render } from 'react-dom';
import StreamedianPlayer from './StreamedianPlayer';
import './index.css';

const App = () => (
	<div>
		<StreamedianPlayer id="test_video">
			 {/*<source src="rtsp://192.168.3.12/Streaming/Channels/101" type="application/x-rtsp" />*/}
		</StreamedianPlayer>
	</div>
);

render(<App />, document.getElementById('root'));
