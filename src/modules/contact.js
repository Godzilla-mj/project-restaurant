function renderContact() {
  console.log('renderContact()')
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

  const contactContent = document.createElement('div')
  contactContent.classList.add('content-contact')

    const leftSide = document.createElement('div')
    leftSide.classList.add('ccContainer')
    contactContent.appendChild(leftSide)

      const leftSideTitle = document.createElement('h3')
      leftSideTitle.innerHTML = "Contact Us!"
      leftSideTitle.classList.add('cc')
      leftSide.appendChild(leftSideTitle)

      const leftSideInfo = document.createElement('p')
      leftSideInfo.innerHTML = "124 Conch Street, Bikini Bottom, Pacific Ocean"
      leftSideInfo.classList.add('cc')
      leftSide.appendChild(leftSideInfo)

    const rightSide = document.createElement('div')
    rightSide.classList.add('ccContainer')
    contactContent.appendChild(rightSide)

      const rightSideTitle = document.createElement('h3')
      rightSideTitle.innerHTML = "Sorry! We're located in the ocean!"
      rightSideTitle.classList.add('cc')
      rightSide.appendChild(rightSideTitle)

      const rightSideInfo = document.createElement('p')
      rightSideInfo.innerHTML = "Don't worry! We're in the process of opening a location near you~! SOON!"
      rightSideInfo.classList.add('cc')
      rightSide.appendChild(rightSideInfo)

  content.appendChild(navBar)
  content.appendChild(contactContent)
}

export {renderContact}
