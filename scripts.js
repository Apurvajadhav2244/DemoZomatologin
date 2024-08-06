document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'signin.html'; 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    // Simple email and password validation
    if (email === '' || password === '') {
        errorMsg.textContent = 'Please fill in all fields.';
    } else if (!validateEmail(email)) {
        errorMsg.textContent = 'Please enter a valid email.';
    } else {
        // Perform login logic here
        // For demonstration, just log to the console
        console.log('Email:', email);
        console.log('Password:', password);
        errorMsg.textContent = '';
        alert('Login successful...');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
