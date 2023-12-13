function formatDate(dateString) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('ru-RU', options);
}

// Функция для получения случайного времени чтения
function getRandomReadingTime() {
  return Math.floor(Math.random() * 10) + 3; // от 3 до 12 минут
}

function createArticleCard({ image, title, description, date }) {
  const article = document.createElement('article');
  article.className = 'card';
  article.innerHTML = `
    <img class="card__img" src="${image}" alt="${title}" />
    <div class="card__content">
      <h3 class="card__title">${title}</h3>
      <p class="card__text">${description}</p>
      <footer class="card__footer">${formatDate(date)} · ${getRandomReadingTime()} min read</footer>
    </div>
  `;
  return article;
}

function loadAndDisplayArticles() {
  fetch('https://techcrunch.com/wp-json/wp/v2/posts')
    .then(response => response.json())
    .then(data => {
      const slicedData = data.slice(0, 6);
      const articlesContent = document.querySelector('.articles__content');
      slicedData.forEach(post => {
        const articleCard = createArticleCard({
          image: post.jetpack_featured_media_url,
          title: post.title.rendered,
          description: post.excerpt.rendered,
          date: post.date
        });
        articlesContent.appendChild(articleCard);
      });
    })
    .catch(error => console.error('Ошибка при загрузке статей:', error));
}

document.addEventListener('DOMContentLoaded', loadAndDisplayArticles);
