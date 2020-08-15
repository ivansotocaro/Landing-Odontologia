const container_menu = document.getElementsByClassName("contenedor__menu")[0];
const container_hamburgue = document.getElementsByClassName(
  "container_hamburgue"
)[0];
const img_hamburgue = document.getElementById("img_hamburgue");

let abierto = false;

const toggleMenu = () => {
  container_menu.classList.toggle("container_menu2");
  container_menu.style.transition = "transform 0.5s ease";
};

container_hamburgue.addEventListener("click", function () {
  toggleMenu();
});
