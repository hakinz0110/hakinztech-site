import type { LucideIcon } from 'lucide-react';
import { Code, Server, Smartphone, PenTool, GitMerge, Settings, BotMessageSquare, UserRoundCog } from 'lucide-react';

export type Skill = {
  area: string;
  Icon: LucideIcon;
  tools: string[];
};

export const skills: Skill[] = [
  {
    area: 'Frontend',
    Icon: Code,
    tools: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Next.js', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    area: 'Backend',
    Icon: Server,
    tools: ['Node.js', 'Express', 'Django', 'Laravel', 'PHP', 'Firebase'],
  },
  {
    area: 'Mobile Development',
    Icon: Smartphone,
    tools: ['Android (Java, Kotlin)', 'Flutter'],
  },
  {
    area: 'UI/UX Design',
    Icon: PenTool,
    tools: ['Figma', 'Adobe XD', 'Photoshop'],
  },
  {
    area: 'DevOps & Tools',
    Icon: GitMerge,
    tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'Docker', 'Linux CLI'],
  },
  {
    area: 'Virtual Assistance',
    Icon: UserRoundCog,
    tools: ['Data Entry', 'Admin Support', 'Customer Service', 'Email Management'],
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: 'e-commerce-app',
    title: 'E-Commerce Mobile App',
    category: 'Mobile',
    description: 'A complete shopping experience with Firebase integration.',
    longDescription: 'This project is a feature-rich e-commerce mobile application built using Flutter for cross-platform compatibility. It provides a seamless shopping experience for users, from browsing products to completing purchases. The backend is powered by Firebase, utilizing services like Firestore for the product database, Authentication for user management, and Cloud Storage for product images. Key features include a dynamic product catalog, search and filtering functionality, a shopping cart, a secure checkout process, and order history tracking for users.',
    imageUrl: 'https://placehold.co/600x400',
    tags: ['Flutter', 'Firebase', 'Mobile'],
  },
  {
    id: 'tip-calculator',
    title: 'Tip Calculator App',
    category: 'Mobile',
    description: 'An Android app built from scratch using Java & XML.',
    longDescription: 'A practical and user-friendly tip calculator application for Android devices. Developed natively using Java and XML for the user interface, this app was a foundational project to master Android development principles. It allows users to input their bill amount, select a tip percentage via a slider or custom input, and specify the number of people to split the bill with. The app instantly calculates the tip amount and the total per person, providing a clean and intuitive interface for quick calculations on the go.',
    imageUrl: 'https://placehold.co/600x400',
    tags: ['Android', 'Java', 'XML'],
  },
  {
    id: 'finance-dashboard',
    title: 'UI/UX Redesign for Finance Dashboard',
    category: 'UI/UX',
    description: 'A finance dashboard prototype for the web, focusing on usability.',
    longDescription: 'This project involved a complete UI/UX redesign of a conceptual finance dashboard. The primary goal was to improve data visualization and user interaction, making complex financial data accessible and easy to understand. Using Figma, I created a high-fidelity prototype that includes features like an overview of accounts, interactive charts for tracking income and expenses, transaction history with filtering, and budgeting tools. The design emphasizes a clean, modern aesthetic with a clear visual hierarchy to enhance usability and provide a seamless user experience.',
    imageUrl: 'https://placehold.co/600x400',
    tags: ['Figma', 'UI/UX', 'Web'],
  },
  {
    id: 'report-generator',
    title: 'Engineering Report Generator',
    category: 'Web',
    description: 'Document automation for metallurgical analysis reports.',
    longDescription: 'This is a web-based application designed to automate the generation of standardized engineering reports for metallurgical analysis. Built with a Python Django backend and a React frontend, the tool allows engineers to input raw data from various tests (e.g., tensile strength, hardness, microstructure analysis). The system then processes this data and generates a professional, formatted PDF report based on predefined templates. This significantly reduces manual effort, minimizes errors, and ensures consistency in reporting across the organization.',
    imageUrl: 'https://placehold.co/600x400',
    tags: ['Python', 'Django', 'React', 'Automation'],
  },
];
