// Dark mode toggle functionality 
const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Toggle the button icon and text
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "🌞"; // Change to sun in dark mode
        darkModeToggle.classList.add("moon-mode");
        darkModeToggle.classList.remove("sun-mode");
    } else {
        darkModeToggle.textContent = "🌙"; // Change to moon in light mode
        darkModeToggle.classList.add("sun-mode");
        darkModeToggle.classList.remove("moon-mode");
    }
});
