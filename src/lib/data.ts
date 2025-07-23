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
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  imageUrls: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    id: 'e-commerce-app',
    slug: 'e-commerce-app',
    title: 'E-Commerce Mobile App',
    category: 'Mobile',
    description: 'A complete shopping experience with Firebase integration.',
    longDescription: 'This project is a feature-rich e-commerce mobile application built using Flutter for cross-platform compatibility. It provides a seamless shopping experience for users, from browsing products to completing purchases. The backend is powered by Firebase, utilizing services like Firestore for the product database, Authentication for user management, and Cloud Storage for product images. Key features include a dynamic product catalog, search and filtering functionality, a shopping cart, a secure checkout process, and order history tracking for users.',
    imageUrls: ['https://placehold.co/600x400', 'https://placehold.co/600x401', 'https://placehold.co/600x402'],
    tags: ['Flutter', 'Firebase', 'Mobile'],
  },
  {
    id: 'tip-calculator',
    slug: 'tip-calculator',
    title: 'Tip Calculator App',
    category: 'Mobile',
    description: 'An Android app built from scratch using Java & XML.',
    longDescription: 'A practical and user-friendly tip calculator application for Android devices. Developed natively using Java and XML for the user interface, this app was a foundational project to master Android development principles. It allows users to input their bill amount, select a tip percentage via a slider or custom input, and specify the number of people to split the bill with. The app instantly calculates the tip amount and the total per person, providing a clean and intuitive interface for quick calculations on the go.',
    imageUrls: ['https://placehold.co/600x403'],
    tags: ['Android', 'Java', 'XML'],
  },
  {
    id: 'finance-dashboard',
    slug: 'finance-dashboard',
    title: 'UI/UX Redesign for Finance Dashboard',
    category: 'UI/UX',
    description: 'A finance dashboard prototype for the web, focusing on usability.',
    longDescription: 'This project involved a complete UI/UX redesign of a conceptual finance dashboard. The primary goal was to improve data visualization and user interaction, making complex financial data accessible and easy to understand. Using Figma, I created a high-fidelity prototype that includes features like an overview of accounts, interactive charts for tracking income and expenses, transaction history with filtering, and budgeting tools. The design emphasizes a clean, modern aesthetic with a clear visual hierarchy to enhance usability and provide a seamless user experience.',
    imageUrls: ['https://placehold.co/600x404', 'https://placehold.co/600x405'],
    tags: ['Figma', 'UI/UX', 'Web'],
  },
  {
    id: 'report-generator',
    slug: 'report-generator',
    title: 'Engineering Report Generator',
    category: 'Web',
    description: 'Document automation for metallurgical analysis reports.',
    longDescription: 'This is a web-based application designed to automate the generation of standardized engineering reports for metallurgical analysis. Built with a Python Django backend and a React frontend, the tool allows engineers to input raw data from various tests (e.g., tensile strength, hardness, microstructure analysis). The system then processes this data and generates a professional, formatted PDF report based on predefined templates. This significantly reduces manual effort, minimizes errors, and ensures consistency in reporting across the organization.',
    imageUrls: ['https://placehold.co/600x406'],
    tags: ['Python', 'Django', 'React', 'Automation'],
  },
  {
    id: 'virtual-assistant',
    slug: 'virtual-assistant',
    title: 'Virtual Assistance Services',
    category: 'VA',
    description: 'Providing remote administrative, technical, and creative support.',
    longDescription: 'Offering comprehensive virtual assistance to streamline business operations and enhance productivity. Services include administrative tasks like data entry, email management, and scheduling, as well as customer service support. By handling these essential background tasks, I enable clients to focus on their core business activities. This service is built on reliability, efficiency, and a proactive approach to problem-solving.',
    imageUrls: ['https://placehold.co/600x407'],
    tags: ['Admin Support', 'Data Entry', 'Customer Service', 'Productivity'],
  }
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
      <p>My career didn't start with a command line, but with a crucible. As a Metallurgical Engineer, I was immersed in a world of materials, processes, and precision. It was a field that demanded a deep understanding of complex systems, an eye for detail, and a rigorous, problem-solving mindset. Little did I know, these very skills would become the bedrock of my transition into software engineering.</p>
      <p>The shift from physical materials to digital ones might seem like a leap, but the core principles are surprisingly similar. In metallurgy, you analyze structures at a microscopic level to understand their properties. In coding, you debug and refactor to improve a system's performance and stability. Both require patience, logic, and a desire to build things that are both strong and efficient.</p>
      <h3 class="font-headline text-2xl font-bold mt-8 mb-4">Forging a New Path</h3>
      <p>This blog will be a space to explore the intersection of these two worlds. I'll share insights on how an engineering background can be a powerful asset in tech, discuss the projects I'm passionate about, and document my continuous learning journey. Welcome to the forge.</p>
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
      <p>This approach isn't just an organizational tool; it forces you to think systematically. It promotes consistency, reusability, and makes collaboration between designers and developers incredibly efficient. By building with atoms, you ensure that your design system is as strong and coherent as the materials I once worked with.</p>
    `
  },
   {
    slug: 'demystifying-nextjs-app-router',
    title: 'Demystifying the Next.js App Router',
    description: 'A practical look at server components, layouts, and data fetching.',
    date: 'August 29, 2024',
    content: `
      <p>The introduction of the App Router in Next.js 13 was a paradigm shift for many React developers. It brought concepts like React Server Components (RSCs), nested layouts, and simplified data fetching to the forefront. If you're coming from the Pages Router, it can feel a bit daunting at first.</p>
      <p>Let's break down the key concepts:</p>
      <h3 class="font-headline text-2xl font-bold mt-8 mb-4">Server Components by Default</h3>
      <p>This is the biggest change. In the App Router, every component is a Server Component unless you explicitly add the <code>'use client'</code> directive at the top of the file. This means less JavaScript is shipped to the client, resulting in faster page loads. Server Components are great for fetching data and accessing backend resources directly, while Client Components are for interactivity (e.g., using hooks like <code>useState</code> or <code>useEffect</code>).</p>
      <h3 class="font-headline text-2xl font-bold mt-8 mb-4">File-based Routing and Layouts</h3>
       <p>The file system still dictates your routes, but now it's folder-based. A <code>page.tsx</code> file defines the UI for a route segment. A <code>layout.tsx</code> file defines a UI that is shared across multiple pages. This makes it incredibly easy to create nested layouts that persist state and avoid re-renders, like a sidebar that stays put while you navigate between dashboard pages.</p>
      <p>The App Router is a powerful evolution for Next.js, enabling developers to build faster, more dynamic, and more scalable web applications. Embracing these new patterns is key to leveraging the full potential of the framework.</p>
    `
  },
];
