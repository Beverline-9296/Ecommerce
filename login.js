document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Here you can add code to check the credentials (e.g., send an AJAX request to a server)
    // For simplicity, let's just redirect to the index.html on successful login
    window.location.href = "index.html";

});
 