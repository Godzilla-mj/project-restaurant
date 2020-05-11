function renderContact() {
  console.log('renderContact()')
  const content = document.querySelector('.content')

  const navBar = document.createElement('div')
  navBar.classList.add('navBar')

    const logoImg = document.createElement('img')
    logoImg.classList.add('logo')
    logoImg.setAttribute( 'src', 'imgs/salty weenie hut.png')
    navBar.appendChild(logoImg)

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

  const contactContent = document.createElement('div')
  contactContent.classList.add('content-contact')

    const contactHead = document.createElement('h1')
      contactHead.innerHTML = 'Testing contactHead'
      contactContent.appendChild(contactHead)
    const contactTxt = document.createElement('p')
      contactTxt.innerHTML = 'Testing contactTxt'
      contactContent.appendChild(contactTxt)

  content.appendChild(navBar)
  content.appendChild(contactContent)
}

export {renderContact}
