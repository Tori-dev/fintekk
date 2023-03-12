import React from 'react'

const Footer = () => {
  return (
         
        <footer class="text-gray-600 pad">
          <div class="py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a className='text-primary-1' href='#' class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <span class="text-xl text-primary-1">Fintekk</span>
              </a>
              <p class="mt-2 text-gray-500">Fintekk is the bank that does it all. Manage everything directly and easy with fintekk</p>
            </div>
            <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium tracking-widest mb-3 bold text-primary-1">Company</h2>
                <nav class="list-none mb-10">
                  <li>
                    <a className='text-primary-1' href='#' class="text-gray-600 hover:text-gray-800">Career</a>
                  </li>
                  <li>
                    <a className='text-primary-1' href='#' class="text-gray-600 hover:text-gray-800">About Us</a>
                  </li>
                  <li>
                    <a className='text-primary-1' href='#' class="text-gray-600 hover:text-gray-800">Privacy</a>
                  </li>
                  <li>
                    <a className='text-primary-1' href='#' class="text-gray-600 hover:text-gray-800">Terms</a>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium tracking-widest mb-3 text-primary-1 bold">Services</h2>
                <nav class="list-none mb-10">
                  <li>
                    <a className='text-primary-1' href='#' class="text-gray-600 hover:text-gray-800">Payments</a>
                  </li>
                  <li>
                    <a className='text-primary-1' href='#' class="text-gray-600 hover:text-gray-800">Investments</a>
                  </li>
                  <li>
                    <a className='text-primary-1' href='#' class="text-gray-600 hover:text-gray-800">Savings Plans</a>
                  </li>
                 
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-primary-1 bold tracking-widest mb-3">Resources</h2>
                <nav class="list-none mb-10">
                  <li>
                    <a className='text-primary-1' href='#' class="text-gray-600 hover:text-gray-800">Media</a>
                  </li>
                  <li>
                    <a className='text-primary-1' href='#' class="text-gray-600 hover:text-gray-800">FAQs</a>
                  </li>
                  <li>
                    <a className='text-primary-1' href='#' class="text-gray-600 hover:text-gray-800">Help Center</a>
                  </li>
                  <li>
                    <a className='text-primary-1' href='#' class="text-gray-600 hover:text-gray-800">Security</a>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium  tracking-widest mb-3 bold text-primary-1">Contact Us</h2>
                <nav class="list-none mb-10">
                  
                  <li>
                    <a className='text-primary-1' href='https://tori-codes.vercel.app' class="text-gray-600 hover:text-gray-800">www.fintekk.com</a>
                  </li>
               
                </nav>
              </div>
            </div>
          </div>
          <div>
            <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row gap-2 justify-between">
              <p class="text-gray-500 text-center sm:text-left">© 2023 Fintekk —
                <a className='text-primary-1' href="https://tori-codes.vercel.app" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">Victory Akpofure</a>
              </p>
              <span>All Rights Reserved.</span>
            </div>
          </div>
        </footer>
         
  )
}

export default Footer