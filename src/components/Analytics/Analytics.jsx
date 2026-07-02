import React from 'react';
import Laptop from '../../assets/laptop.jpg';

const Analytics = () => {
  return (
    <section className='w-full bg-white py-20 px-4'>
      <div className='max-w-[1240px] mx-auto grid gap-12 md:grid-cols-2 md:items-center'>
        <div className='relative mx-auto w-full max-w-[560px]'>
          <div className='absolute -inset-4 -z-10 rounded-[2rem] bg-[#00df9a]/10 blur-2xl' />
          <img
            className='w-full rounded-[2rem] border border-gray-200 object-cover shadow-[0_25px_80px_rgba(0,0,0,0.12)]'
            src={Laptop}
            alt='Analytics dashboard preview'
          />
        </div>

        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-semibold tracking-[0.25em] uppercase'>
            Data analytics dashboard
          </p>
          <h2 className='mt-3 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl'>
            Manage data centrally without losing clarity.
          </h2>
          <p className='mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg'>
            Keep performance, reporting, and user activity in one place with a cleaner workflow and quicker decisions.
          </p>

          <div className='mt-8 grid gap-4 sm:grid-cols-3'>
            <div className='rounded-2xl border border-gray-200 bg-slate-50 p-4'>
              <p className='text-sm text-slate-500'>Revenue uplift</p>
              <p className='mt-2 text-2xl font-semibold text-slate-900'>+28%</p>
            </div>
            <div className='rounded-2xl border border-gray-200 bg-slate-50 p-4'>
              <p className='text-sm text-slate-500'>Faster reporting</p>
              <p className='mt-2 text-2xl font-semibold text-slate-900'>2.4x</p>
            </div>
            <div className='rounded-2xl border border-gray-200 bg-slate-50 p-4'>
              <p className='text-sm text-slate-500'>Data sources</p>
              <p className='mt-2 text-2xl font-semibold text-slate-900'>12+</p>
            </div>
          </div>

          <button className='mt-8 w-fit rounded-full bg-black px-7 py-3 font-medium text-[#00df9a] transition hover:translate-y-[-1px] hover:bg-slate-900'>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
