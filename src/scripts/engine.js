const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");
let mapedKeys = [];
let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    try {
        audio.src = `src/tunes/${key}.wav`;
        audio.play();

        const clickedKey = document.querySelector(`[data-key="${key}"]`);
        clickedKey.classList.add("active");
        setTimeout(() => {
            clickedKey.classList.remove("active");
        }, 150);
    } catch (error) {
        console.log("not found "+error)
    }
};

pianoKeys.forEach((key)=>{
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
})

document.addEventListener("keydown", (event) => {
    if(mapedKeys.includes(event.key)) {
        playTune(event.key);
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

volumeSlider.addEventListener("input", handleVolume);

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

keysCheck.addEventListener("click", showHideKeys)