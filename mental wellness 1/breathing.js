const breathingCircle = document.getElementById("breathing-circle");
const breathingInstructions = document.getElementById("breathing-instructions");
const startBreathing = document.getElementById("start-breathing");

startBreathing.addEventListener("click", () => {
  breathingCircle.style.animation = "breathe 6s infinite";
  breathingInstructions.innerText = "Inhale as the circle expands and exhale as it contracts.";
});



const audio = document.getElementById("meditation-audio");
const canvas = document.getElementById("audio-visualizer");
const ctx = canvas.getContext("2d");

audio.addEventListener("play", () => {
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    function draw() {
        requestAnimationFrame(draw);
        const data = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(data);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "lightblue";
        data.forEach((value, index) => {
            const barHeight = value / 2;
            ctx.fillRect(index * 3, canvas.height - barHeight, 2, barHeight);
        });
    }
    draw();
});