const audioBodacious = new Audio(process.env.PUBLIC_URL + "audios/Bodacious.wav");
const audioClap = new Audio(process.env.PUBLIC_URL + "audios/Clap.wav");
const audioDeepHouse = new Audio(process.env.PUBLIC_URL + "audios/DeepHouse.wav");
const audioKKSet = new Audio(process.env.PUBLIC_URL + "audios/KKSet.wav");
const audioSnare4 = new Audio(process.env.PUBLIC_URL + "audios/Snare4.wav");
const audioSnareTama = new Audio(process.env.PUBLIC_URL + "audios/SnareTama.wav");
const audioTapeSnare = new Audio(process.env.PUBLIC_URL + "audios/TapeSnare.wav");
const audioWindowThump = new Audio(process.env.PUBLIC_URL + "audios/WindowThump.wav");

const playAudio = (instrument, vol) => {
    //    audio = audionew Audio(process.env.PUBLIC_URL + "audios/" + instrument + ".wav");
    let audio = audioBodacious;
    switch (instrument) {
        case "Bodacious":
            audio = audioBodacious;
            break;
        case "Clap":
            audio = audioClap;
            break;
        case "DeepHouse":
            audio = audioDeepHouse;
            break;
        case "KKSet":
            audio = audioKKSet;
            break;
        case "Snare4":
            audio = audioSnare4;
            break;
        case "SnareTama":
            audio = audioSnareTama;
            break;
        case "TapeSnare":
            audio = audioTapeSnare;
            break;
        case "WindowThump":
            audio = audioWindowThump;
            break;
        default:
            audio = audioWindowThump;
            break;
    }
    audio.loop = false;
    audio.volume = vol / 100;
    audio.preload = "auto";
    const playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
                // Automatic playback started!
                // Show playing UI.
            })
            .catch(error => {
                // Auto-play was prevented
                // Show paused UI.
            });
    }
};
export default playAudio;