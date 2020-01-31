function multilevel(e) {
  if (this.classList.contains('active')) {
      this.classList.remove('active');
      
  } else if (this.parentElement.parentElement.classList.contains('active')) {
      this.classList.add('active');
      
  } else {
      for (let i = 0; i < menu.length; i++) {
          menu[i].classList.remove('active');   
      }
      this.classList.add('active');
  }
  e.stopPropagation();
}

const menu = document.querySelectorAll('li');
 
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click', multilevel);
}
