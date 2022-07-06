const pets = [
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
    }
  ]
  
  const carouselInner = document.querySelector('.slider__inner')
  const btnPrev = document.querySelector('.slider__button--left')
  const btnNext = document.querySelector('.slider__button--right')
  
  const createCard = (
    img,
    name,
    type,
    breed,
    description,
    age,
    inoculations,
    diseases,
    parasites,
    className = ''
  ) => {
    return `
      <div class="slider__item ${className}">
        <div class="card" data-name="${name}">
          <img src="${img}" alt="pets-${name.toLowerCase()}" class="card__img">
          <span class="title-slider">${name}</span>
          <button class="slider-buttom">Learn more</button>
          <dialog id="modal" class="modal">
            <div class="modal__wrapper">
              <img src=${img} alt="pets-${name.toLowerCase()}">
              <div>
                <h2 class="modal__name">${name}</h2>
                <p class="modal__type">${type} - ${breed}<p>
                <p class="modal__description">${description}</p>
                <ul class="modal__list">
                  <li><b>Age</b>: ${age}</li>
                  <li><b>Inoculations</b>: ${inoculations.join(',')}</li>
                  <li><b>Diseases</b>: ${diseases.join(',')}</li>
                  <li><b>Parasites</b>: ${parasites.join(',')}</li>
                </ul>
              </div>
              <a class="button-circle modal__btn--close">
                <img src="../../assets/icons/vectorX.svg" alt="modal_close_button">
              </a>
            </div>
          </dialog>
        </div>
      </div> 
      `
  }
  
  pets.forEach((pet) => {
    const card = createCard(
      pet.img,
      pet.name,
      pet.type,
      pet.breed,
      pet.description,
      pet.age,
      pet.inoculations,
      pet.diseases,
      pet.parasites
    )
  
    carouselInner.insertAdjacentHTML('beforeend', card)
  })
  
  function findNamesFirstThreeElements() {
    return [
      ...carouselInner.querySelectorAll('.slider__inner > :not(:nth-child(n+4))'),
    ].map((el) => el.querySelector('.card').dataset.name)
  }
  
  let namesFirstThreeElements = findNamesFirstThreeElements()
  
  function checkForDuplicates() {
    for (let i = carouselInner.children.length; i >= 0; i--) {
      carouselInner.append(carouselInner.children[(Math.random() * i) | 0])
    }
  
    const sliderItems = [...carouselInner.children]
  
    for (let i = 0; i < namesFirstThreeElements.length; i++) {
      let item = sliderItems[i].querySelector('.card')
      if (namesFirstThreeElements.slice(0, 3).includes(item.dataset.name)) {
        return checkForDuplicates()
      }
    }
  
    namesFirstThreeElements = findNamesFirstThreeElements()
  }
  
  const handlePrev = (event) => {
    checkForDuplicates()
    carouselInner.classList.add('prev')
    setTimeout(() => carouselInner.classList.remove('prev'), 300)
  }
  
  const handleNext = (event) => {
    checkForDuplicates()
    carouselInner.classList.add('next')
    setTimeout(() => carouselInner.classList.remove('next'), 300)
  }
  
  btnPrev.addEventListener('click', handlePrev)
  btnNext.addEventListener('click', handleNext)
  
  // Modal Window

const modals = document.querySelectorAll('#modal')
const buttons = document.querySelectorAll('.card')
const modalsButtonsClose = document.querySelectorAll('.modal__btn--close')

;[].forEach.call(buttons, function (btn) {
  btn.addEventListener('click', function (event) {
    event.currentTarget.lastElementChild.showModal()
    document.body.style.overflow = 'hidden'
  })
});
[].forEach.call(modals, function (modal) {
  modal.addEventListener('click', (event) => {
    event.stopPropagation()
    if (event.target.id === 'modal') {
      document.querySelector('#modal[open]').close()
      document.body.style.overflow = ''
    }
  })
});
[].forEach.call(modalsButtonsClose, function (modalButtonClose) {
  modalButtonClose.addEventListener('click', (event) => {
    event.stopPropagation()
    document.querySelector('#modal[open]').close()
    document.body.style.overflow = ''
  })
})
  

// Burger Menu
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
