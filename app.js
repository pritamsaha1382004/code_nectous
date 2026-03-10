// Curriculum Data
        const curriculum = {
            python: {
                basics: [
                    {
                        id: 'py-intro',
                        type: 'theory',
                        title: 'Introduction to Python',
                        description: 'Learn what Python is and why it\'s popular',
                        content: `
                            <div class="theory-content">
                                <h4>What is Python?</h4>
                                <p>Python is a high-level, interpreted programming language created by Guido van Rossum in 1991. It emphasizes code readability and allows programmers to express concepts in fewer lines of code than languages like C++ or Java.</p>
                                
                                <h4>Why Learn Python?</h4>
                                <ul>
                                    <li><strong>Easy to Learn:</strong> Python has simple, English-like syntax that makes it perfect for beginners</li>
                                    <li><strong>Versatile:</strong> Used for web development, data science, AI, automation, and more</li>
                                    <li><strong>Large Community:</strong> Millions of developers and extensive libraries available</li>
                                    <li><strong>High Demand:</strong> One of the most sought-after programming skills in the job market</li>
                                </ul>

                                <h4>Python Applications</h4>
                                <p>Python is used by major companies and organizations:</p>
                                <ul>
                                    <li>Google uses Python for web crawling and search</li>
                                    <li>Netflix uses Python for data analysis and recommendations</li>
                                    <li>NASA uses Python for scientific computing</li>
                                    <li>Instagram's backend is built with Python</li>
                                </ul>

                                <div class="info-box tip">
                                    <strong>\u{1F4A1} Fun Fact</strong>
                                    <p>Python is named after the British comedy series "Monty Python's Flying Circus," not the snake!</p>
                                </div>

                                <h4>Your First Python Program</h4>
                                <p>Here's the traditional first program every programmer writes:</p>
                                
                                <div class="code-example">
<pre>print("Hello, World!")</pre>
                                </div>

                                <p>That's it! Just one line to display text on the screen. This simplicity is what makes Python so popular for beginners.</p>
                            </div>
                        `,
                        xp: 10
                    },
                    {
                        id: 'py-hello',
                        type: 'practice',
                        title: 'Your First Program',
                        description: 'Write your first Python program',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>\u{1F3AF} Challenge Goal</h4>
                                    <ul>
                                        <li>Use the print() function to display "Hello, World!"</li>
                                        <li>Run your code and see the output</li>
                                    </ul>
                                </div>

                                <div class="info-box">
                                    <strong>\u{1F4DD} The print() Function</strong>
                                    <p>The print() function displays text or values to the console. Simply put the text you want to display inside quotes within the parentheses.</p>
                                </div>
                            </div>
                        `,
                        starterCode: `# Write your code here\n# Use print() to display "Hello, World!"\n`,
                        solution: `print("Hello, World!")`,
                        test: (output) => output.trim() === 'Hello, World!',
                        xp: 10
                    },
                    {
                        id: 'py-variables-theory',
                        type: 'theory',
                        title: 'Variables and Data Types',
                        description: 'Learn how to store and work with data',
                        content: `
                            <div class="theory-content">
                                <h4>What are Variables?</h4>
                                <p>Variables are containers that store data. Think of them as labeled boxes where you can put different types of information.</p>

                                <h4>Creating Variables</h4>
                                <p>In Python, you create a variable by choosing a name and assigning a value using the = sign:</p>
                                
                                <div class="code-example">
<pre>name = "Alice"
age = 25
height = 5.6
is_student = True</pre>
                                </div>

                                <h4>Common Data Types</h4>
                                <ul>
                                    <li><strong>String (str):</strong> Text data, enclosed in quotes - "Hello"</li>
                                    <li><strong>Integer (int):</strong> Whole numbers - 42, -7, 0</li>
                                    <li><strong>Float:</strong> Decimal numbers - 3.14, -0.5</li>
                                    <li><strong>Boolean (bool):</strong> True or False values</li>
                                </ul>

                                <h4>Variable Naming Rules</h4>
                                <div class="info-box warning">
                                    <strong>\u26A0\uFE0F Important Rules</strong>
                                    <ul>
                                        <li>Must start with a letter or underscore</li>
                                        <li>Can contain letters, numbers, and underscores</li>
                                        <li>Case-sensitive (age and Age are different)</li>
                                        <li>Cannot use Python keywords (like print, if, for)</li>
                                    </ul>
                                </div>

                                <h4>Using Variables</h4>
                                <div class="code-example">
<pre>name = "Bob"
age = 30
print(name)  <span class="code-comment"># Outputs: Bob</span>
print(age)   <span class="code-comment"># Outputs: 30</span>

<span class="code-comment"># You can change variable values</span>
age = 31
print(age)   <span class="code-comment"># Outputs: 31</span></pre>
                                </div>

                                <div class="info-box tip">
                                    <strong>\u{1F4A1} Best Practice</strong>
                                    <p>Use descriptive variable names like student_name instead of sn. Your code should be readable!</p>
                                </div>
                            </div>
                        `,
                        xp: 10
                    },
                    {
                        id: 'py-variables-practice',
                        type: 'practice',
                        title: 'Working with Variables',
                        description: 'Create and use variables',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>\u{1F3AF} Challenge Goal</h4>
                                    <ul>
                                        <li>Create a variable called "name" with your name</li>
                                        <li>Create a variable called "age" with your age</li>
                                        <li>Print both variables</li>
                                    </ul>
                                </div>

                                <div class="info-box">
                                    <strong>\u{1F4A1} Hint</strong>
                                    <p>Remember: strings need quotes, numbers don't!</p>
                                </div>
                            </div>
                        `,
                        starterCode: `# Create your variables here\n\n# Print them\n`,
                        solution: `name = "Student"\nage = 20\nprint(name)\nprint(age)`,
                        test: (output) => output.split('\n').length >= 2,
                        xp: 10
                    },
                    {
                        id: 'py-operators-theory',
                        type: 'theory',
                        title: 'Operators and Math',
                        description: 'Perform calculations in Python',
                        content: `
                            <div class="theory-content">
                                <h4>Arithmetic Operators</h4>
                                <p>Python supports all standard mathematical operations:</p>
                                
                                <div class="code-example">
<pre><span class="code-comment"># Basic arithmetic</span>
print(10 + 5)   <span class="code-comment"># Addition: 15</span>
print(10 - 5)   <span class="code-comment"># Subtraction: 5</span>
print(10 * 5)   <span class="code-comment"># Multiplication: 50</span>
print(10 / 5)   <span class="code-comment"># Division: 2.0</span>
print(10 % 3)   <span class="code-comment"># Modulus (remainder): 1</span>
print(2 ** 3)   <span class="code-comment"># Exponent (2\u00B3): 8</span>
print(10 // 3)  <span class="code-comment"># Floor division: 3</span></pre>
                                </div>

                                <h4>Using Variables in Math</h4>
                                <div class="code-example">
<pre>a = 10
b = 3
sum = a + b
print(sum)  <span class="code-comment"># Outputs: 13</span>

<span class="code-comment"># You can update variables</span>
a = a + 5
print(a)  <span class="code-comment"># Outputs: 15</span></pre>
                                </div>

                                <h4>String Concatenation</h4>
                                <p>You can also "add" strings together:</p>
                                
                                <div class="code-example">
<pre>first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name
print(full_name)  <span class="code-comment"># Outputs: John Doe</span></pre>
                                </div>

                                <div class="info-box warning">
                                    <strong>\u26A0\uFE0F Common Mistake</strong>
                                    <p>You can't add numbers and strings directly. This will cause an error:<br>
                                    <code>age = 25</code><br>
                                    <code>print("I am " + age)</code> \u274C<br><br>
                                    Instead, convert the number to a string:<br>
                                    <code>print("I am " + str(age))</code> \u2713</p>
                                </div>
                            </div>
                        `,
                        xp: 10
                    },
                    {
                        id: 'py-math-practice',
                        type: 'practice',
                        title: 'Math Operations',
                        description: 'Practice arithmetic in Python',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>\u{1F3AF} Challenge Goal</h4>
                                    <ul>
                                        <li>Create two variables: a = 15 and b = 4</li>
                                        <li>Calculate and print their sum</li>
                                        <li>Calculate and print their product</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `# Create variables a and b\n\n# Calculate sum\n\n# Calculate product\n`,
                        solution: `a = 15\nb = 4\nprint(a + b)\nprint(a * b)`,
                        test: (output) => output.includes('19') && output.includes('60'),
                        xp: 10
                    }

                ],
                control: [
                    {
                        id: 'py-if-theory',
                        type: 'theory',
                        title: 'Conditional Statements',
                        description: 'Make decisions in your code',
                        content: `
                            <div class="theory-content">
                                <h4>What are Conditional Statements?</h4>
                                <p>Conditional statements allow your program to make decisions and execute different code based on conditions.</p>

                                <h4>The if Statement</h4>
                                <p>The basic structure uses the if keyword:</p>
                                
                                <div class="code-example">
<pre>age = 18

if age >= 18:
    print("You are an adult")
    
<span class="code-comment"># Output: You are an adult</span></pre>
                                </div>

                                <div class="info-box warning">
                                    <strong>\u26A0\uFE0F Indentation is Critical!</strong>
                                    <p>Python uses indentation (spaces) to define code blocks. The code inside the if statement must be indented (usually 4 spaces).</p>
                                </div>

                                <h4>if-else Statements</h4>
                                <p>Execute different code for true and false conditions:</p>
                                
                                <div class="code-example">
<pre>age = 16

if age >= 18:
    print("You can vote")
else:
    print("You cannot vote yet")
    
<span class="code-comment"># Output: You cannot vote yet</span></pre>
                                </div>

                                <h4>if-elif-else Statements</h4>
                                <p>Check multiple conditions:</p>
                                
                                <div class="code-example">
<pre>score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")
    
<span class="code-comment"># Output: Grade: B</span></pre>
                                </div>

                                <h4>Comparison Operators</h4>
                                <ul>
                                    <li><code>==</code> - Equal to</li>
                                    <li><code>!=</code> - Not equal to</li>
                                    <li><code>></code> - Greater than</li>
                                    <li><code><</code> - Less than</li>
                                    <li><code>>=</code> - Greater than or equal to</li>
                                    <li><code><=</code> - Less than or equal to</li>
                                </ul>
                            </div>
                        `,
                        xp: 10
                    },
                    {
                        id: 'py-if-practice',
                        type: 'practice',
                        title: 'Using if Statements',
                        description: 'Practice conditional logic',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>\u{1F3AF} Challenge Goal</h4>
                                    <ul>
                                        <li>Create a variable "temperature" set to 75</li>
                                        <li>If temperature > 80, print "It's hot!"</li>
                                        <li>Otherwise, print "It's nice!"</li>
                                    </ul>
                                </div>

                                <div class="info-box">
                                    <strong>\u{1F4A1} Remember</strong>
                                    <p>Don't forget the colon (:) at the end of if/else lines and proper indentation!</p>
                                </div>
                            </div>
                        `,
                        starterCode: `# Create temperature variable\n\n# Write if-else statement\n`,
                        solution: `temperature = 75\nif temperature > 80:\n    print("It\'s hot!")\nelse:\n    print("It\'s nice!")`,
                        test: (output) => output.includes("It's") || output.includes('It\'s'),
                        xp: 10
                    },
                    {
                        id: 'py-loops-theory',
                        type: 'theory',
                        title: 'Loops',
                        description: 'Repeat code efficiently',
                        content: `
                            <div class="theory-content">
                                <h4>What are Loops?</h4>
                                <p>Loops allow you to execute a block of code multiple times without writing it repeatedly.</p>

                                <h4>For Loops</h4>
                                <p>Use for loops to iterate a specific number of times:</p>
                                
                                <div class="code-example">
<pre><span class="code-comment"># Print numbers 0 to 4</span>
for i in range(5):
    print(i)
    
<span class="code-comment"># Output:
# 0
# 1
# 2
# 3
# 4</span></pre>
                                </div>

                                <h4>The range() Function</h4>
                                <p>range() generates a sequence of numbers:</p>
                                
                                <div class="code-example">
<pre>range(5)        <span class="code-comment"># 0, 1, 2, 3, 4</span>
range(1, 6)     <span class="code-comment"># 1, 2, 3, 4, 5</span>
range(0, 10, 2) <span class="code-comment"># 0, 2, 4, 6, 8 (step by 2)</span></pre>
                                </div>

                                <h4>While Loops</h4>
                                <p>While loops continue until a condition becomes false:</p>
                                
                                <div class="code-example">
<pre>count = 0
while count < 5:
    print(count)
    count = count + 1
    
<span class="code-comment"># Output: 0, 1, 2, 3, 4</span></pre>
                                </div>

                                <div class="info-box warning">
                                    <strong>\u26A0\uFE0F Infinite Loops</strong>
                                    <p>Be careful with while loops! If the condition never becomes false, the loop will run forever.</p>
                                </div>

                                <h4>Loop Through Strings</h4>
                                <div class="code-example">
<pre>name = "Python"
for letter in name:
    print(letter)
    
<span class="code-comment"># Output: P, y, t, h, o, n (each on new line)</span></pre>
                                </div>
                            </div>
                        `,
                        xp: 10
                    },
                    {
                        id: 'py-loops-practice',
                        type: 'practice',
                        title: 'Practice Loops',
                        description: 'Use for loops to repeat code',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>\u{1F3AF} Challenge Goal</h4>
                                    <ul>
                                        <li>Use a for loop with range(1, 6)</li>
                                        <li>Print each number</li>
                                    </ul>
                                </div>

                                <div class="info-box tip">
                                    <strong>\u{1F4A1} Hint</strong>
                                    <p>Remember: range(1, 6) will give you numbers 1 through 5!</p>
                                </div>
                            </div>
                        `,
                        starterCode: `# Write your for loop here\n`,
                        solution: `for i in range(1, 6):\n    print(i)`,
                        test: (output) => output.includes('1') && output.includes('5'),
                        xp: 10
                    }
                ],

                

                overview: [
                    {
                        id: 'python-overview',
                        type: 'theory',
                        title: 'Python Course Overview',
                        description: 'What you will learn and how to practice',
                        content: `
                            <div class="theory-content">
                                <h4>What you will learn</h4>
                                <p>This course is organized to build from fundamentals to practical problem solving. You will learn core syntax, data handling, decision making, and repetition patterns that appear in real-world code.</p>
                                <h4>How to use the lessons</h4>
                                <p>Read the theory, then immediately try the practice tasks. Each task is short and focused on one concept so you build speed and confidence.</p>
                                <h4>Progress and XP</h4>
                                <p>Finishing lessons marks them complete, increases XP, and counts toward your streak. The practice challenges in this course award more XP.</p>
                            </div>
                        `,
                        xp: 10
                    }
                ],

                
                
                Practice: [

                    {
                        id: 'python-topic-01',
                        type: 'practice',
                        title: 'Variables',
                        description: 'Create x = 10 and print it',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Create x = 10 and print it</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `# print output
`,
                        solution: `x = 10
print(x)`,
                        test: (output) => output.replace(/\s/g, '') === `10`,
                        xp: 10
                    },

                    {
                        id: 'python-topic-02',
                        type: 'practice',
                        title: 'Arithmetic',
                        description: 'Print 7 + 5',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Print 7 + 5</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `# print output
`,
                        solution: `print(7 + 5)`,
                        test: (output) => output.replace(/\s/g, '') === `12`,
                        xp: 10
                    },

                    {
                        id: 'python-topic-03',
                        type: 'practice',
                        title: 'Conditionals',
                        description: 'Print Pass if score >= 60',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Print Pass if score >= 60</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `# print output
`,
                        solution: `score = 70
if score >= 60:
    print("Pass")`,
                        test: (output) => output.includes('Pass'),
                        xp: 10
                    },

                    {
                        id: 'python-topic-04',
                        type: 'practice',
                        title: 'Loops',
                        description: 'Print 1, 2, 3 with a for loop',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Print 1, 2, 3 with a for loop</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `# print output
`,
                        solution: `for i in range(1, 4):
    print(i)`,
                        test: (output) => output.replace(/\s/g, '') === `123`,
                        xp: 10
                    },

                    {
                        id: 'python-topic-05',
                        type: 'practice',
                        title: 'Functions',
                        description: 'Define square(n) and print square(4)',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Define square(n) and print square(4)</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `# print output
`,
                        solution: `def square(n):
    return n * n

print(square(4))`,
                        test: (output) => output.replace(/\s/g, '') === `16`,
                        xp: 10
                    }
                ],
                advancePractice: [

    // ========= LIST =========
    {
    id: 'py-adv-list-theory',
    type: 'theory',
    title: 'List (Array)',
    description: 'Store multiple values in one variable',
    content: `
        <div class="theory-content">
            <h4>What is a List?</h4>
            <p>A list is a collection of items stored in a single variable. It is similar to an array.</p>

            <h4>How it Works</h4>
            <p>Each element in a list has an index starting from <strong>0</strong>.</p>

            <h4>Properties of List</h4>
            <ul>
                <li>Ordered</li>
                <li>Changeable (mutable)</li>
                <li>Allows duplicate values</li>
                <li>Can store different data types</li>
            </ul>

            <h4>Example</h4>
            <div class="code-example">
<pre>numbers = [10, 20, 30]
print(numbers[0])
print(len(numbers))</pre>
            </div>

            <h4>Output</h4>
            <div class="code-example">
<pre>10
3</pre>
            </div>
        </div>
    `,
    xp: 10
},
//          STRING
{
    id: 'py-adv-string-theory',
    type: 'theory',
    title: 'String',
    description: 'Store, access and manipulate text data',

    content: `
        <div class="theory-content">
            <h4>What is a String?</h4>
            <p>A string is a sequence of characters used to store text data. 
            In Python, strings are written inside single (' ') or double (" ") quotes.</p>

            <h4>How it Works</h4>
            <p>Each character in a string has an index starting from <strong>0</strong>. 
            Strings are <strong>immutable</strong>, meaning their characters cannot be changed after creation.</p>

            <h4>Properties of String</h4>
            <ul>
                <li>Ordered</li>
                <li>Immutable (cannot modify directly)</li>
                <li>Allows duplicate characters</li>
                <li>Supports indexing and slicing</li>
            </ul>

            <h4>Example 1: Indexing and Length</h4>
            <div class="code-example">
<pre>text = "Python"
print(text[0])
print(text[3])
print(len(text))</pre>
            </div>

            <h4>Output</h4>
            <div class="code-example">
<pre>P
h
6</pre>
            </div>

            <h4>Example 2: Multiple Inputs</h4>
            <div class="code-example">
<pre>name = "Code"
language = "Python"

print(name)
print(language)
print(name + " " + language)</pre>
            </div>

            <h4>Output</h4>
            <div class="code-example">
<pre>Code
Python
Code Python</pre>
            </div>

            <h4>Example 3: ASCII Values</h4>
            <p>Every character has an ASCII value. You can get it using <code>ord()</code>.</p>

            <div class="code-example">
<pre>char = "A"
print(ord(char))

letter = "a"
print(ord(letter))</pre>
            </div>

            <h4>Output</h4>
            <div class="code-example">
<pre>65
97</pre>
            </div>

            <h4>Convert ASCII to Character</h4>
            <p>You can convert ASCII value back to character using <code>chr()</code>.</p>

            <div class="code-example">
<pre>print(chr(65))
print(chr(97))</pre>
            </div>

            <h4>Output</h4>
            <div class="code-example">
<pre>A
a</pre>
            </div>

            <h4>Common String Methods</h4>
            <div class="code-example">
<pre>text = "Python"
print(text.lower())
print(text.upper())
print(text.replace("P", "J"))</pre>
            </div>

            <h4>Output</h4>
            <div class="code-example">
<pre>python
PYTHON
Jython</pre>
            </div>

        </div>
    `,
    xp: 10
},

    // ========= STACK =========
{
    id: 'py-adv-stack-theory',
    type: 'theory',
    title: 'Stack (LIFO)',
    description: 'Understand stack data structure and its operations',

    content: `
        <div class="theory-content">
            <h4>What is a Stack?</h4>
            <p>A Stack is a linear data structure that follows the principle of 
            <strong>LIFO (Last In, First Out)</strong>. 
            The element inserted last will be removed first.</p>

            <h4>Real-Life Example</h4>
            <p>Think of a stack of plates. You place a plate on top (push), 
            and you remove the top plate first (pop).</p>

            <h4>Basic Operations</h4>
            <ul>
                <li><strong>Push:</strong> Add element to top</li>
                <li><strong>Pop:</strong> Remove top element</li>
                <li><strong>Peek:</strong> View top element</li>
                <li><strong>isEmpty:</strong> Check if stack is empty</li>
            </ul>

            <h4>Visual Representation</h4>
            <div class="code-example">
<pre>
        Top
         \u2193
       +----+
       | 20 |   \u2190 Last pushed
       +----+
       | 10 |
       +----+
       |  5 |
       +----+
</pre>
            </div>

            <p>If we <strong>pop()</strong>, 20 will be removed first.</p>

            <h4>Stack Implementation in Python</h4>
            <p>In Python, we use a list to implement a stack.</p>

            <div class="code-example">
<pre>stack = []

# Push elements
stack.append(10)
stack.append(20)
stack.append(30)

print("Stack after push:", stack)

# Pop element
stack.pop()

print("Stack after pop:", stack)</pre>
            </div>

            <h4>Output</h4>
            <div class="code-example">
<pre>Stack after push: [10, 20, 30]
Stack after pop: [10, 20]</pre>
            </div>

            <h4>Important Characteristics</h4>
            <ul>
                <li>Follows LIFO principle</li>
                <li>Insertion and deletion happen only at one end (top)</li>
                <li>Efficient O(1) time complexity for push and pop</li>
            </ul>

        </div>
    `,
    xp: 10
},

// ========= QUEUE TYPES THEORY =========
{
    id: 'py-adv-queue-types',
    type: 'theory',
    title: 'Types of Queue',
    description: 'Different variations of queue data structure',

    content: `
        <div class="theory-content">

            <h4>1\uFE0F\u20E3 Simple Queue (Linear Queue)</h4>
            <p>A basic queue that follows FIFO (First In, First Out).
            Elements are inserted at the rear and removed from the front.</p>

            <div class="code-example">
<pre>
Front \u2192  +----+  +----+  +----+  \u2190 Rear
          | 10 |  | 20 |  | 30 |
          +----+  +----+  +----+
</pre>
            </div>

            <p><strong>Limitation:</strong> Wasted space after many dequeue operations.</p>

            <hr>

            <h4>2\uFE0F\u20E3 Circular Queue</h4>
            <p>A circular queue connects the last position back to the first,
            forming a circle. This avoids wasted space.</p>

            <div class="code-example">
<pre>
        +----+      +----+
        | 40 |      | 10 |
        +----+      +----+
           \u2191            \u2193
        +----+ \u2190---- +----+
        | 30 |        | 20 |
        +----+        +----+
</pre>
            </div>

            <p>When the rear reaches the end, it wraps around to the front.</p>

            <hr>

            <h4>3\uFE0F\u20E3 Priority Queue</h4>
            <p>Elements are removed based on priority instead of insertion order.
            Highest (or lowest) priority element is removed first.</p>

            <div class="code-example">
<pre>
Elements with Priority:
(10, Priority 2)
(20, Priority 1)
(30, Priority 3)

Removed first \u2192 20 (Highest Priority)
</pre>
            </div>

            <p><strong>Python Example:</strong></p>

            <div class="code-example">
<pre>import heapq

pq = []
heapq.heappush(pq, 3)
heapq.heappush(pq, 1)
heapq.heappush(pq, 2)

print(heapq.heappop(pq))</pre>
            </div>

            <h5>Output</h5>
            <div class="code-example">
<pre>1</pre>
            </div>

            <hr>

            <h4>4\uFE0F\u20E3 Double Ended Queue (Deque)</h4>
            <p>A Deque (Double Ended Queue) allows insertion and deletion 
            from both front and rear.</p>

            <div class="code-example">
<pre>
Front \u2192  +----+  +----+  +----+  \u2190 Rear
          |  5 |  | 10 |  | 15 |
          +----+  +----+  +----+
Insert/Delete from BOTH sides
</pre>
            </div>

            <p><strong>Python Example:</strong></p>

            <div class="code-example">
<pre>from collections import deque

dq = deque()
dq.append(10)
dq.appendleft(5)

print(dq)</pre>
            </div>

            <h5>Output</h5>
            <div class="code-example">
<pre>deque([5, 10])</pre>
            </div>

            <hr>

            <h4>Summary</h4>
            <ul>
                <li><strong>Simple Queue:</strong> Basic FIFO</li>
                <li><strong>Circular Queue:</strong> Efficient memory usage</li>
                <li><strong>Priority Queue:</strong> Based on priority</li>
                <li><strong>Deque:</strong> Insert/delete from both ends</li>
            </ul>

        </div>
    `,
    xp: 10
},

    // ========= MAP / DICTIONARY =========
// ========= DICTIONARY (MAP) THEORY =========
{
    id: 'py-adv-map-theory',
    type: 'theory',
    title: 'Dictionary (Map)',
    description: 'Store data in key-value pairs',

    content: `
        <div class="theory-content">

            <h4>What is a Dictionary?</h4>
            <p>A Dictionary (also called Map in other languages) is a data structure 
            that stores data in <strong>key-value pairs</strong>.</p>

            <p>Each key is unique and maps to a specific value.</p>

            <h4>Dictionary Structure</h4>

            <div class="code-example">
<pre>
{
  "a": 10,
  "b": 20,
  "c": 30
}
</pre>
            </div>

            <p>Here:</p>
            <ul>
                <li>"a", "b", "c" \u2192 Keys</li>
                <li>10, 20, 30 \u2192 Values</li>
            </ul>

            <h4>Properties of Dictionary</h4>
            <ul>
                <li>Stores key-value pairs</li>
                <li>Keys must be unique</li>
                <li>Mutable (can modify values)</li>
                <li>Unordered (before Python 3.7)</li>
                <li>Fast lookup using keys (O(1))</li>
            </ul>

            <hr>

            <h4>Basic Example</h4>

            <div class="code-example">
<pre>data = {"a": 10, "b": 20}

print(data["a"])
print(data["b"])</pre>
            </div>

            <h4>Output</h4>
            <div class="code-example">
<pre>10
20</pre>
            </div>

            <hr>

            <h4>Common Dictionary Functions</h4>

            <div class="code-example">
<pre>data = {"a": 10, "b": 20}

# Add or Update
data["c"] = 30

# Remove element
data.pop("a")

# Get value safely
print(data.get("b"))

# Get all keys
print(data.keys())

# Get all values
print(data.values())

# Get key-value pairs
print(data.items())

# Check if key exists
print("b" in data)

# Clear dictionary
data.clear()</pre>
            </div>

            <h4>Output (before clear)</h4>
            <div class="code-example">
<pre>20
dict_keys(['b', 'c'])
dict_values([20, 30])
dict_items([('b', 20), ('c', 30)])
True</pre>
            </div>

            <hr>

            <h4>Looping Through Dictionary</h4>

            <div class="code-example">
<pre>data = {"x": 1, "y": 2}

for key, value in data.items():
    print(key, value)</pre>
            </div>

            <h4>Output</h4>
            <div class="code-example">
<pre>x 1
y 2</pre>
            </div>

            <hr>

            <h4>What is Map Function in Python?</h4>

            <p>The <code>map()</code> function is different from Dictionary (Map).</p>

            <p><strong>map()</strong> applies a function to every element in an iterable (like list).</p>

            <div class="code-example">
<pre>numbers = [1, 2, 3, 4]

def square(x):
    return x * x

result = map(square, numbers)

print(list(result))</pre>
            </div>

            <h4>Output</h4>
            <div class="code-example">
<pre>[1, 4, 9, 16]</pre>
            </div>

            <p>Here, map() applies the square function to each number.</p>

            <hr>

            <h4>Dictionary vs map() Function</h4>
            <ul>
                <li><strong>Dictionary:</strong> Stores key-value pairs</li>
                <li><strong>map():</strong> Applies function to iterable</li>
            </ul>

        </div>
    `,
    xp: 10
},

    // ========= LINKED LIST =========
{
    id: 'py-adv-linkedlist-theory',
    type: 'theory',
    title: 'Linked List',
    description: 'Understand linked list structure and types',

    content: `
        <div class="theory-content">

            <h4>What is a Linked List?</h4>
            <p>A Linked List is a linear data structure where elements (called nodes) 
            are connected using pointers. Unlike arrays, elements are not stored 
            in continuous memory locations.</p>

            <h4>Structure of a Node</h4>
            <ul>
                <li><strong>Data</strong> \u2192 Stores value</li>
                <li><strong>Next</strong> \u2192 Points to next node</li>
            </ul>

            <h4>Visual Representation (Singly Linked List)</h4>
            <div class="code-example">
<pre>
   Head
     \u2193
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510     \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510     \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  Data=1 \u2502  Next \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500> Data=2 \u2502  Next \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500> Data=3 \u2502  Next \u2192 NULL
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
</pre>
            </div>

            <p>Each node stores data and a reference to the next node.</p>

            <hr>

            <h4>Doubly Linked List Structure</h4>
            <div class="code-example">
<pre>
NULL \u2190 [Prev | 10 | Next] \u21C4 [Prev | 20 | Next] \u21C4 [Prev | 30 | Next] \u2192 NULL
</pre>
            </div>

            <p>Each node contains:</p>
            <ul>
                <li>Previous pointer</li>
                <li>Data</li>
                <li>Next pointer</li>
            </ul>

            <hr>

            <h4>Circular Linked List Structure</h4>
            <div class="code-example">
<pre>
        \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
        \u2502  Data=1 \u2502
        \u2514\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2518
             \u2193
        \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
        \u2502  Data=2 \u2502
        \u2514\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2518
             \u2193
        \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
        \u2502  Data=3 \u2502
        \u2514\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2518
             \u2191
             \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
</pre>
            </div>

            <p>The last node connects back to the first node.</p>

            <hr>

            <h4>Basic Python Example</h4>
            <div class="code-example">
<pre>class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

n1 = Node(1)
n2 = Node(2)
n1.next = n2

print(n1.data)
print(n1.next.data)</pre>
            </div>

            <h4>Output</h4>
            <div class="code-example">
<pre>1
2</pre>
            </div>

            <hr>

            <h4>Advantages</h4>
            <ul>
                <li>Dynamic size</li>
                <li>Efficient insertion and deletion</li>
            </ul>

            <h4>Disadvantages</h4>
            <ul>
                <li>No direct index access (O(n))</li>
                <li>Extra memory for pointers</li>
            </ul>

        </div>
    `,
    xp: 10
},

    // ========= BINARY TREE =========
// ========= BINARY TREE THEORY =========
{
    id: 'py-adv-binarytree-theory',
    type: 'theory',
    title: 'Binary Tree & Binary Search Tree',
    description: 'Understand tree structure and BST property',

    content: `
        <div class="theory-content">

            <h4>What is a Binary Tree?</h4>
            <p>A Binary Tree is a hierarchical data structure where 
            each node can have at most <strong>two children</strong>:
            <strong>left</strong> and <strong>right</strong>.</p>

            <h4>Basic Structure</h4>

            <div class="code-example">
<pre>
            10
           /  \\
          5    20
         / \\     \\
        3   7     30
</pre>
            </div>

            <p>Each node contains:</p>
            <ul>
                <li>Data (value)</li>
                <li>Left child</li>
                <li>Right child</li>
            </ul>

            <hr>

            <h4>Binary Tree Python Example</h4>

            <div class="code-example">
<pre>class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

root = Node(10)
root.left = Node(5)
root.right = Node(20)

print(root.val)
print(root.left.val)
print(root.right.val)</pre>
            </div>

            <h4>Output</h4>
            <div class="code-example">
<pre>10
5
20</pre>
            </div>

            <hr>

            <h4>What is a Binary Search Tree (BST)?</h4>
            <p>A Binary Search Tree is a special type of Binary Tree 
            that follows this rule:</p>

            <ul>
                <li>All values in left subtree are smaller than root</li>
                <li>All values in right subtree are greater than root</li>
            </ul>

            <h4>BST Structure</h4>

            <div class="code-example">
<pre>
            15
           /  \\
          10   25
         / \\     \\
        5  12     30
</pre>
            </div>

            <p>Here:</p>
            <ul>
                <li>10 &lt; 15 (Left side)</li>
                <li>25 &gt; 15 (Right side)</li>
            </ul>

            <hr>

            <h4>Why BST is Important?</h4>
            <ul>
                <li>Fast searching (O(log n))</li>
                <li>Efficient insertion</li>
                <li>Efficient deletion</li>
            </ul>

            <hr>

            <h4>Binary Tree vs Binary Search Tree</h4>

            <table border="1" cellpadding="6">
                <tr>
                    <th>Feature</th>
                    <th>Binary Tree</th>
                    <th>BST</th>
                </tr>
                <tr>
                    <td>Children Limit</td>
                    <td>Max 2</td>
                    <td>Max 2</td>
                </tr>
                <tr>
                    <td>Ordering Rule</td>
                    <td>No rule</td>
                    <td>Left &lt; Root &lt; Right</td>
                </tr>
                <tr>
                    <td>Search Speed</td>
                    <td>O(n)</td>
                    <td>O(log n)</td>
                </tr>
            </table>

            <hr>

            <h4>Time Complexity (Balanced BST)</h4>
            <ul>
                <li>Search: O(log n)</li>
                <li>Insert: O(log n)</li>
                <li>Delete: O(log n)</li>
            </ul>

        </div>
    `,
    xp: 10
},

    // ========= BFS =========
// ========= BFS THEORY =========
{
    id: 'py-adv-bfs-theory',
    type: 'theory',
    title: 'Breadth First Search (BFS)',
    description: 'Level order traversal using Queue',

    content: `
        <div class="theory-content">

            <h4>What is BFS?</h4>
            <p>Breadth First Search (BFS) is a traversal algorithm 
            that explores nodes level by level.</p>

            <p>It uses a <strong>Queue</strong> data structure.</p>

            <hr>

            <h4>Tree Example</h4>

            <div class="code-example">
<pre>
            1
           / \\
          2   3
         / \\ 
        4   5
</pre>
            </div>

            <h4>BFS Traversal Order</h4>
            <p>BFS visits nodes level by level:</p>

            <div class="code-example">
<pre>
Level 1 \u2192 1
Level 2 \u2192 2 3
Level 3 \u2192 4 5

Final BFS Order:
1 2 3 4 5
</pre>
            </div>

            <hr>

            <h4>How BFS Works</h4>
            <ul>
                <li>Start from root node</li>
                <li>Add root to queue</li>
                <li>Remove front node from queue</li>
                <li>Add its left and right children</li>
                <li>Repeat until queue becomes empty</li>
            </ul>

            <hr>

            <h4>Python Example (Using Queue)</h4>

            <div class="code-example">
<pre>from collections import deque

# Simple example list
q = deque([1, 2, 3])

while q:
    print(q.popleft())</pre>
            </div>

            <h4>Output</h4>
            <div class="code-example">
<pre>1
2
3</pre>
            </div>

            <hr>

            <h4>BFS on Binary Tree (Concept)</h4>

            <div class="code-example">
<pre>from collections import deque

def bfs(root):
    if not root:
        return

    queue = deque([root])

    while queue:
        node = queue.popleft()
        print(node.val)

        if node.left:
            queue.append(node.left)

        if node.right:
            queue.append(node.right)</pre>
            </div>

            <hr>

            <h4>Time Complexity</h4>
            <ul>
                <li>Time: O(n)</li>
                <li>Space: O(n)</li>
            </ul>

            <hr>

            <h4>Where BFS is Used</h4>
            <ul>
                <li>Level-order traversal</li>
                <li>Shortest path in unweighted graph</li>
                <li>Social network friend suggestions</li>
                <li>Web crawling</li>
            </ul>

        </div>
    `,
    xp: 10
},

    // ========= DFS =========
{
    id: "algorithm-topic-25",
    type: "theory",
    title: "Depth First Search (DFS)",
    description: "Understanding the DFS traversal algorithm used in graphs and trees",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

<h2>📌 Introduction</h2>

<p>
Depth First Search (DFS) is a graph traversal algorithm.
It explores as far as possible along each branch before backtracking.
DFS is commonly used in graphs, trees, maze solving, and path finding.
</p>

<hr>

<h2>🔹 1. How DFS Works</h2>

<p>
DFS starts from a node and visits its neighbor.
It keeps going deeper until no unvisited nodes remain,
then it backtracks to explore other paths.
</p>

<p>Example traversal order:</p>

<div class="code-example">
<pre><code>Graph:

    A
   / \\
  B   C
 / \\   \\
D   E   F

DFS Traversal:

A → B → D → E → C → F</code></pre>
</div>

<hr>

<h2>🔹 2. DFS Using Recursion (Python)</h2>

<div class="code-example">
<pre><code>graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': [],
    'F': []
}

visited = set()

def dfs(node):
    if node not in visited:
        print(node)
        visited.add(node)

        for neighbor in graph[node]:
            dfs(neighbor)

dfs('A')</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>A
B
D
E
C
F</code></pre>
</div>

<hr>

<h2>🔹 3. DFS Using Stack (Iterative)</h2>

<div class="code-example">
<pre><code>graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': [],
    'F': []
}

stack = ['A']
visited = set()

while stack:
    node = stack.pop()

    if node not in visited:
        print(node)
        visited.add(node)

        stack.extend(graph[node])</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>A
C
F
B
E
D</code></pre>
</div>

<hr>

<h2>🔹 4. Applications of DFS</h2>

<ul>
<li>Graph traversal</li>
<li>Maze solving</li>
<li>Topological sorting</li>
<li>Cycle detection</li>
<li>Connected components</li>
<li>Backtracking algorithms</li>
</ul>

<hr>

<h2>🔹 5. Time Complexity</h2>

<div class="code-example">
<pre><code>Time Complexity:  O(V + E)

V = Number of vertices
E = Number of edges</code></pre>
</div>

<hr>

<h2>🚀 Conclusion</h2>

<p>
Depth First Search is one of the fundamental graph algorithms.
It explores deeper nodes first before backtracking.
DFS is widely used in competitive programming,
graph theory, and problem solving.
</p>

</div>
`,
    xp: 20
},
{
    id: "python-topic-26",
    type: "theory",
    title: "Classes in Python",
    description: "Understanding how classes work in Python for object oriented programming",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

<h2>📌 Introduction</h2>

<p>
A class in Python is a blueprint used to create objects.
It allows developers to group data and functions together.
Classes are the foundation of Object-Oriented Programming (OOP).
</p>


<hr>

<h2>🔹 1. Creating a Class</h2>

<p>
In Python, a class is created using the <strong>class</strong> keyword.
</p>

<div class="code-example">
<pre><code>class Person:
    name = "Pritam"</code></pre>
</div>

<hr>

<h2>🔹 2. Creating an Object</h2>

<p>
An object is an instance of a class.
</p>

<div class="code-example">
<pre><code>class Person:
    name = "Pritam"

p1 = Person()

print(p1.name)</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Pritam</code></pre>
</div>

<hr>

<h2>🔹 3. Using __init__ Constructor</h2>

<p>
The <strong>__init__()</strong> method is a constructor that runs when
an object is created.
</p>

<div class="code-example">
<pre><code>class Person:

    def __init__(self, name, age):
        self.name = name
        self.age = age

p1 = Person("Rahul", 21)

print(p1.name)
print(p1.age)</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Rahul
21</code></pre>
</div>

<hr>

<h2>🔹 4. Class Methods</h2>

<p>
Classes can contain functions called methods.
</p>

<div class="code-example">
<pre><code>class Student:

    def __init__(self, name):
        self.name = name

    def greet(self):
        print("Hello", self.name)

s1 = Student("Pritam")

s1.greet()</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Hello Pritam</code></pre>
</div>

<hr>

<h2>🚀 Conclusion</h2>

<p>
Classes are a core part of Python programming.
They help organize code, represent real-world objects,
and enable powerful object-oriented programming concepts.
</p>

</div>
`,
    xp: 20
},
{
    id: "python-topic-27",
    type: "theory",
    title: "Encapsulation in Python",
    description: "Understanding how encapsulation protects data in object oriented programming",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

<h2>📌 Introduction</h2>

<p>
Encapsulation is one of the four main pillars of Object-Oriented Programming.
It means binding data and methods together inside a class
and restricting direct access to some parts of the object.
</p>

<div class="image-section">
<img src="assets/images/encapsulation.webp" alt="Encapsulation">
<p><em>Encapsulation protects internal data of a class.</em></p>
</div>

<hr>

<h2>🔹 1. What is Encapsulation?</h2>

<p>
Encapsulation hides the internal details of a class and allows
access only through specific methods.
</p>

<ul>
<li>Protects data from accidental modification</li>
<li>Improves code security</li>
<li>Improves maintainability</li>
</ul>

<hr>

<h2>🔹 2. Example Without Encapsulation</h2>

<div class="code-example">
<pre><code>class BankAccount:

    def __init__(self, balance):
        self.balance = balance

account = BankAccount(1000)

print(account.balance)</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>1000</code></pre>
</div>

<p>
Here the balance can be accessed directly.
</p>

<hr>

<h2>🔹 3. Encapsulation Using Private Variables</h2>

<p>
In Python, private variables are created using double underscores.
</p>

<div class="code-example">
<pre><code>class BankAccount:

    def __init__(self, balance):
        self.__balance = balance

    def show_balance(self):
        print(self.__balance)

account = BankAccount(2000)

account.show_balance()</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>2000</code></pre>
</div>

<hr>

<h2>🔹 4. Getter and Setter Methods</h2>

<p>
Getter and setter methods allow controlled access to private variables.
</p>

<div class="code-example">
<pre><code>class Student:

    def __init__(self):
        self.__marks = 0

    def set_marks(self, marks):
        self.__marks = marks

    def get_marks(self):
        return self.__marks

s = Student()

s.set_marks(95)

print(s.get_marks())</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>95</code></pre>
</div>

<hr>

<h2>🚀 Conclusion</h2>

<p>
Encapsulation ensures that sensitive data is protected
and can only be accessed through controlled methods.
It improves security, modularity, and maintainability
in object-oriented programs.
</p>

</div>
`,
    xp: 20
},
{
    id: "python-topic-28",
    type: "theory",
    title: "Inheritance in Python",
    description: "Understanding how classes inherit properties and methods from other classes",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

<h2>📌 Introduction</h2>

<p>
Inheritance is one of the core concepts of Object-Oriented Programming.
It allows one class to inherit properties and methods from another class.
This helps reuse code and build hierarchical relationships between classes.
</p>

<div class="image-section">
<img src="assets/images/inheritance_python.webp" alt="Python Inheritance">
<p><em>Child classes inherit properties and methods from parent classes.</em></p>
</div>

<hr>

<h2>🔹 1. What is Inheritance?</h2>

<p>
Inheritance allows a new class (child class) to use the features of an existing class (parent class).
</p>

<ul>
<li>Parent Class → Base class</li>
<li>Child Class → Derived class</li>
</ul>

<hr>

<h2>🔹 2. Basic Inheritance Example</h2>

<div class="code-example">
<pre><code>class Animal:

    def speak(self):
        print("Animal makes a sound")


class Dog(Animal):

    def bark(self):
        print("Dog barks")


d = Dog()

d.speak()
d.bark()</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Animal makes a sound
Dog barks</code></pre>
</div>

<p>
The Dog class inherits the speak() method from the Animal class.
</p>

<hr>

<h2>🔹 3. Using super() Function</h2>

<p>
The <strong>super()</strong> function allows a child class to call methods from the parent class.
</p>

<div class="code-example">
<pre><code>class Person:

    def __init__(self, name):
        self.name = name


class Student(Person):

    def __init__(self, name, grade):
        super().__init__(name)
        self.grade = grade


s = Student("Pritam", "A")

print(s.name)
print(s.grade)</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Pritam
A</code></pre>
</div>

<hr>

<h2>🔹 4. Types of Inheritance</h2>

<ul>
<li>Single Inheritance</li>
<li>Multiple Inheritance</li>
<li>Multilevel Inheritance</li>
<li>Hierarchical Inheritance</li>
<li>Hybrid Inheritance</li>
</ul>

<hr>

<h2>🚀 Conclusion</h2>

<p>
Inheritance allows classes to reuse existing code and create
a logical hierarchy between objects.
It improves maintainability and reduces duplication in programs.
</p>

</div>
`,
    xp: 20
},
{
    id: "python-topic-29",
    type: "theory",
    title: "Polymorphism in Python",
    description: "Understanding how the same method name can behave differently in different classes",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

<h2>📌 Introduction</h2>

<p>
Polymorphism is one of the four pillars of Object-Oriented Programming.
The word polymorphism means <strong>"many forms"</strong>.
It allows the same method name to perform different actions
depending on the object or class.
</p>

<div class="image-section">
<img src="assets/images/polymorphism_python.gif" alt="Python Polymorphism">
<p><em>One interface, multiple implementations.</em></p>
</div>

<hr>

<h2>🔹 1. What is Polymorphism?</h2>

<p>
Polymorphism allows objects of different classes
to respond to the same method call in different ways.
</p>

<ul>
<li>Same method name</li>
<li>Different behavior</li>
<li>Improves flexibility</li>
</ul>

<hr>

<h2>🔹 2. Polymorphism Example</h2>

<div class="code-example">
<pre><code>class Dog:

    def sound(self):
        print("Dog barks")


class Cat:

    def sound(self):
        print("Cat meows")


d = Dog()
c = Cat()

d.sound()
c.sound()</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Dog barks
Cat meows</code></pre>
</div>

<p>
Both classes use the same method name <strong>sound()</strong>,
but the behavior is different.
</p>

<hr>

<h2>🔹 3. Polymorphism with Functions</h2>

<div class="code-example">
<pre><code>class Bird:

    def fly(self):
        print("Bird flies")


class Airplane:

    def fly(self):
        print("Airplane flies")


def start_flying(obj):
    obj.fly()


b = Bird()
a = Airplane()

start_flying(b)
start_flying(a)</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Bird flies
Airplane flies</code></pre>
</div>

<hr>

<h2>🔹 4. Method Overriding</h2>

<p>
Polymorphism often appears through method overriding,
where a child class provides its own implementation
of a parent class method.
</p>

<div class="code-example">
<pre><code>class Animal:

    def speak(self):
        print("Animal makes sound")


class Dog(Animal):

    def speak(self):
        print("Dog barks")


d = Dog()

d.speak()</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Dog barks</code></pre>
</div>

<hr>

<h2>🚀 Conclusion</h2>

<p>
Polymorphism allows the same interface to be used for different data types.
It improves flexibility, scalability, and code reuse in
object-oriented programming.
</p>

</div>
`,
    xp: 20
},
{
    id: "python-topic-30",
    type: "theory",
    title: "Abstraction in Python",
    description: "Understanding how abstraction hides complex implementation details",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

<h2>📌 Introduction</h2>

<p>
Abstraction is one of the four pillars of Object-Oriented Programming.
It focuses on hiding complex internal implementation details
and showing only the necessary features of an object.
</p>

<div class="image-section">
<img src="assets/images/abstraction.jpg" alt="Python Abstraction">
<p><em>Abstraction hides complexity and shows only essential functionality.</em></p>
</div>

<hr>

<h2>🔹 1. What is Abstraction?</h2>

<p>
Abstraction allows programmers to interact with objects
without knowing how they are implemented internally.
</p>

<ul>
<li>Hides internal implementation</li>
<li>Shows only required functionality</li>
<li>Improves code readability</li>
<li>Reduces complexity</li>
</ul>

<hr>

<h2>🔹 2. Real Life Example</h2>

<p>
When you drive a car, you use the steering wheel, accelerator,
and brakes without knowing the internal engine mechanism.
This is abstraction.
</p>

<hr>

<h2>🔹 3. Abstraction Using Abstract Classes</h2>

<p>
Python provides abstraction using the <strong>abc module</strong>
(Abstract Base Classes).
</p>

<div class="code-example">
<pre><code>from abc import ABC, abstractmethod


class Animal(ABC):

    @abstractmethod
    def sound(self):
        pass


class Dog(Animal):

    def sound(self):
        print("Dog barks")


d = Dog()

d.sound()</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Dog barks</code></pre>
</div>

<hr>

<h2>🔹 4. Why Abstraction is Important</h2>

<ul>
<li>Reduces program complexity</li>
<li>Improves code maintainability</li>
<li>Encourages modular design</li>
<li>Provides a clear interface</li>
</ul>

<hr>

<h2>🚀 Conclusion</h2>

<p>
Abstraction hides internal implementation details
and exposes only the necessary functionality.
It makes complex systems easier to use and maintain
in object-oriented programming.
</p>

</div>
`,
    xp: 20
},
{
    id: "python-topic-31",
    type: "theory",
    title: "List Comprehension in Python",
    description: "Creating lists in a concise and efficient way",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}
</style>

<div class="theory-content">

<h2>📌 Introduction</h2>

<p>
List comprehension is a concise way to create lists in Python.
It allows developers to generate lists using a single line of code
instead of writing multiple lines with loops.
</p>

<hr>

<h2>🔹 1. Basic List Creation</h2>

<div class="code-example">
<pre><code>numbers = [1, 2, 3, 4, 5]

print(numbers)</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>[1, 2, 3, 4, 5]</code></pre>
</div>

<hr>

<h2>🔹 2. Using List Comprehension</h2>

<p>
List comprehension allows creating lists using a single expression.
</p>

<div class="code-example">
<pre><code>squares = [x*x for x in range(5)]

print(squares)</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>[0, 1, 4, 9, 16]</code></pre>
</div>

<hr>

<h2>🔹 3. List Comprehension with Condition</h2>

<div class="code-example">
<pre><code>even_numbers = [x for x in range(10) if x % 2 == 0]

print(even_numbers)</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>[0, 2, 4, 6, 8]</code></pre>
</div>

<hr>

<h2>🔹 4. Advantages of List Comprehension</h2>

<ul>
<li>Shorter and cleaner code</li>
<li>Faster execution</li>
<li>Improves readability</li>
<li>Widely used in data processing</li>
</ul>

<hr>

<h2>🚀 Conclusion</h2>

<p>
List comprehension is a powerful feature in Python
that allows developers to create lists in a concise,
readable, and efficient way.
</p>

</div>
`,
    xp: 20
},
{
    id: "python-topic-32",
    type: "theory",
    title: "Decorators in Python",
    description: "Understanding how decorators modify the behavior of functions",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}
</style>

<div class="theory-content">

<h2>📌 Introduction</h2>

<p>
A decorator in Python is a function that modifies the behavior
of another function without changing its actual code.
Decorators are widely used for logging, authentication,
timing functions, and access control.
</p>

<hr>

<h2>🔹 1. Functions as Objects</h2>

<p>
In Python, functions can be passed as arguments to other functions.
</p>

<div class="code-example">
<pre><code>def greet():
    print("Hello")

def call_function(func):
    func()

call_function(greet)</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Hello</code></pre>
</div>

<hr>

<h2>🔹 2. Creating a Decorator</h2>

<div class="code-example">
<pre><code>def my_decorator(func):

    def wrapper():
        print("Before function runs")
        func()
        print("After function runs")

    return wrapper


def say_hello():
    print("Hello World")

decorated = my_decorator(say_hello)

decorated()</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Before function runs
Hello World
After function runs</code></pre>
</div>

<hr>

<h2>🔹 3. Using @ Decorator Syntax</h2>

<p>
Python provides a cleaner way to apply decorators using the <strong>@</strong> symbol.
</p>

<div class="code-example">
<pre><code>def my_decorator(func):

    def wrapper():
        print("Start")
        func()
        print("End")

    return wrapper


@my_decorator
def greet():
    print("Hello")

greet()</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Start
Hello
End</code></pre>
</div>

<hr>

<h2>🔹 4. Why Decorators Are Useful</h2>

<ul>
<li>Add functionality to existing functions</li>
<li>Avoid code repetition</li>
<li>Improve code organization</li>
<li>Used in frameworks like Flask and Django</li>
</ul>

<hr>

<h2>🚀 Conclusion</h2>

<p>
Decorators provide a powerful way to extend or modify
function behavior without altering the original function.
They are widely used in advanced Python programming
and web development frameworks.
</p>

</div>
`,
    xp: 10
},
{
    id: "python-topic-33",
    type: "theory",
    title: "Generators in Python",
    description: "Understanding how generators produce values lazily using yield",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}
