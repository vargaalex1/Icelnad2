const body = document.querySelector('body'),
      sidebar = body.querySelector('.sidebar'),
      toggle = body.querySelector('.toggle'),
      rightSide = body.querySelector('.right-side');

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('close')
});