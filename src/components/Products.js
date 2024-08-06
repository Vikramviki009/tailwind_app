import React from 'react';

const Products = () => {
  return (
    <main>
      <div className='w-11/12 md:w-10/12 mx-auto m-10 grid md:grid-cols-12 gap-10'>
        <section className='col-span-6'>
          <p className='text-yellow-400 font-semibold tracking-widest font-family'>
            Products
          </p>
          <p className='text-gray-500 text-sm pt-4 tracking-wide'>
            We make custom Mobile Apps and Websites for your Startups,
            Enterprises & Mid-Scale Businesses. The world can't live without
            mobile and web applications in this day and age. Everything is
            digitized, from booking cabs to ordering food to make bank
            transactions. Thanks to the efficient frameworks that provide a
            seamless user experience. One such robust frontend library is React.
            mobile and web applications in this day and age. Everything is
            digitized, from booking cabs to ordering food to make bank
            transactions. Thanks to the efficient frameworks that provide a
            seamless user experience. One such robust frontend library is React.
          </p>
        </section>

        <section className='col-span-6'>
          <div className='text-sm flex items-center'>
            <p className='text-yellow-400 font-semibold tracking-wide text-sm mr-4 shadow-lg p-2'>
              Simple Textiles
            </p>
            <p className='font-bold text-gray-400'>Terms</p>
          </div>
          <div className='shadow-lg rounded-lg'>
            <img src='https://www.uxmatters.com/mt/archives/2020/09/images/Product-DeliveryMethods_Fig2-SDLC.png' />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Products;
