import React from 'react';

const OurExpertise = () => {
  const cardItems = [
    {
      title: 'Web Development',
      description:
        'We make custom Mobile Apps and Websites for your Startups, Enterprises & Mid-Scale Businesses.',
    },
    {
      title: 'Mobile App Development',
      description:
        'The world cant live without mobile and web applications in this day and age. Everything is digitized, from booking cabs to ordering food to make bank transactions. Thanks to the efficient frameworks that provide a seamless user experience. One such robust frontend library is React.',
    },
    {
      title: 'UI/UX Design',
      description:
        'The world cant live without mobile and web applications in this day and age. Everything is digitized, from booking cabs to ordering food to make bank transactions. Thanks to the efficient frameworks that provide a seamless user experience. One such robust frontend library is React.',
    },
    {
      title: 'Digital Marketing',
      description:
        'The world cant live without mobile and web applications in this day and age. Everything is digitized, from booking cabs to ordering food to make bank transactions. Thanks to the efficient frameworks that provide a seamless user experience. One such robust frontend library is React.',
    },
    {
      title: 'Branding',
      description:
        'The world cant live without mobile and web applications in this day and age. Everything is digitized, from booking cabs to ordering food to make bank transactions. Thanks to the efficient frameworks that provide a seamless user experience. One such robust frontend library is React.',
    },
    {
      title: 'SEO',
      description:
        'The world cant live without mobile and web applications in this day and age. Everything is digitized, from booking cabs to ordering food to make bank transactions. Thanks to the efficient frameworks that provide a seamless user experience. One such robust frontend library is React.',
    },
  ];

  return (
    <main>
      <div className='w-10/12 mx-auto m-10 w-10/12'>
        <section className='text-right mb-3'>
          <p className='text-yellow-400 font-semibold tracking-widest font-family'>
            TECHNOLOGIES
          </p>
          <p className='font-family text-lg'>We are expert in</p>
        </section>

        {/* cards section */}
        <section className='grid md:grid-cols-3 gap-8'>
          {cardItems.map((items, index) => (
            <div key={index} className='shadow-lg p-6'>
              <p className='text-yellow-400 tracking-wide font-family'>
                {items.title}
              </p>
              <p className='text-gray-500 text-sm pt-3 tracking-wide'>
                {items.description}
              </p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default OurExpertise;
