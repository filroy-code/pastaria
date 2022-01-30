import './style.css';
import Icon from './images/pasta-icon.png';
import PastaShrimp from './images/shrimp-alfredo.jpg';
import PastaClassic from './images/classic-bolognaise.jpg';
import PastaTurkey from './images/turkey-bolognaise.jpg';
import PizzaSpicy from './images/spicy-chicken-pizza.jpg';
import PizzaBalsamic from './images/balsamic-glaze-pizza.jpg';
import Hoagie from './images/sausage-and-peppers-19.jpg';
import Seating from './images/highlight.jpg';
import Chefs1 from './images/marmotte-mountain-chef.jpg';
import Chefs2 from './images/chefs-kitchen.jpg';

let activeTab = 0;

//navigation pane
const sidebar = document.createElement('section')
sidebar.classList.add('sidebar')

const navbar = document.createElement('nav')

const homeButton = document.createElement('div')
homeButton.classList.add('navigation')
const homeText = document.createElement('h2')
homeText.innerHTML = 'About'
homeButton.appendChild(homeText)
const menuButton = document.createElement('div')
menuButton.classList.add('navigation')
const menuText = document.createElement('h2')
menuText.innerHTML = 'Menu'
menuButton.appendChild(menuText)
const contactButton = document.createElement('div')
contactButton.classList.add('navigation')
const contactText = document.createElement('h2')
contactText.innerHTML = 'Contact'
contactButton.appendChild(contactText)

navbar.appendChild(homeButton)
navbar.appendChild(menuButton)
navbar.appendChild(contactButton)

sidebar.appendChild(navbar)
document.body.appendChild(sidebar)

//header
const header = document.createElement('header')

const logo = document.createElement('img')
logo.setAttribute('src', `${Icon}`)
logo.setAttribute('alt', 'Pastaria Logo')
logo.setAttribute('id', 'main-logo')

const logoText = document.createElement('h1')
logoText.classList.add('logo-text')
logoText.innerHTML = "THE PASTARIA"

header.appendChild(logo)
header.appendChild(logoText)


//spacer
const spacer = document.createElement('div')
spacer.classList.add('spacer')


//body content
const bodyContent = document.createElement('article')
bodyContent.classList.add('body-content')
const mottoText = document.createElement('h2')
mottoText.innerHTML = '"Your satisfaction is our satisfaction."'
const mottoPara = document.createElement('p')
mottoPara.innerHTML = 'Every dish at Pastaria is crafted with love and utmost attention to detail. Our ingredients are hand-picked by our master chefs and our staff are trained to stringent standards of quality.'
bodyContent.appendChild(mottoText)
bodyContent.appendChild(mottoPara)

//image carousel

const carousel = document.createElement('section')
carousel.classList.add('image-carousel')

const carouselContainer = document.createElement('div')
carouselContainer.classList.add('container')

carousel.appendChild(carouselContainer)

class Picture {
    constructor(source) {
    this.source = source}

    info() {
        console.log(this.source)
    }
}

const gallery = document.createElement('div')
gallery.setAttribute('id', 'gallery')
carouselContainer.appendChild(gallery)

let first = new Picture(Seating)
let second = new Picture(Chefs1)
let third = new Picture(Chefs2)

let pictures = [first, second, third]

let i = 0;
let x2 = 0;

pictures.forEach((picture) => {
    picture = document.createElement('img')
    picture.setAttribute('src', `${pictures[i].source}`)
    picture.classList.add('gallery')
    gallery.appendChild(picture)
    i++
})
/*
const leftButton = document.createElement('button')
const rightButton = document.createElement('button')

leftButton.classList.add('leftnavButton')
rightButton.classList.add('rightnavButton')
leftButton.classList.add('navButton')
rightButton.classList.add('navButton')
leftButton.innerHTML = "←"
rightButton.innerHTML = "→"

carouselContainer.appendChild(leftButton)
carouselContainer.appendChild(rightButton)
const galleryHUD = document.createElement('div')
galleryHUD.classList.add('galleryHUD')

let ticker = 0;
pictures.forEach((picture) => {
    picture = document.createElement('button')
    picture.classList.add('hudButton')
    picture.setAttribute('data-value', `${ticker}`)
    galleryHUD.appendChild(picture)
    ticker++;
})
*/
const hudBanner = document.createElement('div')
hudBanner.classList.add('hudBanner')
carouselContainer.appendChild(hudBanner)

