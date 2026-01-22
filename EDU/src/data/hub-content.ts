import {
    Binary, Cpu, Database, Terminal, Settings2, BrainCircuit, BarChart3, BookOpen, Globe, Code2, FileText
} from 'lucide-react';
import { HubData } from '../components/CourseHub.tsx';

// --- Logic & Math Data ---
export const logicData: HubData = {
    title: "Logic & Math",
    subTitle: 'Understand the "Why" behind the code. Learn how mathematical concepts power the biggest domains in Computer Science.',
    headerIcon: Binary,
    emptyIcon: BrainCircuit,
    color: 'teal',
    levels: {
        basic: {
            title: "Thinking in Patterns (Basic)",
            description: "The core logic required to write bug-free code and understand basic algorithms.",
            modules: [
                { title: "Module 1: Decision Logic", topics: ["Conditionals", "Truth Tables", "Boolean Algebra in If-Statements"] },
                { title: "Module 2: Sets & Data", topics: ["Unique Collections", "Intersections in Database Joins", "Filtering Logic"] },
                { title: "Module 3: Counting & Complexity", topics: ["Permutations", "Combinations", "Calculating Loop Complexity"] },
                { title: "Module 4: Graph Foundations", topics: ["Nodes & Edges", "Social Network Logic", "Map/Navigation Basics"] },
                { title: "Module 5: Recursion Math", topics: ["Mathematical Induction", "Factorials", "Fibonacci Logic"] }
            ]
        },
        advanced: {
            title: "Math in CS Domains (Advanced)",
            description: "See exactly where high-level math is used in specialized tech fields. No abstract proofs, just real applications.",
            modules: [
                { title: "Module 1: Math in Machine Learning", topics: ["Linear Algebra (Matrices)", "Calculus (Optimization)", "Probability (Predictions)"] },
                { title: "Module 2: Math in Graphics & Games", topics: ["Vectors", "3D Transformations", "Trigonometry for Character Movement"] },
                { title: "Module 3: Math in Cryptography", topics: ["Prime Numbers", "Modular Arithmetic", "Public/Private Key Logic"] },
                { title: "Module 4: Math in Data Science", topics: ["Normal Distribution", "Hypothesis Testing", "Correlation vs Causation"] },
                { title: "Module 5: Math in Networking", topics: ["Information Theory", "Checksums & Error Detection", "Routing Algorithms"] },
                { title: "Module 6: Math in Financial Tech", topics: ["Compound Interest Logic", "Risk Assessment Models", "Blockchain Hashing"] },
                { title: "Module 7: Math in Robotics", topics: ["Kinematics", "Sensor Fusion Probability", "Control Theory Foundations"] },
                { title: "Module 8: Math in Compilers", topics: ["Automata Theory", "Regular Languages", "Parsing Trees"] }
            ]
        }
    }
};

