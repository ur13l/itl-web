let images = [];
let currentImage = null;
const gallery = document.getElementById("gallery");
const input = document.querySelector("#input-name");
const inputFile = document.querySelector("#input-file");
const addButton = document.querySelector("#button-image");

document.addEventListener("DOMContentLoaded", () => {
  getImages();
  addButton.addEventListener("click", () => {
    if (!currentImage) {
      alert("No hay imagen seleccionada");
      return;
    }
    const image = {
      name: input.value,
      image: currentImage,
    };
    addImage(image);
    currentImage = null;
  });

  inputFile.addEventListener("change", loadImageFromInput);
});

function loadImageFromInput(event) {
  console.log(event);
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    currentImage = event.target.result;
    console.log(currentImage);
  };
  reader.readAsDataURL(file);
}

function getImages() {
  images = JSON.parse(localStorage.getItem("images")) ?? [];
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
    const imgElement = document.createElement("img");
    imgElement.src = image.image;
    imgElement.width = 200;
    imgElement.height = 200;
    imgElement.style.objectFit = "cover";
    gallery.appendChild(imgElement);
  });
}
