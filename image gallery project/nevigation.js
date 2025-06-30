 const fullImgBox = document.getElementById("fullImgBox");
  const fullImg = document.getElementById("fullImg");
  const galleryImgs = document.querySelectorAll(".gallery-img");
  let currentIndex = 0;

  galleryImgs.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      showFullImg();
    });
  });

  function showFullImg() {
    fullImgBox.style.display = "flex";
    fullImg.src = "";
    setTimeout(() => {
      fullImg.src = galleryImgs[currentIndex].src;
    }, 50);
  }

  function closeFullImg() {
    fullImgBox.style.display = "none";
  }

  function nextImg() {
    currentIndex = (currentIndex + 1) % galleryImgs.length;
    showFullImg();
  }

  function prevImg() {
    currentIndex = (currentIndex - 1 + galleryImgs.length) % galleryImgs.length;
    showFullImg();
  }