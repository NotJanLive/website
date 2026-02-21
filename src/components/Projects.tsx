'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, ExternalLink, Compass, ArrowUpRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const projectsData = [
  {
    title: "Hytems",
    img: "/img/hytems.png",
    description: "A comprehensive project for Hytale mods and experiences.",
    tags: ["Hytale", "Modding"],
    link: "https://www.curseforge.com/hytale/mods/hytems",
    size: "large"
  },
  {
    title: "ItemBattle",
    img: "/img/itembattle_title.png",
    description: "Battle yourself against your friends while collecting randomly picked items!",
    tags: ["Minecraft", "1.18.2", "Spigot/Paper"],
    link: "https://github.com/NotJanLive/ItemBattle",
    size: "small"
  },
  {
    title: "More coming soon",
    img: "/img/coding_bg.png",
    description: "Stay tuned for upcoming projects and innovations.",
    tags: ["Upcoming"],
    link: "#",
    size: "small"
  }
];

export function Projects() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredProjects = projectsData.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="projects" className="bg-background py-32">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            <div>
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
                Featured <span className="text-primary">Projects</span>
              </h2>
              <p className="max-w-xl text-lg text-white/50">
                A selection of my best work, from Minecraft plugins to Hytale modding.
              </p>
            </div>
            
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/30" />
              <Input 
                placeholder="Search work..." 
                className="h-14 pl-12 bg-white/5 border-white/10 text-white rounded-2xl focus-visible:ring-primary/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 glass transition-all hover:border-primary/50 ${
                project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1 opacity-50 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="glass rounded-full px-3 py-1 text-[10px] uppercase tracking-widest text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className={`font-bold text-white mb-2 ${project.size === 'large' ? 'text-4xl' : 'text-2xl'}`}>
                  {project.title}
                </h3>
                
                <p className="mb-6 text-white/50 line-clamp-2 max-w-md">
                  {project.description}
                </p>

                <div className="flex items-center gap-4">
                  <Button asChild className="rounded-xl bg-white text-black hover:bg-primary hover:text-white transition-all">
                    <a href={project.link} target={project.link !== '#' ? "_blank" : undefined} rel="noopener noreferrer">
                      View Project
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" variant="ghost" className="h-16 rounded-2xl glass px-12 text-lg font-bold text-white hover:bg-primary hover:text-white transition-all scale-100 hover:scale-105">
                <Compass className="mr-2 h-6 w-6" />
                View Archive
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-background border-white/10 text-white max-w-4xl p-0 overflow-hidden">
              <div className="p-12 glass">
                <DialogHeader className="mb-8">
                  <DialogTitle className="text-4xl font-black">Full Archive</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                  {projectsData.map((project, index) => (
                    <div key={index} className="group flex items-center justify-between border-b border-white/5 py-6 last:border-0 hover:px-4 transition-all hover:bg-white/5 rounded-xl">
                      <div>
                        <h4 className="text-xl font-bold">{project.title}</h4>
                        <div className="mt-2 flex gap-3">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-xs text-primary font-medium tracking-wider uppercase">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <a href={project.link} target={project.link !== '#' ? "_blank" : undefined} rel="noopener noreferrer" className="p-4 rounded-full glass hover:bg-primary transition-colors">
                        <ArrowUpRight className="h-6 w-6" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
