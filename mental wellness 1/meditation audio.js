window.addEventListener('load', function() {
    const meditationAudio = document.getElementById('meditation-audio');
    meditationAudio.play().catch(error => {
        // If there's an error (like autoplay being blocked), log it
        console.log('Error playing audio:', error);
    });
});
