export const animations = {
	container: {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
		exit: { opacity: 0 },
	},

	heroImage: {
		hidden: { opacity: 0, scale: 0.99 },
		fadeIn: { opacity: 1, scale: 1, transition: { delay: 0.1, duration: 2, ease: 'backInOut' } },
	},

	textContainer: {
		hidden: { opacity: 0 },
		visible: (i = 1) => ({
			opacity: 1,
			transition: { staggerChildren: 0.05, delayChildren: 2 * i, ease: 'backInOut' },
		}),
	},

	child: {
		hidden: {
			opacity: 0,
			x: -10,
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 50,
			},
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 50,
			},
		},
	},
};
