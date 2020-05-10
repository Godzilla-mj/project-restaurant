
function renderHome() {
  console.log('renderHome()')
  const content = document.querySelector('.content')

  const banner = document.createElement('div')

  const navBar = document.createElement('div')

    const home = document.createElement('div')
    home.innerHTML = "Home"
    home.classList.add('bar home')
    navBar.appendchild('home')

    const menu = document.createElement('div')
    menu.innerHTML = "Menu"
    menu.classList.add('bar menu')
    navBar.appendChild('home')

    const contact = document.createElement('div')
    contact.innerHTML = 'Contact'
    contact.classList.add('bar contact')
    navBar.appendChild('contact')

  const homeContent = document.createElement('div')
  homeContent.classList.add('content home')

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
