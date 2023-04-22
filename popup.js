const body = document.querySelector('.expandcard');
const projects = document.getElementById('projects');
const popUp = document.createElement('section');
const showButton = document.getElementsByClassName('popBtn');

const popupInfo = [
  {
    id: 0,
    header: 'Tonic',
    canopy: 'CANOPY',
    backend: 'Back End Dev',
    year: '2015',
    popupPhoto: 'img/Snapshootpopup1.svg',
    content: 'Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
  },

  {
    id: 1,
    header: 'Multi-Post Stories',
    canopy: 'CANOPY',
    backend: 'Back End Dev',
    year: '2015',
    popupPhoto: 'img/Snapshootpopup2.svg',
    content: 'Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
  },

  {
    id: 2,
    header: 'Tonic',
    canopy: 'CANOPY',
    backend: 'Back End Dev',
    year: '2015',
    popupPhoto: 'img/Snapshootpopup3.svg',
    content: 'Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
  },

  {
    id: 3,
    header: 'Multi-Post Stories',
    canopy: 'CANOPY',
    backend: 'Back End Dev',
    year: '2015',
    popupPhoto: 'img/Snapshootpopup4.svg',
    content: 'Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
  },
];

const projectInfo = [
  {
    id: 0,
    header: 'Tonic',
    canopy: 'CANOPY',
    backend: 'Back End Dev',
    year: '2015',
    popupPhoto: 'img/Snapshootpopup1.svg',
    content: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tools: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    id: 1,
    header: 'Multi-Post Stories',
    canopy: 'CANOPY',
    backend: 'Back End Dev',
    year: '2015',
    popupPhoto: 'img/Snapshootpopup2.svg',
    content: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tools: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    id: 2,
    header: 'Tonic',
    canopy: 'CANOPY',
    backend: 'Back End Dev',
    year: '2015',
    popupPhoto: 'img/Snapshootpopup3.svg',
    content: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tools: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    id: 3,
    header: 'Multi-Post Stories',
    canopy: 'CANOPY',
    backend: 'Back End Dev',
    year: '2015',
    popupPhoto: 'img/Snapshootpopup4.svg',
    content: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tools: ['HTML', 'CSS', 'JavaScript'],
  },
];

