const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  
  arrow.addEventListener("click", () => {
    // Menentukan berapa banyak item yang bisa muat di layar
    const ratio = Math.floor(window.innerWidth / 270); 
    clickCounter++;
    
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      // Menggeser daftar film ke kiri
      movieLists[i].style.transform = `translateX(${
        -300 * clickCounter
      }px)`;
    } else {
      // Mengembalikan daftar ke posisi awal
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

// Fungsionalitas TOGGLE (Mode Gelap/Terang)
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container, .movie-list-title, .navbar-container, .toggle, .menu-list-item, .profile-text-container, .footer"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});