const audio808_bd_long = new Audio(process.env.PUBLIC_URL + "audios/808/808_bd_long.mp3");
const audio808_bd_short = new Audio(process.env.PUBLIC_URL + "audios/808/808_bd_short.mp3");
const audio808_ch = new Audio(process.env.PUBLIC_URL + "audios/808/808_ch.mp3");
const audio808_clap = new Audio(process.env.PUBLIC_URL + "audios/808/808_clap.mp3");
const audio808_clav = new Audio(process.env.PUBLIC_URL + "audios/808/808_clav.mp3");
const audio808_cowbell = new Audio(process.env.PUBLIC_URL + "audios/808/808_cowbell.mp3");
const audio808_cym = new Audio(process.env.PUBLIC_URL + "audios/808/808_cym.mp3");
const audio808_ht = new Audio(process.env.PUBLIC_URL + "audios/808/808_ht.mp3");


const playAudio = (instrument, vol) => {
    //    audio = audionew Audio(process.env.PUBLIC_URL + "audios/" + instrument + ".wav");
    let audio = audio808_bd_long;
    switch (instrument) {
        case "808_bd_long":
            audio = audio808_bd_long;
            break;
        case "808_bd_short":
            audio = audio808_bd_short;
            break;
        case "808_ch":
            audio = audio808_ch;
            break;
        case "808_clap":
            audio = audio808_clap;
            break;
        case "808_clav":
            audio = audio808_clav;
            break;
        case "808_cowbell":
            audio = audio808_cowbell;
            break;
        case "808_cym":
            audio = audio808_cym;
            break;
        case "808_ht":
            audio = audio808_ht;
            break;
        default:
            audio = audio808_ht;
            break;
    }
audio.setAttribute("type", "audio/mpeg");
    let newAud = audio.cloneNode();
    newAud.loop = false;
    newAud.volume = vol / 100;
    newAud.preload = "auto";
    var promise = newAud.play();
    console.log(audio)
    // auto play policy https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
    if (promise !== undefined) {
        promise.catch(error => {
            console.log('auto-play was prevented', error)
            // Auto-play was prevented
            // Show a UI element to let the user manually start playback
        }).then(() => {
            console.log('played')
            // Auto-play started
        });
    }


};
export default playAudio;