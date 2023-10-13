const listArticle = document.querySelector('.list-article');
const url = 'https://6524d54eea560a22a4ea26a4.mockapi.io/api/v1/artike';

const getArticleList = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createCard = (article) => {
  return `
      <div class="col-3">
      <div class="card" style="height: 100%;">
         <img src="..." class="card-img-top" alt="...">
         <div class="card-body">
            <h3 class="card-title">${article.judul}</h3>
            <p class="card-text">${article.deskripsi}</p>
            <a href="${article.gambar}" target="_blank">Read more</a>
         </div>
      </div>
      </div>
   `;
};

const createLoading = () => {
  return `
  <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
         <span class="visually-hidden">Loading...</span>
      </div>
   </div>   
   `;
};

const renderArticle = async () => {
  listArticle.innerHTML = createLoading();
  const articles = await getArticleList();
  const articleCards = articles.map(createCard).join('');
  listArticle.innerHTML = '';
  listArticle.insertAdjacentHTML('beforeend', articleCards);
};

renderArticle();
