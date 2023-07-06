function toggleTheme() {
    const body = document.querySelector("body");
    const toggle = document.getElementById("toggle");

    if(toggle.checked) {
        body.style.setProperty("--bg-color", "#222");
        body.style.setProperty("--text-color", "#fff");
    } else {
        body.style.setProperty("--bg-color", "#fff");
        body.style.setProperty("--text-color","#222");
    }
}

// Check the user's preference on page load

window.addEventListener("load", () => {
    const preferDarkMode = window.matchMedia("(preders-color-scheme: dark");
    const toggle = document.getElementById("toggle");

    if(preferDarkMode) {
        toggle.checked = true;
        toggleTheme();
    }
});