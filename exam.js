let cachedXP = 0;
let cachedBadges = new Set();
let cachedAttempts = {};
const BADGE_MILESTONES = [100, 200, 500, 1000, 1700, 2500, 3500];
const SUBJECTS = [
    { key: 'javascript', label: 'JavaScript' },
    { key: 'java', label: 'Java' },
    { key: 'python', label: 'Python' },
    { key: 'cpp', label: 'C++' },
    { key: 'c', label: 'C' },
    { key: 'sql', label: 'SQL' }
];
const MASTER_BADGES = {
    javascript: 'master-javascript',
    java: 'master-java',
    python: 'master-python',
    cpp: 'master-cpp',
    c: 'master-c',
    sql: 'master-sql'
};
const EXAM_DURATION_SEC = 10 * 60;
let activeTimerId = null;

const MCQ_DATA = {
    javascript: [
        { q: 'Pseudo code: DECLARE block variable x. Which JavaScript keyword is best?', options: ['var', 'let', 'constvar', 'define'], answer: 1 },
        { q: 'What is the output type of `typeof null` in JavaScript?', options: ['null', 'undefined', 'object', 'number'], answer: 2 },
        { q: 'Which method converts JSON text to object?', options: ['JSON.stringify', 'JSON.parse', 'JSON.object', 'parseJSON'], answer: 1 },
        { q: 'Pseudo code: IF a equals b by value and type. Which JS operator fits?', options: ['==', '===', '=', '!=='], answer: 1 },
        { q: 'Which array method creates a new array with transformed values?', options: ['forEach', 'filter', 'map', 'reduce'], answer: 2 },
        { q: 'Pseudo code: ACCESS page elements as tree objects. DOM means?', options: ['Document Object Model', 'Data Object Model', 'Document Oriented Method', 'Display Object Management'], answer: 0 },
        { q: 'Which function runs code after delay?', options: ['setDelay', 'setTimeout', 'delayRun', 'timerRun'], answer: 1 },
        { q: 'Pseudo code: SET x = 5; IF x > 2 THEN print("yes"). Which JS line matches?', options: ['if (x > 2) console.log("yes")', 'if x > 2 print("yes")', 'print if x > 2', 'console.log if x'], answer: 0 },
        { q: 'Which method adds an element to array end?', options: ['push', 'pop', 'shift', 'unshift'], answer: 0 },
        { q: 'Pseudo code: result cannot be represented as numeric value. JS uses?', options: ['No assigned Number', 'Not a Number', 'Null and Number', 'Negative and Null'], answer: 1 },
        { q: 'Which loop iterates over iterable values?', options: ['for...in', 'for...of', 'while...of', 'loop...in'], answer: 1 },
        { q: 'Which object handles key-value pairs in insertion order?', options: ['Set', 'Map', 'Array', 'WeakRef'], answer: 1 },
        { q: 'How do you write an arrow function with one arg x?', options: ['(x) => {}', 'x -> {}', 'function => x {}', '=> (x) {}'], answer: 0 },
        { q: 'Which event fires when element is clicked?', options: ['onchange', 'onhover', 'onclick', 'onfocus'], answer: 2 },
        { q: 'Which statement stops loop immediately?', options: ['continue', 'stop', 'exit', 'break'], answer: 3 },
        { q: 'Which method removes last array item?', options: ['shift', 'splice', 'pop', 'removeLast'], answer: 2 },
        { q: 'Template literals use which symbol?', options: ['"', '\'', '`', '~'], answer: 2 },
        { q: 'What is returned by `Array.isArray([])`?', options: ['false', 'null', 'true', 'undefined'], answer: 2 },
        { q: 'Which keyword creates class inheritance?', options: ['extends', 'inherits', 'superclass', 'implement'], answer: 0 },
        { q: 'Promises have which states?', options: ['start, stop, end', 'pending, fulfilled, rejected', 'open, close', 'true, false'], answer: 1 }
    ],
    java: [
        { q: 'Pseudo code: PROGRAM STARTS HERE. Which Java method is entry point?', options: ['run()', 'start()', 'main()', 'init()'], answer: 2 },
        { q: 'Java source file extension is?', options: ['.js', '.java', '.class', '.jar'], answer: 1 },
        { q: 'Pseudo code: CREATE object of class Student. Java keyword?', options: ['new', 'create', 'object', 'alloc'], answer: 0 },
        { q: 'Which access modifier is most restrictive?', options: ['public', 'protected', 'private', 'default'], answer: 2 },
        { q: 'Which collection does not allow duplicates?', options: ['List', 'Set', 'ArrayList', 'Vector'], answer: 1 },
        { q: 'Which keyword inherits class?', options: ['implements', 'extends', 'inherits', 'super'], answer: 1 },
        { q: 'Which package is imported by default?', options: ['java.util', 'java.io', 'java.lang', 'java.net'], answer: 2 },
        { q: 'Pseudo code: RUN bytecode on runtime engine. JVM stands for?', options: ['Java Variable Machine', 'Java Virtual Machine', 'Joint Virtual Module', 'Java Verified Model'], answer: 1 },
        { q: 'Which keyword prevents inheritance?', options: ['static', 'final', 'const', 'sealed'], answer: 1 },
        { q: 'Pseudo code: DO { run } WHILE(condition). Which Java loop matches?', options: ['for', 'while', 'do-while', 'foreach'], answer: 2 },
        { q: 'Which exception is checked?', options: ['NullPointerException', 'ArithmeticException', 'IOException', 'ArrayIndexOutOfBoundsException'], answer: 2 },
        { q: 'Which method compares String content?', options: ['==', 'compare', 'equals', 'content'], answer: 2 },
        { q: 'Which keyword refers parent class constructor?', options: ['this()', 'base()', 'super()', 'parent()'], answer: 2 },
        { q: 'Java is which type language?', options: ['Procedural only', 'Object-oriented', 'Assembly', 'Markup'], answer: 1 },
        { q: 'Which stream prints to console?', options: ['System.in', 'System.out', 'System.err only', 'Console.log'], answer: 1 },
        { q: 'Pseudo code: TRY risky block, CATCH failure. Correct Java construct?', options: ['catch', 'throws', 'try-catch', 'all'], answer: 2 },
        { q: 'Default value of int field is?', options: ['null', '1', '0', '-1'], answer: 2 },
        { q: 'Interface methods are by default?', options: ['private', 'protected', 'public abstract', 'static'], answer: 2 },
        { q: 'Which operator concatenates strings?', options: ['&', '+', '*', '#'], answer: 1 },
        { q: 'Which file contains bytecode?', options: ['.java', '.jar', '.class', '.txt'], answer: 2 }
    ],
    python: [
        { q: 'Pseudo code: DEFINE function add(a,b). Python keyword?', options: ['func', 'define', 'def', 'fn'], answer: 2 },
        { q: 'Which symbol starts comment?', options: ['//', '#', '--', '/*'], answer: 1 },
        { q: 'Python list is enclosed in?', options: ['()', '[]', '{}', '<>'], answer: 1 },
        { q: 'Pseudo code: DISPLAY "hello". Which Python function?', options: ['echo()', 'print()', 'show()', 'write()'], answer: 1 },
        { q: 'Which keyword creates class?', options: ['object', 'struct', 'class', 'type'], answer: 2 },
        { q: 'Which data type is immutable?', options: ['list', 'dict', 'set', 'tuple'], answer: 3 },
        { q: 'What does `len("abc")` return?', options: ['2', '3', '4', 'error'], answer: 1 },
        { q: 'Pseudo code: FOR each item in list DO print(item). Best Python loop?', options: ['for', 'while', 'do', 'repeat'], answer: 0 },
        { q: 'Dictionary keys must be?', options: ['mutable', 'hashable', 'lists', 'always strings'], answer: 1 },
        { q: 'Which keyword handles exceptions?', options: ['catch', 'except', 'rescue', 'error'], answer: 1 },
        { q: 'Pseudo code: power = x to the power y. Python operator?', options: ['^', '*', '**', '//'], answer: 2 },
        { q: 'What is output of `5 // 2`?', options: ['2.5', '2', '3', '1'], answer: 1 },
        { q: 'Which module is for JSON in Python?', options: ['json', 'js', 'pickle', 'data'], answer: 0 },
        { q: 'Pseudo code: LOOP i from 0 to less than 3. `range(3)` gives?', options: ['1,2,3', '0,1,2', '0,1,2,3', '3,2,1'], answer: 1 },
        { q: 'Which keyword imports module?', options: ['include', 'import', 'require', 'using'], answer: 1 },
        { q: 'Which is correct boolean literal?', options: ['true', 'TRUE', 'True', '1'], answer: 2 },
        { q: 'What does `append()` do on list?', options: ['sort list', 'add one item end', 'remove item', 'copy list'], answer: 1 },
        { q: 'Which string format method uses placeholders `{}`?', options: ['format()', 'printf()', 'replace()', 'concat()'], answer: 0 },
        { q: 'A set in Python allows duplicates?', options: ['Yes', 'No', 'Only numbers', 'Only strings'], answer: 1 },
        { q: 'Which is used for virtual environment tool?', options: ['venv', 'pipx only', 'npm', 'gradle'], answer: 0 }
    ],
    cpp: [
        { q: 'Pseudo code: PRINT and READ in C++. Which header is standard?', options: ['<stdio.h>', '<iostream>', '<string>', '<math.h>'], answer: 1 },
        { q: 'Which operator accesses pointer value?', options: ['&', '*', '->', '.'], answer: 1 },
        { q: 'C++ comments single line start with?', options: ['#', '//', '--', '/*'], answer: 1 },
        { q: 'Pseudo code: CREATE object obj of class Car. Which keyword?', options: ['class', 'new', 'object', 'this'], answer: 1 },
        { q: 'What is STL?', options: ['Standard Template Library', 'Simple Type Logic', 'System Template Link', 'Static Tool Library'], answer: 0 },
        { q: 'Which container is dynamic array?', options: ['map', 'set', 'vector', 'stack'], answer: 2 },
        { q: 'Which operator for scope resolution?', options: ['::', '->', '.', ':'], answer: 0 },
        { q: 'Pseudo code: FUNCTION sum(a,b) and FUNCTION sum(a,b,c). This is?', options: ['same name, different params', 'different names, same params', 'override base only', 'templates only'], answer: 0 },
        { q: 'Pseudo code: class Child inherits Parent publicly. Correct C++ syntax part?', options: ['extends', 'inherits', ': public', 'implement'], answer: 2 },
        { q: 'What is correct entry function?', options: ['void main()', 'main()', 'int main()', 'start()'], answer: 2 },
        { q: 'Which keyword prevents object modification?', options: ['final', 'immutable', 'const', 'fixed'], answer: 2 },
        { q: '`cin` is used for?', options: ['output', 'input', 'file only', 'errors'], answer: 1 },
        { q: 'Destructor name starts with?', options: ['!', '~', '#', '@'], answer: 1 },
        { q: 'Pseudo code: CHECK condition first, then execute block. Which loop?', options: ['do-while', 'while', 'both', 'none'], answer: 1 },
        { q: 'Which is smart pointer?', options: ['auto_ptr only', 'raw*', 'unique_ptr', 'void*'], answer: 2 },
        { q: 'Which keyword allows exception handling block?', options: ['try', 'test', 'guard', 'safe'], answer: 0 },
        { q: 'Template keyword is?', options: ['generic', 'template', 'typename only', 'classy'], answer: 1 },
        { q: 'Which operator outputs to stream?', options: ['>>', '<<', '<-', '=>'], answer: 1 },
        { q: 'Which file extension is common for C++ source?', options: ['.c', '.cpp', '.class', '.cs'], answer: 1 },
        { q: 'Namespace standard library commonly is?', options: ['std', 'cpp', 'global', 'lib'], answer: 0 }
    ],
    c: [
        { q: 'Which header is for printf and scanf?', options: ['<math.h>', '<stdio.h>', '<string.h>', '<stdlib.h>'], answer: 1 },
        { q: 'Pseudo code: EXECUTE steps one by one using functions. C is mainly?', options: ['Object-oriented', 'Procedural', 'Markup', 'Scripting only'], answer: 1 },
        { q: 'Which symbol ends a statement in C?', options: [',', ':', ';', '.'], answer: 2 },
        { q: 'Pseudo code: READ n from user. Which C function is typical?', options: ['print', 'scanf', 'getsafe', 'input'], answer: 1 },
        { q: 'Pseudo code: RUN body once before checking condition. Which C loop?', options: ['for', 'while', 'do-while', 'none'], answer: 2 },
        { q: 'Array index starts from?', options: ['1', '-1', '0', 'depends'], answer: 2 },
        { q: 'Which operator gives address of variable?', options: ['*', '&', '%', '@'], answer: 1 },
        { q: 'Pseudo code: ALLOCATE n bytes at runtime in C. Which function?', options: ['alloc', 'malloc', 'new', 'create'], answer: 1 },
        { q: 'C string ends with?', options: ['\\n', '\\0', ';', 'EOF'], answer: 1 },
        { q: 'Which keyword defines constant?', options: ['const', 'final', 'define', 'immutable'], answer: 0 },
        { q: 'Which preprocessor starts directive?', options: ['$', '#', '@', '%'], answer: 1 },
        { q: 'What is size of char in C?', options: ['1 byte', '2 bytes', '4 bytes', 'platform unknown always'], answer: 0 },
        { q: 'Pseudo code: IF a true AND b true. Which C operator?', options: ['&', '&&', 'and', '||'], answer: 1 },
        { q: 'Which keyword exits loop early?', options: ['continue', 'break', 'exit', 'stop'], answer: 1 },
        { q: 'Which format specifier for int?', options: ['%f', '%d', '%s', '%c'], answer: 1 },
        { q: 'Function prototype is used for?', options: ['Variable declaration', 'Function declaration', 'Loop declaration', 'Header guard'], answer: 1 },
        { q: 'Which is correct comment style in C?', options: ['//', '/* */', 'both', '#'], answer: 2 },
        { q: 'Which library function gets string length?', options: ['strlen', 'strsize', 'length', 'size'], answer: 0 },
        { q: 'Main function return type in standard C?', options: ['void', 'int', 'char', 'long'], answer: 1 },
        { q: 'Which storage class keeps value between function calls?', options: ['auto', 'register', 'static', 'extern'], answer: 2 }
    ],
    sql: [
        { q: 'Pseudo code: READ all rows from Students table. Which SQL command?', options: ['GET', 'SELECT', 'FETCH', 'OPEN'], answer: 1 },
        { q: 'Pseudo code: SELECT rows where marks > 80. Which SQL clause?', options: ['ORDER BY', 'GROUP BY', 'WHERE', 'HAVING'], answer: 2 },
        { q: 'Which command inserts new row?', options: ['ADD', 'INSERT INTO', 'CREATE ROW', 'UPDATE'], answer: 1 },
        { q: 'Pseudo code: CHANGE salary to 5000 for id=3. Which SQL command?', options: ['MODIFY', 'UPDATE', 'ALTER ROW', 'CHANGE'], answer: 1 },
        { q: 'Primary key must be?', options: ['nullable', 'duplicate', 'unique and not null', 'text only'], answer: 2 },
        { q: 'Which keyword sorts result?', options: ['SORT', 'ORDER BY', 'ARRANGE', 'GROUP'], answer: 1 },
        { q: 'Which function counts rows?', options: ['SUM()', 'COUNT()', 'TOTAL()', 'ROWS()'], answer: 1 },
        { q: 'Pseudo code: RETURN only records with matching keys in both tables. Which join?', options: ['LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'FULL JOIN'], answer: 2 },
        { q: 'Which command removes table structure and data?', options: ['DELETE', 'DROP TABLE', 'TRUNCATE', 'REMOVE'], answer: 1 },
        { q: 'Which command removes all rows but keeps table?', options: ['DROP', 'TRUNCATE', 'DELETE TABLE', 'CLEAR'], answer: 1 },
        { q: 'HAVING is used with?', options: ['GROUP BY', 'ORDER BY', 'LIMIT', 'JOIN only'], answer: 0 },
        { q: 'Which operator is for pattern matching?', options: ['IN', 'LIKE', 'BETWEEN', 'EXISTS'], answer: 1 },
        { q: 'Pseudo code: CREATE new table Courses(...). Correct SQL statement?', options: ['MAKE TABLE', 'CREATE TABLE', 'NEW TABLE', 'BUILD TABLE'], answer: 1 },
        { q: 'Which constraint avoids duplicate values?', options: ['CHECK', 'UNIQUE', 'FOREIGN KEY', 'DEFAULT'], answer: 1 },
        { q: 'Foreign key references?', options: ['same row only', 'primary key in another table', 'index only', 'view only'], answer: 1 },
        { q: 'Which clause limits number of rows?', options: ['TOP/LIMIT', 'ROWCOUNT always', 'MAX ROWS', 'SHORT'], answer: 0 },
        { q: 'Which function returns average?', options: ['AVG()', 'MEAN()', 'MIDDLE()', 'AVERAGE()'], answer: 0 },
        { q: 'NULL means?', options: ['Zero', 'Empty string', 'Unknown or missing value', 'False'], answer: 2 },
        { q: 'Which command adds new column?', options: ['UPDATE TABLE', 'ALTER TABLE ADD', 'MODIFY TABLE', 'INSERT COLUMN'], answer: 1 },
        { q: 'Which SQL statement deletes specific rows?', options: ['TRUNCATE', 'REMOVE', 'DELETE FROM ... WHERE', 'DROP'], answer: 2 }
    ]
};

function getCurrentUser() {
    const fbUser = window.CN && typeof window.CN.getAuthUser === 'function'
        ? window.CN.getAuthUser()
        : null;
    if (!fbUser || !fbUser.email) return null;
    return fbUser;
}

function ensureLogin() {
    const user = getCurrentUser();
    if (!user || !user.email) {
        window.location.href = 'auth.html';
        return null;
    }
    return user;
}

function loadAttempts() {
    return cachedAttempts && typeof cachedAttempts === 'object' ? cachedAttempts : {};
}

async function saveAttempts(attempts, extraProgressPatch) {
    cachedAttempts = attempts && typeof attempts === 'object' ? attempts : {};
    const extra = extraProgressPatch && typeof extraProgressPatch === 'object' ? extraProgressPatch : {};
    if (!window.CN || typeof window.CN.saveProgress !== 'function') return;
    await window.CN.saveProgress({
        examAttempts: cachedAttempts,
        ...extra
    });
}

function addExamXPAndBadges(subjectKey, score) {
    const gainedXP = score * 10;
    const oldXP = Number.isFinite(Number(cachedXP)) ? Number(cachedXP) : 0;
    const newXP = oldXP + gainedXP;
    cachedXP = newXP;

    const badges = new Set(cachedBadges instanceof Set ? [...cachedBadges] : []);
    BADGE_MILESTONES.forEach((milestone) => {
        if (newXP >= milestone) {
            badges.add(`xp-${milestone}`);
        }
    });

    let awardedMaster = false;
    if (score === 20) {
        const masterId = MASTER_BADGES[subjectKey];
        if (masterId) {
            badges.add(masterId);
            awardedMaster = true;
        }
    }

    cachedBadges = badges;
    return { gainedXP, awardedMaster, newXP, badges: [...badges] };
}

function getSubjectParam() {
    const params = new URLSearchParams(window.location.search);
    const subject = params.get('subject');
    if (!subject) return null;
    return SUBJECTS.some(s => s.key === subject) ? subject : null;
}

function shouldAutoStart() {
    const params = new URLSearchParams(window.location.search);
    return params.get('start') === '1';
}

function setSubjectParam(subject) {
    const params = new URLSearchParams(window.location.search);
    params.set('subject', subject);
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
}

function renderSubjectGrid(attempts, activeSubject) {
    const grid = document.getElementById('subjectGrid');
    grid.innerHTML = '';

    SUBJECTS.forEach((subject) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = `subject-card${activeSubject === subject.key ? ' active' : ''}`;

        const title = document.createElement('div');
        title.className = 'subject-title';
        title.textContent = subject.label;

        const meta = document.createElement('div');
        meta.className = 'subject-meta';
        const attempt = attempts[subject.key];
        if (attempt) {
            meta.textContent = `Last attempt: ${attempt.score}/20 on ${attempt.date}`;
        } else {
            meta.textContent = 'No attempt yet';
        }

        card.appendChild(title);
        card.appendChild(meta);
        card.addEventListener('click', () => {
            setSubjectParam(subject.key);
            renderPage(subject.key);
        });
        grid.appendChild(card);
    });
}

function renderIntro(subjectKey, attempts) {
    const intro = document.getElementById('examIntro');
    const container = document.getElementById('examContainer');
    const result = document.getElementById('examResult');

    container.classList.add('hidden');
    result.classList.add('hidden');
    intro.classList.remove('hidden');
    intro.innerHTML = '';

    const subject = SUBJECTS.find(s => s.key === subjectKey);
    const attempt = attempts[subjectKey];

    const heading = document.createElement('h2');
    heading.textContent = `${subject.label} Exam`;
    const desc = document.createElement('p');
    desc.textContent = '20 MCQs. 1 point per correct answer. 10 XP per correct answer.';
    intro.appendChild(heading);
    intro.appendChild(desc);

    const last = document.createElement('p');
    if (attempt) {
        last.textContent = `Last attempt score: ${attempt.score}/20 (${attempt.xpEarned} XP) on ${attempt.date}`;
    } else {
        last.textContent = 'Last attempt score: No attempt yet.';
    }
    intro.appendChild(last);

    const row = document.createElement('div');
    row.className = 'start-row';
    const startBtn = document.createElement('button');
    startBtn.type = 'button';
    startBtn.className = 'btn-start';
    startBtn.textContent = 'Start Exam';
    startBtn.addEventListener('click', () => renderExam(subjectKey, attempts));
    row.appendChild(startBtn);
    intro.appendChild(row);
}

function renderExam(subjectKey, attempts) {
    const intro = document.getElementById('examIntro');
    const container = document.getElementById('examContainer');
    const result = document.getElementById('examResult');
    const subject = SUBJECTS.find(s => s.key === subjectKey);
    const questions = MCQ_DATA[subjectKey];

    intro.classList.add('hidden');
    result.classList.add('hidden');
    container.classList.remove('hidden');
    container.innerHTML = '';

    const heading = document.createElement('h2');
    heading.textContent = `${subject.label} Exam Questions`;
    container.appendChild(heading);

    const timer = document.createElement('div');
    timer.className = 'exam-timer';
    timer.id = 'examTimer';
    container.appendChild(timer);

    const form = document.createElement('form');
    form.id = 'examForm';

    questions.forEach((item, index) => {
        const block = document.createElement('div');
        block.className = 'question';

        const title = document.createElement('div');
        title.className = 'question-title';
        title.textContent = `${index + 1}. ${item.q}`;
        block.appendChild(title);

        item.options.forEach((option, optionIndex) => {
            const label = document.createElement('label');
            label.className = 'option';
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `q_${index}`;
            radio.value = String(optionIndex);
            label.appendChild(radio);
            label.appendChild(document.createTextNode(` ${option}`));
            block.appendChild(label);
        });

        form.appendChild(block);
    });

    const actions = document.createElement('div');
    actions.className = 'exam-actions';
    const submitBtn = document.createElement('button');
    submitBtn.type = 'button';
    submitBtn.className = 'btn-submit';
    submitBtn.textContent = 'Finish Exam';
    submitBtn.addEventListener('click', () => form.requestSubmit());
    actions.appendChild(submitBtn);
    form.appendChild(actions);

    let secondsLeft = EXAM_DURATION_SEC;
    const renderTimer = () => {
        const mm = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
        const ss = String(secondsLeft % 60).padStart(2, '0');
        timer.textContent = `Time Left: ${mm}:${ss}`;
        timer.classList.toggle('danger', secondsLeft <= 60);
    };
    const stopTimer = () => {
        if (activeTimerId) {
            clearInterval(activeTimerId);
            activeTimerId = null;
        }
    };

    stopTimer();
    renderTimer();
    activeTimerId = setInterval(() => {
        secondsLeft -= 1;
        renderTimer();
        if (secondsLeft <= 0) {
            stopTimer();
            form.requestSubmit();
        }
    }, 1000);

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        stopTimer();
        let score = 0;
        const review = [];
        questions.forEach((item, index) => {
            const selected = form.querySelector(`input[name="q_${index}"]:checked`);
            const selectedIndex = selected ? Number(selected.value) : -1;
            const isCorrect = selectedIndex === item.answer;
            if (isCorrect) score += 1;
            review.push({
                question: item.q,
                selected: selectedIndex >= 0 ? item.options[selectedIndex] : 'Not answered',
                correct: item.options[item.answer],
                isCorrect
            });
        });

        const outcome = addExamXPAndBadges(subjectKey, score);
        const today = new Date().toISOString().slice(0, 10);
        attempts[subjectKey] = {
            score,
            total: 20,
            xpEarned: outcome.gainedXP,
            date: today
        };
        try {
            await saveAttempts(attempts, { xp: outcome.newXP, badges: outcome.badges });
        } catch (e) {
            console.error('Failed to persist exam result', e);
        }

        container.classList.add('hidden');
        result.classList.remove('hidden');
        result.innerHTML = '';

        const h = document.createElement('h2');
        h.textContent = `${subject.label} Result`;
        result.appendChild(h);

        const scoreLine = document.createElement('div');
        scoreLine.className = 'result-score';
        scoreLine.textContent = `Score: ${score}/20`;
        result.appendChild(scoreLine);

        const xpLine = document.createElement('p');
        xpLine.textContent = `XP earned: ${outcome.gainedXP}`;
        result.appendChild(xpLine);

        if (outcome.awardedMaster) {
            const badgeLine = document.createElement('p');
            badgeLine.className = 'result-badge';
            badgeLine.textContent = `Pro ${subject.label} badge unlocked`;
            result.appendChild(badgeLine);
        }

        const retryRow = document.createElement('div');
        retryRow.className = 'start-row';
        const retryBtn = document.createElement('button');
        retryBtn.type = 'button';
        retryBtn.className = 'btn-start';
        retryBtn.textContent = 'Try Again';
        retryBtn.addEventListener('click', () => renderIntro(subjectKey, attempts));
        retryRow.appendChild(retryBtn);
        result.appendChild(retryRow);

        const reviewTitle = document.createElement('h3');
        reviewTitle.className = 'review-title';
        reviewTitle.textContent = 'Answer Review';
        result.appendChild(reviewTitle);

        const reviewList = document.createElement('div');
        reviewList.className = 'review-list';
        review.forEach((item, idx) => {
            const block = document.createElement('div');
            block.className = `review-item ${item.isCorrect ? 'correct' : 'wrong'}`;
            block.innerHTML = `
                <div class="review-q">${idx + 1}. ${item.question}</div>
                <div class="review-a">Your answer: ${item.selected}</div>
                <div class="review-a">Correct answer: ${item.correct}</div>
            `;
            reviewList.appendChild(block);
        });
        result.appendChild(reviewList);

        renderSubjectGrid(attempts, subjectKey);
    });

    container.appendChild(form);
}

function bindLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    const accountLink = document.getElementById('accountLink');
    const user = getCurrentUser();
    if (user && user.email) {
        accountLink.textContent = 'Account';
        accountLink.href = 'account.html';
        logoutBtn.hidden = false;
    }
    if (!logoutBtn) return;
    logoutBtn.addEventListener('click', async () => {
        try {
            if (window.CN && typeof window.CN.signOut === 'function') {
                await window.CN.signOut();
            }
        } catch (e) {
            console.error('Logout failed', e);
        }
        window.location.href = 'auth.html';
    });
}

function renderPage(subjectKey) {
    const attempts = loadAttempts();
    renderSubjectGrid(attempts, subjectKey);
    renderIntro(subjectKey, attempts);
}

async function init() {
    if (!window.CN || !window.CN.authReady) {
        window.location.href = 'auth.html';
        return;
    }

    await window.CN.authReady;
    const user = ensureLogin();
    if (!user) return;
    bindLogout();

    try {
        const docData = await window.CN.getUserDoc();
        const progress = docData && docData.progress && typeof docData.progress === 'object' ? docData.progress : {};
        cachedXP = Number.isFinite(Number(progress.xp)) ? Number(progress.xp) : 0;
        cachedBadges = new Set(Array.isArray(progress.badges) ? progress.badges : []);
        cachedAttempts = progress.examAttempts && typeof progress.examAttempts === 'object' ? progress.examAttempts : {};
    } catch (e) {
        console.error('Failed to load exam progress', e);
    }

    const subject = getSubjectParam() || SUBJECTS[0].key;
    setSubjectParam(subject);
    const subjectGrid = document.getElementById('subjectGrid');
    const attempts = loadAttempts();
    if (shouldAutoStart()) {
        document.body.classList.add('embed-exam');
        if (subjectGrid) subjectGrid.classList.add('hidden');
        renderExam(subject, attempts);
    } else {
        document.body.classList.remove('embed-exam');
        renderSubjectGrid(attempts, subject);
        if (subjectGrid) subjectGrid.classList.remove('hidden');
        renderIntro(subject, attempts);
    }
}

init();
