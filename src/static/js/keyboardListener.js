const keyboardListener = () => {
    window.addEventListener("keyup", function (event) {
        if (event.keyCode === 32) { //space
            event.preventDefault();
            document.getElementById("playOrPauseBtn").click();
        }
        if (event.keyCode === 27) { // escape
            event.preventDefault();
            document.getElementById("stopBtn").click();
        }
        if (event.keyCode === 82) { // r
            event.preventDefault();
            document.getElementById("clearBtn").click();
        }
    });
};
export default keyboardListener;