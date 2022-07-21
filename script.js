const arrays = [
  {
    id: 1,
    imageDesk: 'img/popup-desk.jpg',
    imageMob: 'img/popup-mob.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    live: 'https://google.com',
    source: 'https://google.com',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },
  {
    id: 2,
    imageDesk: 'img/popup-desk.jpg',
    imageMob: 'img/popup-mob.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    live: 'https://google.com',
    source: 'https://google.com',
    tech: ['CSS', 'GitHub', 'Javascript', 'Bootstrap', 'Codepen'],
  },
  {
    id: 3,
    imageDesk: 'img/popup-desk.jpg',
    imageMob: 'img/popup-mob.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    live: 'https://google.com',
    source: 'https://google.com',
    tech: ['HTML', 'Javascript', 'Bootstrap'],
  },
  {
    id: 4,
    imageDesk: 'img/popup-desk.jpg',
    imageMob: 'img/popup-mob.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    live: 'https://google.com',
    source: 'https://google.com',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },
  {
    id: 5,
    imageDesk: 'img/popup-desk.jpg',
    imageMob: 'img/popup-mob.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    live: 'https://google.com',
    source: 'https://google.com',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },
  {
    id: 6,
    imageDesk: 'img/popup-desk.jpg',
    imageMob: 'img/popup-mob.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    live: 'https://google.com',
    source: 'https://google.com',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },
];
let htmlstring = '';
arrays.forEach((item) => {
  let string = `
      <div class="work-item">
        <div class="div-wrapper"></div>
        <div class="bottom-part">
            <h4>${item.title}</h4>
            <ul>`;
  let string1 = '';
  item.tech.forEach((li) => {
    string1 += `<li><a>${li}</a></li>`;
  });
  string += `${string1}
            </ul>
            <a id="${item.id}" class="btn-green">See Project</a>
        </div>
      </div>
      `;
  htmlstring += string;
  string = '';
});
const getWrapper = document.querySelector('.wrapper');
getWrapper.innerHTML = htmlstring;
const getheader = document.querySelector('header');
const getmenu = document.querySelector('.humburger-wrapper');
const getclose = document.querySelector('nav ul .closeclass');
const getli = document.querySelectorAll('nav ul .linkclass');
const getprojbtn = document.querySelectorAll('.works .work-item .btn-green');
const getpopupclose = document.querySelector('.modal .closeclass');
getmenu.addEventListener('click', () => {
  getheader.classList.toggle('active');
});
getclose.addEventListener('click', () => {
  getheader.classList.remove('active');
});
getli.forEach((item) => {
  item.addEventListener('click', () => {
    getheader.classList.remove('active');
  });
});
getprojbtn.forEach((item) => {
  item.addEventListener('click', (e) => {
    const getId = e.currentTarget.id;
    const result = arrays.find((item1) => item1.id === Number(getId));
    let popupHtml = '';
    popupHtml = `
                <picture class="image-wrapper">
                    <source media="(min-width:768px)" srcset="${result.imageDesk}" alt="">
                    <img src="${result.imageMob}" alt="" >
                </picture>
                <div class="title-and-btn">
                    <h2>${result.title}</h2>
                    <div class="btn-wrapper">
                        <a href="${result.live}" class="btn-green" type="submit">See live <img src="img/popup-see.svg"></a>
                        <a href="${result.source}" class="btn-green" type="submit">See source<img src="img/popup-GitHub.svg"></a>
                    </div>
                </div>
                <div class="works">
                    <ul>`;
    let string1 = '';
    result.tech.forEach((li) => {
      string1 += `<li><a>${li}</a></li>`;
    });
    popupHtml += `${string1}
                    </ul>
                </div>
                <p>
                    ${result.description}
                </p>
                `;
    getpopupclose.insertAdjacentHTML('afterend', popupHtml);
    document.querySelector('body').classList.add('no-scroll');
  });
});
getpopupclose.addEventListener('click', () => {
  document.querySelector('body').classList.remove('no-scroll');
  while (getpopupclose.nextElementSibling) {
    getpopupclose.nextElementSibling.remove();
  }
});


// form validation

const getformbtn = document.querySelector('.form form');
const geterror = document.querySelector('.errorclass');
getformbtn.addEventListener('submit', (e) => {
  if (getformbtn.useremail.value !== getformbtn.useremail.value.toLowerCase()) {
    geterror.style.display = 'block';
    e.preventDefault();
  }
});
