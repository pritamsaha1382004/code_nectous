(function () {
    'use strict';

    const FUTURE_GATES = {
        allCoursesRequireLogin: false
    };

    // Tracks which course keys the logged-in user is enrolled in (loaded from Firebase)
    let enrolledSet = new Set();

    const LOCKED_COURSE_MESSAGE = 'Currently this course is not available.';
    const LOCKED_FEATURE_MESSAGE = 'Currently this feature is not available.';
    const LOGIN_REQUIRED_MESSAGE = 'Login first.';

    const AVAILABLE_COURSES = [
        {
            key: 'python',
            title: 'Python',
            shortTitle: 'PY',
            description: 'Beginner-friendly, versatile language for web, data science, and automation.',
            accent: '#3b82f6',
            href: 'python.html',
            available: true,
            popular: true,
            lessons: 36,
            keywords: ['python', 'basics', 'functions', 'loops']
        },
        {
            key: 'sql',
            title: 'SQL',
            shortTitle: 'SQL',
            description: 'Query and manage relational databases for apps and analytics.',
            accent: '#10b981',
            href: 'sql.html',
            available: true,
            popular: true,
            lessons: 15,
            keywords: ['sql', 'database', 'joins', 'queries']
        },
        {
            key: 'java',
            title: 'Java',
            shortTitle: 'JV',
            description: 'Enterprise-level language for Android apps and large-scale applications.',
            accent: '#ef4444',
            href: 'java.html',
            available: true,
            popular: true,
            lessons: 19,
            keywords: ['java', 'oop', 'classes', 'methods']
        },
        {
            key: 'javascript',
            title: 'JavaScript',
            shortTitle: 'JS',
            description: 'Essential for web development, powers interactive websites and web apps.',
            accent: '#f59e0b',
            href: 'javascript.html',
            available: true,
            popular: true,
            lessons: 38,
            keywords: ['javascript', 'web', 'dom', 'functions']
        },
        {
            key: 'c',
            title: 'C',
            shortTitle: 'C',
            description: 'Core systems language for fundamentals, memory, and embedded programming.',
            accent: '#22c55e',
            href: 'c.html',
            available: true,
            popular: false,
            lessons: 19,
            keywords: ['c', 'pointers', 'memory', 'programming']
        },
        {
            key: 'cpp',
            title: 'C++',
            shortTitle: 'C++',
            description: 'High-performance language for system programming and game development.',
            accent: '#8b5cf6',
            href: 'cpp.html',
            available: true,
            popular: false,
            lessons: 19,
            keywords: ['c++', 'stl', 'oop', 'competitive programming']
        },
        {
            key: 'artificial-intelligence',
            title: 'Artificial Intelligence',
            shortTitle: 'AI',
            description: 'Reasoning, search, intelligent agents, machine learning, and neural networks.',
            accent: '#a855f7',
            href: 'ai.html',
            available: true,
            popular: true,
            lessons: 20,
            keywords: ['artificial intelligence', 'ai', 'machine learning', 'neural networks', 'search']
        }
    ];

    const LOCKED_COURSES = (window.CNAdditionalCourses || []).map((course) => ({
        ...course,
        available: false,
        href: ''
    }));

    const ALL_COURSES = [...AVAILABLE_COURSES, ...LOCKED_COURSES];
    window.CNCourseCatalog = {
        available: AVAILABLE_COURSES,
        locked: LOCKED_COURSES,
        all: ALL_COURSES
    };

    function showToast(title, description) {
        if (typeof window.cnToast === 'function') {
            window.cnToast(title, description);
            return;
        }
        window.alert(description ? `${title}\n${description}` : title);
    }

    function getCurrentUser() {
        if (!window.CN || typeof window.CN.getAuthUser !== 'function') return null;
        return window.CN.getAuthUser();
    }

    function getProgressSnapshot(progress) {
        const safeProgress = progress && typeof progress === 'object' ? progress : {};
        const completed = Array.isArray(safeProgress.completed) ? safeProgress.completed.length : 0;
        const xp = Number(safeProgress.xp) || 0;
        const streak = Number(safeProgress.streak) || 0;
        const maxStreak = Number(safeProgress.maxStreak) || Math.max(0, streak);
        const courseProgress = safeProgress.courseProgress && typeof safeProgress.courseProgress === 'object'
            ? safeProgress.courseProgress
            : {};
        const totalLessons = Object.values(courseProgress).reduce((sum, item) => sum + (item && item.total ? item.total : 0), 0);
        const percent = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
        return { completed, xp, streak, maxStreak, totalLessons, percent };
    }

    function applyAvatar(element, avatar, fallback) {
        if (!element) return;
        if (avatar) {
            element.textContent = '';
            element.classList.remove('guest');
            element.style.backgroundImage = `url(${avatar})`;
            element.style.backgroundSize = 'cover';
            element.style.backgroundPosition = 'center';
            return;
        }
        element.style.backgroundImage = '';
        element.classList.add('guest');
        element.textContent = fallback;
    }

    function fillHeaderStats(progress) {
        const snapshot = getProgressSnapshot(progress);

        const completedLessons = document.getElementById('completedLessons');
        const totalLessons = document.getElementById('totalLessons');
        const totalXP = document.getElementById('totalXP');
        const streak = document.getElementById('streak');
        const maxStreak = document.getElementById('maxStreak');
        const overallPercent = document.getElementById('overallPercent');
        const overallProgressFill = document.getElementById('overallProgressFill');
        const overallProgressBar = document.getElementById('overallProgressBar');
        const drawerXP = document.getElementById('drawerXP');
        const drawerStreak = document.getElementById('drawerStreak');
        const drawerMaxStreak = document.getElementById('drawerMaxStreak');
        const drawerLessons = document.getElementById('drawerLessons');

        if (completedLessons) completedLessons.textContent = snapshot.completed;
        if (totalLessons) totalLessons.textContent = snapshot.totalLessons;
        if (totalXP) totalXP.textContent = snapshot.xp;
        if (streak) streak.textContent = snapshot.streak;
        if (maxStreak) maxStreak.textContent = snapshot.maxStreak;
        if (overallPercent) overallPercent.textContent = `${snapshot.percent}%`;
        if (overallProgressFill) overallProgressFill.style.width = `${snapshot.percent}%`;
        if (overallProgressBar) overallProgressBar.setAttribute('aria-valuenow', String(snapshot.percent));
        if (drawerXP) drawerXP.textContent = snapshot.xp;
        if (drawerStreak) drawerStreak.textContent = snapshot.streak;
        if (drawerMaxStreak) drawerMaxStreak.textContent = snapshot.maxStreak;
        if (drawerLessons) drawerLessons.textContent = snapshot.completed;
    }

    function setGuestUI() {
        const authLink = document.querySelector('.auth-link');
        const logoutBtn = document.getElementById('logoutBtn');
        const currentUserChip = document.getElementById('currentUserChip');
        const mobileAvatar = document.getElementById('mobileAvatar');
        const drawerUserChip = document.getElementById('drawerUserChip');
        const drawerUserName = document.getElementById('drawerUserName');
        const drawerUserEmail = document.getElementById('drawerUserEmail');
        const drawerAccountLink = document.getElementById('drawerAccountLink');
        const drawerLogout = document.getElementById('drawerLogout');

        if (authLink) {
            authLink.textContent = 'Login / Sign Up';
            authLink.href = 'auth.html';
        }
        if (logoutBtn) logoutBtn.hidden = true;
        if (drawerLogout) drawerLogout.hidden = true;

        applyAvatar(currentUserChip, '', 'G');
        applyAvatar(mobileAvatar, '', 'G');
        applyAvatar(drawerUserChip, '', 'G');

        if (drawerUserName) drawerUserName.textContent = 'Guest';
        if (drawerUserEmail) drawerUserEmail.textContent = 'Login to continue';
        if (drawerAccountLink) {
            drawerAccountLink.textContent = 'Login / Sign Up';
            drawerAccountLink.href = 'auth.html';
        }

        fillHeaderStats({});
    }

    function setUserUI(profile, progress) {
        const safeProfile = profile && typeof profile === 'object' ? profile : {};
        const authLink = document.querySelector('.auth-link');
        const logoutBtn = document.getElementById('logoutBtn');
        const currentUserChip = document.getElementById('currentUserChip');
        const mobileAvatar = document.getElementById('mobileAvatar');
        const drawerUserChip = document.getElementById('drawerUserChip');
        const drawerUserName = document.getElementById('drawerUserName');
        const drawerUserEmail = document.getElementById('drawerUserEmail');
        const drawerAccountLink = document.getElementById('drawerAccountLink');
        const drawerLogout = document.getElementById('drawerLogout');

        if (authLink) {
            authLink.textContent = 'Account';
            authLink.href = 'account.html';
        }
        if (logoutBtn) logoutBtn.hidden = false;
        if (drawerLogout) drawerLogout.hidden = false;

        applyAvatar(currentUserChip, safeProfile.avatar || '', 'U');
        applyAvatar(mobileAvatar, safeProfile.avatar || '', 'U');
        applyAvatar(drawerUserChip, safeProfile.avatar || '', 'U');

        if (drawerUserName) drawerUserName.textContent = safeProfile.name || 'User';
        if (drawerUserEmail) drawerUserEmail.textContent = safeProfile.email || '';
        if (drawerAccountLink) {
            drawerAccountLink.textContent = 'Account';
            drawerAccountLink.href = 'account.html';
        }

        fillHeaderStats(progress);
    }

    async function updateAuthUI() {
        if (!window.CN || !window.CN.authReady) {
            setGuestUI();
            return;
        }

        await window.CN.authReady;
        const user = getCurrentUser();
        if (!user) {
            setGuestUI();
            return;
        }

        try {
            const docData = await window.CN.getUserDoc();
            const profile = docData && docData.profile ? docData.profile : { email: user.email || '' };
            const progress = docData && docData.progress ? docData.progress : {};
            setUserUI(profile, progress);
        } catch (error) {
            setUserUI({ email: user.email || '', name: user.displayName || 'User' }, {});
        }
    }

    function bindLogout() {
        const logout = async () => {
            if (!window.CN || typeof window.CN.signOut !== 'function') {
                window.location.href = 'auth.html';
                return;
            }
            try {
                await window.CN.signOut();
            } catch (error) {
                // Ignore sign-out errors and still move to auth.
            }
            window.location.href = 'auth.html';
        };

        const logoutBtn = document.getElementById('logoutBtn');
        const drawerLogout = document.getElementById('drawerLogout');
        if (logoutBtn) logoutBtn.addEventListener('click', logout);
        if (drawerLogout) drawerLogout.addEventListener('click', logout);
    }

    function normalizeQuery(value) {
        return String(value || '').trim().toLowerCase();
    }

    function matchesCourse(course, query) {
        if (!query) return true;
        const haystack = [
            course.title,
            course.shortTitle,
            course.description,
            ...(Array.isArray(course.keywords) ? course.keywords : [])
        ].join(' ').toLowerCase();
        return haystack.includes(query);
    }

    // ── Enrollment helpers ─────────────────────────────────────────────────────

    function applyEnrollmentToCard(key) {
        document.querySelectorAll(`.scc-card[data-course-key="${key}"]`).forEach(card => {
            const btn = card.querySelector('.enroll-btn');
            const status = card.querySelector('.enroll-status');
            if (btn) {
                btn.textContent = 'Enrolled';
                btn.classList.add('enrolled');
                btn.classList.remove('enroll-btn-locked');
                btn.disabled = false;
            }
            if (status) {
                status.textContent = 'Access granted';
            }
        });
    }

    function applyAllEnrollments() {
        enrolledSet.forEach(key => applyEnrollmentToCard(key));
    }

    async function saveEnrollment(key) {
        enrolledSet.add(key);
        if (!window.CN || typeof window.CN.saveProgress !== 'function') return;
        try {
            await window.CN.saveProgress({ enrolled: [...enrolledSet] });
        } catch (e) {
            // non-blocking — UI already updated
        }
    }

    async function loadEnrollments() {
        if (!window.CN || !window.CN.authReady) return;
        await window.CN.authReady;
        const user = typeof window.CN.getAuthUser === 'function' ? window.CN.getAuthUser() : null;
        if (!user) return;
        try {
            const docData = await window.CN.getUserDoc();
            const enrolled = docData && docData.progress && Array.isArray(docData.progress.enrolled)
                ? docData.progress.enrolled : [];
            enrolledSet = new Set(enrolled);
            applyAllEnrollments();

            // Pull live lesson counts + completed from Firestore courseProgress
            const cp = docData && docData.progress && docData.progress.courseProgress
                ? docData.progress.courseProgress : {};
            document.querySelectorAll('.scc-card').forEach(card => {
                const key = card.getAttribute('data-course-key');
                const data = key && cp[key];
                if (data && data.total > 0) {
                    const el = card.querySelector('.scc-lesson-count');
                    const fill = card.querySelector('.scc-prog-fill');
                    const completed = data.completed || 0;
                    if (el) el.textContent = `${completed} of ${data.total} lessons`;
                    if (fill) fill.style.width = `${data.total > 0 ? Math.round(completed / data.total * 100) : 0}%`;
                }
            });
        } catch (e) {}
    }

    // ── Course card markup ─────────────────────────────────────────────────────

    function getLanguageClass(courseKey) {
        const map = {
            python: 'python',
            javascript: 'javascript',
            java: 'java',
            cpp: 'cpp',
            c: 'c',
            sql: 'sql'
        };
        return map[courseKey] || '';
    }

    function getLanguageIcon(courseKey, fallback) {
        const map = {
            python: '&#x1F40D;',
            javascript: '&#x26A1;',
            java: '&#x2615;',
            cpp: '&#x2699;&#xFE0F;',
            c: 'C',
            sql: 'DB'
        };
        return map[courseKey] || fallback || 'L';
    }

    function getCourseLogoSVG(key) {
        const map = {
            python: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><linearGradient id="ccc-pyB${key}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5DA3CE"/><stop offset="1" stop-color="#2E6097"/></linearGradient><linearGradient id="ccc-pyY${key}" x1="1" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#FFD43B"/><stop offset="1" stop-color="#FFE76A"/></linearGradient></defs><path fill="url(#ccc-pyB${key})" d="M23.9 4C15.3 4 15.9 7.6 15.9 7.6l.01 3.8h8.2v1.2H13.2S8.8 12.1 8.8 20.9 13.5 29 13.5 29H16v-4s-.15-4.6 4.6-4.6h8s4.4.07 4.4-4.3V9.3S33.5 4 23.9 4zm-4.8 2.9c.77 0 1.4.63 1.4 1.4s-.63 1.4-1.4 1.4-1.4-.63-1.4-1.4.63-1.4 1.4-1.4z"/><path fill="url(#ccc-pyY${key})" d="M24.1 44c8.6 0 8.1-3.6 8.1-3.6l-.01-3.8h-8.2v-1.2H35s4.4-.5 4.4-9.3-4.7-8.1-4.7-8.1H32v4s.15 4.6-4.6 4.6h-8s-4.4-.07-4.4 4.3v7.2S14.5 44 24.1 44zm4.8-2.9c-.77 0-1.4-.63-1.4-1.4s.63-1.4 1.4-1.4 1.4.63 1.4 1.4-.63 1.4-1.4 1.4z"/></svg>`,
            javascript: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="6" fill="#F7DF1E"/><text x="7" y="37" font-family="Arial,sans-serif" font-weight="900" font-size="26" fill="#000">JS</text></svg>`,
            java: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M18.5 7.5 Q17.5 4.3 18.5 2" stroke="#E76F00" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M24 7.5 Q23 4.3 24 2" stroke="#E76F00" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M29.5 7.5 Q28.5 4.3 29.5 2" stroke="#E76F00" stroke-width="1.6" fill="none" stroke-linecap="round"/><path fill="#5382A1" d="M11 12H37L34 36H14L11 12Z"/><path d="M37 16h2.5a3.5 3.5 0 0 1 0 7H37" stroke="#5382A1" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="24" cy="37" rx="13" ry="3.5" fill="#E76F00"/></svg>`,
            sql: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#10b981" d="M24 6C14.6 6 9 9 9 12v7c0 3 5.6 6 15 6s15-3 15-6v-7c0-3-5.6-6-15-6z"/><path fill="#059669" d="M9 19v7c0 3 5.6 6 15 6s15-3 15-6v-7c-2.8 2.3-8.2 3.8-15 3.8S11.8 21.3 9 19z"/><path fill="#047857" d="M9 26v7c0 3 5.6 6 15 6s15-3 15-6v-7c-2.8 2.3-8.2 3.8-15 3.8S11.8 28.3 9 26z"/><text x="24" y="14" text-anchor="middle" font-family="Arial,sans-serif" font-weight="800" font-size="7.5" fill="#fff">SQL</text></svg>`,
            c: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="rgba(34,197,94,0.12)" stroke="#22c55e" stroke-width="2.5"/><path d="M32 16a10 10 0 1 0 0 16" stroke="#22c55e" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
            cpp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" stroke-width="2.5"/><path d="M22 15.5a9.5 9.5 0 1 0 0 17" stroke="#8b5cf6" stroke-width="3.5" fill="none" stroke-linecap="round"/><line x1="30" y1="19" x2="30" y2="27" stroke="#8b5cf6" stroke-width="2.5" stroke-linecap="round"/><line x1="26.5" y1="23" x2="33.5" y2="23" stroke="#8b5cf6" stroke-width="2.5" stroke-linecap="round"/><line x1="36.5" y1="19" x2="36.5" y2="27" stroke="#8b5cf6" stroke-width="2.5" stroke-linecap="round"/><line x1="33" y1="23" x2="40" y2="23" stroke="#8b5cf6" stroke-width="2.5" stroke-linecap="round"/></svg>`
        };
        return map[key] || `<span style="font-size:1.4rem;font-weight:800">${key.toUpperCase()}</span>`;
    }

    function getCourseThumbImage(key) {
        const map = {
            python: 'assets/python_course.png',
            javascript: 'assets/javascript_course.png',
            java: 'assets/java_course.png',
            cpp: 'assets/c++_course.png',
            c: 'assets/c_course.png',
            sql: 'assets/sql_course.png',
            'artificial-intelligence': 'assets/ai_course.png'
        };
        return map[key] || '';
    }

    function createCatalogCardMarkup(course) {
        const langClass = getLanguageClass(course.key);
        const state = course.available ? 'available' : 'locked';
        const svgLogo = getCourseLogoSVG(course.key);
        const thumbImage = getCourseThumbImage(course.key);
        const lessons = course.lessons || 0;
        const isLocked = !course.available;
        const btnClass = isLocked ? 'enroll-btn enroll-btn-locked' : 'enroll-btn';
        const btnLabel = isLocked ? 'Locked' : 'Enroll';
        // statusText: Coming Soon for locked (shown once next to button), nothing for available
        const statusText = isLocked ? 'Coming Soon' : '';
        // Only Popular badge shown in thumb; locked courses don't get a duplicate badge
        const badge = course.popular
            ? `<span class="scc-badge scc-badge-popular">&#9733; Popular</span>` : '';
        // Always render progress area so all cards are identical height;
        // on locked cards it's hidden so it still takes up the same space.
        const progressHTML = `
                <span class="scc-lesson-count${isLocked ? ' scc-prog-hidden' : ''}" data-course-total="${lessons}">0 of ${lessons} lessons</span>
                <div class="scc-prog-track${isLocked ? ' scc-prog-hidden' : ''}"><div class="scc-prog-fill" style="width:0%"></div></div>`;
        const inlineStyle = langClass ? '' : `style="--lang-color:${course.accent};--lang-glow:${course.accent}55"`;
        const thumbMedia = thumbImage
            ? `<img src="${thumbImage}" alt="${course.title} course image" loading="lazy">`
            : `<div class="scc-thumb-inner">${svgLogo}</div>`;

        return `
            <div class="scc-card ${langClass}${isLocked ? ' scc-locked' : ''}"
                role="button"
                tabindex="0"
                data-course-key="${course.key}"
                data-course-state="${state}"
                data-course-href="${course.available ? course.href : ''}"
                ${inlineStyle}>
                <div class="scc-thumb">
                    ${thumbMedia}
                    ${badge}
                </div>
                <div class="scc-body">
                    <div class="scc-title">${course.title}</div>
                    <p class="scc-desc">${course.description}</p>
                    ${progressHTML}
                    <div class="scc-foot">
                        <button class="${btnClass}" type="button">${btnLabel}</button>
                        <span class="enroll-status">${statusText}</span>
                    </div>
                </div>
            </div>
        `;
    }

    function createInterviewCardMarkup(course) {
        const thumbImage = getCourseThumbImage(course.key);
        const iconContent = thumbImage
            ? `<img src="${thumbImage}" alt="${course.title} course image" loading="lazy">`
            : course.shortTitle;
        return `
            <button type="button" class="interview-card" data-interview-course="${course.key}" style="--catalog-accent:${course.accent};">
                <span class="interview-card-icon${thumbImage ? ' has-image' : ''}">${iconContent}</span>
                <span class="interview-card-title">${course.title}</span>
                <span class="interview-card-lock">Locked</span>
            </button>
        `;
    }

    function renderAllCourses(query) {
        const grid = document.getElementById('allCoursesGrid');
        const counter = document.getElementById('allCoursesCount');
        const empty = document.getElementById('allCoursesEmpty');
        if (!grid) return;

        const normalizedQuery = normalizeQuery(query);
        const filtered = ALL_COURSES.filter((course) => matchesCourse(course, normalizedQuery));

        grid.innerHTML = filtered.map(createCatalogCardMarkup).join('');
        if (counter) counter.textContent = `${filtered.length} courses`;
        if (empty) empty.hidden = filtered.length !== 0;
    }

    function renderInterviewQuestions(query) {
        const grid = document.getElementById('interviewQuestionsGrid');
        const counter = document.getElementById('interviewQuestionsCount');
        const empty = document.getElementById('interviewQuestionsEmpty');
        if (!grid) return;

        const normalizedQuery = normalizeQuery(query);
        const filtered = ALL_COURSES.filter((course) => matchesCourse(course, normalizedQuery));

        grid.innerHTML = filtered.map(createInterviewCardMarkup).join('');
        if (counter) counter.textContent = `${filtered.length} topics`;
        if (empty) empty.hidden = filtered.length !== 0;
    }

    function bindAllCoursesPage() {
        const searchInput = document.getElementById('allCoursesSearch');
        const grid = document.getElementById('allCoursesGrid');
        if (!grid) return;

        renderAllCourses(searchInput ? searchInput.value : '');

        if (searchInput) {
            searchInput.addEventListener('input', () => renderAllCourses(searchInput.value));
        }

        grid.addEventListener('click', (event) => {
            const btn = event.target.closest('.enroll-btn');
            const card = event.target.closest('.scc-card');
            if (!card) return;

            const state = card.getAttribute('data-course-state');
            const key = card.getAttribute('data-course-key');

            // ── Button click: enroll / locked ──────────────────────────────────
            if (btn) {
                event.preventDefault();
                event.stopPropagation();

                if (state === 'locked') {
                    showToast('Coming Soon', 'This course is coming very soon. Stay tuned!');
                    return;
                }
                if (!getCurrentUser()) {
                    showToast('Login First', 'Please login or sign up to enroll in this course.');
                    return;
                }
                if (enrolledSet.has(key)) {
                    showToast('Already Enrolled', `You are already enrolled in ${key.toUpperCase()}!`);
                    return;
                }
                showToast('Enrolled!', `${key.toUpperCase()} course unlocked! Redirecting...`);
                saveEnrollment(key);
                applyEnrollmentToCard(key);
                const href = card.getAttribute('data-course-href') || '';
                if (href) window.setTimeout(() => { window.location.href = href; }, 1000);
                return;
            }

            // ── Card click: navigate if enrolled ──────────────────────────────
            if (state === 'locked') {
                event.preventDefault();
                showToast('Coming Soon', 'This course is coming very soon. Stay tuned!');
                return;
            }
            if (!getCurrentUser()) {
                event.preventDefault();
                showToast('Login First', 'Please login or sign up to enroll in this course.');
                return;
            }
            if (!enrolledSet.has(key)) {
                event.preventDefault();
                showToast('Enroll First', `Click the Enroll button to unlock ${key.toUpperCase()}.`);
                return;
            }
            event.preventDefault();
            const href = card.getAttribute('data-course-href') || '';
            if (href) window.location.href = href;
        });
    }

    function enforceAllCoursesLogin() {
        const page = document.body;
        if (!page || page.getAttribute('data-page') !== 'all-courses') return;
        if (!FUTURE_GATES.allCoursesRequireLogin) return;
        if (getCurrentUser()) return;

        showToast('Login Required', LOGIN_REQUIRED_MESSAGE);
        window.setTimeout(() => {
            window.location.href = 'auth.html';
        }, 700);
    }

    function bindInterviewPage() {
        const searchInput = document.getElementById('interviewQuestionsSearch');
        const grid = document.getElementById('interviewQuestionsGrid');
        if (!grid) return;

        renderInterviewQuestions(searchInput ? searchInput.value : '');

        if (searchInput) {
            searchInput.addEventListener('input', () => renderInterviewQuestions(searchInput.value));
        }

        grid.addEventListener('click', (event) => {
            const card = event.target.closest('[data-interview-course]');
            if (!card) return;
            event.preventDefault();
            showToast('Unavailable', LOCKED_FEATURE_MESSAGE);
        });
    }

    document.addEventListener('DOMContentLoaded', async () => {
        bindLogout();
        bindAllCoursesPage();
        bindInterviewPage();
        await updateAuthUI();
        loadEnrollments();
    });
})();
