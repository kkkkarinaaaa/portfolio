document.addEventListener("DOMContentLoaded", () => {
  const projectBoxes = document.querySelectorAll(".project-vidbox");
  const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

  projectBoxes.forEach((box) => {
    const video = box.querySelector("video");
    const hoverSign = box.querySelector(".hover-sign");
    if (!video) return;

    // важно для мобилки
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";

    // чтобы hoverSign не перекрывал клики
    if (hoverSign) hoverSign.style.pointerEvents = "none";

    // На телефоне включаем controls (самый надежный способ)
    if (isTouch) {
      video.setAttribute("controls", "controls");
      if (hoverSign) hoverSign.style.display = "none";

      // иногда iOS хочет клик именно по video — дублируем
      video.addEventListener("pointerdown", () => {
        video.play().catch(() => {});
      });
      return; // не вешаем hover-ивенты
    }

    // DESKTOP hover
    box.addEventListener("mouseenter", () => {
      video.play().catch(() => {});
      hoverSign?.classList.add("active");
    });

    box.addEventListener("mouseleave", () => {
      video.pause();
      hoverSign?.classList.remove("active");
    });

    // desktop click toggle тоже можно оставить
    box.addEventListener("click", () => {
      if (video.paused) {
        video.play().catch(() => {});
        hoverSign?.classList.add("active");
      } else {
        video.pause();
        hoverSign?.classList.remove("active");
      }
    });
  });
});


