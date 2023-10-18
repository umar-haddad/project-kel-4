import { createSpinner, renderDate } from './utils.js';

const listArticle = document.querySelector('.list-article');
const url = 'https://6524d54eea560a22a4ea26a4.mockapi.io/api/v1/artike';
const btnSearch = document.querySelector('.btn-search-article');

const getArticleList = async (keyword = '') => {
  try {
    const response = await fetch(`${url}?tag=${keyword}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createCard = (article) => {
  return `
      <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="card" style="height: 100%;">
         <img src="${
           article.gambar
         }" class="card-img-top card-img-article" alt="${
    article.judul
  }" loading="lazy">
         <div class="card-body">
            <h3 class="card-title text-clamp" >${article.judul}</h3>
            <p  class="card-text text-clamp">${article.deskripsi}</p>
            <p  class="card-text article-gray-text">${article.tag}</p>
            <p  class="card-text article-gray-text">${renderDate(
              article.createdAt
            )}</p>
            <a href="article.html?id=${article.id}" >Read more</a>
         </div>
      </div>
      </div>
   `;
};

const renderArticle = async () => {
  listArticle.innerHTML = createSpinner();
  const articles = await getArticleList();
  const articleCards = articles.map(createCard).join('');
  listArticle.innerHTML = '';
  listArticle.insertAdjacentHTML('beforeend', articleCards);
};

const renderSearchArticle = async (keyword) => {
  listArticle.innerHTML = createSpinner();
  const articles = await getArticleList(keyword);
  const articleCards = articles.map(createCard).join('');
  listArticle.innerHTML = '';
  listArticle.insertAdjacentHTML('beforeend', articleCards);
};

btnSearch.addEventListener('click', () => {
  const keyword = document.querySelector('#keyword').value;
  renderSearchArticle(keyword);
});

window.addEventListener('load', () => {
  renderArticle();
});