// --- Machine Learning Data ---
export const mlData: HubData = {
    title: "Machine Learning",
    subTitle: "From algorithmic foundations to building autonomous systems. Master the science of teaching machines.",
    headerIcon: Cpu,
    emptyIcon: Settings2,
    color: 'red',
    levels: {
        basic: {
            title: "ML Foundations (Basic)",
            description: "Understand how machines learn. Focus on classical algorithms and the math that makes them work.",
            modules: [
                { title: "Week 1: What is ML?", topics: ["Supervised vs Unsupervised", "The ML Workflow", "Environment Setup (Scikit-learn)"] },
                { title: "Week 2: Linear Regression", topics: ["Cost Functions", "Gradient Descent", "Feature Scaling"] },
                { title: "Week 3: Classification", topics: ["Logistic Regression", "Sigmoid Function", "Decision Boundaries"] },
                { title: "Week 4: Model Evaluation", topics: ["Overfitting & Underfitting", "Bias-Variance Tradeoff", "Cross-Validation"] },
                { title: "Week 5: Metrics", topics: ["Precision/Recall", "F1 Score", "Confusion Matrix", "ROC-AUC"] },
                { title: "Week 6: Decision Trees", topics: ["Entropy", "Information Gain", "Gini Impurity", "Pruning"] },
                { title: "Week 7: Ensemble Basics", topics: ["Bagging", "Random Forest Fundamentals", "Voting Classifiers"] },
                { title: "Week 8: Support Vector Machines", topics: ["Hyperplanes", "Hard vs Soft Margin", "Kernel Trick Basics"] },
                { title: "Week 9: K-Nearest Neighbors", topics: ["Distance Metrics", "Choosing K", "Lazy Learning"] },
                { title: "Week 10: Capstone Project", topics: ["End-to-end Pipeline: Prediction of Housing Prices or Churn"] }
            ]
        },
        advanced: {
            title: "Deep Learning & Neural Systems (Advanced)",
            description: "A fast-paced immersion into neural networks and complex architectures for production-grade AI.",
            modules: [
                { title: "Module 1: Rapid ML Refresh", topics: ["Hello World to Logistic Regression", "Vectorization", "Optimization Algorithms"] },
                { title: "Module 2: Neural Net Fundamentals", topics: ["Perceptrons", "Multi-layer Perceptrons", "Activation Functions (ReLU, Softmax)"] },
                { title: "Module 3: Backpropagation", topics: ["Partial Derivatives", "Chain Rule", "Weight Initialization"] },
                { title: "Module 4: Deep Learning Optimization", topics: ["Adam/RMSprop", "Batch Norm", "Dropout", "Learning Rate Schedulers"] },
                { title: "Module 5: Computer Vision (CNNs)", topics: ["Convolution Layers", "Pooling", "Famous Architectures (ResNet, VGG)"] },
                { title: "Module 6: Sequence Models (RNNs)", topics: ["LSTMs", "GRUs", "Text Classification", "Time Series Prediction"] },
                { title: "Module 7: Modern NLP (Transformers)", topics: ["Self-Attention", "Encoder-Decoder Architecture", "BERT & GPT Concepts"] },
                { title: "Module 8: Generative Models", topics: ["GANs (Generative Adversarial Nets)", "Variational Autoencoders", "Diffusion Basics"] },
                { title: "Module 9: MLOps & Production", topics: ["Model Quantization", "Serving with TensorFlow Extended (TFX)", "TensorRT"] },
                { title: "Module 10: Specialization Focus", topics: ["RL (Reinforcement Learning)", "Medical Imaging AI", "Autonomous Driving Systems", "Edge AI (Mobile/IoT)"] }
            ]
        }
    }
};

// --- Data Science Data ---
export const dataScienceData: HubData = {
    title: "Data Science",
    subTitle: "Unlock the power of data. From statistical foundations to predictive modeling and AI specialization.",
    headerIcon: Database,
    emptyIcon: BarChart3,
    color: 'purple',
    levels: {
        basic: {
            title: "Data Foundations (Basic)",
            description: "Master the essential math and data manipulation skills required for data science.",
            modules: [
                { title: "Week 1: Statistics 101", topics: ["Mean, Median, Mode", "Standard Deviation", "Probability Basics"] },
                { title: "Week 2: Python for Data", topics: ["Data Structures", "List Comprehensions", "Functional Programming for Data"] },
                { title: "Week 3: NumPy Essentials", topics: ["Arrays", "Vectorization", "Broadcasting", "Linear Algebra Basics"] },
                { title: "Week 4: Pandas Foundations", topics: ["Series & DataFrames", "Selection & Filtering", "Sorting"] },
                { title: "Week 5: Data Cleaning", topics: ["Handling Missing Values", "Removing Duplicates", "Data Normalization"] },
                { title: "Week 6: Visualization I", topics: ["Matplotlib Basics", "Line Plots", "Bar Charts", "Histograms"] },
                { title: "Week 7: Exploratory Analysis", topics: ["Descriptive Stats", "Correlation", "Outlier Detection"] },
                { title: "Week 8: SQL for Data Science", topics: ["SELECT Statements", "JOINs", "Aggregations", "Grouping"] },
                { title: "Week 9: Inferential Stats", topics: ["Hypothesis Testing", "P-Values", "Confidence Intervals"] },
                { title: "Week 10: Capstone project", topics: ["Analysis of a Real-world Dataset", "Storytelling with Data"] }
            ]
        },
        advanced: {
            title: "Applied AI & Modeling (Advanced)",
            description: "A fast-paced track covering machine learning and specialized domains for the modern Data Scientist.",
            modules: [
                { title: "Module 1: ML Lifecycle Rapid Start", topics: ["Intro to Scikit-Learn", "Preprocessing", "Train/Test Split", "Baseline Models"] },
                { title: "Module 2: Regression & Classification", topics: ["Logistic Regression", "Decision Trees", "Random Forests", "Evaluation Metrics"] },
                { title: "Module 3: Feature Engineering", topics: ["Scaling", "Encoding", "Dimensionality Reduction (PCA)", "Feature Selection"] },
                { title: "Module 4: Clustering & Unsupervised", topics: ["K-Means", "Hierarchical Clustering", "Anomaly Detection"] },
                { title: "Module 5: Gradient Boosting", topics: ["XGBoost", "LightGBM", "CatBoost", "Hyperparameter Tuning"] },
                { title: "Module 6: Time Series Analysis", topics: ["Stationarity", "ARIMA", "Prophet", "Forecasting Techniques"] },
                { title: "Module 7: NLP Foundations", topics: ["Tokenization", "TF-IDF", "Word Embeddings", "Sentiment Analysis"] },
                { title: "Module 8: Deep Learning Intro", topics: ["Neural Networks", "Backpropagation", "Keras & TensorFlow Basics"] },
                { title: "Module 9: MLOps & Deployment", topics: ["Model Versioning", "Flask/FastAPI for ML", "Cloud Deployment Basics"] },
                { title: "Module 10: Domain Specializations", topics: ["CV (Computer Vision)", "Generative AI (LLMs)", "Reinforcement Learning", "Big Data (PySpark)"] }
            ]
        }
    }
};


