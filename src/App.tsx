import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';

interface FancyTextProps {
	text: string;
}

const FancyText: React.FC<FancyTextProps> = ({ text }) => {
	return (
		<div className="fancy-text">
			<h2 className="fancy-text__subheading">{text}</h2>
		</div>
	);
};

interface ContentWidthProps {
	maxWidth: number;
	component: any;
}

const ContentWidth: React.FC<ContentWidthProps> = ({ maxWidth, component }) => {
	const myStyle = {
		'--max-width': `${maxWidth}px`,
	} as React.CSSProperties;
	return (
		<div className="content-width" style={myStyle}>
			<div className="content-width__wrapper">{component}</div>
		</div>
	);
};

function App() {
	return (
		<>
			<h1>React Components</h1>

			<ContentWidth
				maxWidth={794}
				component={<FancyText text="Do. Learn. Grow." />}
			/>

			<ContentWidth
				maxWidth={850}
				component={<FancyText text="A Design System You Can Grow With" />}
			/>

			<ContentWidth
				maxWidth={794}
				component={<FancyText text="Styles that won't block you in!" />}
			/>

			<FancyText text="A Design System You Can Grow With" />

			<FancyText text="Styles that won't block you in!" />
		</>
	);
}

export default App;
