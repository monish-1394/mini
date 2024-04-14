const firebaseConfig = {
  apiKey: "AIzaSyBDVaseVf-jBOJAVlIuHY7PMT5wg9QkDRI",
  authDomain: "aitrainer-e00fb.firebaseapp.com",
  projectId: "aitrainer-e00fb",
  storageBucket: "aitrainer-e00fb.appspot.com",
  messagingSenderId: "467859161051",
  appId: "1:467859161051:web:5be049073668fa2c21f1fe",
  measurementId: "G-STZC42NTGT"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Function to handle user sign-up
function handleSignUp() {
  const email = document.getElementById('email').value; // Updated ID to match the HTML
  const password = document.getElementById('password').value; // Updated ID to match the HTML

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
      console.log(`User signed up: ${user.email}`);

      // You can redirect to a dashboard or another page here
    })
    .catch((error) => {
      // Handle sign-up errors
      console.error(error.message);
    });
}

// Function to handle user sign-in
function handleSignIn() {
  const email = document.getElementById('email').value; // Updated ID to match the HTML
  const password = document.getElementById('password').value; // Updated ID to match the HTML

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;
      // Redirect to index.html
      window.location.href = "index.html";
    })
    .catch((error) => {
      // Handle sign-in errors
      console.error(error.message);
      alert('Login failed. Please check your credentials.'); // Notify user of login failure
    });
}

// Event listeners for the sign-up and sign-in buttons
document.getElementById('signup-button').addEventListener('click', handleSignUp);
document.getElementById('signin-button').addEventListener('click', handleSignIn);
