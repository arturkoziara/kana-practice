function initThemeToggle() {
	var toggle = document.getElementById('theme-switch');
	if (!toggle) {
		return;
	}

	function syncFromStylesheet() {
		var active = typeof getActiveStyleSheet === 'function' ? getActiveStyleSheet() : null;
		toggle.checked = (active == 'alternate');
	}

	syncFromStylesheet();

	toggle.onchange = function() {
		var title = toggle.checked ? 'alternate' : 'default';
		setActiveStyleSheet(title);
		if (typeof createCookie === 'function') {
			createCookie('style', title, 365);
		}
		// Toggling `disabled` on an already-rendered alternate stylesheet
		// does not reliably restyle the live page in every browser, so
		// reload with the cookie already set for a clean re-render.
		location.reload();
	};
}

if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', initThemeToggle);
} else {
	initThemeToggle();
}
