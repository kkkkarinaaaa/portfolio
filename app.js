// PROJECT VIDEOS: hover on desktop + tap on mobile
document.addEventListener("DOMContentLoaded", () => {
  const projectBoxes = document.querySelectorAll(".project-vidbox");

  projectBoxes.forEach((box) => {
    const video = box.querySelector("video");
    const hoverSign = box.querySelector(".hover-sign");

    if (!video) return;

    // Make sure mobile can play inline
    video.muted = true;
    video.playsInline = true;

    // Desktop hover
    box.addEventListener("mouseenter", () => {
      video.play().catch(() => {});
      hoverSign?.classList.add("active");
    });

    box.addEventListener("mouseleave", () => {
      video.pause();
      hoverSign?.classList.remove("active");
    });

    // Mobile tap
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

