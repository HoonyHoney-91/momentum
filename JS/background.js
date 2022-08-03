const images = ["chicago.jpg", "los angeles.jpg", "seoul.jpg", "xian.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage=document.createElement("img");

<<<<<<< HEAD
=======
console.log(bgImage);

>>>>>>> 60093e9bd7422495bd689ab24bc25fddafb9bdba
bgImage.src= `img/${chosenImage}`;
document.body.appendChild(bgImage);