const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const url = 'https://652fea546c756603295ded28.mockapi.io/dataStrotage';

const getUsers = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const validateUser = async (email, password) => {
  const users = await getUsers();
  return users.filter(user => user.email === email && user.password === password);
}

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  
  const validUser = await validateUser(email, password);
  console.log(validUser);
  if (validUser.length > 0) {
    saveRegistrationStatus(validUser[0]);
  } else {
    alert('Login gagal');
  }
});



function saveRegistrationStatus(user) {
  localStorage.setItem('loggedInUser', JSON.stringify(user));
  alert('login berhasil');
  window.location.href = window.location.href.replace('/page/login.html', '/');
}