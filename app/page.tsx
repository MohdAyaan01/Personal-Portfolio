import React from 'react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Instagram from 'next-auth/providers/instagram';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const StarryBackground = () => (
  <svg className="fixed inset-0 z-[-1] w-full h-[150vh] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
        <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1"/>
      </pattern>
      <pattern id="stars1" width="200" height="200" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="1.5" fill="#fff" opacity="0.8"/>
        <circle cx="150" cy="80" r="1" fill="#fff" opacity="0.5"/>
        <circle cx="80" cy="150" r="2" fill="#fff" opacity="0.7"/>
        <circle cx="190" cy="10" r="1" fill="#fff" opacity="0.4"/>
      </pattern>
      <pattern id="stars2" width="300" height="300" patternUnits="userSpaceOnUse">
        <circle cx="50" cy="50" r="2" fill="#fff" opacity="0.6"/>
        <circle cx="250" cy="180" r="1.5" fill="#fff" opacity="0.4"/>
        <circle cx="150" cy="250" r="1" fill="#fff" opacity="0.5"/>
        <circle cx="10" cy="200" r="2" fill="#fff" opacity="0.3"/>
      </pattern>
      <pattern id="stars3" width="400" height="400" patternUnits="userSpaceOnUse">
        <circle cx="100" cy="100" r="1" fill="#fff" opacity="0.5"/>
        <circle cx="350" cy="50" r="2" fill="#fff" opacity="0.6"/>
        <circle cx="200" cy="350" r="1.5" fill="#fff" opacity="0.7"/>
        <circle cx="380" cy="280" r="1" fill="#fff" opacity="0.4"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="#050505" />
    <rect width="100%" height="100%" fill="url(#grid)" />
    <rect width="100%" height="100%" fill="url(#stars1)">
      <animateTransform attributeName="transform" type="translate" from="0 -200" to="0 0" dur="8s" repeatCount="indefinite" />
    </rect>
    <rect width="100%" height="100%" fill="url(#stars2)">
      <animateTransform attributeName="transform" type="translate" from="0 -300" to="0 0" dur="12s" repeatCount="indefinite" />
    </rect>
    <rect width="100%" height="100%" fill="url(#stars3)">
      <animateTransform attributeName="transform" type="translate" from="0 -400" to="0 0" dur="16s" repeatCount="indefinite" />
    </rect>
  </svg>
);

const MarqueeItem = ({ title, type }: { title: string, type: string }) => (
  <div className="flex items-center gap-8 mx-6 group cursor-default">
    <span className="text-[#edece8] font-black text-xl md:text-2xl tracking-[0.2em] uppercase group-hover:text-[#ff7a33] transition-colors duration-500 drop-shadow-[0_0_15px_rgba(255,122,51,0)] group-hover:drop-shadow-[0_0_15px_rgba(255,122,51,0.5)]">{title}</span>
    {type && <span className="text-gray-600 font-mono text-[10px] md:text-xs tracking-widest uppercase border border-gray-800 px-3 py-1 group-hover:border-[#ff7a33]/50 transition-colors">{type}</span>}
    <span className="text-gray-800 text-2xl font-light ml-4">/</span>
  </div>
);

