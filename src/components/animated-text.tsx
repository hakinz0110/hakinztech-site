"use client";

import { useState, useEffect } from 'react';

type AnimatedTextProps = {
  phrases: string[];
};

export function AnimatedText({ phrases }: AnimatedTextProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 75 : 150;

    const handleTyping = () => {
      setText(
        isDeleting
          ? currentPhrase.substring(0, text.length - 1)
          : currentPhrase.substring(0, text.length + 1)
      );

      if (!isDeleting && text === currentPhrase) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, phrases]);

  return (
    <h1 className="font-headline text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{text}</span>
      <span className="animate-pulse text-gray-900">|</span>
    </h1>
  );
}
