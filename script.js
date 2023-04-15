const sideNav = document.getElementById('sideNav');

function openNav(open) {
  document.getElementById('sideNav').style.width = '100%';
  sideNav.style.width = '100%';
  return open;
}

// document.getElementById('toggleSpan').onclick(openNav);

function closeNav(close) {
  document.getElementById('sideNav').style.width = '0';
  sideNav.style.width = '0';
  return close;
}

// document.getElementById('sideNav').onclick(closeNav);

const popup = document.getElementById('popupCard');
const seebtn = document.getElementById('seeButton');
const span = document.getElementsByClassName('close')[0];

const popup1 = document.getElementById('popupCard1');
const seebtn1 = document.getElementById('seeButton1');
const span1 = document.getElementsByClassName('close1')[0];

const popup2 = document.getElementById('popupCard2');
const seebtn2 = document.getElementById('seeButton2');
const span2 = document.getElementsByClassName('close2')[0];

const popup3 = document.getElementById('popupCard3');
const seebtn3 = document.getElementById('seeButton3');
const span3 = document.getElementsByClassName('close3')[0];

// POPUP WINDOW
const popups = [
  {
    card: 1,
    name: 'Tonic',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'img/Snapshoot Portfolio desktop.png',
    technologies: ['html', 'JavaScript', 'css'],
    source: 'https://github.com/SiveMdluli/',
    link: 'https://sivemdluli.github.io/',
  },
  {
    card: 2,
    name: 'Multi-Post Stories ',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'img/Snapshoot Portfolio(1).png',
    technologies: ['html', 'JavaScript', 'css'],
    source: 'https://github.com/SiveMdluli/',
    link: 'https://sivemdluli.github.io/',
  },
  {
    card: 3,
    name: 'Tonic',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essente',
    image: 'img/Snapshoot Portfolio(2).png',
    technologies: ['html', 'JavaScript', 'css'],
    source: 'https://github.com/SiveMdluli/',
    link: 'https://sivemdluli.github.io/',
  },
  {
    card: 4,
    name: 'Multi-Post Stories',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'img/Snapshoot Portfolio desktop 2.png',
    technologies: ['html', 'JavaScript', 'css'],
    source: 'https://github.com/SiveMdluli/',
    link: 'https://sivemdluli.github.io/',
  },
];

// Trigger card 0
seebtn.onclick = function () {
  popup.style.display = 'block';
};

span.onclick = function () {
  popup.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
};

// Trigger card 1
seebtn1.onclick = function () {
  popup1.style.display = 'block';
};

span1.onclick = function () {
  popup1.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === popup1) {
    popup1.style.display = 'none';
  }
};
// Trigger card 2
seebtn2.onclick = function () {
  popup2.style.display = 'block';
};

span2.onclick = function () {
  popup2.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === popup2) {
    popup2.style.display = 'none';
  }
};
// Trigger card 3

seebtn3.onclick = function () {
  popup3.style.display = 'block';
};

span3.onclick = function () {
  popup3.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === popup3) {
    popup3.style.display = 'none';
  }
};

// Window trigger onclick
window.onclick = function (event) {
  if (event.target === popups) {
    popups.style.display = 'none';
  }
};

const form = document.querySelector('form');
function handleSubmit(event) {
  event.preventDefault();

  const emailInput = document.querySelector('#email');
  const email = emailInput.value;

  if (email === email.toLowerCase()) {
    // If it fits requirement[lowercase], ahead
    form.submit();
  } else {
    // Otherwise show dynamic error below
    let errorMessage = form.querySelector('.errorMsg');
    if (errorMessage) {
      form.removeChild(errorMessage);
    }
    errorMessage = document.createElement('p');
    errorMessage.classList.add('errorMsg');
    errorMessage.textContent = 'Oops! An error has occurred, your email must be lowercase.';
    form.appendChild(errorMessage);
  }
}
form.addEventListener('submit', handleSubmit);