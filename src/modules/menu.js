function renderMenu() {
  console.log('renderMenu()')
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

  const menuContent = document.createElement('div')
  menuContent.classList.add('content menu')

    const menuHead = document.createElement('h1')
      menuHead.innerHTML = 'Testing menuHead'
      menuContent.appendChild(menuHead)
    const menuTxt = document.createElement('p')
      menuTxt.innerHTML = 'Testing menuTxt'
      menuContent.appendChild(menuTxt)

  content.appendChild(banner)
  content.appendChild(navBar)
  content.appendChild(menuContent)
}

export {renderMenu}
