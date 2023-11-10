const images = [
    'url("https://picsum.photos/id/1015/1920/1080")',
    'url("https://picsum.photos/id/1018/1920/1080")',
    'url("https://picsum.photos/id/1025/1920/1080")',
  ];


  let currentIndex  = 0;
//   document.body.style.backgroundImage = images[images.length -1];

//   function changeBackground() {
//     document.body.style.backgroundImage = images[currentIndex];
//     currentIndex +=1;
//     if (images[currentIndex] === undefined) {
//         currentIndex = 0;
//     }
//   }

//   setInterval(changeBackground, 2000);

// залишок modulo

function changeBackground() {
    document.body.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex +1) % images.length;
}

setInterval(changeBackground, 2000);