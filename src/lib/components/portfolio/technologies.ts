export type Technology = {
	text: string;
	icon?: string;
};

export const technologies: Record<string, Technology> = {
	C: {
		text: 'C'
	},
	JavaScript: {
		text: 'JavaScript',
		icon: '/icons/javascript.svg'
	},
	TypeScript: {
		text: 'TypeScript',
		icon: '/icons/typescript.svg'
	},
	CSS: {
		text: 'CSS',
		icon: '/icons/css.svg'
	},
	SCSS: {
		text: 'SCSS',
		icon: '/icons/scss.svg'
	},
	HTML: {
		text: 'HTML',
		icon: '/icons/html.svg'
	},
	ROS2: {
		text: 'ROS2'
	},
	Python: {
		text: 'Python',
		icon: '/icons/python.svg'
	},
	React: {
		text: 'React',
		icon: '/icons/react.svg'
	},
	Svelte: {
		text: 'Svelte',
		icon: '/icons/svelte.svg'
	},
	Dart: {
		text: 'Dart',
		icon: '/icons/dart.svg'
	},
	Electron: {
		text: 'Electron'
	}
};
