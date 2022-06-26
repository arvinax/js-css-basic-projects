// Pages
document.querySelectorAll('.logo').forEach(logo => {
  logo.addEventListener('click', () => {
      document.querySelector('.front-page').style.display = 'block'
      document.querySelector('.login-page').style.display = 'none'
      document.querySelector('.signup-page').style.display = 'none'
  })
})

document.querySelectorAll('.login').forEach(loginBtn => {
  loginBtn.addEventListener('click', () => {
      document.querySelector('.front-page').style.display = 'none'
      document.querySelector('.login-page').style.display = 'block'
      document.querySelector('.signup-page').style.display = 'none'
  })
})

document.querySelectorAll('.signup').forEach(signupBtn => {
  signupBtn.addEventListener('click', () => {
      document.querySelector('.front-page').style.display = 'none'
      document.querySelector('.login-page').style.display = 'none'
      document.querySelector('.signup-page').style.display = 'flex'
  })
})
// End of Pages


const dropdownItems = document.querySelectorAll(".dropdown-hover");

dropdownItems.forEach((element) => {
   
  element.addEventListener("mouseover", () => {
    element.lastElementChild.style.cssText =
      "opacity: 1; visibility: visible";
      document.querySelector('.navbar-wrapper').style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)';
  });

  element.addEventListener("mouseout", () => {
    element.lastElementChild.style.cssText =
      "opacity: 0; visibility: hidden";
      document.querySelector('.navbar-wrapper').style.background = 'none';
  });

});
