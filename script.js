/* Toggle SideNav Logic */
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

/* Work Section and Card Popups JS Logic */

const livebtn = 'See live'
const sourcebtn = 'See source'
const projects = [
  {
    name: 'Tonic',
    cat: ['CANOPY', 'Back End Dev', 2015],
    description:
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    tags: ['HTML', 'CSS', 'JavaScript'],
    snapshot: 'img/Snapshoot Portfolio popup.svg',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [livebtn, sourcebtn],
    connectionsURL: ['https://sivemdluli.github.io/', 'https://github.com/SiveMdluli/My-Portfolio/'],
  },
  {
    name: 'Multi-Post Stories',
    cat: ['FACEBOOK', 'Full Stack Dev', 2015],
    description:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    tags: ['HTML', 'CSS', 'JavaScript'],
    snapshot: 'img/Snapshoot Portfolio popup1.svg',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [livebtn, sourcebtn],
    connectionsURL: ['https://sivemdluli.github.io/', 'https://github.com/SiveMdluli/My-Portfolio/'],
  },
  {
    name: 'Facebook 360',
    cat: ['FACEBOOk', 'Full Stack Dev', 2015],
    description:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    tags: ['HTML', 'CSS', 'JavaScript'],
    snapshot: 'img/Snapshoot Portfolio popup2.svg',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [livebtn, sourcebtn],
    connectionsURL: ['https://sivemdluli.github.io/', 'https://github.com/SiveMdluli/My-Portfolio/'],
  },
  {
    name: 'Uber Navigation',
    cat: ['Uber', 'Lead Developer', 2018],
    description:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    tags: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    snapshot: 'img/Snapshoot Portfolio popup3.svg',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [livebtn, sourcebtn],
    connectionsURL: ['https://sivemdluli.github.io/', 'https://github.com/SiveMdluli/My-Portfolio/'],
  },
];

const projects1 = [
  {
    name: 'Tonic',
    cat: ['CANOPY', 'Back End Dev', 2015],
    description:
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    tags: ['HTML', 'CSS', 'JavaScript'],
    snapshot: 'img/Snapshoot Portfolio popup.svg',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [livebtn, sourcebtn],
    connectionsURL: ['https://sivemdluli.github.io/', 'https://github.com/SiveMdluli/My-Portfolio/'],
  },
  {
    name: 'Multi-Post Stories',
    cat: ['FACEBOOK', 'Full Stack Dev', 2015],
    description:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    tags: ['HTML', 'CSS', 'JavaScript'],
    snapshot: 'img/Snapshoot Portfolio popup1.svg',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [livebtn, sourcebtn],
    connectionsURL: ['https://sivemdluli.github.io/', 'https://github.com/SiveMdluli/My-Portfolio/'],
  },
  {
    name: 'Facebook 360',
    cat: ['FACEBOOk', 'Full Stack Dev', 2015],
    description:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    tags: ['HTML', 'CSS', 'JavaScript'],
    snapshot: 'img/Snapshoot Portfolio popup2.svg',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [livebtn, sourcebtn],
    connectionsURL: ['https://sivemdluli.github.io/', 'https://github.com/SiveMdluli/My-Portfolio/'],
  },
  {
    name: 'Uber Navigation',
    cat: ['Uber', 'Lead Developer', 2018],
    description:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    tags: ['HTML', 'CSS', 'Ruby on Rails', 'JavaScript'],
    snapshot: 'img/Snapshoot Portfolio popup3.svg',
    connectionsBtn: ['./images/source-live-btn.svg', './images/source-github-btn.svg'],
    connectionstext: [livebtn, sourcebtn],
    connectionsURL: ['https://sivemdluli.github.io/', 'https://github.com/SiveMdluli/My-Portfolio/'],
  },
];


const body = document.querySelector('body');

