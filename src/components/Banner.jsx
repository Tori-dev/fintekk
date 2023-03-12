import React from 'react'
import ios from '../assets/img/appstore.svg'
import android from '../assets/img/playstore.svg'
import herom from '../assets/img/heromobile.png'
import herod from '../assets/img/herodesktop.png'

const Banner = () => {
  return (
    <section className='pad'>
      <div className="grid md:grid-cols-2">
        <div className='h-full flex flex-col justify-center md:text-left text-center'>
          <h1 className='bold text-primary-1 text-[2.4rem] md:text-[2.8rem] lg:text-[3.5rem] xl:text-[4rem] lg:leading-tight'>Pay, Invest, Save your Cash with a single bank.</h1>
          <p className='text-xl md:text-2xl my-3'>
            Fintekk is the bank that does it all. Manage everything directly and
            easy with fintekk.
          </p>
          <button className='md:mx-0 mx-auto w-fit my-7 bg-primary text-white text-xl'>Sign Up for Free</button>
          <span className='grid lg:grid-cols-2 w-fit gap-3 md:mx-0 mx-auto mb-5'>
            <button className='border-grey flex items-center gap-3 w-fit'><img src={android} alt="playstore's logo" /> Get on Android</button>
            <button className='border-grey flex items-center gap-3 w-fit'><img src={ios} alt="appstore's logo" /> Get on iPhone</button>
          </span>
        </div>
        <div>
            <img className='hidden lg:flex' src={herod} alt="hero image" />
            <img className='lg:hidden md:mx-0 mx-auto' src={herom} alt="hero image" />
        </div>
      </div>
    </section>
  );
}

export default Banner