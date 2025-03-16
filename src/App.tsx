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
	children: any;
}

const ContentWidth: React.FC<ContentWidthProps> = ({ maxWidth, children }) => {
	const myStyle = {
		'--max-width': `${maxWidth}px`,
	} as React.CSSProperties;
	return (
		<div className="content-width" style={myStyle}>
			<div className="content-width__wrapper">{children}</div>
		</div>
	);
};

function App() {
	return (
		<>
			<h1>React Components</h1>

			<ContentWidth maxWidth={794}>
				<FancyText text="Do. Learn. Grow." />
			</ContentWidth>

			<ContentWidth maxWidth={850}>
				<FancyText text="A Design System You Can Grow With" />
			</ContentWidth>

			<ContentWidth maxWidth={794}>
				<FancyText text="Styles that won't block you in!" />
			</ContentWidth>

			<FancyText text="Do. Learn. Grow." />

			<FancyText text="A Design System You Can Grow With" />

			<FancyText text="Styles that won't block you in!" />
		</>
	);
}

export default App;
