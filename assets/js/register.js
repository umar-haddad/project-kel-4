const form = document.querySelector('form');
const emailInput = document.querySelector('#inputEmail');
const passwordInput = document.querySelector('#inputPassword');
const firstNameInput = document.getElementById('firstname');
const lastNameInput = document.getElementById('lastname');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value; 

    if (validateEmail(email) && validatePassword(password)) {
        // Data formulir valid, Anda dapat mengirimnya ke server di sini
        sendDataToServer(email, password, firstName, lastName);
    } else {
        alert('Email atau password tidak valid.');
    }
});

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    return password.length >= 12;
}

function sendDataToServer(email, password, firstName, lastName) {
    const serverURL = 'https://652fea546c756603295ded28.mockapi.io/dataStrotage'; // Ganti dengan URL API yang sesuai

    fetch(serverURL, {
        method: 'POST',
        body: JSON.stringify({ email, password, firstName, lastName }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        // Simpan status registrasi ke local storage
        saveRegistrationStatus(email);

        // Lakukan sesuatu dengan respons dari server jika diperlukan
        console.log(data);
        alert('Registrasi berhasil.');
    })
    .catch(error => {
        console.error(error);
        alert('Terjadi kesalahan saat mengirim data.');
    });
}

function saveRegistrationStatus(email) {
    // Simpan status registrasi ke local storage
        const registrationStatus = {
        email,
        registered: true,
    };      

    localStorage.setItem('registrationStatus', JSON.stringify(registrationStatus));
}
