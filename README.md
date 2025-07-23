# HakinzTech Digital Forge - Personal Portfolio

This is the source code for my personal portfolio website, built with Next.js, Tailwind CSS, and ShadCN UI components. The portfolio showcases my skills, projects, and provides an overview of my experience. It also features an AI-powered project summarizer built with Genkit.

## Features

- **Next.js App Router:** For optimized performance and modern React features.
- **Tailwind CSS & ShadCN UI:** For a beautiful, responsive, and customizable design system.
- **Genkit AI:** Powers an AI summarizer for project case studies.
- **Dynamic Content:** Easily updatable skills, projects, and testimonials.
- **Fully Responsive:** Designed to look great on all devices, from mobile phones to desktops.

## Getting Started

Follow these instructions to get a local copy up and running for development purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) or another package manager like [Yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    cd your-repository-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Environment Variables

The AI summarization feature requires an API key from Google AI Studio.

1.  Create a `.env` file in the root of the project by copying the example:
    ```bash
    cp .env.example .env
    ```
    If `.env.example` doesn't exist, simply create a new file named `.env`.

2.  **Get a Google AI API Key:**
    - Visit [Google AI Studio](https://aistudio.google.com/).
    - Click "Get API key" and create a new key.

3.  **Add the key to your `.env` file:**
    ```
    GEMINI_API_KEY=your_api_key_here
    ```

### Running the Development Server

You will need to run two separate processes in two different terminal windows for the full application to work correctly.

1.  **Run the Next.js development server:**
    This runs the main frontend application.
    ```bash
    npm run dev
    ```
    Open [http://localhost:9002](http://localhost:9002) in your browser to see the result.

2.  **Run the Genkit development server:**
    This runs the backend AI flow needed for the project summarizer.
    ```bash
    npm run genkit:watch
    ```
    This will start the Genkit development UI, typically on [http://localhost:4000](http://localhost:4000), where you can monitor your AI flows.

## How to Add and Edit Projects

There are 20 pre-made project templates with placeholder data ready for you to use. Please see the detailed instructions in the `guide.txt` file located in the root of this