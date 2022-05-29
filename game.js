const canvas = document.querySelector('.runner-canvas');
const ctx = canvas.getContext('2d');
const spaceKeyPress = new KeyboardEvent('keydown', { 'keyCode': 32, 'which': 32 });

function play() {
    let patch = ctx.getImageData(70, 120, 50, 4).data;
    for (let i = 0; i < patch.length; ++i)
        if (patch[i] !== 0) {
            document.dispatchEvent(spaceKeyPress);
            break;
        }
    window.requestAnimationFrame(play);
}

play();
