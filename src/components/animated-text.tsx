"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type AnimatedTextProps = {
  phrases: string[];
  className?: string;
};

export function AnimatedText({ phrases, className }: AnimatedTextProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const handleTyping = () => {
      setText(
        isDeleting
          ? currentPhrase.substring(0, text.length - 1)
          : currentPhrase.substring(0, text.length + 1)
      );

      if (!isDeleting && text === currentPhrase) {
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
    <h1 className={cn(
      "font-headline font-bold tracking-tight min-h-[1.3em] leading-tight",
      className
    )}>
      <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
        {text}
      </span>
      <span className="inline-block w-[2px] md:w-[3px] h-[0.85em] bg-primary ml-0.5 md:ml-1 animate-pulse align-middle" />
    </h1>
  );
}