// --- Python Data ---
export const pythonData: HubData = {
    title: "Python",
    subTitle: "Choose your learning path. Master the fundamentals or take the fast-track to professional specialization.",
    headerIcon: Terminal,
    emptyIcon: BookOpen,
    color: 'blue',
    levels: {
        basic: {
            title: "Basic Track",
            description: "A steady-paced introduction for absolute beginners. We take it one step at a time.",
            modules: [
                { title: "Week 1: Introduction", topics: ["Setting up the Environment", "Hello World", "Simple Arithmetic"] },
                { title: "Week 2: Variables", topics: ["Strings", "Integers", "Floats", "Naming Conventions"] },
                { title: "Week 3: Decisions", topics: ["If Statements", "Comparison Operators", "Indentation Rules"] },
                { title: "Week 4: Lists", topics: ["Creating Lists", "Appending & Removing", "Indexing"] },
                { title: "Week 5: Loops", topics: ["For Loops", "While Loops", "Iteration Basics"] },
                { title: "Week 6: Functions", topics: ["Defining Functions", "Parameters", "Return Values"] },
                { title: "Week 7: Dictionaries", topics: ["Key-Value Pairs", "Data Management", "Methods"] },
                { title: "Week 8: User Input", topics: ["Input Function", "Type Casting", "Building interactive scripts"] },
                { title: "Week 9: Error Basics", topics: ["Syntax Errors", "Logical Errors", "Print Debugging"] },
                { title: "Week 10: Capstone", topics: ["Calculators", "Simple Word Games"] }
            ]
        },
        advanced: {
            title: "Advanced Track",
            description: "A high-intensity, fast-paced path. Rapidly move from basics to professional specialization domains.",
            modules: [
                { title: "Module 1: Rapid Core", topics: ["Hello World to Control Flow", "Logical Operators", "List Comprehensions"] },
                { title: "Module 2: Fast-Track Structures", topics: ["Dictionaries", "Sets", "Tuples", "Memory Management Basics"] },
                { title: "Module 3: Functional Programming", topics: ["Lambda", "Map/Filter/Reduce", "Recursion"] },
                { title: "Module 4: OOP Immersion", topics: ["Classes", "Inheritance", "Polymorphism", "Encapsulation"] },
                { title: "Module 5: File & System", topics: ["OS Module", "JSON/CSV Parsing", "Context Managers"] },
                { title: "Module 6: External APIs", topics: ["Requests Library", "REST Architecture", "Authentication"] },
                { title: "Module 7: Database Systems", topics: ["SQL Basics", "ORM Fundamentals", "PostgreSQL Integration"] },
                { title: "Module 8: Concurrency", topics: ["Threading", "AsyncIO", "Process Pools"] },
                { title: "Module 9: Production Tools", topics: ["Unit Testing", "Logging", "Virtual Environments", "Dockerization"] },
                { title: "Module 10: Specialization & Domain Intro", topics: ["Web (Django/Flask)", "Data Science (Pandas/NumPy)", "AI (Scikit-Learn)", "Automation (Selenium)"] }
            ]
        }
    }
};

