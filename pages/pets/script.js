/*burger*/

const SIDEBAR = document.querySelector('.logo');
const SIDEBAR2 = document.querySelector('.navigation');
const SIDEBAR3 = document.querySelector('.burger-menu');
const BODYSHADOW = document.querySelector('body');
const shadow = document.querySelector('.shadow');
const ITEMS = document.querySelector('.nav-list')

function openMenu() {
    SIDEBAR.classList.toggle('logo-active');
    SIDEBAR2.classList.toggle('nav-active');
    SIDEBAR3.classList.toggle('buttom-active');
    BODYSHADOW.classList.toggle('body-shadow');
    shadow.classList.toggle('shadow-blured');
};

function closeMenu() {
    SIDEBAR.classList.remove('logo-active');
    SIDEBAR2.classList.remove('nav-active');
    SIDEBAR3.classList.remove('buttom-active');
    BODYSHADOW.classList.remove('body-shadow');
    shadow.classList.remove('shadow-blured');
};

SIDEBAR3.addEventListener('click', openMenu);
ITEMS.addEventListener('click', closeMenu);
shadow.addEventListener('click', closeMenu);

/*popup*/

const petsData = [
    {
        "name": "Jennifer",
        "img": "../../assets/images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"],
        'id': 1,
    },
    {
        "name": "Sophia",
        "img": "../../assets/images/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"],
        'id': 2,
    },
    {
        "name": "Woody",
        "img": "../../assets/images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"],
        'id': 3,
    },
    {
        "name": "Scarlett",
        "img": "../../assets/images/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"],
        'id': 4,
    },
    {
        "name": "Katrine",
        "img": "../../assets/images/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"],
        'id': 5,
    },
    {
        "name": "Timmy",
        "img": "../../assets/images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"],
        'id': 6,
    },
    {
        "name": "Freddie",
        "img": "../../assets/images/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"],
        'id': 7,
    },
    {
        "name": "Charly",
        "img": "../../assets/images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"],
        'id': 8,
    }
  ]
  
  function createPets(petsItemsContainer, petsArr) {
    const petsItems = document.createElement("div");
    petsItems.classList.add("pets-items");

    petsArr.forEach((pet) => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.id = pet.id;

        div.innerHTML = `
            <img src="${pet.img}" alt="${pet.name}" class="card__img">
            <h4 class="card-name">${pet.name}</h4>
            <button class="button button-secondary slider-buttom" id="${pet.id}">Learn more</button>
          `;
        div.addEventListener("click", () => {
            modalWindow(pet);
        });
        petsItems.append(div);
    });
    petsItemsContainer.prepend(petsItems);
}

const petsItemsContainer = document.querySelector(".card-container");
const paginationButtons = document.querySelectorAll(".pagination-arrow");
const paginationPage = document.querySelector(".buttoms-solid");

let pageLength = window.innerWidth >= 1280 ? 8 : window.innerWidth < 768 ? 3 : 6;

let petsDataArray = [];
let page = 1;

window.addEventListener("resize", onResizeWindow);
paginationButtons.forEach((but) => but.addEventListener("click", onClickButton));

createPetsDataArray();

/* Create Arrow */
function createPetsDataArray() {
    petsDataArray = [];
    const array = [...petsData, ...petsData, ...petsData, ...petsData, ...petsData, ...petsData];

    for (let i = 0; i < 48; i = i + pageLength) {
        petsDataArray.push(array.slice(i, i + pageLength).sort(() => Math.random() - 0.5));
        petsDataArray.sort(() => Math.random() - 0.5);
    }

    createPets(petsItemsContainer, petsDataArray[page - 1]);
}

/* Pagination */

function onClickButton(ev) {
  switch (ev.target.dataset.pag) {
      case "first":
          page = 1;
      break;
      case "back":
          page--;
      break;
      case "next":
          page++;
      break;
      case "last":
          page = petsDataArray.length;
      break;
  }
  changePage(false);
}

function changePage(resize) {
  const oldPage = document.querySelector(".pets-items");
  oldPage.classList.add("pets-items-old");

  if (resize) {
      oldPage.remove();
      createPetsDataArray();
  } else {
      setTimeout(() => oldPage.remove(), 500);
      createPets(petsItemsContainer, petsDataArray[page - 1]);
  }

  paginationPage.innerHTML = page;

  paginationButtons.forEach((but) => (but.disabled = ""));

  if (page === 1) {
      paginationButtons[0].disabled = true;
      paginationButtons[1].disabled = true;
  }

  if (page === petsDataArray.length) {
      paginationButtons[2].disabled = true;
      paginationButtons[3].disabled = true;
  }
}

/* Change Window */

function onResizeWindow() {
  let pLength = window.innerWidth >= 1280 ? 8 : window.innerWidth < 768 ? 3 : 6;
  if (pLength != pageLength) {
      pageLength = pLength;
      page = 1;
      changePage(true);
  }
}

/* Modal Window */

function modalWindow(pet) {
  const blackout = document.querySelector(".shadow");
  blackout.classList.add("shadow-blured");
  
  const bodyShadow = document.querySelector("body")
  bodyShadow.classList.add("body-shadow");

  const overflo = document.querySelector("html")
  overflo.classList.add("over");

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const closeButton = document.createElement("button");
  closeButton.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/>
  </svg>`;
  closeButton.classList.add("close-modal");
  closeButton.addEventListener("click", closeModal);

  blackout.addEventListener("click", closeModal);

  modal.innerHTML = `
    ${window.innerWidth >= 768 ? `<img src="${pet.img}" alt="${pet.name}" class="modal-img">` : ''}
    <div class="modal-desc-container">
      <h3>${pet.name}</h3>
      <h4>${pet.type} - ${pet.breed}</h4>
      <p>${pet.description}</p>
      <ul class="modal-desc">
        <li><span>Age:</span> ${pet.age}</li>
        <li><span>Inoculations:</span> ${pet.inoculations.join(", ")}</li>
        <li><span>Diseases:</span> ${pet.diseases.join(", ")}</li>
        <li><span>Parasites:</span> ${pet.parasites.join(", ")}</li>
      </ul>
    <div>
    `;

  modal.prepend(closeButton);
  blackout.append(modal);
}

function closeModal() {
  const blackout = document.querySelector(".shadow")
  blackout.classList.remove("shadow-blured")
  shadow.innerHTML = "";
  const overflo = document.querySelector("html")
  overflo.classList.remove("over")
}