//hudBanner.appendChild(galleryHUD)

const hud = document.querySelectorAll('.hudButton')

hud.forEach((button) => {
    button.addEventListener('click', (e) => {
    x2 = +button.dataset.value;
    slide(x2) })
})
/*
leftButton.addEventListener('click', (e) => {
    if (x2 === 0) {x2 = (pictures.length - 1)} else {x2--};
    slide(x2)
})

rightButton.addEventListener('click', (e) => {
    if (x2 === (pictures.length - 1)) {x2 = 0} else {x2++;};
    slide(x2);
})

function updateHUD(x2) {
    hud.forEach((bubble) => {
        bubble.classList.remove('activeBubble')
    })
   // hud[x2].classList.add('activeBubble')
}
*/
function slide(x2) {
    let galleryPosition = (x2) * (-100);
    gallery.style.left = `${galleryPosition}%`;
   // updateHUD(x2)
}

// updateHUD(x2)
slide(x2)

let slideTimer = setInterval(function(){
    if (x2 === (pictures.length - 1)) {x2 = 0} else {x2++;};
    slide(x2)
}, 5000);

const allButtons = document.querySelectorAll('button')
allButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        clearInterval(slideTimer);
        slideTimer = setInterval(function(){
            if (x2 === (pictures.length - 1)) {x2 = 0} else {x2++;};
            slide(x2)
        }, 5000);
    })
})

//creating main section
const mainSection = document.createElement('div')
mainSection.classList.add('main-section')
mainSection.appendChild(header)
mainSection.appendChild(spacer)
document.body.appendChild(mainSection)


//adding homepage to document
function home() {
    activeTab = 0;
    mainSection.appendChild(bodyContent)
    mainSection.appendChild(carousel)
}

function menuCreate() {
    activeTab = 1;
    mainSection.appendChild(menu)
}

function contactCreate() {
    activeTab = 2;
    mainSection.appendChild(contactSection)
}

home();


//menu section creation
const menu = document.createElement('section')
menu.classList.add('menu')


//menu header
const menuTitle = document.createElement('h2')
menuTitle.innerHTML = "Menu"
const menuBlurb = document.createElement('p')
menuBlurb.innerHTML = "Our carefully curated selection of Italian-inspired cuisine."

menu.appendChild(menuTitle)
menu.appendChild(menuBlurb)

const menuItems = document.createElement('section')
menuItems.classList.add('menu-items')
const menuListOne = document.createElement('ul')
const menuListTwo = document.createElement('ul')
menuItems.appendChild(menuListOne)
menuItems.appendChild(menuListTwo)
menu.appendChild(menuItems)


//menu items
class Item {
    constructor(name, price, description, image) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}

const shrimpFredo = new Item(
    'Wild Shrimp Alfredo',
    '$24.99',
    'Our classic shrimp alfredo is made with the freshest Wild Blue Shrimp, tossed in rich creamy garlic alfredo sauce.',
    PastaShrimp,
    )

const bolognaise = new Item(
    'Classic Bolognaise Pasta',
    '$24.99',
    'Our classic bolognaise is made with hormone-free, grass-fed beef, marinated for 48 hours in robust house tomato sauce.',
    PastaClassic,
)

const turkeyBolognaise = new Item(
    'Turkey Bolognaise Pasta',
    '$24.99',
    'Our turkey bolognaise is made with ethically raised free-range turkey, tenderly simmered in spicy house tomato sauce.',
    PastaTurkey,
)

const spicyPizza = new Item(
    'Spicy Chicken Pizza',
    '$32.99',
    'Our spicy chicken pizza is made with organic free range chicken and garnished with marinara sauce, onions, pepperoni, and more.',
    PizzaSpicy,
)

const balsamicPizza = new Item(
    'Balsamic Glaze Pizza',
    '$33.99',
    'Our balsamic glaze pizza is made with bold imported balsmic vinegar from Tuscany, and topped with spinach, sundried tomatoes, and mushrooms.',
    PizzaBalsamic,
)

const sausageHoagie = new Item(
    'Italian Sausage Hoagie',
    '$18.99',
    'Our sausage-and-pepper hoagies are an upscale take on a street-food classic. Each order comes with two hoagies topped with our mesquite marinara sauce.',
    Hoagie,
)

let menuArray = [
    shrimpFredo,
    bolognaise,
    turkeyBolognaise,
    spicyPizza,
    balsamicPizza,
    sausageHoagie
]

