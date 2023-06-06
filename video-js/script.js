const button = document.querySelector(".switch-btn");
const videoPlay = document.querySelector(".video-container");

button.addEventListener("click", () => {
  if (!button.classList.contains("slide")) {
    button.classList.add("slide");
    videoPlay.pause();
  } else {
    button.classList.remove("slide");
    videoPlay.play();
  }
});
