window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    const heroHeight = document.querySelector(".hero").offsetHeight;
  
    if (window.scrollY >= heroHeight) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  })