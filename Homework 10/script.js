let lastPlayedAudio = null

function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if (!audio) return;
    
    if (lastPlayedAudio) {
        lastPlayedAudio.pause();
        lastPlayedAudio.currentTime = 0;
        lastPlayedAudio.classList.remove(`playing`);
    };
    audio.currentTime = 0;
    audio.play();
    lastPlayedAudio = audio;
    
    key.classList.toggle(`playing`);
    };

function removeTransition(e) {
    if (e.propertyName !== `transform`) return;
    this.classList.remove(`playing`);
}

const keys = document.querySelectorAll(`.key`);
keys.forEach(key => {
    key.addEventListener(`transitionend`, removeTransition);
    key.addEventListener(`click`, function(e) {
        const keyCode = parseInt(e.target.dataset.key);
        playSound({keyCode});
    });
});
window.addEventListener(`keydown`, playSound);

//Кнопка зупинки звуку

const stopSound = document.getElementById(`stopSound`);

stopSound.addEventListener(`click`, function() {
    if (lastPlayedAudio) {
        lastPlayedAudio.pause();
        lastPlayedAudio.currentTime = 0;
    }
    lastPlayedAudio.classList.remove(`active`);
});