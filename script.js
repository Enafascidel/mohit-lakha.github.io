console.log("JS Loaded"); // Check if JS is loaded

// Get the dark mode toggle button
const toggleButton = document.getElementById('dark-mode-toggle');

// Check if the button exists in the DOM
if (!toggleButton) {
    console.error("Dark mode toggle button not found!");
} else {
    console.log("Dark mode button found!");
}

// Check for saved user preference in localStorage (if any)
const darkModePreference = localStorage.getItem('dark-mode');
if (darkModePreference === 'enabled') {
    document.body.classList.add('dark-mode');
    document.querySelector('header').classList.add('dark-mode');
    document.querySelector('#about').classList.add('dark-mode');
    console.log("Dark mode enabled from localStorage");
}

// Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
    console.log("Toggle button clicked");

    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('#about').classList.toggle('dark-mode');

    // Save the user's preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        console.log("Dark mode enabled");
    } else {
        localStorage.setItem('dark-mode', 'disabled');
        console.log("Dark mode disabled");
    }
});
