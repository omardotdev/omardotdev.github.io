window.addEventListener("DOMContentLoaded", () => {
    const selector = document.querySelector("#theme-selector");
    const html = document.querySelector("html");

    const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    const defaultTheme = prefersDarkMode ? "tokyo-night-dark" : "tokyo-night-light";
    const preferredTheme = localStorage.getItem("theme");

    if (!preferredTheme || !['tokyo-night-dark', 'tokyo-night-storm', 'tokyo-night-light'].includes(preferredTheme)) {
        localStorage.setItem("theme", defaultTheme);
        selector.value = defaultTheme;
        html.dataset.theme = defaultTheme;
    } else {
        selector.value = preferredTheme;
        html.dataset.theme = preferredTheme;
    }

    selector.addEventListener("change", () => {
        const newTheme = selector.value;
        localStorage.setItem("theme", newTheme);
        html.dataset.theme = newTheme;
    });
});