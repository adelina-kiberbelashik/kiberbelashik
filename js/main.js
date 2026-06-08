(function () {
  'use strict';

  const header = document.querySelector('.header');
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.body.classList.add('page-enter');

  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('header--scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  if (burger && nav) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('burger--open');
      nav.classList.toggle('nav--open');
    });

    nav.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        burger.classList.remove('burger--open');
        nav.classList.remove('nav--open');
      });
    });
  }

  document.querySelectorAll('.nav__link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('nav__link--active');
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const videoPlaceholder = document.querySelector('.video-placeholder');
  if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', function () {
      const label = this.querySelector('.video-placeholder__label');
      if (label) {
        label.textContent = 'Видео скоро будет доступно';
      }
    });
  }
})();
