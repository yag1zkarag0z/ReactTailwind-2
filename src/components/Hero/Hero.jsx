import React from 'react';
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section className='relative overflow-hidden text-white'>
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,223,154,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_28%)]' />
      <div className='mx-auto flex min-h-[calc(100vh-6rem)] max-w-[1240px] items-center px-4 py-16'>
        <div className='w-full rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-14'>
          <h1 className='mx-auto max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl'>
            Grow with data.
          </h1>
          <div className='mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2'>
            <p className='text-xl font-medium text-slate-300 sm:text-2xl md:text-5xl'>
            Fast, flexible financing for
          </p>
          <ReactTyped
            className='text-xl font-semibold text-[#00df9a] sm:text-2xl md:text-5xl'
            strings={['BTB', 'BTC', 'SaaS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          </div>
          <p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg md:text-xl'>
            Monitor your data analytics to increase revenue for BTB, BTC, and SaaS platforms with a cleaner workflow and stronger decisions.
          </p>
          <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <button className='rounded-full bg-[#00df9a] px-8 py-3 font-semibold text-black shadow-[0_0_40px_rgba(0,223,154,0.22)] transition hover:-translate-y-0.5 hover:bg-[#17e6a5]'>
              Get Started
            </button>
            <button className='rounded-full border border-white/15 bg-white/5 px-8 py-3 font-semibold text-white transition hover:bg-white/10'>
              View Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
