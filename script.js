// Selecting elements
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox-modal");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;
let allImages = [];

galleryItems.forEach((item, index) => {
  const imgElement = item.querySelector("img");
  allImages.push(imgElement.src);

  item.addEventListener("click", () => {
    openLightbox(index);
  });
});
function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "flex";
  updateLightboxImage();
}

function closeLightbox() {
  lightbox.style.display = "none";
}

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

function changeSlide(direction) {
  currentIndex += direction;

  if (currentIndex >= allImages.length) {
    currentIndex = 0;
  }

  if (currentIndex < 0) {
    currentIndex = allImages.length - 1;
  }

  updateLightboxImage();
}
function updateLightboxImage() {
  lightboxImg.src = allImages[currentIndex];
}
function filterSelection(category) {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
    if (
      btn.innerText.toLowerCase() === category ||
      (category === "all" && btn.innerText === "All")
    ) {
      btn.classList.add("active");
    }
  });

  galleryItems.forEach((item) => {
    if (category === "all") {
      item.classList.remove("hide");
    } else {
      if (item.classList.contains(category)) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    }
  });
}
