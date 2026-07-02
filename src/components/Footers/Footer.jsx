import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='border-t border-white/10 bg-[#000300] px-4 py-6 text-white'>
      <div className='mx-auto flex max-w-[1240px] items-center justify-between gap-4'>
        <a
          href='https://www.linkedin.com/in/yagiz-karagoz-b18820358/'
          target='_blank'
          rel='noreferrer'
          className='inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white'
        >
          <FaLinkedinIn className='text-[#00df9a]' />
          LinkedIn
        </a>

        <h1 className='text-center text-lg font-semibold tracking-[0.22em] text-[#00df9a]'>
          YAGIZ KARAGOZ
        </h1>

        <p className='text-right text-sm text-slate-400'>
          Made by <span className='text-white'>Yagiz Karagoz</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
