const imgURL = "https://i.ibb.co/Q9yv5Jk/flappy-bird-set.png";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


// объект изображения с ресурсами, которые будем
// использовать для создания анимаций
const img = new Image();
img.src = imgURL;


// функция для отрисовки кадра
const render = () => {
    // объект, который хотим получить
  // из изображения-источника
  const bgSource = {
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height,
  };
  
// объект, который хотим
// отобразить на Canvas
const bgPartOneResult = {
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height,
};

ctx.drawImage(
    img,

    bgSource.x,
    bgSource.y,
    bgSource.width,
    bgSource.height,

    bgPartOneResult.x,
    bgPartOneResult.y,
    bgPartOneResult.width,
    bgPartOneResult.height
  );

}

// как только изображение будет загружено,
// начнётся отрисовка анимаций
img.onload = render;