import axios from "axios";
const API_KEY = "AIzaSyC_zltK4uB4x5ZwhIDkYmaQIUHPJ-x23Q8";

async function authenticate(mode, email, password, role) {
  const url = `http://localhost:9191/login/`;
  const response = await axios.post(url, {
    username: email,
    password: password,
    role: role,
    // returnSecureToken: true,
  });

  const token = response.data.token;

  return token;
}

export function login(email, password, role) {
  return authenticate("signInWithPassword", email, password, role);
}
