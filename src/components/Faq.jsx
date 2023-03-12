import React from "react";
import mockup from "../assets/img/mockup.png";

const Faq = () => {
  return (
    <div className="pad">
      <section class="text-gray-600 body-font grid lg:grid-cols-2 gap-3 ">
        <div className="h-full flex flex-col justify-center">
          <h1 className="bold text-3xl mb-6">
            Start the journey to reach your financial goals today.
          </h1>
          <div class="container flex flex-wrap">
            <div class="flex relative pb-10 sm:items-center md:w-2/3">
              <div class="flex-shrink-0 w-12 h-12 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative title-font font-medium text-sm">
                1
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                    Download the mobile app
                  </h2>
                  <p class="leading-relaxed">
                    Get our official mobile application from Google Play Store
                    or Apple's App Store.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-10 sm:items-center md:w-2/3">
              <div class="flex-shrink-0 w-12 h-12 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative title-font font-medium text-sm">
                2
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                    Create a free account
                  </h2>
                  <p class="leading-relaxed">
                    Sign up for an account with your name, email and phone
                    number.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-10 sm:items-center md:w-2/3">
              <div class="flex-shrink-0 w-12 h-12 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative title-font font-medium text-sm">
                3
              </div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                    Add a payment method
                  </h2>
                  <p class="leading-relaxed">
                    Using your debit card, bank account, QR code, perform your
                    first transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={mockup} alt="phone mockup" />
        </div>
      </section>
    </div>
  );
};

export default Faq;