let x = 0;
menuArray.forEach((item) => {
    let list = document.createElement('li')
    let container = document.createElement('article')
    container.classList.add('menuItem')
    let foodImage = document.createElement('img')
    foodImage.classList.add('item')
    foodImage.setAttribute('src', `${item.image}`)
    let itemTitle = document.createElement('h4')
    itemTitle.innerHTML = `${item.name}`
    let itemPrice = document.createElement('h5')
    itemPrice.innerHTML = `${item.price}`
    let itemDescription = document.createElement('p')
    itemDescription.innerHTML = `${item.description}`
    container.appendChild(foodImage)
    container.appendChild(itemTitle)
    container.appendChild(itemPrice)
    container.appendChild(itemDescription)
    list.appendChild(container)
    if (x < 3) {menuListOne.appendChild(list)} else {
        menuListTwo.appendChild(list)
    }
    x++
})

//creating contact section
const contactSection = document.createElement('section')
contactSection.classList.add('contact')

const contactHeading = document.createElement('h2')
contactHeading.innerHTML = "Contact Us"

const ourContact = document.createElement('address')
ourContact.classList.add('ourContact')
const emailAddress = document.createElement('p')
emailAddress.innerHTML = "inquiries@pastaria.com"
const phoneNumber = document.createElement('p')
phoneNumber.innerHTML = "(555)-555-5555"
const address = document.createElement('p')
address.innerHTML = "123 Fake Street, Toronto, ON, Canada"

ourContact.appendChild(emailAddress)
ourContact.appendChild(phoneNumber)
ourContact.appendChild(address)

const customerForm = document.createElement('form')
customerForm.setAttribute('action', 'placeholder') //send the form to 'placeholder'
customerForm.setAttribute('method', 'post')

const nameInputLabel = document.createElement('label')
nameInputLabel.setAttribute('for', 'yourName')
nameInputLabel.innerHTML = "Your Name:   "
const nameInput = document.createElement('input')
nameInput.setAttribute('type', 'text')
nameInput.setAttribute('id', 'yourName')
nameInput.setAttribute('placeholder', 'e.g. John Smith')

const emailInputLabel = document.createElement('label')
emailInputLabel.setAttribute('for', 'yourName')
emailInputLabel.innerHTML = "Email Address:   "
const emailInput = document.createElement('input')
emailInput.setAttribute('type', 'email')
emailInput.setAttribute('id', 'email')
emailInput.setAttribute('placeholder', 'example@email.com')

const inquiryInputLabel = document.createElement('label')
inquiryInputLabel.setAttribute('for', 'inquiry')
inquiryInputLabel.innerHTML = "Please tell us how we can assist you:   "
const inquiryInput = document.createElement('textarea')
inquiryInput.setAttribute('rows', '10')
inquiryInput.setAttribute('cols', '60')
inquiryInput.setAttribute('id', 'inquiry')

const submitButton = document.createElement('button')
submitButton.setAttribute('type', 'submit')
submitButton.innerHTML = "Submit"

const lineBreak = document.createElement('br')
const lineBreak2 = document.createElement('br')
const lineBreak3 = document.createElement('br')
const lineBreak4 = document.createElement('br')

customerForm.appendChild(nameInputLabel)
customerForm.appendChild(nameInput)
customerForm.appendChild(emailInputLabel)
customerForm.appendChild(emailInput)
customerForm.appendChild(lineBreak)
customerForm.appendChild(lineBreak2)
customerForm.appendChild(inquiryInputLabel)
customerForm.appendChild(inquiryInput)
customerForm.appendChild(lineBreak3)
customerForm.appendChild(lineBreak4)
customerForm.appendChild(submitButton)

contactSection.appendChild(contactHeading)
contactSection.appendChild(ourContact)
contactSection.appendChild(customerForm)

//sidebar buttons

function removeTab() {
    switch (activeTab) {
        case 0: mainSection.removeChild(bodyContent);
            mainSection.removeChild(carousel);
            break
        case 1: mainSection.removeChild(menu);
            break;
        case 2: mainSection.removeChild(contactSection);
            break}
}
homeButton.addEventListener('click', (e) => {
    removeTab()
    home();
})

menuButton.addEventListener('click', (e) => {
    removeTab()
    menuCreate()
})

contactButton.addEventListener('click', (e) => {
    removeTab()
    contactCreate()
})

const headerButton = document.querySelector('header')

headerButton.addEventListener('click', (e) => {
    removeTab()
    home();
})