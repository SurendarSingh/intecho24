import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='pattern mx-auto flex min-h-screen flex-col items-center bg-slate-900 px-6'>
      <nav className='flex w-full max-w-7xl flex-row items-center justify-between py-6'>
        <Image
          className='h-16 w-auto sm:h-24'
          src='/annauniv.png'
          alt='annauniv'
          width={100}
          height={100}
        />
        <Image
          className='h-16 w-auto sm:h-24'
          src='/iea.png'
          alt='iea'
          width={100}
          height={100}
        />
        <Image
          className='h-16 w-auto sm:h-24'
          src='/mit75.png'
          alt='mit75'
          width={100}
          height={100}
        />
      </nav>

      <div className='flex flex-col items-center justify-center space-y-5 px-4 py-12 text-center md:px-8'>
        <div className='flex w-full flex-col items-center justify-center overflow-hidden'>
          <h1 className='bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-6xl font-extrabold uppercase text-transparent md:text-9xl'>
            Intecho 2024
          </h1>
        </div>

        <div className='mx-auto mb-10 flex max-w-4xl flex-col items-center justify-center p-4'>
          <h1 className='relative z-10 bg-gradient-to-b from-neutral-200 to-white bg-clip-text text-center font-sans text-2xl font-bold text-transparent md:text-3xl lg:text-5xl'>
            National Level Technical Symposium
          </h1>
          <p className='text-md mx-auto my-2 mt-4 max-w-xl text-base font-normal text-neutral-400 md:text-xl'>
            by Department of Instrumentation Engineering, MIT Campus
            <br />
            Anna Univeristy
          </p>
        </div>
        <span className='z-30 mx-auto inline-flex w-fit items-center justify-center gap-x-3 rounded-full border border-transparent bg-neutral-300 bg-gradient-to-tl from-blue-600 to-violet-600 px-2 py-1 text-center text-base font-medium text-white shadow-lg shadow-transparent hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-800 md:px-6 md:py-3 md:text-xl'>
          16 & 17 March 2024
        </span>
      </div>
    </div>
  );
};

export default Hero;
