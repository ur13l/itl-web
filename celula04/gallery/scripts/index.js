let images = [];
let base64Preview = null;
const gallery = document.getElementById("gallery");
const input = document.querySelector("#input-name");
const addButton = document.querySelector("#button-image");
const addFileInput = document.querySelector("#input-file");

document.addEventListener("DOMContentLoaded", () => {
  getImages();
  addButton.addEventListener("click", () => {
    if (!base64Preview || !input.value) {
      alert("Por favor, carga una imagen con su nombre primero");
      return;
    }
    const image = {
      name: input.value,
      base64: base64Preview,
    };
    addImage(image);
  });

  addFileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      base64Preview = event.target.result;
      const imagePreview = document.querySelector("#image-preview");
      imagePreview.src = event.target.result;
      imagePreview.alt = file.name;
      imagePreview.style.objectFit = "contain";
    };
    reader.readAsDataURL(file);
  });
});

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
    const img = document.createElement("img");
    img.src = image.base64;
    img.alt = image.name;
    img.style.width = "200px";
    img.style.height = "200px";
    img.style.objectFit = "cover";
    gallery.appendChild(img);

    // var nameSpan = document.createElement("span");
    // nameSpan.textContent = image.name;
    // gallery.appendChild(nameSpan);
  });
}
