document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.glass-container');
    container.style.opacity = '0';
    container.style.transform = 'scale(0.9)';
    
    // Smooth Fade-in Effect
    setTimeout(() => {
        container.style.transition = 'all 0.8s ease-out';
        container.style.opacity = '1';
        container.style.transform = 'scale(1)';
    }, 100);
});
