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

function App() {
	return (
		<>
			<h1>React Components</h1>

			<FancyText text="Do. Learn. Grow." />

			<FancyText text="A Design System You Can Grow With" />

			<FancyText text="Styles that won't block you in!" />
		</>
	);
}

export default App;
