export interface KnowledgeItem {
  keywords: string[];
  answer: string;
  category: string;
  relatedQuestions?: string[];
}

export const knowledgeBase: KnowledgeItem[] = [
  // About SyZentric - General
  {
    keywords: ['syzentric', 'what is', 'about', 'company', 'who are you', 'tell me about'],
    answer: "SyZentric is a comprehensive multi-platform ecosystem showcasing innovation at the intersection of technology and human potential. We operate two main pillars: **SyZentric TECH** (IT services and AI solutions) and **SyZentric EDU** (educational resources to bridge the gap between theory and practice).",
    category: 'general',
    relatedQuestions: [
      "What does the name SyZentric mean?",
      "What is SyZentric's vision?",
      "What makes SyZentric different?"
    ]
  },
  {
    keywords: ['what does syzentric do', 'what do you do', 'services overview'],
    answer: "We operate two main pillars: **SyZentric TECH**, which provides IT services, AI solutions, web development, and digital transformation; and **SyZentric EDU**, which offers educational resources and practical training to empower the next generation of tech leaders.",
    category: 'general',
    relatedQuestions: [
      "What is the TECH platform?",
      "What is the EDU platform?",
      "What services do you offer?"
    ]
  },
  {
    keywords: ['software company', 'ai company', 'type of company'],
    answer: "We are both! SyZentric is a technology company focused on AI, education, and cutting-edge solutions. We build software while focusing heavily on AI integration and understanding.",
    category: 'general',
    relatedQuestions: [
      "What AI solutions do you offer?",
      "Do you build custom software?",
      "What technologies do you use?"
    ]
  },
  {
    keywords: ['industries', 'sectors', 'who do you work with'],
    answer: "We work across various sectors requiring digital transformation, including education (EdTech) and businesses needing IT services, web development, and AI integration.",
    category: 'general',
    relatedQuestions: [
      "Can you work with small businesses?",
      "Do you work with enterprises?",
      "What services do you provide?"
    ]
  },
  {
    keywords: ['founded', 'founder', 'who created', 'who started'],
    answer: "SyZentric is built and maintained by the SyZentric Team, dedicated to innovation at the intersection of technology and human potential.",
    category: 'general',
    relatedQuestions: [
      "Where is SyZentric based?",
      "What is your vision?",
      "How can I contact you?"
    ]
  },
  {
    keywords: ['based', 'location', 'where', 'headquarters', 'office'],
    answer: "SyZentric operates as a digital ecosystem. We are a global, digital-first company accessible from anywhere in the world.",
    category: 'general',
    relatedQuestions: [
      "Is SyZentric global?",
      "What are your working hours?",
      "How can I contact you?"
    ]
  },
  {
    keywords: ['startup', 'established', 'new company', 'age'],
    answer: "We are an innovative technology company currently in active development, with a roadmap extending into 2025 and beyond.",
    category: 'general',
    relatedQuestions: [
      "What are your future plans?",
      "Are you expanding your services?",
      "What makes you different?"
    ]
  },
  {
    keywords: ['different', 'unique', 'why choose', 'stand out', 'competitive advantage'],
    answer: "We don't just build technology; we ensure it is understood. Our unique ecosystem combines professional IT services with an educational platform to empower the next generation. We take a 'Centric' approach—everything revolves around efficiency, data precision, and seamless integration.",
    category: 'general',
    relatedQuestions: [
      "What is your vision?",
      "What does 'centric' mean?",
      "How do you ensure quality?"
    ]
  },
  {
    keywords: ['small business', 'small businesses', 'startups'],
    answer: "Yes! We offer scalable web development and digital strategies that can be tailored to businesses of any size. Our solutions grow with you.",
    category: 'general',
    relatedQuestions: [
      "What are your pricing options?",
      "Do you offer custom solutions?",
      "How do I get started?"
    ]
  },
  {
    keywords: ['enterprise', 'large business', 'corporations'],
    answer: "Absolutely. Our focus on 'Systemic Architecture' and stable, advanced systems makes us capable of handling enterprise-level needs with reliability and scalability.",
    category: 'general',
    relatedQuestions: [
      "What is Systemic Architecture?",
      "How do you ensure reliability?",
      "Do you provide ongoing support?"
    ]
  },
  {
    keywords: ['global', 'international', 'worldwide', 'region'],
    answer: "As a digital platform, SyZentric is accessible globally. We serve clients and students from around the world.",
    category: 'general',
    relatedQuestions: [
      "What are your working hours?",
      "How can I contact you?",
      "Do you offer support in different time zones?"
    ]
  },

  // Name and Brand
  {
    keywords: ['name meaning', 'syzentric mean', 'what does syzentric mean', 'name origin'],
    answer: "The name SyZentric is a fusion of two concepts: **'Systemic Architecture'** (the backbone of technology) and **'Zenith'** (the highest point of achievement). It represents our commitment to building the most stable and advanced systems while reaching the peak of intelligence.",
    category: 'brand',
    relatedQuestions: [
      "How do you pronounce SyZentric?",
      "Is SyZentric a real word?",
      "What does 'The Zenith of Intelligence' mean?"
    ]
  },
  {
    keywords: ['came up with name', 'name creation', 'why syzentric'],
    answer: "It's a neologism created to represent a company that builds the most stable and advanced systems while reaching the peak of intelligence. We combined 'Systemic Architecture' and 'Zenith' to create something unique and meaningful.",
    category: 'brand',
    relatedQuestions: [
      "What does SyZentric mean?",
      "What is the philosophy behind the name?",
      "Is it a real word?"
    ]
  },
  {
    keywords: ['real word', 'dictionary', 'neologism', 'made up'],
    answer: "No, 'SyZentric' is a unique **neologism**—a newly coined word. We created it to ensure our brand is original and globally distinct, perfectly encapsulating our blend of Systemic Architecture and Zenith.",
    category: 'brand',
    relatedQuestions: [
      "What does it mean?",
      "Why this spelling?",
      "What does it stand for?"
    ]
  },
  {
    keywords: ['philosophy', 'name philosophy', 'meaning behind'],
    answer: "It implies a 'Centric' approach. Whether it's software, hardware, or AI, SyZentric is the hub that ensures everything integrates seamlessly. We are the center that makes technology work together in harmony.",
    category: 'brand',
    relatedQuestions: [
      "What does 'centric' mean in your philosophy?",
      "What is your vision?",
      "How do you approach innovation?"
    ]
  },
  {
    keywords: ['stand for', 'acronym', 'abbreviation'],
    answer: "SyZentric stands for **'The Zenith of Intelligence'**—representing our commitment to reaching the highest point of technological achievement and understanding.",
    category: 'brand',
    relatedQuestions: [
      "What does the name mean?",
      "What is your vision?",
      "What are your values?"
    ]
  },
  {
    keywords: ['spelling', 'why spelled', 'unusual spelling'],
    answer: "The spelling blends 'Sys' (System) and 'Zen' (Zenith) with 'Centric' to create a distinct, trademark-friendly identity that perfectly captures our essence.",
    category: 'brand',
    relatedQuestions: [
      "How do you pronounce it?",
      "What does it mean?",
      "Is it a real word?"
    ]
  },
  {
    keywords: ['pronounce', 'pronunciation', 'say', 'how to say'],
    answer: "It's pronounced **Sigh-Zen-Tric** (like 'sigh' + 'zen' + 'trick').",
    category: 'brand',
    relatedQuestions: [
      "What does the name mean?",
      "Why is it spelled this way?",
      "Tell me about SyZentric"
    ]
  },

  // Vision, Mission, and Values
  {
    keywords: ['mission', 'vision', 'goal', 'purpose', 'why'],
    answer: "Our vision is to be **'The Zenith of Intelligence'**, innovating at the intersection of technology and human potential. Our ultimate aim is to create environments where the next generation can learn and grow efficiently in the age of AI.",
    category: 'vision',
    relatedQuestions: [
      "What problem are you solving?",
      "What is your long-term goal?",
      "What values do you follow?"
    ]
  },
  {
    keywords: ['problem solving', 'what problem', 'challenge', 'issue'],
    answer: "We're solving the disconnect between academic theory and real-world application, while helping businesses navigate the complex age of AI. We ensure that people don't just use AI—they understand it.",
    category: 'vision',
    relatedQuestions: [
      "What is your vision?",
      "How does EDU help?",
      "What does TECH offer?"
    ]
  },
  {
    keywords: ['long-term goal', 'long term', 'future goal'],
    answer: "Our ultimate aim is to create environments where the next generation can learn and grow efficiently in the age of Artificial Intelligence.",
    category: 'vision',
    relatedQuestions: [
      "What kind of future do you want?",
      "What is your vision?",
      "How does EDU work?"
    ]
  },
  {
    keywords: ['values', 'principles', 'core values', 'beliefs'],
    answer: "We value efficiency, data precision, stability, and the empowerment of human potential through understanding. We believe in building systems that work seamlessly while ensuring people understand the technology they use.",
    category: 'vision',
    relatedQuestions: [
      "What is your vision?",
      "How do you define success?",
      "What makes you different?"
    ]
  },
  {
    keywords: ['future', 'what kind of future', 'future vision'],
    answer: "A future where humans do not just *use* AI, but *understand* it. We want to demystify advanced technology so individuals can harness its full potential responsibly and creatively.",
    category: 'vision',
    relatedQuestions: [
      "What is your vision?",
      "What problem are you solving?",
      "How do you approach innovation?"
    ]
  },
  {
    keywords: ['innovation', 'approach to innovation', 'how innovate'],
    answer: "We approach innovation through a 'Centric' model, ensuring that new technologies (like AI) are integrated seamlessly into stable, usable systems. Technology should work in harmony, not in isolation.",
    category: 'vision',
    relatedQuestions: [
      "What does 'centric' mean?",
      "What technologies do you use?",
      "How do you ensure quality?"
    ]
  },
  {
    keywords: ['centric mean', 'centric philosophy', 'what is centric'],
    answer: "It means acting as the central hub where different technologies (AI, Web, Data) converge to work efficiently. SyZentric is the center that makes software, hardware, and Artificial Intelligence work together in perfect harmony.",
    category: 'vision',
    relatedQuestions: [
      "What does the name mean?",
      "How do you approach innovation?",
      "What makes you different?"
    ]
  },
  {
    keywords: ['success', 'define success', 'how measure success'],
    answer: "Success is when we build stable systems for clients AND empower students to master the technology behind those systems. We succeed when both businesses and individuals thrive.",
    category: 'vision',
    relatedQuestions: [
      "What is your vision?",
      "What are your values?",
      "What is EDU platform?"
    ]
  },

  // Platforms and Ecosystem
  {
    keywords: ['platforms', 'what platforms', 'ecosystem'],
    answer: "We offer three main touchpoints: the **Main Platform** (our central hub and landing page), **TECH Platform** (showcasing technical capabilities and IT services), and **EDU Platform** (for learning, development, and courses).",
    category: 'platforms',
    relatedQuestions: [
      "What is the TECH platform?",
      "What is the EDU platform?",
      "How are they connected?"
    ]
  },
  {
    keywords: ['main platform', 'main page', 'landing page', 'homepage', 'central hub'],
    answer: "The Main Platform is our central hub and landing page that connects all our services. It showcases SyZentric and provides access to both TECH and EDU platforms.",
    category: 'platforms',
    relatedQuestions: [
      "What is the TECH platform?",
      "What is the EDU platform?",
      "How are platforms connected?"
    ]
  },
  {
    keywords: ['tech platform', 'tech', 'technology platform', 'technical solutions', 'it services'],
    answer: "The **TECH Platform** is our technology-focused showcase of technical capabilities, stack, and IT services. We offer AI solutions & integration, digital transformation, web development, data analysis, and custom software solutions for businesses.",
    category: 'platforms',
    relatedQuestions: [
      "What AI solutions do you offer?",
      "What is your tech stack?",
      "Do you build custom software?"
    ]
  },
  {
    keywords: ['edu platform', 'edu', 'education', 'learning', 'courses', 'training'],
    answer: "The **EDU Platform** is our educational arm dedicated to bridging the gap between theory and practice. We offer technical skills training, practical guidelines, and youth empowerment through hands-on courses designed to build industry-ready capabilities.",
    category: 'platforms',
    relatedQuestions: [
      "Who is EDU for?",
      "What courses do you offer?",
      "Are courses beginner-friendly?"
    ]
  },
  {
    keywords: ['platforms connected', 'how connected', 'relationship between platforms'],
    answer: "They are part of a single comprehensive multi-platform ecosystem. The Main Platform serves as the central hub connecting TECH (our business solutions) and EDU (our learning platform).",
    category: 'platforms',
    relatedQuestions: [
      "Can I use only one platform?",
      "Will more platforms be added?",
      "What is your ecosystem?"
    ]
  },
  {
    keywords: ['use one platform', 'only one', 'just tech', 'just edu'],
    answer: "Yes! Clients can engage solely with our TECH services for business solutions, while students may focus on the EDU platform for learning. Choose what fits your needs.",
    category: 'platforms',
    relatedQuestions: [
      "What is TECH platform?",
      "What is EDU platform?",
      "How do I get started?"
    ]
  },
  {
    keywords: ['edu for', 'who uses edu', 'edu audience', 'students'],
    answer: "The EDU platform is for the youth and lifelong learners who want to bridge the gap between theory and practical application. It's designed for the next generation of tech leaders who want to understand the 'why' and 'how' of technology.",
    category: 'platforms',
    relatedQuestions: [
      "What courses does EDU offer?",
      "Are courses beginner-friendly?",
      "Can businesses use EDU for training?"
    ]
  },
  {
    keywords: ['tech for', 'who uses tech', 'tech audience'],
    answer: "The TECH platform is for businesses looking for IT services and digital transformation, as well as for developers and tech enthusiasts interested in our technology stack and capabilities.",
    category: 'platforms',
    relatedQuestions: [
      "What services does TECH offer?",
      "Do you work with small businesses?",
      "What is your tech stack?"
    ]
  },
  {
    keywords: ['more platforms', 'new platforms', 'future platforms', 'expanding'],
    answer: "Yes! We're constantly expanding. Future plans include mobile applications and community platforms as part of our 2025+ roadmap.",
    category: 'platforms',
    relatedQuestions: [
      "What are your future plans?",
      "Are you planning mobile apps?",
      "What new features are coming?"
    ]
  },

  // Services & Capabilities
  {
    keywords: ['services', 'what do you offer', 'capabilities', 'offerings', 'what can you do'],
    answer: "We offer IT services through TECH (AI solutions & integration, digital transformation, web development, data analysis, custom software) and educational resources through EDU (technical skills training, practical guidelines, youth empowerment programs).",
    category: 'services',
    relatedQuestions: [
      "Do you build custom software?",
      "What AI solutions do you offer?",
      "What courses do you have?"
    ]
  },
  {
    keywords: ['custom software', 'build software', 'custom development', 'bespoke'],
    answer: "Yes! Custom software development is a core service of our TECH platform. We build tailored solutions designed specifically for your business needs and requirements.",
    category: 'services',
    relatedQuestions: [
      "What is your tech stack?",
      "Do you provide ongoing support?",
      "How do I get started?"
    ]
  },
  {
    keywords: ['ai solutions', 'ai integration', 'artificial intelligence', 'ai services', 'machine learning'],
    answer: "Yes! We specialize in AI integration, including chatbots, custom AI implementation to automate and enhance business processes, and future RAG (Retrieval Augmented Generation) implementations for advanced context-aware interactions.",
    category: 'services',
    relatedQuestions: [
      "Can you build AI chatbots?",
      "Can AI be customized?",
      "How accurate are your AI solutions?"
    ]
  },
  {
    keywords: ['data analytics', 'data analysis', 'big data', 'insights'],
    answer: "Yes! Data precision is a core part of our 'Centric' approach. We turn raw data into actionable insights for better decision-making, helping you make informed choices based on your data.",
    category: 'services',
    relatedQuestions: [
      "What technologies do you use?",
      "Do you work with system architecture?",
      "What makes you different?"
    ]
  },
  {
    keywords: ['web development', 'website', 'web app', 'frontend', 'backend', 'fullstack'],
    answer: "Absolutely! We build scalable, responsive, and robust web applications using modern technologies like React, TypeScript, Next.js, and TailwindCSS. We handle both frontend and backend development.",
    category: 'services',
    relatedQuestions: [
      "What is your tech stack?",
      "Can you build custom software?",
      "Do you work with scalable systems?"
    ]
  },
  {
    keywords: ['integrate', 'integration', 'existing systems', 'legacy'],
    answer: "Yes! We focus on seamless integration of software and hardware. Our 'Centric' approach ensures that new technologies integrate smoothly with your existing infrastructure.",
    category: 'services',
    relatedQuestions: [
      "Can you modernize legacy systems?",
      "Do you provide end-to-end solutions?",
      "What does 'centric' mean?"
    ]
  },
  {
    keywords: ['end-to-end', 'complete solution', 'full service'],
    answer: "Yes! We provide end-to-end solutions from the main platform hub to specific technical implementations, handling everything from initial consultation to deployment and support.",
    category: 'services',
    relatedQuestions: [
      "Do you provide ongoing support?",
      "What is your onboarding process?",
      "How do I get started?"
    ]
  },
  {
    keywords: ['modernize', 'legacy systems', 'upgrade', 'digital transformation'],
    answer: "Yes! We provide digital transformation services to modernize and stabilize existing infrastructures, updating legacy systems to work with modern technologies.",
    category: 'services',
    relatedQuestions: [
      "Do you integrate with existing systems?",
      "What is Systemic Architecture?",
      "How do you ensure reliability?"
    ]
  },
  {
    keywords: ['consulting', 'strategy', 'advisory', 'consultation'],
    answer: "Yes! We offer consulting and strategy services, particularly regarding how to integrate AI into your business or educational roadmap. We help you navigate the complex age of AI.",
    category: 'services',
    relatedQuestions: [
      "Do you offer free consultation?",
      "How do I get started?",
      "What is your onboarding process?"
    ]
  },
  {
    keywords: ['ongoing support', 'maintenance', 'after delivery', 'post-launch'],
    answer: "Yes! We aim to build stable systems and offer support channels for our clients. We provide long-term stability for all systems we build.",
    category: 'services',
    relatedQuestions: [
      "How reliable are your systems?",
      "Do you provide maintenance?",
      "What is your support process?"
    ]
  },

  // Technology and Expertise
  {
    keywords: ['technologies', 'tech stack', 'stack', 'what technologies', 'tools', 'frameworks'],
    answer: "We use a modern stack including **React 18**, **TypeScript**, **Vite**, **TailwindCSS**, **Three.js** for 3D graphics, and **Python** for AI integrations. We also work with Next.js, Node.js, and other cutting-edge technologies.",
    category: 'technology',
    relatedQuestions: [
      "Do you use React and TypeScript?",
      "What AI technologies do you use?",
      "Do you build scalable systems?"
    ]
  },
  {
    keywords: ['react', 'typescript', 'vite', 'tailwind', 'modern stack'],
    answer: "Yes! We extensively use **React 18** with **TypeScript** for type-safe, robust applications, **Vite** for lightning-fast development, and **TailwindCSS** for beautiful, responsive designs. This website is built with these technologies!",
    category: 'technology',
    relatedQuestions: [
      "What is your tech stack?",
      "Do you build web applications?",
      "How do you ensure quality?"
    ]
  },
  {
    keywords: ['ai work', 'use ai', 'ai tech', 'ai implementation'],
    answer: "We use AI for chatbots, customer support automation, knowledge retrieval systems using OpenAI API integrations, and vector databases for knowledge management. We're also implementing RAG technology for advanced interactions.",
    category: 'technology',
    relatedQuestions: [
      "Can you build AI chatbots?",
      "What AI solutions do you offer?",
      "Can AI be customized?"
    ]
  },
  {
    keywords: ['scalable', 'scalability', 'scale', 'grow'],
    answer: "Yes! Our tech stack (React, TypeScript, Next.js, Node.js) is designed for scalability. We build systems that can grow as your business grows, handling increased traffic and complexity.",
    category: 'technology',
    relatedQuestions: [
      "What technologies do you use?",
      "Can your systems grow with my business?",
      "How do you ensure reliability?"
    ]
  },
  {
    keywords: ['automation', 'automate', 'automated'],
    answer: "Yes! Automation is a key focus through our AI solutions and efficient system architecture. We help businesses automate repetitive tasks and streamline processes.",
    category: 'technology',
    relatedQuestions: [
      "What AI solutions do you offer?",
      "How do you use AI?",
      "What services do you provide?"
    ]
  },
  {
    keywords: ['system architecture', 'architecture', 'systemic architecture', 'design'],
    answer: "Yes! **'Systemic Architecture'** is the foundation of our brand identity. We design stable, efficient system backbones that ensure everything works together seamlessly. It's literally in our name!",
    category: 'technology',
    relatedQuestions: [
      "What does SyZentric mean?",
      "How do you ensure reliability?",
      "What makes you different?"
    ]
  },
  {
    keywords: ['reliability', 'reliable', 'stable', 'stability'],
    answer: "We use type-safe languages like **TypeScript** and modern build tools to ensure code stability and performance. Our name 'SyZentric' represents building the most stable systems in the industry.",
    category: 'technology',
    relatedQuestions: [
      "What is Systemic Architecture?",
      "What technologies do you use?",
      "Do you provide ongoing support?"
    ]
  },
  {
    keywords: ['security', 'data security', 'secure', 'protection'],
    answer: "We implement best practices including secure API handling, type-safe code with TypeScript, and planned user authentication systems. Security is built into our development process.",
    category: 'technology',
    relatedQuestions: [
      "How do you protect client data?",
      "Is SyZentric secure?",
      "What technologies do you use?"
    ]
  },
  {
    keywords: ['systems grow', 'business grows', 'scaling'],
    answer: "Yes! Our tech stack (React, TypeScript, Node.js, Next.js) is designed for scalability. We build systems that adapt and grow with your business needs.",
    category: 'technology',
    relatedQuestions: [
      "Do you build scalable systems?",
      "What is your tech stack?",
      "Do you provide ongoing support?"
    ]
  },

  // AI and Intelligence
  {
    keywords: ['ai models', 'build ai', 'custom ai', 'ai for business'],
    answer: "Yes! We can integrate advanced LLMs (like GPT-4) and build custom knowledge bases for your specific business needs using vector databases and RAG technology.",
    category: 'ai',
    relatedQuestions: [
      "What AI solutions do you offer?",
      "Can AI be customized?",
      "How accurate are your AI solutions?"
    ]
  },
  {
    keywords: ['chatbot', 'ai chatbot', 'chatbots', 'conversational ai'],
    answer: "Yes! AI Chatbot integration is a key feature we offer. Our chatbots can be trained on company-specific data using vector databases for accurate, context-aware responses.",
    category: 'ai',
    relatedQuestions: [
      "Can AI be customized?",
      "How accurate are your AI solutions?",
      "Do I need technical knowledge?"
    ]
  },
  {
    keywords: ['customize ai', 'custom ai', 'ai customization', 'train ai'],
    answer: "Yes! We can train AI on your specific company data using vector databases and RAG (Retrieval Augmented Generation) technology, ensuring the AI understands your business context.",
    category: 'ai',
    relatedQuestions: [
      "How accurate are your AI solutions?",
      "Can you build AI chatbots?",
      "Can AI integrate with existing software?"
    ]
  },
  {
    keywords: ['ai accurate', 'ai reliability', 'ai accuracy', 'how good'],
    answer: "We utilize state-of-the-art models (like GPT-4) combined with custom knowledge bases to ensure high accuracy. Our AI solutions are trained on your specific data for maximum relevance.",
    category: 'ai',
    relatedQuestions: [
      "Can AI be customized?",
      "What AI technologies do you use?",
      "How does AI work?"
    ]
  },
  {
    keywords: ['technical knowledge', 'need to know', 'user friendly', 'easy to use'],
    answer: "No technical knowledge needed! We design our interfaces to be user-friendly and accessible. Our goal is to make advanced AI technology understandable and usable for everyone.",
    category: 'ai',
    relatedQuestions: [
      "What is your vision?",
      "How does AI work?",
      "Can you build AI chatbots?"
    ]
  },
  {
    keywords: ['ethical ai', 'ai ethics', 'responsible ai'],
    answer: "We focus on 'understanding' AI, promoting transparency and education alongside implementation. We believe people should understand the AI they use, not just consume it.",
    category: 'ai',
    relatedQuestions: [
      "What is your vision?",
      "What kind of future do you want?",
      "What is EDU platform?"
    ]
  },
  {
    keywords: ['ai integrate', 'integrate ai', 'ai with software', 'ai connection'],
    answer: "Yes! We can build backend APIs that connect AI services to your existing frontend or database, ensuring seamless integration with your current software infrastructure.",
    category: 'ai',
    relatedQuestions: [
      "Do you integrate with existing systems?",
      "What is your tech stack?",
      "Can you build custom software?"
    ]
  },

  // Business and Onboarding
  {
    keywords: ['get started', 'start', 'begin', 'how to start', 'onboarding', 'first step'],
    answer: "Getting started is easy! Contact us via email at **syzentric@gmail.com** or reach out on LinkedIn or Twitter. We'll start with a consultation to understand your needs, followed by a proposal and development phase.",
    category: 'onboarding',
    relatedQuestions: [
      "What is your onboarding process?",
      "Do you offer demos?",
      "How can I contact you?"
    ]
  },
  {
    keywords: ['onboarding process', 'process', 'how it works', 'workflow'],
    answer: "We start with a consultation to understand your needs, followed by a requirements gathering phase, then a proposal and development phase. We maintain clear communication throughout the entire process.",
    category: 'onboarding',
    relatedQuestions: [
      "How do you gather requirements?",
      "How do you communicate during a project?",
      "Do you offer consultations?"
    ]
  },
  {
    keywords: ['demo', 'demonstration', 'show me', 'preview', 'test'],
    answer: "Yes! Our website serves as a live demo of our capabilities, showcasing our design and technical skills. You can also contact us for personalized consultations to see how we can help your specific needs.",
    category: 'onboarding',
    relatedQuestions: [
      "Do you offer free consultation?",
      "How do I get started?",
      "What services do you offer?"
    ]
  },
  {
    keywords: ['custom solution', 'custom request', 'tailored', 'bespoke solution'],
    answer: "Absolutely! Custom solutions are the core of our TECH platform services. We tailor every solution to your specific business needs and requirements.",
    category: 'onboarding',
    relatedQuestions: [
      "Do you build custom software?",
      "How do you gather requirements?",
      "What is your onboarding process?"
    ]
  },
  {
    keywords: ['gather requirements', 'requirements', 'understand needs', 'analysis'],
    answer: "We use a 'Centric' approach, analyzing your data, goals, and current systems to propose the best solution. We take time to understand your business before proposing solutions.",
    category: 'onboarding',
    relatedQuestions: [
      "What is your onboarding process?",
      "What does 'centric' mean?",
      "How do you communicate?"
    ]
  },
  {
    keywords: ['communicate', 'communication', 'stay in touch', 'updates'],
    answer: "We maintain clear communication channels throughout projects, typically via email and project management tools. We keep you informed at every stage of development.",
    category: 'onboarding',
    relatedQuestions: [
      "What is your onboarding process?",
      "Do you provide ongoing support?",
      "How can I contact you?"
    ]
  },

  // Pricing
  {
    keywords: ['price', 'pricing', 'cost', 'how much', 'payment', 'plans', 'fees'],
    answer: "Pricing depends on the scope and complexity of your project. We offer custom quotes tailored to specific needs. Please contact us at **syzentric@gmail.com** for a personalized quote.",
    category: 'pricing',
    relatedQuestions: [
      "Do you offer fixed pricing?",
      "Is there a free consultation?",
      "How do I get started?"
    ]
  },
  {
    keywords: ['fixed pricing', 'custom quote', 'pricing model'],
    answer: "We offer custom quotes tailored to the specific needs of your IT service or educational requirement. Every project is unique, so we price accordingly.",
    category: 'pricing',
    relatedQuestions: [
      "How much do services cost?",
      "Is there a free consultation?",
      "What services do you offer?"
    ]
  },
  {
    keywords: ['free consultation', 'free demo', 'free trial'],
    answer: "Please reach out to us via email at **syzentric@gmail.com** to discuss potential collaborations and consultations. Future features may include free trials for EDU courses.",
    category: 'pricing',
    relatedQuestions: [
      "How do I get started?",
      "Do you offer demos?",
      "How can I contact you?"
    ]
  },
  {
    keywords: ['subscription', 'plans', 'recurring', 'monthly'],
    answer: "Future features may include newsletter subscriptions and premium content for the EDU platform. Currently, we focus on custom project-based pricing for TECH services.",
    category: 'pricing',
    relatedQuestions: [
      "What are your future plans?",
      "What is EDU platform?",
      "How much does it cost?"
    ]
  },

  // Contact & Support
  {
    keywords: ['contact', 'reach', 'get in touch', 'email', 'phone', 'call', 'message'],
    answer: "You can contact us at **syzentric@gmail.com**, find us on **Twitter/X** at [@syzentric](https://x.com/syzentric), or connect on **LinkedIn** at our [company page](https://www.linkedin.com/company/syzentric/).",
    category: 'contact',
    relatedQuestions: [
      "Do you offer live support?",
      "What are your working hours?",
      "How do I report an issue?"
    ]
  },
  {
    keywords: ['support', 'help', 'assistance', 'customer service', 'need help'],
    answer: "We're integrating AI chatbots to provide instant responses to common queries. You can also email us at **syzentric@gmail.com** or reach out on social media for support.",
    category: 'contact',
    relatedQuestions: [
      "Do you offer live support?",
      "How can I contact you?",
      "Where can I report an issue?"
    ]
  },
  {
    keywords: ['live support', 'instant support', 'chat support', 'real-time'],
    answer: "We're integrating AI chatbots to provide instant responses to common queries. For complex issues, you can reach us via email at **syzentric@gmail.com**.",
    category: 'contact',
    relatedQuestions: [
      "Can you build AI chatbots?",
      "How can I contact you?",
      "What is your support process?"
    ]
  },
  {
    keywords: ['report issue', 'bug', 'problem', 'error', 'not working'],
    answer: "You can report issues via **email** at syzentric@gmail.com, on **LinkedIn**, or on **Twitter/X** [@syzentric](https://x.com/syzentric). We'll respond as quickly as possible.",
    category: 'contact',
    relatedQuestions: [
      "How can I contact you?",
      "Do you provide support?",
      "What are your working hours?"
    ]
  },
  {
    keywords: ['hours', 'availability', 'when', 'open', 'working hours', 'time zones'],
    answer: "As a digital-first, global company, we operate across different time zones. Our platforms are available 24/7, and we respond to inquiries typically within 24-48 hours.",
    category: 'contact',
    relatedQuestions: [
      "Is SyZentric global?",
      "How can I contact you?",
      "Do you offer live support?"
    ]
  },

  // Trust and Security
  {
    keywords: ['secure', 'is syzentric secure', 'safety', 'data safety'],
    answer: "Yes! We prioritize security in our architecture. We use secure state management, follow industry standards for API integrations, and user authentication systems are part of our immediate roadmap.",
    category: 'trust',
    relatedQuestions: [
      "How do you protect client data?",
      "How reliable are your systems?",
      "What technologies do you use?"
    ]
  },
  {
    keywords: ['protect data', 'data protection', 'privacy', 'client data'],
    answer: "We use secure state management, type-safe code with TypeScript, and follow industry standards for API integrations to protect your data.",
    category: 'trust',
    relatedQuestions: [
      "Is SyZentric secure?",
      "What technologies do you use?",
      "How do you ensure reliability?"
    ]
  },
  {
    keywords: ['reliable', 'reliability', 'dependable', 'trustworthy'],
    answer: "Our name 'SyZentric' represents the construction of the most **stable systems** in the industry. Reliability is built into our foundation through Systemic Architecture.",
    category: 'trust',
    relatedQuestions: [
      "What does SyZentric mean?",
      "What is Systemic Architecture?",
      "Do you provide maintenance?"
    ]
  },
  {
    keywords: ['maintenance', 'maintain', 'upkeep', 'updates'],
    answer: "Yes! We aim to provide long-term stability for all systems we build. Ongoing maintenance and support are available to keep your systems running smoothly.",
    category: 'trust',
    relatedQuestions: [
      "Do you provide ongoing support?",
      "How reliable are your systems?",
      "What is included in support?"
    ]
  },

  // Education (EDU Platform)
  {
    keywords: ['what is edu', 'syzentric edu', 'edu platform details'],
    answer: "**SyZentric EDU** is our dedicated platform for courses, training, and interactive content. It bridges the gap between theory and practice, offering technical skills training, practical guidelines, and youth empowerment.",
    category: 'education',
    relatedQuestions: [
      "Who is EDU for?",
      "What courses do you offer?",
      "Are courses beginner-friendly?"
    ]
  },
  {
    keywords: ['courses offer', 'what courses', 'training programs', 'learning programs'],
    answer: "The EDU platform features courses in technology, practical guidelines, and hands-on programs designed to build industry-ready capabilities. We cover the gap between academic theory and real-world application.",
    category: 'education',
    relatedQuestions: [
      "Are courses beginner-friendly?",
      "Who is EDU for?",
      "Can businesses use EDU for training?"
    ]
  },
  {
    keywords: ['beginner friendly', 'beginner', 'easy', 'start learning', 'no experience'],
    answer: "Yes! We aim to cover the gap between theory (beginner level) and practical use (advanced level). Our courses are designed to help anyone learn, regardless of their starting point.",
    category: 'education',
    relatedQuestions: [
      "What courses do you offer?",
      "Who is EDU for?",
      "What is EDU platform?"
    ]
  },
  {
    keywords: ['business training', 'corporate training', 'team training', 'employee training'],
    answer: "Yes! Our educational resources can be adapted for corporate training. Businesses can use SyZentric EDU to train their teams in modern technologies and AI understanding.",
    category: 'education',
    relatedQuestions: [
      "What is EDU platform?",
      "What courses do you offer?",
      "Can I get a custom solution?"
    ]
  },
  {
    keywords: ['more learning', 'new courses', 'additional content', 'future courses'],
    answer: "Yes! We are continuously adding learning resources and interactive content to the EDU platform as part of our ongoing development and 2025+ roadmap.",
    category: 'education',
    relatedQuestions: [
      "What are your future plans?",
      "What is your roadmap?",
      "What new features are coming?"
    ]
  },

  // Partnerships
  {
    keywords: ['partner', 'partnerships', 'collaborate', 'collaboration', 'work together'],
    answer: "Yes! We're open to collaborations and partnerships. Partner integrations are part of our long-term roadmap. Developers can also check our 'Contributing' guidelines.",
    category: 'partnerships',
    relatedQuestions: [
      "Are you open to research partnerships?",
      "How can I contact you?",
      "What are your future plans?"
    ]
  },
  {
    keywords: ['research partnership', 'research', 'academic', 'university'],
    answer: "Given our focus on AI research and education, we welcome research collaborations and partnerships with academic institutions.",
    category: 'partnerships',
    relatedQuestions: [
      "Can I collaborate with SyZentric?",
      "What is your vision?",
      "What is EDU platform?"
    ]
  },

  // Future and Growth
  {
    keywords: ['expanding services', 'expansion', 'new services', 'growing'],
    answer: "Yes! We plan to add e-commerce capabilities, community platforms, and more features as part of our 2025+ roadmap. We're constantly evolving.",
    category: 'future',
    relatedQuestions: [
      "Will you add new AI features?",
      "Are you planning mobile apps?",
      "What new features are coming?"
    ]
  },
  {
    keywords: ['new ai features', 'ai roadmap', 'future ai', 'ai updates'],
    answer: "Yes! We plan to implement **RAG (Retrieval Augmented Generation)** for advanced context-aware AI interactions, along with more sophisticated chatbot capabilities.",
    category: 'future',
    relatedQuestions: [
      "What AI solutions do you offer?",
      "What are your future plans?",
      "How do you use AI?"
    ]
  },
  {
    keywords: ['mobile apps', 'mobile application', 'ios app', 'android app'],
    answer: "Yes! Mobile applications built with **React Native** are in our 6-12 month plan as part of our 2025+ roadmap.",
    category: 'future',
    relatedQuestions: [
      "What are your future plans?",
      "What technologies do you use?",
      "Will more platforms be added?"
    ]
  },
  {
    keywords: ['future ready', 'stay current', 'keep updated', 'modern'],
    answer: "We constantly update our tech stack and research new AI integrations to ensure we remain at the **'Zenith' of intelligence**. Staying future-ready is part of our identity.",
    category: 'future',
    relatedQuestions: [
      "What does SyZentric mean?",
      "What new features are coming?",
      "What is your vision?"
    ]
  },

  // Casual and Simple Questions
  {
    keywords: ['why trust', 'trust syzentric', 'why believe', 'credibility'],
    answer: "We are committed to stability ('Systemic') and excellence ('Zenith'). We don't just deliver code; we deliver understanding. Our focus on education alongside technology sets us apart.",
    category: 'casual',
    relatedQuestions: [
      "What makes you different?",
      "What is your vision?",
      "How reliable are your systems?"
    ]
  },
  {
    keywords: ['simple words', 'explain simply', 'in short', 'simple explanation'],
    answer: "In simple words: We're a tech company that helps businesses use AI **and** helps students learn how AI works. Technology + Education = SyZentric.",
    category: 'casual',
    relatedQuestions: [
      "What is SyZentric?",
      "What do you do?",
      "What platforms do you have?"
    ]
  },
  {
    keywords: ['problem solve', 'solve for clients', 'help clients', 'what help'],
    answer: "We solve technical complexity. We make advanced systems work smoothly for your business through our TECH services, and we give you the knowledge to understand and use these systems through our EDU platform.",
    category: 'casual',
    relatedQuestions: [
      "What services do you offer?",
      "What is TECH platform?",
      "What is EDU platform?"
    ]
  },
  {
    keywords: ['help me grow', 'grow business', 'scale business'],
    answer: "Through **SyZentric TECH**, we give you the tools to scale your business with AI and modern technology. Through **SyZentric EDU**, we give you the knowledge to lead and understand these technologies.",
    category: 'casual',
    relatedQuestions: [
      "What is TECH platform?",
      "What is EDU platform?",
      "Can your systems scale?"
    ]
  },
  {
    keywords: ['future proof', 'adapt', 'stay relevant'],
    answer: "Our focus on *understanding* AI ensures that as technology changes, our systems and our students can adapt effortlessly. We build knowledge, not just software.",
    category: 'casual',
    relatedQuestions: [
      "What is your vision?",
      "How do you stay future-ready?",
      "What makes you different?"
    ]
  },
  
  // Greetings
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    answer: "Hello! 👋 Welcome to SyZentric - **The Zenith of Intelligence**! I'm here to help you learn about our platforms, services, and how we can help you. What would you like to know?",
    category: 'greeting',
    relatedQuestions: [
      "What is SyZentric?",
      "What services do you offer?",
      "Tell me about your platforms"
    ]
  },
  
  // Thank you
  {
    keywords: ['thank', 'thanks', 'appreciate', 'grateful'],
    answer: "You're very welcome! Feel free to ask me anything else about SyZentric. I'm here to help! 😊",
    category: 'courtesy',
    relatedQuestions: [
      "What else can you help me with?",
      "Tell me about your services",
      "How can I contact you?"
    ]
  },
  
  // Goodbye
  {
    keywords: ['bye', 'goodbye', 'see you', 'farewell', 'exit', 'later'],
    answer: "Goodbye! Thanks for chatting with me about SyZentric. Feel free to return anytime you have questions. Have a great day! 👋",
    category: 'courtesy',
    relatedQuestions: [
      "How can I contact you?",
      "What is SyZentric?",
      "What services do you offer?"
    ]
  }
];

