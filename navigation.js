function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function playVideo(element, videoId) {
    element.innerHTML = `
        <iframe 
            class="video-iframe"
            src="https://www.youtube.com/embed/${videoId}?autoplay=1"
            frameborder="0"
            allow="autoplay; encrypted-media; fullscreen"
            allowfullscreen>
        </iframe>
    `;
}

function navigateTo(name, pageData, videoLinks) {
    const mainView = document.getElementById('main-view');
    const subView = document.getElementById('sub-view');

    history.pushState({ name }, '', '#');
    mainView.classList.add('fade-out');

    setTimeout(() => {
        mainView.classList.add('hidden');
        mainView.classList.remove('fade-out');

        subView.classList.remove('hidden');
        subView.classList.add('fade-in');

        document.getElementById('sub-title').innerText = name;

        const contentArea = document.querySelector('.content-area');
        const videoId = videoLinks[name];
        const videoSection = videoId
            ? `
        <div class="video-wrapper" onclick="playVideo(this,'${videoId}')">
            <img src="https://img.youtube.com/vi/${videoId}/maxresdefault.jpg" class="video-thumbnail">
            <div class="play-button">▶</div>
        </div>
    `
            : '';

        contentArea.innerHTML = videoSection + (pageData[name] || `
    <div class="welcome-section">
        <h2 class="welcome-text">Welcome to ${name}</h2>
        <p class="welcome-desc">This section is being prepared with your custom content.</p>
    </div>
`);

        lucide.createIcons();
        scrollToTop();
    }, 250);
}

function goBack() {
    const mainView = document.getElementById('main-view');
    const subView = document.getElementById('sub-view');

    subView.classList.add('fade-out');

    setTimeout(() => {
        subView.classList.add('hidden');
        subView.classList.remove('fade-out');
        mainView.classList.remove('hidden');
        mainView.classList.add('fade-in');
        scrollToTop();
    }, 250);
}

export function initializeNavigation(pageData, videoLinks) {
    // Expose handlers for inline onclick bindings in existing HTML.
    window.navigateTo = (name) => navigateTo(name, pageData, videoLinks);
    window.goBack = goBack;
    window.playVideo = playVideo;

    window.addEventListener('popstate', () => {
        const subView = document.getElementById('sub-view');
        if (!subView.classList.contains('hidden')) {
            goBack();
        }
    });
}
