import './style.css';
import Icon from './images/pasta-icon.png';
import PastaShrimp from './images/shrimp-alfredo.jpg';
import PastaClassic from './images/classic-bolognaise.jpg';
import PastaTurkey from './images/turkey-bolognaise.jpg';
import PizzaSpicy from './images/spicy-chicken-pizza.jpg';
import PizzaBalsamic from './images/balsamic-glaze-pizza.jpg';
import Hoagie from './images/sausage-and-peppers-19.jpg';


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

//creating main section
const mainSection = document.createElement('div')
mainSection.classList.add('main-section')
mainSection.appendChild(header)
mainSection.appendChild(spacer)
document.body.appendChild(mainSection)


//adding homepage to document
function home() {
    mainSection.appendChild(bodyContent)
}

function menuCreate() {
    mainSection.appendChild(menu)
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

//sidebar buttons
homeButton.addEventListener('click', (e) => {
    mainSection.removeChild(menu)
    home();
})

menuButton.addEventListener('click', (e) => {
    mainSection.removeChild(bodyContent)
    menuCreate()
})