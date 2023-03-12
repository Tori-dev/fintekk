import React from 'react'
import bloomberg from '../assets/img/bloomberg.png'
import CNBC from '../assets/img/CNBC.png'
import Forbes from '../assets/img/Forbes.png'
import Quartz from '../assets/img/Quartz.png'
import stripe from '../assets/img/stripe.png'

const Content = () => {
  return (
    <div className="pad">
      <div className="flex justify-around items-center flex-wrap gap-3 my-4">
        <img
          className="w-[3rem] md:w-[5rem] lg:w-[6rem]"
          src={bloomberg}
          alt="bloomberg"
        />
        <img
          className="w-[3rem] md:w-[5rem] lg:w-[6rem]"
          src={CNBC}
          alt="CNBC"
        />
        <img
          className="w-[3rem] md:w-[5rem] lg:w-[6rem]"
          src={Forbes}
          alt="Forbes"
        />
        <img
          className="w-[3rem] md:w-[5rem] lg:w-[6rem]"
          src={Quartz}
          alt="Quartz"
        />
        <img
          className="w-[3rem] md:w-[5rem] lg:w-[6rem]"
          src={stripe}
          alt="stripe"
        />
      </div>
      <div className="bg-primary text-white py-12 px-12 rounded-3xl max-w-[800px] mx-auto my-12">
        <h1 className="text-2xl text-center lg:text-4xl">
          More than 10,000 active users trust Fintekk
        </h1>
      </div>

 
     
    </div>
  );
}

export default Content