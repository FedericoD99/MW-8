console.log('landing.js loaded at ' + new Date().toISOString());

// Get redirect target from URL query parameter
const params = new URLSearchParams(window.location.search);
const redirectTarget = params.get('redirect') || 'index.html';

// Mark landing page as seen in sessionStorage
sessionStorage.setItem('hasSeenSplash', 'true');

setTimeout(() => {
    console.log('Starting fade-out animation at ' + new Date().toISOString());
    const splash = document.querySelector('.splash');
    if (splash) {
        splash.classList.add('fade-out');
        setTimeout(() => {
            console.log('Redirecting to ' + redirectTarget + ' at ' + new Date().toISOString());
            window.location.href = redirectTarget;
        }, 500); // Wait for 0.5s animation
    } else {
        console.log('Splash element not found, redirecting to ' + redirectTarget + ' at ' + new Date().toISOString());
        window.location.href = redirectTarget;
    }
}, 3000); // 3s delay