// --- Web Development Foundations Data ---
export const webDevData: HubData = {
    title: "Web Development Foundations",
    subTitle: "Master the core technologies that power the internet. Build beautiful, responsive websites from scratch.",
    headerIcon: Globe,
    emptyIcon: Code2,
    color: 'purple',
    levels: {
        basic: {
            title: "Web Development Foundations - Basic",
            description: "Start your journey into web development. Learn HTML to structure content and CSS to style it beautifully.",
            modules: [
                { title: "Module 1: How the Web Works", topics: ["Client-Server Architecture", "HTTP Protocol", "URLs & Domain Names", "Browser Basics"] },
                { title: "Module 2: HTML5 Semantic Structure", topics: ["HTML Tags & Elements", "Semantic HTML", "Forms & Inputs", "Accessibility Basics"] },
                { title: "Module 3: CSS3 Styling & Box Model", topics: ["CSS Selectors", "Box Model", "Typography", "Colors & Backgrounds"] },
                { title: "Module 4: Flexbox & Grid Layouts", topics: ["Flexbox Fundamentals", "CSS Grid", "Responsive Layouts", "Common Patterns"] },
                { title: "Module 5: Responsive Design Principles", topics: ["Media Queries", "Mobile-First Design", "Viewport Units", "Breakpoints"] },
                { title: "Module 6: Building a Personal Portfolio", topics: ["Project Planning", "Multi-page Website", "Navigation", "Deployment"] }
            ]
        },
        advanced: {
            title: "Web Development Foundations - Advanced",
            description: "Master modern web development with JavaScript and backend concepts. Build interactive, data-driven applications.",
            modules: [
                { title: "Module 1: JavaScript ES6+ Features", topics: ["Variables & Scope", "Arrow Functions", "Destructuring", "Modules"] },
                { title: "Module 2: DOM Manipulation & Events", topics: ["Selecting Elements", "Event Listeners", "Dynamic Content", "Form Validation"] },
                { title: "Module 3: Asynchronous JavaScript", topics: ["Promises", "Async/Await", "Fetch API", "Error Handling"] },
                { title: "Module 4: Introduction to React", topics: ["Components", "Props & State", "Hooks", "Event Handling"] },
                { title: "Module 5: Node.js & Express Basics", topics: ["Server Setup", "Routing", "Middleware", "REST APIs"] },
                { title: "Module 6: Database Fundamentals", topics: ["SQL Basics", "CRUD Operations", "Database Design", "ORMs"] },
                { title: "Module 7: Deployment & Hosting", topics: ["Git & GitHub", "CI/CD Basics", "Cloud Platforms", "Domain Setup"] }
            ]
        }
    }
};

// --- Tech Starter Program Data ---
export const techStarterData: HubData = {
    title: "Tech Starter Program",
    subTitle: "Build your confidence before university. Master fundamental computer skills and logical thinking.",
    headerIcon: Terminal,
    emptyIcon: BookOpen,
    color: 'cyan',
    levels: {
        basic: {
            title: "Tech Starter - Level 1",
            description: "Fundamental computer skills and logical thinking for absolute beginners.",
            modules: [
                { title: "Week 1: Computer Basics", topics: ["Hardware & Software", "Operating Systems", "File Management", "Shortcuts & Productivity"] },
                { title: "Week 2: Internet Safety", topics: ["Online Privacy", "Password Security", "Phishing Awareness", "Digital Footprint"] },
                { title: "Week 3: Logic Puzzles", topics: ["Pattern Recognition", "Logical Thinking", "Problem Decomposition", "Critical Reasoning"] },
                { title: "Week 4: Block-based Coding", topics: ["Scratch Introduction", "Sequences", "Loops", "Conditionals"] },
                { title: "Week 5: Digital Citizenship", topics: ["Online Ethics", "Copyright Basics", "Digital Communication", "Tech Responsibility"] }
            ]
        },
        advanced: {
            title: "Tech Starter - Level 2",
            description: "Transition from user to creator with introductory coding and creation tools.",
            modules: [
                { title: "Module 1: Introduction to Python", topics: ["Python Setup", "Variables", "Basic Operations", "Simple Programs"] },
                { title: "Module 2: Building Simple Websites", topics: ["HTML Basics", "CSS Styling", "Creating Pages", "Publishing Online"] },
                { title: "Module 3: Basic Graphic Design", topics: ["Design Principles", "Color Theory", "Canva/Figma Basics", "Creating Posters"] },
                { title: "Module 4: Problem Solving Strategies", topics: ["Algorithmic Thinking", "Debugging", "Breaking Down Problems", "Testing Solutions"] },
                { title: "Module 5: Future Tech Trends", topics: ["AI Overview", "Cloud Computing", "IoT Basics", "Career Paths in Tech"] }
            ]
        }
    }
};

