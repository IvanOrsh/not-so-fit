// before the app gets hydrated...

const STORAGE_KEY = 'theme';

// default is dark
const defaultTheme = 'dark';

const getTheme = () => {
	if (typeof localStorage !== 'undefined') {
		if (localStorage.getItem(STORAGE_KEY)) {
			return localStorage.getItem(STORAGE_KEY);
		}
		return defaultTheme;
	}

	return defaultTheme;
};

const setTheme = (theme) => {
	document.documentElement.dataset.theme = theme;
};

// set early to avoid page flashes / CSS is made aware
setTheme(getTheme());

const themeObserver = new MutationObserver(() => {
	const nextTheme = document.documentElement.dataset.theme;
	if (nextTheme) {
		localStorage.setItem(STORAGE_KEY, nextTheme);
	}
});
themeObserver.observe(document.documentElement, {
	attributes: true,
	attributeFilter: ['data-theme'],
});

const toggleTheme = () => {
	const currentTheme = getTheme();
	const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
	setTheme(nextTheme);
};

window.toggleTheme = toggleTheme;
