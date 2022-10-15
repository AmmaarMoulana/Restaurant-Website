import menuPageLoad from "./menuPage"
import contactPageLoad from "./contactPage"

export default function pageLoad() {
    const content = document.querySelector('#content')
    const navbar = document.createElement('div')
    navbar.classList = "navbar"
    content.appendChild(navbar)

    const homepage = document.createElement('li')
    homepage.classList = "homepage"
    homepage.textContent = "Home"
    navbar.appendChild(homepage)

    const menuPage = document.createElement('li')
    menuPage.classList = "menuPage"
    menuPage.textContent = "Menu"
    navbar.appendChild(menuPage)

    const contactPage = document.createElement('li')
    contactPage.classList = "contactPage"
    contactPage.textContent = "Contact"
    navbar.appendChild(contactPage)
    
    const info = document.createElement('div')
    info.classList = "info"
    content.appendChild(info)

    const h3 = document.createElement('h3')
    h3.textContent = "The Bermuda Cafe"
    info.appendChild(h3)

    menuPage.addEventListener('click', () => {
        content.removeChild(content.lastElementChild)
        menuPageLoad()
    })

    homepage.addEventListener('click', () => {
        content.removeChild(content.lastElementChild)
        content.appendChild(info)
    })

    contactPage.addEventListener('click', () => {
        content.removeChild(content.lastElementChild) 
        contactPageLoad()
    })

   
};



