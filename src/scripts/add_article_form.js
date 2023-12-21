document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.querySelector('.articles-btn-add');
  const formTemplate = document.querySelector('template');
  const articlesContent = document.querySelector('.articles__content');

  function createArticleCard(data) {
    const article = document.createElement('article');
    article.className = 'card';
    article.innerHTML = `
      <img class="card__img" src="${data.image}" alt="${data.title}" />
      <div class="card__content">
        <h3 class="card__title">${data.title}</h3>
        <p class="card__text">${data.description}</p>
        <footer class="card__footer">${data.date} · ${data.readTime} min read</footer>
      </div>
    `;
    articlesContent.appendChild(article);
  }

  addButton.addEventListener('click', function() {
    const form = formTemplate.content.cloneNode(true).querySelector('form');
    addButton.after(form);
    addButton.style.display = 'none';

    form.querySelector('button[type="button"]').addEventListener('click', function() {
      form.remove();
      addButton.style.display = 'block';
    });

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(form);
      const articleData = {
        image: formData.get('image_url'),
        title: formData.get('article_title'),
        description: formData.get('description'),
        date: new Date().toLocaleDateString('ru-RU'), // Текущая дата
        readTime: Math.floor(Math.random() * 10) + 3 // Случайное время чтения от 3 до 12 минут
      };
      createArticleCard(articleData);
      form.remove();
      addButton.style.display = 'block';
    });
  });
});