export const fallbackResponses = [
  "That's an interesting question! While I don't have specific information about that, I'd be happy to help you with questions about SyZentric's platforms (TECH and EDU), our services, technologies, or vision. What would you like to know?",
  "I'm not quite sure about that specific topic, but I can help you learn about SyZentric's technology solutions, educational programs, AI capabilities, or how we can help your business. What interests you most?",
  "I don't have information on that particular topic yet, but I'm very knowledgeable about SyZentric's services, our 'Centric' approach, pricing, and how to get started. Feel free to ask about any of these!",
  "Great question! While that's outside my current knowledge base, I can tell you all about SyZentric's vision, TECH platform, EDU programs, our tech stack, or how to contact us. What would you like to explore?"
];

export const greetingMessage = "Hello! 👋 I'm the SyZentric AI Assistant. I can help you learn about our ecosystem - **TECH** (technology solutions & AI integration) and **EDU** (bridging theory and practice). Ask me anything about SyZentric!";

// Fallback suggested questions when no match is found
export const defaultSuggestedQuestions = [
  "What is SyZentric?",
  "What does the name SyZentric mean?",
  "What is your vision?",
  "What services do you offer?",
  "Tell me about the TECH platform",
  "What is the EDU platform?",
  "What AI solutions do you offer?",
  "What is your tech stack?",
  "How can I contact you?"
];
