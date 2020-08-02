const data = {
    'A': { sound: './assets/musics/doganddev-music.wav' },
    'Z': { sound: './assets/musics/doganddev-music.wav' },
    'E': { sound: './assets/musics/doganddev-music.wav' },
    'R': { sound: './assets/musics/doganddev-music.wav' },
    'T': { sound: './assets/musics/doganddev-music.wav' },
    'Y': { sound: './assets/musics/doganddev-music.wav' },
    'U': { sound: './assets/musics/doganddev-music.wav' },
    'I': { sound: './assets/musics/doganddev-music.wav' },
    'O': { sound: './assets/musics/doganddev-music.wav' },
    'P': { sound: './assets/musics/doganddev-music.wav' },
    'Q': { sound: './assets/musics/doganddev-music.wav' },
    'S': { sound: './assets/musics/doganddev-music.wav' },
};


function construct() {
    for (const lettre in data) {
        const keyDiv = document.createElement('div');
        keyDiv.classList.add('drum');

        let h2 = document.createElement('h2');
        h2.textContent = lettre;

        keyDiv.appendChild(h2);

        document.getElementById('music-box').appendChild(keyDiv);

        keyDiv.addEventListener('click', function(event) {
            let lettre = event.currentTarget.querySelector('h2').textContent;
            playDrum(lettre);
        });
    };
};

function playDrum(lettre) {
    const audio = new Audio()
    audio.src = data[lettre].sound;
    audio.play();
};

construct();

// ON PRESS
window.addEventListener('keydown', handleKeyEvents);

function handleKeyEvents(event) {
    playDrum(event.key.toUpperCase());
    keyDiv.classList.add('active');

}