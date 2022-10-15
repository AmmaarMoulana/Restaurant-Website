export default function contactPageLoad () {
    const content = document.querySelector('#content')
    const contactInfo = document.createElement('div')
    contactInfo.classList = "contactInfo"
    content.appendChild(contactInfo)

    const map = document.createElement('div')
    map.classList = "map"
    contactInfo.appendChild(map)

    const contactUs = document.createElement('div')
    contactUs.classList = "contactUs"
    contactUs.textContent = "Our Address - \r\n 420/69 Transdimensional Portal, \r\n UnderSea Cosmopolitan, \r\n Bermuda Triangle"
    contactInfo.appendChild(contactUs)
    
    const hours = document.createElement('div')
    hours.classList = "hours"
    hours.textContent = "Opening hours - \r\n All hours in all past present and future timelines"
    contactUs.appendChild(hours)

}