</style>

<div class="theory-content">

<h2>📌 Introduction</h2>

<p>
Generators are a special type of function in Python that return
an iterator. Instead of returning all values at once,
generators produce values one at a time using the <strong>yield</strong> keyword.
</p>

<p>
This makes generators memory efficient and useful for working with
large data sets.
</p>

<hr>

<h2>🔹 1. Normal Function Example</h2>

<div class="code-example">
<pre><code>def numbers():
    return [1, 2, 3]

print(numbers())</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>[1, 2, 3]</code></pre>
</div>

<p>
This function returns all values at once.
</p>

<hr>

<h2>🔹 2. Generator Function Using yield</h2>

<div class="code-example">
<pre><code>def numbers():

    yield 1
    yield 2
    yield 3

gen = numbers()

print(next(gen))
print(next(gen))
print(next(gen))</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>1
2
3</code></pre>
</div>

<p>
Each call to <strong>next()</strong> returns the next value.
</p>

<hr>

<h2>🔹 3. Generator with Loop</h2>

<div class="code-example">
<pre><code>def count_up_to(n):

    for i in range(n):
        yield i

for num in count_up_to(5):
    print(num)</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>0
1
2
3
4</code></pre>
</div>

<hr>

<h2>🔹 4. Advantages of Generators</h2>

<ul>
<li>Memory efficient</li>
<li>Lazy evaluation</li>
<li>Good for large datasets</li>
<li>Improves performance</li>
</ul>

<hr>

<h2>🚀 Conclusion</h2>

<p>
Generators allow Python programs to produce values one at a time
instead of storing everything in memory.
They are useful when working with large data streams
or infinite sequences.
</p>

</div>
`,
    xp: 10
},
{
    id: "python-topic-34",
    type: "theory",
    title: "File Handling in Python",
    description: "Understanding how to create, read, write, and append files in Python",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}
</style>

<div class="theory-content">

<h2>📌 Introduction</h2>

<p>
File handling allows Python programs to store data permanently
by reading from or writing to files. This is useful when working
with logs, configuration files, or user data.
</p>

<hr>

<h2>🔹 1. Opening a File</h2>

<p>
Python provides the <strong>open()</strong> function to open a file.
</p>

<div class="code-example">
<pre><code>file = open("example.txt", "r")</code></pre>
</div>

<p>
Common file modes:
</p>

<ul>
<li><strong>r</strong> → Read file</li>
<li><strong>w</strong> → Write file (overwrites)</li>
<li><strong>a</strong> → Append file</li>
<li><strong>x</strong> → Create file</li>
</ul>

<hr>

<h2>🔹 2. Reading a File</h2>

<div class="code-example">
<pre><code>file = open("example.txt", "r")

content = file.read()

print(content)

file.close()</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Hello Python</code></pre>
</div>

<hr>

<h2>🔹 3. Writing to a File</h2>

<div class="code-example">
<pre><code>file = open("example.txt", "w")

file.write("Hello Python")

file.close()</code></pre>
</div>

<p>
This will create or overwrite the file.
</p>

<hr>

<h2>🔹 4. Appending to a File</h2>

<div class="code-example">
<pre><code>file = open("example.txt", "a")

file.write("\\nWelcome to file handling")

file.close()</code></pre>
</div>

<h4>Output (file content):</h4>

<div class="code-example">
<pre><code>Hello Python
Welcome to file handling</code></pre>
</div>

<hr>

<h2>🔹 5. Using with Statement</h2>

<p>
The <strong>with</strong> statement automatically closes the file.
</p>

<div class="code-example">
<pre><code>with open("example.txt", "r") as file:
    print(file.read())</code></pre>
</div>

<hr>

<h2>🚀 Conclusion</h2>

<p>
File handling allows Python programs to store and retrieve
data from files. Using the with statement is recommended
because it automatically manages file closing.
</p>

</div>
`,
    xp: 10
},
{
    id: "python-topic-35",
    type: "theory",
    title: "Exception Handling in Python",
    description: "Handling runtime errors using try, except, else, and finally",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}
</style>

<div class="theory-content">

<h2>📌 Introduction</h2>

<p>
Exception handling allows Python programs to deal with runtime errors
without crashing the program. When an error occurs, Python raises an
exception which can be handled using special blocks like
<strong>try</strong> and <strong>except</strong>.
</p>

<hr>

<h2>🔹 1. Basic try and except</h2>

<div class="code-example">
<pre><code>try:
    x = 10 / 0
except:
    print("An error occurred")</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>An error occurred</code></pre>
</div>

<p>
Here the program does not crash even though division by zero occurs.
</p>

<hr>

<h2>🔹 2. Catching Specific Exceptions</h2>

<div class="code-example">
<pre><code>try:
    number = int("abc")
except ValueError:
    print("Invalid conversion")</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Invalid conversion</code></pre>
</div>

<hr>

<h2>🔹 3. Using else Block</h2>

<p>
The <strong>else</strong> block executes if no exception occurs.
</p>

<div class="code-example">
<pre><code>try:
    num = 10 / 2
except:
    print("Error occurred")
else:
    print("Result:", num)</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Result: 5.0</code></pre>
</div>

<hr>

<h2>🔹 4. Using finally Block</h2>

<p>
The <strong>finally</strong> block always runs whether an exception occurs or not.
</p>

<div class="code-example">
<pre><code>try:
    print("Running program")
except:
    print("Error")
finally:
    print("Execution finished")</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Running program
Execution finished</code></pre>
</div>

<hr>

<h2>🔹 5. Raising Custom Exceptions</h2>

<div class="code-example">
<pre><code>age = 16

if age < 18:
    raise Exception("You must be 18 or older")</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Exception: You must be 18 or older</code></pre>
</div>

<hr>

<h2>🚀 Conclusion</h2>

<p>
Exception handling helps make programs more reliable and user friendly.
By handling errors properly, developers can prevent unexpected crashes
and provide meaningful error messages.
</p>

