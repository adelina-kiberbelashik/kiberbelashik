(function () {
  'use strict';

  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  const noResults = document.querySelector('.no-results');

  const activeFilters = {
    category: 'all',
    skin: 'all',
    purpose: 'all'
  };

  function applyFilters() {
    let visibleCount = 0;

    productCards.forEach(function (card) {
      const category = card.dataset.category;
      const skin = card.dataset.skin;
      const purpose = card.dataset.purpose;

      const matchCategory = activeFilters.category === 'all' || category === activeFilters.category;
      const matchSkin = activeFilters.skin === 'all' || skin === activeFilters.skin;
      const matchPurpose = activeFilters.purpose === 'all' || purpose === activeFilters.purpose;

      if (matchCategory && matchSkin && matchPurpose) {
        card.classList.remove('product-card--hidden');
        visibleCount++;
      } else {
        card.classList.add('product-card--hidden');
      }
    });

    if (noResults) {
      noResults.classList.toggle('no-results--visible', visibleCount === 0);
    }
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filterType = this.dataset.filter;
      const filterValue = this.dataset.value;

      activeFilters[filterType] = filterValue;

      document.querySelectorAll('.filter-btn[data-filter="' + filterType + '"]').forEach(function (b) {
        b.classList.remove('filter-btn--active');
      });
      this.classList.add('filter-btn--active');

      applyFilters();
    });
  });

  applyFilters();
})();
