import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

document.getElementById('login-btn').onclick = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert('Logged in!');
    })
    .catch(error => {
      console.error(error.message);
    });
};

document.getElementById('signup-btn').onclick = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert('Account created!');
    })
    .catch(error => {
      console.error(error.message);
    });
}
