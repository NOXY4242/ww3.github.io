/* ===== SHUFFLE UTILITY ===== */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/* ===== BACKGROUNDS RANDOM ===== */
const backgrounds = [
    "backgrounds/bg1.jpg",
    "backgrounds/bg2.jpg",
    "backgrounds/bg3.jpg",
    "backgrounds/bg4.jpg",
    "backgrounds/bg5.jpg",
    "backgrounds/bg6.jpg"
];

shuffle(backgrounds);

let bgIndex = 0;
const slides = document.querySelectorAll(".slide");

slides[0].style.backgroundImage = `url('${backgrounds[0]}')`;
slides[1].style.backgroundImage = `url('${backgrounds[1]}')`;

let active = 0;

setInterval(() => {
    const next = (active + 1) % 2;

    bgIndex = (bgIndex + 1) % backgrounds.length;
    slides[next].style.backgroundImage = `url('${backgrounds[bgIndex]}')`;

    slides[next].classList.add("active");
    slides[active].classList.remove("active");

    active = next;
}, 8000);

/* ===== ASTUCES ===== */
const tips = [
    "Respectez la hiérarchie militaire en toute situation.",
    "Le Fear RP est obligatoire lors des opérations.",
    "La coordination radio est essentielle en mission.",
    "Un soldat seul est un soldat en danger.",
    "Les ordres du commandement ne se discutent pas.",
    "Vérifiez vos munitions avant chaque déploiement.",
    "Les civils doivent être protégés à tout prix."
];

shuffle(tips);

let tipIndex = 0;
const tipDiv = document.getElementById("tips");

function changeTip() {
    tipDiv.innerText = tips[tipIndex];
    tipIndex = (tipIndex + 1) % tips.length;
}

changeTip();
setInterval(changeTip, 6000);

/* ===== MUSIQUES RANDOM ===== */
const musics = [
    "music/music1.mp3"
];

shuffle(musics);

let musicIndex = 0;
const music = document.getElementById("music");

music.src = musics[musicIndex];
music.volume = 0.07;
music.play();

music.addEventListener("ended", () => {
    musicIndex = (musicIndex + 1) % musics.length;
    music.src = musics[musicIndex];
    music.play();
});

/* ===== GARRY'S MOD ===== */
function GameDetails() {}

function SetStatusChanged(status) {
    document.getElementById("status").innerText = status;
}
