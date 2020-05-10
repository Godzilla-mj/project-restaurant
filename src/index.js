import { renderHome } from './modules/home'
import { renderMenu } from './modules/menu'
import { renderContact } from './modules/contact'

renderHome();

let navBar

(function addListeners() {
  navBar = document.querySelectorAll('.navBar')

  navBar.forEach((tab) => {
    tab.addEventListener('click', () => {
      clearContent();
      if (tab.innerHTML === 'Home') {
        renderHome();
        addListeners()
      } else if (tab.innerHTML === 'Menu') {
        renderMenu();
        addListeners()
      } else if (tab.innerHTML === 'Contact') {
        renderContact();
        addListeners()
      }
    })
  })
})()

function clearContent() {
  document.querySelector('.content').innerHTML = '';
}
