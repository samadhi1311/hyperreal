export const menuSlide = {
	initial: {
		y: '-100%',
	},
	animate: {
		y: 0,
	},
	exit: {
		y: '-100%',
	},
	transition: {
		duration: 0.8,
		ease: [0.645, 0.045, 0.355, 1],
	},
};

export const initialFade = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	transition: {
		duration: 1,
		delay: 3,
		ease: [0.645, 0.045, 0.355, 1],
	},
};

export const fade = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
	transition: {
		duration: 1,
		ease: [0.645, 0.045, 0.355, 1],
	},
};

export const menuButton = {
	initial: {
		opacity: 0,
	},
	open: {
		opacity: 1,
		x: '0%',
		transition: {
			duration: 0.5,
			ease: [0.645, 0.045, 0.355, 1],
		},
	},
	closed: {
		opacity: 0,
		x: '-100%',
		transition: {
			duration: 0.5,
			ease: [0.645, 0.045, 0.355, 1],
		},
	},
};

// export const menuItemBackground = {
// 	initial: {
// 		backgroundColor: '#ffffff00',
// 	},
// 	hover: {
// 		backgroundColor: '#ffffff11',
// 		transition: {
// 			delay: 0.1,
// 			duration: 0.5,
// 			ease: [0.645, 0.045, 0.355, 1],
// 		},
// 	},
// 	animate: {
// 		backgroundColor: '#ffffff00',
// 		transition: {
// 			delay: 0.1,
// 			duration: 0.5,
// 			ease: [0.645, 0.045, 0.355, 1],
// 		},
// 	},
// };

export const menuItemText = {
	initial: {
		y: 0,
	},
	hover: {
		y: '-200%',
		transition: {
			duration: 0.5,
			ease: [0.645, 0.045, 0.355, 1],
		},
	},
	animate: {
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.645, 0.045, 0.355, 1],
		},
	},
};

export const pageTransition = {
	initial: {
		opacity: 0,
		y: 150,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1.5,
			ease: [0.645, 0.045, 0.355, 1],
		},
	},
};
