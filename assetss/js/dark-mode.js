const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const lightModeToggle = document.getElementById("lightModeToggle");

lightModeToggle.addEventListener("click", () => {
  const darkModeElements = document.querySelectorAll(".dark-mode");

  darkModeElements.forEach((element) => {
    element.classList.remove("dark-mode");
  });
});
