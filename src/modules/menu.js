function renderMenu() {
  console.log('renderMenu()')
  const content = document.querySelector('.content')

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

  const menuContent = document.createElement('div')
  menuContent.classList.add('content-menu')

    const menuHead = document.createElement('h1')
      menuHead.innerHTML = 'Testing menuHead'
      menuContent.appendChild(menuHead)
    const menuTxt = document.createElement('p')
      menuTxt.innerHTML = 'Testing menuTxt'
      menuContent.appendChild(menuTxt)

  content.appendChild(navBar)
  content.appendChild(menuContent)
}

export {renderMenu}
