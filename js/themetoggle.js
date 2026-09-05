(function() {
	var saved = localStorage.getItem('kana_theme');
	if (saved == 'dark' || saved == 'light') {
		document.documentElement.setAttribute('data-theme', saved);
	}
})();

function initThemeToggle() {
	var toggle = document.getElementById('theme-switch');
	if (!toggle) {
		return;
	}

	function is_dark() {
		var explicit = document.documentElement.getAttribute('data-theme');
		if (explicit) {
			return explicit == 'dark';
		}
		return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

	toggle.checked = is_dark();

	toggle.onchange = function() {
		var theme = toggle.checked ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('kana_theme', theme);
	};
}

if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', initThemeToggle);
} else {
	initThemeToggle();
}
