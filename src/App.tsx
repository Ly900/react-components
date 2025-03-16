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
	text: string;
	paddingInlineMobile: number;
}

const ContentWidth: React.FC<ContentWidthProps> = ({
	text,
	paddingInlineMobile,
}) => {
	return (
		<div
			className="content-width"
			style={{ '--padding-inline-mobile': `${paddingInlineMobile}rem` }}
		>
			<div className="content-width__wrapper">{text}</div>
		</div>
	);
};

function App() {
	return (
		<>
			<h1>React Components</h1>

			<ContentWidth
				paddingInlineMobile={1}
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit
				temporibus quis incidunt illum veniam reprehenderit nostrum, libero
				autem laborum molestias corporis perspiciatis! Ipsam eligendi minus non
				modi atque ipsa"
			/>

			<FancyText text="Do. Learn. Grow." />

			<FancyText text="A Design System You Can Grow With" />

			<FancyText text="Styles that won't block you in!" />
		</>
	);
}

export default App;
