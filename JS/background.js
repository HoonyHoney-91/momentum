const images = ["chicago.jpg", "los angeles.jpg", "seoul.jpg", "xian.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage=document.createElement("img");

console.log(bgImage);

bgImage.src= `img/${chosenImage}`;
document.body.appendChild(bgImage);