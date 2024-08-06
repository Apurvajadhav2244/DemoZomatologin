document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const nameInput = document.getElementById('uname').value;
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    const confirmPasswordInput = document.getElementById('confirm-password').value;
    const errorMsg = document.getElementById('errorMsg');

    // Regular expression for name validation (only letters and spaces, 2 to 50 characters)
    const nameRegex = /^[a-zA-Z\s]/;
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Regular expression for password validation (at least 6 characters)
    
    

    if (!nameRegex.test(nameInput)) {
        errorMsg.textContent='Invalid name. Please use only letters and spaces, between 2 and 50 characters.';
        return;
    }

    if (!emailRegex.test(emailInput)) {
        errorMsg.textContent='Invalid email address.';
      return;
    }


    if (passwordInput !== confirmPasswordInput) {
        errorMsg.textContent='Passwords do not match.';
        return;
    }

    if (errorMsg.length > 0) {
        errorMsg.textContent = errorMsg.join(' ');
    } else {
        errorMsg.textContent = ''; // Clear any previous error message
        alert(`Sign Up successful,${nameInput}`);
        document.write('<html><body><h1><center>')
     document.write("welcome "+ " ");
     document.write(nameInput);
     document.write('<button>logiin');
 
     document.write('</button></center></h1></body></html>');
        // document.getElementById('signupForm').submit();
    }
});