</div>
`,
    xp: 10
},
{
    id: "python-topic-36",
    type: "theory",
    title: "Modules and Packages in Python",
    description: "Understanding how Python organizes code using modules and packages",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}
</style>

<div class="theory-content">

<h2>📌 Introduction</h2>

<p>
As Python programs grow larger, it becomes important to organize code properly.
Python provides <strong>modules</strong> and <strong>packages</strong>
to structure programs into reusable components.
</p>

<hr>

<h2>🔹 1. What is a Module?</h2>

<p>
A module is simply a Python file containing functions, variables,
or classes that can be reused in other programs.
</p>

<div class="code-example">
<pre><code># file: math_operations.py

def add(a, b):
    return a + b</code></pre>
</div>

<p>
This file can be imported and used in another program.
</p>

<hr>

<h2>🔹 2. Importing a Module</h2>

<div class="code-example">
<pre><code>import math_operations

result = math_operations.add(5, 3)

print(result)</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>8</code></pre>
</div>

<hr>

<h2>🔹 3. Import Specific Function</h2>

<p>
You can import only the required functions from a module.
</p>

<div class="code-example">
<pre><code>from math_operations import add

print(add(10, 5))</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>15</code></pre>
</div>

<hr>

<h2>🔹 4. What is a Package?</h2>

<p>
A package is a collection of multiple modules organized in a folder.
It helps manage large projects by grouping related modules together.
</p>

<div class="code-example">
<pre><code>project/
│
├── main.py
├── utils/
│   ├── __init__.py
│   ├── math_tools.py
│   └── string_tools.py</code></pre>
</div>

<p>
The <strong>__init__.py</strong> file tells Python that the folder
should be treated as a package.
</p>

<hr>

<h2>🔹 5. Built-in Modules</h2>

<p>
Python also provides many built-in modules such as:
</p>

<ul>
<li>math</li>
<li>random</li>
<li>datetime</li>
<li>os</li>
<li>sys</li>
</ul>

<div class="code-example">
<pre><code>import math

print(math.sqrt(16))</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>4.0</code></pre>
</div>

<hr>

<h2>🚀 Conclusion</h2>

<p>
Modules and packages help organize Python code into reusable,
manageable components. They make large projects easier to maintain
and encourage code reuse across applications.
</p>

</div>
`,
    xp: 10
}


],
},
            javascript: {
                basics: [
                    {
                        id: 'js-intro',
                        type: 'theory',
                        title: 'Introduction to JavaScript',
                        description: 'Learn about the language of the web',
                        content: `
                            <div class="theory-content">
                                <h4>What is JavaScript?</h4>
                                <p>JavaScript is the programming language of the web. It allows you to create interactive, dynamic websites and web applications.</p>
                                
                                <h4>Why Learn JavaScript?</h4>
                                <ul>
                                    <li><strong>Universal:</strong> Runs in every web browser</li>
                                    <li><strong>Versatile:</strong> Frontend, backend, mobile apps, games, and more</li>
                                    <li><strong>In-Demand:</strong> Most popular programming language for web development</li>
                                    <li><strong>Active Community:</strong> Huge ecosystem of libraries and frameworks</li>
                                </ul>

                                <h4>JavaScript Powers</h4>
                                <ul>
                                    <li>Interactive websites (buttons, forms, animations)</li>
                                    <li>Web applications (Gmail, Facebook, Twitter)</li>
                                    <li>Mobile apps (React Native)</li>
                                    <li>Server applications (Node.js)</li>
                                    <li>Games and visualizations</li>
                                </ul>

                                <div class="info-box">
                                    <strong>\u{1F4DD} JavaScript vs Java</strong>
                                    <p>Despite the similar names, JavaScript and Java are completely different languages! JavaScript was named to capitalize on Java's popularity in 1995.</p>
                                </div>

                                <h4>Your First JavaScript</h4>
                                <div class="code-example">
<pre>console.log("Hello, JavaScript!");</pre>
                                </div>

                                <p>This displays a message in the browser's console (developer tools).</p>
                            </div>
                        `,
                        xp: 10
                    },
                    {
                        id: 'js-console',
                        type: 'practice',
                        title: 'Console Output',
                        description: 'Your first JavaScript program',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>\u{1F3AF} Challenge Goal</h4>
                                    <ul>
                                        <li>Use console.log() to print "Hello, JavaScript!"</li>
                                    </ul>
                                </div>

                                <div class="info-box">
                                    <strong>\u{1F4DD} About console.log()</strong>
                                    <p>This is JavaScript's way of printing output. Don't forget the semicolon at the end (though it's optional in modern JavaScript).</p>
                                </div>
                            </div>
                        `,
                        starterCode: `// Write your code here\n`,
                        solution: `console.log("Hello, JavaScript!");`,
                        test: (output) => output.trim() === 'Hello, JavaScript!',
                        xp: 10
                    },
                    {
                        id: 'js-variables-theory',
                        type: 'theory',
                        title: 'Variables in JavaScript',
                        description: 'Store and manipulate data',
                        content: `
                            <div class="theory-content">
                                <h4>Declaring Variables</h4>
                                <p>JavaScript has three ways to declare variables:</p>
                                
                                <div class="code-example">
<pre>let name = "Alice";      <span class="code-comment">// Can be reassigned</span>
const age = 25;          <span class="code-comment">// Cannot be reassigned</span>
var city = "New York";   <span class="code-comment">// Old way (avoid using)</span></pre>
                                </div>

                                <div class="info-box tip">
                                    <strong>\u{1F4A1} Best Practice</strong>
                                    <p>Use <code>const</code> by default. Only use <code>let</code> if you need to reassign the variable. Avoid <code>var</code>.</p>
                                </div>

                                <h4>Data Types</h4>
                                <div class="code-example">
<pre><span class="code-comment">// String</span>
let name = "John";

<span class="code-comment">// Number</span>
let age = 30;
let price = 19.99;

<span class="code-comment">// Boolean</span>
let isStudent = true;

<span class="code-comment">// Undefined</span>
let something;

<span class="code-comment">// Null</span>
let empty = null;</pre>
                                </div>

                                <h4>Variable Naming</h4>
                                <ul>
                                    <li>Use camelCase: firstName, lastName, studentAge</li>
                                    <li>Start with a letter, $, or _</li>
                                    <li>Case-sensitive (age \u2260 Age)</li>
                                    <li>Cannot use reserved words (let, const, if, etc.)</li>
                                </ul>

                                <h4>String Operations</h4>
                                <div class="code-example">
<pre><span class="code-comment">// Concatenation</span>
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

<span class="code-comment">// Template literals (modern way)</span>
let greeting = \`Hello, \${firstName}!\`;
console.log(greeting);  <span class="code-comment">// Hello, John!</span></pre>
                                </div>
                            </div>
                        `,
                        xp: 10
                    },
                    {
                        id: 'js-variables-practice',
                        type: 'practice',
                        title: 'Working with Variables',
                        description: 'Create and use JavaScript variables',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>\u{1F3AF} Challenge Goal</h4>
                                    <ul>
                                        <li>Create a const variable "message" with value "Learning JavaScript"</li>
                                        <li>Log it to the console</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// Create your variable\n\n// Log it\n`,
                        solution: `const message = "Learning JavaScript";\nconsole.log(message);`,
                        test: (output) => output.includes('Learning JavaScript'),
                        xp: 10
                    }
                ],
                functions: [
                    {
                        id: 'js-functions-theory',
                        type: 'theory',
                        title: 'Functions',
                        description: 'Reusable blocks of code',
                        content: `
                            <div class="theory-content">
                                <h4>What are Functions?</h4>
                                <p>Functions are reusable blocks of code that perform specific tasks.</p>

                                <h4>Function Declaration</h4>
                                <div class="code-example">
<pre>function greet() {
    console.log("Hello!");
}

<span class="code-comment">// Call the function</span>
greet();  <span class="code-comment">// Output: Hello!</span></pre>
                                </div>

                                <h4>Functions with Parameters</h4>
                                <div class="code-example">
<pre>function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice");  <span class="code-comment">// Output: Hello, Alice!</span>
greet("Bob");    <span class="code-comment">// Output: Hello, Bob!</span></pre>
                                </div>

                                <h4>Return Values</h4>
                                <div class="code-example">
<pre>function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
console.log(sum);  <span class="code-comment">// Output: 8</span></pre>
                                </div>

                                <h4>Arrow Functions (Modern Syntax)</h4>
                                <div class="code-example">
<pre><span class="code-comment">// Traditional function</span>
function square(x) {
    return x * x;
}

<span class="code-comment">// Arrow function</span>
const square = (x) => {
    return x * x;
};

<span class="code-comment">// Arrow function (concise)</span>
const square = x => x * x;</pre>
                                </div>

                                <div class="info-box tip">
                                    <strong>\u{1F4A1} Why Use Functions?</strong>
                                    <ul>
                                        <li>Avoid repeating code</li>
                                        <li>Make code more organized</li>
                                        <li>Easier to test and debug</li>
                                        <li>Can be reused multiple times</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        xp: 10
                    },
                    {
                        id: 'js-functions-practice',
                        type: 'practice',
                        title: 'Create Functions',
                        description: 'Practice writing functions',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>\u{1F3AF} Challenge Goal</h4>
                                    <ul>
                                        <li>Create a function called multiply that takes two parameters</li>
                                        <li>Return the product of the two numbers</li>
                                        <li>Call the function with 4 and 5 and log the result</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// Create your function\n\n// Call it and log result\n`,
                        solution: `function multiply(a, b) {\n    return a * b;\n}\nconsole.log(multiply(4, 5));`,
                        test: (output) => output.includes('20'),
                        xp: 10
                    }
                ],

                

                overview: [
                    {
                        id: 'javascript-overview',
                        type: 'theory',
                        title: 'JavaScript Course Overview',
                        description: 'What you will learn and how to practice',
                        content: `
                            <div class="theory-content">
                                <h4>What you will learn</h4>
                                <p>This course is organized to build from fundamentals to practical problem solving. You will learn core syntax, data handling, decision making, and repetition patterns that appear in real-world code.</p>
                                <h4>How to use the lessons</h4>
                                <p>Read the theory, then immediately try the practice tasks. Each task is short and focused on one concept so you build speed and confidence.</p>
                                <h4>Progress and XP</h4>
                                <p>Finishing lessons marks them complete, increases XP, and counts toward your streak. The practice challenges in this course award more XP.</p>
                            </div>
                        `,
                        xp: 10
                    }
                ],

                
                
                topicPractice: [

                    {
                        id: 'javascript-topic-01',
                        type: 'practice',
                        title: 'Variables',
                        description: 'Create const x = 10 and print it',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Create const x = 10 and print it</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// print output
`,
                        solution: `const x = 10;
console.log(x);`,
                        test: (output) => output.replace(/\s/g, '') === `10`,
                        xp: 10
                    },

                    {
                        id: 'javascript-topic-02',
                        type: 'practice',
                        title: 'Arithmetic',
                        description: 'Print 7 + 5',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Print 7 + 5</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// print output
`,
                        solution: `console.log(7 + 5);`,
                        test: (output) => output.replace(/\s/g, '') === `12`,
                        xp: 10
                    },

                    {
                        id: 'javascript-topic-03',
                        type: 'practice',
                        title: 'Conditionals',
                        description: 'If score >= 60 print Pass',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>If score >= 60 print Pass</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// print output
`,
                        solution: `const score = 70;
if (score >= 60) {
  console.log("Pass");
}`,
                        test: (output) => output.includes('Pass'),
                        xp: 10
                    },

                    {
                        id: 'javascript-topic-04',
                        type: 'practice',
                        title: 'Loops',
                        description: 'Print 1, 2, 3 with a loop',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Print 1, 2, 3 with a loop</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// print output
`,
                        solution: `for (let i = 1; i <= 3; i++) {
  console.log(i);
}`,
                        test: (output) => output.replace(/\s/g, '') === `123`,
                        xp: 10
                    },

                    {
                        id: 'javascript-topic-05',
                        type: 'practice',
                        title: 'Functions',
                        description: 'Define square(n) and print square(4)',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Define square(n) and print square(4)</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// print output
`,
                        solution: `function square(n) { return n * n; }
console.log(square(4));`,
                        test: (output) => output.replace(/\s/g, '') === `16`,
                        xp: 10
                    }
                ],
                advanced: [
                    {
    id: "javascript-topic-06",
    type: "theory",
    title: "Arrays and Objects",
    description: "Store grouped data in JavaScript",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
}

table th, table td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
}
</style>

<div class="theory-content">

    <h2>\u{1F4CC} Introduction</h2>
    <p>
        Arrays and Objects are non-primitive data types in JavaScript.
        They allow storing multiple values in a single structure.
        Arrays store ordered collections.
        Objects store key-value data.
    </p>

    <hr>

    <h2>\u{1F539} 1. Arrays in JavaScript</h2>

    <p>
        An Array stores multiple values in an ordered list.
        Each value has an index starting from 0.
    </p>

    <div class="image-section">
        <img 
            src="assets/images/array.jpg"
            alt="Array Structure"
        >
        <p><em>Array elements are accessed using index numbers.</em></p>
    </div>

    <h3>\u2705 Creating an Array</h3>

    <div class="code-example">
<pre><code>const numbers = [10, 20, 30, 40];

console.log(numbers);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>[10, 20, 30, 40]</code></pre>
    </div>

    <h3>\u2705 Accessing Array Elements</h3>

    <div class="code-example">
<pre><code>const numbers = [10, 20, 30];

console.log(numbers[0]);
console.log(numbers[2]);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>10
30</code></pre>
    </div>

    <h3>\u2705 Array Length</h3>

    <div class="code-example">
<pre><code>const arr = [1, 2, 3];

console.log(arr.length);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>3</code></pre>
    </div>

    <hr>

    <h2>\u{1F539} 2. Objects in JavaScript</h2>

    <p>
        Objects store data in key-value pairs.
        Each property has a key and value.
    </p>

    <div class="image-section">
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Object-oriented_programming.svg"
            alt="Object Structure"
        >
        <p><em>Objects store data using key-value pairs.</em></p>
    </div>

    <h3>\u2705 Creating an Object</h3>

    <div class="code-example">
<pre><code>const user = {
    name: "Pritam",
    score: 95,
    city: "Midnapore"
};

console.log(user);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>{ name: "Pritam", score: 95, city: "Midnapore" }</code></pre>
    </div>

    <h3>\u2705 Accessing Object Properties</h3>

    <div class="code-example">
<pre><code>const user = { score: 95 };

console.log(user.score);
console.log(user["score"]);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>95
95</code></pre>
    </div>

    <hr>

    <h2>\u{1F3AF} Real World Example</h2>

    <div class="code-example">
<pre><code>const students = [
    { name: "Rahul", marks: 80 },
    { name: "Anita", marks: 90 }
];

console.log(students[1].name);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>Anita</code></pre>
    </div>

    <hr>

    <h2>\u{1F680} Conclusion</h2>
    <p>
        Arrays are best for ordered collections.
        Objects are best for structured data.
        Real applications use both together.
    </p>

</div>
`,
    xp: 20
},
                    {
    id: "javascript-topic-07",
    type: "theory",
    title: "Data Types in JavaScript",
    description: "Understanding different types of data in JavaScript",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

    <h2>\u{1F4CC} Introduction</h2>
    <p>
        Data Types define the kind of value a variable can hold.
        JavaScript has two main categories of data types:
        Primitive and Non-Primitive.
    </p>

    <hr>

    <h2>\u{1F539} 1. Primitive Data Types</h2>

    <p>
        Primitive data types store single values and are immutable.
    </p>

    <div class="image-section">
        <img 
            src="assets/images/datatypes.jpg"
            alt="Primitive Data Types"
        >
        <p><em>Primitive data types in JavaScript.</em></p>
    </div>

    <h3>\u2705 String</h3>

    <div class="code-example">
<pre><code>const name = "Pritam";

console.log(typeof name);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>string</code></pre>
    </div>

    <h3>\u2705 Number</h3>

    <div class="code-example">
<pre><code>const age = 21;

console.log(typeof age);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>number</code></pre>
    </div>

    <h3>\u2705 Boolean</h3>

    <div class="code-example">
<pre><code>const isStudent = true;

console.log(typeof isStudent);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>boolean</code></pre>
    </div>

    <h3>\u2705 Undefined</h3>

    <div class="code-example">
<pre><code>let score;

console.log(typeof score);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>undefined</code></pre>
    </div>

    <h3>\u2705 Null</h3>

    <div class="code-example">
<pre><code>const value = null;

console.log(typeof value);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>object</code></pre>
    </div>

    <p>
        \u26A0 Note: typeof null returns "object" due to a historical JavaScript bug.
    </p>

    <hr>

    <h2>\u{1F539} 2. Non-Primitive Data Types</h2>

    <p>
        Non-Primitive data types can store collections of values.
        These include Objects, Arrays, and Functions.
    </p>

    <h3>\u2705 Object</h3>

    <div class="code-example">
<pre><code>const user = {
    name: "Pritam",
    score: 95
};

console.log(typeof user);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>object</code></pre>
    </div>

    <h3>\u2705 Array</h3>

    <div class="code-example">
<pre><code>const numbers = [1, 2, 3];

console.log(typeof numbers);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>object</code></pre>
    </div>

    <h3>\u2705 Function</h3>

    <div class="code-example">
<pre><code>function greet() {
    return "Hello";
}

console.log(typeof greet);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>function</code></pre>
    </div>

    <hr>

    <h2>\u{1F680} Conclusion</h2>
    <p>
        Understanding data types is fundamental in JavaScript.
        Primitive types store single values.
        Non-Primitive types store collections or complex structures.
        Mastering data types helps prevent logical errors in applications.
    </p>

</div>
`,
    xp: 20
},
                    {
    id: "javascript-topic-08",
    type: "theory",
    title: "Operators in JavaScript",
    description: "Understanding different types of operators in JavaScript",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

    <h2>\u{1F4CC} Introduction</h2>
    <p>
        Operators are symbols used to perform operations on values.
        JavaScript provides different types of operators for calculations,
        comparisons, logical decisions, and more.
    </p>

    <div class="image-section">
        <img 
            src="assets/images/operators.avif"
            alt="JavaScript Operators"
        >
        <p><em>Operators help perform operations on data.</em></p>
    </div>

    <hr>

    <h2>\u{1F539} 1. Arithmetic Operators</h2>

    <p>
        Used for mathematical calculations.
    </p>

    <div class="code-example">
<pre><code>const a = 10;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>15
5
50
2</code></pre>
    </div>

    <hr>

    <h2>\u{1F539} 2. Comparison Operators</h2>

    <p>
        Used to compare two values.
        They return true or false.
    </p>

    <div class="code-example">
<pre><code>console.log(10 > 5);
console.log(10 === "10");
console.log(10 == "10");</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>true
false
true</code></pre>
    </div>

    <hr>

    <h2>\u{1F539} 3. Logical Operators</h2>

    <p>
        Used to combine multiple conditions.
    </p>

    <div class="code-example">
<pre><code>console.log(true && false);
console.log(true || false);
console.log(!true);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>false
true
false</code></pre>
    </div>

    <hr>

    <h2>\u{1F539} 4. Ternary Operator</h2>

    <p>
        A shorthand for if-else statements.
    </p>

    <div class="code-example">
<pre><code>const age = 18;

const result = age >= 18 ? "Adult" : "Minor";

console.log(result);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>Adult</code></pre>
    </div>

    <hr>

    <h2>\u{1F680} Conclusion</h2>
    <p>
        Operators are essential in JavaScript.
        They allow calculations, comparisons, and logical decisions.
        Understanding operators is necessary for writing effective programs.
    </p>

</div>
`,
    xp: 20
},
{
    id: "javascript-topic-09",
    type: "theory",
    title: "Type Conversion in JavaScript",
    description: "Understanding implicit and explicit type conversion",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

    <h2>\u{1F4CC} Introduction</h2>
    <p>
        Type Conversion is the process of converting a value from one data type to another.
        JavaScript automatically converts types when needed (Implicit Conversion),
        and developers can also manually convert types (Explicit Conversion).
    </p>

    <div class="image-section">
        <img 
            src="assets/images/type.png"
            alt="Type Conversion in JavaScript"
        >
        <p><em>JavaScript can convert data types automatically or manually.</em></p>
    </div>

    <hr>

    <h2>\u{1F539} 1. Implicit Type Conversion (Coercion)</h2>

    <p>
        JavaScript automatically converts data types when performing operations.
    </p>

    <div class="code-example">
<pre><code>console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>52
3
2</code></pre>
    </div>

    <p>
        Explanation:
        - "5" + 2 \u2192 string concatenation
        - "5" - 2 \u2192 number conversion
        - true becomes 1
    </p>

    <hr>

    <h2>\u{1F539} 2. Explicit Type Conversion</h2>

    <p>
        Explicit conversion is done manually using built-in functions.
    </p>

    <h3>\u2705 Convert to Number</h3>

    <div class="code-example">
<pre><code>const value = "100";

console.log(Number(value));
console.log(parseInt(value));</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>100
100</code></pre>
    </div>

    <h3>\u2705 Convert to String</h3>

    <div class="code-example">
<pre><code>const num = 50;

console.log(String(num));</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>"50"</code></pre>
    </div>

    <h3>\u2705 Convert to Boolean</h3>

    <div class="code-example">
<pre><code>console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>true
false
false</code></pre>
    </div>

    <hr>

    <h2>\u{1F539} 3. Truthy and Falsy Values</h2>

    <p>
        Some values are automatically treated as false.
    </p>

    <div class="code-example">
<pre><code>console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean("Hello"));</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>false
false
false
true</code></pre>
    </div>

    <hr>

    <h2>\u{1F680} Conclusion</h2>
    <p>
        Type Conversion is very important in JavaScript because it is loosely typed.
        Understanding implicit and explicit conversion helps avoid unexpected bugs.
        Always be careful when comparing different data types.
    </p>

</div>
`,
    xp: 20
},
{
    id: "javascript-topic-10",
    type: "theory",
    title: "Functions in JavaScript",
    description: "Understanding how functions work in JavaScript",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

    <h2>\u{1F4CC} Introduction</h2>
    <p>
        A function is a reusable block of code designed to perform a specific task.
        Functions help make code modular, reusable, and organized.
    </p>

    <div class="image-section">
        <img 
            src="assets/images/function.png"
            alt="JavaScript Functions"
        >
        <p><em>Functions allow code reuse and modular programming.</em></p>
    </div>

    <hr>

    <h2>\u{1F539} 1. Function Declaration</h2>

    <p>
        A function declaration defines a named function using the <strong>function</strong> keyword.
    </p>

    <div class="code-example">
<pre><code>function greet() {
    return "Hello, World!";
}

console.log(greet());</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>Hello, World!</code></pre>
    </div>

    <hr>

    <h2>\u{1F539} 2. Function with Parameters</h2>

    <p>
        Functions can accept inputs called parameters.
    </p>

    <div class="code-example">
<pre><code>function add(a, b) {
    return a + b;
}

console.log(add(5, 3));</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>8</code></pre>
    </div>

    <hr>

    <h2>\u{1F539} 3. Function Expression</h2>

    <p>
        A function can also be stored inside a variable.
    </p>

    <div class="code-example">
<pre><code>const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 3));</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>12</code></pre>
    </div>

    <hr>

    <h2>\u{1F539} 4. Arrow Functions (ES6)</h2>

    <p>
        Arrow functions provide a shorter syntax for writing functions.
    </p>

    <div class="code-example">
<pre><code>const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(10, 4));</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>6</code></pre>
    </div>

    <hr>

    <h2>\u{1F539} 5. Default Parameters</h2>

    <p>
        Functions can have default parameter values.
    </p>

    <div class="code-example">
<pre><code>function greetUser(name = "Guest") {
    return "Hello " + name;
}

console.log(greetUser());
console.log(greetUser("Pritam"));</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>Hello Guest
Hello Pritam</code></pre>
    </div>

    <hr>

    <h2>\u{1F680} Conclusion</h2>
    <p>
        Functions are fundamental building blocks in JavaScript.
        They help structure code, improve readability, and enable reuse.
        Mastering different function types is essential for real-world development.
    </p>

</div>
`,
    xp: 20
},
{
    id: "javascript-topic-11",
    type: "theory",
    title: "Scope in JavaScript",
    description: "Understanding Global, Function, and Block Scope",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

    <h2>\u{1F4CC} Introduction</h2>
    <p>
        Scope determines where variables and functions are accessible in your code.
        It controls the visibility and lifetime of variables.
    </p>

    <div class="image-section">
        <img 
            src="assets/images/scope.jpg"
            alt="JavaScript Scope"
        >
        <p><em>Scope defines where variables can be accessed.</em></p>
    </div>

    <hr>

    <h2>\u{1F539} 1. Global Scope</h2>

    <p>
        Variables declared outside any function are globally scoped.
        They can be accessed anywhere in the program.
    </p>

    <div class="code-example">
<pre><code>const siteName = "My Website";

function showName() {
    console.log(siteName);
}

showName();</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>My Website</code></pre>
    </div>

    <hr>

    <h2>\u{1F539} 2. Function Scope</h2>

    <p>
        Variables declared inside a function are accessible only inside that function.
    </p>

    <div class="code-example">
<pre><code>function test() {
    const message = "Hello";
    console.log(message);
}

test();</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>Hello</code></pre>
    </div>

    <p>
        Trying to access <strong>message</strong> outside the function will cause an error.
    </p>

    <hr>

    <h2>\u{1F539} 3. Block Scope (let & const)</h2>

    <p>
        Variables declared using <strong>let</strong> and <strong>const</strong>
        are block scoped. They are accessible only inside the block {}.
    </p>

    <div class="code-example">
<pre><code>{
    let age = 21;
    console.log(age);
}</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>21</code></pre>
    </div>

    <hr>

    <h2>\u{1F539} 4. Lexical Scope</h2>

    <p>
        JavaScript uses lexical scope, meaning inner functions
        can access variables from outer functions.
    </p>

    <div class="code-example">
<pre><code>function outer() {
    const name = "Pritam";

    function inner() {
        console.log(name);
    }

    inner();
}

outer();</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>Pritam</code></pre>
    </div>

    <hr>

    <h2>\u{1F680} Conclusion</h2>
    <p>
        Scope controls accessibility of variables.
        Understanding scope helps prevent bugs and variable conflicts.
        Always keep scope as limited as possible for clean code.
    </p>

</div>
`,
    xp: 20
},
{
    id: "javascript-topic-12",
    type: "theory",
    title: "Hoisting in JavaScript",
    description: "Understanding how JavaScript moves declarations to the top",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

    <h2>\u{1F4CC} Introduction</h2>
    <p>
        Hoisting is JavaScript's default behavior of moving declarations 
        to the top of the current scope before code execution.
    </p>

    <div class="image-section">
        <img 
            src="assets/images/hosting.jpg"
            alt="JavaScript Hoisting"
        >
        <p><em>Declarations are moved to the top before execution.</em></p>
    </div>

    <hr>

    <h2>\u{1F539} 1. Variable Hoisting (var)</h2>

    <p>
        Variables declared with <strong>var</strong> are hoisted,
        but only the declaration is hoisted \u2014 not the initialization.
    </p>

    <div class="code-example">
<pre><code>console.log(x);

var x = 10;</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>undefined</code></pre>
    </div>

    <p>
        Internally JavaScript treats it like:
    </p>

    <div class="code-example">
<pre><code>var x;
console.log(x);
x = 10;</code></pre>
    </div>

    <hr>

    <h2>\u{1F539} 2. let and const Hoisting</h2>

    <p>
        Variables declared with <strong>let</strong> and <strong>const</strong>
        are hoisted but not initialized.
        Accessing them before declaration causes an error.
    </p>

    <div class="code-example">
<pre><code>console.log(y);

let y = 5;</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>ReferenceError</code></pre>
    </div>

    <p>
        This happens because of the Temporal Dead Zone (TDZ).
    </p>

    <hr>

    <h2>\u{1F539} 3. Function Hoisting</h2>

    <p>
        Function declarations are fully hoisted.
    </p>

    <div class="code-example">
<pre><code>greet();

function greet() {
    console.log("Hello");
}</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>Hello</code></pre>
    </div>

    <hr>

    <h2>\u{1F539} 4. Function Expression Hoisting</h2>

    <p>
        Function expressions are NOT fully hoisted.
    </p>

    <div class="code-example">
<pre><code>sayHi();

var sayHi = function() {
    console.log("Hi");
};</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>TypeError</code></pre>
    </div>

    <hr>

    <h2>\u{1F680} Conclusion</h2>
    <p>
        Hoisting can cause unexpected behavior if not understood properly.
        Always declare variables at the top and prefer <strong>let</strong> 
        or <strong>const</strong> over <strong>var</strong>.
    </p>

</div>
`,
    xp: 20
},
{
    id: "javascript-topic-13",
    type: "theory",
    title: "Closures in JavaScript",
    description: "Understanding how closures preserve outer function scope",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

    <h2>\u{1F4CC} Introduction</h2>
    <p>
        A closure is created when a function remembers and accesses 
        variables from its outer (lexical) scope even after the outer 
        function has finished executing.
    </p>

    <div class="image-section">
        <img 
            src="assets/images/closure.png"
            alt="JavaScript Closures"
        >
        <p><em>Inner functions retain access to outer variables.</em></p>
    </div>

    <hr>

    <h2>\u{1F539} 1. Basic Example of Closure</h2>

    <div class="code-example">
<pre><code>function outer() {
    const name = "Pritam";

    function inner() {
        console.log(name);
    }

    return inner;
}

const myFunc = outer();
myFunc();</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>Pritam</code></pre>
    </div>

    <p>
        Even though the outer function has finished execution,
        the inner function still remembers the variable <strong>name</strong>.
    </p>

    <hr>

    <h2>\u{1F539} 2. Closure with Counter Example</h2>

    <div class="code-example">
<pre><code>function counter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

const increment = counter();

increment();
increment();
increment();</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>1
2
3</code></pre>
    </div>

    <p>
        The variable <strong>count</strong> is preserved between function calls.
        This is possible because of closures.
    </p>

    <hr>

    <h2>\u{1F539} 3. Why Closures Are Important</h2>

    <ul>
        <li>Data privacy</li>
        <li>Maintaining state</li>
        <li>Used in event handlers</li>
        <li>Used in callbacks</li>
        <li>Used in frameworks like React</li>
    </ul>

    <hr>

    <h2>\u{1F680} Conclusion</h2>
    <p>
        Closures are one of the most powerful concepts in JavaScript.
        They allow functions to maintain access to outer variables,
        making state management possible without global variables.
    </p>

</div>
`,
    xp: 20
},
{
    id: "javascript-topic-14",
    type: "theory",
    title: "Callback Functions in JavaScript",
    description: "Understanding how functions are passed as arguments",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

    <h2>\u{1F4CC} Introduction</h2>
    <p>
        A callback function is a function passed as an argument to another function.
        It is executed after the main function finishes its task.
    </p>

    <div class="image-section">
        <img 
            src="assets/images/callback.png"
            alt="JavaScript Callback Function"
        >
        <p><em>A function passed inside another function.</em></p>
    </div>

    <hr>

    <h2>\u{1F539} 1. Basic Callback Example</h2>

    <div class="code-example">
<pre><code>function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    const userName = "Pritam";
    callback(userName);
}

processUser(greet);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>Hello Pritam</code></pre>
    </div>

    <hr>

    <h2>\u{1F539} 2. Anonymous Callback</h2>

    <p>
        We can also pass an anonymous function as a callback.
    </p>

    <div class="code-example">
<pre><code>processUser(function(name) {
    console.log("Welcome " + name);
});</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>Welcome Pritam</code></pre>
    </div>

    <hr>

    <h2>\u{1F539} 3. Callbacks in Asynchronous Code</h2>

    <p>
        Callbacks are commonly used in asynchronous operations.
    </p>

    <div class="code-example">
<pre><code>setTimeout(function() {
    console.log("Executed after 2 seconds");
}, 2000);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>Executed after 2 seconds</code></pre>
    </div>

    <hr>

    <h2>\u{1F539} 4. Why Callbacks Are Important</h2>

    <ul>
        <li>Used in asynchronous programming</li>
        <li>Used in event handling</li>
        <li>Used in array methods like map, filter</li>
        <li>Foundation for Promises and Async/Await</li>
    </ul>

    <hr>

    <h2>\u{1F680} Conclusion</h2>
    <p>
        Callback functions allow flexibility and asynchronous execution.
        They are essential for handling events, timers, and server responses.
        Understanding callbacks is crucial for modern JavaScript development.
    </p>

</div>
`,
    xp: 20
},
{
    id: "javascript-topic-15",
    type: "theory",
    title: "Higher Order Functions in JavaScript",
    description: "Understanding functions that take or return other functions",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

    <h2>\u{1F4CC} Introduction</h2>
    <p>
        A Higher Order Function (HOF) is a function that either:
        <br>\u2022 Takes another function as an argument
        <br>\u2022 Returns another function
        <br><br>
        JavaScript treats functions as first-class citizens,
        meaning they can be passed and returned like variables.
    </p>

    <div class="image-section">
        <img 
            src="assets/images/javascript-higher-order-functions.png"
            alt="Higher Order Functions"
        >
        <p><em>Functions can accept and return other functions.</em></p>
    </div>

    <hr>

    <h2>\u{1F539} 1. Function Taking Another Function</h2>

    <div class="code-example">
<pre><code>function greet(name) {
    return "Hello " + name;
}

function processUser(callback) {
    const user = "Pritam";
    console.log(callback(user));
}

processUser(greet);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>Hello Pritam</code></pre>
    </div>

    <hr>

    <h2>\u{1F539} 2. Function Returning Another Function</h2>

    <div class="code-example">
<pre><code>function multiplier(x) {
    return function(y) {
        return x * y;
    };
}

const double = multiplier(2);

console.log(double(5));</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>10</code></pre>
    </div>

    <p>
        Here, <strong>multiplier</strong> returns a new function.
        This also creates a closure.
    </p>

    <hr>

    <h2>\u{1F539} 3. Real-World Example (Array Methods)</h2>

    <div class="code-example">
<pre><code>const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function(num) {
    return num * 2;
});

console.log(doubled);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>[2, 4, 6, 8]</code></pre>
    </div>

    <p>
        The <strong>map()</strong> method is a higher order function
        because it takes a function as an argument.
    </p>

    <hr>

    <h2>\u{1F680} Conclusion</h2>
    <p>
        Higher Order Functions make JavaScript powerful and flexible.
        They are heavily used in functional programming,
        array methods, and asynchronous operations.
    </p>

</div>
`,
    xp: 20
},
{
    id: "javascript-topic-16",
    type: "theory",
    title: "Pure vs Impure Functions in JavaScript",
    description: "Understanding side effects and predictable functions",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

    <h2>\u{1F4CC} Introduction</h2>
    <p>
        Functions in JavaScript can be classified as Pure or Impure.
        Understanding this difference is important for writing predictable
        and maintainable code.
    </p>

    <div class="image-section">
        <img 
            src="assets/images/pure.png"
            alt="Pure vs Impure Functions"
        >
        <p><em>Pure functions are predictable. Impure functions have side effects.</em></p>
    </div>

    <hr>

    <h2>\u{1F539} 1. Pure Function</h2>

    <p>
        A pure function:
        <br>\u2022 Always returns the same output for the same input
        <br>\u2022 Has no side effects
        <br>\u2022 Does not modify external variables
    </p>

    <div class="code-example">
<pre><code>function add(a, b) {
    return a + b;
}

console.log(add(2, 3));
console.log(add(2, 3));</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>5
5</code></pre>
    </div>

    <p>
        The result is always the same for the same inputs.
    </p>

    <hr>

    <h2>\u{1F539} 2. Impure Function</h2>

    <p>
        An impure function:
        <br>\u2022 May produce different outputs for the same input
        <br>\u2022 Has side effects
        <br>\u2022 Modifies external state
    </p>

    <div class="code-example">
<pre><code>let total = 0;

function addToTotal(value) {
    total += value;
    return total;
}

console.log(addToTotal(5));
console.log(addToTotal(5));</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>5
10</code></pre>
    </div>

    <p>
        The output changes because the function modifies external variable <strong>total</strong>.
    </p>

    <hr>

    <h2>\u{1F539} 3. Why Pure Functions Are Important</h2>

    <ul>
        <li>Easier to test</li>
        <li>Predictable behavior</li>
        <li>No unexpected side effects</li>
        <li>Better for functional programming</li>
        <li>Used heavily in React and Redux</li>
    </ul>

    <hr>

    <h2>\u{1F680} Conclusion</h2>
    <p>
        Pure functions improve code reliability and maintainability.
        Impure functions can be useful but should be handled carefully.
        Writing more pure functions leads to cleaner architecture.
    </p>

</div>
`,
    xp: 20
},
{
    id: "javascript-topic-17",
    type: "theory",
    title: "Advanced Objects in JavaScript",
    description: "Understanding object methods, keys, values and destructuring",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

    <h2>\u{1F4CC} Introduction</h2>
    <p>
        Objects are one of the most important data structures in JavaScript.
        Advanced object concepts help in managing complex data efficiently.
    </p>

  

    <hr>

    <h2>\u{1F539} 1. Object Methods</h2>

    <p>
        Objects can contain functions as properties.
        These are called methods.
    </p>

    <div class="code-example">
<pre><code>const user = {
    name: "Pritam",
    greet: function() {
        return "Hello " + this.name;
    }
};

console.log(user.greet());</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>Hello Pritam</code></pre>
    </div>

    <hr>

    <h2>\u{1F539} 2. Object.keys(), Object.values(), Object.entries()</h2>

    <div class="code-example">
<pre><code>const person = {
    name: "Rahul",
    age: 22
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>["name", "age"]
["Rahul", 22]
[["name", "Rahul"], ["age", 22]]</code></pre>
    </div>

    <hr>

    <h2>\u{1F539} 3. Object Destructuring</h2>

    <p>
        Destructuring allows extracting properties from objects easily.
    </p>

    <div class="code-example">
<pre><code>const student = {
    name: "Anita",
    marks: 90
};

const { name, marks } = student;

console.log(name);
console.log(marks);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>Anita
90</code></pre>
    </div>

    <hr>

    <h2>\u{1F539} 4. Spread Operator with Objects</h2>

    <div class="code-example">
<pre><code>const user1 = { name: "Amit" };
const user2 = { ...user1, age: 25 };

console.log(user2);</code></pre>
    </div>

    <h4>Output:</h4>

    <div class="code-example">
<pre><code>{ name: "Amit", age: 25 }</code></pre>
    </div>

    <hr>

    <h2>\u{1F680} Conclusion</h2>
    <p>
        Advanced object techniques improve data manipulation and readability.
        Mastering object methods and destructuring is essential for modern JavaScript development.
    </p>

</div>
`,
    xp: 20
},
{
    id: "javascript-topic-19",
    type: "theory",
    title: "Destructuring in JavaScript",
    description: "Extract values from arrays and objects easily",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

<h2>\u{1F4CC} Introduction</h2>

<p>
Destructuring is a JavaScript feature introduced in ES6 that allows
extracting values from arrays or objects and assigning them to variables
in a simpler way.
</p>

<div class="image-section">
<img src="assets/images/distructering.png" alt="JavaScript Destructuring">
<p><em>Destructuring simplifies extracting data from arrays and objects.</em></p>
</div>

<hr>

<h2>\u{1F539} 1. Array Destructuring</h2>

<p>
Array destructuring allows us to assign array elements to variables easily.
</p>

<div class="code-example">
<pre><code>const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a);
console.log(b);
console.log(c);</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>10
20
30</code></pre>
</div>

<hr>

<h2>\u{1F539} 2. Skipping Values</h2>

<p>
We can skip elements while destructuring arrays.
</p>

<div class="code-example">
<pre><code>const numbers = [1, 2, 3];

const [first, , third] = numbers;

console.log(first);
console.log(third);</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>1
3</code></pre>
</div>

<hr>

<h2>\u{1F539} 3. Object Destructuring</h2>

<p>
Object destructuring extracts properties from objects.
</p>

<div class="code-example">
<pre><code>const user = {
    name: "Pritam",
    age: 21
};

const { name, age } = user;

console.log(name);
console.log(age);</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Pritam
21</code></pre>
</div>

<hr>

<h2>\u{1F539} 4. Renaming Variables</h2>

<p>
You can rename variables while destructuring objects.
</p>

<div class="code-example">
<pre><code>const user = {
    name: "Rahul",
    age: 25
};

const { name: username } = user;

console.log(username);</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Rahul</code></pre>
</div>

<hr>

<h2>\u{1F680} Conclusion</h2>

<p>
Destructuring makes code cleaner and more readable.
It is widely used in modern JavaScript, especially in
frameworks like React when handling props and API data.
</p>

</div>
`,
    xp: 20
},
{
    id: "javascript-topic-20",
    type: "theory",
    title: "Spread Operator in JavaScript",
    description: "Understanding how to expand arrays and objects using ...",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

<h2>\u{1F4CC} Introduction</h2>

<p>
The <strong>Spread Operator (...)</strong> is used to expand elements of an
array or properties of an object into individual values.
It was introduced in ES6 and is widely used in modern JavaScript.
</p>

<div class="image-section">
<img src="assets/images/javascript-spread-operator.png" alt="Spread Operator">
<p><em>The spread operator expands elements of arrays or objects.</em></p>
</div>

<hr>

<h2>\u{1F539} 1. Spread with Arrays</h2>

<p>
The spread operator can copy or expand elements of an array.
</p>

<div class="code-example">
<pre><code>const numbers = [1, 2, 3];

const newNumbers = [...numbers];

console.log(newNumbers);</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>[1, 2, 3]</code></pre>
</div>

<hr>

<h2>\u{1F539} 2. Merging Arrays</h2>

<p>
We can merge multiple arrays using the spread operator.
</p>

<div class="code-example">
<pre><code>const arr1 = [1, 2];
const arr2 = [3, 4];

const merged = [...arr1, ...arr2];

console.log(merged);</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>[1, 2, 3, 4]</code></pre>
</div>

<hr>

<h2>\u{1F539} 3. Spread with Objects</h2>

<p>
The spread operator can also copy object properties.
</p>

<div class="code-example">
<pre><code>const user = {
    name: "Pritam",
    age: 21
};

const newUser = {
    ...user,
    city: "Kolkata"
};

console.log(newUser);</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>{
name: "Pritam",
age: 21,
city: "Kolkata"
}</code></pre>
</div>

<hr>

<h2>\u{1F539} 4. Spread in Function Arguments</h2>

<p>
The spread operator can pass array elements as individual arguments.
</p>

<div class="code-example">
<pre><code>function add(a, b, c) {
    return a + b + c;
}

const nums = [5, 10, 15];

console.log(add(...nums));</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>30</code></pre>
</div>

<hr>

<h2>\u{1F680} Conclusion</h2>

<p>
The spread operator makes it easier to copy arrays,
merge data, and work with objects.
It is commonly used in modern JavaScript and frameworks
like React for state updates.
</p>

</div>
`,
    xp: 20
},
{
    id: "javascript-topic-21",
    type: "theory",
    title: "Rest Operator in JavaScript",
    description: "Understanding how the rest operator collects multiple values",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

<h2>\u{1F4CC} Introduction</h2>

<p>
The <strong>Rest Operator (...)</strong> is used to collect multiple values
into a single array. It is commonly used in functions when we want to
accept an unlimited number of arguments.
</p>

<div class="image-section">
<img src="assets/images/rest.png" alt="Rest Operator">
<p><em>The rest operator collects remaining elements into an array.</em></p>
</div>

<hr>

<h2>\u{1F539} 1. Rest Operator in Functions</h2>

<p>
The rest operator allows a function to accept multiple arguments.
</p>

<div class="code-example">
<pre><code>function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(5, 10, 15));</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>30</code></pre>
</div>

<hr>

<h2>\u{1F539} 2. Rest Operator with Array Destructuring</h2>

<p>
The rest operator can collect the remaining elements of an array.
</p>

<div class="code-example">
<pre><code>const numbers = [1, 2, 3, 4, 5];

const [first, ...rest] = numbers;

console.log(first);
console.log(rest);</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>1
[2, 3, 4, 5]</code></pre>
</div>

<hr>

<h2>\u{1F539} 3. Rest Operator with Objects</h2>

<p>
The rest operator can also collect remaining properties of an object.
</p>

<div class="code-example">
<pre><code>const user = {
    name: "Pritam",
    age: 21,
    city: "Midnapore"
};

const { name, ...details } = user;

console.log(name);
console.log(details);</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Pritam
{ age: 21, city: "Midnapore" }</code></pre>
</div>

<hr>

<h2>\u{1F539} 4. Difference Between Spread and Rest</h2>

<p>
Although they use the same syntax <strong>...</strong>,
their purpose is different.
</p>

<ul>
<li><strong>Spread:</strong> Expands elements</li>
<li><strong>Rest:</strong> Collects elements</li>
</ul>

<hr>

<h2>\u{1F680} Conclusion</h2>

<p>
The rest operator simplifies handling multiple arguments
and collecting remaining elements from arrays or objects.
It is widely used in modern JavaScript development.
</p>

</div>
`,
    xp: 20
},
{
    id: "javascript-topic-22",
    type: "theory",
    title: "Template Literals in JavaScript",
    description: "Using backticks to create dynamic strings easily",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

<h2>\u{1F4CC} Introduction</h2>

<p>
Template literals are a modern way to work with strings in JavaScript.
They were introduced in ES6 and use <strong>backticks (\` \`)</strong>
instead of single or double quotes.
</p>

<hr>

<h2>\u{1F539} 1. Basic Template Literal</h2>

<p>
Template literals use backticks instead of quotes.
</p>

<div class="code-example">
<pre><code>const name = "Pritam";

const message = \`Hello \${name}\`;

console.log(message);</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Hello Pritam</code></pre>
</div>

<hr>

<h2>\u{1F539} 2. Expression Inside Template Literals</h2>

<p>
We can insert expressions using <strong>\${ }</strong>.
</p>

<div class="code-example">
<pre><code>const a = 5;
const b = 10;

console.log(\`Sum is \${a + b}\`);</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Sum is 15</code></pre>
</div>

<hr>

<h2>\u{1F539} 3. Multi-line Strings</h2>

<p>
Template literals allow multi-line strings without using \\n.
</p>

<div class="code-example">
<pre><code>const text = \`This is line one
This is line two
This is line three\`;

console.log(text);</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>This is line one
This is line two
This is line three</code></pre>
</div>

<hr>

<h2>\u{1F539} 4. Using Template Literals in HTML</h2>

<p>
Template literals are often used for generating HTML dynamically.
</p>

<div class="code-example">
<pre><code>const user = "Pritam";

const html = \`<h1>Welcome \${user}</h1>\`;

console.log(html);</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code><h1>Welcome Pritam</h1></code></pre>
</div>

<hr>

<h2>\u{1F680} Conclusion</h2>

<p>
Template literals make string manipulation easier and cleaner.
They are widely used in modern JavaScript for dynamic strings,
HTML templates, and API responses.
</p>

</div>
`,
    xp: 20
},
{
    id: "javascript-topic-23",
    type: "theory",
    title: "JSON in JavaScript",
    description: "Understanding JSON format and how to convert data using JSON.parse and JSON.stringify",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

<h2>\u{1F4CC} Introduction</h2>

<p>
JSON stands for <strong>JavaScript Object Notation</strong>.  
It is a lightweight data format used to store and exchange data between
servers and applications.
</p>

<div class="image-section">
<img src="assets/images/json.jpg" alt="JSON Format">
<p><em>JSON is widely used for data exchange in web applications.</em></p>
</div>

<hr>

<h2>\u{1F539} 1. JSON Structure</h2>

<p>
JSON looks very similar to JavaScript objects but follows strict rules.
Keys and string values must be written in double quotes.
</p>

<div class="code-example">
<pre><code>{
"name": "Pritam",
"age": 21,
"city": "Midnapore"
}</code></pre>
</div>

<hr>

<h2>\u{1F539} 2. Converting Object to JSON (JSON.stringify)</h2>

<p>
The <strong>JSON.stringify()</strong> method converts a JavaScript object
into a JSON string.
</p>

<div class="code-example">
<pre><code>const user = {
name: "Pritam",
age: 21
};

const jsonData = JSON.stringify(user);

console.log(jsonData);</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>{"name":"Pritam","age":21}</code></pre>
</div>

<hr>

<h2>\u{1F539} 3. Converting JSON to Object (JSON.parse)</h2>

<p>
The <strong>JSON.parse()</strong> method converts JSON data back
into a JavaScript object.
</p>

<div class="code-example">
<pre><code>const jsonText = '{"name":"Rahul","age":22}';

const obj = JSON.parse(jsonText);

console.log(obj.name);</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Rahul</code></pre>
</div>

<hr>

<h2>\u{1F539} 4. Why JSON is Important</h2>

<ul>
<li>Used in APIs</li>
<li>Used for sending data between server and client</li>
<li>Lightweight and easy to read</li>
<li>Supported by almost every programming language</li>
</ul>

<hr>

<h2>\u{1F680} Conclusion</h2>

<p>
JSON is a fundamental part of modern web development.
It is used to exchange data between front-end and back-end systems.
Understanding JSON.parse() and JSON.stringify() is essential
for working with APIs and databases.
</p>

</div>
`,
    xp: 20
},
{
    id: "javascript-topic-24",
    type: "theory",
    title: "Synchronous vs Asynchronous JavaScript",
    description: "Understanding blocking and non-blocking code execution",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

<h2>\u{1F4CC} Introduction</h2>

<p>
JavaScript executes code in a single thread.  
This means tasks run one after another.  
However, JavaScript also supports asynchronous behavior to handle tasks
like API requests, timers, and file operations without blocking execution.
</p>

<div class="image-section">
<img src="assets/images/synchornous.png" alt="Synchronous vs Asynchronous">
<p><em>Understanding blocking vs non-blocking execution.</em></p>
</div>

<hr>

<h2>\u{1F539} 1. Synchronous JavaScript</h2>

<p>
In synchronous execution, code runs line by line.
Each operation waits for the previous one to finish.
</p>

<div class="code-example">
<pre><code>console.log("Start");

console.log("Processing...");

console.log("End");</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Start
Processing...
End</code></pre>
</div>

<p>
Every statement waits for the previous one to finish executing.
</p>

<hr>

<h2>\u{1F539} 2. Asynchronous JavaScript</h2>

<p>
Asynchronous code allows certain operations to run in the background
without blocking the rest of the program.
</p>

<div class="code-example">
<pre><code>console.log("Start");

setTimeout(function() {
    console.log("Task completed");
}, 2000);

console.log("End");</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Start
End
Task completed</code></pre>
</div>

<p>
The timer runs in the background, so the program continues executing.
</p>

<hr>

<h2>\u{1F539} 3. Why Asynchronous Programming is Important</h2>

<ul>
<li>Handles API requests</li>
<li>Prevents UI freezing</li>
<li>Allows background tasks</li>
<li>Improves application performance</li>
</ul>

<hr>

<h2>\u{1F539} 4. Common Asynchronous Features</h2>

<ul>
<li>Callbacks</li>
<li>Promises</li>
<li>Async / Await</li>
<li>setTimeout / setInterval</li>
<li>Fetch API</li>
</ul>

<hr>

<h2>\u{1F680} Conclusion</h2>

<p>
Synchronous code executes step by step,
while asynchronous code allows operations to run in the background.
Understanding this concept is essential for handling APIs,
timers, and real-world web applications.
</p>

</div>
`,
    xp: 20
},
{
    id: "javascript-topic-25",
    type: "theory",
    title: "setTimeout and setInterval in JavaScript",
    description: "Understanding how timers work in JavaScript",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

<h2>\u{1F4CC} Introduction</h2>

<p>
JavaScript provides built-in timer functions that allow code to run after a delay
or repeatedly at fixed intervals.  
Two important timer functions are <strong>setTimeout()</strong> and
<strong>setInterval()</strong>.
</p>


<hr>

<h2>\u{1F539} 1. setTimeout()</h2>

<p>
The <strong>setTimeout()</strong> function executes a function once after
a specified delay in milliseconds.
</p>

<div class="code-example">
<pre><code>console.log("Start");

setTimeout(function() {
    console.log("Executed after 2 seconds");
}, 2000);

console.log("End");</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Start
End
Executed after 2 seconds</code></pre>
</div>

<p>
The timer runs in the background and executes after the delay.
</p>

<hr>

<h2>\u{1F539} 2. setInterval()</h2>

<p>
The <strong>setInterval()</strong> function repeatedly executes a function
after a fixed interval.
</p>

<div class="code-example">
<pre><code>setInterval(function() {
    console.log("Running every 1 second");
}, 1000);</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Running every 1 second
Running every 1 second
Running every 1 second
...</code></pre>
</div>

<hr>

<h2>\u{1F539} 3. clearTimeout() and clearInterval()</h2>

<p>
These functions stop timers from executing.
</p>

<div class="code-example">
<pre><code>const timer = setTimeout(function() {
    console.log("This will not run");
}, 3000);

clearTimeout(timer);</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>(No output)</code></pre>
</div>

<hr>

<h2>\u{1F539} 4. Real World Use Cases</h2>

<ul>
<li>Delaying notifications</li>
<li>Animations</li>
<li>Polling APIs</li>
<li>Auto-refresh features</li>
<li>Game timers</li>
</ul>

<hr>

<h2>\u{1F680} Conclusion</h2>

<p>
Timer functions like setTimeout() and setInterval()
allow JavaScript programs to execute tasks after a delay
or repeatedly. These are widely used in asynchronous
programming and real-time applications.
</p>

</div>
`,
    xp: 20
},
{
    id: "javascript-topic-26",
    type: "theory",
    title: "Promises in JavaScript",
    description: "Understanding how promises handle asynchronous operations",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

<h2>\u{1F4CC} Introduction</h2>

<p>
A <strong>Promise</strong> is an object that represents the eventual completion
(or failure) of an asynchronous operation and its resulting value.
Promises help manage asynchronous code more effectively than callbacks.
</p>

<div class="image-section">
<img src="assets/images/promises.png" alt="JavaScript Promises">
<p><em>Promises represent future results of asynchronous operations.</em></p>
</div>

<hr>

<h2>\u{1F539} 1. Promise States</h2>

<p>
A Promise can have three states:
</p>

<ul>
<li><strong>Pending</strong> \u2013 Initial state, operation not completed</li>
<li><strong>Fulfilled</strong> \u2013 Operation completed successfully</li>
<li><strong>Rejected</strong> \u2013 Operation failed</li>
</ul>

<hr>

<h2>\u{1F539} 2. Creating a Promise</h2>

<div class="code-example">
<pre><code>const myPromise = new Promise(function(resolve, reject) {

    const success = true;

    if(success) {
        resolve("Operation Successful");
    } else {
        reject("Operation Failed");
    }

});

myPromise.then(function(result) {
    console.log(result);
});</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Operation Successful</code></pre>
</div>

<hr>

<h2>\u{1F539} 3. Handling Errors with catch()</h2>

<p>
If a promise fails, the <strong>catch()</strong> method handles the error.
</p>

<div class="code-example">
<pre><code>const promise = new Promise(function(resolve, reject) {

    reject("Something went wrong");

});

promise
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.log(error);
});</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Something went wrong</code></pre>
</div>

<hr>

<h2>\u{1F539} 4. Promise Chaining</h2>

<p>
Promises can be chained using multiple <strong>.then()</strong> calls.
</p>

<div class="code-example">
<pre><code>Promise.resolve(5)
.then(function(num) {
    return num * 2;
})
.then(function(result) {
    console.log(result);
});</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>10</code></pre>
</div>

<hr>

<h2>\u{1F539} 5. Why Promises are Important</h2>

<ul>
<li>Handle asynchronous tasks</li>
<li>Avoid callback hell</li>
<li>Improve code readability</li>
<li>Work well with async/await</li>
</ul>

<hr>

<h2>\u{1F680} Conclusion</h2>

<p>
Promises simplify asynchronous programming in JavaScript.
They make code cleaner and easier to manage compared to
traditional callback-based approaches.
</p>

</div>
`,
    xp: 20
},
{
    id: "javascript-topic-27",
    type: "theory",
    title: "Async / Await in JavaScript",
    description: "Writing asynchronous code in a cleaner and more readable way",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

<h2>\u{1F4CC} Introduction</h2>

<p>
<strong>Async / Await</strong> is a modern way to handle asynchronous
operations in JavaScript.  
It was introduced in ES2017 and allows developers to write asynchronous
code that looks like synchronous code.
</p>

<div class="image-section">
<img src="assets/images/async.gif" alt="Async Await">
<p><em>Async/Await simplifies working with promises.</em></p>
</div>

<hr>

<h2>\u{1F539} 1. async Function</h2>

<p>
The <strong>async</strong> keyword is used to declare a function that
returns a promise.
</p>

<div class="code-example">
<pre><code>async function greet() {
    return "Hello";
}

greet().then(function(result) {
    console.log(result);
});</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Hello</code></pre>
</div>

<hr>

<h2>\u{1F539} 2. await Keyword</h2>

<p>
The <strong>await</strong> keyword pauses the execution of an async
function until the promise is resolved.
</p>

<div class="code-example">
<pre><code>function fetchData() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Data received");
        }, 2000);
    });
}

