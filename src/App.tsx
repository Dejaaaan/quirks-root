import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Moon, Sun } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-[#F9F9F7] dark:bg-[#121214] text-[#1A1A1A] dark:text-[#F4F4F5] font-sans antialiased transition-colors duration-200 flex flex-col justify-between p-6 selection:bg-[#F59E0B]/20 selection:text-[#B45309] dark:selection:text-[#FBBF24]">
      {/* Top right theme toggle */}
      <div className="w-full max-w-md mx-auto flex justify-end">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-lg text-[#73736C] dark:text-[#A1A1AA] hover:text-[#1A1A1A] dark:hover:text-[#F4F4F5] hover:bg-[#E5E5DF]/60 dark:hover:bg-[#27272A] transition-colors border border-transparent hover:border-[#E5E5DF] dark:hover:border-[#3F3F46]"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>

      {/* Main minimal center content */}
      <div className="max-w-md w-full mx-auto text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-serif text-[#1A1A1A] dark:text-[#F4F4F5] tracking-tight">
            quirks<span className="text-[#D97706] dark:text-[#F59E0B]">.</span>
          </h1>
          <p className="text-sm text-[#73736C] dark:text-[#A1A1AA] font-sans">
            Programming language edge cases and runtime mechanics.
          </p>
        </div>

        {/* Primary Link to JavaScript Quirks */}
        <a
          href="https://javascript.quirks.dpdns.org"
          className="group inline-flex items-center justify-between gap-4 w-full p-4 rounded-xl bg-[#FAF9F5] dark:bg-[#18181B] border border-[#E5E5DF] dark:border-[#27272A] hover:border-[#D97706] dark:hover:border-[#F59E0B] hover:bg-[#FFFFFF] dark:hover:bg-[#202023] transition-all text-left shadow-sm dark:shadow-md dark:shadow-black/40"
        >
          <div>
            <div className="text-sm font-semibold text-[#1A1A1A] dark:text-[#F4F4F5] group-hover:text-[#D97706] dark:group-hover:text-[#F59E0B] transition-colors">
              JavaScript Quirks
            </div>
            <div className="text-xs font-mono text-[#73736C] dark:text-[#A1A1AA] mt-0.5">
              javascript.quirks.dpdns.org
            </div>
          </div>
          <div className="h-8 w-8 rounded-lg bg-[#E5E5DF] dark:bg-[#27272A] text-[#D97706] dark:text-[#F59E0B] flex items-center justify-center group-hover:bg-[#D97706] dark:group-hover:bg-[#F59E0B] group-hover:text-white dark:group-hover:text-[#121214] transition-all shrink-0">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </a>
      </div>

      {/* Empty bottom spacer to keep center aligned */}
      <div className="w-full max-w-md mx-auto h-8" />
    </div>
  );
}
