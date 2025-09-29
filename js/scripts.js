let currentIndex = 0;
    const images = [
      "https://picsum.photos/600/400?random=1",
      "https://picsum.photos/600/400?random=2",
      "https://picsum.photos/600/400?random=3"
    ];

    function celebrate() {
      showConfetti();
      playMusic();
    }

    function showConfetti() {
      for (let i = 0; i < 40; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        document.body.appendChild(confetti);

        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        let duration = Math.random() * 3 + 2;
        confetti.style.animationDuration = duration + "s";

        setTimeout(() => confetti.remove(), duration * 1000);
      }
    }

    function playMusic() {
      const music = document.getElementById("bgMusic");
      music.play().catch(() => alert("Klik tombol untuk memulai musik 🎶"));
    }

    function openPopup() {
      document.getElementById("popup").style.display = "flex";
    }
    function closePopup() {
      document.getElementById("popup").style.display = "none";
    }

    function openLightbox(index) {
      currentIndex = index;
      document.getElementById("lightbox").style.display = "flex";
      document.getElementById("lightbox-img").src = images[currentIndex];
    }
    function closeLightbox() {
      document.getElementById("lightbox").style.display = "none";
    }
    function changeSlide(direction) {
      currentIndex = (currentIndex + direction + images.length) % images.length;
      document.getElementById("lightbox-img").src = images[currentIndex];
    }