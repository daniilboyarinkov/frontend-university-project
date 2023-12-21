document.addEventListener('DOMContentLoaded', function() {
  function getQueryParam(name) {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get(name);
  }

  const viewMode = getQueryParam('article_view');
  if (viewMode) {
    document.querySelector(`input[name="article_view"][value="${viewMode}"]`).checked = true;
    updateContentClass(viewMode);
  }

  function updateContentClass(mode) {
    const contentElement = document.querySelector('.articles__content');
    if (mode === 'list') {
      contentElement.classList.add('articles__content_horizontal');
    } else {
      contentElement.classList.remove('articles__content_horizontal');
    }
  }

  document.querySelectorAll('.articles-view label').forEach(label => {
    label.addEventListener('click', function() {
      const mode = this.htmlFor === 'list' ? 'list' : 'grid';
      const queryParams = new URLSearchParams(window.location.search);
      queryParams.set('article_view', mode);
      window.history.replaceState({}, '', `${window.location.pathname}?${queryParams}`);
      updateContentClass(mode);
    });
  });
});
