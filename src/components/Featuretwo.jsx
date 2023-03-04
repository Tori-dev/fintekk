import React from "react";
import feat from "../assets/img/feat.png"
import feat1 from "../assets/img/feat1.png"
import appstore from "../assets/img/appstore.svg";
import playstore from "../assets/img/playstore.svg";
import avatar1 from "../assets/img/avatar-1.jpg";
import avatar2 from "../assets/img/avatar-3.jpg";

function Featuretwo() {
  return (
    <div className="pad">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-grey-1 rounded-3xl p-6 py-10">
          <img className="max-h-[22rem]" src={feat} alt="feat" />
          <div className="text-center mt-6 px-12">
            <h1 className="bold text-[1.6rem] tracking-wider ">
              Cash to family & friends
            </h1>
            <p>
              Who remember long account numbers anymore? Just use Fintekh pay
              $tag.
            </p>
          </div>
        </div>
        <div className="bg-grey-1 rounded-3xl p-6 py-10">
          <img className="max-h-[22rem] mx-auto" src={feat1} alt="feat1" />
          <div className="text-center mt-6 px-12 bg-grey-1 rounded-3xl">
            <h1 className="bold text-[1.6rem] tracking-wider">
              Get paid by foriegn employers
            </h1>
            <p>
              Freelancer, Remote worker or Corporate employee? Get paid fast and
              securely!
            </p>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
       
      <section class="text-grey body-font">
        <div class="container px-5 py-8 mx-auto">
          <h1 class="text-3xl font-medium title-font text-primary mb-6 text-center">Testimonials</h1>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-100 p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                <a class="inline-flex items-center">
                  <img alt="testimonial" src={avatar1} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-primary">Holden Caulfield</span>
                    <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-100 p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                <a class="inline-flex items-center">
                  <img alt="testimonial" src={avatar2} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-primary">Jener Kamu</span>
                    <span class="text-gray-500 text-sm">DESIGNER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
       


      {/* CTA */}
      <div className="mt-12 p-7 md:p-16 rounded-3xl flex justify-center items-center bg-cta bg-center text-white">
        <div className="text-center max-w-[40rem]">
          <h1 className="bold text-2xl tracking-wider">
            What are you waiting for? Download the Fintekh app & get started
            now!
          </h1>
          {/* APP / PLAYSTORE LINKS */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 md:items-center md:justify-center items-center mt-5">
            <a href="#">
              <div className="bg-white text-primary rounded-full p-2 cursor-pointer px-7 flex gap-4">
                <img src={appstore} alt="appstore logo" />
                <span>
                  <p>Available on</p>
                  <h2 className="bold">App Store</h2>
                </span>
              </div>
            </a>
            <a href="#">
              <div className="bg-white text-primary rounded-full p-2 cursor-pointer px-7 flex gap-4">
                <img src={playstore} alt="playstore logo" />
                <span>
                  <p>Available on</p>
                  <h2 className="bold">Play Store</h2>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featuretwo;
