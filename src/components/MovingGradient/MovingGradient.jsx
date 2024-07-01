import React, { useState, useEffect } from 'react';
import './MovingGradient.css';

export default function MovingGradient({ size, tailLength, duration }) {
	const [cursor, setCursor] = useState({ x: 0, y: 0 });
	const [trail, setTrail] = useState([]);
	const [isUpdating, setIsUpdating] = useState(false);

	useEffect(() => {
		const timer = setInterval(() => {
			setTrail((prevTrail) => {
				return prevTrail.map((point) => {
					const newOpacity = Math.max(0, point.opacity - 0.05); // Ensure opacity doesn't go below 0
					return { ...point, opacity: newOpacity };
				});
			});
		}, duration); // Adjust the interval as needed for desired fadeout speed

		return () => clearInterval(timer);
	}, []); // Run effect only once

	const updateTrail = (x, y) => {
		const newTrail = [...trail, { x, y, opacity: 1 }];
		// limit trail count
		if (newTrail.length > tailLength) {
			newTrail.shift();
		}
		setTrail(newTrail);
	};

	const handleMouseMove = (event) => {
		if (!isUpdating) {
			setIsUpdating(true);
			const { clientX, clientY } = event;
			updateTrail(clientX, clientY);
			setIsUpdating(false);
		}
	};

	/*
		color pciker: rgb(225, 0, 100), rgb(0, 0, 255)
	*/

	const calculateGradientColor = (index) => {
		const startColor = [0, 0, 255]; // Start color (red)
		const endColor = [255, 0, 0]; // End color (blue)

		const color = startColor.map((channel, i) => {
			const delta = endColor[i] - channel;
			return Math.round(channel + (delta / tailLength) * index);
		});

		return `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.5)`; // Adjust opacity as needed
	};

	return (
		<div className='mg-container' onMouseMove={handleMouseMove}>
			<div className='mg-overlay'></div>

			{/* cursor */}
			<div className='mg-cursor'></div>

			{/* trail */}
			{trail.map((position, index) => (
				<div
					key={index}
					className='mg-trail'
					style={{
						left: position.x,
						top: position.y - 100,
						height: size,
						width: size,
						backgroundColor: calculateGradientColor(index),
						opacity: position.opacity,
					}}
				/>
			))}
			<div className='mg-content'>
				<h1>Sithu</h1>
			</div>
		</div>
	);
}
