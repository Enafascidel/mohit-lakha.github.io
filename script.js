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
    toggleButton.innerHTML = '☀️'; // Change to sun icon when dark mode is enabled
    console.log("Dark mode enabled from localStorage");
} else {
    toggleButton.innerHTML = '🌙'; // Keep moon icon for light mode
}

// Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
    console.log("Toggle button clicked");

    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('#about').classList.toggle('dark-mode');

    // Toggle the icon and update localStorage
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = '☀️'; // Change to sun icon for light mode
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        toggleButton.innerHTML = '🌙'; // Change to moon icon for dark mode
        localStorage.setItem('dark-mode', 'disabled');
    }
});
