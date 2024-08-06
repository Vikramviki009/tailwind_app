import React from "react";

const Testimonial = () => {
  return (
    <main className="pink-wrapper">
      <div className="w-11/12 md:w-10/12 mx-auto text-center py-10">
        <section>
          <p className="text-yellow-400 font-semibold tracking-widest font-family">
            TESTIMONIALS
          </p>
          <p className="font-family text-lg tracking-wide">
            What our Client think about us
          </p>
        </section>

        {/* tailwind three cards one below the other */}
        <main className="flex relative justify-center mt-12 w-full">
          <div className="bg-white md:-mr-48 -mr-24 rounded z-40">
            <section className="bg-white rounded shadow-lg cards">
              <div className="shadow-lg p-7">
                <p className="text-gray-500 text-sm tracking-wide">
                  The world cant live without mobile and web applications in
                  this day and age. Everything is digitized, from booking cabs
                  to ordering food to make bank transactions. Thanks to the
                  efficient frameworks that provide a seamless user experience.
                  One such robust frontend library is React.
                </p>
                <p className="font-bold pt-3 hover:animate-bounce ">
                  Vikram Dabali
                </p>
              </div>
            </section>
          </div>
          <div className="bg-white testimonial-middle-card">
            <section className="h-14 bg-white w-14 rounded-full absolute -top-8 md:right-1/2 right-56"></section>
            <section className="bg-white rounded shadow-lg">
              <div className="shadow-lg p-7">
                <p className="text-gray-500 text-sm tracking-wide">
                  The world cant live without mobile and web applications in
                  this day and age. Everything is digitized, from booking cabs
                  to ordering food to make bank transactions. Thanks to the
                  efficient frameworks that provide a seamless user experience.
                  One such robust frontend library is React.
                </p>
                <p className="font-semibold pt-3">Vikram Dabali</p>
              </div>
            </section>
          </div>
          <div className="bg-white md:-ml-48 -ml-24 rounded">
            <section className="bg-white rounded shadow-lg">
              <div className="shadow-lg p-7">
                <p className="text-gray-500 text-sm tracking-wide">
                  The world cant live without mobile and web applications in
                  this day and age. Everything is digitized, from booking cabs
                  to ordering food to make bank transactions. Thanks to the
                  efficient frameworks that provide a seamless user experience.
                  One such robust frontend library is React.
                </p>
                <p className="font-semibold pt-3">Vikram Dabali</p>
              </div>
            </section>
          </div>
        </main>

        {/* <section className='h-14 bg-white w-14 rounded-full absolute top-24 right-1/2'></section>
        <section className='w-4/12 mx-auto bg-white rounded shadow-lg mt-10'>
          <div className='shadow-lg p-5'>
            <p className='text-gray-500 text-sm pt-3 tracking-wide'>
              The world cant live without mobile and web applications in this
              day and age. Everything is digitized, from booking cabs to
              ordering food to make bank transactions. Thanks to the efficient
              frameworks that provide a seamless user experience. One such
              robust frontend library is React.
            </p>
            <p className='font-semibold pt-3'>Vikram Dabali</p>
          </div>
        </section> */}
      </div>
    </main>
  );
};

export default Testimonial;
