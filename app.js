// Yeh line code ko tab chalayegi jab poora HTML page load ho jayega
document.addEventListener('DOMContentLoaded', function() {

    // 1. HTML se zaroori cheezon ko pakarna
    const loginButton = document.getElementById('loginButton');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // 2. Login button par "click" ka jasoos (event listener) lagana
    loginButton.addEventListener('click', function() {
        
        // 3. Button dabane par, form se values haasil karna
        const email = emailInput.value;
        const password = passwordInput.value;

        // 4. Check karna ke user ne kuch likha hai ya nahi
        if (email === "" || password === "") {
            alert("Please enter both email and password.");
            return; // Function ko yahin rok do
        }

        // Agar sab theek hai, to ek message dikhao
        // NOTE: Abhi hum asal login nahi kar rahe, sirf test kar rahe hain.
        alert(`Welcome! You tried to log in with:\nEmail: ${email}\nPassword: ${password}`);

        // Yahan par hum baad mein asal login (GitHub API call) ka code likhenge

    });

});
