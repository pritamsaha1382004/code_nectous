// ========================================
// Resume Analyzer – Final Version (10s Loading)
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    const resumeInput = document.getElementById("resumeInput");
    const analyzeBtn = document.getElementById("analyzeResumeBtn");
    const resultsContainer = document.getElementById("resumeResults");
    const dragArea = document.getElementById("dragDropArea");

    if (!resumeInput || !analyzeBtn || !resultsContainer || !dragArea) return;

    // ==============================
    // FILE UPLOAD DISPLAY
    // ==============================
    resumeInput.addEventListener("change", () => {

        if (resumeInput.files.length > 0) {

            const fileName = resumeInput.files[0].name;

            dragArea.innerHTML = `
                <div class="upload-icon">📄</div>
                <p><strong>${fileName}</strong></p>
                <span>File uploaded successfully</span>
                <button type="button" class="choose-file-btn" id="changeFileBtn">
                    Change File
                </button>
            `;

            document.getElementById("changeFileBtn")
                .addEventListener("click", (e) => {
                    e.stopPropagation();
                    resumeInput.click();
                });
        }
    });

    // ==============================
    // FIX DOUBLE UPLOAD
    // ==============================
    dragArea.addEventListener("click", (e) => {
        if (e.target === dragArea) {
            resumeInput.click();
        }
    });

    dragArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        dragArea.classList.add("dragover");
    });

    dragArea.addEventListener("dragleave", () => {
        dragArea.classList.remove("dragover");
    });

    dragArea.addEventListener("drop", (e) => {

        e.preventDefault();
        dragArea.classList.remove("dragover");

        const file = e.dataTransfer.files[0];

        if (file && file.type === "application/pdf") {
            resumeInput.files = e.dataTransfer.files;
            resumeInput.dispatchEvent(new Event("change"));
        } else {
            alert("Please upload a valid PDF file.");
        }
    });

    // ==============================
    // ANALYZE BUTTON
    // ==============================
    analyzeBtn.addEventListener("click", async () => {

        const file = resumeInput.files[0];

        if (!file) {
            alert("Please upload resume first.");
            return;
        }

        showLoadingState(resultsContainer);

        const text = await extractTextFromPDF(file);

        // 10 SECOND LOADING DELAY
        setTimeout(() => {

            const analysis = performATSAnalysis(text);
            displayResults(analysis);

        }, 10000);

    });

});


// ========================================
// 10 SECOND LOADING UI
// ========================================
function showLoadingState(container) {

    container.innerHTML = `
        <div class="analysis-section">
            <h4>Analyzing Resume...</h4>
            <p>Scanning structure, impact, formatting, leadership & ATS compatibility.</p>

            <div style="margin-top:1.2rem;">
                <div style="height:10px;background:#1f2937;border-radius:10px;overflow:hidden;">
                    <div id="progressBar"
                        style="
                            height:100%;
                            width:0%;
                            background:linear-gradient(90deg,#ef4444,#f59e0b,#22c55e,#16a34a);
                            transition:width 10s linear;
                        ">
                    </div>
                </div>
            </div>

            <p style="margin-top:1rem;font-size:0.9rem;color:var(--text-secondary);">
                This may take up to 10 seconds...
            </p>
        </div>
    `;

    setTimeout(() => {
        document.getElementById("progressBar").style.width = "100%";
    }, 100);
}


// ========================================
// PDF TEXT EXTRACTION
// ========================================
async function extractTextFromPDF(file) {

    const reader = new FileReader();

    return new Promise((resolve) => {

        reader.onload = async function () {

            const typedArray = new Uint8Array(this.result);
            const pdf = await pdfjsLib.getDocument(typedArray).promise;

            let fullText = "";

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const content = await page.getTextContent();
                const strings = content.items.map(item => item.str);
                fullText += strings.join(" ") + " ";
            }

            resolve(fullText.toLowerCase());
        };

        reader.readAsArrayBuffer(file);
    });
}


