    const form = document.querySelector('form');
    const emailInput = document.querySelector('#inputEmail');
    const passwordInput = document.querySelector('#inputPassword');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        if (validateEmail(email) && validatePassword(password)) {
            // Data formulir valid, Anda dapat mengirimnya ke server di sini
            sendDataToServer(email, password);
        } else {
            alert('Email atau password tidak valid.');
        }
    });

    function validateEmail(email) {
        // Gunakan ekspresi reguler untuk memeriksa apakah email memiliki format yang benar
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    function validatePassword(password) {
        // validasi untuk kata sandi
        return password.length >= 12;
    }

    function sendDataToServer(email, password) {
        // Di sini anda akan mengirim data ke server, misalnya dengan menggunakan fetch API
        // Gantilah URL sesuai dengan endpoint server Anda
        const serverURL = 'https://contoh.com/api/register';

        fetch(serverURL, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            // buat sesuatu dengan respons dari server kalo mau
            console.log(data);
            alert('Registrasi berhasil.');
        })
        .catch(error => {
            console.error(error);
            alert('Terjadi kesalahan saat mengirim data.');
        });
    }