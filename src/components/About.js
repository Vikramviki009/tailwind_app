import React from 'react';

const About = () => {
  return (
    <main className='pink-wrapper'>
      <div className='w-10/12 mx-auto py-14 w-11/12 md:w-10/12'>
        <div className='md:w-7/12'>
          <section>
            <p className='text-yellow-400 font-semibold tracking-widest font-family'>
              WHO WE ARE
            </p>
          </section>
          <section className='font-family text-lg tracking-wide font-semibold text-gray-600'>
            <p>
              We make custom Mobile Apps and Websites for your Startups,
              Enterprises & Mid-Scale Businesses.
            </p>
          </section>
          <section className='text-gray-500 text-sm pt-6 tracking-wide'>
            <p>
              The world can't live without mobile and web applications in this
              day and age. Everything is digitized, from booking cabs to
              ordering food to make bank transactions. Thanks to the efficient
              frameworks that provide a seamless user experience. One such
              robust frontend library is React.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
