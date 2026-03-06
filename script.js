lucide.createIcons();

const pageData = {

    'live classes': `
<div class="welcome-section">
<h2 class="welcome-text">Welcome to Live Classes</h2>
<p class="welcome-desc">
Students can view and attend live classes through this section. It displays both upcoming and ongoing sessions so learners can easily keep track of their schedule. During a live class, students can mark their attendance, helping maintain accurate participation records. This feature also allows students to interact with instructors in real time and stay engaged with the learning process.
</p>
</div>`,

    'courses': `
<div class="welcome-section">
<h2 class="welcome-text">Welcome to Courses</h2>
<p class="welcome-desc">
This section allows students to explore structured learning paths designed to build strong technical skills and complete industry-relevant certification programs. Students can view all the courses they have opted for and track their progress. It also shows ongoing learning activities to help students stay organized and focused on completing their programs.
</p>
</div>`,

    'recordings': `
<div class="welcome-section">
<h2 class="welcome-text">Welcome to Recordings</h2>
<p class="welcome-desc">
Students can watch recordings of previous classes whenever needed. This helps them revise concepts and catch up on sessions they might have missed. By accessing recorded sessions, students can continue learning at their own pace and ensure they understand all topics clearly.
</p>
</div>`,

    'practices': `
<div class="welcome-section">
<h2 class="welcome-text">Welcome to Practices</h2>
<p class="welcome-desc">
The practice section helps students improve their coding skills by solving programming problems and real-world challenges. It supports multiple languages such as Java, Python, JavaScript, and Aptitude. Students can practice beginner, intermediate, and advanced level challenges to strengthen their problem-solving skills.
</p>
</div>`,

    'BroKod': `
<div class="welcome-section">
<h2 class="welcome-text">Welcome to BroKod</h2>
<p class="welcome-desc">
BroKod provides exclusive coding tips, developer resources, and advanced learning guidance. Instead of giving direct answers, it encourages students to analyze and think through the solutions, helping them develop stronger logical thinking and problem-solving skills.
</p>
</div>`,

    'mentor connect': `
<div class="welcome-section">
<h2 class="welcome-text">Welcome to Mentor Connect</h2>
<p class="welcome-desc">
Through Mentor Connect, students can get guidance from experienced mentors who help clear technical doubts, review learning progress, and provide career guidance. Mentors offer timely support whenever students face challenges in their learning journey.
</p>
</div>`,

    'placements': `
<div class="welcome-section">
<h2 class="welcome-text">Welcome to Placements</h2>
<p class="welcome-desc">
This section provides placement opportunities and updates related to job openings. Students can apply for opportunities, track their application status, and view placement updates. Based on eligibility criteria, students can also check whether they qualify for specific opportunities.
</p>
</div>`,

    'AI resume builder': `
<div class="welcome-section">
<h2 class="welcome-text">Welcome to AI Resume Builder</h2>
<p class="welcome-desc">
The AI Resume Builder helps students create professional resumes with AI guidance. It assists in highlighting important skills, projects, and achievements in a structured format, helping students build strong resumes for job applications and placement opportunities.
</p>
</div>`,

    'mock interview': `
<div class="welcome-section">
<h2 class="welcome-text">Welcome to Mock Interview</h2>
<p class="welcome-desc">
Mock interviews allow students to practice interview scenarios and prepare for both technical and HR interview rounds. This helps build confidence, improve communication skills, and understand real interview environments.
</p>
</div>`,

    'compiler': `
<div class="welcome-section">
<h2 class="welcome-text">Welcome to Compiler</h2>
<p class="welcome-desc">
KodNest provides an inbuilt compiler where students can write, compile, and run programs directly within the platform. This eliminates the need for installing additional software and allows students to practice coding and test programs conveniently.
</p>
</div>`,

    'pending actions': `
<div class="welcome-section">
<h2 class="welcome-text">Welcome to Pending Actions</h2>
<p class="welcome-desc">
The pending actions section helps students track tasks they still need to complete. It displays incomplete activities, reminders, or required submissions so students can manage responsibilities effectively and ensure no important task is missed.
</p>
</div>`,

    'community': `
<div class="welcome-section">
<h2 class="welcome-text">Welcome to Community</h2>
<p class="welcome-desc">
The community section allows students to connect with fellow learners, share ideas, discuss projects, and collaborate within the KodNest learning ecosystem. Important announcements, updates, and notifications about events or important dates are also shared here.
</p>
</div>`,

    'attendance management': `
<div class="welcome-section">
<h2 class="welcome-text">Welcome to Attendance Management</h2>
<p class="welcome-desc">
Students can track their attendance for different classes and learning sessions. This helps them monitor their participation and maintain consistency in attending sessions throughout their learning journey.
</p>
</div>`,

    'leave management': `
<div class="welcome-section">
<h2 class="welcome-text">Welcome to Leave Management</h2>
<p class="welcome-desc">
The leave management system allows students to apply for leave when necessary and track approval status easily. The process is simple and organized, ensuring proper communication with the administration.
</p>
</div>`,

    'user feedback': `
<div class="welcome-section">
<h2 class="welcome-text">Welcome to User Feedback</h2>
<p class="welcome-desc">
This section provides options for students to share feedback, raise issues, or report problems. By collecting feedback, the platform team can understand user experiences, improve features, and resolve issues quickly.
</p>
</div>`,

    'certifications': `
<div class="welcome-section">
<h2 class="welcome-text">Welcome to Certifications</h2>
<p class="welcome-desc">
Students can view and download certificates earned after successfully completing courses or programs. These certificates serve as proof of achievements and can be used to showcase skills in academic or professional opportunities.
</p>
</div>`

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
        const videoId = videoLinks[name];

        let videoSection = '';

        if (videoId) {
            videoSection = `
        <div class="video-wrapper" onclick="playVideo(this,'${videoId}')">
            <img src="https://img.youtube.com/vi/${videoId}/maxresdefault.jpg" class="video-thumbnail">
            <div class="play-button">▶</div>
        </div>
    `;
        }

        contentArea.innerHTML = videoSection + (pageData[name] || `
    <div class="welcome-section">
        <h2 class="welcome-text">Welcome to ${name}</h2>
        <p class="welcome-desc">This section is being prepared with your custom content.</p>
    </div>
`);

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

const videoLinks = {
    'live classes': 'v0HVkXXJmyg',
    'courses': 'HkH5CwfUONk',
    'recordings': '3fumBcKC6RE',
    'practices': 'M7lc1UVf-VE',
    'BroKod': '',
    'mentor connect': 'ysz5S6PUM-U',
    'placements': 'ScMzIvxBSi4',
    'AI resume builder': '',
    'mock interview': '',
    'compiler': '',
    'pending actions': '',
    'community': 'aqz-KE-bpKQ',
    'attendance management': '',
    'leave management': '',
    'user feedback': '',
    'certifications': ''
};

function playVideo(element, videoId) {
    element.innerHTML = `
        <iframe 
            width="100%" 
            height="420"
            src="https://www.youtube.com/embed/${videoId}?autoplay=1"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen>
        </iframe>
    `;
}