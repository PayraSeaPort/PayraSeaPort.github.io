let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
const scroll_links = document.querySelectorAll('.scroll-link');

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}


// Scroll Screen Fix
scroll_links.forEach(function(link){
  link.addEventListener('click', function(e){
      e.preventDefault();

      const id = e.currentTarget.getAttribute('href').slice(1);
      const element = document.getElementById(id);
      
      let position = element.offsetTop;

      window.scrollTo({
          left: 0,
          top: position,
          behavior: 'smooth',
      })

  });
});