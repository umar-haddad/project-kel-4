const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const url = 'https://652fea546c756603295ded28.mockapi.io/dataStrotage'

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;
    const data = await validateEmail(email)
    const isPasswordTrue = validatePassword(password, data[0])
    
    
    
});

async function validateEmail(email) {
    try {
        const response = await fetch(`${url}?email=${email}`)
        const data = await response.json()
        console.log(data)
        return data 
    } catch (error) {
        console.log(error)
    }
}

function validatePassword(password, data) {
    return password === data.password
}

function saveRegistrationStatus(email) {

    const registrationStatus = {
        email,
        registered: true,
    }; 
    if(isPasswordTrue) {
        localStorage.setItem('loggedInUser', JSON.stringify(data[0]));
        alert('login berhasil')
    } else {
        alert('Login gagal')
}}