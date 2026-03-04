lucide.createIcons();

const pageData = {
    'Home': '<div class="welcome-section"><h2 class="welcome-text">Welcome home</h2><p class="welcome-desc">Your personal dashboard for upcoming classes and quick access to your learning journey.</p></div>',
    'courses': '<div class="welcome-section"><h2 class="welcome-text">Welcome to courses</h2><p class="welcome-desc">Explore our wide range of professional certification programs and skill-based courses.</p></div>',
    'practices': '<div class="welcome-section"><h2 class="welcome-text">Welcome to practices</h2><p class="welcome-desc">Sharpen your coding skills with interactive challenges and real-world scenarios.</p></div>',
    'mentor connect': '<div class="welcome-section"><h2 class="welcome-text">Welcome to mentor connect</h2><p class="welcome-desc">Connect with industry experts for guidance, career advice, and technical support.</p></div>',
    'feedback': '<div class="welcome-section"><h2 class="welcome-text">Welcome to feedback</h2><p class="welcome-desc">Share your experience and help us improve our learning platform.</p></div>',
    'community': '<div class="welcome-section"><h2 class="welcome-text">Welcome to community</h2><p class="welcome-desc">Join our vibrant community of learners and share your projects and ideas.</p></div>',
    'compiler': '<div class="welcome-section"><h2 class="welcome-text">Welcome to compiler</h2><p class="welcome-desc">Write, compile, and run your code directly in the browser across multiple languages.</p></div>',
    'resume builder': '<div class="welcome-section"><h2 class="welcome-text">Welcome to resume builder</h2><p class="welcome-desc">Create professional, ATS-friendly resumes with our easy-to-use templates.</p></div>',
    'User feedback': '<div class="welcome-section"><h2 class="welcome-text">Welcome to User feedback</h2><p class="welcome-desc">View and manage feedback received from users and mentors.</p></div>',
    'mock interview': '<div class="welcome-section"><h2 class="welcome-text">Welcome to mock interview</h2><p class="welcome-desc">Prepare for your dream job with AI-powered mock interviews and expert feedback.</p></div>',
    'apply for leave': '<div class="welcome-section"><h2 class="welcome-text">Welcome to apply for leave</h2><p class="welcome-desc">Submit and track your leave requests with ease.</p></div>',
    'session diaries': '<div class="welcome-section"><h2 class="welcome-text">Welcome to session diaries</h2><p class="welcome-desc">Review your past learning sessions, notes, and key takeaways.</p></div>',
    'BroKod': '<div class="welcome-section"><h2 class="welcome-text">Welcome to BroKod</h2><p class="welcome-desc">Exclusive developer resources, tips, and tricks for the KodNest community.</p></div>'
};

function navigateTo(name, icon) {
    const mainView = document.getElementById('main-view');
    const subView = document.getElementById('sub-view');

    // Smoothly fade out the current view
    mainView.classList.add('fade-out');

    setTimeout(() => {
        mainView.classList.add('hidden');
        mainView.classList.remove('fade-out');

        // Prepare and show the next view
        subView.classList.remove('hidden');
        subView.classList.add('fade-in');

        document.getElementById('sub-title').innerText = name;
        document.getElementById('sub-subtitle').innerText = name.toUpperCase();

        const contentArea = document.querySelector('.content-area');
        contentArea.innerHTML = pageData[name] || `
            <div class="welcome-section">
                <h2 class="welcome-text">Welcome to ${name}</h2>
                <p class="welcome-desc">This section is being prepared with your custom content.</p>
            </div>
        `;

        lucide.createIcons();
    }, 250); // Matches CSS transition speed
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
    }, 250);
}
