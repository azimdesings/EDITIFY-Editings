function sayHello() {
  alert("Welcome to  EDITIFY Editing Portfolio!");
}

// Scroll to Top Button
window.onscroll = function() {
  let btn = document.getElementById("scrollTopBtn");
  if (document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dark/Light Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("light-theme");
}

function openPopup(src) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");

  popupImg.src = src;
  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}



