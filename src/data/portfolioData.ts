import { SkillCategory, ExperienceItem, EducationItem, CertificationItem, ActivityItem, ContactInfo, ProjectItem, StatMetric } from '../types';

export const HERO_DATA = {
  name: "Prashanth Singh B M",
  role: "Aspiring Software Developer · AI & Python Enthusiast · BCA Student",
  intro: "I am a passionate Bachelor of Computer Applications (BCA) student with a strong interest in Artificial Intelligence, Python development, and modern web technologies. I enjoy building practical software solutions, exploring AI-powered applications, and continuously expanding my technical expertise through real-world projects and hands-on learning.",
  statusText: "Open to Software Developer & AI/ML Opportunities",
  college: "Cambridge College, Bengaluru"
};

export const STAT_METRICS: StatMetric[] = [
  {
    label: "Internship Hours",
    value: "200+",
    numericTarget: 200,
    suffix: "+",
    description: "Hands-on SDE & AI/ML work at IMTDA Infotech"
  },
  {
    label: "Class X Board",
    value: "77.96%",
    numericTarget: 77.96,
    suffix: "%",
    description: "Ujwala Vidya Mandira, Malur"
  },
  {
    label: "Class XII Board",
    value: "88%",
    numericTarget: 88,
    suffix: "%",
    description: "BGS PU College, Malur"
  }
];