// --- Final Year Project Guidance Data ---
export const fypData: HubData = {
    title: "Final Year Project Guidance",
    subTitle: "From idea to implementation. Get expert guidance for your academic capstone project.",
    headerIcon: FileText,
    emptyIcon: BookOpen,
    color: 'purple',
    levels: {
        basic: {
            title: "Final Year Project - Planning",
            description: "Structure your ideas into a viable project proposal and plan.",
            modules: [
                { title: "Phase 1: Idea Generation", topics: ["Brainstorming Techniques", "Problem Identification", "Research Gap Analysis", "Feasibility Assessment"] },
                { title: "Phase 2: Feasibility Study", topics: ["Technical Feasibility", "Resource Analysis", "Time Management", "Risk Assessment"] },
                { title: "Phase 3: Requirement Analysis", topics: ["Functional Requirements", "Non-Functional Requirements", "User Stories", "Use Case Diagrams"] },
                { title: "Phase 4: System Design", topics: ["Architecture Design", "Database Design", "UI/UX Mockups", "Technology Stack Selection"] },
                { title: "Phase 5: Proposal Writing", topics: ["Abstract & Introduction", "Literature Review", "Methodology", "Timeline & Deliverables"] }
            ]
        },
        advanced: {
            title: "Final Year Project - Execution",
            description: "Implementation, testing, and final documentation of your academic project.",
            modules: [
                { title: "Sprint 1: Agile Implementation", topics: ["Sprint Planning", "Version Control", "Code Organization", "Collaboration Tools"] },
                { title: "Sprint 2: Testing Strategies", topics: ["Unit Testing", "Integration Testing", "User Acceptance Testing", "Bug Tracking"] },
                { title: "Sprint 3: Documentation Standards", topics: ["Technical Documentation", "User Manual", "Code Comments", "API Documentation"] },
                { title: "Sprint 4: Presentation Skills", topics: ["Slide Design", "Demo Preparation", "Storytelling", "Q&A Handling"] },
                { title: "Sprint 5: Viva Preparation", topics: ["Common Questions", "Defense Strategies", "Confidence Building", "Final Review"] }
            ]
        }
    }
};

import {
    Rocket, Gamepad2
} from 'lucide-react';
import { KidsHubData } from '../components/KidsHub.tsx';

export const kidsData: KidsHubData = {
    title: "Coding Kids Hub",
    subTitle: "Fun and interactive coding lessons designed specifically for kids to spark creativity and logical thinking.",
    headerIcon: Rocket,
    emptyIcon: Gamepad2,
    color: 'cyan',
    groups: {
        group1: {
            title: "Little Explorers (Ages 5-7)",
            description: "Learn how computers think through play and games! No typing required.",
            modules: [
                { title: "Mission 1: Code a Robot", topics: ["Giving Directions", "Forward, Back, Turn", "Step-by-step thinking"] },
                { title: "Mission 2: Pattern Power", topics: ["Spotting Shapes", "Colors and Sequences", "Predicting what's next"] },
                { title: "Mission 3: Fix the Glitch", topics: ["Simple Debugging", "Finding the wrong turn", "Trying again!"] },
                { title: "Mission 4: Loops of Fun", topics: ["Doing things twice", "The 'Repeat' button", "Dancing with loops"] },
                { title: "Mission 5: Your First Game", topics: ["Drag-and-drop fun", "Making a character move", "Victory noises!"] }
            ]
        },
        group2: {
            title: "Junior Creators (Ages 7-10)",
            description: "Build your own stories and animated worlds using block-based coding.",
            modules: [
                { title: "Level 1: Scratch Adventures", topics: ["Blocks are Code", "Moving Sprites", "Sounds & Speech"] },
                { title: "Level 2: Storytelling", topics: ["Adding Backgrounds", "Changing Costumes", "Dialog Bubbles"] },
                { title: "Level 3: Game Logic", topics: ["Scoreboards", "Touching Colors", "Game Over screens"] },
                { title: "Level 4: Input & Interaction", topics: ["Keyboard Controls", "Mouse Clicks", "Making a Paint Tool"] },
                { title: "Level 5: Creative Project", topics: ["Build a Multi-level Platformer", "Sharing with Friends"] }
            ]
        },
        group3: {
            title: "Pro Coders (Ages 10-13)",
            description: "Transition to real languages. Learn how professional websites and apps are made!",
            modules: [
                { title: "Part 1: Python Basics", topics: ["Variables", "Strings & Numbers", "Fast Calculations"] },
                { title: "Part 2: If/Else Magic", topics: ["Making Decisions", "User Inputs", "Smart Chatbots"] },
                { title: "Part 3: Web Secrets", topics: ["Intro to HTML", "Cool Colors with CSS", "Designing a Profile Page"] },
                { title: "Part 4: Real App Logic", topics: ["Functions", "Lists of Data", "Randomized Dice Games"] },
                { title: "Part 5: Future Tech", topics: ["Intro to AI", "How Apps Talk to Servers", "Cyber Safety"] }
            ]
        }
    }
};
