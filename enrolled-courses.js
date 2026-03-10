(() => {
    'use strict';

    const COURSE_META = {
        python: {
            title: 'Python',
            shortTitle: 'PY',
            description: 'Beginner-friendly, versatile language for web, data science, and automation.',
            href: 'python.html',
            accent: '#3b82f6'
        },
        javascript: {
            title: 'JavaScript',
            shortTitle: 'JS',
            description: 'Essential for web development, powers interactive websites and web apps.',
            href: 'javascript.html',
            accent: '#f59e0b'
        },
        cpp: {
            title: 'C++',
            shortTitle: 'C++',
            description: 'High-performance language for system programming and game development.',
            href: 'cpp.html',
            accent: '#8b5cf6'
        },
        c: {
            title: 'C',
            shortTitle: 'C',
            description: 'Core systems language for fundamentals, memory, and embedded programming.',
            href: 'c.html',
            accent: '#22c55e'
        },
        java: {
            title: 'Java',
            shortTitle: 'JV',
            description: 'Enterprise-level language for Android apps and large-scale applications.',
            href: 'java.html',
            accent: '#ef4444'
        },
        sql: {
            title: 'SQL',
            shortTitle: 'SQL',
            description: 'Query and manage relational databases for apps and analytics.',
            href: 'sql.html',
            accent: '#10b981'
        },
        'artificial-intelligence': {
            title: 'Artificial Intelligence',
            shortTitle: 'AI',
            description: 'Reasoning, search, intelligent agents, machine learning, and neural networks.',
            href: 'ai.html',
            accent: '#a855f7'
        },
        dsa: {
            title: 'Data Structures and Algorithms',
            shortTitle: 'DSA',
            description: 'Arrays, strings, linked lists, trees, graphs, and problem-solving patterns.',
            href: '',
            accent: '#38bdf8'
        },
        'computer-architecture': {
            title: 'Computer Architecture',
            shortTitle: 'CA',
            description: 'Processors, memory hierarchy, instruction sets, and how hardware executes programs.',
            href: '',
            accent: '#f97316'
        },
        'operating-system': {
            title: 'Operating System',
            shortTitle: 'OS',
            description: 'Processes, threads, scheduling, memory management, and file systems.',
            href: '',
            accent: '#22c55e'
        },
        'computer-network': {
            title: 'Computer Network',
            shortTitle: 'CN',
            description: 'Networking models, routing, switching, and protocol fundamentals.',
            href: '',
            accent: '#0ea5e9'
        },
        'software-engineering': {
            title: 'Software Engineering',
            shortTitle: 'SE',
            description: 'Requirements, design, testing, maintenance, and software lifecycle practices.',
            href: '',
            accent: '#f59e0b'
        },
        'cyber-security': {
            title: 'Cyber Security',
            shortTitle: 'CS',
            description: 'Threats, defense, secure systems, and practical security awareness.',
            href: '',
            accent: '#ef4444'
        },
        'big-data': {
            title: 'Big Data',
            shortTitle: 'BD',
            description: 'Large-scale data processing, distributed systems, and analytics pipelines.',
            href: '',
            accent: '#8b5cf6'
        },
        'data-warehousing': {
            title: 'Data Warehousing',
            shortTitle: 'DW',
            description: 'Data models, ETL pipelines, OLAP concepts, and warehouse design.',
            href: '',
            accent: '#06b6d4'
        },
        cryptography: {
            title: 'Cryptography',
            shortTitle: 'CR',
            description: 'Encryption, hashing, digital signatures, and secure communication basics.',
            href: '',
            accent: '#eab308'
        },
        'network-security': {
            title: 'Network Security',
            shortTitle: 'NS',
            description: 'Firewalls, IDS, secure protocols, and protecting networked systems.',
            href: '',
            accent: '#14b8a6'
        },
        'data-science': {
            title: 'Data Science',
            shortTitle: 'DS',
            description: 'Data analysis, statistics, visualization, and insight generation workflows.',
            href: '',
            accent: '#f97316'
        },
        'machine-learning': {
            title: 'Machine Learning',
            shortTitle: 'ML',
            description: 'Supervised learning, model evaluation, and practical learning systems.',
            href: '',
            accent: '#84cc16'
        }
    };

    const COURSE_DISPLAY_ORDER = [
        'python',
        'javascript',
        'java',
        'cpp',
        'c',
        'sql',
        'artificial-intelligence',
        'machine-learning',
        'data-science',
        'dsa',
        'computer-architecture',
        'operating-system',
        'computer-network',
        'software-engineering',
        'cyber-security',
        'big-data',
        'data-warehousing',
        'cryptography',
        'network-security'
    ];

    function showToast(title, message) {
        if (typeof window.cnToast === 'function') {
            window.cnToast(title, message);
            return;
        }
        window.alert(message ? `${title}\n${message}` : title);
    }

    function getCurrentUser() {
        if (!window.CN || typeof window.CN.getAuthUser !== 'function') return null;
        return window.CN.getAuthUser();
    }

    function uniqueList(values) {
        const seen = new Set();
        const out = [];
        (Array.isArray(values) ? values : []).forEach((value) => {
            const key = String(value || '').trim();
            if (!key || seen.has(key)) return;
            seen.add(key);
            out.push(key);
        });
        return out;
    }

    function normalizeCourseKey(rawKey) {
        let key = String(rawKey || '').trim().toLowerCase();
        if (!key) return '';
        key = key.replace(/[_\s]+/g, '-').replace(/-+/g, '-');
        if (key === 'c++') return 'cpp';
        if (key === 'artificialintelligence') return 'artificial-intelligence';
        return key;
    }

    function formatCourseKey(key) {
        return String(key || '')
            .split('-')
            .filter(Boolean)
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join(' ');
    }

    function getCourseMeta(key) {
        const normalizedKey = normalizeCourseKey(key);
        const fallbackTitle = formatCourseKey(normalizedKey) || 'Course';
        const meta = COURSE_META[normalizedKey];
        if (meta) return { key: normalizedKey, ...meta };
        return {
            key: normalizedKey,
            title: fallbackTitle,
            shortTitle: fallbackTitle.slice(0, 2).toUpperCase(),
            description: 'Course page is not linked yet. Open All Courses to browse available pages.',
            href: 'all-courses.html',
            accent: '#64748b'
        };
    }

    function getLanguageClass(courseKey) {
        const map = {
            python: 'python',
            javascript: 'javascript',
            cpp: 'cpp',
            java: 'java',
            c: 'c',
            sql: 'sql'
        };
        return map[courseKey] || '';
    }

    function getCourseIcon(course) {
        const map = {
            python: '&#x1F40D;',
            javascript: '&#x26A1;',
            cpp: '&#x2699;&#xFE0F;',
            java: '&#x2615;',
            c: 'C',
            sql: 'DB',
            'artificial-intelligence': '&#x1F916;'
        };
        return map[course.key] || `<span style="font-size:1.1rem;font-weight:700;">${course.shortTitle}</span>`;
    }

    function getCourseThumbImage(courseKey) {
        const map = {
            python: 'assets/python_course.png',
            javascript: 'assets/javascript_course.png',
            java: 'assets/java_course.png',
            cpp: 'assets/c++_course.png',
            c: 'assets/c_course.png',
            sql: 'assets/sql_course.png',
            'artificial-intelligence': 'assets/ai_course.png'
        };
        return map[courseKey] || '';
    }

    function applyAvatar(element, avatar, fallbackText) {
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
        element.textContent = fallbackText;
    }

    function fillHeaderStats(progress) {
        const safeProgress = progress && typeof progress === 'object' ? progress : {};
        const completed = Array.isArray(safeProgress.completed) ? safeProgress.completed.length : 0;
        const xp = Number(safeProgress.xp) || 0;
        const streak = Number(safeProgress.streak) || 0;
        const maxStreak = Number(safeProgress.maxStreak) || Math.max(0, streak);
        const courseProgress = safeProgress.courseProgress && typeof safeProgress.courseProgress === 'object'
            ? safeProgress.courseProgress
            : {};
        const totalLessons = Object.values(courseProgress).reduce((sum, item) => sum + Number((item && item.total) || 0), 0);

        const completedLessons = document.getElementById('completedLessons');
        const totalLessonsEl = document.getElementById('totalLessons');
        const totalXpEl = document.getElementById('totalXP');
        const streakEl = document.getElementById('streak');
        const maxStreakEl = document.getElementById('maxStreak');
        const drawerXpEl = document.getElementById('drawerXP');
        const drawerStreakEl = document.getElementById('drawerStreak');
        const drawerMaxStreakEl = document.getElementById('drawerMaxStreak');
        const drawerLessonsEl = document.getElementById('drawerLessons');

        if (completedLessons) completedLessons.textContent = String(completed);
        if (totalLessonsEl) totalLessonsEl.textContent = String(totalLessons);
        if (totalXpEl) totalXpEl.textContent = String(xp);
        if (streakEl) streakEl.textContent = String(streak);
        if (maxStreakEl) maxStreakEl.textContent = String(maxStreak);
        if (drawerXpEl) drawerXpEl.textContent = String(xp);
        if (drawerStreakEl) drawerStreakEl.textContent = String(streak);
        if (drawerMaxStreakEl) drawerMaxStreakEl.textContent = String(maxStreak);
        if (drawerLessonsEl) drawerLessonsEl.textContent = String(completed);
    }

    function setGuestUI() {
        const authLink = document.querySelector('.auth-link');
        const logoutBtn = document.getElementById('logoutBtn');
        const drawerLogout = document.getElementById('drawerLogout');
        const currentUserChip = document.getElementById('currentUserChip');
        const mobileAvatar = document.getElementById('mobileAvatar');
        const drawerUserChip = document.getElementById('drawerUserChip');
        const drawerUserName = document.getElementById('drawerUserName');
        const drawerUserEmail = document.getElementById('drawerUserEmail');
        const drawerAccountLink = document.getElementById('drawerAccountLink');

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
        const drawerLogout = document.getElementById('drawerLogout');
        const currentUserChip = document.getElementById('currentUserChip');
        const mobileAvatar = document.getElementById('mobileAvatar');
        const drawerUserChip = document.getElementById('drawerUserChip');
        const drawerUserName = document.getElementById('drawerUserName');
        const drawerUserEmail = document.getElementById('drawerUserEmail');
        const drawerAccountLink = document.getElementById('drawerAccountLink');

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

    function createCourseCardMarkup(course, progressData) {
        const langClass = getLanguageClass(course.key);
        const inlineStyle = langClass ? '' : `style="--lang-color:${course.accent};--lang-glow:${course.accent}55"`;
        const thumbImage = getCourseThumbImage(course.key);
        const total = Number((progressData && progressData.total) || 0);
        const completed = Number((progressData && progressData.completed) || 0);
        const percent = total > 0 ? Math.max(0, Math.min(100, Math.round((completed / total) * 100))) : 0;
        const progressText = total > 0 ? `${completed} of ${total} lessons` : 'No progress yet';
        const cta = course.href
            ? `<a class="enroll-btn enrolled" href="${course.href}">Open Course</a>`
            : '<button class="enroll-btn enroll-btn-locked" type="button" disabled>Page Not Ready</button>';
        const thumbMedia = thumbImage
            ? `<img src="${thumbImage}" alt="${course.title} course image" loading="lazy">`
            : `<div class="scc-thumb-inner">${getCourseIcon(course)}</div>`;

        return `
            <article class="scc-card ${langClass}" ${inlineStyle}>
                <div class="scc-thumb">
                    ${thumbMedia}
                    <span class="scc-badge scc-badge-popular">Enrolled</span>
                </div>
                <div class="scc-body">
                    <div class="scc-title">${course.title}</div>
                    <p class="scc-desc">${course.description}</p>
                    <span class="scc-lesson-count">${progressText}</span>
                    <div class="scc-prog-track"><div class="scc-prog-fill" style="width:${percent}%"></div></div>
                    <div class="scc-foot">
                        ${cta}
                        <span class="enroll-status">${percent}% complete</span>
                    </div>
                </div>
            </article>
        `;
    }

    function renderEnrolledCourses(progress) {
        const summaryEl = document.getElementById('enrolledSummary');
        const grid = document.getElementById('enrolledCoursesGrid');
        const empty = document.getElementById('enrolledCoursesEmpty');
        if (!grid || !empty) return;

        const safeProgress = progress && typeof progress === 'object' ? progress : {};
        const enrolled = uniqueList(
            (Array.isArray(safeProgress.enrolled) ? safeProgress.enrolled : [])
                .map(normalizeCourseKey)
                .filter(Boolean),
        );
        const courseProgress = safeProgress.courseProgress && typeof safeProgress.courseProgress === 'object'
            ? safeProgress.courseProgress
            : {};

        if (!enrolled.length) {
            grid.innerHTML = '';
            empty.hidden = false;
            empty.textContent = 'Not enrolled yet.';
            if (summaryEl) summaryEl.textContent = 'Not enrolled yet.';
            return;
        }

        const orderedEnrolled = [...enrolled].sort((a, b) => {
            const ai = COURSE_DISPLAY_ORDER.indexOf(a);
            const bi = COURSE_DISPLAY_ORDER.indexOf(b);
            if (ai === -1 && bi === -1) return a.localeCompare(b);
            if (ai === -1) return 1;
            if (bi === -1) return -1;
            return ai - bi;
        });

        const cards = orderedEnrolled.map((key) => {
            const course = getCourseMeta(key);
            return createCourseCardMarkup(course, courseProgress[key]);
        });

        grid.innerHTML = cards.join('');
        empty.hidden = true;
        if (summaryEl) {
            const count = enrolled.length;
            summaryEl.textContent = `${count} enrolled course${count === 1 ? '' : 's'}.`;
        }
    }

    function bindLogout() {
        const logout = async () => {
            try {
                if (window.CN && typeof window.CN.signOut === 'function') {
                    await window.CN.signOut();
                }
            } catch (e) {
                // Ignore sign-out errors and continue to auth page.
            }
            window.location.href = 'auth.html';
        };

        const logoutBtn = document.getElementById('logoutBtn');
        const drawerLogout = document.getElementById('drawerLogout');
        if (logoutBtn) logoutBtn.addEventListener('click', logout);
        if (drawerLogout) drawerLogout.addEventListener('click', logout);
    }

    function redirectToAuthWithToast() {
        showToast('Login Required', 'Login first.');
        window.setTimeout(() => {
            window.location.href = 'auth.html';
        }, 900);
    }

    async function init() {
        if (!window.CN || !window.CN.authReady) {
            redirectToAuthWithToast();
            return;
        }

        await window.CN.authReady;
        const user = getCurrentUser();
        if (!user || !user.email) {
            setGuestUI();
            redirectToAuthWithToast();
            return;
        }

        bindLogout();

        try {
            const docData = await window.CN.getUserDoc();
            const profile = docData && docData.profile ? docData.profile : { email: user.email || '', name: user.displayName || 'User' };
            const progress = docData && docData.progress ? docData.progress : {};
            setUserUI(profile, progress);
            renderEnrolledCourses(progress);
        } catch (e) {
            setUserUI({ email: user.email || '', name: user.displayName || 'User' }, {});
            renderEnrolledCourses({});
        }

        try {
            await window.CN.subscribeUserDoc((docData) => {
                const profile = docData && docData.profile ? docData.profile : { email: user.email || '', name: user.displayName || 'User' };
                const progress = docData && docData.progress ? docData.progress : {};
                setUserUI(profile, progress);
                renderEnrolledCourses(progress);
            });
        } catch (e) {
            // Ignore subscription failures.
        }
    }

    init();
})();
