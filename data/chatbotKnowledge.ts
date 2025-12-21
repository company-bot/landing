export interface KnowledgeItem {
  keywords: string[];
  answer: string;
  category: string;
}

export const knowledgeBase: KnowledgeItem[] = [
  // About SyZentric
  {
    keywords: ['syzentric', 'what is', 'about', 'company', 'who are you', 'tell me about'],
    answer: "SyZentric is an innovative technology company with two main service platforms: TECH (our technology solutions) and EDU (our educational platform). We're dedicated to delivering cutting-edge solutions across multiple sectors.",
    category: 'general'
  },
  {
    keywords: ['mission', 'vision', 'goal', 'purpose', 'why'],
    answer: "Our mission is to empower businesses and individuals through innovative technology solutions and comprehensive educational programs. We aim to bridge the gap between advanced technology and practical application.",
    category: 'general'
  },
  
  // Landing Page
  {
    keywords: ['main', 'landing page', 'homepage', 'main page'],
    answer: "Our main landing page showcases SyZentric and provides access to our two service platforms: TECH for technology solutions and EDU for educational programs. It's your gateway to explore all we have to offer.",
    category: 'general'
  },
  
  // TECH Platform
  {
    keywords: ['tech', 'technology', 'tech platform', 'technical solutions', 'software'],
    answer: "TECH is our technology-focused platform offering cutting-edge software solutions, development services, AI integration, cloud solutions, and custom application development. We leverage the latest technologies to build scalable, innovative solutions.",
    category: 'platforms'
  },
  {
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml'],
    answer: "We offer comprehensive AI and Machine Learning solutions including natural language processing, computer vision, predictive analytics, and custom AI model development tailored to your business needs.",
    category: 'platforms'
  },
  {
    keywords: ['cloud', 'cloud services', 'hosting', 'deployment'],
    answer: "Our cloud solutions include infrastructure setup, migration services, cloud-native application development, and managed cloud services across AWS, Azure, and Google Cloud platforms.",
    category: 'platforms'
  },
  
  // EDU Platform
  {
    keywords: ['edu', 'education', 'learning', 'courses', 'training', 'teach'],
    answer: "EDU is our educational platform offering comprehensive courses in technology, programming, AI, data science, and professional development. We provide both self-paced and instructor-led programs designed for all skill levels.",
    category: 'platforms'
  },
  {
    keywords: ['programs', 'curriculum', 'study', 'certification'],
    answer: "We offer various educational programs including beginner to advanced courses in web development, data science, AI/ML, cybersecurity, and cloud computing. Many programs include industry-recognized certifications.",
    category: 'platforms'
  },
  
  // Services & Capabilities
  {
    keywords: ['services', 'what do you offer', 'capabilities', 'offerings'],
    answer: "We offer a wide range of services including custom software development, AI/ML solutions, cloud infrastructure, web and mobile app development, educational courses, consulting, and digital transformation services.",
    category: 'services'
  },
  {
    keywords: ['web development', 'website', 'web app', 'frontend', 'backend'],
    answer: "Our web development services cover full-stack development using modern frameworks like React, Vue, Angular, Node.js, and more. We build responsive, scalable, and performant web applications tailored to your needs.",
    category: 'services'
  },
  {
    keywords: ['mobile', 'app development', 'ios', 'android', 'mobile app'],
    answer: "We develop native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and native technologies. From concept to deployment, we handle the entire mobile development lifecycle.",
    category: 'services'
  },
  
  // Contact & Support
  {
    keywords: ['contact', 'reach', 'get in touch', 'email', 'phone', 'call'],
    answer: "You can contact us through our website's contact form, or reach out to our support team. We typically respond within 24 hours. For urgent inquiries, please use the priority contact option on our contact page.",
    category: 'contact'
  },
  {
    keywords: ['support', 'help', 'assistance', 'customer service'],
    answer: "Our support team is available to assist you with any questions or issues. We offer 24/7 support for enterprise clients and business-hours support for standard plans. You can reach us via email, chat, or phone.",
    category: 'contact'
  },
  {
    keywords: ['hours', 'availability', 'when', 'open', 'working hours'],
    answer: "We operate globally with team members across different time zones. Our standard business hours are Monday-Friday, 9 AM - 6 PM, but our online platforms are available 24/7. Enterprise clients receive round-the-clock support.",
    category: 'contact'
  },
  
  // Pricing & Plans
  {
    keywords: ['price', 'pricing', 'cost', 'how much', 'payment', 'plans'],
    answer: "We offer flexible pricing plans tailored to different needs - from startups to enterprise organizations. Pricing varies based on services, scope, and requirements. Contact us for a custom quote based on your specific needs.",
    category: 'pricing'
  },
  {
    keywords: ['free', 'trial', 'demo', 'test'],
    answer: "Yes! We offer free trials for many of our EDU courses and demo sessions for our TECH solutions. Contact us to schedule a personalized demo or start your free trial on our EDU platform.",
    category: 'pricing'
  },
  
  // Technology Stack
  {
    keywords: ['technology stack', 'tech stack', 'languages', 'frameworks', 'tools'],
    answer: "We work with modern technologies including React, TypeScript, Node.js, Python, Next.js, TailwindCSS, Three.js, and more. Our stack is chosen based on project requirements to ensure optimal performance and scalability.",
    category: 'technology'
  },
  {
    keywords: ['react', 'typescript', 'vite', 'tailwind'],
    answer: "Yes! We extensively use React with TypeScript for building robust applications, Vite for lightning-fast development, and TailwindCSS for beautiful, responsive designs - just like this website!",
    category: 'technology'
  },
  
  // Getting Started
  {
    keywords: ['get started', 'start', 'begin', 'how to', 'onboarding'],
    answer: "Getting started is easy! Browse our platforms to explore services, schedule a consultation call, or sign up for our EDU platform. We'll guide you through the entire process and tailor our approach to your specific needs.",
    category: 'getting-started'
  },
  {
    keywords: ['demo', 'demonstration', 'show me', 'preview'],
    answer: "We'd love to show you what we can do! Schedule a demo session through our contact page, and we'll walk you through our platforms and demonstrate how our solutions can benefit you.",
    category: 'getting-started'
  },
  
  // Greetings
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    answer: "Hello! 👋 Welcome to SyZentric! I'm here to help you learn about our platforms (Main, TECH, and EDU), our services, and how we can help you. What would you like to know?",
    category: 'greeting'
  },
  
  // Thank you
  {
    keywords: ['thank', 'thanks', 'appreciate'],
    answer: "You're very welcome! Feel free to ask me anything else about SyZentric. I'm here to help! 😊",
    category: 'courtesy'
  },
  
  // Goodbye
  {
    keywords: ['bye', 'goodbye', 'see you', 'farewell', 'exit'],
    answer: "Goodbye! Thanks for chatting with me. Feel free to return anytime you have questions about SyZentric. Have a great day! 👋",
    category: 'courtesy'
  }
];

export const fallbackResponses = [
  "That's an interesting question! While I don't have specific information about that, I'd be happy to help you with questions about SyZentric's platforms (TECH and EDU), our services, or how to get started. What would you like to know?",
  "I'm not quite sure about that, but I can help you learn about SyZentric's technology solutions, educational programs, or our core services. What aspect interests you most?",
  "I don't have information on that specific topic, but I'm knowledgeable about SyZentric's platforms, services, pricing, and how we can help you. Feel free to ask about any of these!",
  "Great question! While that's outside my current knowledge, I can tell you all about SyZentric's TECH platform, EDU programs, our services, or how to contact us. What would you like to explore?"
];

export const greetingMessage = "Hello! 👋 I'm the SyZentric AI Assistant. I can help you learn about our two service platforms: TECH (technology solutions) and EDU (educational programs). What would you like to know?";
