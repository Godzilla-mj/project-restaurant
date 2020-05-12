
function renderHome() {
  console.log("renderHome()")
  const content = document.querySelector('#content')

  const navBar = document.createElement('div')
  navBar.classList.add('navBar')

    const logo = document.createElement('div')
    const logoImg = document.createElement('img')
    logoImg.classList.add('logo')
    logoImg.setAttribute( 'src', 'imgs/salty weenie hut.png')
    logo.appendChild(logoImg)
    navBar.appendChild(logo)

    const home = document.createElement('div')
    home.innerHTML = "Home"
    home.classList.add('rightNavBarItem')
    navBar.appendChild(home)

    const menu = document.createElement('div')
    menu.innerHTML = "Menu"
    menu.classList.add('rightNavBarItem')
    navBar.appendChild(menu)

    const contact = document.createElement('div')
    contact.innerHTML = 'Contact'
    contact.classList.add('rightNavBarItem')
    navBar.appendChild(contact)

  const homeContent = document.createElement('div')
  homeContent.classList.add('content-home')

    const homeHead = document.createElement('h1')
      homeHead.innerHTML = 'Welcome to Salty Weenie Hut!'
      homeContent.appendChild(homeHead)
    const homeDescrip = document.createElement('h4')
      homeDescrip.innerHTML = 'Where the tough meets the weak!'
      homeContent.appendChild(homeDescrip)
    const homeTxt = document.createElement('p')
      homeTxt.innerHTML = 'Please visit our main location! We will soon be adding more locations soon!'
      homeContent.appendChild(homeTxt)

  content.appendChild(navBar)
  content.appendChild(homeContent)
}

export { renderHome }
