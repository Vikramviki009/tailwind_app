import React from "react";

const Careers = () => {
  return (
    <main className="border pink-wrapper">
      <div className="mx-auto m-8 w-11/12 md:w-10/12">
        <section className="text-center">
          <p className="text-yellow-400 font-semibold tracking-widest font-family pb-2">
            CAREERS
          </p>
          <p className="text-xs text-gray-500 tracking-widest w-7/12 mx-auto">
            We have the talent and experience to make you vision. With out
            strengent rules for development combined with extensive quality
            metrics.
          </p>
        </section>

        {/* steps section */}
        <section className="md:flex mt-8">
          <div className="md:w-1/2 w-7/12 mx-auto flex items-center md:block">
            <p className="text-yellow-500 bg-white p-2 md:shadow-lg rounded-l-md">
              Step 1
            </p>
            <p className="text-gray-400 p-2">Step 2</p>
            <p className="text-gray-400 p-2">Step 3</p>
            <p className="text-gray-400 p-2">Step 4</p>
          </div>

          <div className="md:w-1/2 w-7/12 mx-auto">
            <p className="text-gray-500 text-sm tracking-wide bg-white p-4">
              We have the talent and experience to make you vision. With out
              strengent rules for development combined with extensive quality We
              have the talent and experience to make you vision. With out
              metrics. strengent rules for development combined with extensive
              quality metrics.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Careers;
