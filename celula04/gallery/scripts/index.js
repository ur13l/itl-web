let images = [];
const gallery = document.getElementById("gallery");
const input = document.querySelector("#input-name");
const addButton = document.querySelector("#button-image");

document.addEventListener("DOMContentLoaded", () => {
  getImages();
  addButton.addEventListener("click", () => {
    const image = {
      name: input.value,
    };
    addImage(image);
  });
});

function getImages() {
  images = JSON.parse(localStorage.getItem("images", "[]"));
  displayImages();
}

function addImage(image) {
  images.push(image);
  localStorage.setItem("images", JSON.stringify(images));
  displayImages();
}

function displayImages() {
  gallery.innerHTML = "";
  images.forEach((image) => {
    var nameSpan = document.createElement("span");
    nameSpan.textContent = image.name;
    gallery.appendChild(nameSpan);
  });
}
