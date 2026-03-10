window.CNAdditionalCourses = window.CNAdditionalCourses || [];
window.CNAdditionalLessons = window.CNAdditionalLessons || {};

// ── Artificial Intelligence Curriculum ──────────────────────────────────────
window.CNAdditionalLessons['artificial-intelligence'] = {
    overview: [
        {
            id: 'ai-course-overview',
            type: 'theory',
            title: 'AI Course Overview',
            description: 'What you will learn and how this course is organized',
            content: `
                <div class="theory-content">
                    <h4>Welcome to Artificial Intelligence</h4>
                    <p>This course introduces you to the principles, techniques, and applications of Artificial Intelligence. You will go from foundational concepts all the way to neural networks and the future of AI.</p>
                    <h4>What You Will Learn</h4>
                    <ul>
                        <li><strong>Foundations:</strong> What AI is, its history, and the types of AI systems</li>
                        <li><strong>Search Algorithms:</strong> BFS, DFS, heuristics, and A* for problem solving</li>
                        <li><strong>Knowledge &amp; Agents:</strong> Logic, knowledge representation, and intelligent agents</li>
                        <li><strong>Machine Learning:</strong> Supervised, unsupervised, and reinforcement learning</li>
                        <li><strong>Neural Networks:</strong> Deep learning, NLP, and modern AI architectures</li>
                        <li><strong>Ethics &amp; Future:</strong> Responsible AI and the road ahead</li>
                    </ul>
                    <h4>How to Use the Lessons</h4>
                    <p>Each lesson builds on the previous one. Read the theory carefully, refer to the diagrams and examples, and mark each lesson complete to earn XP and build your streak.</p>
                    <div class="info-box tip">
                        <strong>&#x1F4A1; Tip</strong>
                        <p>AI is a vast field — focus on understanding concepts deeply rather than memorizing terms.</p>
                    </div>
                </div>
            `,
            xp: 10
        }
    ],

    fundamentals: [
        {
            id: 'ai-intro',
            type: 'theory',
            title: 'What is Artificial Intelligence?',
            description: 'Understand the definition and scope of AI',
            content: `
                <div class="theory-content">
                    <h4>Defining Artificial Intelligence</h4>
                    <p>Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. It involves building systems that can perform tasks that would normally require human intelligence — such as reasoning, learning, problem solving, perception, and language understanding.</p>
                    <div class="info-box">
                        <strong>&#x1F4D6; John McCarthy's Definition (1956)</strong>
                        <p>"The science and engineering of making intelligent machines."</p>
                    </div>
                    <h4>Core Capabilities of AI</h4>
                    <ul>
                        <li><strong>Learning:</strong> Acquiring information and rules for using it</li>
                        <li><strong>Reasoning:</strong> Using rules to reach conclusions</li>
                        <li><strong>Problem Solving:</strong> Finding solutions to complex tasks</li>
                        <li><strong>Perception:</strong> Interpreting sensory inputs (vision, speech)</li>
                        <li><strong>Language Understanding:</strong> Comprehending and generating human language</li>
                    </ul>
                    <h4>AI vs Traditional Programming</h4>
                    <p>In traditional programming, a developer writes explicit rules to produce output from input. In AI, the system <em>learns</em> rules from data examples.</p>
                    <div class="code-example">
<pre>Traditional: Input + Rules → Output
AI:          Input + Output → Rules (learned)</pre>
                    </div>
                    <div class="info-box tip">
                        <strong>&#x1F4A1; Real-World Example</strong>
                        <p>Spam email filters, voice assistants like Siri and Alexa, recommendation engines on Netflix and YouTube — all powered by AI.</p>
                    </div>
                </div>
            `,
            xp: 10
        },
        {
            id: 'ai-history',
            type: 'theory',
            title: 'History and Milestones of AI',
            description: 'Trace the evolution of AI from its origins to today',
            content: `
                <div class="theory-content">
                    <h4>Timeline of AI</h4>
                    <ul>
                        <li><strong>1943:</strong> McCulloch &amp; Pitts propose the first mathematical model of a neuron</li>
                        <li><strong>1950:</strong> Alan Turing proposes the Turing Test in "Computing Machinery and Intelligence"</li>
                        <li><strong>1956:</strong> John McCarthy coins the term "Artificial Intelligence" at Dartmouth Conference</li>
                        <li><strong>1966:</strong> ELIZA — first chatbot created at MIT by Joseph Weizenbaum</li>
                        <li><strong>1980s:</strong> Rise of Expert Systems — programs that mimic human experts</li>
                        <li><strong>1997:</strong> IBM's Deep Blue defeats world chess champion Garry Kasparov</li>
                        <li><strong>2011:</strong> IBM Watson wins Jeopardy!; Apple launches Siri</li>
                        <li><strong>2016:</strong> Google DeepMind's AlphaGo defeats world Go champion</li>
                        <li><strong>2022–present:</strong> Large Language Models (GPT, Gemini) revolutionize AI</li>
                    </ul>
                    <h4>AI Winters</h4>
                    <p>AI development went through two major periods of reduced funding called <em>AI Winters</em> (1974–1980 and 1987–1993). The field was revived by advances in machine learning, big data, and computing power.</p>
                    <div class="info-box tip">
                        <strong>&#x1F4A1; The Turing Test</strong>
                        <p>A machine passes the Turing Test if a human evaluator cannot reliably distinguish the machine's responses from a human's in a text conversation.</p>
                    </div>
                </div>
            `,
            xp: 10
        },
        {
            id: 'ai-types',
            type: 'theory',
            title: 'Types of AI',
            description: 'Narrow AI, General AI, and Super AI explained',
            content: `
                <div class="theory-content">
                    <h4>1. Narrow AI (Weak AI)</h4>
                    <p>Performs a <strong>single specific task</strong>. The only type that exists today.</p>
                    <ul>
                        <li>Chess engines (Deep Blue, Stockfish)</li>
                        <li>Voice assistants (Siri, Alexa)</li>
                        <li>Image recognition, spam filters</li>
                    </ul>
                    <h4>2. General AI (AGI)</h4>
                    <p>Could perform <strong>any intellectual task</strong> a human can. Does not yet exist.</p>
                    <h4>3. Super AI (ASI)</h4>
                    <p>Would surpass all human cognitive abilities. Purely theoretical.</p>
                    <h4>Classification by Functionality</h4>
                    <ul>
                        <li><strong>Reactive Machines:</strong> No memory (e.g., Deep Blue)</li>
                        <li><strong>Limited Memory:</strong> Uses recent past (e.g., self-driving cars)</li>
                        <li><strong>Theory of Mind:</strong> (Future) Understands emotions and beliefs</li>
                        <li><strong>Self-Aware:</strong> (Future) Has consciousness</li>
                    </ul>
                    <div class="info-box warning">
                        <strong>&#x26A0;&#xFE0F; Note</strong>
                        <p>All deployed AI systems today are Narrow AI — no General or Super AI exists.</p>
                    </div>
                </div>
            `,
            xp: 10
        },
        {
            id: 'ai-applications',
            type: 'theory',
            title: 'Real-World Applications of AI',
            description: 'Discover where AI is used across industries',
            content: `
                <div class="theory-content">
                    <h4>Healthcare</h4>
                    <ul>
                        <li>Disease diagnosis from medical images (cancer detection)</li>
                        <li>Drug discovery and protein folding (AlphaFold)</li>
                        <li>Robot-assisted surgery</li>
                    </ul>
                    <h4>Finance</h4>
                    <ul>
                        <li>Fraud detection in banking transactions</li>
                        <li>Algorithmic trading and risk assessment</li>
                    </ul>
                    <h4>Transportation</h4>
                    <ul>
                        <li>Self-driving cars (Tesla, Waymo)</li>
                        <li>Traffic prediction and route optimization</li>
                    </ul>
                    <h4>Entertainment &amp; Education</h4>
                    <ul>
                        <li>Personalized recommendations (Netflix, Spotify, YouTube)</li>
                        <li>Generative AI for content creation (ChatGPT, Midjourney)</li>
                        <li>Intelligent tutoring systems</li>
                    </ul>
                    <div class="info-box tip">
                        <strong>&#x1F4A1; Did You Know?</strong>
                        <p>AI is used in over 77% of consumer devices worldwide, from smartphones to smart TVs.</p>
                    </div>
                </div>
            `,
            xp: 10
        }
    ],

    search: [
        {
            id: 'ai-problem-solving',
            type: 'theory',
            title: 'Problem Solving in AI',
            description: 'Formulate problems as state spaces and search problems',
            content: `
                <div class="theory-content">
                    <h4>What is Problem Solving in AI?</h4>
                    <p>AI problem solving finds a sequence of actions that transforms an initial state into a goal state — this is called <strong>search</strong>.</p>
                    <h4>Components of a Search Problem</h4>
                    <ul>
                        <li><strong>Initial State:</strong> The starting point</li>
                        <li><strong>Actions:</strong> Possible moves at each state</li>
                        <li><strong>Transition Model:</strong> What each action does</li>
                        <li><strong>Goal Test:</strong> Is the current state the goal?</li>
                        <li><strong>Path Cost:</strong> Cost of reaching the current state</li>
                    </ul>
                    <h4>Example: 8-Puzzle</h4>
                    <div class="code-example">
<pre>Initial:  2 8 3    Goal: 1 2 3
          1 _ 4          8 _ 4
          7 6 5          7 6 5</pre>
                    </div>
                    <div class="info-box">
                        <strong>&#x1F4D6; Key Insight</strong>
                        <p>Many real-world problems — GPS navigation, game playing — can be modeled as state-space search.</p>
                    </div>
                </div>
            `,
            xp: 12
        },
        {
            id: 'ai-bfs',
            type: 'theory',
            title: 'Breadth-First Search (BFS)',
            description: 'Explore state spaces level by level',
            content: `
                <div class="theory-content">
                    <h4>What is BFS?</h4>
                    <p>BFS explores all nodes at the current depth before going deeper. Uses a <strong>Queue (FIFO)</strong>.</p>
                    <div class="code-example">
<pre>BFS(start, goal):
  frontier = Queue([start])
  explored = Set()
  while frontier not empty:
    node = frontier.dequeue()
    if node == goal: return SUCCESS
    for child of node:
      if child not explored: frontier.enqueue(child)</pre>
                    </div>
                    <h4>Properties</h4>
                    <ul>
                        <li><strong>Complete:</strong> Yes</li>
                        <li><strong>Optimal:</strong> Yes — finds shortest path</li>
                        <li><strong>Space:</strong> O(b<sup>d</sup>) — can be large</li>
                    </ul>
                </div>
            `,
            xp: 12
        },
        {
            id: 'ai-dfs',
            type: 'theory',
            title: 'Depth-First Search (DFS)',
            description: 'Explore state spaces along deep paths first',
            content: `
                <div class="theory-content">
                    <h4>What is DFS?</h4>
                    <p>DFS explores as deep as possible before backtracking. Uses a <strong>Stack (LIFO)</strong>.</p>
                    <div class="code-example">
<pre>Feature    | BFS          | DFS
-----------|--------------|----------
Structure  | Queue (FIFO) | Stack (LIFO)
Memory     | High         | Low
Optimal?   | Yes          | No
Complete?  | Yes          | No (cycles)</pre>
                    </div>
                    <div class="info-box tip">
                        <strong>&#x1F4A1; Tip</strong>
                        <p>Iterative Deepening DFS (IDDFS) combines DFS memory efficiency with BFS completeness.</p>
                    </div>
                </div>
            `,
            xp: 12
        },
        {
            id: 'ai-heuristics',
            type: 'theory',
            title: 'Heuristics and Informed Search',
            description: 'Use domain knowledge to guide search efficiently',
            content: `
                <div class="theory-content">
                    <h4>What is Informed Search?</h4>
                    <p>Informed search uses a <em>heuristic function</em> h(n) — an estimate of cost from node n to the goal — to guide search toward the solution faster.</p>
                    <h4>Admissible Heuristic</h4>
                    <p>h(n) must <strong>never overestimate</strong> the true cost to reach the goal.</p>
                    <div class="code-example">
<pre>8-Puzzle heuristics:
  h1 = number of misplaced tiles
  h2 = sum of Manhattan distances

Route Finding:
  h = straight-line distance to goal</pre>
                    </div>
                </div>
            `,
            xp: 12
        },
        {
            id: 'ai-astar',
            type: 'theory',
            title: 'A* Search Algorithm',
            description: 'The gold standard for optimal informed search',
            content: `
                <div class="theory-content">
                    <h4>What is A*?</h4>
                    <p>A* combines actual cost g(n) with heuristic h(n):</p>
                    <div class="code-example">
<pre>f(n) = g(n) + h(n)
g(n) = actual cost from start to n
h(n) = heuristic estimate from n to goal</pre>
                    </div>
                    <h4>Properties</h4>
                    <ul>
                        <li><strong>Complete:</strong> Yes</li>
                        <li><strong>Optimal:</strong> Yes (with admissible heuristic)</li>
                    </ul>
                    <h4>Real-World Uses</h4>
                    <ul>
                        <li>Google Maps / GPS navigation</li>
                        <li>Video game pathfinding</li>
                        <li>Robot motion planning</li>
                    </ul>
                    <div class="info-box tip">
                        <strong>&#x1F4A1; Key Insight</strong>
                        <p>When h(n) = 0, A* becomes Dijkstra's algorithm.</p>
                    </div>
                </div>
            `,
            xp: 14
        }
    ],

    knowledge: [
        {
            id: 'ai-knowledge-rep',
            type: 'theory',
            title: 'Knowledge Representation',
            description: 'How AI systems store and use knowledge',
            content: `
                <div class="theory-content">
                    <h4>What is Knowledge Representation?</h4>
                    <p>KR focuses on formally encoding knowledge so a computer can reason with it to solve complex tasks.</p>
                    <h4>Types of Knowledge</h4>
                    <ul>
                        <li><strong>Declarative:</strong> Facts ("Paris is in France")</li>
                        <li><strong>Procedural:</strong> How to do things</li>
                        <li><strong>Heuristic:</strong> Rules of thumb</li>
                        <li><strong>Meta-Knowledge:</strong> Knowledge about knowledge</li>
                    </ul>
                    <h4>Common KR Techniques</h4>
                    <ul>
                        <li><strong>Semantic Networks:</strong> Graph of concepts and relations</li>
                        <li><strong>Frames:</strong> Structured attribute-value records</li>
                        <li><strong>Ontologies:</strong> Formal hierarchical domain descriptions</li>
                        <li><strong>Production Rules:</strong> IF-THEN rules (expert systems)</li>
                    </ul>
                    <div class="code-example">
<pre>IF patient has fever AND cough
THEN may have flu (confidence: 0.8)</pre>
                    </div>
                </div>
            `,
            xp: 12
        },
        {
            id: 'ai-logic',
            type: 'theory',
            title: 'Logic in AI',
            description: 'Propositional and first-order logic for AI reasoning',
            content: `
                <div class="theory-content">
                    <h4>Propositional Logic</h4>
                    <div class="code-example">
<pre>Connectives:
  ¬P     — NOT P
  P ∧ Q  — P AND Q
  P ∨ Q  — P OR Q
  P → Q  — IF P THEN Q
  P ↔ Q  — P IFF Q</pre>
                    </div>
                    <h4>First-Order Logic (FOL)</h4>
                    <div class="code-example">
<pre>∀x IsHuman(x) → IsMortal(x)
IsHuman(Socrates)
∴ IsMortal(Socrates)   ← modus ponens</pre>
                    </div>
                    <h4>Inference Methods</h4>
                    <ul>
                        <li><strong>Forward Chaining:</strong> Facts → Conclusions</li>
                        <li><strong>Backward Chaining:</strong> Goal → Facts needed</li>
                        <li><strong>Resolution:</strong> Automated theorem proving</li>
                    </ul>
                </div>
            `,
            xp: 12
        },
        {
            id: 'ai-agents',
            type: 'theory',
            title: 'Intelligent Agents',
            description: 'How AI agents perceive and act in environments',
            content: `
                <div class="theory-content">
                    <h4>What is an Agent?</h4>
                    <p>An agent perceives its environment via <em>sensors</em> and acts via <em>actuators</em>.</p>
                    <div class="code-example">
<pre>Agent = Perceive → Think → Act

Self-driving car PEAS:
  P: Safe driving, fast arrival
  E: Roads, traffic, pedestrians
  A: Steering, brakes, accelerator
  S: Cameras, GPS, LiDAR</pre>
                    </div>
                    <h4>Types of Agents</h4>
                    <ul>
                        <li><strong>Simple Reflex:</strong> Acts on current percept only</li>
                        <li><strong>Model-Based:</strong> Maintains internal world model</li>
                        <li><strong>Goal-Based:</strong> Acts to achieve goals</li>
                        <li><strong>Utility-Based:</strong> Maximizes a reward function</li>
                        <li><strong>Learning Agent:</strong> Improves over time</li>
                    </ul>
                </div>
            `,
            xp: 12
        }
    ],

    'ml-basics': [
        {
            id: 'ai-ml-intro',
            type: 'theory',
            title: 'Introduction to Machine Learning',
            description: 'Understand what ML is and how it differs from traditional AI',
            content: `
                <div class="theory-content">
                    <h4>What is Machine Learning?</h4>
                    <p>ML gives computers the ability to <strong>learn from data without being explicitly programmed</strong>.</p>
                    <div class="code-example">
<pre>AI (broadest)
└── Machine Learning (learns from data)
    └── Deep Learning (neural networks)</pre>
                    </div>
                    <h4>The ML Workflow</h4>
                    <ul>
                        <li>Collect Data → Prepare Data → Choose Model</li>
                        <li>Train → Evaluate → Deploy</li>
                    </ul>
                    <h4>Key Types</h4>
                    <ul>
                        <li><strong>Supervised Learning</strong> — labeled data</li>
                        <li><strong>Unsupervised Learning</strong> — unlabeled data</li>
                        <li><strong>Reinforcement Learning</strong> — trial and reward</li>
                    </ul>
                </div>
            `,
            xp: 12
        },
        {
            id: 'ai-supervised',
            type: 'theory',
            title: 'Supervised Learning',
            description: 'Learn from labeled data examples',
            content: `
                <div class="theory-content">
                    <h4>What is Supervised Learning?</h4>
                    <p>The algorithm trains on a <strong>labeled dataset</strong> — each example has an input and a known output.</p>
                    <div class="code-example">
<pre>House Price Data:
  Size | Beds | Price
  1200 |  2   | $250k
  1800 |  3   | $380k
Model predicts: price = f(size, beds)</pre>
                    </div>
                    <h4>Two Main Tasks</h4>
                    <ul>
                        <li><strong>Regression:</strong> Predicts a continuous number</li>
                        <li><strong>Classification:</strong> Predicts a category</li>
                    </ul>
                    <h4>Common Algorithms</h4>
                    <ul>
                        <li>Linear / Logistic Regression</li>
                        <li>Decision Trees, Random Forest</li>
                        <li>SVM, KNN, Neural Networks</li>
                    </ul>
                </div>
            `,
            xp: 12
        },
        {
            id: 'ai-unsupervised',
            type: 'theory',
            title: 'Unsupervised Learning',
            description: 'Discover hidden patterns in unlabeled data',
            content: `
                <div class="theory-content">
                    <h4>What is Unsupervised Learning?</h4>
                    <p>Works with <strong>unlabeled data</strong> to find hidden structure.</p>
                    <h4>Main Tasks</h4>
                    <ul>
                        <li><strong>Clustering:</strong> Group similar data (K-Means, DBSCAN)</li>
                        <li><strong>Dimensionality Reduction:</strong> PCA, t-SNE</li>
                        <li><strong>Association Rules:</strong> Market basket analysis (Apriori)</li>
                    </ul>
                    <div class="code-example">
<pre>Market Basket: {bread, butter} → {milk}
"Customers who buy bread and butter likely buy milk"</pre>
                    </div>
                </div>
            `,
            xp: 12
        },
        {
            id: 'ai-reinforcement',
            type: 'theory',
            title: 'Reinforcement Learning',
            description: 'Learn through interaction and rewards',
            content: `
                <div class="theory-content">
                    <h4>What is Reinforcement Learning?</h4>
                    <p>An <strong>agent</strong> learns by taking actions, receiving <strong>rewards</strong> or penalties, and maximizing cumulative reward.</p>
                    <div class="code-example">
<pre>Agent → Action → Environment
       ← Reward ←
       ← New State ←
Goal: Learn policy π to maximize reward</pre>
                    </div>
                    <h4>Key Algorithms</h4>
                    <ul>
                        <li><strong>Q-Learning:</strong> Learns value of state-action pairs</li>
                        <li><strong>DQN:</strong> Q-Learning + neural networks (Atari)</li>
                        <li><strong>PPO/A3C:</strong> Policy gradient methods</li>
                    </ul>
                    <div class="info-box tip">
                        <strong>&#x1F4A1; Real Achievement</strong>
                        <p>AlphaGo and AlphaZero used RL to defeat world champions in Go and Chess.</p>
                    </div>
                </div>
            `,
            xp: 14
        }
    ],

    'neural-networks': [
        {
            id: 'ai-nn-intro',
            type: 'theory',
            title: 'Introduction to Neural Networks',
            description: 'How artificial neural networks are inspired by the brain',
            content: `
                <div class="theory-content">
                    <h4>The Artificial Neuron</h4>
                    <div class="code-example">
<pre>Inputs: x1, x2, x3  |  Weights: w1, w2, w3
z = x1·w1 + x2·w2 + x3·w3 + bias
output = activation(z)   e.g. sigmoid, ReLU</pre>
                    </div>
                    <h4>Network Layers</h4>
                    <ul>
                        <li><strong>Input Layer:</strong> Receives raw data</li>
                        <li><strong>Hidden Layers:</strong> Where learning happens</li>
                        <li><strong>Output Layer:</strong> Final prediction</li>
                    </ul>
                    <h4>Training: Backpropagation</h4>
                    <p>Compute error → propagate backwards → adjust weights via <strong>gradient descent</strong>.</p>
                    <div class="info-box tip">
                        <strong>&#x1F4A1; Key Insight</strong>
                        <p>Neural networks with enough neurons can approximate any continuous function.</p>
                    </div>
                </div>
            `,
            xp: 14
        },
        {
            id: 'ai-deep-learning',
            type: 'theory',
            title: 'Deep Learning',
            description: 'Neural networks with many layers powering modern AI',
            content: `
                <div class="theory-content">
                    <h4>What is Deep Learning?</h4>
                    <p>Uses networks with <strong>many hidden layers</strong> to learn hierarchical representations automatically.</p>
                    <div class="code-example">
<pre>CNN image recognition:
  Layer 1 → edges/colors
  Layer 2 → shapes
  Layer 3 → textures
  Layer 4 → object parts
  Output  → cat / car / dog</pre>
                    </div>
                    <h4>Key Architectures</h4>
                    <ul>
                        <li><strong>CNN:</strong> Images and video</li>
                        <li><strong>RNN / LSTM:</strong> Sequential data, text</li>
                        <li><strong>Transformer:</strong> GPT, BERT, modern LLMs</li>
                        <li><strong>GAN:</strong> Generate realistic images/audio</li>
                    </ul>
                    <h4>Milestones</h4>
                    <ul>
                        <li>2012: AlexNet — deep learning revolution</li>
                        <li>2017: Transformer ("Attention is All You Need")</li>
                        <li>2022: ChatGPT — conversational AI mainstream</li>
                    </ul>
                </div>
            `,
            xp: 14
        },
        {
            id: 'ai-nlp',
            type: 'theory',
            title: 'Natural Language Processing (NLP)',
            description: 'How AI understands and generates human language',
            content: `
                <div class="theory-content">
                    <h4>Core NLP Tasks</h4>
                    <ul>
                        <li><strong>Tokenization:</strong> Split text into words/tokens</li>
                        <li><strong>POS Tagging:</strong> Label words as noun, verb, adj…</li>
                        <li><strong>NER:</strong> Find names, dates, places in text</li>
                        <li><strong>Sentiment Analysis:</strong> Positive / Negative / Neutral</li>
                        <li><strong>Machine Translation:</strong> English ↔ French etc.</li>
                        <li><strong>Text Generation:</strong> GPT, Gemini, Claude</li>
                    </ul>
                    <h4>Word Embeddings</h4>
                    <div class="code-example">
<pre>king - man + woman ≈ queen   (Word2Vec)
vector("Paris") - vector("France") + vector("Italy") ≈ vector("Rome")</pre>
                    </div>
                    <h4>Key Models</h4>
                    <ul>
                        <li>2018 — BERT (bidirectional transformer)</li>
                        <li>2020 — GPT-3 (175B parameters)</li>
                        <li>2022 — ChatGPT mainstream</li>
                        <li>2023+ — GPT-4, Gemini, Claude</li>
                    </ul>
                </div>
            `,
            xp: 14
        },
        {
            id: 'ai-ethics',
            type: 'theory',
            title: 'AI Ethics and the Future',
            description: 'Responsible AI, bias, safety, and what comes next',
            content: `
                <div class="theory-content">
                    <h4>Key Ethical Issues</h4>
                    <ul>
                        <li><strong>Bias &amp; Fairness:</strong> AI can discriminate when trained on biased data</li>
                        <li><strong>Privacy:</strong> Mass data collection raises serious concerns</li>
                        <li><strong>Explainability:</strong> Deep models are "black boxes" — XAI is needed</li>
                        <li><strong>Accountability:</strong> Who is responsible for AI harm?</li>
                        <li><strong>Deepfakes:</strong> Generative AI can create false convincing content</li>
                    </ul>
                    <h4>AI Safety</h4>
                    <ul>
                        <li><strong>Alignment:</strong> Ensuring AI goals match human values</li>
                        <li><strong>Robustness:</strong> Resilience to adversarial attacks</li>
                    </ul>
                    <h4>The Future of AI</h4>
                    <ul>
                        <li>Multimodal AI (text + image + audio + video)</li>
                        <li>Autonomous AI agents</li>
                        <li>Progress toward AGI</li>
                        <li>AI in science (drug discovery, climate)</li>
                    </ul>
                    <div class="info-box tip">
                        <strong>&#x1F4A1; Key Principle</strong>
                        <p>Responsible AI: Fairness, Accountability, Transparency, Safety, Human oversight.</p>
                    </div>
                </div>
            `,
            xp: 14
        }
    ]
};

// ── Additional (locked) courses ──────────────────────────────────────────────
window.CNAdditionalCourses.push(
    {
        key: 'dsa',
        title: 'Data Structures and Algorithms',
        shortTitle: 'DSA',
        description: 'Arrays, strings, linked lists, trees, graphs, and problem-solving patterns.',
        accent: '#38bdf8',
        keywords: ['dsa', 'algorithms', 'arrays', 'trees', 'graphs', 'problem solving']
    },
    {
        key: 'computer-architecture',
        title: 'Computer Architecture',
        shortTitle: 'CA',
        description: 'Processors, memory hierarchy, instruction sets, and how hardware executes programs.',
        accent: '#f97316',
        keywords: ['computer architecture', 'cpu', 'memory', 'instruction set', 'hardware']
    },
    {
        key: 'operating-system',
        title: 'Operating System',
        shortTitle: 'OS',
        description: 'Processes, threads, scheduling, memory management, and file systems.',
        accent: '#22c55e',
        keywords: ['operating system', 'os', 'processes', 'threads', 'memory management']
    }
);
