document.addEventListener('DOMContentLoaded', function() {
    let loginForm = document.querySelector('form');
    let emailInput = document.querySelector('#email');
    let passwordInput = document.querySelector('#password');
    let forgotPasswordLink = document.querySelector('#forgotPasswordLink');

    // Cek apakah pengguna sudah login saat halaman dimuat
    if (localStorage.getItem('token')) {
        // Pengguna sudah login, arahkan mereka ke halaman lain (contoh: dashboard.html)
        window.location.href = 'dashboard.html';
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!gridCheck.checked) {
            alert('Anda harus mengklik "Check me out" untuk melanjutkan.');
            return;
        }

        const email = emailInput.value;
        const password = passwordInput.value;

        // Ganti URL API dengan URL mock API yang sesuai
        const apiURL = 'https://mockapi.example.com/login';

        fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => {
            if (response.status === 200) {
                // Login berhasil, simpan token atau informasi login di local storage
                localStorage.setItem('token', 'your_token_here');

                // Arahkan pengguna ke halaman lain (contoh: dashboard.html)
                window.location.href = './index.html';
            } else {
                // Login gagal, Anda dapat menampilkan pesan kesalahan kepada pengguna.
                alert('Login gagal. Coba lagi.');
            }
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });
    });

    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        // Menampilkan alert atau arahkan ke halaman pemulihan kata sandi di sini
        alert('Jika Anda lupa kata sandi, ikuti tautan pemulihan kata sandi.');
    });
});
