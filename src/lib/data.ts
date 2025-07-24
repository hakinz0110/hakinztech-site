import type { LucideIcon } from 'lucide-react';
import { Code, Server, Smartphone, PenTool, GitMerge, Settings, BotMessageSquare, UserRoundCog, Star, GanttChartSquare, Beaker, Briefcase } from 'lucide-react';

export type SkillSubCategory = {
  title: string;
  skills: string[];
};

export type SkillTrack = {
  track: string;
  description: string;
  Icon: LucideIcon;
  technicalSkills: SkillSubCategory[];
  softSkills: string[];
};

export const skillTracks: SkillTrack[] = [
  {
    track: 'TECH TRACK',
    description: 'Web, Mobile, UI/UX',
    Icon: Code,
    technicalSkills: [
      {
        title: 'Frontend',
        skills: ['HTML, CSS, JavaScript', 'React.js, Vue.js, Next.js', 'Tailwind CSS, Bootstrap'],
      },
      {
        title: 'Backend',
        skills: ['Node.js, Express.js', 'Django (Python), Laravel (PHP)', 'Firebase Realtime DB & Firestore', 'REST API, MVC Architecture'],
      },
      {
        title: 'Mobile Development',
        skills: ['Android Studio (Java, Kotlin)', 'Flutter (Dart)'],
      },
      {
        title: 'UI/UX Design',
        skills: ['Figma', 'Adobe XD', 'Photoshop', 'Prototyping, Wireframing, Design Systems'],
      },
      {
        title: 'DevOps & Tools',
        skills: ['Git & GitHub', 'Postman', 'Docker', 'VS Code', 'Linux CLI'],
      },
    ],
    softSkills: [
      'Problem Solving & Logical Thinking',
      'Adaptability to New Tools',
      'Design Sensitivity & Detail-Oriented',
      'Collaboration (Agile/Scrum Teams)',
      'Technical Documentation',
      'Continuous Learning',
      'Time Management',
    ],
  },
  {
    track: 'ENGINEERING TRACK',
    description: 'Metallurgical & Materials',
    Icon: Beaker,
    technicalSkills: [
        {
            title: 'Core Competencies',
            skills: [
                'Metallurgical Process Design',
                'Material Failure Analysis & Fractography',
                'Mechanical Testing (Tensile, Hardness, etc.)',
                'Technical Research Writing',
                'Report Automation Tools (e.g., Report Generators)',
                'Microsoft Word & Excel (Advanced)',
                'Research Tools: Google Scholar, ScienceDirect',
            ]
        }
    ],
    softSkills: [
      'Scientific Writing & Reporting',
      'Analytical Thinking',
      'Precision & Attention to Detail',
      'Data Interpretation & Visualization',
      'Research & Experimentation',
      'Technical Communication',
      'Team Collaboration in Lab/Field',
    ],
  },
  {
    track: 'VIRTUAL ASSISTANCE TRACK',
    description: 'Remote Freelancing',
    Icon: Briefcase,
    technicalSkills: [
        {
            title: 'Core Competencies',
            skills: [
                'Admin Support',
                'Data Entry & Management',
                'Internet Research & Reporting',
                'CRM Tools (e.g., HubSpot, Zoho, Notion)',
                'Google Workspace (Docs, Sheets, Slides)',
                'Microsoft Office Suite',
                'File Management (Google Drive, Dropbox)',
                'Customer Service Tools (Chat, Email, Ticketing systems)',
            ]
        }
    ],
    softSkills: [
      'Communication & Responsiveness',
      'Confidentiality & Trustworthiness',
      'Multitasking & Task Prioritization',
      'Attention to Detail',
      'Time Management',
      'Reliability & Proactive Execution',
      'Client Relationship Management',
    ],
  },
];


export type Skill = {
  area: string;
  Icon: LucideIcon;
  tools: string[];
};

