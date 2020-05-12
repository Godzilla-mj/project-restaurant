function renderMenu() {
  console.log('renderMenu()')
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

  const menuContent = document.createElement('div')
  menuContent.classList.add('content-menuList')

    const menuHead = document.createElement('h1')
      menuHead.innerHTML = 'Menu:'
      menuContent.appendChild(menuHead)
    const menuList = document.createElement('div')
      menuList.classList.add('menuList')

    const menuArr = [
      ['Cold Deli Meat Cut Spread', '$MP', '<img src="imgs/coldcuts.jpeg">'],
      ['Salty Meat Spread', '$MP', '<img src="imgs/meat.jpg">'],
      ['Truly Tough Spread', '50% OFF $MP', '<img src="imgs/saltyspitoon.jpg">'],
      ['Weenie Hut Spread', '50% MORE $MP', '<img src="imgs/vegan.jpg">'],
      ['Salty Tough Cannibal Spread', 'FREE YOU ANIMAL', '<img src="imgs/seafood.jpg">']
    ]

    for (let i = 0; i < menuArr.length; i++) {
      const row = document.createElement('div')
      row.classList.add('row')
      for (let j = 0; j < menuArr[i].length; j++) {
        const item = document.createElement('div')
        item.classList.add('food')
        item.innerHTML = menuArr[i][j];

        if (j === 2) {
          item.classList.add('itemImg')
        }
        row.appendChild(item)
      }
      menuList.appendChild(row)
    }
    menuContent.appendChild(menuList)

  content.appendChild(navBar)
  content.appendChild(menuContent)
}

export {renderMenu}
