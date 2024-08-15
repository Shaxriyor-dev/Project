const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navbar.style.position = "fixed";
  } else {
    navbar.style.position = "static";
    navbar.style.width = "100%"
    
  }


});

function linkActive() {
    const activePage = window.location.pathname;
    const navItems = document.querySelectorAll("nav a");
    navItems.forEach((item) => {
      console.log(item.href.replace(window.location.origin, ''))
      if (item.href.replace(window.location.origin, '') === activePage) {
        item.classList.add("active");
      }
    });
  }
  
  linkActive();
  

const menu = document.querySelector('.menu');
const btn1 = document.querySelector('.btn1');
const navcart = document.querySelector('.nav-cart');

menu.addEventListener('click' , ()=>{
  navcart.classList.toggle("cart")
})
btn1.addEventListener('click' , ()=>{
  navcart.classList.toggle("cart")
  navcart.style.transition = '0.9s'
})