// ========================================
// ATS LOGIC (UNCHANGED)
// ========================================
function performATSAnalysis(text) {

    let score = 100;
    const improvements = [];
    const breakdown = [];

    const wordCount = text.split(/\s+/).length;

    const hasEmail = /\S+@\S+\.\S+/.test(text);
    const hasPhone = /\b\d{10}\b/.test(text);
    const hasLinkedIn = text.includes("linkedin");

    if (!hasEmail) { score -= 10; improvements.push("Add a professional email address."); }
    if (!hasPhone) { score -= 8; improvements.push("Include a valid phone number."); }
    if (!hasLinkedIn) { score -= 5; improvements.push("Add LinkedIn profile URL."); }

    breakdown.push(`Contact Section: ${hasEmail && hasPhone ? "Strong" : "Incomplete"}`);

    const sections = ["education","experience","skills","projects","certification","internship"];
    sections.forEach(section => {
        if (!text.includes(section)) {
            score -= 5;
            improvements.push(`Consider adding '${section}' section.`);
        }
    });

    const hasMetrics = /\d+%|\d+\s?(increase|growth|revenue|performance|efficiency|clients|sales)/.test(text);

    if (!hasMetrics) {
        score -= 12;
        improvements.push("Add measurable achievements (%, revenue, growth, etc).");
    }

    breakdown.push(`Achievements: ${hasMetrics ? "Quantified" : "Not Quantified"}`);

    if (wordCount < 250) score -= 15;
    if (wordCount > 1000) score -= 5;

    breakdown.push(`Word Count: ${wordCount}`);

    if (score < 0) score = 0;

    return { score, improvements, breakdown };
}


// ========================================
// DISPLAY RESULTS – AI-style streaming (score first, then sections appear gradually)
// ========================================
function displayResults(data) {

    const resultsContainer = document.getElementById("resumeResults");
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Step 1: Show score + gauge only
    resultsContainer.innerHTML = `
        <div class="ats-wrapper result-stream-in">
            <div class="score-box">
                ATS Score: <span id="animatedScore">0</span>/100
            </div>
            <div class="gauge-container">
                <div class="gauge-outer"></div>
                <div class="gauge-inner"></div>
                <div id="gaugeNeedle" class="gauge-needle"></div>
                <div class="gauge-center"></div>
            </div>
        </div>
        <div id="atsBreakdownSection"></div>
        <div id="atsSuggestionsSection"></div>
    `;

    const scoreElement = document.getElementById("animatedScore");
    const needle = document.getElementById("gaugeNeedle");

    // Animate score count-up
    let current = 0;
    const target = data.score;
    const scoreInterval = setInterval(() => {
        if (current >= target) {
            clearInterval(scoreInterval);
        } else {
            current++;
            scoreElement.textContent = current;
            if (current <= 40) scoreElement.style.color = "#ef4444";
            else if (current <= 65) scoreElement.style.color = "#f59e0b";
            else if (current <= 85) scoreElement.style.color = "#22c55e";
            else scoreElement.style.color = "#16a34a";
        }
    }, 15);

    const rotation = (data.score / 100) * 180 - 90;
    setTimeout(() => {
        if (needle) needle.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
    }, 300);

    // Step 2: Stream "Detailed Breakdown" section (like AI writing)
    (async function streamBreakdown() {
        await delay(600);
        const section = document.getElementById("atsBreakdownSection");
        if (!section) return;
        section.innerHTML = `<div class="analysis-section"><h4>Detailed Breakdown</h4><ul id="atsBreakdownList"></ul></div>`;
        const list = document.getElementById("atsBreakdownList");
        for (const item of data.breakdown) {
            await delay(180);
            const li = document.createElement("li");
            li.textContent = item;
            li.className = "result-stream-in";
            list.appendChild(li);
        }
    })();

    // Step 3: Stream "Improvement Suggestions" section
    (async function streamSuggestions() {
        const breakdownCount = data.breakdown.length;
        await delay(600 + breakdownCount * 180 + 400);
        const section = document.getElementById("atsSuggestionsSection");
        if (!section) return;
        const items = data.improvements.length > 0
            ? data.improvements
            : ["Excellent! Your resume meets strong ATS standards."];
        section.innerHTML = `<div class="analysis-section"><h4>Improvement Suggestions</h4><ul id="atsSuggestionsList"></ul></div>`;
        const list = document.getElementById("atsSuggestionsList");
        for (const item of items) {
            await delay(220);
            const li = document.createElement("li");
            li.textContent = item;
            li.className = "result-stream-in";
            list.appendChild(li);
        }
    })();
}