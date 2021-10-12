let page = document.querySelector('.page');
let Button =document.querySelector('.button_them');
Button.onclick = function() {
    page.classList.toggle('light-theme');
    page.classList.toggle('dark-theme');
  };
  