
        // Import the functions you need from the Firebase SDKs
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
        import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";
        import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-database.js";

        const firebaseConfig = {
            apiKey: "AIzaSyC5f-AgGxwfDXdVs1TbKEw4ltcjXfkMgUg",
            authDomain: "ecommerce-4f766.firebaseapp.com",
            projectId: "ecommerce-4f766",
            storageBucket: "ecommerce-4f766.appspot.com",
            messagingSenderId: "122288834337",
            appId: "1:122288834337:web:773ff26942d13954ad2060"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const auth = getAuth();
        const database = getDatabase(app);

        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            var email = document.getElementById('email').value;
            var password = document.getElementById('psw').value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in successfully
                    const user = userCredential.user;

                    // Update last login time in database
                    const userRef = ref(database, 'users/' + user.uid);
                    update(userRef, {
                        last_login: new Date().toISOString()
                    })
                    .then(() => {
                        // Data updated successfully
                        alert('Logged in successfully');
                        window.location.href = "index.html"; 
                    })
                    .catch((error) => {
                        // Handle update error
                        alert('Failed to update last login: ' + error.message);
                    });
                })
                .catch((error) => {
                    // Handle sign-in errors
                    alert('Login failed: ' + error.message);
                });
        });
        
