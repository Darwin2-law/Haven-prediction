document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get values from the form
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;

    // Display the updated profile information
    document.getElementById('display-name').innerText = firstName + ' ' + lastName;
    document.getElementById('display-email').innerText = email;

    // Optionally, you can store this data in localStorage to persist across page reloads
    localStorage.setItem('profile-name', firstName + ' ' + lastName);
    localStorage.setItem('profile-email', email);
});

// If there's saved profile data in localStorage, display it on page load
window.onload = function() {
    const savedName = localStorage.getItem('profile-name');
    const savedEmail = localStorage.getItem('profile-email');

    if (savedName) {
        document.getElementById('display-name').innerText = savedName;
    }

    if (savedEmail) {
        document.getElementById('display-email').innerText = savedEmail;
    }
};