projects.innerHTML = ` 
<div class="card-body">
  <div class="card-img">
  <img src="${projectInfo[0].popupPhoto}" width="100%"/>       
  </div>
  <div>
    <h2 class="card-header">${projectInfo[0].header}</h2>
    <ul class="card-sub">
      <li class="remove">${projectInfo[0].canopy}</li>
      <div class="bullet-point"><img src="img/Counter.svg" alt="Bullet Point"></div>
      <li>${projectInfo[0].backend}</li>
      <div class="bullet-point"><img src="img/Counter.svg" alt="Bullet Point"></div>      
      <li>${projectInfo[0].year}</li>
    </ul>
    <div class="card-content">
      <p>
      ${projectInfo[0].content}
      </p>
      <ul class="tools">
        <li>${projectInfo[0].tools[0]}</li>
        <li>${projectInfo[0].tools[1]}</li>
        <li>${projectInfo[0].tools[2]}</li>
      </ul>
      <button class="popBtn show">See project</button>
    </div>
  </div>
  </div>

  <div class="card-body">
  <div class="card-img swap">
  <img src="${projectInfo[1].popupPhoto}" width="100%"/>       
  </div>
  <div>
    <h2 class="card-header">${projectInfo[1].header}</h2>
    <ul class="card-sub">
      <li class="remove">${projectInfo[1].canopy}</li>
      <div class="bullet-point"><img src="img/Counter.svg" alt="Bullet Point"></div>
      <li>${projectInfo[1].backend}</li>
      <div class="bullet-point"><img src="img/Counter.svg" alt="Bullet Point"></div>
      <li>${projectInfo[1].year}</li>
    </ul>
    <div class="card-content">
      <p>
      ${projectInfo[1].content}
      </p>
      <ul class="tools">
        <li>${projectInfo[1].tools[0]}</li>
        <li>${projectInfo[1].tools[1]}</li>
        <li>${projectInfo[1].tools[2]}</li>
      </ul>
      <button class="popBtn show">See project</button>
    </div>
  </div>
  </div>

  <div class="card-body">
  <div class="card-img">
  <img src="${projectInfo[2].popupPhoto}" width="100%"/>       
  </div>
  <div>
    <h2 class="card-header">${projectInfo[2].header}</h2>
    <ul class="card-sub">
      <li class="remove">${projectInfo[2].canopy}</li>
      <div class="bullet-point"><img src="img/Counter.svg" alt="Bullet Point"></div>
      <li>${projectInfo[2].backend}</li>
      <div class="bullet-point"><img src="img/Counter.svg" alt="Bullet Point"></div>
      <li>${projectInfo[2].year}</li>
    </ul>
    <div class="card-content">
      <p>
      ${projectInfo[1].content}
      </p>
      <ul class="tools">
        <li>${projectInfo[2].tools[0]}</li>
        <li>${projectInfo[2].tools[1]}</li>
        <li>${projectInfo[2].tools[2]}</li>
      </ul>
      <button class="popBtn show">See project</button>
    </div>
  </div>
  </div>

  <div class="card-body">
  <div class="card-img swap">
  <img src="${projectInfo[3].popupPhoto}" width="100%"/>       
  </div>
  <div>
    <h2 class="card-header">${projectInfo[3].header}</h2>
    <ul class="card-sub">
      <li class="remove">${projectInfo[1].canopy}</li>
      <div class="bullet-point"><img src="img/Counter.svg" alt="Bullet Point"></div>
      <li>${projectInfo[3].backend}</li>
      <div class="bullet-point"><img src="img/Counter.svg" alt="Bullet Point"></div>
      <li>${projectInfo[3].year}</li>
    </ul>
    <div class="card-content">
      <p>
      ${projectInfo[3].content}
      </p>
      <ul class="tools">
        <li>${projectInfo[3].tools[0]}</li>
        <li>${projectInfo[3].tools[1]}</li>
        <li>${projectInfo[3].tools[2]}</li>
      </ul>
      <button class="popBtn show">See project</button>
    </div>
  </div>
  </div>
  `;

for (let i = 0; i < showButton.length; i += 1) {
  showButton[i].addEventListener('click', () => {
    body.style.display = 'block';
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    popUp.innerHTML = `
        <section id="modal-section">
        <div class="modal-body">
          <div class="modal-title">
            <h2 class="card-header">${popupInfo[i].header}</h2>
            <i id="modal-close" class="uil uil-multiply"><img src="img/cross.png"></i>
            <ul class="card-sub">
              <li class="remove">${popupInfo[i].canopy}</li>
              <div class="bullet-point"><img src="img/Counter.svg" alt="Bullet Point"></div>

              <li>${popupInfo[i].backend}</li>
              <div class="bullet-point"><img src="img/Counter.svg" alt="Bullet Point"></div>

              <li>${popupInfo[i].year}</li>
            </ul>
          </div>
          <img class="image-img" src="${popupInfo[i].popupPhoto}" width="100%"/>       
          <div>
            <div class="modal-content">
              <p>${popupInfo[i].content}</p>
              <div class="modal-links-content">
                <ul class="tools mobile-cat">
                  <li>${popupInfo[i].tools[0]}</li>
                  <li>${popupInfo[i].tools[1]}</li>
                  <li>${popupInfo[i].tools[2]}</li>
                </ul>
                <div>
                  <hr class="line-break" />
                  <div class="modal-combine">
                    <button class="modal-button live">
                      See live
                      <svg
                        class="svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z"
                          fill="#6070FF"
                        />
                      </svg>
                    </button>
                    <button class="modal-button source">
                      See source
                      <span>
                      <svg
                      class="svg"
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z"
                        fill="#6070FF"
                      />
                    </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        `;
    body.appendChild(popUp);
  });
}

body.addEventListener('click', () => {
  body.style.display = 'none';
  popUp.remove();
});