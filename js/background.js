const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const ranNum = Math.floor(Math.random() * images.length)
const chosenImage = images[ranNum];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.style.height = "100%";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundImage = "url("+bgImage.src +")";
//document.body.prepend(bgImage);
//document.body.appendChild(bgImage);