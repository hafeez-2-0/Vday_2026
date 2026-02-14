document.getElementById('start-btn').addEventListener('click', function() {
    // 1. Hide Overlay
    const overlay = document.getElementById('overlay');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        
        // 2. Show Main Content
        document.getElementById('main-container').classList.remove('hidden');
        
        // 3. Play Music
        const audio = document.getElementById('bg-music');
        audio.play();
        
        // 4. Start Hearts Rain
        createHearts();
    }, 1000);
});

function createHearts() {
    const container = document.querySelector('.hearts-container');
    
    // Create a new heart every 300ms
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        
        // Randomize position and size
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        
        // Randomize fall duration (between 3s and 6s)
        heart.style.animationDuration = Math.random() * 3 + 3 + 's';
        
        container.appendChild(heart);
        
        // Remove heart from DOM after it falls to keep page light
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 300);
}