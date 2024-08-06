import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main>
      <nav className="flex justify-between items-center py-3 px-12 cursor-pointer mb-2 relative">
        <section className="font-bold text-lg">
          <i className="fa-brands fa-accusoft"></i>
        </section>

        <section className="sm:hidden text-lg">
          <i onClick={toggleMenu} className="fa-solid fa-bars"></i>
        </section>

        <section className="flex text-gray-600 text-sm items-center hidden sm:flex">
          <div className="hover:animate-spin">About</div>
          <div className="px-3 hover:animate-ping">Services</div>
          <div className="pr-3 hover:animate-pulse">Products</div>
          <div className="hover:animate-bounce">Career</div>
          <div className="px-3 hover:animate-wiggle">Testimonials</div>
          <div className="hover:animate-spin">
            <button className="bg-yellow-400 rounded text-white py-1 px-2">
              Contact
            </button>
          </div>
        </section>
      </nav>

      {/* hero section */}
      <div className="grid grid-cols-12 w-11/12 md:w-10/12 mx-auto m-6">
        <section className="col-span-12 md:col-span-6 flex flex-col justify-center">
          <p className="font-family tracking-wide text-3xl md:text-5xl font-extrabold">
            Truffaut gentrify street art, cardigan typewriter.
          </p>
          <p className="text-gray-500 hidden md:block text-sm pt-8 tracking-wide">
            Next level poke scenester hella seitan disrupt meggings gluten-free
            four dollar.scenester hella seitan disrupt meggings gluten-free four
            dollar.
          </p>
        </section>
        <section className="col-span-12 md:col-span-6">
          <img src="https://media.istockphoto.com/photos/smartphone-in-perspective-mockup-front-side-with-white-screen-picture-id1210411694?k=20&m=1210411694&s=612x612&w=0&h=yrW_Yb-WCIBrlOsm9Atb_OgnL7s5OwVjkZeZfNfjvP4=" />
        </section>
      </div>

      {/* sidebar */}
      {isMenuOpen ? (
        <div className="sidebar-open sidebar">
          <div className="sidebar text-white">
            <div className="flex justify-between items-center py-3 px-12 cursor-pointer mb-2 relative">
              <section className="sm:hidden text-lg">
                <i
                  onClick={() => toggleMenu(false)}
                  className="fa-solid fa-times absolute right-4"
                ></i>
              </section>
            </div>

            <div>
              <div className="text-center text-2xl font-bold mb-6 cursor-pointer">
                Menu
              </div>
              <div className="text-center text-sm cursor-pointer border-b pb-2">
                About
              </div>
              <div className="text-center text-sm py-4 cursor-pointer border-b pb-2 mb-4">
                Services
              </div>
              <div className="text-center text-sm cursor-pointer border-b pb-2">
                Products
              </div>
              <div className="text-center text-sm py-4 cursor-pointer border-b pb-2 mb-4">
                Career
              </div>
              <div className="text-center border-b pb-2 text-sm cursor-pointer">
                Testimonials
              </div>
              <div className="text-center text-sm py-4 cursor-pointer border-b pb-2">
                Contact
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="sidebar-close sidebar"></div>
      )}
    </main>
  );
};

export default Header;
