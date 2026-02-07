// Mobile nav toggle
var navToggle = document.querySelector('.nav-toggle');
var nav = document.querySelector('.nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', function () {
    nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', nav.classList.contains('is-open'));
  });
}

document.querySelectorAll('.nav a').forEach(function (link) {
  link.addEventListener('click', function () {
    if (nav) nav.classList.remove('is-open');
  });
});