export const skills: Skill[] = [
  {
    area: 'Core Technologies',
    Icon: Code,
    tools: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Firebase'],
  },
  {
    area: 'Mobile Development',
    Icon: Smartphone,
    tools: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    area: 'Design & Tools',
    Icon: PenTool,
    tools: ['UI/UX Design', 'Git/GitHub'],
  },
  {
    area: 'Professional Skills',
    Icon: Star,
    tools: ['Communication', 'Remote Collaboration', 'Attention to Detail', 'Time Management', 'Project Management'],
  },
];

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  imageUrls: string[];
  tags: string[];
  liveSiteUrl?: string;
  sourceCodeUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'e-commerce-app',
    slug: 'e-commerce-app',
    title: 'E-Commerce Mobile App',
    category: 'Mobile',
    description: 'A complete shopping experience with Firebase integration.',
    longDescription: 'This project is a feature-rich e-commerce mobile application built using Flutter for cross-platform compatibility. It provides a seamless shopping experience for users, from browsing products to completing purchases. The backend is powered by Firebase, utilizing services like Firestore for the product database, Authentication for user management, and Cloud Storage for product images. Key features include a dynamic product catalog, search and filtering functionality, a shopping cart, a secure checkout process, and order history tracking for users.',
    imageUrls: [],
    tags: ['Flutter', 'Firebase', 'Mobile'],
    sourceCodeUrl: 'https://github.com/hakinz0110',
  },
  {
    id: 'tip-calculator',
    slug: 'tip-calculator',
    title: 'Tip Calculator App',
    category: 'Mobile',
    description: 'An Android app built from scratch using Java & XML.',
    longDescription: 'A practical and user-friendly tip calculator application for Android devices. Developed natively using Java and XML for the user interface, this app was a foundational project to master Android development principles. It allows users to input their bill amount, select a tip percentage via a slider or custom input, and specify the number of people to split the bill with. The app instantly calculates the tip amount and the total per person, providing a clean and intuitive interface for quick calculations on the go.',
    imageUrls: [],
    tags: ['Android', 'Java', 'XML'],
    sourceCodeUrl: 'https://github.com/hakinz0110',
  },
  {
    id: 'finance-dashboard',
    slug: 'finance-dashboard',
    title: 'UI/UX Redesign for Finance Dashboard',
    category: 'UI/UX',
    description: 'A finance dashboard prototype for the web, focusing on usability.',
    longDescription: 'This project involved a complete UI/UX redesign of a conceptual finance dashboard. The primary goal was to improve data visualization and user interaction, making complex financial data accessible and easy to understand. Using Figma, I created a high-fidelity prototype that includes features like an overview of accounts, interactive charts for tracking income and expenses, transaction history with filtering, and budgeting tools. The design emphasizes a clean, modern aesthetic with a clear visual hierarchy to enhance usability and provide a seamless user experience.',
    imageUrls: [],
    tags: ['Figma', 'UI/UX', 'Web'],
  },
  {
    id: 'report-generator',
    slug: 'report-generator',
    title: 'Engineering Report Generator',
    category: 'Web',
    description: 'Document automation for metallurgical analysis reports.',
    longDescription: 'This is a web-based application designed to automate the generation of standardized engineering reports for metallurgical analysis. Built with a Python Django backend and a React frontend, the tool allows engineers to input raw data from various tests (e.g., tensile strength, hardness, microstructure analysis). The system then processes this data and generates a professional, formatted PDF report based on predefined templates. This significantly reduces manual effort, minimizes errors, and ensures consistency in reporting across the organization.',
    imageUrls: [],
    tags: ['Python', 'Django', 'React', 'Automation'],
    sourceCodeUrl: 'https://github.com/hakinz0110',
  },
  {
    id: 'virtual-assistant',
    slug: 'virtual-assistant',
    title: 'Virtual Assistance Services',
    category: 'VA',
    description: 'Providing remote administrative, technical, and creative support.',
    longDescription: 'Offering comprehensive virtual assistance to streamline business operations and enhance productivity. Services include administrative tasks like data entry, email management, and scheduling, as well as customer service support. By handling these essential background tasks, I enable clients to focus on their core business activities. This service is built on reliability, efficiency, and a proactive approach to problem-solving.',
    imageUrls: [],
    tags: ['Admin Support', 'Data Entry', 'Customer Service', 'Productivity'],
  }
  /*
  ,
  {
    id: 'project-template-1',
    slug: 'project-template-1',
    title: 'Corporate Website Redesign',
    category: 'Web',
    description: 'A modern, responsive redesign for a corporate client using Next.js.',
    longDescription: 'Complete overhaul of a legacy corporate website, focusing on performance, SEO, and a modern user experience. Built with Next.js for server-side rendering and static site generation, ensuring fast load times. Styled with Tailwind CSS for a utility-first approach to design. The project included a CMS integration for easy content management by the client.',
    imageUrls: [
        'https://placehold.co/1200x675.png', 
        'https://placehold.co/1200x675.png', 
        'https://placehold.co/1200x675.png'
    ],
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Web'],
    sourceCodeUrl: 'https://github.com/hakinz0110',
  },
  {
    id: 'project-template-2',
    slug: 'project-template-2',
    title: 'Task Management App',
    category: 'Mobile',
    description: 'A cross-platform task management app built with Flutter.',
    longDescription: 'A mobile application to help users organize their tasks and boost productivity. Developed with Flutter to ensure a consistent experience on both iOS and Android from a single codebase. Features include task creation, due dates, priority levels, and project categorization. Integrated with Firebase for real-time data synchronization across devices.',
    imageUrls: [
        'https://placehold.co/800x1200.png',
        'https://placehold.co/800x1200.png',
        'https://placehold.co/800x1200.png'
    ],
    tags: ['Flutter', 'Firebase', 'Mobile'],
    sourceCodeUrl: 'https://github.com/hakinz0110',
  },
  {
    id: 'project-template-3',
    slug: 'project-template-3',
    title: 'Travel Agency UI Kit',
    category: 'UI/UX',
    description: 'A comprehensive UI kit for a travel booking platform.',
    longDescription: 'A complete UI/UX design project in Figma for a travel agency website and mobile app. The kit includes components for flight and hotel searches, booking flows, user profiles, and travel guides. The design focuses on a clean, visually appealing interface that inspires trust and is easy to navigate.',
    imageUrls: [
        'https://placehold.co/1200x675.png',
        'https://placehold.co/1200x675.png'
    ],
    tags: ['Figma', 'UI/UX', 'Design System'],
  },
  {
    id: 'project-template-4',
    slug: 'project-template-4',
    title: 'Real-time Chat Application',
    category: 'Web',
    description: 'A web-based chat application using Node.js and Socket.io.',
    longDescription: 'A full-stack chat application demonstrating real-time communication. The backend is built with Node.js and Express, using Socket.io for WebSocket-based messaging. The frontend is built with React, providing a dynamic and responsive user interface. Users can join rooms, send messages, and see who is currently online.',
    imageUrls: [
        'https://placehold.co/1200x675.png',
        'https://placehold.co/1200x675.png'
    ],
    tags: ['Node.js', 'Socket.io', 'React', 'Web'],
    sourceCodeUrl: 'https://github.com/hakinz0110',
  },
  {
    id: 'project-template-5',
    slug: 'project-template-5',
    title: 'Data Visualization Dashboard',
    category: 'Web',
    description: 'A dashboard for visualizing sales data with D3.js and React.',
    longDescription: 'An interactive dashboard that helps businesses visualize their sales data through various charts and graphs. Built using React for the component architecture and D3.js for powerful and custom data visualizations. Users can filter data by date range, region, and product category to gain actionable insights.',
    imageUrls: [
        'https://placehold.co/1200x675.png',
        'https://placehold.co/1200x675.png',
        'https://placehold.co/1200x675.png'
    ],
    tags: ['React', 'D3.js', 'Data Viz', 'Web'],
  },
  {
    id: 'project-template-6',
    slug: 'project-template-6',
    title: 'Recipe Finder Mobile App',
    category: 'Mobile',
    description: 'An Android app to discover new recipes using a public API.',
    longDescription: 'A native Android application developed with Kotlin that allows users to search for recipes based on ingredients they have. It integrates with a third-party recipe API to fetch and display recipe data, including instructions and nutritional information. The app features a clean UI using modern Android development practices.',
    imageUrls: [
        'https://placehold.co/800x1200.png',
        'https://placehold.co/800x1200.png',
    ],
    tags: ['Kotlin', 'Android', 'REST API', 'Mobile'],
    sourceCodeUrl: 'https://github.com/hakinz0110',
  },
  {
    id: 'project-template-7',
    slug: 'project-template-7',
    title: 'Social Media Content Scheduling',
    category: 'VA',
    description: 'Managed and scheduled content for a small business client.',
    longDescription: 'Provided virtual assistance to a small business by managing their social media presence. This involved creating a content calendar, designing simple graphics, writing copy, and scheduling posts across multiple platforms like Instagram and Facebook. The goal was to increase engagement and maintain a consistent online presence, freeing up the client to focus on their core business.',
    imageUrls: [
        'https://placehold.co/1200x675.png'
    ],
    tags: ['Social Media', 'Content Creation', 'Admin Support'],
  },
  {
    id: 'project-template-8',
    slug: 'project-template-8',
    title: 'Portfolio Website Template',
    category: 'Web',
    description: 'A customizable portfolio template built with Vue.js.',
    longDescription: 'A single-page portfolio website template built with Vue.js and designed for developers and designers. The template is easy to customize with personal information, projects, and skills. It is fully responsive and includes smooth scrolling and a contact form. This project was created to help others quickly set up their own personal site.',
    imageUrls: [
        'https://placehold.co/1200x675.png',
        'https://placehold.co/1200x675.png'
    ],
    tags: ['Vue.js', 'Web', 'Template'],
    sourceCodeUrl: 'https://github.com/hakinz0110',
  },
  {
    id: 'project-template-9',
    slug: 'project-template-9',
    title: 'Fitness Tracker App UI',
    category: 'UI/UX',
    description: 'UI/UX design for a mobile fitness tracking application.',
    longDescription: 'Designed the user interface and experience for a fitness tracking app concept. The project, created in Adobe XD, includes screens for activity tracking, workout logging, progress charts, and social sharing. The design prioritizes a motivating and easy-to-use interface to help users achieve their fitness goals.',
    imageUrls: [
        'https://placehold.co/800x1200.png',
        'https://placehold.co/800x1200.png',
        'https://placehold.co/800x1200.png'
    ],
    tags: ['Adobe XD', 'UI/UX', 'Mobile'],
  },
  {
    id: 'project-template-10',
    slug: 'project-template-10',
    title: 'Inventory Management System',
    category: 'Web',
    description: 'A web app to track inventory, built with Laravel and PHP.',
    longDescription: 'A comprehensive inventory management system for small to medium-sized businesses. Built on the Laravel framework using PHP, this application allows users to track stock levels, manage suppliers, process orders, and generate reports. It features a secure authentication system and a role-based access control to manage user permissions.',
    imageUrls: [
        'https://placehold.co/1200x675.png',
        'https://placehold.co/1200x675.png',
    ],
    tags: ['Laravel', 'PHP', 'MySQL', 'Web'],
    sourceCodeUrl: 'https://github.com/hakinz0110',
  },
    {
    id: 'project-template-11',
    slug: 'project-template-11',
    title: 'Blog Platform with Django',
    category: 'Web',
    description: 'A full-featured blogging platform built with Python and Django.',
    longDescription: 'A complete blogging platform that allows users to create accounts, write, edit, and publish posts. Built with Django, it includes features like user authentication, a rich text editor for posts, comment functionality, and a tagging system. The project demonstrates a strong understanding of the Django framework and database management.',
    imageUrls: [
        'https://placehold.co/1200x675.png', 
        'https://placehold.co/1200x675.png'
    ],
    tags: ['Python', 'Django', 'Web'],
    sourceCodeUrl: 'https://github.com/hakinz0110',
  },
  {
    id: 'project-template-12',
    slug: 'project-template-12',
    title: 'Weather App with React Native',
    category: 'Mobile',
    description: 'A mobile weather application for iOS and Android.',
    longDescription: 'A cross-platform mobile app built with React Native that displays the current weather and a 5-day forecast for the user\'s location or a searched city. It uses a public weather API for data and features a clean, simple interface that changes dynamically based on the weather conditions.',
    imageUrls: [
        'https://placehold.co/800x1200.png',
        'https://placehold.co/800x1200.png'
    ],
    tags: ['React Native', 'Mobile', 'API'],
  },
  {
    id: 'project-template-13',
    slug: 'project-template-13',
    title: 'E-Learning Platform UI',
    category: 'UI/UX',
    description: 'A user-centric design for an online learning platform.',
    longDescription: 'This Figma project outlines the UI and UX for an e-learning platform. It includes designs for course catalogs, video players, progress tracking, and student dashboards. The focus was on creating an intuitive and engaging learning environment that is accessible to a wide range of users.',
    imageUrls: [
        'https://placehold.co/1200x675.png',
        'https://placehold.co/1200x675.png',
        'https://placehold.co/1200x675.png'
    ],
    tags: ['Figma', 'UI/UX', 'Web'],
  },
  {
    id: 'project-template-14',
    slug: 'project-template-14',
    title: 'Customer Data Entry & Cleansing',
    category: 'VA',
    description: 'Provided data management services for a marketing agency.',
    longDescription: 'Worked as a virtual assistant for a marketing agency to manage their customer database. The role involved accurate data entry from various sources into a CRM, cleansing existing data to remove duplicates and correct errors, and organizing the data for marketing campaigns. This task required high attention to detail and proficiency with CRM software and spreadsheets.',
    imageUrls: [
        'https://placehold.co/1200x675.png'
    ],
    tags: ['Data Entry', 'CRM', 'Admin Support'],
  },
  {
    id: 'project-template-15',
    slug: 'project-template-15',
    title: 'Music Player App',
    category: 'Mobile',
    description: 'A native Android music player app with background playback.',
    longDescription: 'A music player for Android built with Java. The app can scan the device for audio files, organize them by artist and album, and play them. It supports background playback and media controls from the notification shade and lock screen. This project was a deep dive into Android services and media playback APIs.',
    imageUrls: [
        'https://placehold.co/800x1200.png',
        'https://placehold.co/800x1200.png'
    ],
    tags: ['Android', 'Java', 'Mobile'],
    sourceCodeUrl: 'https://github.com/hakinz0110',
  },
  {
    id: 'project-template-16',
    slug: 'project-template-16',
    title: 'URL Shortener Service',
    category: 'Web',
    description: 'A backend service to shorten long URLs, built with Node.js.',
    longDescription: 'A microservice that takes a long URL and returns a short, unique one. The backend is built with Node.js, Express, and uses a NoSQL database like MongoDB to store the mappings. It exposes a simple REST API for creating and redirecting short URLs. This project demonstrates backend development and API design principles.',
    imageUrls: [
        'https://placehold.co/1200x675.png'
    ],
    tags: ['Node.js', 'Express', 'MongoDB', 'API'],
    sourceCodeUrl: 'https://github.com/hakinz0110',
  },
  {
    id: 'project-template-17',
    slug: 'project-template-17',
    title: 'Real Estate Website UI',
    category: 'UI/UX',
    description: 'A modern UI design for a real estate listing website.',
    longDescription: 'A design project in Figma for a real estate platform. The design includes property listing pages with large photos, map views, advanced search filters, and agent profiles. The user experience is tailored to make the process of finding a new home as simple and enjoyable as possible.',
    imageUrls: [
        'https://placehold.co/1200x675.png',
        'https://placehold.co/1200x675.png'
    ],
    tags: ['Figma', 'UI/UX', 'Web'],
  },
  {
    id: 'project-template-18',
    slug: 'project-template-18',
    title: 'Movie Database Browser',
    category: 'Web',
    description: 'A React app to browse movies using the TMDB API.',
    longDescription: 'A single-page application built with React that allows users to discover popular, top-rated, and upcoming movies. It uses The Movie Database (TMDB) API to fetch data. Features include a search function, detailed movie pages with cast and crew information, and a responsive design that works on all devices.',
    imageUrls: [
        'https://placehold.co/1200x675.png',
        'https://placehold.co/1200x675.png'
    ],
    tags: ['React', 'API', 'Web'],
  },
  {
    id: 'project-template-19',
    slug: 'project-template-19',
    title: 'Simple Pokedex App',
    category: 'Mobile',
    description: 'A Flutter app that lists and shows details of Pokemon.',
    longDescription: 'A fun project built with Flutter that uses the PokeAPI to create a Pokedex. The app displays a list of Pokemon with infinite scrolling. Tapping on a Pokemon opens a detail screen showing its stats, abilities, and type. This was a great exercise in API integration and state management in Flutter.',
    imageUrls: [
        'https://placehold.co/800x1200.png',
        'https://placehold.co/800x1200.png',
        'https://placehold.co/800x1200.png'
    ],
    tags: ['Flutter', 'API', 'Mobile'],
    sourceCodeUrl: 'https://github.com/hakinz0110',
  },
  {
    id: 'project-template-20',
    slug: 'project-template-20',
    title: 'Technical Support & Ticketing',
    category: 'VA',
    description: 'Provided first-level technical support for a SaaS company.',
    longDescription: 'Acted as a virtual assistant providing Tier 1 technical support for a software company. Responsibilities included responding to customer support tickets, troubleshooting common issues, escalating complex problems to the development team, and documenting solutions in a knowledge base. This role required strong communication skills and a good technical aptitude.',
    imageUrls: [
        'https://placehold.co/1200x675.png'
    ],
    tags: ['Customer Service', 'Tech Support', 'Admin Support'],
  }
  */
];

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'from-metallurgy-to-modern-web',
    title: 'From Metallurgy to Modern Web: My Journey into Tech',
    description: 'How principles from engineering shaped my approach to software development.',
    date: 'August 15, 2024',
    content: `
      <p>My career didn\'t start with a command line, but with a crucible. As a Metallurgical Engineer, I was immersed in a world of materials, processes, and precision. It was a field that demanded a deep understanding of complex systems, an eye for detail, and a rigorous, problem-solving mindset. Little did I know, these very skills would become the bedrock of my transition into software engineering.</p>
      <p>The shift from physical materials to digital ones might seem like a leap, but the core principles are surprisingly similar. In metallurgy, you analyze structures at a microscopic level to understand their properties. In coding, you debug and refactor to improve a system\'s performance and stability. Both require patience, logic, and a desire to build things that are both strong and efficient.</p>
      <h3 class="font-headline text-2xl font-bold mt-8 mb-4">Forging a New Path</h3>
      <p>This blog will be a space to explore the intersection of these two worlds. I\'ll share insights on how an engineering background can be a powerful asset in tech, discuss the projects I\'m passionate about, and document my continuous learning journey. Welcome to the forge.</p>
    `
  },
  {
    slug: 'the-power-of-atomic-design',
    title: 'The Power of Atomic Design in UI/UX',
    description: 'Building robust and scalable design systems from the smallest components.',
    date: 'August 22, 2024',
    content: `
      <p>When I first started in UI/UX, I was focused on the big picture: the overall layout, the user flow, the visual appeal. But I quickly learned that the most robust, maintainable, and scalable designs are built from the ground up, starting with the smallest possible pieces. This is the core idea behind Atomic Design.</p>
      <p>Introduced by Brad Frost, Atomic Design is a methodology for creating design systems. It breaks an interface down into its basic components and then works up from there:</p>
      <ul class="list-disc pl-6 space-y-2 my-4">
        <li><strong>Atoms:</strong> The basic building blocks. Think labels, inputs, buttons.</li>
        <li><strong>Molecules:</strong> Groups of atoms functioning together. A search form (a label, input, and button) is a classic example.</li>
        <li><strong>Organisms:</strong> More complex UI components composed of molecules and/or atoms, like a site header or footer.</li>
        <li><strong>Templates:</strong> Page-level objects that place components into a layout.</li>
        <li><strong>Pages:</strong> Specific instances of templates with real, representative content.</li>
      </ul>
      <h3 class="font-headline text-2xl font-bold mt-8 mb-4">Why It Matters</h3>
      <p>This approach isn\'t just an organizational tool; it forces you to think systematically. It promotes consistency, reusability, and makes collaboration between designers and developers incredibly efficient. By building with atoms, you ensure that your design system is as strong and coherent as the materials I once worked with.</p>
    `
  },
   {
    slug: 'demystifying-nextjs-app-router',
    title: 'Demystifying the Next.js App Router',
    description: 'A practical look at server components, layouts, and data fetching.',
    date: 'August 29, 2024',
    content: `
      <p>The introduction of the App Router in Next.js 13 was a paradigm shift for many React developers. It brought concepts like React Server Components (RSCs), nested layouts, and simplified data fetching to the forefront. If you\'re coming from the Pages Router, it can feel a bit daunting at first.</p>
      <p>Let\'s break down the key concepts:</p>
      <h3 class="font-headline text-2xl font-bold mt-8 mb-4">Server Components by Default</h3>
      <p>This is the biggest change. In the App Router, every component is a Server Component unless you explicitly add the <code>\'use client\'</code> directive at the top of the file. This means less JavaScript is shipped to the client, resulting in faster page loads. Server Components are great for fetching data and accessing backend resources directly, while Client Components are for interactivity (e.g., using hooks like <code>useState</code> or <code>useEffect</code>).</p>
      <h3 class="font-headline text-2xl font-bold mt-8 mb-4">File-based Routing and Layouts</h3>
       <p>The file system still dictates your routes, but now it\'s folder-based. A <code>page.tsx</code> file defines the UI for a route segment. A <code>layout.tsx</code> file defines a UI that is shared across multiple pages. This makes it incredibly easy to create nested layouts that persist state and avoid re-renders, like a sidebar that stays put while you navigate between dashboard pages.</p>
      <p>The App Router is a powerful evolution for Next.js, enabling developers to build faster, more dynamic, and more scalable web applications. Embracing these new patterns is key to leveraging the full potential of the framework.</p>
    `
  },
];

    


