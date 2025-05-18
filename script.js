// Bölüm elementlerini seç
const welcomeSection = document.getElementById("welcome-section");
const gallerySection = document.getElementById("gallery-section");
const balloonSection = document.getElementById("balloon-section");
const continueBtn = document.getElementById("continue-btn");
const balloon = document.getElementById("balloon");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");
const music = document.getElementById("bg-music");

music.volume = 0.7; // İstersen sesi ayarlayabilirsin

// 1. Bölümden 2. Bölüme geçiş
continueBtn.addEventListener("click", () => {
  welcomeSection.classList.remove("active");
  gallerySection.classList.add("active");

  // Müzik sesi açılır ve çalmaya başlar
  music.muted = false;
  music.play();

  // 12 saniye sonra balon bölümüne geçiş ve balon animasyonu başlat
  setTimeout(() => {
    gallerySection.classList.remove("active");
    balloonSection.classList.add("active");
    // Balonu ekrana uçur
    balloon.classList.remove("hidden");
    setTimeout(() => {
      balloon.classList.add("fly");
    }, 200); // animasyon başlat
  }, 16000);
});

// Balona tıklayınca patlama efekti ve pop-up açılır, balon kaybolur
balloon.addEventListener("click", () => {
  // Patlama efekti
  balloon.classList.add("explode");
  setTimeout(() => {
    balloon.classList.remove("fly");
    balloon.classList.remove("explode");
    balloon.classList.add("hidden");
    popup.classList.remove("hidden");
  }, 500); // patlama animasyonu süresi
});

// Pop-up kapatma
closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Kalp animasyonları (arka planda sürekli akar)
function createHeart() {
  const heartsBg = document.querySelector(".hearts-bg");
  const heart = document.createElement("div");
  heart.className = "heart";
  // Rastgele konum ve boyut
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 4 + "s";
  heart.style.opacity = 0.5 + Math.random() * 0.5;
  heart.style.transform = `scale(${0.7 + Math.random() * 0.6})`;
  heartsBg.appendChild(heart);
  setTimeout(() => heart.remove(), 9000);
}
setInterval(createHeart, 700);

// Galeriye örnek görsel eklemek için (kullanıcı kendi görsellerini ekleyecek)
// const gallery = document.querySelector('.gallery');
// let img = document.createElement('img');
// img.src = 'img/ornek.jpg';
// img.alt = 'Sevgilim';
// gallery.appendChild(img);

// Doğum günü mesajını değiştirmek için:
// document.getElementById('birthday-message').textContent = 'Buraya kendi mesajını yazabilirsin!';
