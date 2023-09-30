import React from "react";
import About from "./About";
import Home from "./Home";
import Heading from "./Heading";
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';


const ScrollingPage = () => {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <ul>
      <li><Link to="name1" spy={true} smooth={true} duration={800}>Name 1</Link></li>
        <li><Link to="name2" spy={true} smooth={true} duration={800}>Name 2</Link></li>
        <li><Link to="name3" spy={true} smooth={true} duration={800}>Name 3</Link></li>
        {/* Add more names as needed */}
      </ul>
      
      <Element name="name1">
        <div class="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased">
          <div class="md:w-1/3 w-full">
            <img
              class="rounded-lg shadow-lg antialiased"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            />
          </div>
          <div class="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
            <div class="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
              <div class="text-2xl text-white leading-tight">Admin1</div>
              <div class="text-normal text-gray-300 hover:text-gray-400 cursor-pointer">
                <span class="border-b border-dashed border-gray-500 pb-1">
                  Administrator
                </span>
              </div>
              <div class="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">
                Last Seen: <b>2 days ago</b>
              </div>
            </div>
          </div>
        </div>
      </Element>
     
      <Element name="name2">
        <div class="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased">
          <div class="md:w-1/3 w-full">
            <img
              class="rounded-lg shadow-lg antialiased"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            />
          </div>
          <div class="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
            <div class="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
              <div class="text-2xl text-white leading-tight">Admin1</div>
              <div class="text-normal text-gray-300 hover:text-gray-400 cursor-pointer">
                <span class="border-b border-dashed border-gray-500 pb-1">
                  Administrator
                </span>
              </div>
              <div class="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">
                Last Seen: <b>2 days ago</b>
              </div>
            </div>
          </div>
        </div>
      </Element>
     
      <Element name="name3">
        <div class="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased">
          <div class="md:w-1/3 w-full">
            <img
              class="rounded-lg shadow-lg antialiased"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            />
          </div>
          <div class="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
            <div class="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
              <div class="text-2xl text-white leading-tight">Admin1</div>
              <div class="text-normal text-gray-300 hover:text-gray-400 cursor-pointer">
                <span class="border-b border-dashed border-gray-500 pb-1">
                  Administrator
                </span>
              </div>
              <div class="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">
                Last Seen: <b>2 days ago</b>
              </div>
            </div>
          </div>
        </div>
      </Element>
      {/* Add more content sections corresponding to the names */}
    </div>
  );
};

export default ScrollingPage;
