const googleBtn = document.querySelector(".gbtn");
const facebookBtn = document.querySelector(".fbtn");

// Вешаем событие на клик
googleBtn.addEventListener("click", () => {
  window.open("https://www.google.com", "_blank");
});

facebookBtn.addEventListener("click", () => {
    window.open("https://www.facebook.com", "_blank");
  
  });
