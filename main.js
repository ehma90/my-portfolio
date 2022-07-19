const getheader = document.querySelector('header');
const getmenu = document.querySelector('.menu-icon');
const getclose = document.querySelector('nav ul .closeclass');
const getli = document.querySelectorAll('nav ul .linkclass');
console.log(getli)
getmenu.addEventListener('click', () => {
  getheader.classList.toggle('active');
  console.log(getheader)
});
getclose.addEventListener('click', () => {
  getheader.classList.remove('active');
  console.log(getheader)
});
getli.forEach((li) => {
  li.addEventListener('click', () => {
    getheader.classList.remove('active');
  });
});
