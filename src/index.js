import './style.css';
import Icon from './images/pasta-icon.png';


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
logoText.innerHTML = "THE PASTARIA"

header.appendChild(logo)
header.appendChild(logoText)


//spacer
const spacer = document.createElement('div')
spacer.classList.add('spacer')


//body content
const bodyContent = document.createElement('article')
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
mainSection.appendChild(bodyContent)


//adding components to document
function home() {
document.body.appendChild(mainSection)
}

//sidebar buttons
homeButton.addEventListener('click', (e) => {
    home();
})

menuButton.addEventListener('click', (e) => {
    document.body.removeChild(mainSection)
})

home();