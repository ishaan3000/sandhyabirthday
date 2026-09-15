const welcomeScreen = document.getElementById("welcomeScreen");
const mainSite = document.getElementById("mainSite");
const enterBtn = document.getElementById("enterBtn");

const birthdaySong = document.getElementById("birthdaySong");
const musicBtn = document.getElementById("musicBtn");

const wishBtn = document.getElementById("wishBtn");
const wishMessage = document.getElementById("wishMessage");

let musicPlaying = false;


/* =========================
   OPEN SURPRISE
========================= */

enterBtn.addEventListener("click", async () => {

  welcomeScreen.classList.add("hide");
  mainSite.classList.add("show");

  createMainEffects();

  // Music starts after user's tap
  try {
    await birthdaySong.play();
    musicPlaying = true;
    musicBtn.textContent = "🔊";
  } catch (error) {
    musicPlaying = false;
    musicBtn.textContent = "🔇";
  }

  // Birthday confetti
  createConfetti(90);

});


/* =========================
   MUSIC BUTTON
========================= */

musicBtn.addEventListener("click", async () => {

  if (musicPlaying) {

    birthdaySong.pause();
    musicPlaying = false;
    musicBtn.textContent = "🔇";

  } else {

    try {
      await birthdaySong.play();
      musicPlaying = true;
      musicBtn.textContent = "🔊";
    } catch (error) {
      musicPlaying = false;
      musicBtn.textContent = "🔇";
    }

  }

});


/* =========================
   COUNTDOWN
========================= */

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const countdownTitle = document.getElementById("countdownTitle");


function getBirthdayTarget() {

  const now = new Date();

  let target = new Date(
    now.getFullYear(),
    8,
    15,
    0,
    0,
    0
  );

  // If this year's birthday has already passed,
  // countdown to next birthday.
  if (now > target && now.getDate() !== 15) {
    target = new Date(
      now.getFullYear() + 1,
      8,
      15,
      0,
      0,
      0
    );
  }

  return target;
}


function updateCountdown() {

  const now = new Date();

  const isBirthdayToday =
    now.getMonth() === 8 &&
    now.getDate() === 15;

  if (isBirthdayToday) {

    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";

    countdownTitle.textContent =
      "Today is your special day, Sandhya! 🎂🤍";

    return;
  }


  const target = getBirthdayTarget();
  const difference = target - now;

  if (difference <= 0) {
    return;
  }

  const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (difference / 1000) % 60
  );


  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
   WISH BUTTON
========================= */

wishBtn.addEventListener("click", () => {

  wishMessage.classList.add("show");

  wishBtn.textContent = "Wish Sent ✨🤍";

  createConfetti(130);
  createWishHearts();

  wishBtn.style.transform = "scale(1.05)";

  setTimeout(() => {
    wishBtn.style.transform = "";
  }, 300);

});


/* =========================
   WELCOME EFFECTS
========================= */

function createWelcomeEffects() {

  const starsContainer =
    document.getElementById("welcomeStars");

  const heartsContainer =
    document.getElementById("welcomeHearts");

  const ribbonsContainer =
    document.getElementById("welcomeRibbons");


  // Stars
  for (let i = 0; i < 28; i++) {

    const star = document.createElement("span");

    star.className = "floating-star";
    star.textContent =
      Math.random() > 0.5 ? "✦" : "✧";

    star.style.left =
      Math.random() * 100 + "%";

    star.style.animationDuration =
      6 + Math.random() * 9 + "s";

    star.style.animationDelay =
      Math.random() * 6 + "s";

    star.style.fontSize =
      7 + Math.random() * 10 + "px";

    starsContainer.appendChild(star);
  }


  // Hearts
  for (let i = 0; i < 10; i++) {

    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = "♡";

    heart.style.left =
      Math.random() * 100 + "%";

    heart.style.animationDuration =
      8 + Math.random() * 8 + "s";

    heart.style.animationDelay =
      Math.random() * 8 + "s";

    heartsContainer.appendChild(heart);
  }


  // Ribbons
  for (let i = 0; i < 7; i++) {

    const ribbon = document.createElement("span");

    ribbon.className = "floating-ribbon";
    ribbon.textContent = "🎀";

    ribbon.style.left =
      Math.random() * 100 + "%";

    ribbon.style.animationDuration =
      10 + Math.random() * 8 + "s";

    ribbon.style.animationDelay =
      Math.random() * 7 + "s";

    ribbonsContainer.appendChild(ribbon);
  }

}


/* =========================
   MAIN EFFECTS
========================= */

function createMainEffects() {

  const starsContainer =
    document.getElementById("mainStars");

  const heartsContainer =
    document.getElementById("mainHearts");


  for (let i = 0; i < 22; i++) {

    const star = document.createElement("span");

    star.className = "floating-star";
    star.textContent =
      Math.random() > 0.5 ? "✦" : "✧";

    star.style.left =
      Math.random() * 100 + "%";

    star.style.animationDuration =
      8 + Math.random() * 10 + "s";

    star.style.animationDelay =
      Math.random() * 8 + "s";

    starsContainer.appendChild(star);
  }


  for (let i = 0; i < 8; i++) {

    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = "♡";

    heart.style.left =
      Math.random() * 100 + "%";

    heart.style.animationDuration =
      9 + Math.random() * 9 + "s";

    heart.style.animationDelay =
      Math.random() * 8 + "s";

    heartsContainer.appendChild(heart);
  }

}


/* =========================
   CONFETTI
========================= */

function createConfetti(amount) {

  const symbols = [
    "✦",
    "✧",
    "♡",
    "♥",
    "•",
    "🎀"
  ];


  for (let i = 0; i < amount; i++) {

    const piece = document.createElement("span");

    piece.className = "confetti";

    piece.textContent =
      symbols[Math.floor(
        Math.random() * symbols.length
      )];

    piece.style.left =
      Math.random() * 100 + "vw";

    piece.style.fontSize =
      8 + Math.random() * 15 + "px";

    piece.style.setProperty(
      "--drift",
      (Math.random() * 220 - 110) + "px"
    );

    piece.style.animationDuration =
      3 + Math.random() * 4 + "s";

    document.body.appendChild(piece);


    setTimeout(() => {
      piece.remove();
    }, 7500);

  }

}


/* =========================
   WISH HEART BURST
========================= */

function createWishHearts() {

  const symbols = [
    "♡",
    "♥",
    "🤍",
    "✨"
  ];


  for (let i = 0; i < 25; i++) {

    const heart = document.createElement("span");

    heart.className = "confetti";

    heart.textContent =
      symbols[Math.floor(
        Math.random() * symbols.length
      )];

    heart.style.left =
      45 + Math.random() * 10 + "vw";

    heart.style.fontSize =
      12 + Math.random() * 14 + "px";

    heart.style.setProperty(
      "--drift",
      (Math.random() * 300 - 150) + "px"
    );

    heart.style.animationDuration =
      2.5 + Math.random() * 2 + "s";

    document.body.appendChild(heart);


    setTimeout(() => {
      heart.remove();
    }, 5000);

  }

}


/* =========================
   START WELCOME EFFECTS
========================= */

createWelcomeEffects();
