(() => {
    // APPLY THEME IMMEDIATELY (before anything loads) – syncs light/dark across all pages
    (function () {
        const savedTheme = localStorage.getItem("cn-theme");
        const isLight = savedTheme === "light";
        if (isLight) {
            document.documentElement.classList.add("theme-light");
            if (document.body) document.body.classList.add("theme-light");
        } else {
            document.documentElement.classList.remove("theme-light");
            if (document.body) document.body.classList.remove("theme-light");
        }
    })();
    'use strict';

    const PROJECTS_MESSAGE = 'Our SQL learning platform is launching very soon.';
    const LOGIN_MESSAGE = 'Login first.';
    const TOAST_DURATION_MS = 3000;
    const RETURN_KEY = 'cn_return_to';
    const RETURN_PAGES = [
        'faq.html',
        'about.html',
        'privacy.html',
        'terms.html'
    ];

    function showToast(title, desc) {
        const toast = document.getElementById('achievementToast');
        const titleEl = document.getElementById('achievementTitle');
        const descEl = document.getElementById('achievementDesc');

        if (!toast || !titleEl || !descEl) {
            window.alert(desc ? `${title}\n${desc}` : title);
            return;
        }

        titleEl.textContent = title || '';
        descEl.textContent = desc || '';
        toast.classList.add('show');

        if (showToast._timer) window.clearTimeout(showToast._timer);
        showToast._timer = window.setTimeout(() => {
            toast.classList.remove('show');
        }, TOAST_DURATION_MS);
    }

    function getCurrentUser() {
        const fbUser = window.CN && typeof window.CN.getAuthUser === 'function'
            ? window.CN.getAuthUser()
            : (window.auth ? window.auth.currentUser : null);
        if (!fbUser || !fbUser.email) return null;
        return { email: fbUser.email };
    }

    function isLoggedIn() {
        return !!getCurrentUser();
    }

    function isProgressHref(href) {
        if (!href) return false;
        return href === 'progress.html' || href.startsWith('progress.html?') || href.startsWith('progress.html#');
    }

    function isReturnPageHref(href) {
        if (!href) return false;
        return RETURN_PAGES.some((page) => href === page || href.startsWith(`${page}?`) || href.startsWith(`${page}#`));
    }

    function storeReturnUrlIfNeeded(anchor) {
        const href = (anchor.getAttribute('href') || '').trim();
        if (!isReturnPageHref(href)) return;

        try {
            sessionStorage.setItem(RETURN_KEY, window.location.href);
        } catch (e) {
            // ignore storage failures
        }
    }

    function smartBack() {
        try {
            const stored = sessionStorage.getItem(RETURN_KEY);
            if (stored && stored !== window.location.href) {
                sessionStorage.removeItem(RETURN_KEY);
                window.location.href = stored;
                return;
            }
        } catch (e) {
            // ignore storage failures
        }

        try {
            if (document.referrer) {
                const ref = new URL(document.referrer);
                if (ref.origin === window.location.origin) {
                    window.location.href = ref.href;
                    return;
                }
            }
        } catch (e) {
            // ignore parsing failures
        }

        window.location.href = isLoggedIn() ? 'index.html' : 'auth.html';
    }

    window.cnToast = showToast;

    document.addEventListener('click', (event) => {
        const anchor = event.target.closest('a');
        if (!anchor) return;

        if (anchor.getAttribute('data-smart-back') === 'true') {
            event.preventDefault();
            smartBack();
            return;
        }

        const action = anchor.getAttribute('data-action') || '';
        if (action === 'projects') {
            event.preventDefault();
            showToast('Launching Soon', PROJECTS_MESSAGE);
            return;
        }
        if (action === 'contest') {
            event.preventDefault();
            showToast('Coming Soon', 'Monthly contests with a cash prize pool are launching soon.');
            return;
        }

        const href = anchor.getAttribute('href') || '';
        const requiresLogin = anchor.getAttribute('data-requires-login') === 'true' || isProgressHref(href);
        if (requiresLogin && !isLoggedIn()) {
            event.preventDefault();
            showToast('Login Required', LOGIN_MESSAGE);
            return;
        }

        storeReturnUrlIfNeeded(anchor);
    });

    // ATS Score Checker Functionality
    function initializeATSChecker() {
        const uploadBox = document.getElementById('atsUploadBox');
        const fileInput = document.getElementById('atsFileInput');
        const chooseBtn = document.getElementById('atsChooseBtn');
        const removeBtn = document.getElementById('atsRemoveBtn');
        // ATS checker references removed
        const filePreview = document.getElementById('atsFilePreview');
        const fileName = document.getElementById('atsFileName');
        const resultsDiv = document.getElementById('atsResults');

        let uploadedFile = null;

        if (!uploadBox || !fileInput || !chooseBtn) return;

        // File upload handling
        chooseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            fileInput.click();
        });

        fileInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files.length > 0) {
                uploadedFile = e.target.files[0];
                updateFilePreview();
            }
        });

        // Drag and drop
        uploadBox.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadBox.classList.add('dragover');
        });

        uploadBox.addEventListener('dragleave', () => {
            uploadBox.classList.remove('dragover');
        });

        uploadBox.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadBox.classList.remove('dragover');
            if (e.dataTransfer.files.length > 0) {
                uploadedFile = e.dataTransfer.files[0];
                fileInput.files = e.dataTransfer.files;
                updateFilePreview();
            }
        });

        function updateFilePreview() {
            if (uploadedFile) {
                uploadBox.style.display = 'none';
                filePreview.style.display = 'flex';
                fileName.textContent = uploadedFile.name;
            }
        }

        if (removeBtn) {
            removeBtn.addEventListener('click', () => {
                uploadedFile = null;
                fileInput.value = '';
                uploadBox.style.display = 'block';
                filePreview.style.display = 'none';
                resultsDiv.style.display = 'none';
            });
        }

        // Analyze resume
        if (analyzeBtn) {
            analyzeBtn.addEventListener('click', async () => {
                if (!uploadedFile) {
                    showToast('Missing File', 'Please upload a resume first');
                    return;
                }

                const jobDescription = keywordsInput.value.trim();
                if (!jobDescription) {
                    showToast('Missing Keywords', 'Please paste the job description');
                    return;
                }

                // Gemini API key check removed for manual ATS workflow

                analyzeBtn.disabled = true;
                analyzeBtn.textContent = 'Analyzing with Gemini...';

                try {
                    const resumeText = await readFile(uploadedFile);
                    const score = await analyzeWithGemini(resumeText, jobDescription);
                    displayResults(score, resumeText, jobDescription);
                } catch (error) {
                    showToast('Error', 'Analysis failed: ' + error.message);
                } finally {
                    analyzeBtn.disabled = false;
                    analyzeBtn.textContent = 'Analyze Resume';
                }
            });
        }

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                uploadedFile = null;
                fileInput.value = '';
                keywordsInput.value = '';
                uploadBox.style.display = 'block';
                filePreview.style.display = 'none';
                resultsDiv.style.display = 'none';
            });
        }
    }

    function readFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = () => reject(new Error('File read failed'));
            reader.readAsText(file);
        });
    }

    async function analyzeWithGemini(resumeText, jobDescription) {
        try {
            const apiKey = window.GEMINI_CONFIG.apiKey;
            const model = window.GEMINI_CONFIG.model;
            const endpoint = `${window.GEMINI_CONFIG.apiEndpoint}/${model}:generateContent?key=${apiKey}`;

            const prompt = `You are an Expert ATS (Applicant Tracking System) Analyzer. Analyze the following resume against the job description and provide a detailed ATS compatibility score.

RESUME:
${resumeText}

JOB DESCRIPTION:
${jobDescription}

Provide your analysis in the following exact JSON format (no markdown, just raw JSON):
{
    "score": <0-100>,
    "keywordsFound": <number>,
    "totalKeywords": <number>,
    "formattingScore": <0-100>,
    "missedKeywords": ["keyword1", "keyword2", "keyword3"],
    "feedback": "Brief feedback message"
}

Scoring criteria:
- score: Overall ATS compatibility (0-100). Consider keyword match percentage (70%), formatting & structure (20%), and contact info presence (10%)
- keywordsFound: Number of job description keywords found in resume
- totalKeywords: Total number of important keywords identified in job description
- formattingScore: How well formatted the resume is for ATS parsing (0-100)
- missedKeywords: Top 3-5 most important keywords missing from the resume
- feedback: A brief, encouraging message about the resume

IMPORTANT: Return ONLY the JSON object, no other text or markdown formatting.`;

            const requestBody = {
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }]
            };

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Gemini API Error:', errorText);
                let errorMsg = `API Error (${response.status}): ${response.statusText}`;
                try {
                    const errorJson = JSON.parse(errorText);
                    errorMsg = errorJson.error?.message || JSON.stringify(errorJson) || errorMsg;
                } catch (e) {
                    errorMsg = errorText || errorMsg;
                }
                throw new Error(`Gemini API error: ${errorMsg}`);
            }

            const data = await response.json();
            
            if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
                throw new Error('Invalid API response format');
            }

            const responseText = data.candidates[0].content.parts[0].text;
            
            // Extract JSON from response (handle cases where API wraps it in markdown)
            let jsonText = responseText;
            const jsonMatch = responseText.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                jsonText = jsonMatch[0];
            }

            const result = JSON.parse(jsonText);

            // Validate response has required fields
            if (typeof result.score !== 'number' || result.score < 0 || result.score > 100) {
                result.score = 0;
            }
            if (typeof result.keywordsFound !== 'number') result.keywordsFound = 0;
            if (typeof result.totalKeywords !== 'number') result.totalKeywords = 0;
            if (typeof result.formattingScore !== 'number') result.formattingScore = 0;
            if (!Array.isArray(result.missedKeywords)) result.missedKeywords = [];
            if (typeof result.feedback !== 'string') result.feedback = '';

            return {
                score: Math.round(result.score),
                keywordsFound: result.keywordsFound,
                totalKeywords: result.totalKeywords,
                formattingScore: Math.round(result.formattingScore),
                missedKeywords: result.missedKeywords.slice(0, 5),
                feedback: result.feedback
            };

        } catch (error) {
            console.error('Gemini API error:', error);
            throw error;
        }
    }

    function calculateATSScore(resumeText, jobDescription) {
        if (!resumeText || !jobDescription) {
            return {
                score: 0,
                keywordsFound: 0,
                totalKeywords: 0,
                formattingScore: 0,
                missedKeywords: []
            };
        }

        const resumeLower = resumeText.toLowerCase();
        const jobLower = jobDescription.toLowerCase();

        // Extract keywords from job description
        const jobKeywords = extractKeywords(jobLower);
        
        // Return early if no keywords extracted
        if (jobKeywords.length === 0) {
            return {
                score: 0,
                keywordsFound: 0,
                totalKeywords: 0,
                formattingScore: 0,
                missedKeywords: []
            };
        }
        
        // Count matching keywords with both exact and partial matches
        let matchedKeywords = 0;
        const missedKeywords = [];

        jobKeywords.forEach(keyword => {
            // Check for exact match or word boundary match
            if (new RegExp(`\\b${keyword}\\b`, 'i').test(resumeLower)) {
                matchedKeywords++;
            } else {
                missedKeywords.push(keyword);
            }
        });

        // Contact information check
        let contactScore = 0;
        if (resumeLower.match(/\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/)) contactScore += 20;
        if (resumeLower.match(/\+?\d{1,3}[\s.-]?\(?\d{3,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{4,9}/)) contactScore += 10;
        if (resumeLower.match(/(linkedin|github|portfolio)/i)) contactScore += 10;

        // Formatting score (based on resume structure)
        let formattingScore = 30;
        if (resumeText.match(/\b(•|-|\*|→)\b/)) formattingScore += 20; // Bullet points
        if ((resumeText.match(/\d{4}/g) || []).length > 2) formattingScore += 15; // Years/dates
        if (resumeText.match(/\b(?:as|at|for|from|to|until|current)\b/gi)) formattingScore += 15; // Action words
        if (contactScore > 0) formattingScore += contactScore;
        formattingScore = Math.min(100, formattingScore);

        // Calculate overall score based on keyword match percentage
        const keywordPercentage = (matchedKeywords / jobKeywords.length) * 100;
        const keywordScore = Math.min(keywordPercentage * 0.7, 70);
        const totalScore = Math.round(keywordScore + (formattingScore * 0.3));

        return {
            score: Math.max(0, totalScore),
            keywordsFound: matchedKeywords,
            totalKeywords: jobKeywords.length,
            formattingScore: formattingScore,
            missedKeywords: missedKeywords.slice(0, 5)
        };
    }

    function extractKeywords(text) {
        // More comprehensive keyword extraction
        const stopWords = new Set([
            'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with',
            'by', 'from', 'up', 'about', 'into', 'through', 'during', 'is', 'are', 'was', 'were',
            'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would',
            'could', 'should', 'may', 'might', 'can', 'must', 'shall', 'prefer', 'require',
            'experience', 'required', 'you', 'your', 'our', 'we', 'us', 'me', 'my', 'as', 'if',
            'this', 'that', 'these', 'those', 'he', 'she', 'it', 'they', 'them', 'their'
        ]);

        // Split by common separators and extract words
        const words = text.toLowerCase()
            .split(/[\s,;()\-\n\r\t]+/)
            .filter(w => w && w.length > 2 && !stopWords.has(w));

        const keywords = new Set();

        words.forEach(word => {
            // Include technical terms, skills, and longer words
            if (word.length >= 3) {
                // Special handling for technical terms with symbols
                if (/[+#./]/.test(word)) {
                    keywords.add(word);
                } else if (isLikelyKeyword(word)) {
                    keywords.add(word);
                } else if (word.match(/^[a-z]{4,}$/)) {
                    // Include meaningful 4+ character words
                    keywords.add(word);
                }
            }
        });

        // Return most relevant keywords
        return Array.from(keywords).slice(0, 20);
    }

    function isLikelyKeyword(word) {
        const technicalTerms = [
            'python', 'javascript', 'java', 'c++', 'sql', 'html', 'css', 'react', 'angular',
            'vue', 'node', 'express', 'django', 'flask', 'docker', 'kubernetes', 'aws', 'azure',
            'gcp', 'mongodb', 'postgresql', 'mysql', 'git', 'agile', 'scrum', 'rest', 'api',
            'microservices', 'cloud', 'devops', 'jenkins', 'gitlab', 'github', 'jira',
            'linux', 'windows', 'unix', 'xml', 'json', 'soap', 'graphql', 'testing',
            'junit', 'pytest', 'selenium', 'cypress', 'leadership', 'management', 'communication',
            'teamwork', 'problem', 'solving', 'analysis', 'development', 'design', 'testing',
            'quality', 'support', 'maintenance', 'deployment', 'security', 'performance'
        ];
        return technicalTerms.includes(word);
    }

    function displayResults(score, resumeText, jobDescription) {
        const resultsDiv = document.getElementById('atsResults');
        // ATS checker references removed
        const formattingScore = document.getElementById('atsFormattingScore');
        const missingKeywords = document.getElementById('atsMissingKeywords');
        const suggestionsList = document.getElementById('atsSuggestionsList');
        const scoreCircle = document.querySelector('.ats-score-circle');

        scoreValue.textContent = score.score;
        keywordsFound.textContent = `${score.keywordsFound}/${score.totalKeywords}`;
        formattingScore.textContent = `${score.formattingScore}%`;
        missingKeywords.textContent = score.missedKeywords.length;

        // Set score circle color and feedback
        let feedback = '';
        let titleText = '';
        
        if (score.score >= 80) {
            titleText = 'Excellent ATS Score';
        } else if (score.score >= 60) {
            titleText = 'Good ATS Score';
        } else if (score.score >= 40) {
            titleText = 'Fair ATS Score';
        } else {
            titleText = 'Poor ATS Score';
        }

        scoreTitle.textContent = titleText;
        // Use Gemini feedback if available, otherwise use default
        scoreFeedback.textContent = score.feedback || `${titleText}: ${score.score}% ATS compatible`;
        scoreCircle.style.setProperty('--score', score.score);

        // Generate suggestions (use Gemini suggestions if available)
        let suggestions = [];
        if (score.missedKeywords && score.missedKeywords.length > 0) {
            suggestions.push(`Add these key skills to your resume: ${score.missedKeywords.slice(0, 3).join(', ')}`);
        }
        suggestions = suggestions.concat(generateSuggestions(score, resumeText));
        
        suggestionsList.innerHTML = '';
        suggestions.slice(0, 5).forEach(suggestion => {
            const li = document.createElement('li');
            li.textContent = suggestion;
            suggestionsList.appendChild(li);
        });

        resultsDiv.style.display = 'block';
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function generateSuggestions(score, resumeText) {
        const suggestions = [];

        if (score.score < 80) {
            suggestions.push('Add more keywords from the job description to your resume');
        }

        if (score.formattingScore < 80) {
            suggestions.push('Use bullet points (•) and structured formatting for better ATS parsing');
        }

        if (!resumeText.match(/(email|phone|linkedin|github)/gi)) {
            suggestions.push('Include contact information: Email, phone, LinkedIn, and/or GitHub profile');
        }

        if (score.missedKeywords.length > 0) {
            suggestions.push(`Include relevant skills: ${score.missedKeywords.slice(0, 3).join(', ')}`);
        }

        if (!resumeText.match(/years of experience/i)) {
            suggestions.push('Highlight your years of experience with relevant technologies');
        }

        if (!resumeText.match(/(certification|certified|degree)/i)) {
            suggestions.push('Include certifications and educational qualifications if available');
        }

        return suggestions.slice(0, 5);
    }
    // ==========================
// GLOBAL THEME SYSTEM (theme is applied at top of script)
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const desktopToggle = document.getElementById("themeToggleDesktop");
    const drawerToggle = document.getElementById("themeToggleDrawer");

    function toggleTheme() {
        const isLight = document.documentElement.classList.toggle("theme-light");
        document.body.classList.toggle("theme-light", isLight);
        localStorage.setItem("cn-theme", isLight ? "light" : "dark");
        const label = isLight ? "Switch to Dark Mode" : "Switch to Light Mode";
        [desktopToggle, drawerToggle].filter(Boolean).forEach((btn) => btn.setAttribute("aria-label", label));
    }

    if (desktopToggle) desktopToggle.addEventListener("click", toggleTheme);
    if (drawerToggle) drawerToggle.addEventListener("click", toggleTheme);

    // Drawer open/close (navbar menu on phone) – works on account, progress, and any page with drawer markup
    const drawerMenuToggle = document.getElementById("drawerToggle");
    const drawer = document.getElementById("mobileDrawer");
    const drawerOverlay = document.getElementById("drawerOverlay");
    const drawerCloseBtn = document.getElementById("drawerClose");
    if (drawerMenuToggle && drawer && drawerOverlay && drawerCloseBtn) {
        const openDrawer = () => {
            drawer.classList.add("open");
            drawerOverlay.classList.add("show");
            drawer.setAttribute("aria-hidden", "false");
            document.body.classList.add("drawer-open");
        };
        const closeDrawer = () => {
            drawer.classList.remove("open");
            drawerOverlay.classList.remove("show");
            drawer.setAttribute("aria-hidden", "true");
            document.body.classList.remove("drawer-open");
        };
        drawerMenuToggle.addEventListener("click", openDrawer);
        drawerCloseBtn.addEventListener("click", closeDrawer);
        drawerOverlay.addEventListener("click", closeDrawer);
    }
});

    // Initialize immediately since script is deferred
    initializeATSChecker();
})();
