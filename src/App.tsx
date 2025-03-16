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
	paddingInlineMobile: number;
	maxWidth: number;
	component: any;
}

const ContentWidth: React.FC<ContentWidthProps> = ({
	paddingInlineMobile,
	maxWidth,
	component,
}) => {
	const myStyle = {
		'--padding-inline-mobile': `${paddingInlineMobile}rem`,
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
				paddingInlineMobile={1}
				maxWidth={794}
				component={<FancyText text="Do. Learn. Grow." />}
			/>

			<ContentWidth
				paddingInlineMobile={1}
				maxWidth={794}
				component={<FancyText text="A Design System You Can Grow With" />}
			/>

			<ContentWidth
				paddingInlineMobile={1}
				maxWidth={794}
				component={<FancyText text="Styles that won't block you in!" />}
			/>

			<FancyText text="A Design System You Can Grow With" />

			<FancyText text="Styles that won't block you in!" />
		</>
	);
}

export default App;
