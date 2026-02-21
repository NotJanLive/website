'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Blocks, Zap, GraduationCap, Anvil } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DiscordIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="mr-3 h-6 w-6">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.23 10.23 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

export function AboutContact() {
  const [isDiscordHovered, setIsDiscordHovered] = React.useState(false);

  return (
    <section id="about" className="relative bg-background py-32 overflow-hidden">
      <div className="absolute top-1/4 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-24 h-96 w-96 rounded-full bg-secondary/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-8 text-5xl font-bold tracking-tight text-white md:text-7xl">
              Hi, I&apos;m <span className="text-primary">NotJan</span>
            </h2>
            
            <div className="space-y-6 text-xl text-white/70 leading-relaxed text-center lg:text-left">
              <p>
                I am <span className="text-white font-medium">20 years old</span> and live in Hamburg, Germany. 
                I&apos;m deeply passionate about <span className="text-white font-medium">Hytale</span> and 
                <span className="text-white font-medium"> Minecraft modding</span>, constantly exploring new ways 
                to enhance gaming experiences through code.
              </p>
              <p>
                Currently, I am <span className="text-secondary font-medium text-glow-secondary">expanding my coding skills</span>{' '}
                while working on various creative projects. I love to bring my ideas to life and share them with the world.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 max-w-lg mx-auto lg:mx-0">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 w-fit rounded-xl glass text-primary"><Blocks /></div>
                  <div className="text-sm font-bold uppercase tracking-tighter text-white">Modding</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 w-fit rounded-xl glass text-secondary"><Zap /></div>
                  <div className="text-sm font-bold uppercase tracking-tighter text-white">Creativity</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 w-fit rounded-xl glass text-accent"><GraduationCap /></div>
                  <div className="text-sm font-bold uppercase tracking-tighter text-white">Education</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div id="contact" className="relative overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/10 p-12 text-center shadow-2xl backdrop-blur-3xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              
              <h3 className="mb-6 text-4xl font-black text-white">Let&apos;s Connect</h3>
              <p className="mb-10 text-lg text-white/40 max-w-sm mx-auto">
                Interested in my projects or want to talk about modding? Catch me on GitHub or check out my latest work.
              </p>

              <div className="flex flex-col gap-4">
                <Button asChild size="lg" className="h-16 rounded-2xl glass text-white border border-white/10 hover:bg-white hover:text-black transition-all text-lg font-bold">
                  <a href="https://github.com/notjanlive" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-3 h-6 w-6" />
                    GitHub
                    <ExternalLink className="ml-2 h-4 w-4 opacity-50" />
                  </a>
                </Button>

                <Button 
                  size="lg" 
                  className="group h-16 rounded-2xl border border-white/10 glass text-white hover:bg-[#5865F2] transition-all text-lg font-bold overflow-hidden"
                  onMouseEnter={() => setIsDiscordHovered(true)}
                  onMouseLeave={() => setIsDiscordHovered(false)}
                >
                  <AnimatePresence mode="wait">
                    {!isDiscordHovered ? (
                      <motion.div
                        key="icon"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="flex items-center"
                      >
                        <DiscordIcon />
                        Discord
                      </motion.div>
                    ) : (
                      <motion.div
                        key="text"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="font-bold"
                      >
                        fvde.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
                
                <Button asChild size="lg" className="group h-16 rounded-2xl border border-white/10 glass text-white hover:bg-[#f16436] transition-all text-lg font-bold">
                  <a href="https://www.curseforge.com/members/notjan/projects" target="_blank" rel="noopener noreferrer">
                    <Anvil className="mr-3 h-6 w-6 text-[#f16436] transition-colors group-hover:text-white" />
                    CurseForge
                    <ExternalLink className="ml-2 h-4 w-4 opacity-50" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
