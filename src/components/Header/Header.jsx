import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-[#000300]/80 backdrop-blur-xl'>
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <a href='#' className='shrink-0 text-xl sm:text-2xl font-semibold tracking-[0.28em] text-white'>
          YAGIZKARAGOZ
        </a>

        <ul className='hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 shadow-[0_20px_60px_rgba(0,0,0,0.3)]'>
          <li className='rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white'>Home</li>
          <li className='rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white'>Company</li>
          <li className='rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white'>Resources</li>
          <li className='rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white'>About</li>
          <li className='rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white'>Contact</li>
        </ul>

        <button
          onClick={handleNav}
          className='md:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur transition hover:bg-white/10'
          aria-label='Toggle navigation'
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>

        <ul
          className={
            nav
              ? 'fixed left-0 top-0 z-50 h-full w-[78%] max-w-sm border-r border-white/10 bg-[#000300]/95 p-6 text-white shadow-2xl backdrop-blur-xl ease-out duration-300'
              : 'fixed left-[-100%] top-0 z-50 h-full w-[78%] max-w-sm border-r border-white/10 bg-[#000300]/95 p-6 text-white shadow-2xl backdrop-blur-xl ease-out duration-300'
          }
        >
          <h1 className='mb-8 text-xl font-semibold tracking-[0.22em]'>YAGIZKARAGOZ</h1>

          <li className='rounded-2xl border-b border-white/10 px-2 py-4 text-slate-200 transition hover:text-white'>Home</li>
          <li className='rounded-2xl border-b border-white/10 px-2 py-4 text-slate-200 transition hover:text-white'>Company</li>
          <li className='rounded-2xl border-b border-white/10 px-2 py-4 text-slate-200 transition hover:text-white'>Resources</li>
          <li className='rounded-2xl border-b border-white/10 px-2 py-4 text-slate-200 transition hover:text-white'>About</li>
          <li className='rounded-2xl px-2 py-4 text-slate-200 transition hover:text-white'>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