const page = () => {
  return (
    <main className="min-h-screen bg-transparent text-[#edece8] font-sans selection:bg-[#ff7a33] selection:text-black overflow-x-hidden pb-20 relative">
      <StarryBackground />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 md:px-24 pt-20 relative overflow-hidden">
        {/* Massive Ambient Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff7a33]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

        <div className="w-full max-w-6xl relative z-10">
          <div className="inline-flex items-center gap-4 mb-10 group cursor-default">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#ff7a33] group-hover:w-24 transition-all duration-700"></div>
            <div className="border border-[#ff7a33]/50 text-[#ff7a33] px-5 py-2 text-xs tracking-[0.4em] font-black uppercase shadow-[0_0_15px_rgba(255,122,51,0.1)] group-hover:shadow-[0_0_30px_rgba(255,122,51,0.6)] group-hover:bg-[#ff7a33]/10 transition-all duration-500 backdrop-blur-sm">
              Full-Stack Developer
            </div>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#ff7a33] group-hover:w-24 transition-all duration-700"></div>
          </div>
          
          <h1 className="text-[6rem] md:text-[11rem] font-black leading-[0.8] tracking-tighter uppercase font-sans relative group">
            <span className="block text-[#edece8] hover:text-white transition-colors duration-500 cursor-default relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              MOHD
            </span>
            <span className="block text-transparent hover:text-white/10 transition-colors duration-500 cursor-default relative z-10" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.9)' }}>
              AYAAN
            </span>
            {/* Inner Text Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a33]/0 via-[#ff7a33]/20 to-transparent blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0"></div>
          </h1>
          
          <div className="mt-16 relative group/desc">
            <p className="text-xl md:text-3xl font-serif max-w-3xl leading-relaxed text-gray-400 font-light border-l-4 border-[#ff7a33] pl-8 group-hover/desc:border-white transition-colors duration-500">
              Architecting high-performance digital ecosystems with <span className="text-white font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">precision and speed</span>. 
              I specialize in transforming complex requirements into elegant full-stack solutions using 
              <span className="text-white"> TypeScript</span>, <span className="text-white">Next.js</span>, 
              <span className="text-[#ff7a33] font-medium"> Express</span>, and 
              <span className="text-[#ff7a33] font-medium"> PostgreSQL</span>.
            </p>
            {/* Subtle interactive glow on hover */}
            <div className="absolute -left-[2px] top-0 bottom-0 w-[4px] bg-[#ff7a33] opacity-0 group-hover/desc:opacity-100 blur-sm transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Floating Coffee ASCII Art */}
        <div className="hidden xl:block absolute right-32 top-1/2 -translate-y-1/2 text-gray-700 font-mono text-xs whitespace-pre hover:text-[#ff7a33] hover:scale-110 hover:drop-shadow-[0_0_20px_#ff7a33] transition-all duration-500 cursor-default">
{`   ( (
    ) )
  ........
  |      |]
  \\      /
   \`----'`}
          <div className="mt-4 text-[10px] tracking-[0.4em] text-center uppercase font-black">Fueled<br/>By<br/>Coffee</div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-50 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#ff7a33] uppercase font-bold">Scroll</span>
          <div className="w-[2px] h-16 bg-gradient-to-b from-[#ff7a33] to-transparent"></div>
        </div>
      </section>

      {/* Marquee Section */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <section className="py-8 border-y border-[#ff7a33]/10 bg-[#050505]/80 overflow-hidden backdrop-blur-2xl shadow-[0_0_100px_rgba(0,0,0,0.9)] relative z-20 flex w-full">
        <div 
          className="flex whitespace-nowrap flex-nowrap w-max"
          style={{ animation: 'scroll 40s linear infinite' }}
        >
          {[1, 2].map((loopIndex) => (
            <div key={loopIndex} className="flex items-center flex-nowrap shrink-0">
              <MarqueeItem title="NEURO GLOW AI" type="TYPESCRIPT" />
              <MarqueeItem title="PRO FOLIO X" type="NEXT.JS" />
              <MarqueeItem title="DIGI PODIUM" type="MERN STACK" />
              <MarqueeItem title="REACT.JS" type="FRONTEND" />
              <MarqueeItem title="NODE.JS" type="BACKEND" />
              <MarqueeItem title="POSTGRESQL" type="DATABASE" />
              <MarqueeItem title="MONGODB" type="DATABASE" />
              <MarqueeItem title="JAVA" type="LANGUAGE" />
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-40 px-6 md:px-24 max-w-6xl mx-auto flex flex-col items-center relative">
        {/* Background glow for section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[#ff7a33]/5 blur-[120px] pointer-events-none"></div>

        <div className="flex items-center gap-6 mb-8 relative z-10">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#ff7a33]"></div>
          <span className="text-[#ff7a33] text-sm font-black tracking-[0.5em] uppercase drop-shadow-[0_0_10px_#ff7a33]">Education</span>
          <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#ff7a33]"></div>
        </div>
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-800 text-center relative z-10 drop-shadow-2xl">Education</h2>
        <p className="text-2xl md:text-3xl font-serif text-gray-500 mb-24 italic font-light text-center relative z-10">My academic foundation</p>

        <div className="w-full max-w-4xl border border-white/5 bg-[#0a0a0a]/40 backdrop-blur-3xl p-12 md:p-24 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[#ff7a33]/40 hover:shadow-[0_0_80px_rgba(255,122,51,0.15)] hover:-translate-y-2 transition-all duration-700 rounded-3xl">
          {/* Intense Inner Flare */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ff7a33]/20 to-transparent blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-white/5 to-transparent blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
          
          {/* University Logo */}
          <div className="relative z-10 bg-white/5 backdrop-blur-md p-6 rounded-full mb-10 border border-white/10 group-hover:border-[#ff7a33]/50 group-hover:bg-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_50px_rgba(255,122,51,0.3)] transition-all duration-700">
            <img 
              src="/MyUni.png" 
              alt="Integral University Logo" 
              className="w-28 h-28 md:w-40 md:h-40 object-contain group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700 drop-shadow-2xl"
            />
          </div>
          
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-6 text-[#edece8] group-hover:text-white transition-colors text-center relative z-10 drop-shadow-lg">
            Integral University
          </h3>
          <p className="text-[#ff7a33] font-serif italic text-2xl md:text-3xl mb-12 relative z-10 text-center font-light drop-shadow-[0_0_10px_rgba(255,122,51,0.2)]">Bachelor of Computer Application</p>
          
          <div className="flex flex-col md:flex-row items-center gap-8 text-gray-400 font-mono text-sm uppercase tracking-[0.2em] relative z-10">
            <div className="bg-black/60 border border-white/5 px-8 py-4 rounded-lg group-hover:border-[#ff7a33]/40 group-hover:text-[#ff7a33] group-hover:shadow-[0_0_20px_rgba(255,122,51,0.1)] transition-all duration-500">
              June 2023 - May 2026
            </div>
            <div className="flex items-center gap-4 bg-black/60 border border-white/5 px-8 py-4 rounded-lg group-hover:border-white/20 transition-all duration-500">
              <span className="w-2.5 h-2.5 bg-gray-500 rounded-full group-hover:bg-[#ff7a33] group-hover:shadow-[0_0_15px_#ff7a33] transition-all"></span> 
              Lucknow, UP
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="pt-20 pb-40 px-6 md:px-24 max-w-6xl mx-auto relative">
        <div className="flex items-center gap-6 mb-8 relative z-10">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#ff7a33]"></div>
          <span className="text-[#ff7a33] text-sm font-black tracking-[0.5em] uppercase drop-shadow-[0_0_10px_#ff7a33]">Experience</span>
          <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#ff7a33]"></div>
        </div>
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-800 relative z-10 drop-shadow-2xl">Experience</h2>
        <p className="text-2xl md:text-3xl font-serif text-gray-500 mb-24 italic font-light relative z-10">Where I've honed my craft</p>

        <div className="space-y-12">
          {/* Experience Item 1 */}
          <div className="relative flex flex-col lg:flex-row gap-12 border border-white/5 bg-[#0a0a0a]/50 backdrop-blur-2xl p-12 hover:bg-white/[0.02] hover:border-[#ff7a33]/40 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-500 group overflow-hidden rounded-2xl">
            {/* Card Flare */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff7a33]/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className="w-full lg:w-1/3 relative z-10">
               <h3 className="text-4xl font-black uppercase tracking-wider text-[#edece8] group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all">Digi Podium</h3>
               <div className="bg-[#ff7a33]/10 border border-[#ff7a33]/20 inline-block px-4 py-2 mt-6 mb-6 rounded-md">
                 <p className="text-[#ff7a33] font-mono text-sm tracking-[0.2em] uppercase font-bold">Jan 2026 - Present</p>
               </div>
               <p className="text-gray-500 text-sm flex items-center gap-3 uppercase tracking-[0.2em] font-mono">
                 <span className="w-2 h-2 bg-gray-500 rounded-full group-hover:bg-[#ff7a33] group-hover:shadow-[0_0_10px_#ff7a33] transition-colors"></span> Lucknow, UP
               </p>
            </div>
            <div className="w-full lg:w-2/3 relative z-10">
              <h4 className="text-3xl font-black uppercase tracking-widest mb-8 text-white border-b border-white/10 pb-6 inline-block">MERN Stack Intern, On Site</h4>
              <ul className="list-none text-gray-400 font-serif space-y-6 leading-relaxed text-xl">
                <li className="flex items-start gap-5 group/item">
                  <span className="text-[#ff7a33] mt-1.5 group-hover/item:translate-x-2 group-hover/item:scale-125 transition-transform duration-300">▹</span>
                  <span className="group-hover/item:text-gray-200 transition-colors duration-300">Developed and Integrated REST APIs using Node.js and Express.js, improving backend data handling and performance.</span>
                </li>
                <li className="flex items-start gap-5 group/item">
                  <span className="text-[#ff7a33] mt-1.5 group-hover/item:translate-x-2 group-hover/item:scale-125 transition-transform duration-300">▹</span>
                  <span className="group-hover/item:text-gray-200 transition-colors duration-300">Built responsive UI components using React, improving user experience across multiple devices.</span>
                </li>
                <li className="flex items-start gap-5 group/item">
                  <span className="text-[#ff7a33] mt-1.5 group-hover/item:translate-x-2 group-hover/item:scale-125 transition-transform duration-300">▹</span>
                  <span className="group-hover/item:text-gray-200 transition-colors duration-300">Debugged and optimized application performance, reducing load time and improving overall efficiency.</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Experience Item 2 */}
          <div className="relative flex flex-col lg:flex-row gap-12 border border-white/5 bg-[#0a0a0a]/50 backdrop-blur-2xl p-12 hover:bg-white/[0.02] hover:border-[#ff7a33]/40 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-500 group overflow-hidden rounded-2xl">
            {/* Card Flare */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff7a33]/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className="w-full lg:w-1/3 relative z-10">
               <h3 className="text-4xl font-black uppercase tracking-wider text-[#edece8] group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all">Plasmid</h3>
               <div className="bg-[#ff7a33]/10 border border-[#ff7a33]/20 inline-block px-4 py-2 mt-6 mb-6 rounded-md">
                 <p className="text-[#ff7a33] font-mono text-sm tracking-[0.2em] uppercase font-bold">Jan 2025 - Mar 2025</p>
               </div>
               <p className="text-gray-500 text-sm flex items-center gap-3 uppercase tracking-[0.2em] font-mono">
                 <span className="w-2 h-2 bg-gray-500 rounded-full group-hover:bg-[#ff7a33] group-hover:shadow-[0_0_10px_#ff7a33] transition-colors"></span> Bangalore, KA
               </p>
            </div>
            <div className="w-full lg:w-2/3 relative z-10">
              <h4 className="text-3xl font-black uppercase tracking-widest mb-8 text-white border-b border-white/10 pb-6 inline-block">Frontend Intern, Remote</h4>
              <ul className="list-none text-gray-400 font-serif space-y-6 leading-relaxed text-xl">
                <li className="flex items-start gap-5 group/item">
                  <span className="text-[#ff7a33] mt-1.5 group-hover/item:translate-x-2 group-hover/item:scale-125 transition-transform duration-300">▹</span>
                  <span className="group-hover/item:text-gray-200 transition-colors duration-300">Developed and enhanced frontend user interface using React.js, focusing on responsive and modern UI design.</span>
                </li>
                <li className="flex items-start gap-5 group/item">
                  <span className="text-[#ff7a33] mt-1.5 group-hover/item:translate-x-2 group-hover/item:scale-125 transition-transform duration-300">▹</span>
                  <span className="group-hover/item:text-gray-200 transition-colors duration-300">Collaborated in building frontend features, improving usability and overall user experience.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-20 pb-40 px-6 md:px-24 max-w-6xl mx-auto relative">
        <div className="flex items-center gap-6 mb-8 relative z-10">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#ff7a33]"></div>
          <span className="text-[#ff7a33] text-sm font-black tracking-[0.5em] uppercase drop-shadow-[0_0_10px_#ff7a33]">Projects</span>
          <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#ff7a33]"></div>
        </div>
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-800 relative z-10 drop-shadow-2xl">Projects</h2>
        <p className="text-2xl md:text-3xl font-serif text-gray-500 mb-24 italic font-light relative z-10">Things I've built</p>

        <div className="space-y-12">
          {/* Project 1 */}
          <div className="relative flex flex-col lg:flex-row gap-12 border border-white/5 bg-[#0a0a0a]/50 backdrop-blur-2xl p-12 hover:bg-white/[0.02] hover:border-[#ff7a33]/40 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-500 group overflow-hidden rounded-2xl">
            {/* Card Flare */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff7a33]/15 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className="w-full lg:w-1/3 relative z-10">
               <h3 className="text-4xl font-black uppercase tracking-wider text-[#edece8] group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all">Neuro Glow AI</h3>
               <p className="text-[#ff7a33] font-mono text-sm tracking-[0.2em] uppercase mt-6 mb-10 font-bold bg-[#ff7a33]/10 border border-[#ff7a33]/20 inline-block px-4 py-2 rounded-md">Dec 2025 - Jan 2026</p>
               
               <Link href="https://nueroglow-front-end.onrender.com" className="inline-flex items-center gap-4 text-sm font-black tracking-[0.3em] text-white hover:text-[#0a0a0a] hover:bg-[#ff7a33] uppercase border border-white/20 hover:border-[#ff7a33] px-8 py-5 transition-all duration-300 group/btn rounded-sm hover:shadow-[0_0_30px_rgba(255,122,51,0.5)]">
                 View Project 
                 <span className="text-2xl leading-none group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform duration-300 drop-shadow-md">↗</span>
               </Link>
            </div>
            <div className="w-full lg:w-2/3 relative z-10">
              <div className="flex flex-wrap gap-4 mb-10">
                 {['TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Ollama', 'Razor Pay', 'Cloudinary'].map(tech => (
                   <span key={tech} className="text-xs font-mono uppercase tracking-[0.2em] text-gray-300 bg-black/80 px-4 py-2 border border-white/10 rounded-md group-hover:border-white/30 hover:!border-[#ff7a33] hover:!text-[#ff7a33] transition-colors cursor-default shadow-lg">{tech}</span>
                 ))}
              </div>
              <ul className="list-none text-gray-400 font-serif space-y-6 leading-relaxed text-xl">
                <li className="flex items-start gap-5 group/item">
                  <span className="text-[#ff7a33] mt-1.5 group-hover/item:translate-x-2 group-hover/item:scale-125 transition-transform duration-300">▹</span>
                  <span className="group-hover/item:text-gray-200 transition-colors duration-300">Developed an AI-Powered SaaS platform offering features such as object removal, article generation, background removal and title generation.</span>
                </li>
                <li className="flex items-start gap-5 group/item">
                  <span className="text-[#ff7a33] mt-1.5 group-hover/item:translate-x-2 group-hover/item:scale-125 transition-transform duration-300">▹</span>
                  <span className="group-hover/item:text-gray-200 transition-colors duration-300">Integrated AI APIs to enable real-time image processing and intelligent content generation and Scalable backend architecture to efficiently handle multiple user requests.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative flex flex-col lg:flex-row gap-12 border border-white/5 bg-[#0a0a0a]/50 backdrop-blur-2xl p-12 hover:bg-white/[0.02] hover:border-[#ff7a33]/40 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-500 group overflow-hidden rounded-2xl">
            {/* Card Flare */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff7a33]/15 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className="w-full lg:w-1/3 relative z-10">
               <h3 className="text-4xl font-black uppercase tracking-wider text-[#edece8] group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all">Pro Folio X</h3>
               <p className="text-[#ff7a33] font-mono text-sm tracking-[0.2em] uppercase mt-6 mb-10 font-bold bg-[#ff7a33]/10 border border-[#ff7a33]/20 inline-block px-4 py-2 rounded-md">Feb 2026 - Apr 2026</p>
               
               <Link href="https://ai-portfolio-builder-digipodium.onrender.com" className="inline-flex items-center gap-4 text-sm font-black tracking-[0.3em] text-white hover:text-[#0a0a0a] hover:bg-[#ff7a33] uppercase border border-white/20 hover:border-[#ff7a33] px-8 py-5 transition-all duration-300 group/btn rounded-sm hover:shadow-[0_0_30px_rgba(255,122,51,0.5)]">
                 View Project 
                 <span className="text-2xl leading-none group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform duration-300 drop-shadow-md">↗</span>
               </Link>
            </div>
            <div className="w-full lg:w-2/3 relative z-10">
              <div className="flex flex-wrap gap-4 mb-10">
                 {['TypeScript', 'Next.js', 'PostgreSQL', 'Gemini AI', 'Razor Pay', 'Cloudinary'].map(tech => (
                   <span key={tech} className="text-xs font-mono uppercase tracking-[0.2em] text-gray-300 bg-black/80 px-4 py-2 border border-white/10 rounded-md group-hover:border-white/30 hover:!border-[#ff7a33] hover:!text-[#ff7a33] transition-colors cursor-default shadow-lg">{tech}</span>
                 ))}
              </div>
              <ul className="list-none text-gray-400 font-serif space-y-6 leading-relaxed text-xl">
                <li className="flex items-start gap-5 group/item">
                  <span className="text-[#ff7a33] mt-1.5 group-hover/item:translate-x-2 group-hover/item:scale-125 transition-transform duration-300">▹</span>
                  <span className="group-hover/item:text-gray-200 transition-colors duration-300">Engineered an Ai-powered portfolio builder that generates scalable, production-ready portfolio websites from structured user data.</span>
                </li>
                <li className="flex items-start gap-5 group/item">
                  <span className="text-[#ff7a33] mt-1.5 group-hover/item:translate-x-2 group-hover/item:scale-125 transition-transform duration-300">▹</span>
                  <span className="group-hover/item:text-gray-200 transition-colors duration-300">Built role-based customization, dynamic theming system, secure authentication and payment integration to enable premium feature access.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-20 pb-40 px-6 md:px-24 max-w-6xl mx-auto relative flex flex-col items-center">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[#ff7a33]/5 blur-[120px] pointer-events-none"></div>

        <div className="flex items-center gap-6 mb-6 relative z-10">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#ff7a33]"></div>
          <span className="text-[#ff7a33] text-sm font-black tracking-[0.5em] uppercase drop-shadow-[0_0_10px_#ff7a33]">Contact</span>
          <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#ff7a33]"></div>
        </div>
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a33] via-white to-[#0077b5] relative z-10 drop-shadow-2xl text-center">Contact</h2>
        <p className="text-2xl md:text-3xl font-serif text-gray-500 mb-24 italic font-light relative z-10 text-center">Let's build something epic</p>

        <div className="relative w-full max-w-6xl group">
          {/* Animated Glow Border Effect */}

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto relative z-10">
            {/* GitHub */}
            <div className="relative group/card">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff7a33]/20 to-[#ff4d00]/20 rounded-3xl blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
              <Link href="https://github.com/MohdAyaan01" target="_blank" rel="noopener noreferrer" className="group relative bg-[#030303]/90 backdrop-blur-3xl p-10 border border-white/10 rounded-3xl overflow-hidden hover:border-[#ff7a33]/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl flex flex-col items-center text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff7a33]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 bg-white/5 p-6 rounded-2xl mb-6 group-hover:bg-[#ff7a33]/10 transition-colors duration-500">
                <GithubIcon className="w-10 h-10 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-500" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-[0.2em] mb-3 text-white">GitHub</h3>
              <p className="text-gray-500 font-mono text-xs tracking-widest uppercase mb-6">@MohdAyaan</p>
              <div className="flex items-center gap-3 text-[#ff7a33] font-black text-[10px] tracking-[0.4em] uppercase border border-[#ff7a33]/30 px-6 py-3 rounded-full group-hover:bg-[#ff7a33] group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(255,122,51,0)] group-hover:shadow-[0_0_30px_rgba(255,122,51,0.4)]">
                Explore <ExternalLink className="w-3 h-3" />
              </div>
              </Link>
            </div>

            {/* LinkedIn */}
            <div className="relative group/card">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0077b5]/20 to-[#00a0dc]/20 rounded-3xl blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
              <Link href="https://www.linkedin.com/in/mohd-ayaan-355305342?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="group relative bg-[#030303]/90 backdrop-blur-3xl p-10 border border-white/10 rounded-3xl overflow-hidden hover:border-[#0077b5]/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl flex flex-col items-center text-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0077b5]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 bg-white/5 p-6 rounded-2xl mb-6 group-hover:bg-[#0077b5]/10 transition-colors duration-500">
                  <LinkedinIcon className="w-10 h-10 text-gray-400 group-hover:text-[#0077b5] group-hover:scale-110 transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-[0.2em] mb-3 text-white">LinkedIn</h3>
                <p className="text-gray-500 font-mono text-xs tracking-widest uppercase mb-6">Mohd Ayaan</p>
                <div className="flex items-center gap-3 text-[#0077b5] font-black text-[10px] tracking-[0.4em] uppercase border border-[#0077b5]/30 px-6 py-3 rounded-full group-hover:bg-[#0077b5] group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(0,119,181,0)] group-hover:shadow-[0_0_30px_rgba(0,119,181,0.4)]">
                  Connect <ExternalLink className="w-3 h-3" />
                </div>
              </Link>
            </div>       
          </div>
        </div>
      </section>

    </main>
  );
};

export default page;
