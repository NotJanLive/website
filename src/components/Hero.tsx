'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Compass, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const adjectives = ["simplicity", "elegance", "power", "creativity", "innovation"];

export function Hero() {
  const [text, setText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const [typingSpeed, setTypingSpeed] = React.useState(150);

  React.useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % adjectives.length;
      const fullText = adjectives[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-mesh pt-20">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale scale-110"
          style={{ backgroundImage: 'url("/img/coding_bg.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 inline-flex items-center rounded-full glass px-4 py-1.5 text-sm font-medium text-accent border-accent/20 shadow-[0_0_15px_rgba(40,167,69,0.3)]"
        >
          <span className="mr-2 flex h-2 w-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_var(--accent)]" />
          Always Learning, Always Coding
        </motion.div>

        <h1 className="mb-8 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
          The beauty of code <br className="hidden md:block" />
          lies in its{' '}
          <span className="inline-block text-primary text-glow-primary border-r-4 border-primary pr-2">
            {text}
          </span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-12 max-w-2xl mx-auto text-lg text-white/60 md:text-xl"
        >
          Discover the ultimate Minecraft mods that bring your game to{' '}
          <span className="pulsating-life font-bold text-secondary text-glow-secondary">life</span>
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
        >
          <Button asChild size="lg" className="h-14 rounded-2xl bg-primary px-8 text-lg font-bold text-white hover:bg-primary/90 hover:scale-105 transition-all">
            <a href="#projects">
              <Compass className="mr-2 h-6 w-6" />
              Explore Projects
            </a>
          </Button>
          <Button variant="ghost" size="lg" className="h-14 rounded-2xl border border-white/10 glass px-8 text-lg font-bold text-white hover:bg-white/5 transition-all">
            <a href="#about">About Me</a>
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="animate-bounce" />
      </div>
    </section>
  );
}