async function getData() {

    const result = await fetchData();

    console.log(result);
}

getData();</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Data received</code></pre>
</div>

<hr>

<h2>\u{1F539} 3. Error Handling with try...catch</h2>

<p>
Errors inside async functions can be handled using
<strong>try...catch</strong>.
</p>

<div class="code-example">
<pre><code>async function example() {

    try {

        const result = await Promise.reject("Error occurred");

        console.log(result);

    } catch(error) {

        console.log(error);

    }

}

example();</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Error occurred</code></pre>
</div>

<hr>

<h2>\u{1F539} 4. Advantages of Async/Await</h2>

<ul>
<li>Cleaner syntax</li>
<li>Easy to read</li>
<li>Better error handling</li>
<li>Reduces promise chaining</li>
</ul>

<hr>

<h2>\u{1F680} Conclusion</h2>

<p>
Async/Await makes asynchronous JavaScript easier to write and understand.
It builds on top of promises and is widely used in modern applications
for API calls and server communication.
</p>

</div>
`,
    xp: 20
},
{
    id: "javascript-topic-28",
    type: "theory",
    title: "Error Handling with Try...Catch in JavaScript",
    description: "Handling runtime errors using try, catch, and finally",
    content: `

<style>
.theory-content {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    padding: 20px;
}

.theory-content h2 {
    margin-top: 30px;
}

.code-example {
    background: #1e1e1e;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    overflow-x: auto;
    font-family: Consolas, monospace;
}

.code-example code {
    color: #00ffcc;
}

.image-section {
    text-align: center;
    margin: 20px 0;
}

