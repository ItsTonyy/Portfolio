'use client';

import React from 'react';
import { Header } from '@/components/header';

import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/ui/aurora-background';
//import { ModeToggle } from '@/components/modeToggle';
import { FlipWords } from '@/components/ui/flip-words';

export default function Home() {
  const words = [
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'Fullstack Developer',
  ];

  return (
    <div>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: 'easeInOut',
          }}
          className='relative flex flex-col h-dvh'
        >
          <Header />

          {/* Landing page */}
          <div className='flex flex-col justify-center h-dvh w-full'>
            <div
              className='text-2xl md:text-4xl font-light  p-2 text-transparent bg-clip-text bg-gradient-to-b
           dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-500 text-center'
            >
              Hi, I&apos;m
            </div>
            <div
              className='text-3xl md:text-6xl font-bold p-2 text-transparent bg-clip-text bg-gradient-to-b
           dark:from-zinc-50 dark:via-zinc-200 dark:to-zinc-400  text-center'
            >
              Tony Terra Nova
            </div>
            <div
              className='text-3xl md:text-5xl font-light p-2 text-transparent bg-clip-text bg-gradient-to-b
           dark:from-zinc-50 dark:via-zinc-200 dark:to-zinc-400  text-center'
            >
              And i&apos;m a <FlipWords words={words} />
            </div>
          </div>
        </motion.div>
      </AuroraBackground>


      {/* About */}
      <div className='flex flex-col h-dvh w-full bg-gradient-to-b from-[#18181B] to-[#0D0D0F] '>
        <div
          className='flex justify-start text-2xl md:text-6xl font-bold py-12 px-24 text-transparent bg-clip-text bg-gradient-to-b
           dark:from-zinc-50 dark:via-zinc-200 dark:to-zinc-400 text-center'
        >
          About
        </div>
        
      </div>

      {/* Projects */}
      <div className='flex flex-col h-dvh w-full bg-gradient-to-b from-[#0D0D0F] to-[#0E0E10]'>
        <div
          className='flex justify-start text-2xl md:text-6xl font-bold py-12 px-24 text-transparent bg-clip-text bg-gradient-to-b
           dark:from-zinc-50 dark:via-zinc-200 dark:to-zinc-400 text-center'
        >
          Projects
        </div>
        
      </div>

      
    </div>
  );
}
