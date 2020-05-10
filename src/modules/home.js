
function renderHome() {
  const content = document.querySelector('.content')

  const banner = document.createElement('div')

  const navBar = document.createElement('div')

    const home = document.createElement('div')
    home.innerHTML = "Home"
    home.classList.add('navBar')
    navBar.appendChild(home)

    const menu = document.createElement('div')
    menu.innerHTML = "Menu"
    menu.classList.add('navBar')
    navBar.appendChild(menu)

    const contact = document.createElement('div')
    contact.innerHTML = 'Contact'
    contact.classList.add('navBar')
    navBar.appendChild(contact)

  const homeContent = document.createElement('div')
  homeContent.classList.add('content-home')

    const homeHead = document.createElement('h1')
      homeHead.innerHTML = 'Testing homeHead'
      homeContent.appendChild(homeHead)
    const homeTxt = document.createElement('p')
      homeTxt.innerHTML = 'Testing homeTxt'
      homeContent.appendChild(homeTxt)

  content.appendChild(banner)
  content.appendChild(navBar)
  content.appendChild(homeContent)
}

export { renderHome }