export const ABOUT_DATA = {
  paragraphs: [
    "I am currently pursuing my Bachelor of Computer Applications at Cambridge College, Bengaluru. My journey in technology is driven by curiosity, continuous learning, and a passion for solving real-world problems through software.",
    "My primary interests lie in Python development, Artificial Intelligence, Machine Learning, and Full Stack Development. I enjoy transforming ideas into functional applications while focusing on writing clean, efficient, and user-friendly solutions.",
    "Through internships, workshops, and academic projects, I have developed practical knowledge of backend development, API integration, version control, and AI-based applications. I believe that technology should simplify lives, and I strive to create solutions that are both innovative and impactful."
  ],
  careerObjective: "To begin my professional career as a Software Developer, AI Engineer, or Python Developer where I can apply my technical knowledge, analytical thinking, and problem-solving abilities to build innovative software solutions while continuously learning emerging technologies and contributing to organizational success."
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'ai-chatbot',
    title: 'AI Conversational Assistant',
    category: 'AI/ML',
    shortDesc: 'Intelligent AI chatbot integration engineered during IMTDA Infotech internship using Python and GenAI APIs.',
    fullDesc: 'Developed during the SDE & AI/ML internship at IMTDA Infotech Private Limited. This project leverages Python backend services, GenAI APIs, and custom prompt templates to handle intelligent natural language conversations, user queries, and workflow routing.',
    tags: ['Python', 'GenAI API', 'NLP Workflows', 'Backend Logic', 'Chatbot'],
    imageBgGradient: 'from-[#2563EB]/20 via-[#3B82F6]/10 to-[#8B5CF6]/20',
    iconName: 'Bot',
    featured: true,
    highlights: [
      'Integrated GenAI API endpoints for dynamic natural language understanding.',
      'Constructed error-resilient Python backend logic with fast response formatting.',
      'Designed clean user interaction workflows for seamless web embedding.'
    ],
    githubUrl: '',
    liveUrl: ''
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    category: 'Programming Languages',
    iconName: 'BookOpen',
    description: 'Core logic building, object-oriented concepts, and algorithmic problem-solving',
    skills: [
      { name: 'Python', iconName: 'Zap' },
      { name: 'Java', iconName: 'Code2' },
      { name: 'C Programming', iconName: 'Code' }
    ]
  },
  {
    id: 'web',
    category: 'Web Technologies',
    iconName: 'Globe',
    description: 'Frontend structure, responsive layout design, and web framework basics',
    skills: [
      { name: 'HTML', iconName: 'Code' },
      { name: 'CSS', iconName: 'Palette' },
      { name: 'Django (Basics)', iconName: 'Network' },
      { name: 'Flask (Basics)', iconName: 'Network' }
    ]
  },
  {
    id: 'backend',
    category: 'Backend Development',
    iconName: 'Database',
    description: 'Data routing, service logic creation, and seamless client-server interaction',
    skills: [
      { name: 'API Integration', iconName: 'Cable' },
      { name: 'Backend Logic', iconName: 'Cpu' },
      { name: 'Frontend–Backend Integration', iconName: 'Zap' }
    ]
  },
  {
    id: 'ai',
    category: 'Artificial Intelligence',
    iconName: 'Sparkles',
    description: 'Machine learning fundamentals, predictive modeling, and intelligent agent workflows',
    skills: [
      { name: 'ML Fundamentals', iconName: 'Brain' },
      { name: 'AI Applications', iconName: 'Sparkles' },
      { name: 'Data Science Basics', iconName: 'TrendingUp' }
    ]
  },
  {
    id: 'tools',
    category: 'Tools & Platforms',
    iconName: 'Package',
    description: 'Version management, command terminal workflows, and UI asset drafting',
    skills: [
      { name: 'GitHub', iconName: 'Github' },
      { name: 'Git Bash', iconName: 'Terminal' },
      { name: 'Figma', iconName: 'Palette' }
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "SDE & AI/ML Intern",
    company: "IMTDA Infotech Private Limited",
    location: "Bengaluru, Karnataka",
    period: "July 2026 – Present",
    isCurrent: true,
    description: "Working as an AI/ML Intern with hands-on exposure to Python development, AI-powered applications, and backend implementation. Contributing to chatbot development by integrating AI APIs, designing user interaction workflows, and improving application functionality through practical software development practices.",
    responsibilities: [
      "Contributing to intelligent chatbot development by integrating GenAI and NLP APIs.",
      "Designing responsive user interaction workflows for web and backend integration.",
      "Writing clean, modular Python backend logic to handle data processing and external API calls.",
      "Collaborating with senior developers on version control, code optimization, and feature enhancements."
    ],
    skills: ["Python", "AI API Integration", "Backend Logic", "Git", "Chatbot Workflows"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Cambridge College, Bengaluru",
    location: "Bengaluru, Karnataka",
    period: "2024 – 2027",
    status: "Currently Pursuing",
    details: "Focusing on Software Engineering, Python Programming, Database Management, Data Structures, and Artificial Intelligence."
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "BGS PU College, Malur",
    location: "Karnataka State Board",
    period: "2023",
    status: "Completed",
    score: "88%"
  },
  {
    degree: "Secondary School (Class X)",
    institution: "Ujwala Vidya Mandira, Malur",
    location: "Karnataka State Board",
    period: "2021",
    status: "Completed",
    score: "77.96%"
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: "AI in Data Science",
    issuer: "NASSCOM Foundation, Bengaluru",
    location: "Bengaluru, Karnataka",
    badge: "Verified Certification"
  }
];

export const ACTIVITIES_DATA: ActivityItem[] = [
  {
    title: "AI & Machine Learning Seminar",
    category: "Workshop",
    description: "In-depth technical seminar covering supervised learning models, neural networks, and prompt engineering."
  },
  {
    title: "Internet of Things (IoT) Workshop",
    category: "Workshop",
    description: "Hands-on experience with sensor microcontrollers, data streaming, and hardware-software interaction."
  },
  {
    title: "Full Stack Development Workshop",
    category: "Workshop",
    description: "Intensive training on building responsive web interfaces and connecting frontend clients to REST backend endpoints."
  },
  {
    title: "Co-Lead — Bugsy Club",
    category: "Leadership",
    description: "Co-leading student coding club events, organizing debugging challenges, and peer-to-peer programming workshops."
  },
  {
    title: "College Club Activities",
    category: "Club",
    description: "Active contributor to technical quizzes, hackathons, and intra-college tech events at Cambridge College."
  }
];

export const STRENGTHS_LIST: string[] = [
  "Problem Solving",
  "Strong Communication",
  "Quick Learning Ability",
  "Analytical Thinking",
  "Team Collaboration",
  "Adaptability",
  "Attention to Detail",
  "Time Management",
  "Responsibility",
  "Continuous Learning"
];

export const WHY_HIRE_ME = {
  statement: "I am an enthusiastic and dedicated BCA student with practical experience in AI, Python, and web development. I enjoy learning emerging technologies and applying them to real-world projects. My internship experience, technical curiosity, and commitment to continuous improvement enable me to contribute effectively to development teams while growing as a software professional.",
  pillars: [
    {
      title: "Practical Experience",
      description: "Hands-on internship work building AI-powered chatbots, integrating REST APIs, and writing backend logic."
    },
    {
      title: "Continuous Learning",
      description: "Proven initiative through NASSCOM certification, technical workshops in IoT & Full Stack, and Bugsy Club leadership."
    },
    {
      title: "Problem Solving",
      description: "Solid foundation in Python, C, Java, and analytical algorithms with structured attention to detail."
    }
  ]
};

export const CONTACT_DATA: ContactInfo = {
  name: "Prashanth Singh B M",
  email: "prashanthsingh097@gmail.com",
  phone: "+91 9945163448",
  location: "Bengaluru, Karnataka, India",
  motto: "Learning never stops. Every project is an opportunity to grow, innovate, and create meaningful solutions through technology.",
  githubUrl: "https://github.com/Pras097",
  linkedinUrl: "https://www.linkedin.com/in/prashanth-singh-126072384/",
  whatsappUrl: "https://wa.me/919945163448"
};

