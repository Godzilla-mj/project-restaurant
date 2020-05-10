function renderContact() {
  console.log('renderContact()')
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

  const contactContent = document.createElement('div')
  contactContent.classList.add('content contact')

    const contactHead = document.createElement('h1')
      contactHead.innerHTML = 'Testing contactHead'
      contactContent.appendChild(contactHead)
    const contactTxt = document.createElement('p')
      contactTxt.innerHTML = 'TesticontactTxt'
      contactContent.appendChild(contactTxt)

  content.appendChild(banner)
  content.appendChild(navBar)
  content.appendChild(contactContent)
}

export {renderContact}
