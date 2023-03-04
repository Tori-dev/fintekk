import React from "react";
import appstore from "../assets/img/appstore.svg";
import playstore from "../assets/img/playstore.svg";
import star from "../assets/img/star.svg";
import fullstar from "../assets/img/fullstar.svg";
import mouse from "../assets/img/mouse.svg";

function Banner() {
  return (
    <section className="bg-primary min-h-[80vh] flex items-center">
      <div className="text-white pad my-auto">
        <div className="max-w-[500px]">
          <h1 className="text-3xl lg:text-[2.5rem]  bold tracking-wider lg:leading-[2.7rem] ">
            #1 Global Neobank For Remote workers & Digital Professionals
          </h1>
          <p className="my-7">
            Open USD, EUR, & GBP Bank Accounts for free & spend with the fintekh
            Mastercard.
          </p>

          {/* APP / PLAYSTORE LINKS */}
          <div className="flex flex-col items-start md:flex-row gap-3 md:gap-5 md:items-center">
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

          {/* RATING */}
          <div className="flex my-10 items-center">
            <img src={mouse} alt="img" />
            <span className="h-20 w-[1px] bg-grey rounded-full mx-4"></span>
            <span>
              <span className="flex items-center gap-4 tracking-wider">
                <h2 className="bold">Trusted Users</h2>
                <span className="h-1 w-14 bg-accent rounded-full"></span>
              </span>
              <span className="flex items-center gap-2 my-2">
                <img className="w-5" src={fullstar} alt="star rating" />
                <img className="w-5" src={fullstar} alt="star rating" />
                <img className="w-5" src={fullstar} alt="star rating" />
                <img className="w-5" src={fullstar} alt="star rating" />
                <img className="w-5" src={star} alt="star rating" />
              </span>
              <p className="text-grey">Rated 4.5 by 100K+ Customers</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
