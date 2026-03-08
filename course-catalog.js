(function () {
    'use strict';

    const FUTURE_GATES = {
        allCoursesRequireLogin: false
    };

    const LOCKED_COURSE_MESSAGE = 'Currently this course is not available.';
    const LOCKED_FEATURE_MESSAGE = 'Currently this feature is not available.';
    const LOGIN_REQUIRED_MESSAGE = 'Login first.';

    const AVAILABLE_COURSES = [
        {
            key: 'python',
            title: 'Python',
            shortTitle: 'PY',
            description: 'Beginner-friendly programming for automation, problem solving, and real-world apps.',
            accent: '#3b82f6',
            href: 'python.html',
            available: true,
            popular: true,
            keywords: ['python', 'basics', 'functions', 'loops']
        },
        {
            key: 'sql',
            title: 'SQL',
            shortTitle: 'SQL',
            description: 'Queries, joins, filtering, aggregation, and database fundamentals.',
            accent: '#10b981',
            href: 'sql.html',
            available: true,
            popular: true,
            keywords: ['sql', 'database', 'joins', 'queries']
        },
        {
            key: 'java',
            title: 'Java',
            shortTitle: 'JV',
            description: 'Object-oriented programming for applications, interviews, and enterprise systems.',
            accent: '#ef4444',
            href: 'java.html',
            available: true,
            popular: true,
            keywords: ['java', 'oop', 'classes', 'methods']
        },
        {
            key: 'javascript',
            title: 'JavaScript',
            shortTitle: 'JS',
            description: 'Interactive web development, browser logic, and modern scripting fundamentals.',
            accent: '#f59e0b',
            href: 'javascript.html',
            available: true,
            popular: true,
            keywords: ['javascript', 'web', 'dom', 'functions']
        },
        {
            key: 'c',
            title: 'C',
            shortTitle: 'C',
            description: 'Core programming fundamentals, pointers, memory, and system-level concepts.',
            accent: '#22c55e',
            href: 'c.html',
            available: true,
            popular: false,
            keywords: ['c', 'pointers', 'memory', 'programming']
        },
        {
            key: 'cpp',
            title: 'C++',
            shortTitle: 'C++',
            description: 'Performance-oriented programming, STL, OOP, and competitive coding foundations.',
            accent: '#8b5cf6',
            href: 'cpp.html',
            available: true,
            popular: false,
            keywords: ['c++', 'stl', 'oop', 'competitive programming']
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

    function createCatalogCardMarkup(course) {
        const langClass = getLanguageClass(course.key);
        const state = course.available ? 'available' : 'locked';
        const icon = getLanguageIcon(course.key, course.shortTitle);
        const actionLabel = course.available ? 'Open Course' : 'Locked';
        const statusLabel = course.available ? 'Available' : 'Locked';
        const comingSoon = course.available ? '' : '<div class="coming-soon-badge">Coming Soon</div>';

        return `
            <div class="language-card ${langClass} ${course.available ? '' : 'coming-soon'} catalog-course-card"
                role="button"
                tabindex="0"
                data-course-key="${course.key}"
                data-course-state="${state}"
                data-course-href="${course.available ? course.href : ''}">
                <div class="language-icon">${icon}</div>
                <div class="language-name">${course.title}</div>
                <div class="language-desc">${course.description}</div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 0%"></div>
                </div>
                <div class="progress-text">0 of 0 lessons</div>
                <div class="language-actions">
                    <button class="enroll-btn" type="button">${actionLabel}</button>
                    <span class="enroll-status">${statusLabel}</span>
                </div>
                ${comingSoon}
            </div>
        `;
    }

    function createInterviewCardMarkup(course) {
        return `
            <button type="button" class="interview-card" data-interview-course="${course.key}" style="--catalog-accent:${course.accent};">
                <span class="interview-card-icon">${course.shortTitle}</span>
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
            const card = event.target.closest('.catalog-course-card');
            if (!card) return;

            const state = card.getAttribute('data-course-state');
            if (state === 'available' && !getCurrentUser()) {
                event.preventDefault();
                showToast('Login Required', LOGIN_REQUIRED_MESSAGE);
                window.setTimeout(() => {
                    window.location.href = 'auth.html';
                }, 700);
                return;
            }

            if (state === 'available') {
                const href = card.getAttribute('data-course-href') || '';
                if (href) window.location.href = href;
                return;
            }

            if (state === 'locked') {
                event.preventDefault();
                showToast('Course Unavailable', LOCKED_COURSE_MESSAGE);
            }
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
    });
})();
