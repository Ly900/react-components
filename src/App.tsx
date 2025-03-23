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

			<div className="template">
				<div className="header">
					<h2 className="header__heading">Page Heading</h2>
					<div className="header__logo">
						<img
							className="header__logo-image"
							src="https://picsum.photos/100/100"
						/>
					</div>
					<div className="header__content-container">
						<p className="header__content">
							Header content - Lorem ipsum dolor.
						</p>
					</div>
				</div>
				<div className="sidebar">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
					repellat maiores explicabo cumque quas officia nobis accusantium
					beatae atque impedit quae iusto, sequi laborum labore ipsa animi alias
					vitae sint, distinctio amet inventore veniam optio, est consequatur!
					Doloremque praesentium doloribus dolore alias? Unde vero ad quaerat
					impedit inventore corrupti rem.
				</div>
				<div className="main">
					<ContentWidth maxWidth={794}>
						<FancyText text="Do. Learn. Grow." />
					</ContentWidth>

					<ContentWidth maxWidth={850}>
						<FancyText text="A Design System You Can Grow With" />
					</ContentWidth>

					<ContentWidth maxWidth={794}>
						<FancyText text="Styles that won't block you in!" />
					</ContentWidth>
				</div>
				<div className="footer">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>
			</div>
		</>
	);
}

export default App;