.image-section img {
    max-width: 600px;
    width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>

<div class="theory-content">

<h2>\u{1F4CC} Introduction</h2>

<p>
Error handling is an important part of programming.
JavaScript provides <strong>try...catch</strong> to handle runtime errors
without stopping the entire program.
</p>

<hr>

<h2>\u{1F539} 1. Basic Try Catch</h2>

<p>
The <strong>try</strong> block contains code that might produce an error.
If an error occurs, the <strong>catch</strong> block handles it.
</p>

<div class="code-example">
<pre><code>try {

    console.log(x);

} catch(error) {

    console.log("An error occurred");

}</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>An error occurred</code></pre>
</div>

<hr>

<h2>\u{1F539} 2. Accessing Error Message</h2>

<p>
The catch block can access details about the error.
</p>

<div class="code-example">
<pre><code>try {

    let result = 10 / y;

} catch(error) {

    console.log(error.message);

}</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>y is not defined</code></pre>
</div>

<hr>

<h2>\u{1F539} 3. finally Block</h2>

<p>
The <strong>finally</strong> block always executes whether an error occurs
or not.
</p>

<div class="code-example">
<pre><code>try {

    console.log("Trying code");

} catch(error) {

    console.log("Error occurred");

} finally {

    console.log("Execution finished");

}</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>Trying code
Execution finished</code></pre>
</div>

<hr>

<h2>\u{1F539} 4. Throwing Custom Errors</h2>

<p>
Developers can create custom errors using <strong>throw</strong>.
</p>

<div class="code-example">
<pre><code>function checkAge(age) {

    if(age < 18) {
        throw "You must be 18 or older";
    }

    return "Access granted";
}

try {

    console.log(checkAge(16));

} catch(error) {

    console.log(error);

}</code></pre>
</div>

<h4>Output:</h4>

<div class="code-example">
<pre><code>You must be 18 or older</code></pre>
</div>

<hr>

<h2>\u{1F680} Conclusion</h2>

<p>
Error handling ensures applications do not crash when unexpected
situations occur. Using try...catch helps developers manage errors
gracefully and maintain application stability.
</p>

</div>
`,
    xp: 20
},

                ],
                master: [
                    {
                        id: 'javascript-master-01',
                        type: 'practice',
                        title: 'Master Challenge 1 (Easy)',
                        description: 'Print the square of 7',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Print the square of <code>7</code></li>
                                    </ul>
                                </div>
                                <div class="info-box">
                                    <strong>Master Badge</strong>
                                    <p>Complete all 4 Master Challenges to unlock <strong>Master in JavaScript</strong>.</p>
                                </div>
                            </div>
                        `,
                        starterCode: `// Master Challenge (Easy)\n// Print the square of 7\n`,
                        solution: `console.log(7 ** 2);`,
                        test: (output) => output.trim() === '49',
                        xp: 100,
                        forceSubmit: true
                    },
                    {
                        id: 'javascript-master-02',
                        type: 'practice',
                        title: 'Master Challenge 2 (Medium)',
                        description: 'Print Pass when score >= 60',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Create <code>score = 72</code></li>
                                        <li>If <code>score &gt;= 60</code>, print <code>"Pass"</code>, else print <code>"Fail"</code></li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// Master Challenge (Medium)\n// Write your code below\n`,
                        solution: `const score = 72;\nif (score >= 60) {\n  console.log(\"Pass\");\n} else {\n  console.log(\"Fail\");\n}`,
                        test: (output) => output.trim() === 'Pass',
                        xp: 150,
                        forceSubmit: true
                    },
                    {
                        id: 'javascript-master-03',
                        type: 'practice',
                        title: 'Master Challenge 3 (Medium)',
                        description: 'Print 1 to 5 (each on new line)',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Use a loop to print <code>1 2 3 4 5</code></li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// Master Challenge (Medium)\n// Use a for loop\n`,
                        solution: `for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}`,
                        test: (output) => output.replace(/\s/g, '') === '12345',
                        xp: 150,
                        forceSubmit: true
                    },
                    {
                        id: 'javascript-master-04',
                        type: 'practice',
                        title: 'Master Challenge 4 (Hard)',
                        description: 'Write sumToN(n) and print sumToN(10)',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Create a function <code>sumToN(n)</code> that returns the sum <code>1 + 2 + ... + n</code></li>
                                        <li>Print <code>sumToN(10)</code> (expected output: <code>55</code>)</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// Master Challenge (Hard)\n// Define sumToN(n)\n`,
                        solution: `function sumToN(n) {\n  let total = 0;\n  for (let i = 1; i <= n; i++) total += i;\n  return total;\n}\n\nconsole.log(sumToN(10));`,
                        test: (output) => output.trim() === '55',
                        xp: 250,
                        forceSubmit: true
                    }
                ],
},
            cpp: {
                basics: [
                    {
                        id: 'cpp-intro',
                        type: 'theory',
                        title: 'Introduction to C++',
                        description: 'Learn about this powerful language',
                        content: `
                            <div class="theory-content">
                                <h4>What is C++?</h4>
                                <p>C++ is a powerful, high-performance programming language created by Bjarne Stroustrup in 1979. It's an extension of the C language with object-oriented features.</p>
                                
                                <h4>Why Learn C++?</h4>
                                <ul>
                                    <li><strong>Performance:</strong> One of the fastest programming languages</li>
                                    <li><strong>Control:</strong> Direct hardware control and memory management</li>
                                    <li><strong>Versatile:</strong> Games, operating systems, embedded systems</li>
                                    <li><strong>Foundation:</strong> Understanding C++ helps learn other languages</li>
                                </ul>

                                <h4>C++ is Used For</h4>
                                <ul>
                                    <li>Game engines (Unreal Engine, Unity)</li>
                                    <li>Operating systems (Windows, Linux)</li>
                                    <li>Browsers (Chrome, Firefox)</li>
                                    <li>Database systems (MySQL, MongoDB)</li>
                                    <li>Graphics and simulations</li>
                                </ul>

                                <h4>Your First C++ Program</h4>
                                <div class="code-example">
<pre>#include &lt;iostream&gt;
using namespace std;

int main() {
    cout &lt;&lt; "Hello, World!" &lt;&lt; endl;
    return 0;
}</pre>
                                </div>

                                <div class="info-box">
                                    <strong>\u{1F4DD} Understanding the Code</strong>
                                    <ul>
                                        <li><code>#include &lt;iostream&gt;</code> - Imports input/output library</li>
                                        <li><code>using namespace std;</code> - Allows using cout without std::</li>
                                        <li><code>int main()</code> - Every C++ program starts here</li>
                                        <li><code>cout</code> - Outputs text to console</li>
                                        <li><code>return 0;</code> - Indicates successful completion</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        xp: 10
                    },
                    {
                        id: 'cpp-hello',
                        type: 'practice',
                        title: 'Hello World in C++',
                        description: 'Write your first C++ program',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>\u{1F3AF} Challenge Goal</h4>
                                    <ul>
                                        <li>Complete the program to print "Hello, C++!"</li>
                                    </ul>
                                </div>

                                <div class="info-box warning">
                                    <strong>\u26A0\uFE0F Note</strong>
                                    <p>C++ requires compilation, so this is a simulation. In real development, you'd use a compiler like g++.</p>
                                </div>
                            </div>
                        `,
                        starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // Print "Hello, C++!" here\n    \n    return 0;\n}`,
                        solution: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, C++!" << endl;\n    return 0;\n}`,
                        test: (output) => output.includes('Hello, C++'),
                        xp: 20
                    },
                    {
                        id: 'cpp-variables-theory',
                        type: 'theory',
                        title: 'Variables and Data Types',
                        description: 'Learn C++ data types',
                        content: `
                            <div class="theory-content">
                                <h4>Variable Declaration</h4>
                                <p>In C++, you must specify the data type when creating a variable:</p>
                                
                                <div class="code-example">
<pre>int age = 25;           <span class="code-comment">// Integer</span>
double price = 19.99;   <span class="code-comment">// Decimal number</span>
char grade = 'A';       <span class="code-comment">// Single character</span>
string name = "Alice";  <span class="code-comment">// String of characters</span>
bool isStudent = true;  <span class="code-comment">// True or false</span></pre>
                                </div>

                                <h4>Common Data Types</h4>
                                <ul>
                                    <li><strong>int:</strong> Whole numbers (-2, 0, 42, 1000)</li>
                                    <li><strong>double:</strong> Decimal numbers (3.14, -0.5, 99.99)</li>
                                    <li><strong>char:</strong> Single character ('A', 'x', '5')</li>
                                    <li><strong>string:</strong> Text ("Hello", "C++")</li>
                                    <li><strong>bool:</strong> true or false</li>
                                </ul>

                                <h4>Constants</h4>
                                <div class="code-example">
<pre><span class="code-comment">// Values that cannot change</span>
const double PI = 3.14159;
const int MAX_STUDENTS = 30;</pre>
                                </div>

                                <h4>Input and Output</h4>
                                <div class="code-example">
<pre>#include &lt;iostream&gt;
using namespace std;

int main() {
    int age;
    
    <span class="code-comment">// Output</span>
    cout &lt;&lt; "Enter your age: ";
    
    <span class="code-comment">// Input</span>
    cin &gt;&gt; age;
    
    <span class="code-comment">// Display</span>
    cout &lt;&lt; "You are " &lt;&lt; age &lt;&lt; " years old" &lt;&lt; endl;
    
    return 0;
}</pre>
                                </div>

                                <div class="info-box warning">
                                    <strong>\u26A0\uFE0F Type Safety</strong>
                                    <p>C++ is strongly typed. You cannot assign a string to an int variable. This makes code more reliable but requires careful planning.</p>
                                </div>
                            </div>
                        `,
                        xp: 15
                    }
                ],

                

                overview: [
                    {
                        id: 'cpp-overview',
                        type: 'theory',
                        title: 'C++ Course Overview',
                        description: 'What you will learn and how to practice',
                        content: `
                            <div class="theory-content">
                                <h4>What you will learn</h4>
                                <p>This course is organized to build from fundamentals to practical problem solving. You will learn core syntax, data handling, decision making, and repetition patterns that appear in real-world code.</p>
                                <h4>How to use the lessons</h4>
                                <p>Read the theory, then immediately try the practice tasks. Each task is short and focused on one concept so you build speed and confidence.</p>
                                <h4>Progress and XP</h4>
                                <p>Finishing lessons marks them complete, increases XP, and counts toward your streak. The practice challenges in this course award more XP.</p>
                            </div>
                        `,
                        xp: 20
                    }
                ],

                
                
                topicPractice: [

                    {
                        id: 'cpp-topic-01',
                        type: 'practice',
                        title: 'Variables',
                        description: 'Print 10',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Print 10</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// print output
`,
                        solution: `cout << "10";`,
                        test: (output) => output.replace(/\s/g, '') === `10`,
                        xp: 60
                    },

                    {
                        id: 'cpp-topic-02',
                        type: 'practice',
                        title: 'Arithmetic',
                        description: 'Print 12',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Print 12</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// print output
`,
                        solution: `cout << "12";`,
                        test: (output) => output.replace(/\s/g, '') === `12`,
                        xp: 60
                    },

                    {
                        id: 'cpp-topic-03',
                        type: 'practice',
                        title: 'Conditionals',
                        description: 'Print Pass',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Print Pass</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// print output
`,
                        solution: `cout << "Pass";`,
                        test: (output) => output.replace(/\s/g, '') === `Pass`,
                        xp: 60
                    },

                    {
                        id: 'cpp-topic-04',
                        type: 'practice',
                        title: 'Loops',
                        description: 'Print 123',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Print 123</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// print output
`,
                        solution: `cout << "123";`,
                        test: (output) => output.replace(/\s/g, '') === `123`,
                        xp: 60
                    },

                    {
                        id: 'cpp-topic-05',
                        type: 'practice',
                        title: 'Functions',
                        description: 'Print 16',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Print 16</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// print output
`,
                        solution: `cout << "16";`,
                        test: (output) => output.replace(/\s/g, '') === `16`,
                        xp: 60
                    }
                ],
                advancedPractice: [
                    {
                        id: 'cpp-topic-06',
                        type: 'practice',
                        title: 'Variables',
                        description: 'Print 25 using variable',
                        content: `<div class="practice-section"><div class="challenge-goal"><h4>Goal</h4><ul><li>Print 25</li></ul></div></div>`,
                        starterCode: `// print output
`,
                        solution: `int n = 25;
cout << n;`,
                        test: (output) => output.replace(/\s/g, '') === `25`,
                        xp: 60
                    },
                    {
                        id: 'cpp-topic-07',
                        type: 'practice',
                        title: 'Arithmetic',
                        description: 'Print 30',
                        content: `<div class="practice-section"><div class="challenge-goal"><h4>Goal</h4><ul><li>Print 30</li></ul></div></div>`,
                        starterCode: `// print output
`,
                        solution: `int a = 10;
int b = 20;
cout << a + b;`,
                        test: (output) => output.replace(/\s/g, '') === `30`,
                        xp: 60
                    },
                    {
                        id: 'cpp-topic-08',
                        type: 'practice',
                        title: 'Condition',
                        description: 'Print Pass',
                        content: `<div class="practice-section"><div class="challenge-goal"><h4>Goal</h4><ul><li>Print Pass</li></ul></div></div>`,
                        starterCode: `// print output
`,
                        solution: `int score = 80;
if (score >= 60) {
  cout << "Pass";
}`,
                        test: (output) => output.includes('Pass'),
                        xp: 60
                    },
                    {
                        id: 'cpp-topic-09',
                        type: 'practice',
                        title: 'Text Output',
                        description: 'Print CppReady',
                        content: `<div class="practice-section"><div class="challenge-goal"><h4>Goal</h4><ul><li>Print CppReady</li></ul></div></div>`,
                        starterCode: `// print output
`,
                        solution: `cout << "CppReady";`,
                        test: (output) => output.replace(/\s/g, '') === `CppReady`,
                        xp: 60
                    },
                    {
                        id: 'cpp-topic-10',
                        type: 'practice',
                        title: 'Number Output',
                        description: 'Print 144',
                        content: `<div class="practice-section"><div class="challenge-goal"><h4>Goal</h4><ul><li>Print 144</li></ul></div></div>`,
                        starterCode: `// print output
`,
                        solution: `cout << 144;`,
                        test: (output) => output.replace(/\s/g, '') === `144`,
                        xp: 60
                    },
                    {
                        id: 'cpp-topic-11',
                        type: 'practice',
                        title: 'Final Output',
                        description: 'Print Done',
                        content: `<div class="practice-section"><div class="challenge-goal"><h4>Goal</h4><ul><li>Print Done</li></ul></div></div>`,
                        starterCode: `// print output
`,
                        solution: `cout << "Done";`,
                        test: (output) => output.replace(/\s/g, '') === `Done`,
                        xp: 60
                    }
                ],
                master: [
                    {
                        id: 'cpp-master-01',
                        type: 'practice',
                        title: 'Master Challenge 1 (Easy)',
                        description: 'Print the square of 7',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Print the square of <code>7</code> (output: <code>49</code>)</li>
                                    </ul>
                                </div>
                                <div class="info-box">
                                    <strong>Master Badge</strong>
                                    <p>Complete all 4 Master Challenges to unlock <strong>Master in C++</strong>.</p>
                                </div>
                            </div>
                        `,
                        starterCode: `// Master Challenge (Easy)\n// Print the square of 7\n`,
                        solution: `cout << 7 * 7;`,
                        test: (output) => output.trim() === '49',
                        xp: 100,
                        forceSubmit: true
                    },
                    {
                        id: 'cpp-master-02',
                        type: 'practice',
                        title: 'Master Challenge 2 (Medium)',
                        description: 'Use variables and print their sum',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Create <code>int a = 15</code> and <code>int b = 4</code></li>
                                        <li>Print <code>a + b</code> (output: <code>19</code>)</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// Master Challenge (Medium)\n// Write your code below\n`,
                        solution: `int a = 15;\nint b = 4;\ncout << a + b;`,
                        test: (output) => output.trim() === '19',
                        xp: 150,
                        forceSubmit: true
                    },
                    {
                        id: 'cpp-master-03',
                        type: 'practice',
                        title: 'Master Challenge 3 (Medium)',
                        description: 'Print Pass when score >= 60',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Create <code>int score = 72</code></li>
                                        <li>If <code>score &gt;= 60</code>, print <code>Pass</code></li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// Master Challenge (Medium)\n// Use an if statement\n`,
                        solution: `int score = 72;\nif (score >= 60) {\n  cout << \"Pass\";\n}`,
                        test: (output) => output.includes('Pass'),
                        xp: 150,
                        forceSubmit: true
                    },
                    {
                        id: 'cpp-master-04',
                        type: 'practice',
                        title: 'Master Challenge 4 (Hard)',
                        description: 'Compute (a+b)*(a-b) and print result',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Create <code>int a = 9</code> and <code>int b = 4</code></li>
                                        <li>Compute <code>(a + b) * (a - b)</code></li>
                                        <li>Print the result (output: <code>65</code>)</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// Master Challenge (Hard)\n// Compute and print (a+b)*(a-b)\n`,
                        solution: `int a = 9;\nint b = 4;\nint result = (a + b) * (a - b);\ncout << result;`,
                        test: (output) => output.trim() === '65',
                        xp: 250,
                        forceSubmit: true
                    }
                ],
},
            java: {
basics: [
{
    id: "java-basic-01",
    type: "theory",
    title: "Introduction to Java",
    description: "Learn what Java is and how a simple Java program works",
    content: `

<style>
.code-interface{
    background:#1e1e1e;
    border-radius:10px;
    overflow:hidden;
    margin-top:20px;
    box-shadow:0 4px 12px rgba(0,0,0,0.4);
}

.editor-header{
    background:#2d2d2d;
    color:#ccc;
    padding:10px 15px;
    display:flex;
    justify-content:space-between;
    font-size:13px;
    font-family:monospace;
}

.editor-body{
    padding:18px;
    color:#e6e6e6;
    font-family:monospace;
    font-size:14px;
    line-height:1.6;
}

.editor-body code{
    color:#dcdcaa;
}

.output-interface{
    margin-top:15px;
    background:#0d1117;
    border-radius:10px;
    overflow:hidden;
}

.console-header{
    background:#161b22;
    color:#8b949e;
    padding:8px 15px;
    font-size:13px;
    font-family:monospace;
}

.console-body{
    padding:15px;
    font-family:monospace;
    color:#79c0ff;
    font-size:14px;
}
</style>


<div class="theory-content">

<h4>What is Java?</h4>
<p>
Java is a high-level, object-oriented programming language created by Sun Microsystems in 1995 and now maintained by Oracle. 
It is designed to be platform-independent, meaning a program written in Java can run on multiple operating systems without modification.
</p>

<p>
Java follows the principle <strong>"Write Once, Run Anywhere"</strong>. Java code is compiled into bytecode which runs on the 
Java Virtual Machine (JVM), allowing programs to run on Windows, Linux, and macOS.
</p>

<h4>Where Java is Used</h4>
<ul>
<li>Android mobile development</li>
<li>Enterprise applications</li>
<li>Web backend systems</li>
<li>Banking and financial systems</li>
<li>Large-scale distributed systems</li>
</ul>

<h4>Example Java Program</h4>

<div class="code-interface">

<div class="editor-header">
<span>Main.java</span>
<span>Java</span>
</div>

<div class="editor-body">
<pre><code>
public class Main {

    public static void main(String[] args) {

        System.out.println("Welcome to Java Programming");

    }

}
</code></pre>
</div>

</div>

<h4>Code Explanation</h4>

<ul>
<li><strong>public class Main</strong> defines a class named Main.</li>
<li><strong>main()</strong> is the starting point where the Java program begins execution.</li>
<li><strong>System.out.println()</strong> prints text to the console.</li>
</ul>

<h4>Program Output</h4>

<div class="output-interface">

<div class="console-header">
Console Output
</div>

<div class="console-body">
<pre>
Welcome to Java Programming
</pre>
</div>

</div>

</div>

`,
xp: 10
},
{
    id: "java-basic-02",
    type: "theory",
    title: "JDK, JRE, and JVM",
    description: "Understand the core components that make Java programs run",
    content: `

<style>
.code-interface{
    background:#1e1e1e;
    border-radius:10px;
    overflow:hidden;
    margin-top:20px;
    box-shadow:0 4px 12px rgba(0,0,0,0.4);
}

.editor-header{
    background:#2d2d2d;
    color:#ccc;
    padding:10px 15px;
    display:flex;
    justify-content:space-between;
    font-size:13px;
    font-family:monospace;
}

.editor-body{
    padding:18px;
    color:#e6e6e6;
    font-family:monospace;
    font-size:14px;
    line-height:1.6;
}

.editor-body code{
    color:#dcdcaa;
}

.output-interface{
    margin-top:15px;
    background:#0d1117;
    border-radius:10px;
    overflow:hidden;
}

.console-header{
    background:#161b22;
    color:#8b949e;
    padding:8px 15px;
    font-size:13px;
    font-family:monospace;
}

.console-body{
    padding:15px;
    font-family:monospace;
    color:#79c0ff;
    font-size:14px;
}
</style>


<div class="theory-content">

<h4>Understanding JDK, JRE, and JVM</h4>

<p>
To run Java programs, three main components work together: <strong>JDK, JRE, and JVM</strong>. 
These components form the core environment required for Java development and execution.
</p>

<h4>JVM (Java Virtual Machine)</h4>
<p>
The JVM is responsible for executing Java bytecode. It acts as a virtual computer that runs Java programs. 
Because every operating system has its own JVM implementation, Java programs can run on multiple platforms without modification.
</p>

<h4>JRE (Java Runtime Environment)</h4>
<p>
The JRE provides the environment required to run Java programs. It includes the JVM along with standard libraries and runtime files needed for execution.
</p>

<h4>JDK (Java Development Kit)</h4>
<p>
The JDK is a complete development package used by programmers to create Java applications. 
It includes the JRE, compiler (javac), debugging tools, and other development utilities.
</p>

<h4>Relationship Between Them</h4>

<ul>
<li>JDK contains JRE</li>
<li>JRE contains JVM</li>
<li>Programmers install JDK to develop Java applications</li>
</ul>

<h4>Example Java Program Execution</h4>

<div class="code-interface">

<div class="editor-header">
<span>Main.java</span>
<span>Java</span>
</div>

<div class="editor-body">
<pre><code>
public class Main {

    public static void main(String[] args) {

        System.out.println("Java Program Running");

    }

}
</code></pre>
</div>

</div>

<h4>Execution Steps</h4>

<ul>
<li>Java source code is written in <strong>Main.java</strong>.</li>
<li>The <strong>javac compiler</strong> (from JDK) converts it into bytecode.</li>
<li>The <strong>JVM</strong> executes the bytecode.</li>
<li>The program output appears on the console.</li>
</ul>

<h4>Program Output</h4>

<div class="output-interface">

<div class="console-header">
Console Output
</div>

<div class="console-body">
<pre>
Java Program Running
</pre>
</div>

</div>

</div>

`,
xp: 10
},
{
    id: "java-basic-03",
    type: "theory",
    title: "Java Program Structure",
    description: "Learn the basic structure of a Java program and how its components work together",
    content: `

<style>
.code-interface{
    background:#1e1e1e;
    border-radius:10px;
    overflow:hidden;
    margin-top:20px;
    box-shadow:0 4px 12px rgba(0,0,0,0.4);
}

.editor-header{
    background:#2d2d2d;
    color:#ccc;
    padding:10px 15px;
    display:flex;
    justify-content:space-between;
    font-size:13px;
    font-family:monospace;
}

.editor-body{
    padding:18px;
    color:#e6e6e6;
    font-family:monospace;
    font-size:14px;
    line-height:1.6;
}

.editor-body code{
    color:#dcdcaa;
}

.output-interface{
    margin-top:15px;
    background:#0d1117;
    border-radius:10px;
    overflow:hidden;
}

.console-header{
    background:#161b22;
    color:#8b949e;
    padding:8px 15px;
    font-size:13px;
    font-family:monospace;
}

.console-body{
    padding:15px;
    font-family:monospace;
    color:#79c0ff;
    font-size:14px;
}
</style>


<div class="theory-content">

<h4>Basic Structure of a Java Program</h4>

<p>
Every Java program follows a specific structure. A Java program is built using classes, 
methods, and statements. The program execution always begins from the 
<strong>main() method</strong>.
</p>

<p>
Understanding the structure helps developers organize code properly and follow Java conventions.
</p>

<h4>Main Components of a Java Program</h4>

<ul>
<li><strong>Class Declaration</strong> – Defines the blueprint of the program.</li>
<li><strong>Main Method</strong> – The starting point of program execution.</li>
<li><strong>Statements</strong> – Instructions executed by the program.</li>
<li><strong>Output Statements</strong> – Used to display results.</li>
</ul>

<h4>Example Java Program</h4>

<div class="code-interface">

<div class="editor-header">
<span>Main.java</span>
<span>Java</span>
</div>

<div class="editor-body">
<pre><code>
public class Main {

    public static void main(String[] args) {

        System.out.println("Java Program Structure Example");

    }

}
</code></pre>
</div>

</div>

<h4>Explanation of the Code</h4>

<ul>
<li><strong>public class Main</strong> → Declares a class named Main.</li>
<li><strong>public static void main(String[] args)</strong> → Entry point of the Java program.</li>
<li><strong>System.out.println()</strong> → Displays output on the console.</li>
<li><strong>Curly braces { }</strong> → Define the beginning and end of code blocks.</li>
</ul>

<h4>Program Output</h4>

<div class="output-interface">

<div class="console-header">
Console Output
</div>

<div class="console-body">
<pre>
Java Program Structure Example
</pre>
</div>

</div>

</div>

`,
    xp: 10
},
{
    id: "java-basic-04",
    type: "theory",
    title: "Variables in Java",
    description: "Learn what variables are and how to store data in Java programs",
    content: `

<style>
.code-interface{
    background:#1e1e1e;
    border-radius:10px;
    overflow:hidden;
    margin-top:20px;
    box-shadow:0 4px 12px rgba(0,0,0,0.4);
}

.editor-header{
    background:#2d2d2d;
    color:#ccc;
    padding:10px 15px;
    display:flex;
    justify-content:space-between;
    font-size:13px;
    font-family:monospace;
}

.editor-body{
    padding:18px;
    color:#e6e6e6;
    font-family:monospace;
    font-size:14px;
    line-height:1.6;
}

.editor-body code{
    color:#dcdcaa;
}

.output-interface{
    margin-top:15px;
    background:#0d1117;
    border-radius:10px;
    overflow:hidden;
}

.console-header{
    background:#161b22;
    color:#8b949e;
    padding:8px 15px;
    font-size:13px;
    font-family:monospace;
}

.console-body{
    padding:15px;
    font-family:monospace;
    color:#79c0ff;
    font-size:14px;
}
</style>


<div class="theory-content">

<h4>What is a Variable?</h4>

<p>
A variable is a container used to store data in a program. Each variable has a 
<strong>data type</strong>, a <strong>name</strong>, and a <strong>value</strong>. 
Variables allow programs to store and manipulate information during execution.
</p>

<p>
In Java, every variable must be declared with a specific data type before it can be used.
</p>

<h4>Variable Declaration Syntax</h4>

<p>
The general syntax for declaring a variable is:
</p>

<ul>
<li><strong>dataType variableName = value;</strong></li>
</ul>

<h4>Example Java Program</h4>

<div class="code-interface">

<div class="editor-header">
<span>Main.java</span>
<span>Java</span>
</div>

<div class="editor-body">
<pre><code>
public class Main {

    public static void main(String[] args) {

        int age = 21;

        System.out.println(age);

    }

}
</code></pre>
</div>

</div>

<h4>Explanation of the Code</h4>

<ul>
<li><strong>int age = 21;</strong> → Declares an integer variable named age.</li>
<li><strong>age</strong> → Variable name.</li>
<li><strong>21</strong> → Value stored inside the variable.</li>
<li><strong>System.out.println(age)</strong> → Prints the value of the variable.</li>
</ul>

<h4>Program Output</h4>

<div class="output-interface">

<div class="console-header">
Console Output
</div>

<div class="console-body">
<pre>
21
</pre>
</div>

</div>

</div>

`,
    xp: 10
},
{
    id: "java-basic-05",
    type: "theory",
    title: "Data Types in Java",
    description: "Understand different types of data that Java variables can store",
    content: `

<style>
.code-interface{
    background:#1e1e1e;
    border-radius:10px;
    overflow:hidden;
    margin-top:20px;
    box-shadow:0 4px 12px rgba(0,0,0,0.4);
}

.editor-header{
    background:#2d2d2d;
    color:#ccc;
    padding:10px 15px;
    display:flex;
    justify-content:space-between;
    font-size:13px;
    font-family:monospace;
}

.editor-body{
    padding:18px;
    color:#e6e6e6;
    font-family:monospace;
    font-size:14px;
    line-height:1.6;
}

.output-interface{
    margin-top:15px;
    background:#0d1117;
    border-radius:10px;
    overflow:hidden;
}

.console-header{
    background:#161b22;
    color:#8b949e;
    padding:8px 15px;
    font-size:13px;
    font-family:monospace;
}

.console-body{
    padding:15px;
    font-family:monospace;
    color:#79c0ff;
    font-size:14px;
}
</style>

<div class="theory-content">

<h4>What are Data Types?</h4>

<p>
Data types define the type of data a variable can store. In Java, every variable must have a data type 
so that the compiler knows what kind of value it holds and how much memory should be allocated.
</p>

<p>
Java data types are mainly divided into two categories:
</p>

<ul>
<li><strong>Primitive Data Types</strong> – Basic built-in data types.</li>
<li><strong>Non-Primitive Data Types</strong> – Objects such as String, Arrays, and Classes.</li>
</ul>

<h4>Common Primitive Data Types</h4>

<ul>
<li><strong>int</strong> – Stores integers (whole numbers)</li>
<li><strong>double</strong> – Stores decimal numbers</li>
<li><strong>char</strong> – Stores a single character</li>
<li><strong>boolean</strong> – Stores true or false values</li>
</ul>

<h4>Example Java Program</h4>

<div class="code-interface">

<div class="editor-header">
<span>Main.java</span>
<span>Java</span>
</div>

<div class="editor-body">
<pre><code>
public class Main {

    public static void main(String[] args) {

        int number = 10;
        double price = 9.99;
        char grade = 'A';
        boolean isJavaFun = true;

        System.out.println(number);
        System.out.println(price);
        System.out.println(grade);
        System.out.println(isJavaFun);

    }

}
</code></pre>
</div>

</div>

<h4>Explanation</h4>

<ul>
<li><strong>int</strong> stores whole numbers.</li>
<li><strong>double</strong> stores decimal values.</li>
<li><strong>char</strong> stores a single character.</li>
<li><strong>boolean</strong> stores logical values (true or false).</li>
</ul>

<h4>Program Output</h4>

<div class="output-interface">

<div class="console-header">
Console Output
</div>

<div class="console-body">
<pre>
10
9.99
A
true
</pre>
</div>

</div>

</div>

`,
    xp: 10
},
{
    id: "java-basic-06",
    type: "theory",
    title: "Type Casting in Java",
    description: "Learn how to convert one data type into another in Java",
    content: `

<style>
.code-interface{
    background:#1e1e1e;
    border-radius:10px;
    overflow:hidden;
    margin-top:20px;
    box-shadow:0 4px 12px rgba(0,0,0,0.4);
}

.editor-header{
    background:#2d2d2d;
    color:#ccc;
    padding:10px 15px;
    display:flex;
    justify-content:space-between;
    font-size:13px;
    font-family:monospace;
}

.editor-body{
    padding:18px;
    color:#e6e6e6;
    font-family:monospace;
    font-size:14px;
    line-height:1.6;
}

.output-interface{
    margin-top:15px;
    background:#0d1117;
    border-radius:10px;
    overflow:hidden;
}

.console-header{
    background:#161b22;
    color:#8b949e;
    padding:8px 15px;
    font-size:13px;
    font-family:monospace;
}

.console-body{
    padding:15px;
    font-family:monospace;
    color:#79c0ff;
    font-size:14px;
}
</style>

<div class="theory-content">

<h4>What is Type Casting?</h4>

<p>
Type casting is the process of converting one data type into another. 
In Java, this is often required when working with different numeric data types 
such as <strong>int, double, float, or long</strong>.
</p>

<p>
Java supports two types of casting:
</p>

<ul>
<li><strong>Implicit Casting (Widening)</strong> – Automatic conversion from a smaller data type to a larger one.</li>
<li><strong>Explicit Casting (Narrowing)</strong> – Manual conversion from a larger data type to a smaller one.</li>
</ul>

<h4>Example of Type Casting</h4>

<div class="code-interface">

<div class="editor-header">
<span>Main.java</span>
<span>Java</span>
</div>

<div class="editor-body">
<pre><code>
public class Main {

    public static void main(String[] args) {

        int number = 10;

        double result = number;   // Implicit casting

        System.out.println(result);

        double price = 9.75;

        int rounded = (int) price;   // Explicit casting

        System.out.println(rounded);

    }

}
</code></pre>
</div>

</div>

<h4>Explanation</h4>

<ul>
<li><strong>double result = number</strong> converts an int to double automatically.</li>
<li><strong>(int) price</strong> manually converts a double value to an integer.</li>
<li>When narrowing happens, decimal values are removed.</li>
</ul>

<h4>Program Output</h4>

<div class="output-interface">

<div class="console-header">
Console Output
</div>

<div class="console-body">
<pre>
10.0
9
</pre>
</div>

</div>

</div>

`,
    xp: 10
},
{
    id: "java-basic-07",
    type: "theory",
    title: "Operators in Java",
    description: "Learn how operators are used to perform operations on variables and values",
    content: `

<style>
.code-interface{
    background:#1e1e1e;
    border-radius:10px;
    overflow:hidden;
    margin-top:20px;
    box-shadow:0 4px 12px rgba(0,0,0,0.4);
}

.editor-header{
    background:#2d2d2d;
    color:#ccc;
    padding:10px 15px;
    display:flex;
    justify-content:space-between;
    font-size:13px;
    font-family:monospace;
}

.editor-body{
    padding:18px;
    color:#e6e6e6;
    font-family:monospace;
    font-size:14px;
    line-height:1.6;
}

.output-interface{
    margin-top:15px;
    background:#0d1117;
    border-radius:10px;
    overflow:hidden;
}

.console-header{
    background:#161b22;
    color:#8b949e;
    padding:8px 15px;
    font-size:13px;
    font-family:monospace;
}

.console-body{
    padding:15px;
    font-family:monospace;
    color:#79c0ff;
    font-size:14px;
}
</style>

<div class="theory-content">

<h4>What are Operators?</h4>

<p>
Operators are special symbols used to perform operations on variables and values. 
They help perform calculations, comparisons, and logical operations inside a program.
</p>

<p>
Java provides several types of operators that are commonly used in programming.
</p>

<h4>Types of Operators</h4>

<ul>
<li><strong>Arithmetic Operators</strong> → +, -, *, /, %</li>
<li><strong>Relational Operators</strong> → ==, !=, >, <, >=, <=</li>
<li><strong>Logical Operators</strong> → &&, ||, !</li>
<li><strong>Assignment Operators</strong> → =, +=, -=, *=</li>
</ul>

<h4>Example Program Using Operators</h4>

<div class="code-interface">

<div class="editor-header">
<span>Main.java</span>
<span>Java</span>
</div>

<div class="editor-body">
<pre><code>
public class Main {

    public static void main(String[] args) {

        int a = 10;
        int b = 5;

        int sum = a + b;
        int product = a * b;

        System.out.println(sum);
        System.out.println(product);

    }

}
</code></pre>
</div>

</div>

<h4>Explanation</h4>

<ul>
<li><strong>a + b</strong> performs addition using the arithmetic operator +.</li>
<li><strong>a * b</strong> performs multiplication using the * operator.</li>
<li>The results are stored in variables and printed using System.out.println().</li>
</ul>

<h4>Program Output</h4>

<div class="output-interface">

<div class="console-header">
Console Output
</div>

<div class="console-body">
<pre>
15
50
</pre>
</div>

</div>

</div>

`,
    xp: 10
},
{
    id: "java-basic-08",
    type: "theory",
    title: "If Statement in Java",
    description: "Learn how decision making works using the if statement",
    content: `

<style>
.code-interface{
    background:#1e1e1e;
    border-radius:10px;
    overflow:hidden;
    margin-top:20px;
    box-shadow:0 4px 12px rgba(0,0,0,0.4);
}

.editor-header{
    background:#2d2d2d;
    color:#ccc;
    padding:10px 15px;
    display:flex;
    justify-content:space-between;
    font-size:13px;
    font-family:monospace;
}

.editor-body{
    padding:18px;
    color:#e6e6e6;
    font-family:monospace;
    font-size:14px;
    line-height:1.6;
}

.output-interface{
    margin-top:15px;
    background:#0d1117;
    border-radius:10px;
    overflow:hidden;
}

.console-header{
    background:#161b22;
    color:#8b949e;
    padding:8px 15px;
    font-size:13px;
    font-family:monospace;
}

.console-body{
    padding:15px;
    font-family:monospace;
    color:#79c0ff;
    font-size:14px;
}
</style>

<div class="theory-content">

<h4>What is an If Statement?</h4>

<p>
The <strong>if statement</strong> is used for decision making in Java programs. 
It allows the program to execute a block of code only if a specified condition is true.
</p>

<p>
This helps programs make logical decisions based on conditions such as user input,
numbers, or comparisons between variables.
</p>

<h4>Syntax of If Statement</h4>

<ul>
<li><strong>if (condition) { statements }</strong></li>
</ul>

<p>
If the condition evaluates to <strong>true</strong>, the code inside the block will run.
If the condition is <strong>false</strong>, the code inside the block will be skipped.
</p>

<h4>Example Java Program</h4>

<div class="code-interface">

<div class="editor-header">
<span>Main.java</span>
<span>Java</span>
</div>

<div class="editor-body">
<pre><code>
public class Main {

    public static void main(String[] args) {

        int marks = 80;

        if (marks >= 50) {

            System.out.println("Pass");

        }

    }

}
</code></pre>
</div>

</div>

<h4>Explanation</h4>

<ul>
<li>The variable <strong>marks</strong> stores the value 80.</li>
<li>The condition <strong>marks >= 50</strong> checks if marks are greater than or equal to 50.</li>
<li>If the condition is true, the program prints <strong>"Pass"</strong>.</li>
</ul>

<h4>Program Output</h4>

<div class="output-interface">

<div class="console-header">
Console Output
</div>

<div class="console-body">
<pre>
Pass
</pre>
</div>

</div>

</div>

`,
    xp: 10
},
{
    id: "java-basic-09",
    type: "theory",
    title: "Switch Statement in Java",
    description: "Learn how to use switch statements to execute different code blocks based on values",
    content: `

<style>
.code-interface{
    background:#1e1e1e;
    border-radius:10px;
    overflow:hidden;
    margin-top:20px;
    box-shadow:0 4px 12px rgba(0,0,0,0.4);
}

.editor-header{
    background:#2d2d2d;
    color:#ccc;
    padding:10px 15px;
    display:flex;
    justify-content:space-between;
    font-size:13px;
    font-family:monospace;
}

.editor-body{
    padding:18px;
    color:#e6e6e6;
    font-family:monospace;
    font-size:14px;
    line-height:1.6;
}

.output-interface{
    margin-top:15px;
    background:#0d1117;
    border-radius:10px;
    overflow:hidden;
}

.console-header{
    background:#161b22;
    color:#8b949e;
    padding:8px 15px;
    font-size:13px;
    font-family:monospace;
}

.console-body{
    padding:15px;
    font-family:monospace;
    color:#79c0ff;
    font-size:14px;
}
</style>

<div class="theory-content">

<h4>What is a Switch Statement?</h4>

<p>
The <strong>switch statement</strong> is used when a program needs to choose between multiple options.
It evaluates a variable and executes the matching case block.
</p>

<p>
Switch statements are often used as an alternative to multiple <strong>if-else</strong> conditions,
especially when comparing the same variable with different values.
</p>

<h4>Syntax of Switch Statement</h4>

<ul>
<li><strong>switch(variable) { case value: statements; break; }</strong></li>
</ul>

<p>
The <strong>break</strong> statement stops the execution of the switch block after a case is matched.
</p>

<h4>Example Java Program</h4>

<div class="code-interface">

<div class="editor-header">
<span>Main.java</span>
<span>Java</span>
</div>

<div class="editor-body">
<pre><code>
public class Main {

    public static void main(String[] args) {

        int day = 2;

        switch(day) {

            case 1:
                System.out.println("Monday");
                break;

            case 2:
                System.out.println("Tuesday");
                break;

            case 3:
                System.out.println("Wednesday");
                break;

            default:
                System.out.println("Invalid Day");

        }

    }

}
</code></pre>
</div>

</div>

<h4>Explanation</h4>

<ul>
<li>The variable <strong>day</strong> stores the value 2.</li>
<li>The switch statement checks which case matches the value.</li>
<li>Since day = 2, the program executes the second case.</li>
<li>The break statement prevents execution of the next cases.</li>
</ul>

<h4>Program Output</h4>

<div class="output-interface">

<div class="console-header">
Console Output
</div>

<div class="console-body">
<pre>
Tuesday
</pre>
</div>

</div>

</div>

`,
    xp: 10
},
{
    id: "java-basic-10",
    type: "theory",
    title: "For Loop in Java",
    description: "Learn how to repeat a block of code using the for loop",
    content: `

<style>
.code-interface{
    background:#1e1e1e;
    border-radius:10px;
    overflow:hidden;
    margin-top:20px;
    box-shadow:0 4px 12px rgba(0,0,0,0.4);
}

.editor-header{
    background:#2d2d2d;
    color:#ccc;
    padding:10px 15px;
    display:flex;
    justify-content:space-between;
    font-size:13px;
    font-family:monospace;
}

.editor-body{
    padding:18px;
    color:#e6e6e6;
    font-family:monospace;
    font-size:14px;
    line-height:1.6;
}

.output-interface{
    margin-top:15px;
    background:#0d1117;
    border-radius:10px;
    overflow:hidden;
}

.console-header{
    background:#161b22;
    color:#8b949e;
    padding:8px 15px;
    font-size:13px;
    font-family:monospace;
}

.console-body{
    padding:15px;
    font-family:monospace;
    color:#79c0ff;
    font-size:14px;
}
</style>

<div class="theory-content">

<h4>What is a For Loop?</h4>

<p>
A <strong>for loop</strong> is used to repeat a block of code a specific number of times. 
It is commonly used when the number of iterations is known in advance.
</p>

<p>
The for loop contains three main parts: initialization, condition, and update.
</p>

<h4>Syntax of For Loop</h4>

<ul>
<li><strong>for(initialization; condition; update) { statements }</strong></li>
</ul>

<ul>
<li><strong>Initialization</strong> → starting value of the loop variable</li>
<li><strong>Condition</strong> → determines whether the loop should continue</li>
<li><strong>Update</strong> → modifies the loop variable after each iteration</li>
</ul>

<h4>Example Java Program</h4>

<div class="code-interface">

<div class="editor-header">
<span>Main.java</span>
<span>Java</span>
</div>

<div class="editor-body">
<pre><code>
public class Main {

    public static void main(String[] args) {

        for(int i = 1; i <= 5; i++) {

            System.out.println(i);

        }

    }

}
</code></pre>
</div>

</div>

<h4>Explanation</h4>

<ul>
<li>The variable <strong>i</strong> starts from 1.</li>
<li>The loop runs while <strong>i ≤ 5</strong>.</li>
<li>After every iteration, <strong>i</strong> increases by 1.</li>
<li>The program prints numbers from 1 to 5.</li>
</ul>

<h4>Program Output</h4>

<div class="output-interface">

<div class="console-header">
Console Output
</div>

<div class="console-body">
<pre>
1
2
3
4
5
</pre>
</div>

</div>

</div>

`,
    xp: 10
},
{
    id: "java-basic-11",
    type: "theory",
    title: "While Loop in Java",
    description: "Learn how to repeat a block of code using the while loop",
    content: `

<style>
.code-interface{
    background:#1e1e1e;
    border-radius:10px;
    overflow:hidden;
    margin-top:20px;
    box-shadow:0 4px 12px rgba(0,0,0,0.4);
}

.editor-header{
    background:#2d2d2d;
    color:#ccc;
    padding:10px 15px;
    display:flex;
    justify-content:space-between;
    font-size:13px;
    font-family:monospace;
}

.editor-body{
    padding:18px;
    color:#e6e6e6;
    font-family:monospace;
    font-size:14px;
    line-height:1.6;
}

.output-interface{
    margin-top:15px;
    background:#0d1117;
    border-radius:10px;
    overflow:hidden;
}

.console-header{
    background:#161b22;
    color:#8b949e;
    padding:8px 15px;
    font-size:13px;
    font-family:monospace;
}

.console-body{
    padding:15px;
    font-family:monospace;
    color:#79c0ff;
    font-size:14px;
}
</style>

<div class="theory-content">

<h4>What is a While Loop?</h4>

<p>
The <strong>while loop</strong> is used to repeatedly execute a block of code 
as long as a specified condition remains true.
</p>

<p>
Unlike the <strong>for loop</strong>, a while loop is mainly used when the number 
of iterations is not known in advance.
</p>

<h4>Syntax of While Loop</h4>

<ul>
<li><strong>while(condition) { statements }</strong></li>
</ul>

<p>
The condition is checked before each iteration. If the condition becomes false,
the loop stops executing.
</p>

<h4>Example Java Program</h4>

<div class="code-interface">

<div class="editor-header">
<span>Main.java</span>
<span>Java</span>
</div>

<div class="editor-body">
<pre><code>
public class Main {

    public static void main(String[] args) {

        int i = 1;

        while(i <= 5) {

            System.out.println(i);

            i++;

        }

    }

}
</code></pre>
</div>

</div>

<h4>Explanation</h4>

<ul>
<li>The variable <strong>i</strong> starts with the value 1.</li>
<li>The loop continues while <strong>i ≤ 5</strong>.</li>
<li>After printing the value, <strong>i</strong> increases by 1.</li>
<li>The loop repeats until the condition becomes false.</li>
</ul>

<h4>Program Output</h4>

<div class="output-interface">

<div class="console-header">
Console Output
</div>

<div class="console-body">
<pre>
1
2
3
4
5
</pre>
</div>

</div>

</div>

`,
    xp: 10
},
{
    id: "java-basic-12",
    type: "theory",
    title: "Do-While Loop in Java",
    description: "Learn how the do-while loop executes a block of code at least once",
    content: `

<style>
.code-interface{
    background:#1e1e1e;
    border-radius:10px;
    overflow:hidden;
    margin-top:20px;
    box-shadow:0 4px 12px rgba(0,0,0,0.4);
}

.editor-header{
    background:#2d2d2d;
    color:#ccc;
    padding:10px 15px;
    display:flex;
    justify-content:space-between;
    font-size:13px;
    font-family:monospace;
}

.editor-body{
    padding:18px;
    color:#e6e6e6;
    font-family:monospace;
    font-size:14px;
    line-height:1.6;
}

.output-interface{
    margin-top:15px;
    background:#0d1117;
    border-radius:10px;
    overflow:hidden;
}

.console-header{
    background:#161b22;
    color:#8b949e;
    padding:8px 15px;
    font-size:13px;
    font-family:monospace;
}

.console-body{
    padding:15px;
    font-family:monospace;
    color:#79c0ff;
    font-size:14px;
}
</style>

<div class="theory-content">

<h4>What is a Do-While Loop?</h4>

<p>
The <strong>do-while loop</strong> is similar to the while loop but with one key difference. 
It executes the block of code <strong>at least once</strong> before checking the condition.
</p>

<p>
This happens because the condition is evaluated <strong>after</strong> the loop body runs.
</p>

<h4>Syntax of Do-While Loop</h4>

<ul>
<li><strong>do { statements } while(condition);</strong></li>
</ul>

<p>
Even if the condition is false initially, the code inside the loop will run once.
</p>

<h4>Example Java Program</h4>

<div class="code-interface">

<div class="editor-header">
<span>Main.java</span>
<span>Java</span>
</div>

<div class="editor-body">
<pre><code>
public class Main {

    public static void main(String[] args) {

        int i = 1;

        do {

            System.out.println(i);

            i++;

        } while(i <= 5);

    }

}
</code></pre>
</div>

</div>

<h4>Explanation</h4>

<ul>
<li>The variable <strong>i</strong> starts with the value 1.</li>
<li>The code inside the <strong>do block</strong> executes first.</li>
<li>After execution, the condition <strong>i ≤ 5</strong> is checked.</li>
<li>The loop repeats until the condition becomes false.</li>
</ul>

<h4>Program Output</h4>

<div class="output-interface">

<div class="console-header">
Console Output
</div>

<div class="console-body">
<pre>
1
2
3
4
5
</pre>
</div>

</div>

</div>

`,
    xp: 10
},
{
    id: "java-basic-13",
    type: "theory",
    title: "Arrays in Java",
    description: "Learn how arrays store multiple values of the same data type",
    content: `

<style>
.code-interface{
    background:#1e1e1e;
    border-radius:10px;
    overflow:hidden;
    margin-top:20px;
    box-shadow:0 4px 12px rgba(0,0,0,0.4);
}

.editor-header{
    background:#2d2d2d;
    color:#ccc;
    padding:10px 15px;
    display:flex;
    justify-content:space-between;
    font-size:13px;
    font-family:monospace;
}

.editor-body{
    padding:18px;
    color:#e6e6e6;
    font-family:monospace;
    font-size:14px;
    line-height:1.6;
}

.output-interface{
    margin-top:15px;
    background:#0d1117;
    border-radius:10px;
    overflow:hidden;
}

.console-header{
    background:#161b22;
    color:#8b949e;
    padding:8px 15px;
    font-size:13px;
    font-family:monospace;
}

.console-body{
    padding:15px;
    font-family:monospace;
    color:#79c0ff;
    font-size:14px;
}
</style>

<div class="theory-content">

<h4>What is an Array?</h4>

<p>
An <strong>array</strong> is a data structure used to store multiple values of the same data type 
in a single variable. Instead of creating many variables, arrays allow us to store many values 
in one structure.
</p>

<p>
Each value inside an array is accessed using an <strong>index</strong>. 
In Java, array indexing starts from <strong>0</strong>.
</p>

<h4>Syntax of Array Declaration</h4>

<ul>
<li><strong>dataType[] arrayName = new dataType[size];</strong></li>
</ul>

<p>
Values can then be assigned to each index position.
</p>

<h4>Example Java Program</h4>

<div class="code-interface">

<div class="editor-header">
<span>Main.java</span>
<span>Java</span>
</div>

<div class="editor-body">
<pre><code>
public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40};

        System.out.println(numbers[0]);
        System.out.println(numbers[1]);
        System.out.println(numbers[2]);
        System.out.println(numbers[3]);

    }

}
</code></pre>
</div>

</div>

<h4>Explanation</h4>

<ul>
<li>The array <strong>numbers</strong> stores four integer values.</li>
<li><strong>numbers[0]</strong> accesses the first element.</li>
<li><strong>numbers[1]</strong> accesses the second element.</li>
<li>Array indexing always starts from 0.</li>
</ul>

<h4>Program Output</h4>

<div class="output-interface">

<div class="console-header">
Console Output
</div>

<div class="console-body">
<pre>
10
20
30
40
</pre>
</div>

</div>

</div>

`,
    xp: 10
},
{
    id: "java-basic-14",
    type: "theory",
    title: "Strings in Java",
    description: "Learn how Java stores and manipulates text using String objects",
    content: `

<style>
.code-interface{
    background:#1e1e1e;
    border-radius:10px;
    overflow:hidden;
    margin-top:20px;
    box-shadow:0 4px 12px rgba(0,0,0,0.4);
}

.editor-header{
    background:#2d2d2d;
    color:#ccc;
    padding:10px 15px;
    display:flex;
    justify-content:space-between;
    font-size:13px;
    font-family:monospace;
}

.editor-body{
    padding:18px;
    color:#e6e6e6;
    font-family:monospace;
    font-size:14px;
    line-height:1.6;
}

.output-interface{
    margin-top:15px;
    background:#0d1117;
    border-radius:10px;
    overflow:hidden;
}

.console-header{
    background:#161b22;
    color:#8b949e;
    padding:8px 15px;
    font-size:13px;
    font-family:monospace;
}

.console-body{
    padding:15px;
    font-family:monospace;
    color:#79c0ff;
    font-size:14px;
}
</style>

<div class="theory-content">

<h4>What is a String?</h4>

<p>
A <strong>String</strong> in Java is used to store and manipulate text. 
Unlike primitive data types, String is a <strong>class</strong> in Java.
</p>

<p>
Strings are commonly used for storing names, messages, sentences, 
and any textual data inside a program.
</p>

<h4>Creating a String</h4>

<ul>
<li>Strings are created using double quotation marks <strong>" "</strong>.</li>
<li>They can also be combined using the <strong>+</strong> operator.</li>
</ul>

<h4>Example Java Program</h4>

<div class="code-interface">

<div class="editor-header">
<span>Main.java</span>
<span>Java</span>
</div>

<div class="editor-body">
<pre><code>
public class Main {

    public static void main(String[] args) {

        String firstName = "Pritam";
        String lastName = "Saha";

        String fullName = firstName + " " + lastName;

        System.out.println(fullName);

    }

}
</code></pre>
</div>

</div>

<h4>Explanation</h4>

<ul>
<li><strong>String firstName</strong> stores the value "Pritam".</li>
<li><strong>String lastName</strong> stores the value "Saha".</li>
<li>The <strong>+</strong> operator joins both strings together.</li>
<li>The result is stored in the variable <strong>fullName</strong>.</li>
</ul>

<h4>Program Output</h4>

<div class="output-interface">

<div class="console-header">
Console Output
</div>

<div class="console-body">
<pre>
Pritam Saha
</pre>
</div>

</div>

</div>

`,
    xp: 10
},
{
    id: "java-basic-15",
    type: "theory",
    title: "Scanner (User Input) in Java",
    description: "Learn how to take input from the user using the Scanner class",
    content: `

<style>
.code-interface{
    background:#1e1e1e;
    border-radius:10px;
    overflow:hidden;
    margin-top:20px;
    box-shadow:0 4px 12px rgba(0,0,0,0.4);
}

.editor-header{
    background:#2d2d2d;
    color:#ccc;
    padding:10px 15px;
    display:flex;
    justify-content:space-between;
    font-size:13px;
    font-family:monospace;
}

.editor-body{
    padding:18px;
    color:#e6e6e6;
    font-family:monospace;
    font-size:14px;
    line-height:1.6;
}

.output-interface{
    margin-top:15px;
    background:#0d1117;
    border-radius:10px;
    overflow:hidden;
}

.console-header{
    background:#161b22;
    color:#8b949e;
    padding:8px 15px;
    font-size:13px;
    font-family:monospace;
}

.console-body{
    padding:15px;
    font-family:monospace;
    color:#79c0ff;
    font-size:14px;
}
</style>

<div class="theory-content">

<h4>What is Scanner?</h4>

<p>
The <strong>Scanner class</strong> is used to take input from the user in Java programs. 
It belongs to the <strong>java.util</strong> package and allows programs to read 
different types of input such as integers, strings, and floating-point numbers.
</p>

<p>
Before using Scanner, the package must be imported into the program.
</p>

<h4>Common Scanner Methods</h4>

<ul>
<li><strong>nextInt()</strong> → reads an integer value</li>
<li><strong>nextDouble()</strong> → reads a decimal value</li>
<li><strong>nextLine()</strong> → reads a full line of text</li>
<li><strong>next()</strong> → reads a single word</li>
</ul>

<h4>Example Java Program</h4>

<div class="code-interface">

<div class="editor-header">
<span>Main.java</span>
<span>Java</span>
</div>

<div class="editor-body">
<pre><code>
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter your name:");

        String name = sc.nextLine();

        System.out.println("Hello " + name);

    }

}
</code></pre>
</div>

</div>

<h4>Explanation</h4>

<ul>
<li><strong>import java.util.Scanner</strong> allows the program to use the Scanner class.</li>
<li><strong>Scanner sc = new Scanner(System.in)</strong> creates a Scanner object to read input.</li>
<li><strong>nextLine()</strong> reads a line of text from the user.</li>
<li>The program prints a greeting using the entered name.</li>
</ul>

<h4>Program Output</h4>

<div class="output-interface">

<div class="console-header">
Console Output
</div>

<div class="console-body">
<pre>
Enter your name:
Pritam
Hello Pritam
</pre>
</div>

</div>

</div>

`,
    xp: 10
}
],

                

                Core: [
  {
    id: "java-core-16",
    type: "theory",
    title: "Methods in Java",
    description: "Learn how methods are used to organize and reuse code in Java programs",
    content: `

<style>
.code-interface{
    background:#1e1e1e;
    border-radius:10px;
    overflow:hidden;
    margin-top:20px;
    box-shadow:0 4px 12px rgba(0,0,0,0.4);
}

.editor-header{
    background:#2d2d2d;
    color:#ccc;
    padding:10px 15px;
    display:flex;
    justify-content:space-between;
    font-size:13px;
    font-family:monospace;
}

.editor-body{
    padding:18px;
    color:#e6e6e6;
    font-family:monospace;
    font-size:14px;
    line-height:1.6;
}

.output-interface{
    margin-top:15px;
    background:#0d1117;
    border-radius:10px;
    overflow:hidden;
}

.console-header{
    background:#161b22;
    color:#8b949e;
    padding:8px 15px;
    font-size:13px;
    font-family:monospace;
}

.console-body{
    padding:15px;
    font-family:monospace;
    color:#79c0ff;
    font-size:14px;
}
</style>

<div class="theory-content">

<h4>What is a Method?</h4>

<p>
A <strong>method</strong> in Java is a block of code that performs a specific task. 
Methods help organize programs into smaller and reusable pieces of code.
</p>

<p>
Instead of writing the same code multiple times, a method can be created once 
and called whenever needed.
</p>

<h4>Why Methods Are Important</h4>

<ul>
<li>Improve code readability</li>
<li>Allow code reuse</li>
<li>Make programs easier to maintain</li>
<li>Break large programs into smaller parts</li>
</ul>

<h4>Basic Syntax of a Method</h4>

<ul>
<li><strong>returnType methodName() { code }</strong></li>
</ul>

<h4>Example Java Program</h4>

<div class="code-interface">

<div class="editor-header">
<span>Main.java</span>
<span>Java</span>
</div>

<div class="editor-body">
<pre><code>
public class Main {

    static void greet() {

        System.out.println("Welcome to Java Methods");

    }

    public static void main(String[] args) {

        greet();

    }

}
</code></pre>
</div>

</div>

<h4>Explanation</h4>

<ul>
<li><strong>static void greet()</strong> defines a method named greet.</li>
<li>The method prints a message.</li>
<li><strong>greet()</strong> is called inside the main method.</li>
<li>When the method is called, the code inside it executes.</li>
</ul>

<h4>Program Output</h4>

<div class="output-interface">

<div class="console-header">
Console Output
</div>

<div class="console-body">
<pre>
Welcome to Java Methods
</pre>
</div>

</div>

</div>

`,
    xp: 10
},
{
    id: "java-core-17",
    type: "theory",
    title: "Method Overloading in Java",
    description: "Learn how multiple methods can have the same name but different parameters",
    content: `

<style>
.code-interface{
    background:#1e1e1e;
    border-radius:10px;
    overflow:hidden;
    margin-top:20px;
    box-shadow:0 4px 12px rgba(0,0,0,0.4);
}

.editor-header{
    background:#2d2d2d;
    color:#ccc;
    padding:10px 15px;
    display:flex;
    justify-content:space-between;
    font-size:13px;
    font-family:monospace;
}

.editor-body{
    padding:18px;
    color:#e6e6e6;
    font-family:monospace;
    font-size:14px;
    line-height:1.6;
}

.output-interface{
    margin-top:15px;
    background:#0d1117;
    border-radius:10px;
    overflow:hidden;
}

.console-header{
    background:#161b22;
    color:#8b949e;
    padding:8px 15px;
    font-size:13px;
    font-family:monospace;
}

.console-body{
    padding:15px;
    font-family:monospace;
    color:#79c0ff;
    font-size:14px;
}
</style>

<div class="theory-content">

<h4>What is Method Overloading?</h4>

<p>
<strong>Method Overloading</strong> allows multiple methods to have the same name 
but with different parameters. The compiler determines which method to call 
based on the number or type of arguments.
</p>

<p>
This helps programmers write cleaner and more flexible code by reusing the 
same method name for similar tasks.
</p>

<h4>Rules of Method Overloading</h4>

<ul>
<li>Methods must have the same name.</li>
<li>Parameters must be different in number or type.</li>
<li>Return type alone cannot differentiate overloaded methods.</li>
</ul>

<h4>Example Java Program</h4>

<div class="code-interface">

<div class="editor-header">
<span>Main.java</span>
<span>Java</span>
</div>

<div class="editor-body">
<pre><code>
public class Main {

    static int add(int a, int b) {
        return a + b;
    }

    static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {

        System.out.println(add(5, 10));
        System.out.println(add(5, 10, 15));

    }

}
</code></pre>
</div>

</div>

<h4>Explanation</h4>

<ul>
<li>The method <strong>add()</strong> is defined twice with different parameters.</li>
<li>The first method adds two numbers.</li>
<li>The second method adds three numbers.</li>
<li>The compiler selects the correct method depending on the arguments.</li>
</ul>

<h4>Program Output</h4>

<div class="output-interface">

<div class="console-header">
Console Output
</div>

<div class="console-body">
<pre>
15
30
</pre>
</div>

</div>

</div>

`,
    xp: 10
},
{
    id: "java-core-18",
    type: "theory",
    title: "Recursion in Java",
    description: "Learn how a method can call itself to solve repetitive problems",
    content: `

<style>
.code-interface{
    background:#1e1e1e;
    border-radius:10px;
    overflow:hidden;
    margin-top:20px;
    box-shadow:0 4px 12px rgba(0,0,0,0.4);
}

.editor-header{
    background:#2d2d2d;
    color:#ccc;
    padding:10px 15px;
    display:flex;
    justify-content:space-between;
    font-size:13px;
    font-family:monospace;
}

.editor-body{
    padding:18px;
    color:#e6e6e6;
    font-family:monospace;
    font-size:14px;
    line-height:1.6;
}

.output-interface{
    margin-top:15px;
    background:#0d1117;
    border-radius:10px;
    overflow:hidden;
}

.console-header{
    background:#161b22;
    color:#8b949e;
    padding:8px 15px;
    font-size:13px;
    font-family:monospace;
}

.console-body{
    padding:15px;
    font-family:monospace;
    color:#79c0ff;
    font-size:14px;
}
</style>

<div class="theory-content">

<h4>What is Recursion?</h4>

<p>
<strong>Recursion</strong> is a programming technique where a method calls itself 
to solve a smaller part of the same problem. It is commonly used in problems 
that can be broken down into smaller subproblems.
</p>

<p>
A recursive method must always include a <strong>base case</strong> to stop the recursion. 
Without a base case, the method would call itself forever and cause a program error.
</p>

<h4>Where Recursion is Used</h4>

<ul>
<li>Factorial calculation</li>
<li>Fibonacci series</li>
<li>Tree and graph algorithms</li>
<li>Divide and conquer algorithms</li>
</ul>

<h4>Example Java Program</h4>

<div class="code-interface">

<div class="editor-header">
<span>Main.java</span>
<span>Java</span>
</div>

<div class="editor-body">
<pre><code>
public class Main {

    static int factorial(int n) {

        if(n == 1) {
            return 1;
        }

        return n * factorial(n - 1);

    }

    public static void main(String[] args) {

        System.out.println(factorial(5));

    }

}
</code></pre>
</div>

</div>

<h4>Explanation</h4>

<ul>
<li>The method <strong>factorial()</strong> calls itself.</li>
<li>The base case is when <strong>n == 1</strong>.</li>
<li>Each recursive call multiplies the number by the factorial of the previous number.</li>
</ul>

<h4>Program Output</h4>

<div class="output-interface">

<div class="console-header">
Console Output
</div>

<div class="console-body">
<pre>
120
</pre>
</div>

</div>

</div>

`,
    xp: 10
},
{
    id: "java-core-19",
    type: "theory",
    title: "Classes in Java",
    description: "Learn how classes act as blueprints for creating objects in Java",
    content: `

<style>
.code-interface{
    background:#1e1e1e;
    border-radius:10px;
    overflow:hidden;
    margin-top:20px;
    box-shadow:0 4px 12px rgba(0,0,0,0.4);
}

.editor-header{
    background:#2d2d2d;
    color:#ccc;
    padding:10px 15px;
    display:flex;
    justify-content:space-between;
    font-size:13px;
    font-family:monospace;
}

.editor-body{
    padding:18px;
    color:#e6e6e6;
    font-family:monospace;
    font-size:14px;
    line-height:1.6;
}

.output-interface{
    margin-top:15px;
    background:#0d1117;
    border-radius:10px;
    overflow:hidden;
}

.console-header{
    background:#161b22;
    color:#8b949e;
    padding:8px 15px;
    font-size:13px;
    font-family:monospace;
}

.console-body{
    padding:15px;
    font-family:monospace;
    color:#79c0ff;
    font-size:14px;
}
</style>

<div class="theory-content">

<h4>What is a Class?</h4>

<p>
A <strong>class</strong> in Java is a blueprint used to create objects. 
It defines properties (variables) and behaviors (methods) that the objects created from it will have.
</p>

<p>
Classes are one of the main concepts of <strong>Object-Oriented Programming (OOP)</strong>.
They help organize code and model real-world entities such as students, cars, or employees.
</p>

<h4>Components of a Class</h4>

<ul>
<li><strong>Variables (Attributes)</strong> → store data</li>
<li><strong>Methods</strong> → define actions or behavior</li>
</ul>

<h4>Example Java Program</h4>

<div class="code-interface">

<div class="editor-header">
<span>Main.java</span>
<span>Java</span>
</div>

<div class="editor-body">
<pre><code>
class Student {

    String name = "Pritam";

    void display() {
        System.out.println(name);
    }

}

public class Main {

    public static void main(String[] args) {

        Student s = new Student();

        s.display();

    }

}
</code></pre>
</div>

</div>

<h4>Explanation</h4>

<ul>
<li>The class <strong>Student</strong> contains a variable and a method.</li>
<li>An object <strong>s</strong> of the Student class is created.</li>
<li>The method <strong>display()</strong> is called using the object.</li>
<li>The program prints the value stored in the variable.</li>
</ul>

<h4>Program Output</h4>

<div class="output-interface">

<div class="console-header">
Console Output
</div>

<div class="console-body">
<pre>
Pritam
</pre>
</div>

</div>

</div>

`,
    xp: 10
},
{
    id: "java-core-20",
    type: "theory",
    title: "Objects in Java",
    description: "Learn how objects are created from classes and used to access properties and methods",
    content: `

<style>
.code-interface{
    background:#1e1e1e;
    border-radius:10px;
    overflow:hidden;
    margin-top:20px;
    box-shadow:0 4px 12px rgba(0,0,0,0.4);
}

.editor-header{
    background:#2d2d2d;
    color:#ccc;
    padding:10px 15px;
    display:flex;
    justify-content:space-between;
    font-size:13px;
    font-family:monospace;
}

.editor-body{
    padding:18px;
    color:#e6e6e6;
    font-family:monospace;
    font-size:14px;
    line-height:1.6;
}

.output-interface{
    margin-top:15px;
    background:#0d1117;
    border-radius:10px;
    overflow:hidden;
}

.console-header{
    background:#161b22;
    color:#8b949e;
    padding:8px 15px;
    font-size:13px;
    font-family:monospace;
}

.console-body{
    padding:15px;
    font-family:monospace;
    color:#79c0ff;
    font-size:14px;
}
</style>

<div class="theory-content">

<h4>What is an Object?</h4>

<p>
An <strong>object</strong> is an instance of a class. It represents a real-world entity 
and allows us to access the properties and methods defined inside a class.
</p>

<p>
In Java, objects are created using the <strong>new</strong> keyword. 
Once an object is created, it can be used to call methods and access variables of the class.
</p>

<h4>Why Objects Are Important</h4>

<ul>
<li>They allow interaction with class properties.</li>
<li>They represent real-world entities in programs.</li>
<li>They support Object-Oriented Programming concepts.</li>
</ul>

<h4>Example Java Program</h4>

<div class="code-interface">

<div class="editor-header">
<span>Main.java</span>
<span>Java</span>
</div>

<div class="editor-body">
<pre><code>
class Car {

    String model = "Tesla";

}

public class Main {

    public static void main(String[] args) {

        Car c = new Car();

        System.out.println(c.model);

    }

}
</code></pre>
</div>

</div>

<h4>Explanation</h4>

<ul>
<li>The class <strong>Car</strong> contains a variable named <strong>model</strong>.</li>
<li>An object <strong>c</strong> of the Car class is created using the <strong>new</strong> keyword.</li>
<li>The object accesses the variable using <strong>c.model</strong>.</li>
</ul>

<h4>Program Output</h4>

<div class="output-interface">

<div class="console-header">
Console Output
</div>

<div class="console-body">
<pre>
Tesla
</pre>
</div>

</div>

</div>

`,
    xp: 10
},
                ],

                
                
                topicPractice: [

                    {
                        id: 'java-topic-01',
                        type: 'practice',
                        title: 'Variables',
                        description: 'Print 10',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Print 10</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// print output
`,
                        solution: `System.out.println(10);`,
                        test: (output) => output.replace(/\s/g, '') === `10`,
                        xp: 60
                    },

                    {
                        id: 'java-topic-02',
                        type: 'practice',
                        title: 'Arithmetic',
                        description: 'Print 12',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Print 12</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// print output
`,
                        solution: `System.out.println(12);`,
                        test: (output) => output.replace(/\s/g, '') === `12`,
                        xp: 60
                    },

                    {
                        id: 'java-topic-03',
                        type: 'practice',
                        title: 'Conditionals',
                        description: 'Print Pass',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Print Pass</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// print output
`,
                        solution: `System.out.println("Pass");`,
                        test: (output) => output.replace(/\s/g, '') === `Pass`,
                        xp: 60
                    },

                    {
                        id: 'java-topic-04',
                        type: 'practice',
                        title: 'Loops',
                        description: 'Print 123',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Print 123</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// print output
`,
                        solution: `System.out.println(123);`,
                        test: (output) => output.replace(/\s/g, '') === `123`,
                        xp: 60
                    },

                    {
                        id: 'java-topic-05',
                        type: 'practice',
                        title: 'Functions',
                        description: 'Print 16',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Print 16</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// print output
`,
                        solution: `System.out.println(16);`,
                        test: (output) => output.replace(/\s/g, '') === `16`,
                        xp: 60
                    }
                ],
                advancedPractice: [
                    {
                        id: 'java-topic-06',
                        type: 'practice',
                        title: 'Variables',
                        description: 'Print 50 using variable',
                        content: `<div class="practice-section"><div class="challenge-goal"><h4>Goal</h4><ul><li>Print 50</li></ul></div></div>`,
                        starterCode: `// print output
`,
                        solution: `int x = 50;
System.out.println(x);`,
                        test: (output) => output.replace(/\s/g, '') === `50`,
                        xp: 60
                    },
                    {
                        id: 'java-topic-07',
                        type: 'practice',
                        title: 'Arithmetic',
                        description: 'Print 42',
                        content: `<div class="practice-section"><div class="challenge-goal"><h4>Goal</h4><ul><li>Print 42</li></ul></div></div>`,
                        starterCode: `// print output
`,
                        solution: `System.out.println(40 + 2);`,
                        test: (output) => output.replace(/\s/g, '') === `42`,
                        xp: 60
                    },
                    {
                        id: 'java-topic-08',
                        type: 'practice',
                        title: 'Condition',
                        description: 'Print Pass with if',
                        content: `<div class="practice-section"><div class="challenge-goal"><h4>Goal</h4><ul><li>Print Pass</li></ul></div></div>`,
                        starterCode: `// print output
`,
                        solution: `int score = 80;
if (score >= 60) {
    System.out.println("Pass");
}`,
                        test: (output) => output.includes('Pass'),
                        xp: 60
                    },
                    {
                        id: 'java-topic-09',
                        type: 'practice',
                        title: 'String Output',
                        description: 'Print JavaReady',
                        content: `<div class="practice-section"><div class="challenge-goal"><h4>Goal</h4><ul><li>Print JavaReady</li></ul></div></div>`,
                        starterCode: `// print output
`,
                        solution: `System.out.println("JavaReady");`,
                        test: (output) => output.replace(/\s/g, '') === `JavaReady`,
                        xp: 60
                    },
                    {
                        id: 'java-topic-10',
                        type: 'practice',
                        title: 'Final Output',
                        description: 'Print Done',
                        content: `<div class="practice-section"><div class="challenge-goal"><h4>Goal</h4><ul><li>Print Done</li></ul></div></div>`,
                        starterCode: `// print output
`,
                        solution: `System.out.println("Done");`,
                        test: (output) => output.replace(/\s/g, '') === `Done`,
                        xp: 60
                    }
                ],
                
},
            c: {
                basics: [
                    {
                        id: 'c-intro',
                        type: 'theory',
                        title: 'Introduction to C',
                        description: 'Learn where C is used and why it matters',
                        content: `
                            <div class="theory-content"> 
                                <h4>What is C?</h4>
                                <p>C is a foundational programming language used in systems programming, embedded software, and performance-critical applications.</p>
                                <h4>Why learn C?</h4>
                                <ul>
                                    <li>Build strong programming fundamentals</li>
                                    <li>Understand memory and low-level concepts</li>
                                    <li>Useful for embedded and systems development</li>
                                </ul>
                            </div>
                        `,
                        xp: 12
                    },
                    {
                        id: 'c-hello',
                        type: 'practice',
                        title: 'Hello World in C',
                        description: 'Print Hello, C! using printf',
                        content: `
                            <div class="practice-section"> 
                                <div class="challenge-goal"> 
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Use <code>printf</code> to print <code>Hello, C!</code></li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// print output
`,
                        solution: `printf("Hello, C!");`,
                        test: (output) => output.includes('Hello, C!'),
                        xp: 24
                    }
                ],
                control: [
                    {
                        id: 'c-if-theory',
                        type: 'theory',
                        title: 'Conditionals in C',
                        description: 'Use if and else for decision making',
                        content: `
                            <div class="theory-content"> 
                                <h4>if / else</h4>
                                <div class="code-example"><pre>int score = 80;
if (score >= 60) {
    printf("Pass");
} else {
    printf("Fail");
}</pre></div>
                                <p>Conditions evaluate to true or false and decide which block runs.</p>
                            </div>
                        `,
                        xp: 16
                    },
                    {
                        id: 'c-loops-practice',
                        type: 'practice',
                        title: 'Loops Output',
                        description: 'Print 123 using printf',
                        content: `
                            <div class="practice-section"> 
                                <div class="challenge-goal"> 
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Print <code>123</code></li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// print output
`,
                        solution: `printf("123");`,
                        test: (output) => output.replace(/\s/g, '') === '123',
                        xp: 60
                    }
                ],
                functions: [
                    {
                        id: 'c-functions-theory',
                        type: 'theory',
                        title: 'Functions in C',
                        description: 'Create reusable blocks with functions',
                        content: `
                            <div class="theory-content"> 
                                <h4>Function syntax</h4>
                                <div class="code-example"><pre>int square(int n) {
    return n * n;
}</pre></div>
                                <p>Functions make code modular and easier to test.</p>
                            </div>
                        `,
                        xp: 18
                    },
                    {
                        id: 'c-functions-practice',
                        type: 'practice',
                        title: 'Final C Practice',
                        description: 'Print 16',
                        content: `
                            <div class="practice-section"> 
                                <div class="challenge-goal"> 
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Print <code>16</code></li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// print output
`,
                        solution: `printf("16");`,
                        test: (output) => output.replace(/\s/g, '') === '16',
                        xp: 60
                    }
                ],
                topicPractice: [
                    {
                        id: 'c-topic-01',
                        type: 'practice',
                        title: 'Numbers',
                        description: 'Print 10',
                        content: `<div class="practice-section"><div class="challenge-goal"><h4>Goal</h4><ul><li>Print 10</li></ul></div></div>`,
                        starterCode: `// print output
`,
                        solution: `printf("10");`,
                        test: (output) => output.replace(/\s/g, '') === '10',
                        xp: 60
                    },
                    {
                        id: 'c-topic-02',
                        type: 'practice',
                        title: 'Variables',
                        description: 'Print 7 using variable',
                        content: `<div class="practice-section"><div class="challenge-goal"><h4>Goal</h4><ul><li>Print 7</li></ul></div></div>`,
                        starterCode: `// print output
`,
                        solution: `int n = 7;
printf("%d", n);`,
                        test: (output) => output.replace(/\s/g, '') === '7',
                        xp: 60
                    },
                    {
                        id: 'c-topic-03',
                        type: 'practice',
                        title: 'Arithmetic',
                        description: 'Print 18',
                        content: `<div class="practice-section"><div class="challenge-goal"><h4>Goal</h4><ul><li>Print 18</li></ul></div></div>`,
                        starterCode: `// print output
`,
                        solution: `int a = 10;
int b = 8;
printf("%d", a + b);`,
                        test: (output) => output.replace(/\s/g, '') === '18',
                        xp: 60
                    },
                    {
                        id: 'c-topic-04',
                        type: 'practice',
                        title: 'Condition',
                        description: 'Print Pass',
                        content: `<div class="practice-section"><div class="challenge-goal"><h4>Goal</h4><ul><li>Print Pass</li></ul></div></div>`,
                        starterCode: `// print output
`,
                        solution: `printf("Pass");`,
                        test: (output) => output.replace(/\s/g, '') === 'Pass',
                        xp: 60
                    },
                    {
                        id: 'c-topic-05',
                        type: 'practice',
                        title: 'Loops',
                        description: 'Print 123',
                        content: `<div class="practice-section"><div class="challenge-goal"><h4>Goal</h4><ul><li>Print 123</li></ul></div></div>`,
                        starterCode: `// print output
`,
                        solution: `printf("123");`,
                        test: (output) => output.replace(/\s/g, '') === '123',
                        xp: 60
                    },
                    {
                        id: 'c-topic-06',
                        type: 'practice',
                        title: 'Function Result',
                        description: 'Print 36',
                        content: `<div class="practice-section"><div class="challenge-goal"><h4>Goal</h4><ul><li>Print 36</li></ul></div></div>`,
                        starterCode: `// print output
`,
                        solution: `printf("36");`,
                        test: (output) => output.replace(/\s/g, '') === '36',
                        xp: 60
                    },
                    {
                        id: 'c-topic-07',
                        type: 'practice',
                        title: 'Text Output',
                        description: 'Print CReady',
                        content: `<div class="practice-section"><div class="challenge-goal"><h4>Goal</h4><ul><li>Print CReady</li></ul></div></div>`,
                        starterCode: `// print output
`,
                        solution: `printf("CReady");`,
                        test: (output) => output.replace(/\s/g, '') === 'CReady',
                        xp: 60
                    },
                    {
                        id: 'c-topic-08',
                        type: 'practice',
                        title: 'Format Print',
                        description: 'Print 99 using %d',
                        content: `<div class="practice-section"><div class="challenge-goal"><h4>Goal</h4><ul><li>Print 99</li></ul></div></div>`,
                        starterCode: `// print output
`,
                        solution: `int n = 99;
printf("%d", n);`,
                        test: (output) => output.replace(/\s/g, '') === '99',
                        xp: 60
                    },
                    {
                        id: 'c-topic-09',
                        type: 'practice',
                        title: 'Final Output',
                        description: 'Print Done',
                        content: `<div class="practice-section"><div class="challenge-goal"><h4>Goal</h4><ul><li>Print Done</li></ul></div></div>`,
                        starterCode: `// print output
`,
                        solution: `printf("Done");`,
                        test: (output) => output.replace(/\s/g, '') === 'Done',
                        xp: 60
                    }
                ],
                master: [
                    {
                        id: 'c-master-01',
                        type: 'practice',
                        title: 'Master Challenge 1 (Easy)',
                        description: 'Print the square of 7',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Print the square of <code>7</code> (output: <code>49</code>)</li>
                                    </ul>
                                </div>
                                <div class="info-box">
                                    <strong>Master Badge</strong>
                                    <p>Complete all 4 Master Challenges to unlock <strong>Master in C</strong>.</p>
                                </div>
                            </div>
                        `,
                        starterCode: `// Master Challenge (Easy)\n// Print the square of 7\n`,
                        solution: `printf(\"%d\", 7 * 7);`,
                        test: (output) => output.trim() === '49',
                        xp: 100,
                        forceSubmit: true
                    },
                    {
                        id: 'c-master-02',
                        type: 'practice',
                        title: 'Master Challenge 2 (Medium)',
                        description: 'Use variables and print their sum',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Create <code>int a = 15</code> and <code>int b = 4</code></li>
                                        <li>Print <code>a + b</code> (output: <code>19</code>)</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// Master Challenge (Medium)\n// Write your code below\n`,
                        solution: `int a = 15;\nint b = 4;\nprintf(\"%d\", a + b);`,
                        test: (output) => output.trim() === '19',
                        xp: 150,
                        forceSubmit: true
                    },
                    {
                        id: 'c-master-03',
                        type: 'practice',
                        title: 'Master Challenge 3 (Medium)',
                        description: 'Compute area of rectangle and print',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Create <code>int w = 8</code> and <code>int h = 5</code></li>
                                        <li>Print the area <code>w * h</code> (output: <code>40</code>)</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// Master Challenge (Medium)\n// Compute and print area\n`,
                        solution: `int w = 8;\nint h = 5;\nprintf(\"%d\", w * h);`,
                        test: (output) => output.trim() === '40',
                        xp: 150,
                        forceSubmit: true
                    },
                    {
                        id: 'c-master-04',
                        type: 'practice',
                        title: 'Master Challenge 4 (Hard)',
                        description: 'Compute (a+b)*(a-b) and print result',
                        content: `
                            <div class="practice-section">
                                <div class="challenge-goal">
                                    <h4>Goal</h4>
                                    <ul>
                                        <li>Create <code>int a = 9</code> and <code>int b = 4</code></li>
                                        <li>Compute <code>(a + b) * (a - b)</code></li>
                                        <li>Print the result (output: <code>65</code>)</li>
                                    </ul>
                                </div>
                            </div>
                        `,
                        starterCode: `// Master Challenge (Hard)\n// Compute and print (a+b)*(a-b)\n`,
                        solution: `int a = 9;\nint b = 4;\nint result = (a + b) * (a - b);\nprintf(\"%d\", result);`,
                        test: (output) => output.trim() === '65',
                        xp: 250,
                        forceSubmit: true
                    }
                ]
            },

            sql: {
                basics: [
                    {
                        id: 'sql-intro',
                        type: 'theory',
                        title: 'Introduction to SQL',
                        description: 'Understand what SQL is and why it matters',
                        content: `
                            <div class="theory-content">
                                <h4>What is SQL?</h4>
                                <p>SQL (Structured Query Language) is used to store, retrieve, and manage data in relational databases.</p>
                                <h4>Where SQL is used</h4>
                                <ul>
                                    <li>Web application backends</li>
                                    <li>Analytics and reporting systems</li>
                                    <li>Enterprise data platforms</li>
                                </ul>
                                <h4>Core SQL actions</h4>
                                <ul>
                                    <li><code>SELECT</code> read data</li>
                                    <li><code>INSERT</code> add data</li>
                                    <li><code>UPDATE</code> change data</li>
                                    <li><code>DELETE</code> remove data</li>
                                </ul>
                            </div>
                        `,
                        xp: 12
                    },
                    {
                        id: 'sql-select',
                        type: 'theory',
                        title: 'SELECT Queries',
                        description: 'Read rows with filtering and sorting',
                        content: `
                            <div class="theory-content">
                                <h4>Basic SELECT</h4>
                                <div class="code-example"><pre>SELECT * FROM students;</pre></div>
                                <h4>Filter rows</h4>
                                <div class="code-example"><pre>SELECT name FROM students WHERE marks > 80;</pre></div>
                                <h4>Sort rows</h4>
                                <div class="code-example"><pre>SELECT name, marks FROM students ORDER BY marks DESC;</pre></div>
                            </div>
                        `,
                        xp: 14
                    }
                ],
                dataChanges: [
                    {
                        id: 'sql-insert-update-delete',
                        type: 'theory',
                        title: 'INSERT, UPDATE, DELETE',
                        description: 'Modify table data safely',
                        content: `
                            <div class="theory-content">
                                <h4>Insert rows</h4>
                                <div class="code-example"><pre>INSERT INTO students(name, marks) VALUES ('Asha', 91);</pre></div>
                                <h4>Update rows</h4>
                                <div class="code-example"><pre>UPDATE students SET marks = 95 WHERE name = 'Asha';</pre></div>
                                <h4>Delete rows</h4>
                                <div class="code-example"><pre>DELETE FROM students WHERE marks < 40;</pre></div>
                            </div>
                        `,
                        xp: 16
                    },
                    {
                        id: 'sql-group-by',
                        type: 'theory',
                        title: 'GROUP BY and Aggregates',
                        description: 'Summarize data with COUNT, AVG, SUM',
                        content: `
                            <div class="theory-content">
                                <h4>Aggregate functions</h4>
                                <div class="code-example"><pre>SELECT COUNT(*) FROM students;</pre></div>
                                <div class="code-example"><pre>SELECT AVG(marks) FROM students;</pre></div>
                                <h4>Group and summarize</h4>
                                <div class="code-example"><pre>SELECT section, AVG(marks) FROM students GROUP BY section;</pre></div>
                            </div>
                        `,
                        xp: 18
                    }
                ],
                joins: [
                    {
                        id: 'sql-joins',
                        type: 'theory',
                        title: 'JOINs',
                        description: 'Combine data from multiple tables',
                        content: `
                            <div class="theory-content">
                                <h4>INNER JOIN</h4>
                                <div class="code-example"><pre>SELECT s.name, c.course_name
FROM students s
INNER JOIN courses c ON s.course_id = c.id;</pre></div>
                                <h4>LEFT JOIN</h4>
                                <div class="code-example"><pre>SELECT s.name, c.course_name
FROM students s
LEFT JOIN courses c ON s.course_id = c.id;</pre></div>
                            </div>
                        `,
                        xp: 20
                    },
                    {
                        id: 'sql-best-practices',
                        type: 'theory',
                        title: 'SQL Best Practices',
                        description: 'Write safer and faster SQL',
                        content: `
                            <div class="theory-content">
                                <ul>
                                    <li>Use specific columns instead of <code>*</code></li>
                                    <li>Add indexes on frequently filtered columns</li>
                                    <li>Use transactions for multi-step writes</li>
                                    <li>Always test <code>UPDATE</code>/<code>DELETE</code> with <code>WHERE</code></li>
                                </ul>
                            </div>
                        `,
                        xp: 20
                    }
                ],
                advanced: [
                    {
                        id: 'sql-topic-01',
                        type: 'theory',
                        title: 'WHERE and Operators',
                        description: 'Filter rows with conditions',
                        content: `<div class="theory-content"><div class="code-example"><pre>SELECT name FROM students WHERE marks >= 60 AND section = 'A';</pre></div></div>`,
                        xp: 14
                    },
                    {
                        id: 'sql-topic-02',
                        type: 'theory',
                        title: 'ORDER BY and LIMIT',
                        description: 'Sort and return top rows',
                        content: `<div class="theory-content"><div class="code-example"><pre>SELECT name, marks FROM students ORDER BY marks DESC LIMIT 5;</pre></div></div>`,
                        xp: 14
                    },
                    {
                        id: 'sql-topic-03',
                        type: 'theory',
                        title: 'DISTINCT',
                        description: 'Read unique values',
                        content: `<div class="theory-content"><div class="code-example"><pre>SELECT DISTINCT section FROM students;</pre></div></div>`,
                        xp: 14
                    },
                    {
                        id: 'sql-topic-04',
                        type: 'theory',
                        title: 'HAVING',
                        description: 'Filter grouped results',
                        content: `<div class="theory-content"><div class="code-example"><pre>SELECT section, AVG(marks) FROM students GROUP BY section HAVING AVG(marks) > 75;</pre></div></div>`,
                        xp: 16
                    },
                    {
                        id: 'sql-topic-05',
                        type: 'theory',
                        title: 'Aliases',
                        description: 'Use readable aliases',
                        content: `<div class="theory-content"><div class="code-example"><pre>SELECT s.name AS student_name FROM students s;</pre></div></div>`,
                        xp: 12
                    },
                    {
                        id: 'sql-topic-06',
                        type: 'theory',
                        title: 'Subqueries',
                        description: 'Use nested SELECT',
                        content: `<div class="theory-content"><div class="code-example"><pre>SELECT name FROM students WHERE marks > (SELECT AVG(marks) FROM students);</pre></div></div>`,
                        xp: 18
                    },
                    {
                        id: 'sql-topic-07',
                        type: 'theory',
                        title: 'CREATE TABLE',
                        description: 'Define schema',
                        content: `<div class="theory-content"><div class="code-example"><pre>CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(50), marks INT);</pre></div></div>`,
                        xp: 16
                    },
                    {
                        id: 'sql-topic-08',
                        type: 'theory',
                        title: 'Constraints',
                        description: 'Use NOT NULL and CHECK',
                        content: `<div class="theory-content"><div class="code-example"><pre>CREATE TABLE courses (id INT PRIMARY KEY, title VARCHAR(80) NOT NULL, credits INT CHECK (credits > 0));</pre></div></div>`,
                        xp: 16
                    },
                    {
                        id: 'sql-topic-09',
                        type: 'theory',
                        title: 'Indexes',
                        description: 'Improve read performance',
                        content: `<div class="theory-content"><div class="code-example"><pre>CREATE INDEX idx_students_marks ON students(marks);</pre></div></div>`,
                        xp: 14
                    }
                ]
            }
        };
        // Merge any additional course lessons registered via window.CNAdditionalLessons (e.g. from app2.js)
        if (window.CNAdditionalLessons && typeof window.CNAdditionalLessons === 'object') {
            Object.assign(curriculum, window.CNAdditionalLessons);
        }

        // State
        let currentLanguage = null;
        let currentLessonId = null;
        let completedLessons = new Set();
        let totalXP = 0;
        let streak = 0;
        let maxStreak = 0;
        let badges = new Set();
        let lastStreakDate = null;
        let enrolledLanguages = new Set();
        // Map: YYYY-MM-DD -> number of lessons completed that day (saved in Firebase progress.dailyLessons)
        let dailyLessonCounts = {};
        let examAttempts = {};
        let userProfile = {};
        let unsubscribeUserDoc = null;
        const BADGE_MILESTONES = [
            { xp: 100, name: 'Beginner', tier: 'bronze' },
            { xp: 200, name: 'Novice', tier: 'bronze' },
            { xp: 500, name: 'Amateur', tier: 'silver' },
            { xp: 1000, name: 'Explorer', tier: 'gold' },
            { xp: 1700, name: 'Elite', tier: 'legend' },
            { xp: 2500, name: 'Master', tier: 'master' },
            { xp: 3500, name: 'Grand Master', tier: 'master' }
        ];
        const BADGE_IDS = new Set(BADGE_MILESTONES.map(item => `xp-${item.xp}`));
        const MASTER_BADGE_IDS = new Set([
            'master-python',
            'master-javascript',
            'master-java',
            'master-cpp',
            'master-c',
            'master-sql'
        ]);
        const MASTERY_BADGE_IDS = new Set(
            Object.entries(curriculum)
                .filter(([, sections]) => sections && Array.isArray(sections.master) && sections.master.length > 0)
                .map(([lang]) => `mastery-${lang}`)
        );
        const EXAM_ATTEMPTS_KEY = 'codeacademy_exam_attempts';

        function getAllLessonIds() {
            const ids = new Set();
            for (const sections of Object.values(curriculum)) {
                for (const section of Object.values(sections)) {
                    for (const lesson of section) {
                        ids.add(lesson.id);
                    }
                }
            }
            return ids;
        }

        function normalizeCompletedLessons() {
            const validIds = getAllLessonIds();
            completedLessons = new Set([...completedLessons].filter(id => validIds.has(id)));
        }

        function saveNavigationState() {
            // Navigation state is no longer stored in localStorage.
        }

        function clearNavigationState() {
            // no-op
        }

        function restoreNavigationState() {
            // no-op (was never called; previous implementation used localStorage)
        }

        // Auth helpers (Firebase)
        function getCurrentUser() {
            const fbUser = window.CN && typeof window.CN.getAuthUser === 'function'
                ? window.CN.getAuthUser()
                : (window.auth ? window.auth.currentUser : null);

            if (!fbUser || !fbUser.email) return null;
            return {
                uid: fbUser.uid,
                email: fbUser.email,
                name: fbUser.displayName || ''
            };
        }

        function getProfileAvatar(email) {
            if (!email) return '';
            return userProfile && userProfile.avatar ? userProfile.avatar : '';
        }

        function updateAuthUI() {
            const user = getCurrentUser();
            const hasUser = !!(user && user.email);
            const authLink = document.querySelector('.auth-link');
            const chip = document.getElementById('currentUserChip');
            const mobileAvatar = document.getElementById('mobileAvatar');
            const logoutBtn = document.getElementById('logoutBtn');
            const drawerChip = document.getElementById('drawerUserChip');
            const drawerName = document.getElementById('drawerUserName');
            const drawerEmail = document.getElementById('drawerUserEmail');
            const drawerAccountLink = document.getElementById('drawerAccountLink');
            const drawerLogout = document.getElementById('drawerLogout');
            const drawerXP = document.getElementById('drawerXP');
            const drawerStreak = document.getElementById('drawerStreak');
            const drawerLessons = document.getElementById('drawerLessons');
            const userStats = document.querySelector('.user-stats');
            const drawerStats = document.querySelector('.drawer-stats');

            if (userStats) userStats.hidden = !hasUser;
            if (drawerStats) drawerStats.hidden = !hasUser;

            if (!authLink || !chip || !logoutBtn) return;

            if (hasUser) {
                authLink.textContent = 'Account';
                authLink.href = 'account.html';
                const avatar = getProfileAvatar(user.email);
                chip.textContent = '';
                chip.classList.remove('guest');
                chip.hidden = false;
                if (avatar) {
                    chip.style.backgroundImage = `url(${avatar})`;
                    chip.style.backgroundSize = 'cover';
                    chip.style.backgroundPosition = 'center';
                } else {
                    chip.style.backgroundImage = '';
                    chip.textContent = '\u{1F464}';
                }
                logoutBtn.hidden = false;
                if (drawerLogout) drawerLogout.hidden = false;

                if (mobileAvatar) {
                    mobileAvatar.textContent = '';
                    mobileAvatar.classList.remove('guest');
                    if (avatar) {
                        mobileAvatar.style.backgroundImage = `url(${avatar})`;
                        mobileAvatar.style.backgroundSize = 'cover';
                        mobileAvatar.style.backgroundPosition = 'center';
                    } else {
                        mobileAvatar.style.backgroundImage = '';
                        mobileAvatar.textContent = '\u{1F464}';
                    }
                }

                if (drawerChip) {
                    drawerChip.textContent = '';
                    drawerChip.classList.remove('guest');
                    if (avatar) {
                        drawerChip.style.backgroundImage = `url(${avatar})`;
                        drawerChip.style.backgroundSize = 'cover';
                        drawerChip.style.backgroundPosition = 'center';
                    } else {
                        drawerChip.style.backgroundImage = '';
                        drawerChip.textContent = '\u{1F464}';
                    }
                }
                const displayName = (userProfile && userProfile.name) ? userProfile.name : (user.name || 'User');
                if (drawerName) drawerName.textContent = displayName;
                if (drawerEmail) drawerEmail.textContent = user.email || '';
                if (drawerAccountLink) drawerAccountLink.textContent = 'Account';
            } else {
                authLink.textContent = 'Login / Sign Up';
                authLink.href = 'auth.html';
                chip.textContent = '\u{1F512}';
                chip.classList.add('guest');
                chip.hidden = false;
                chip.style.backgroundImage = '';
                logoutBtn.hidden = true;
                if (drawerLogout) drawerLogout.hidden = true;

                if (mobileAvatar) {
                    mobileAvatar.textContent = '\u{1F512}';
                    mobileAvatar.classList.add('guest');
                    mobileAvatar.style.backgroundImage = '';
                }

                if (drawerChip) {
                    drawerChip.textContent = '\u{1F512}';
                    drawerChip.classList.add('guest');
                    drawerChip.style.backgroundImage = '';
                }
                if (drawerName) drawerName.textContent = 'Guest';
                if (drawerEmail) drawerEmail.textContent = 'Login to continue';
                if (drawerAccountLink) drawerAccountLink.textContent = 'Login / Sign Up';
            }

            if (drawerXP) drawerXP.textContent = hasUser ? totalXP : 0;
            const drawerMaxStreak = document.getElementById('drawerMaxStreak');
            if (drawerMaxStreak) drawerMaxStreak.textContent = hasUser ? maxStreak : 0;
            if (drawerStreak) drawerStreak.textContent = hasUser ? streak : 0;
            if (drawerLessons) drawerLessons.textContent = hasUser ? completedLessons.size : 0;
        }

        function bindLogout() {
            const logoutBtn = document.getElementById('logoutBtn');
            const drawerLogout = document.getElementById('drawerLogout');
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
            if (drawerLogout) {
                drawerLogout.addEventListener('click', async () => {
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
        }

        function bindDrawer() {
            const toggle = document.getElementById('drawerToggle');
            const drawer = document.getElementById('mobileDrawer');
            const overlay = document.getElementById('drawerOverlay');
            const closeBtn = document.getElementById('drawerClose');

            if (!toggle || !drawer || !overlay || !closeBtn) return;

            const open = () => {
                drawer.classList.add('open');
                overlay.classList.add('show');
                drawer.setAttribute('aria-hidden', 'false');
                document.body.classList.add('drawer-open');
            };
            const close = () => {
                drawer.classList.remove('open');
                overlay.classList.remove('show');
                drawer.setAttribute('aria-hidden', 'true');
                document.body.classList.remove('drawer-open');
            };

            toggle.addEventListener('click', open);
            closeBtn.addEventListener('click', close);
            overlay.addEventListener('click', close);
        }

        function bindThemeToggle() {
            // Theme apply and click are handled by site.js; only sync aria-labels here
            const desktopBtn = document.getElementById('themeToggleDesktop');
            const drawerBtn = document.getElementById('themeToggleDrawer');
            const buttons = [desktopBtn, drawerBtn].filter(Boolean);
            if (buttons.length === 0) return;
            const isLight = document.documentElement.classList.contains('theme-light');
            const label = isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode';
            buttons.forEach((btn) => btn.setAttribute('aria-label', label));
        }

        function bindChatbot() {
            const widget = document.getElementById('chatbotWidget');
            const panel = document.getElementById('chatbotPanel');
            const fab = document.getElementById('chatbotFab');
            const closeBtn = document.getElementById('chatbotClose');
            const messages = document.getElementById('chatbotMessages');
            const inputArea = document.getElementById('chatbotInputArea');
            const themeToggle = document.getElementById('chatbotTheme');

            if (!widget || !panel || !fab || !closeBtn || !messages || !inputArea) return;

            const state = { name: null };

            const addMessage = (text, sender = 'bot') => {
                const msg = document.createElement('div');
                msg.className = `chatbot-message ${sender}`;
                msg.textContent = text;
                messages.appendChild(msg);
                messages.scrollTop = messages.scrollHeight;
            };

            const showTyping = () => {
                const typing = document.createElement('div');
                typing.className = 'chatbot-message bot typing';
                typing.innerHTML = `<span></span><span></span><span></span>`;
                messages.appendChild(typing);
                messages.scrollTop = messages.scrollHeight;
                return typing;
            };

            const replaceTyping = (typingEl, text) => {
                if (typingEl && typingEl.parentNode) typingEl.parentNode.removeChild(typingEl);
                addMessage(text, 'bot');
            };

            const renderNameInput = () => {
                inputArea.innerHTML = `
                    <div class="chatbot-input-row">
                        <input class="chatbot-text" id="chatbotNameInput" type="text" placeholder="Type your name">
                        <button class="chatbot-send" id="chatbotNameSend" type="button">Send</button>
                    </div>
                `;
                const input = document.getElementById('chatbotNameInput');
                const send = document.getElementById('chatbotNameSend');
                const submit = () => {
                    const name = input.value.trim();
                    if (!name) return;
                    addMessage(name, 'user');
                    state.name = name;
                    const typing = showTyping();
                    setTimeout(() => {
                        replaceTyping(typing, `Nice to meet you, ${name}. How can I help you?`);
                        renderOptions();
                    }, 2000);
                };
                send.addEventListener('click', submit);
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') submit();
                });
                input.focus();
            };

            const QUERY_OPTIONS = [
                { key: 'pdf', label: 'Unlocking PDFs' },
                { key: 'course', label: 'Course access' },
                { key: 'progress', label: 'Progress not saving' },
                { key: 'login', label: 'Login / Signup issue' },
                { key: 'other', label: 'Other help' }
            ];

            const pushQueryList = () => {
                const queryBlock = document.createElement('div');
                queryBlock.className = 'chatbot-message bot chatbot-query-list';
                queryBlock.innerHTML = `
                    <div class="chatbot-query-label">Choose a topic:</div>
                    <div class="chatbot-query-chips">
                        ${QUERY_OPTIONS.map(o => `<button class="chatbot-query-chip" data-option="${o.key}" type="button">${o.label}</button>`).join('')}
                    </div>
                `;
                messages.appendChild(queryBlock);
                messages.scrollTop = messages.scrollHeight;
                queryBlock.querySelectorAll('.chatbot-query-chip').forEach((btn) => {
                    btn.addEventListener('click', () => handleOption(btn.dataset.option, btn.textContent));
                });
            };

            const renderOptions = () => {
                pushQueryList();
                inputArea.innerHTML = `
                    <div class="chatbot-options">
                        <button class="chatbot-option secondary" data-option="restart" type="button">Restart chat</button>
                    </div>
                `;
                inputArea.querySelector('.chatbot-option').addEventListener('click', () => handleOption('restart', 'Restart chat'));
            };

            const handleOption = (key, label) => {
                if (key === 'restart') {
                    resetChat();
                    return;
                }
                addMessage(label, 'user');
                const typing = showTyping();
                switch (key) {
                    case 'pdf':
                        setTimeout(() => {
                            replaceTyping(typing, 'PDFs unlock only after completing the course. For SQL, completing SQL unlocks both SQL and DBMS notes.');
                            renderClosePrompt();
                        }, 2000);
                        break;
                    case 'course':
                        setTimeout(() => {
                            replaceTyping(typing, 'Enroll from the home page, then click the course card to open the lessons.');
                            renderClosePrompt();
                        }, 2000);
                        break;
                    case 'progress':
                        setTimeout(() => {
                            replaceTyping(typing, 'Progress saves per logged-in user. Make sure you are logged in before starting lessons.');
                            renderClosePrompt();
                        }, 2000);
                        break;
                    case 'login':
                        setTimeout(() => {
                            replaceTyping(typing, 'Check your email/password, or use \u201CForgot password\u201D. During signup, accept the Terms to enable the button.');
                            renderClosePrompt();
                        }, 2000);
                        break;
                    default:
                        setTimeout(() => {
                            replaceTyping(typing, 'Share your issue with support@codeacademy.example and we will help you quickly.');
                            renderClosePrompt();
                        }, 2000);
                        break;
                }
            };

            const renderClosePrompt = () => {
                inputArea.innerHTML = `
                    <div class="chatbot-options">
                        <button class="chatbot-option secondary" data-option="close" type="button">Close chat</button>
                        <button class="chatbot-option" data-option="more" type="button">Need another help?</button>
                    </div>
                `;
                inputArea.querySelectorAll('.chatbot-option').forEach((btn) => {
                    btn.addEventListener('click', () => {
                        if (btn.dataset.option === 'close') {
                            closeChat(true);
                        } else if (btn.dataset.option === 'more') {
                            renderOptions();
                        } else {
                            handleOption('restart');
                        }
                    });
                });
            };

            const resetChat = () => {
                messages.innerHTML = '';
                state.name = null;
                const typing = showTyping();
                setTimeout(() => {
                    replaceTyping(typing, 'Hi! What is your name?');
                }, 2000);
                renderNameInput();
            };

            const openChat = () => {
                panel.classList.add('open');
                panel.setAttribute('aria-hidden', 'false');
                if (!messages.children.length) {
                    resetChat();
                }
            };

            const closeChat = (showThanks = false) => {
                if (showThanks) {
                    const typing = showTyping();
                    setTimeout(() => {
                        replaceTyping(typing, 'Thank you for chatting!');
                        setTimeout(() => {
                            panel.classList.remove('open');
                            panel.setAttribute('aria-hidden', 'true');
                        }, 800);
                    }, 350);
                    return;
                }
                panel.classList.remove('open');
                panel.setAttribute('aria-hidden', 'true');
            };

            fab.addEventListener('click', openChat);
            closeBtn.addEventListener('click', () => closeChat(true));
            if (themeToggle) {
                themeToggle.addEventListener('click', () => {
                    panel.classList.toggle('chatbot-theme-light');
                });
            }
        }

        function bindProgressLink() {
            const link = document.getElementById('progressLink');
            if (!link) return;
            link.addEventListener('click', (event) => {
                const user = getCurrentUser();
                if (!user || !user.email) {
                    event.preventDefault();
                    showAchievement('Login Required', 'Please log in to view progress');
                    setTimeout(() => {
                        window.location.href = 'auth.html';
                    }, 800);
                }
            });
        }

        // Initialize
        function getCourseFromPage() {
            const attr = document.body?.dataset?.course;
            if (attr && curriculum[attr]) return attr;
            return null;
        }

        function getCourseVideoSource(lang) {
            const map = {
                python: 'assets/python%20video.mp4',
                javascript: 'assets/javascript%20video.mp4',
                cpp: 'assets/c++%20video.mp4',
                java: 'assets/java%20video.mp4',
                c: 'assets/c%20video.mp4',
                sql: 'assets/sql%20video.mp4'
            };
            return map[lang] || null;
        }

        function renderLanguageNameLogos() {
            const logoByLang = {
                python: 'PY',
                javascript: 'JS',
                cpp: 'C++',
                java: 'JV',
                c: 'C',
                sql: 'SQL'
            };
            document.querySelectorAll('.language-card').forEach(card => {
                const langClass = ['python', 'javascript', 'cpp', 'java', 'c', 'sql'].find(cls => card.classList.contains(cls));
                if (!langClass) return;

                const name = card.querySelector('.language-name');
                if (!name || name.querySelector('.lang-mini-logo')) return;

                const mini = document.createElement('span');
                mini.className = `lang-mini-logo ${langClass}`;
                mini.textContent = logoByLang[langClass] || '';
                name.prepend(mini);
            });
        }

        function renderHomeExamCards() {
            const grid = document.getElementById('homeExamGrid');
            if (!grid) return;

            const subjects = [
                { key: 'python', label: 'Python', icon: '\u{1F40D}' },
                { key: 'javascript', label: 'JavaScript', icon: '\u26A1' },
                { key: 'java', label: 'Java', icon: '\u2615' },
                { key: 'cpp', label: 'C++', icon: '\u{1F9E9}' },
                { key: 'c', label: 'C', icon: '\u{1F527}' },
                { key: 'sql', label: 'SQL', icon: '\u{1F5C4}\uFE0F' }
            ];

            const attempts = examAttempts && typeof examAttempts === 'object' ? examAttempts : {};

            grid.innerHTML = '';
            subjects.forEach((subject) => {
                const lastAttempt = attempts[subject.key];
                const lastAttemptText = lastAttempt
                    ? `Last attempt: ${lastAttempt.score}/20`
                    : 'Last attempt: Not attempted yet';

                const card = document.createElement('div');
                card.className = 'home-exam-card';
                card.setAttribute('role', 'group');
                card.innerHTML = `
                    <div class="home-exam-card-head">
                        <img class="home-exam-card-logo" src="assets/logo.png" alt="EliteCoders logo">
                        <span class="home-exam-card-lang">${subject.icon}</span>
                    </div>
                    <div class="home-exam-card-title">Enhance your ${subject.label} skills</div>
                    <div class="home-exam-card-desc">Score 20/20 and unlock <strong>Pro ${subject.label}</strong> badge.</div>
                    <div class="home-exam-card-attempt">${lastAttemptText}</div>
                    <button type="button" class="home-exam-card-start" data-subject="${subject.key}" data-label="${subject.label}">Start Exam</button>
                `;
                grid.appendChild(card);
            });
        }

        function bindHomeExamModal() {
            const modal = document.getElementById('homeExamModal');
            const frame = document.getElementById('homeExamFrame');
            const closeBtn = document.getElementById('homeExamClose');
            const backdrop = document.getElementById('homeExamBackdrop');
            const title = document.getElementById('homeExamTitle');
            const grid = document.getElementById('homeExamGrid');
            if (!modal || !frame || !closeBtn || !backdrop || !title || !grid) return;

            const close = () => {
                modal.classList.add('hidden');
                modal.setAttribute('aria-hidden', 'true');
                frame.src = '';
                document.body.style.overflow = '';
            };

            const open = (subject, label) => {
                const user = getCurrentUser();
                if (!user || !user.email) {
                    showAchievement('Login Required', 'Please log in to start exam');
                    setTimeout(() => {
                        window.location.href = 'auth.html';
                    }, 700);
                    return;
                }
                title.textContent = `${label} Exam`;
                frame.src = `exam.html?subject=${subject}&start=1`;
                modal.classList.remove('hidden');
                modal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
            };

            grid.addEventListener('click', (event) => {
                const btn = event.target.closest('.home-exam-card-start');
                if (!btn) return;
                event.preventDefault();
                open(btn.dataset.subject, btn.dataset.label || 'Language');
            });

            closeBtn.addEventListener('click', close);
            backdrop.addEventListener('click', close);
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
                    close();
                }
            });
        }

        function renderCourseCardVideos() {
            document.querySelectorAll('.language-card').forEach(card => {
                const langClass = ['python', 'javascript', 'cpp', 'java', 'c', 'sql'].find(cls => card.classList.contains(cls));
                if (!langClass) return;

                const src = getCourseVideoSource(langClass);
                if (!src) return;

                const iconWrap = card.querySelector('.language-icon');
                if (!iconWrap || iconWrap.querySelector('video')) return;

                iconWrap.classList.add('has-video');
                iconWrap.textContent = '';

                const video = document.createElement('video');
                video.className = 'language-icon-video';
                video.muted = true;
                video.loop = true;
                video.playsInline = true;
                video.preload = 'auto';
                video.innerHTML = `<source src="${src}" type="video/mp4">`;
                iconWrap.appendChild(video);

                const soundBtn = document.createElement('button');
                soundBtn.type = 'button';
                soundBtn.className = 'language-video-sound';
                soundBtn.textContent = '\u{1F507}';
                soundBtn.setAttribute('aria-label', 'Unmute video');
                iconWrap.appendChild(soundBtn);

                const tryPlay = () => video.play().catch(() => {});
                const stopPlay = () => {
                    video.pause();
                    try { video.currentTime = 0; } catch (e) {}
                };

                card.addEventListener('mouseenter', tryPlay);
                card.addEventListener('mouseleave', stopPlay);
                card.addEventListener('focusin', tryPlay);
                card.addEventListener('focusout', stopPlay);
                card.addEventListener('touchstart', tryPlay, { passive: true });
                card.addEventListener('touchend', stopPlay, { passive: true });
                card.addEventListener('touchcancel', stopPlay, { passive: true });

                soundBtn.addEventListener('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    video.muted = !video.muted;
                    soundBtn.textContent = video.muted ? '\u{1F507}' : '\u{1F50A}';
                    soundBtn.setAttribute('aria-label', video.muted ? 'Unmute video' : 'Mute video');
                    if (!video.muted) {
                        video.volume = 1;
                    }
                    tryPlay();
                });
            });
        }

        function renderCourseIntroVideo(lang) {
            const learningSection = document.getElementById('learningSection');
            if (!learningSection) return;

            const existing = document.getElementById('courseIntroVideo');
            if (existing) existing.remove();

            const src = getCourseVideoSource(lang);
            if (!src) return;

            const wrapper = document.createElement('div');
            wrapper.id = 'courseIntroVideo';
            wrapper.className = 'course-intro';
            wrapper.innerHTML = `
                <div class="course-intro-title">Course Introduction</div>
                <video class="course-intro-player" autoplay muted playsinline controls>
                    <source src="${src}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;

            const container = learningSection.querySelector('.learning-container');
            if (container) {
                learningSection.insertBefore(wrapper, container);
            } else {
                learningSection.prepend(wrapper);
            }
        }

        function goToCourse(lang) {
            if (!isEnrolled(lang)) {
                showAchievement('Enroll First', 'Click Enroll to unlock this course');
                return;
            }
            window.location.href = `${lang}.html`;
        }

        function showComingSoon() {
            showAchievement('Coming Soon', 'Courses are launching very soon');
        }
        window.showComingSoon = showComingSoon;

        async function init() {
            await loadProgress();
            updateLanguageProgress();
            updateHeaderStats();
            updateAuthUI();
            bindLogout();
            bindDrawer();
            bindThemeToggle();
            bindEnrollButtons();
            bindHomePdfResources();
            bindLogoModal();
            bindChatbot();
            renderLanguageNameLogos();
            renderCourseCardVideos();
            renderHomeExamCards();
            bindHomeExamModal();
            updateEnrollUI();
            renderHomePdfResources();

            const course = getCourseFromPage();
            if (course) {
                currentLanguage = course;
                document.getElementById('languageSelection').classList.add('hidden');
                document.getElementById('learningSection').classList.add('active');
                const existingIntro = document.getElementById('courseIntroVideo');
                if (existingIntro) existingIntro.remove();
                renderCurriculum();
                selectFirstLesson();
                saveNavigationState();
            } else {
                clearNavigationState();
                currentLanguage = null;
                currentLessonId = null;
                document.getElementById('languageSelection').classList.remove('hidden');
                document.getElementById('learningSection').classList.remove('active');
            }
        }

        function bindEnrollButtons() {
            document.querySelectorAll('.enroll-btn').forEach(btn => {
                btn.addEventListener('click', (event) => {
                    event.stopPropagation();
                    const lang = btn.getAttribute('data-lang');
                    enrollLanguage(lang);
                });
            });
        }

        function isEnrolled(lang) {
            return enrolledLanguages.has(lang);
        }

        function enrollLanguage(lang) {
            const user = getCurrentUser();
            if (!user || !user.email) {
                showAchievement('Login Required', 'Please log in to enroll');
                setTimeout(() => {
                    window.location.href = 'auth.html';
                }, 800);
                return;
            }
            if (isEnrolled(lang)) return;
            enrolledLanguages.add(lang);
            saveProgress();
            updateEnrollUI();
            showAchievement('Enrollment Complete', `${lang.toUpperCase()} unlocked`);
        }

        function updateEnrollUI() {
            document.querySelectorAll('.enroll-btn').forEach(btn => {
                const lang = btn.getAttribute('data-lang');
                const card = btn.closest('.language-card');
                const status = document.getElementById(`${lang}EnrollStatus`);
                if (isEnrolled(lang)) {
                    btn.textContent = 'Enrolled';
                    btn.classList.add('enrolled');
                    btn.disabled = true;
                    if (status) status.textContent = 'Access granted';
                    if (card) card.classList.remove('locked');
                } else {
                    btn.textContent = 'Enroll';
                    btn.classList.remove('enrolled');
                    btn.disabled = false;
                    if (status) status.textContent = 'Locked';
                    if (card) card.classList.add('locked');
                }
            });
        }


        // Language Selection
        function selectLanguage(lang) {
            if (!isEnrolled(lang)) {
                showAchievement('Enroll First', 'Click Enroll to unlock this course');
                return;
            }
            currentLanguage = lang;
            document.getElementById('languageSelection').classList.add('hidden');
            document.getElementById('learningSection').classList.add('active');
            renderCurriculum();
            selectFirstLesson();
            saveNavigationState();
        }

        function backToLanguages() {
            if (document.body?.dataset?.course) {
                clearNavigationState();
                window.location.href = 'index.html';
                return;
            }
            document.getElementById('languageSelection').classList.remove('hidden');
            document.getElementById('learningSection').classList.remove('active');
            currentLanguage = null;
            currentLessonId = null;
            clearNavigationState();
        }

        // Render Curriculum
        function renderCurriculum() {
            const content = document.getElementById('curriculumContent');
            content.innerHTML = '';
            
            const langCurriculum = curriculum[currentLanguage];
            
            for (const [sectionKey, lessons] of Object.entries(langCurriculum)) {
                const sectionDiv = document.createElement('div');
                sectionDiv.className = 'curriculum-section';
                
                const sectionTitle = document.createElement('div');
                sectionTitle.className = 'section-title';
                sectionTitle.textContent = sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1);
                sectionDiv.appendChild(sectionTitle);
                
                lessons.forEach(lesson => {
                    const lessonDiv = document.createElement('div');
                    lessonDiv.className = 'lesson-item';
                    const isCompleted = completedLessons.has(lesson.id);
                    if (isCompleted) {
                        lessonDiv.classList.add('completed');
                    }
                    
                    const icon = document.createElement('span');
                    icon.className = 'lesson-icon';
                    icon.textContent = lesson.type === 'theory' ? '\u{1F4D6}' : '\u{1F4BB}';
                    
                    const name = document.createElement('span');
                    name.className = 'lesson-name';
                    name.textContent = lesson.title;

                    const check = document.createElement('span');
                    check.className = 'lesson-check';
                    check.textContent = isCompleted ? '\u2713' : '';
                    check.setAttribute('aria-hidden', 'true');
                    
                    lessonDiv.appendChild(icon);
                    lessonDiv.appendChild(name);
                    lessonDiv.appendChild(check);
                    lessonDiv.onclick = () => loadLesson(lesson.id);
                    
                    sectionDiv.appendChild(lessonDiv);
                });
                
                content.appendChild(sectionDiv);
            }
        }

        // Load Lesson
        function loadLesson(lessonId) {
            currentLessonId = lessonId;
            
            // Find lesson
            let lesson = null;
            for (const section of Object.values(curriculum[currentLanguage])) {
                lesson = section.find(l => l.id === lessonId);
                if (lesson) break;
            }
            
            if (!lesson) return;
            
            // Update UI
            document.querySelectorAll('.lesson-item').forEach(item => {
                item.classList.remove('active');
            });
            event?.target?.closest('.lesson-item')?.classList.add('active');
            
            // Update header
            document.getElementById('lessonType').textContent = lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1);
            document.getElementById('lessonType').className = 'lesson-type' + (lesson.type === 'practice' ? ' practice' : '');
            document.getElementById('lessonTitle').textContent = lesson.title;
            document.getElementById('lessonDescription').textContent = lesson.description;
            
            // Render content
            const contentDiv = document.getElementById('lessonContent');
            contentDiv.innerHTML = lesson.content;
            
            // Add editor if practice
            if (lesson.type === 'practice') {
                const editorHTML = `
                    <div class="code-editor-wrapper">
                        <div class="editor-header">
                            <span class="editor-title">code.${getFileExtension(currentLanguage)}</span>
                            <div class="editor-actions">
                                <button class="btn btn-reset" onclick="resetCode()">\u21BB Reset</button>
                                <button class="btn btn-run" onclick="runCode()">\u25B6 Run</button>
                                <button class="btn btn-submit" onclick="submitCode()">\u2713 Submit</button>
                            </div>
                        </div>
                        <textarea id="codeEditor" spellcheck="false">${lesson.starterCode}</textarea>
                    </div>
                    <div class="output-panel">
                        <div class="output-header">Output Console</div>
                        <div id="output">Run your code to see the output...</div>
                    </div>
                `;
                contentDiv.innerHTML += editorHTML;
                attachEditorHelpers();
            }
            
            updateNavButtons();
            updateFinishButton();
            saveNavigationState();
        }

        function attachEditorHelpers() {
            const editor = document.getElementById('codeEditor');
            if (!editor) return;

            editor.onkeydown = (event) => {
                if (currentLanguage !== 'python') return;
                if (event.key !== 'Enter') return;

                const value = editor.value;
                const start = editor.selectionStart;
                const lineStart = value.lastIndexOf('\n', start - 1) + 1;
                const line = value.slice(lineStart, start);
                const indentMatch = line.match(/^(\s*)/);
                let indent = indentMatch ? indentMatch[1] : '';
                if (line.trim().endsWith(':')) {
                    indent += '    ';
                }

                event.preventDefault();
                editor.setRangeText(`\n${indent}`, start, editor.selectionEnd, 'end');
            };
        }

        function getFileExtension(lang) {
            const extensions = {
                'python': 'py',
                'javascript': 'js',
                'cpp': 'cpp',
                'java': 'java',
                'c': 'c',
                'sql': 'sql'
            };
            return extensions[lang] || 'txt';
        }

        function selectFirstLesson() {
            const firstSection = Object.values(curriculum[currentLanguage])[0];
            if (firstSection && firstSection.length > 0) {
                loadLesson(firstSection[0].id);
            }
        }

        // Navigation
        function navigateLesson(direction) {
            const allLessons = [];
            for (const section of Object.values(curriculum[currentLanguage])) {
                allLessons.push(...section);
            }
            
            const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
            const newIndex = currentIndex + direction;
            
            if (newIndex >= 0 && newIndex < allLessons.length) {
                loadLesson(allLessons[newIndex].id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        function updateNavButtons() {
            const allLessons = [];
            for (const section of Object.values(curriculum[currentLanguage])) {
                allLessons.push(...section);
            }
            
            const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
            
            document.getElementById('prevBtn').disabled = currentIndex === 0;
            document.getElementById('nextBtn').disabled = currentIndex === allLessons.length - 1;
        }

        // Code Execution
        function resetCode() {
            const lesson = getCurrentLesson();
            if (lesson && lesson.type === 'practice') {
                document.getElementById('codeEditor').value = lesson.starterCode;
                document.getElementById('output').textContent = 'Code reset. Run your code to see the output...';
                document.getElementById('output').className = '';
            }
        }

        function runCode() {
            const lesson = getCurrentLesson();
            if (!lesson || lesson.type !== 'practice') return;
            
            const code = document.getElementById('codeEditor').value;
            const output = document.getElementById('output');
            
            try {
                let result = '';
                
                if (currentLanguage === 'python') {
                    result = simulatePython(code);
                } else if (currentLanguage === 'javascript') {
                    result = executeJavaScript(code);
                } else if (currentLanguage === 'cpp') {
                    result = simulateCpp(code);
                } else if (currentLanguage === 'java') {
                    result = simulateJava(code);
                } else if (currentLanguage === 'c') {
                    result = simulateC(code);
                }
                
                output.textContent = result || 'Code executed successfully!';
                output.className = 'output-success';
            } catch (error) {
                output.textContent = `Error: ${error.message}`;
                output.className = 'output-error';
            }
        }

        function submitCode() {
            const lesson = getCurrentLesson();
            if (!lesson || lesson.type !== 'practice') return;
            
            const code = document.getElementById('codeEditor').value;
            const output = document.getElementById('output');
            
            try {
                const outputText = output.textContent;
                const passed = lesson.test(outputText);
                
                if (passed) {
                    if (!completedLessons.has(lesson.id)) {
                        completedLessons.add(lesson.id);
                        recordDailyLessonCompletion();
                        const previousXP = totalXP;
                        totalXP += lesson.xp;
                        updateDailyStreak();
                        awardBadges(previousXP, totalXP);
                        saveProgress();
                        updateHeaderStats();
                        updateLanguageProgress();
                        renderHomePdfResources();
                        renderCurriculum();
                        showAchievement(lesson.title, `+${lesson.xp} XP`);
                        maybeAwardMasteryBadge(currentLanguage);
                    }
                    output.textContent = `\u2713 Success! You earned ${lesson.xp} XP!\n\n` + outputText;
                    output.className = 'output-success';
                } else {
                    output.textContent = `\u2717 Not quite right. Try again!\n\n` + outputText;
                    output.className = 'output-error';
                }
            } catch (error) {
                output.textContent = `Error: ${error.message}`;
                output.className = 'output-error';
            }
        }

        function finishLesson() {
            const lesson = getCurrentLesson();
            if (!lesson) return;

            if (lesson.type === 'practice' && lesson.forceSubmit) {
                showBadge('Submit Required', 'Use Submit Code to finish this Master Challenge');
                return;
            }

            if (!completedLessons.has(lesson.id)) {
                completedLessons.add(lesson.id);
                recordDailyLessonCompletion();
                const previousXP = totalXP;
                totalXP += lesson.xp || 0;
                updateDailyStreak();
                awardBadges(previousXP, totalXP);
                saveProgress();
                updateHeaderStats();
                updateLanguageProgress();
                renderHomePdfResources();
                renderCurriculum();
                showAchievement('Lesson Finished', `+${lesson.xp || 0} XP`);
                maybeAwardMasteryBadge(currentLanguage);
            }

            updateFinishButton();
        }

        function updateFinishButton() {
            const lesson = getCurrentLesson();
            const btn = document.getElementById('finishBtn');
            if (!btn || !lesson) return;
            if (completedLessons.has(lesson.id)) {
                btn.textContent = 'Completed';
                btn.disabled = true;
            } else {
                btn.textContent = 'Finish Lesson';
                btn.disabled = false;
            }
        }


        function getCurrentLesson() {
            for (const section of Object.values(curriculum[currentLanguage])) {
                const lesson = section.find(l => l.id === currentLessonId);
                if (lesson) return lesson;
            }
            return null;
        }

        // Language Simulators
        function simulatePython(code) {
            let output = '';
            const lines = code.replace(/\r\n/g, '\n').split('\n');
            const vars = {};
            const funcs = {};

            function protectStrings(expr) {
                const literals = [];
                const protectedExpr = String(expr || '').replace(/"[^"]*"|'[^']*'/g, (match) => {
                    const key = `@@STR${literals.length}@@`;
                    literals.push(match);
                    return key;
                });
                return { expr: protectedExpr, literals };
            }

            function restoreStrings(expr, literals) {
                return String(expr || '').replace(/@@STR(\d+)@@/g, (_, idx) => {
                    const n = parseInt(idx, 10);
                    return Number.isFinite(n) && literals[n] ? literals[n] : '';
                });
            }

            function stripStrings(expr) {
                return String(expr || '').replace(/"[^"]*"|'[^']*'/g, '');
            }

            function assertNoUndefinedNames(expr, scope) {
                const withoutStrings = stripStrings(expr);
                const names = withoutStrings.match(/\b[a-zA-Z_]\w*\b/g) || [];
                const ignore = new Set(['and', 'or', 'not', 'in', 'range', 'True', 'False', 'None']);
                for (const name of names) {
                    if (ignore.has(name)) continue;
                    if (name in scope) continue;
                    if (name in vars) continue;
                    if (name in funcs) continue;
                    throw new Error(`NameError: name '${name}' is not defined`);
                }
            }

            function execLines(start, end, scope = vars) {
                for (let i = start; i < end; i++) {
                    const line = lines[i];
                    if (!line || /^\s*$/.test(line) || /^\s*#/.test(line)) continue;

                    const trimmed = line.trim();
                    const indent = line.match(/^\s*/)[0].length;

                    const defMatch = trimmed.match(/^def\s+(\w+)\s*\(([^)]*)\)\s*:\s*$/);
                    if (defMatch) {
                        const funcName = defMatch[1];
                        const paramName = defMatch[2].trim();
                        let j = i + 1;
                        while (j < end && (lines[j].trim() === '' || lines[j].match(/^\s*/)[0].length > indent)) {
                            j++;
                        }
                        funcs[funcName] = { paramName, start: i + 1, end: j };
                        i = j - 1;
                        continue;
                    }

                    const returnMatch = trimmed.match(/^return\s+(.+)\s*$/);
                    if (returnMatch) {
                        return { didReturn: true, value: evalValue(returnMatch[1], scope) };
                    }

                    const ifMatch = trimmed.match(/^if\s+(.+)\s*:\s*$/);
                    if (ifMatch) {
                        const conditionExpr = ifMatch[1];
                        let j = i + 1;
                        while (j < end && (lines[j].trim() === '' || lines[j].match(/^\s*/)[0].length > indent)) {
                            j++;
                        }
                        const ifStart = i + 1;
                        const ifEnd = j;

                        // check for else block at same indent
                        let elseStart = -1;
                        let elseEnd = -1;
                        const nextLine = lines[j] || '';
                        if (nextLine.trim().startsWith('else:')) {
                            let k = j + 1;
                            while (k < end && (lines[k].trim() === '' || lines[k].match(/^\s*/)[0].length > indent)) {
                                k++;
                            }
                            elseStart = j + 1;
                            elseEnd = k;
                            i = k - 1;
                        } else {
                            i = ifEnd - 1;
                        }

                        const condValue = evalValue(conditionExpr, scope);
                        if (condValue) {
                            const res = execLines(ifStart, ifEnd, scope);
                            if (res.didReturn) return res;
                        } else if (elseStart !== -1) {
                            const res = execLines(elseStart, elseEnd, scope);
                            if (res.didReturn) return res;
                        }
                        continue;
                    }

                    const forMatch = trimmed.match(/^for\s+(\w+)\s+in\s+range\(([^)]*)\)\s*:\s*$/);
                    if (forMatch) {
                        const varName = forMatch[1];
                        const rangeArgs = forMatch[2].split(',').map(s => s.trim()).filter(Boolean);

                        let startVal = 0;
                        let endVal = 0;
                        let stepVal = 1;

                        if (rangeArgs.length === 1) {
                            endVal = Number(evalValue(rangeArgs[0], scope));
                        } else if (rangeArgs.length === 2) {
                            startVal = Number(evalValue(rangeArgs[0], scope));
                            endVal = Number(evalValue(rangeArgs[1], scope));
                        } else if (rangeArgs.length >= 3) {
                            startVal = Number(evalValue(rangeArgs[0], scope));
                            endVal = Number(evalValue(rangeArgs[1], scope));
                            stepVal = Number(evalValue(rangeArgs[2], scope));
                        }

                        let j = i + 1;
                        while (j < end && (lines[j].trim() === '' || lines[j].match(/^\s*/)[0].length > indent)) {
                            j++;
                        }
                        const blockStart = i + 1;
                        const blockEnd = j;

                        if (stepVal === 0) stepVal = 1;
                        for (let v = startVal; stepVal > 0 ? v < endVal : v > endVal; v += stepVal) {
                            scope[varName] = v;
                            const res = execLines(blockStart, blockEnd, scope);
                            if (res.didReturn) return res;
                        }

                        i = blockEnd - 1;
                        continue;
                    }

                    const printMatch = trimmed.match(/^print\s*\((.*)\)\s*$/);
                    if (printMatch) {
                        const content = (printMatch[1] || '').trim();
                        if (content === '') {
                            output += '\n';
                            continue;
                        }
                        const value = evalValue(content, scope);
                        output += value + '\n';
                        continue;
                    }

                    const callMatch = trimmed.match(/^(\w+)\((.*)\)\s*$/);
                    if (callMatch && funcs[callMatch[1]]) {
                        // Call as a statement (ignore return value)
                        evalValue(trimmed, scope);
                        continue;
                    }

                    const assignMatch = trimmed.match(/^([A-Za-z_]\w*)\s*=\s*(.+)$/);
                    if (assignMatch) {
                        const varName = assignMatch[1];
                        const varValue = assignMatch[2];
                        scope[varName] = evalValue(varValue, scope);
                        continue;
                    }
                }
                return { didReturn: false, value: undefined };
            }

            function evalValue(expr, scope = vars) {
                let value = String(expr || '').trim();
                if (value === '') return '';

                if (value in scope) return scope[value];
                if (value in vars) return vars[value];

                const callMatch = value.match(/^(\w+)\((.*)\)\s*$/);
                if (callMatch && funcs[callMatch[1]]) {
                    const funcName = callMatch[1];
                    const arg = (callMatch[2] || '').trim();
                    const func = funcs[funcName];
                    const localScope = { ...scope };
                    if (func.paramName) {
                        localScope[func.paramName] = arg === '' ? undefined : evalValue(arg, scope);
                    }
                    const res = execLines(func.start, func.end, localScope);
                    return res.didReturn ? res.value : undefined;
                }

                assertNoUndefinedNames(value, scope);

                const protectedInfo = protectStrings(value);
                let jsExpr = protectedInfo.expr;

                jsExpr = jsExpr
                    .replace(/\bTrue\b/g, 'true')
                    .replace(/\bFalse\b/g, 'false')
                    .replace(/\bNone\b/g, 'null')
                    .replace(/\band\b/g, '&&')
                    .replace(/\bor\b/g, '||')
                    .replace(/\bnot\b/g, '!');

                jsExpr = jsExpr.replace(/\b[a-zA-Z_]\w*\b/g, (match) => {
                    if (match in scope) {
                        const v = scope[match];
                        return typeof v === 'string' ? JSON.stringify(v) : String(v);
                    }
                    if (match in vars) {
                        const v = vars[match];
                        return typeof v === 'string' ? JSON.stringify(v) : String(v);
                    }
                    return match;
                });

                jsExpr = restoreStrings(jsExpr, protectedInfo.literals);

                try {
                    return eval(jsExpr);
                } catch (e) {
                    return jsExpr.replace(/["']/g, '');
                }
            }

            execLines(0, lines.length, vars);
            return output.trim() || 'Code executed successfully!';
        }

        function executeJavaScript(code) {
            let result = '';
            const originalLog = console.log;
            console.log = (...args) => {
                result += args.join(' ') + '\n';
            };
            eval(code);
            console.log = originalLog;
            return result.trim() || 'Code executed successfully!';
        }

        function simulateCpp(code) {
            let output = '';
            const lines = code.replace(/\r\n/g, '\n').split('\n');
            const vars = {};

            function stripStrings(expr) {
                return String(expr || '')
                    .replace(/"[^"]*"/g, '')
                    .replace(/'[^']*'/g, '');
            }

            function assertNoUndefinedIdentifiers(expr) {
                const withoutStrings = stripStrings(expr);
                const names = withoutStrings.match(/\b[a-zA-Z_]\w*\b/g) || [];
                const ignore = new Set(['cout', 'endl', 'std', 'true', 'false']);
                for (const name of names) {
                    if (ignore.has(name)) continue;
                    if (name in vars) continue;
                    throw new Error(`Error: '${name}' was not declared`);
                }
            }

            function evalExpr(expr) {
                const raw = String(expr || '').trim();
                if (raw === '') return '';

                // String literal
                const isQuoted = /^\".*\"$/.test(raw) || /^'.*'$/.test(raw);
                if (isQuoted) return raw.slice(1, -1);

                assertNoUndefinedIdentifiers(raw);

                let value = raw.replace(/\b[a-zA-Z_]\w*\b/g, (match) => {
                    return match in vars ? vars[match] : match;
                });
                value = value.replace(/["']/g, '');
                try {
                    return eval(value);
                } catch (e) {
                    return value;
                }
            }

            function handleCoutLine(rawLine) {
                const coutMatch = rawLine.match(/cout\s*<<\s*(.+);/);
                if (!coutMatch) return '';

                const chain = coutMatch[1];
                const parts = chain.split('<<').map(part => part.trim()).filter(Boolean);
                let lineOut = '';
                let wroteNewline = false;

                for (const part of parts) {
                    if (part === 'endl' || part === 'std::endl') {
                        lineOut += '\n';
                        wroteNewline = true;
                        continue;
                    }
                    lineOut += String(evalExpr(part));
                }

                if (!wroteNewline) lineOut += '\n';
                return lineOut;
            }

            for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim();
                if (!line || line.startsWith('//')) continue;

                const assignMatch = line.match(/^(int|double|float|long|short|bool)\s+(\w+)\s*=\s*([^;]+);$/);
                if (assignMatch) {
                    vars[assignMatch[2]] = evalExpr(assignMatch[3]);
                    continue;
                }

                const ifMatch = line.match(/^if\s*\(([^)]+)\)\s*\{?$/);
                if (ifMatch) {
                    const cond = evalExpr(ifMatch[1]);
                    const nextLine = lines[i + 1] ? lines[i + 1].trim() : '';
                    if (nextLine.startsWith('cout')) {
                        if (cond) output += handleCoutLine(nextLine);
                        i += 1;
                    }
                    continue;
                }

                if (line.startsWith('cout')) {
                    output += handleCoutLine(line);
                }
            }

            return output.trim() || 'Code executed successfully!';
        }

        function simulateC(code) {
            let output = '';
            const lines = code.replace(/\r\n/g, '\n').split('\n');
            const vars = {};

            function evalExpr(expr) {
                let value = expr.trim();
                value = value.replace(/\b[a-zA-Z_]\w*\b/g, (match) => {
                    return match in vars ? vars[match] : match;
                });
                value = value.replace(/["']/g, '');
                try {
                    return eval(value);
                } catch (e) {
                    return value;
                }
            }

            for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim();
                if (!line || line.startsWith('//') || line.startsWith('#')) continue;

                const assignMatch = line.match(/^(int|double|float|long|short|char)\s+(\w+)\s*=\s*([^;]+);$/);
                if (assignMatch) {
                    vars[assignMatch[2]] = evalExpr(assignMatch[3]);
                    continue;
                }

                const printStrMatch = line.match(/printf\s*\(\s*"([^"]*)"\s*\)\s*;/);
                if (printStrMatch) {
                    output += printStrMatch[1] + '\n';
                    continue;
                }

                const printExprMatch = line.match(/printf\s*\(\s*"%[dfcs]"\s*,\s*([^)]+)\)\s*;/);
                if (printExprMatch) {
                    output += evalExpr(printExprMatch[1]) + '\n';
                    continue;
                }
            }

            return output.trim() || 'Code executed successfully!';
        }

        function simulateJava(code) {

            let output = '';
            const lines = code.replace(/\r\n/g, '\n').split('\n');
            const vars = {};

            function stripStrings(expr) {
                return String(expr || '')
                    .replace(/"[^"]*"/g, '')
                    .replace(/'[^']*'/g, '');
            }

            function assertNoUndefinedIdentifiers(expr) {
                const withoutStrings = stripStrings(expr);
                const names = withoutStrings.match(/\b[a-zA-Z_]\w*\b/g) || [];
                const ignore = new Set(['true', 'false']);
                for (const name of names) {
                    if (ignore.has(name)) continue;
                    if (name in vars) continue;
                    throw new Error(`Error: variable '${name}' not defined`);
                }
            }

            function evalExpr(expr) {
                const raw = String(expr || '').trim();
                if (raw === '') return '';

                const isQuoted = /^\".*\"$/.test(raw) || /^'.*'$/.test(raw);
                if (isQuoted) return raw.slice(1, -1);

                assertNoUndefinedIdentifiers(raw);

                let value = raw.replace(/\b[a-zA-Z_]\w*\b/g, (match) => {
                    return match in vars ? vars[match] : match;
                });
                value = value.replace(/["']/g, '');
                try {
                    return eval(value);
                } catch (e) {
                    return value;
                }
            }

            for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim();
                if (!line || line.startsWith('//')) continue;

                const assignMatch = line.match(/^(int|double|float|long|short|boolean|String)\s+(\w+)\s*=\s*([^;]+);$/);
                if (assignMatch) {
                    vars[assignMatch[2]] = evalExpr(assignMatch[3]);
                    continue;
                }

                const ifMatch = line.match(/^if\s*\(([^)]+)\)\s*\{?$/);
                if (ifMatch) {
                    const cond = evalExpr(ifMatch[1]);
                    const nextLine = lines[i + 1] ? lines[i + 1].trim() : '';
                    if (nextLine.startsWith('System.out.println')) {
                        const printMatch = nextLine.match(/System\.out\.println\(([^)]+)\)\s*;/);
                        if (cond && printMatch) output += evalExpr(printMatch[1]) + '\n';
                        i += 1;
                    }
                    continue;
                }

                const printMatch = line.match(/System\.out\.println\(([^)]+)\)\s*;/);
                if (printMatch) {
                    const expr = printMatch[1].trim();
                    output += evalExpr(expr) + '\n';
                }
            }

            return output.trim() || 'Code executed successfully!';
        }

        // Achievements
        function showAchievement(title, desc) {
            const toast = document.getElementById('achievementToast');
            document.getElementById('achievementTitle').textContent = `${title} Complete!`;
            document.getElementById('achievementDesc').textContent = desc;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        function showBadge(title, desc) {
            const toast = document.getElementById('achievementToast');
            document.getElementById('achievementTitle').textContent = title;
            document.getElementById('achievementDesc').textContent = desc;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2000);
        }

        function awardBadges(previousXP, newXP) {
            for (const milestone of BADGE_MILESTONES) {
                if (!(previousXP < milestone.xp && newXP >= milestone.xp)) continue;
                const badgeId = `xp-${milestone.xp}`;
                if (!badges.has(badgeId)) {
                    badges.add(badgeId);
                    showBadge('Badge Unlocked', `${milestone.name} \u2022 ${milestone.xp} XP`);
                }
            }
        }

        function seedBadgesFromXP(xp) {
            for (const milestone of BADGE_MILESTONES) {
                if (xp >= milestone.xp) {
                    badges.add(`xp-${milestone.xp}`);
                }
            }
        }

        function getLanguageLabel(lang) {
            const map = {
                python: 'Python',
                javascript: 'JavaScript',
                cpp: 'C++',
                java: 'Java',
                c: 'C',
                sql: 'SQL'
            };
            return map[lang] || String(lang || '').toUpperCase();
        }

        function seedMasteryBadgesFromCompletion() {
            for (const [lang, sections] of Object.entries(curriculum)) {
                const masterLessons = sections && sections.master;
                if (!Array.isArray(masterLessons) || masterLessons.length === 0) continue;
                const badgeId = `mastery-${lang}`;
                if (!MASTERY_BADGE_IDS.has(badgeId)) continue;
                const allComplete = masterLessons.every(lesson => completedLessons.has(lesson.id));
                if (allComplete) {
                    badges.add(badgeId);
                }
            }
        }

        function maybeAwardMasteryBadge(lang) {
            if (!lang || !curriculum[lang] || !Array.isArray(curriculum[lang].master)) return;
            const masterLessons = curriculum[lang].master;
            if (masterLessons.length === 0) return;

            const badgeId = `mastery-${lang}`;
            if (!MASTERY_BADGE_IDS.has(badgeId) || badges.has(badgeId)) return;

            const allComplete = masterLessons.every(lesson => completedLessons.has(lesson.id));
            if (!allComplete) return;

            badges.add(badgeId);
            saveProgress();
            showBadge('Badge Unlocked', `Master in ${getLanguageLabel(lang)}`);
        }

        function getTodayKey() {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }

        function pruneDailyLessonCounts(keepDays = 420) {
            if (!dailyLessonCounts || typeof dailyLessonCounts !== 'object' || Array.isArray(dailyLessonCounts)) {
                dailyLessonCounts = {};
                return;
            }
            const keys = Object.keys(dailyLessonCounts);
            if (keys.length <= keepDays) return;
            keys.sort(); // YYYY-MM-DD sorts lexicographically by time
            const keepSet = new Set(keys.slice(-keepDays));
            keys.forEach((key) => {
                if (!keepSet.has(key)) delete dailyLessonCounts[key];
            });
        }

        function recordDailyLessonCompletion() {
            const user = getCurrentUser();
            if (!user || !user.email) return;

            const today = getTodayKey();
            if (!dailyLessonCounts || typeof dailyLessonCounts !== 'object' || Array.isArray(dailyLessonCounts)) {
                dailyLessonCounts = {};
            }
            const prev = parseInt(dailyLessonCounts[today], 10);
            dailyLessonCounts[today] = (Number.isFinite(prev) ? prev : 0) + 1;
            pruneDailyLessonCounts();
        }

        function updateDailyStreak() {
            const today = getTodayKey();
            if (!lastStreakDate) {
                streak = 1;
                lastStreakDate = today;
                maxStreak = Math.max(maxStreak || 0, 1);
                return;
            }

            if (lastStreakDate === today) {
                return;
            }

            const last = new Date(`${lastStreakDate}T00:00:00`);
            const current = new Date(`${today}T00:00:00`);
            const diffDays = Math.round((current - last) / 86400000);

            if (diffDays === 1) {
                streak += 1;
                maxStreak = Math.max(maxStreak || 0, streak);
            } else {
                streak = 1;
            }
            lastStreakDate = today;
        }


        // Progress Tracking
        function clampPercent(value) {
            if (!Number.isFinite(value)) return 0;
            return Math.max(0, Math.min(100, Math.round(value)));
        }

        function updateHeaderStats() {
            const user = getCurrentUser();
            const hasUser = !!(user && user.email);
            const totalLessons = hasUser ? Object.values(curriculum).reduce((sum, lang) => {
                return sum + Object.values(lang).reduce((s, section) => s + section.length, 0);
            }, 0) : 0;

            const completedCount = hasUser ? completedLessons.size : 0;
            const overallPercent = totalLessons > 0 ? clampPercent((completedCount / totalLessons) * 100) : 0;
            
            document.getElementById('completedLessons').textContent = completedCount;
            document.getElementById('totalLessons').textContent = totalLessons;
            document.getElementById('totalXP').textContent = hasUser ? totalXP : 0;
            const maxStreakEl = document.getElementById('maxStreak');
            if (maxStreakEl) maxStreakEl.textContent = hasUser ? maxStreak : 0;
            document.getElementById('streak').textContent = hasUser ? streak : 0;

            const percentEl = document.getElementById('overallPercent');
            const barFill = document.getElementById('overallProgressFill');
            const bar = document.getElementById('overallProgressBar');

            if (percentEl) percentEl.textContent = `${overallPercent}%`;
            if (barFill) barFill.style.width = `${overallPercent}%`;
            if (bar) bar.setAttribute('aria-valuenow', `${overallPercent}`);
        }

        function updateLanguageProgress() {
            const user = getCurrentUser();
            const hasUser = !!(user && user.email);
            const courseProgress = {};
            let totalLessonsOverall = 0;
            for (const [lang, sections] of Object.entries(curriculum)) {
                const total = hasUser ? Object.values(sections).reduce((sum, section) => sum + section.length, 0) : 0;
                const completed = hasUser ? Object.values(sections).reduce((sum, section) => {
                    return sum + section.filter(l => completedLessons.has(l.id)).length;
                }, 0) : 0;
                const percent = total > 0 ? (completed / total * 100) : 0;

                const totalEl = document.getElementById(`${lang}Total`);
                const completedEl = document.getElementById(`${lang}Completed`);
                const progressEl = document.getElementById(`${lang}Progress`);
                if (totalEl) totalEl.textContent = total;
                if (completedEl) completedEl.textContent = completed;
                if (progressEl) progressEl.style.width = `${percent}%`;
                
                courseProgress[lang] = { total, completed, percent };
                totalLessonsOverall += total;
            }
            // Firestore persistence happens in saveProgress().
        }

        const HOME_PDF_LIBRARY = [
            { label: 'Python Course PDF', file: 'pdf/python.pdf', unlockBy: 'python', tag: 'Python', tagClass: 'python' },
            { label: 'JavaScript Course PDF', file: 'pdf/java%20script.pdf', unlockBy: 'javascript', tag: 'JavaScript', tagClass: 'javascript' },
            { label: 'C++ Course PDF', file: 'pdf/c++.pdf', unlockBy: 'cpp', tag: 'C++', tagClass: 'cpp' },
            { label: 'C Course PDF', file: 'pdf/c.pdf', unlockBy: 'c', tag: 'C', tagClass: 'c' },
            { label: 'Java Course PDF', file: 'pdf/java.pdf', unlockBy: 'java', tag: 'Java', tagClass: 'java' },
            { label: 'SQL Course PDF', file: 'pdf/sql.pdf', unlockBy: 'sql', tag: 'SQL', tagClass: 'sql' },
            { label: 'DBMS Course PDF', file: 'pdf/dbms.pdf', unlockBy: 'sql', tag: 'DBMS', tagClass: 'dbms' }
        ];

        function getCourseTotals(lang) {
            const sections = curriculum[lang];
            if (!sections) return { total: 0, completed: 0, percent: 0 };
            const total = Object.values(sections).reduce((sum, section) => sum + section.length, 0);
            const completed = Object.values(sections).reduce((sum, section) => {
                return sum + section.filter(l => completedLessons.has(l.id)).length;
            }, 0);
            const percent = total > 0 ? (completed / total * 100) : 0;
            return { total, completed, percent };
        }

        function isCourseComplete(lang) {
            const { total, completed } = getCourseTotals(lang);
            return total > 0 && completed >= total;
        }

        function renderHomePdfResources() {
            const container = document.getElementById('pdfResourcesHome');
            if (!container) return;

            const items = HOME_PDF_LIBRARY;
            if (items.length === 0) {
                container.innerHTML = '<span class="resource-empty">No PDFs available yet.</span>';
                return;
            }

            const user = getCurrentUser();
            const hasUser = !!(user && user.email);
            container.innerHTML = items.map((item) => {
                const unlocked = hasUser && isCourseComplete(item.unlockBy);
                const stateClass = unlocked ? '' : ' locked';
                const tagMarkup = item.tag ? `<span class="resource-card-tag ${item.tagClass || ''}">${item.tag}</span>` : '';
                const lockMarkup = `<span class="resource-card-lock" aria-hidden="true"></span>`;
                return `
                    <button type="button" class="resource-card${stateClass}" data-file="${item.file}" data-unlock="${item.unlockBy}" data-label="${item.label}">
                        <span class="resource-card-icon" aria-hidden="true"></span>
                        <span class="resource-card-title">${item.label}</span>
                        ${tagMarkup}
                        ${lockMarkup}
                        <span class="resource-card-state">${unlocked ? 'Open PDF' : 'Locked'}</span>
                    </button>
                `;
            }).join('');
        }

        function bindHomePdfResources() {
            const container = document.getElementById('pdfResourcesHome');
            if (!container) return;
            container.addEventListener('click', (event) => {
                const card = event.target.closest('.resource-card[data-file]');
                if (!card) return;
                const user = getCurrentUser();
                if (!user || !user.email) {
                    event.preventDefault();
                    showBadge('Login Required', 'Log in to unlock PDFs');
                    return;
                }
                const unlockBy = card.dataset.unlock;
                if (!isCourseComplete(unlockBy)) {
                    event.preventDefault();
                    const languageNameMap = {
                        python: 'Python',
                        javascript: 'JavaScript',
                        cpp: 'C++',
                        c: 'C',
                        java: 'Java',
                        sql: 'SQL'
                    };
                    const languageName = languageNameMap[unlockBy] || 'this';
                    showBadge('PDF Locked', `Please complete the ${languageName} course first`);
                    return;
                }
                const file = card.dataset.file;
                const label = card.dataset.label || 'Course PDF';
                openPdfModal(file, label);
            });
        }

        function bindLogoModal() {
            const logo = document.querySelector('.logo');
            if (!logo) return;
            logo.addEventListener('click', () => {
                openLogoModal();
            });
        }

        function ensureLogoModal() {
            if (document.getElementById('logoModal')) return;
            const modal = document.createElement('div');
            modal.id = 'logoModal';
            modal.className = 'logo-modal';
            modal.innerHTML = `
                <div class="logo-modal-backdrop" data-close="true"></div>
                <div class="logo-modal-panel" role="dialog" aria-modal="true" aria-label="Logo preview">
                    <button type="button" class="logo-modal-close" data-close="true">\u00D7</button>
                    <div class="logo-modal-content">
                        <img src="assets/logo.png" alt="Code Nectous logo">
                        <div class="logo-modal-tagline">Learn. Build. Create.</div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            modal.addEventListener('click', (event) => {
                const shouldClose = event.target.closest('[data-close="true"]');
                if (shouldClose) closeLogoModal();
            });
        }

        function openLogoModal() {
            ensureLogoModal();
            const modal = document.getElementById('logoModal');
            if (!modal) return;
            modal.classList.add('show');
            document.body.classList.add('pdf-open');
        }

        function closeLogoModal() {
            const modal = document.getElementById('logoModal');
            if (modal) modal.classList.remove('show');
            document.body.classList.remove('pdf-open');
        }

        // PDF Viewer (PDF.js). Note: we can hide the in-app "download" UI, but any file
        // sent to the browser can still be downloaded via devtools/network.
        let pdfModalDoc = null;
        let pdfModalObserver = null;
        let pdfModalRenders = new Map();
        let pdfModalLoadingTask = null;
        let pdfModalRenderVersion = 0;
        let pdfModalScale = 1;
        let pdfWorkerConfigured = false;

        function configurePdfJsWorkerOnce() {
            if (pdfWorkerConfigured) return;
            if (!window.pdfjsLib) return;
            // Use the matching worker from the same CDN version we include in index.html.
            window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
            pdfWorkerConfigured = true;
        }

        function ensurePdfModal() {
            if (document.getElementById('pdfModal')) return;
            const modal = document.createElement('div');
            modal.id = 'pdfModal';
            modal.className = 'pdf-modal';
            modal.innerHTML = `
                <div class="pdf-modal-backdrop" data-close="true"></div>
                <div class="pdf-modal-panel" role="dialog" aria-modal="true" aria-label="PDF viewer">
                    <div class="pdf-modal-header">
                        <span class="pdf-modal-title" id="pdfModalTitle">Course PDF</span>
                        <button type="button" class="pdf-modal-close" data-close="true">Close</button>
                    </div>
                    <div class="pdf-viewer-bar" aria-live="polite">
                        <span class="pdf-viewer-status" id="pdfViewerStatus">Loading...</span>
                        <span class="pdf-viewer-pages" id="pdfViewerPages"></span>
                    </div>
                    <div id="pdfViewerScroller" class="pdf-modal-frame" tabindex="0" aria-label="PDF document">
                        <div id="pdfPages" class="pdf-pages"></div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            modal.addEventListener('click', (event) => {
                const shouldClose = event.target.closest('[data-close="true"]');
                if (shouldClose) closePdfModal();
            });
            modal.addEventListener('contextmenu', (event) => {
                if (event.target.closest('.pdf-modal-panel')) {
                    event.preventDefault();
                }
            });
        }

        async function renderPdfPageInModal(pageNumber, pageEl, version) {
            if (!pdfModalDoc) return;
            if (version !== pdfModalRenderVersion) return;
            if (!Number.isFinite(pageNumber) || pageNumber < 1) return;
            if (!pageEl) return;
            if (pageEl.dataset.rendered === String(pdfModalScale)) return;
            if (pdfModalRenders.has(pageNumber)) return;

            const canvas = pageEl.querySelector('canvas');
            if (!canvas) return;

            const task = (async () => {
                const page = await pdfModalDoc.getPage(pageNumber);
                if (version !== pdfModalRenderVersion) return;

                const dpr = window.devicePixelRatio || 1;
                const viewport = page.getViewport({ scale: pdfModalScale * dpr });

                canvas.width = Math.floor(viewport.width);
                canvas.height = Math.floor(viewport.height);
                canvas.style.width = `${Math.floor(viewport.width / dpr)}px`;
                canvas.style.height = `${Math.floor(viewport.height / dpr)}px`;

                const ctx = canvas.getContext('2d', { alpha: false });
                if (!ctx) return;

                await page.render({ canvasContext: ctx, viewport }).promise;
                pageEl.dataset.rendered = String(pdfModalScale);
            })().catch(() => {
                // Ignore per-page failures; keep the viewer usable.
            }).finally(() => {
                pdfModalRenders.delete(pageNumber);
            });

            pdfModalRenders.set(pageNumber, task);
            await task;
        }

        async function loadPdfIntoModal(file) {
            const statusEl = document.getElementById('pdfViewerStatus');
            const pagesMetaEl = document.getElementById('pdfViewerPages');
            const scroller = document.getElementById('pdfViewerScroller');
            const pagesEl = document.getElementById('pdfPages');
            if (!statusEl || !pagesMetaEl || !scroller || !pagesEl) return;

            pdfModalRenderVersion += 1;
            const version = pdfModalRenderVersion;

            // Reset UI + cancel previous rendering.
            pagesEl.innerHTML = '';
            pagesMetaEl.textContent = '';
            statusEl.textContent = 'Loading PDF...';
            pdfModalRenders = new Map();
            if (pdfModalObserver) {
                pdfModalObserver.disconnect();
                pdfModalObserver = null;
            }
            if (pdfModalLoadingTask && typeof pdfModalLoadingTask.destroy === 'function') {
                try { await pdfModalLoadingTask.destroy(); } catch { /* noop */ }
            }
            pdfModalLoadingTask = null;
            pdfModalDoc = null;

            if (!window.pdfjsLib) {
                statusEl.textContent = 'PDF viewer failed to load (PDF.js missing).';
                return;
            }

            configurePdfJsWorkerOnce();

            try {
                pdfModalLoadingTask = window.pdfjsLib.getDocument({ url: file });
                const doc = await pdfModalLoadingTask.promise;
                if (version !== pdfModalRenderVersion) return;
                pdfModalDoc = doc;

                const totalPages = doc.numPages || 0;
                pagesMetaEl.textContent = totalPages ? `${totalPages} pages` : '';
                statusEl.textContent = 'Scroll to read.';

                // Compute a scale that fits the page width to the scroller.
                try {
                    const first = await doc.getPage(1);
                    const base = first.getViewport({ scale: 1 });
                    const available = Math.max(320, scroller.clientWidth - 32);
                    const fit = available / base.width;
                    pdfModalScale = Math.max(0.6, Math.min(1.6, fit));
                } catch {
                    pdfModalScale = 1;
                }

                // Build page placeholders.
                for (let n = 1; n <= totalPages; n += 1) {
                    const pageWrap = document.createElement('div');
                    pageWrap.className = 'pdf-page';
                    pageWrap.dataset.page = String(n);
                    pageWrap.innerHTML = `
                        <div class="pdf-page-label">Page ${n}</div>
                        <canvas class="pdf-page-canvas" aria-label="PDF page ${n}"></canvas>
                    `;
                    pagesEl.appendChild(pageWrap);
                }

                // Lazy render pages as they come into view.
                pdfModalObserver = new IntersectionObserver((entries) => {
                    for (const entry of entries) {
                        if (!entry.isIntersecting) continue;
                        const el = entry.target;
                        const n = Number(el.dataset.page);
                        renderPdfPageInModal(n, el, version);
                    }
                }, { root: scroller, rootMargin: '900px 0px' });

                for (const pageEl of pagesEl.querySelectorAll('.pdf-page')) {
                    pdfModalObserver.observe(pageEl);
                }

                // Render the first page immediately so the viewer feels responsive.
                const firstEl = pagesEl.querySelector('.pdf-page');
                if (firstEl) {
                    renderPdfPageInModal(1, firstEl, version);
                }
            } catch (err) {
                if (version !== pdfModalRenderVersion) return;
                statusEl.textContent = 'Unable to open this PDF right now.';
            }
        }

        function openPdfModal(file, label) {
            ensurePdfModal();
            const modal = document.getElementById('pdfModal');
            const title = document.getElementById('pdfModalTitle');
            if (!modal || !title) return;
            title.textContent = label;
            modal.classList.add('show');
            document.body.classList.add('pdf-open');
            loadPdfIntoModal(file);
        }

        function closePdfModal() {
            const modal = document.getElementById('pdfModal');
            const statusEl = document.getElementById('pdfViewerStatus');
            const pagesMetaEl = document.getElementById('pdfViewerPages');
            const pagesEl = document.getElementById('pdfPages');
            // Cancel any in-flight work.
            pdfModalRenderVersion += 1;
            if (pdfModalObserver) {
                pdfModalObserver.disconnect();
                pdfModalObserver = null;
            }
            if (pdfModalLoadingTask && typeof pdfModalLoadingTask.destroy === 'function') {
                try { pdfModalLoadingTask.destroy(); } catch { /* noop */ }
            }
            pdfModalLoadingTask = null;
            pdfModalDoc = null;
            pdfModalRenders = new Map();
            if (pagesEl) pagesEl.innerHTML = '';
            if (pagesMetaEl) pagesMetaEl.textContent = '';
            if (statusEl) statusEl.textContent = '';
            if (modal) modal.classList.remove('show');
            document.body.classList.remove('pdf-open');
        }

        function computeCourseProgressSnapshot() {
            const courseProgress = {};
            let totalLessonsOverall = 0;
            for (const [lang, sections] of Object.entries(curriculum)) {
                const total = Object.values(sections).reduce((sum, section) => sum + section.length, 0);
                const completed = Object.values(sections).reduce((sum, section) => {
                    return sum + section.filter(l => completedLessons.has(l.id)).length;
                }, 0);
                const percent = total > 0 ? (completed / total * 100) : 0;
                courseProgress[lang] = { total, completed, percent };
                totalLessonsOverall += total;
            }
            return { courseProgress, totalLessonsOverall };
        }

        function applyProgressDoc(docData) {
            const progress = docData && docData.progress && typeof docData.progress === 'object' ? docData.progress : {};
            userProfile = docData && docData.profile && typeof docData.profile === 'object' ? docData.profile : {};

            const completed = Array.isArray(progress.completed) ? progress.completed : [];
            completedLessons = new Set(completed);
            totalXP = Number.isFinite(Number(progress.xp)) ? Number(progress.xp) : 0;
            streak = Number.isFinite(Number(progress.streak)) ? Number(progress.streak) : 0;
            maxStreak = Number.isFinite(Number(progress.maxStreak)) ? Number(progress.maxStreak) : Math.max(maxStreak || 0, streak);
            lastStreakDate = typeof progress.lastStreak === 'string' && progress.lastStreak ? progress.lastStreak : null;

            const rawBadges = Array.isArray(progress.badges) ? progress.badges : [];
            const cleanBadges = rawBadges.filter(id => BADGE_IDS.has(id) || MASTER_BADGE_IDS.has(id) || MASTERY_BADGE_IDS.has(id));
            badges = new Set(cleanBadges);
            seedBadgesFromXP(totalXP);

            const rawEnroll = Array.isArray(progress.enrolled) ? progress.enrolled : [];
            enrolledLanguages = new Set(rawEnroll);

            const rawAttempts = progress.examAttempts && typeof progress.examAttempts === 'object' ? progress.examAttempts : {};
            examAttempts = rawAttempts;

            dailyLessonCounts = progress.dailyLessons && typeof progress.dailyLessons === 'object' && !Array.isArray(progress.dailyLessons)
                ? progress.dailyLessons
                : {};
            pruneDailyLessonCounts();

            normalizeCompletedLessons();
            seedMasteryBadgesFromCompletion();
        }

        async function saveProgress() {
            const user = getCurrentUser();
            if (!user || !user.email) {
                return;
            }

            const { courseProgress, totalLessonsOverall } = computeCourseProgressSnapshot();
            const progressPatch = {
                completed: [...completedLessons],
                xp: totalXP,
                streak: streak,
                maxStreak: Math.max(maxStreak || 0, streak),
                lastStreak: lastStreakDate || '',
                badges: [...badges],
                enrolled: [...enrolledLanguages],
                courseProgress: courseProgress,
                totalLessons: totalLessonsOverall,
                dailyLessons: dailyLessonCounts || {}
            };

            try {
                if (window.CN && typeof window.CN.saveProgress === 'function') {
                    await window.CN.saveProgress(progressPatch);
                }
            } catch (e) {
                console.error('Failed to save progress', e);
                const code = e && typeof e.code === 'string' ? e.code : '';
                const now = Date.now();
                if (!saveProgress._lastErrorToastAt || (now - saveProgress._lastErrorToastAt) > 6000) {
                    saveProgress._lastErrorToastAt = now;
                    const suffix = code ? ` (${code})` : '';
                    showBadge('Sync Error', `Could not save progress to Firebase. Check Firestore rules.${suffix}`);
                }
            }
        }

        async function loadProgress() {
            try {
                if (window.CN && window.CN.authReady) {
                    await window.CN.authReady;
                }
            } catch (e) {
                // ignore auth readiness issues
            }

            const user = getCurrentUser();
            if (!user || !user.email) {
                completedLessons = new Set();
                totalXP = 0;
                streak = 0;
                maxStreak = 0;
                lastStreakDate = null;
                badges = new Set();
                enrolledLanguages = new Set();
                examAttempts = {};
                dailyLessonCounts = {};
                userProfile = {};

                if (typeof unsubscribeUserDoc === 'function') {
                    try { unsubscribeUserDoc(); } catch (e) {}
                }
                unsubscribeUserDoc = null;
                return;
            }

            let docData = null;
            if (window.CN && typeof window.CN.getUserDoc === 'function') {
                try {
                    docData = await window.CN.getUserDoc();
                } catch (e) {
                    console.error('Failed to load user state from Firestore', e);
                    const code = e && typeof e.code === 'string' ? e.code : '';
                    if (!loadProgress._didLoadErrorToast) {
                        loadProgress._didLoadErrorToast = true;
                        const suffix = code ? ` (${code})` : '';
                        showBadge('Sync Error', `Could not load your progress from Firebase. Check Firestore rules.${suffix}`);
                    }
                }
            }

            applyProgressDoc(docData);

            // Ensure derived fields exist so Progress page can render graphs.
            try {
                const { courseProgress, totalLessonsOverall } = computeCourseProgressSnapshot();
                const needsCourseProgress = !docData || !docData.progress || !docData.progress.courseProgress;
                const needsTotalLessons = !docData || !docData.progress || typeof docData.progress.totalLessons !== 'number';
                if ((needsCourseProgress || needsTotalLessons) && window.CN && typeof window.CN.saveProgress === 'function') {
                    await window.CN.saveProgress({ courseProgress: courseProgress, totalLessons: totalLessonsOverall });
                }
            } catch (e) {
                // ignore derived-field persistence failures
            }

            // Persist any newly-seeded badges back to Firestore once.
            try {
                const originalBadges = docData && docData.progress && Array.isArray(docData.progress.badges) ? docData.progress.badges : [];
                const seeded = [...badges];
                const changed = seeded.length !== originalBadges.length || seeded.some((b) => !originalBadges.includes(b));
                if (changed && window.CN && typeof window.CN.saveProgress === 'function') {
                    await window.CN.saveProgress({ badges: seeded });
                }
            } catch (e) {
                // ignore
            }

            // Live updates (e.g., exams completed in the iframe modal)
            try {
                if (typeof unsubscribeUserDoc === 'function') {
                    unsubscribeUserDoc();
                }
                unsubscribeUserDoc = null;
                if (window.CN && typeof window.CN.subscribeUserDoc === 'function') {
                    unsubscribeUserDoc = await window.CN.subscribeUserDoc((snapData) => {
                        if (!snapData) return;
                        applyProgressDoc(snapData);
                        updateHeaderStats();
                        updateLanguageProgress();
                        updateAuthUI();
                        renderHomeExamCards();
                        renderHomePdfResources();
                        if (currentLanguage && curriculum[currentLanguage]) {
                            try {
                                renderCurriculum();
                            } catch (e) {
                                // ignore render failures during auth/doc transitions
                            }
                        }
                    });
                }
            } catch (e) {
                // ignore subscription failures
            }
        }

        // Start
        init();
