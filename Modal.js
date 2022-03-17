const images = document.querySelectorAll(".gallery__item img");
let imgIndex
let imgSrc;

// get images src onclick
images.forEach((img, i) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.src;
    imgModal(imgSrc);
    imgIndex = i; 
  });
});

// creating the modal
// add modal to the parent element 
// adding image to modal
// creating the close button
// close function
let imgModal = (src) => {
  const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    document.querySelector(".main").append(modal);
  
  const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
  
  const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    closeBtn.onclick = () => {
      modal.remove();
    };

// next and previous buttons
// change the src of current image to the src of next image
// change the src of current image to the src of pevious image
  const nextBtn = document.createElement("i");
    nextBtn.setAttribute("class", "fas fa-angle-right nextBtn");
    nextBtn.onclick = () => {
      newImage.setAttribute("src", nextImg())
    };

  const prevBtn = document.createElement("i");
    prevBtn.setAttribute("class", "fas fa-angle-left prevBtn");
    prevBtn.onclick = () => {
      newImage.setAttribute("src", prevImg())
    }
  
    modal.append(newImage, closeBtn, nextBtn, prevBtn);
};

// next image function
// check if it is the the last image
// return src of the new image
let nextImg = () => {
  imgIndex++;
  if (imgIndex >= images.length) {
    imgIndex = 0
  }
  return images[imgIndex].src;
}

// previous image function
// check if it is the first image
// return src of previous image
let prevImg = () => {
  imgIndex--;
  console.log(imgIndex);
  if (imgIndex < 0) {
    imgIndex = images.length - 1
  }
  return images[imgIndex].src
}