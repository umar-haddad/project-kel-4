import { createSpinner } from './utils.js';

const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id');
const url = 'https://6524d54eea560a22a4ea26a4.mockapi.io/api/v1/artike';
const mainContent = document.querySelector('.main-content');

const getArticleDetail = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const renderSpinner = () => {
  mainContent.innerHTML = '';
  mainContent.innerHTML = createSpinner();
};

const clearSpinner = () => {
  mainContent.innerHTML = '';
};

const goBack = () => {
  window.history.back();
};

const createDetailArticle = (article) => {
  const { judul, isi, gambar, createdAt, deskripsi, tag } = article;
  const date = new Date(createdAt);
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Jakarta',
  };
  const formattedDate = date.toLocaleDateString('id-ID', options);

  return `       
      <h1>${judul}</h1>
      <p class="fs-6 text-body-secondary">${tag}, ${formattedDate}</p>
      <p>${deskripsi}</p>
      <img src="${gambar}" alt="${judul}" class="img-fluid mb-2">
      <p>${isi}</p>
   `;
};

const renderArticleDetail = async () => {
  renderSpinner();
  const article = await getArticleDetail(id);
  const articleDetail = createDetailArticle(article);
  clearSpinner();
  mainContent.insertAdjacentHTML('beforeend', articleDetail);
};

const backButtons = document.querySelector('.back-button');

backButtons.addEventListener('click', goBack);

renderArticleDetail();