function projectModal(e) {
  const addDocFragment = document.createDocumentFragment();
  const projectsModalInfo = projects[parseInt(e.target.dataset.workbtn, 10)];
  
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('project-wrapper');

  const workCardContainer = document.createElement('div');
  workCardContainer.classList.add('card-container', 'work-card');

  const workCardHeading = document.createElement('div');
  workCardHeading.classList.add('work-card-cont');

  const cardCloseBtn = document.createElement('span');
  cardCloseBtn.textContent = 'X';
  cardCloseBtn.classList.add('close-popup');

  // Declaring card H2 and targeting 'name' of card form list above
  const cardTitle = document.createElement('h2');
  cardTitle.textContent = projectsModalInfo.name;
  cardTitle.classList.add('card-title');


  // Appending children in order
  workCardHeading.appendChild(cardTitle);
  workCardHeading.appendChild(cardCloseBtn);
  addDocFragment.appendChild(workCardHeading);

  const workCap = document.createElement('ul');
  workCap.classList.add('work-cap');
  for (let i = 0; i < projectsModalInfo.cat.length; i += 1) {
    const capList = document.createElement('li');

    if(i === 0) capList.classList.add('cap-title');
    else capList.classList.add('cap-descrip');
    capList.textContent = projectsModalInfo.cat[i];
    workCap.appendChild(capList);
  }
  addDocFragment.appendChild(workCap);

  const cardImg = document.createElement('img');
  cardImg.classList.add('card-image');
  // targeting the created cont, which link the projects predefined
  cardImg.src = projectsModalInfo.snapshot;
  cardImg.alt = `${projectsModalInfo.name} Project, ${projectsModalInfo.cat[2]}`;
  addDocFragment.appendChild(cardImg);


  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body')

  const cardDescrip = document.createElement('p');
  cardDescrip.classList.add('card-description');
  cardDescrip.textContent = projectsModalInfo.description;
  cardBody.appendChild(cardDescrip);

  addDocFragment.appendChild(cardBody);

  const cardFooter = document.createElement('div');
  cardFooter.classList.add('card-footer');

  const cardLangList = document.createElement('ul');
  cardLangList.classList.add('card-langs');
  projectsModalInfo.tags.forEach((tag) => {
    const langList = document.createElement('li');
    langList.classList.add('card-lang')
    langList.textContent = tag;
    cardLangList.appendChild(langList);
  });

  const cardBtnsContainer = document.createElement('div');
  cardBtnsContainer.classList.add('card-btns');
  for(let i = 0; i < 2; i += 1) {
    const cardBtnsLink = document.createElement('a');
    cardBtnsLink.href = projectsModalInfo.connectionsURL[i];
    cardBtnsLink.target = '_black';

    const cardBtns = document.createElement('button');
    cardBtns.classList.add('work-btn');

    const cardBtnsText = document.createElement('span');
    cardBtnsText.textContent = projectsModalInfo.connectionstext[i];
    cardBtns.appendChild(cardBtnsText);

    const cardBtnsImg = document.createElement('img');
    cardBtnsImg.src = projectsModalInfo.connectionsBtn[i];
    cardBtnsImg.alt = projectsModalInfo.connectionstext[i];
    cardBtnsImg.classList.add('card-image');

    cardBtns.appendChild(cardBtnsImg);
    cardBtnsLink.appendChild(cardBtns);
    cardBtnsContainer.appendChild(cardBtnsLink);
  }

  cardFooter.appendChild(cardLangList);
  cardFooter.appendChild(cardBtnsContainer);
  cardBody.appendChild(cardFooter);
  addDocFragment.appendChild(cardBody);

  workCardContainer.appendChild(addDocFragment);
  projectContainer.appendChild(workCardContainer);
  body.appendChild(projectContainer);

  const closeBtn = document.querySelector('.close-popup');
  closeBtn.addEventListener('click', () => body.removeChild(projectContainer));
}

function dynamicRendring() {
  const docFragmentSt = document.createDocumentFragment();
  const addDocFragment = document.createDocumentFragment();
  const docFragmentFinal = document.createDocumentFragment();

  const projectContainer = document.createElement('ul');
  projectContainer.classList.add('works');
  const introSection = document.querySelector('#intro');
  const workSection = document.createElement('section');
  workSection.classList.add('scroll', 'modal-blur');
  workSection.setAttribute('id', 'works');

  for (let i = 0; i < projects1.length; i += 1 ) {
    const projectsModalInfo = projects1[i];
    const workCardContainer = document.createElement('li');
    workCardContainer.classList.add('work');

    const cardImg = document.createElement('img');
    cardImg.classList.add('card-image');
    // targeting the created cont, which link the projects predefined
    cardImg.src = projectsModalInfo.snapshot;
    cardImg.alt = `${projectsModalInfo.name} Project, ${projectsModalInfo.cat[2]}`;
    docFragmentSt.appendChild(cardImg);

    const workCard = document.createElement('div');
    workCard.classList.add('work-card');

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = projectsModalInfo.name;
    cardTitle.classList.add('card-title');
    addDocFragment.appendChild(cardTitle);

    const workCap = document.createElement('ul');
    workCap.classList.add('work-cap');
    for (let i = 0; i < projectsModalInfo.cat.length; i += 1) {
      const capList = document.createElement('li');
  
      if(i === 0) capList.classList.add('cap-title');
      else capList.classList.add('cap-descrip');
      capList.textContent = projectsModalInfo.cat[i];
      workCap.appendChild(capList);
    }
    addDocFragment.appendChild(workCap);

    const cardDescrip = document.createElement('p');
    cardDescrip.classList.add('card-description');
    cardDescrip.textContent = projectsModalInfo.description;
    addDocFragment.appendChild(cardDescrip);

    const cardLangList = document.createElement('ul');
    cardLangList.classList.add('card-langs');
    projectsModalInfo.tags.forEach((tag) => {
      const langList = document.createElement('li');
      langList.classList.add('card-lang')
      langList.textContent = tag;
      cardLangList.appendChild(langList);
    });
    addDocFragment.appendChild(cardLangList);

    const cardBtnsContainer = document.createElement('div');
    cardBtnsContainer.classList.add('card-btns');
    const cardBtns = document.createElement('button');
    cardBtns.classList.add('work-btn');
    cardBtns.textContent = 'See Project';
    cardBtns.setAttribute('data-workBtn', `${i}`);

    cardBtnsContainer.append(cardBtns);
    addDocFragment.appendChild(cardBtnsContainer);
    workCard.append(addDocFragment);
    docFragmentSt.appendChild(workCard);
    workCardContainer.appendChild(docFragmentSt);
    docFragmentFinal.appendChild(workCardContainer);
  }

  projectContainer.appendChild(docFragmentFinal);
  workSection.appendChild(projectContainer);
  introSection.parentNode.insertBefore(workSection, introSection.nextSibling);
  const projectBtns = document.querySelectorAll('.work-btn');
  projectBtns.forEach((btn) => btn.addEventListener('click', projectModal));
}

window.addEventListener('load', dynamicRendring);


/* Contact validation logic Section */
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