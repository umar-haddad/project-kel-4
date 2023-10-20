// show article
function articleFunction() {
    const url = "https://6524d54eea560a22a4ea26a4.mockapi.io/api/v1/artike?page=1&limit=3"

const articleContainer = document.querySelector('.list-article');

async function getArticle() {
    try { 
        const result = await fetch(url);
        const data = await result.json();
        return data;
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        console.log('Request complete, whether successful or not.');
    }
}

function createCard(data) {
    return `
    <div class="col-12 col-md-12 col-lg-4">
        <div class="card text-center bg-white pb-2">
            <img src="${data.gambar}" class="card-img-top" alt="${data.judul}" style="height: 200px; object-fit: cover;">
            <div class="card-body">
            <h5 class="card-title">${data.judul}</h5>
            <p class="card-text">${data.deskripsi}</p>
            <a href="#" class="btn btn-primary mt-auto">Baca Selengkapnya</a>
            </div>
        </div>
    </div>
    `
}

async function renderArticle() {
    const article = await getArticle();
    const articleCard = article.map(createCard).join('')
    articleContainer.innerHTML = ''
    articleContainer.insertAdjacentHTML('beforeend', articleCard)
    console.log(articleCard);
}

renderArticle();

}

articleFunction();

// show konsultasi

function konsultasiFunction() {
    const url = "https://65281018931d71583df1d1f3.mockapi.io/health"

const konsultasiContainer = document.querySelector('.list-konsultasi');

async function getKonsultasi() {
    try { 
        const result = await fetch(url);
        const data = await result.json();
        return data;
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        console.log('Request complete, whether successful or not.');
    }
}

function createCard(data) {
    return `
    <div class="col-12 col-md-12 col-lg-3">
        <div class="card text-center bg-white pb-2">
            <img src="${data.gambar}" class="card-img-top" alt="${data.judul}" style="height: 200px; object-fit: cover;">
            <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">${data.deskripsi}</p>
            <a href="#" class="btn btn-primary mt-auto">Chat Dokter</a>
            </div>
        </div>
    </div>
    `
}

async function renderKonsultasi() {
    const konsultasi = await getKonsultasi();
    const konsultasiCard = konsultasi.map(createCard).join('')
    konsultasiContainer.innerHTML = ''
    konsultasiContainer.insertAdjacentHTML('beforeend', konsultasiCard)
    console.log(konsultasiCard);
}

renderKonsultasi();

}

konsultasiFunction();



