// Get the dark mode toggle button
const toggleButton = document.getElementById('dark-mode-toggle');

// Check for saved user preference in localStorage (if any)
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.querySelector('header').classList.add('dark-mode');
    document.querySelector('#about').classList.add('dark-mode');
}

// Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('#about').classList.toggle('dark-mode');

    // Save the user's preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
