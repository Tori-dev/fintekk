import React from 'react'
import payments from '../assets/img/payments.png'
import investments from '../assets/img/investments.png'
import savings from '../assets/img/savings.png'

const Services = () => {
  return (
    <div className="bg-grey bg-opacity-5 py-20">
      <div className="pad">
        <div className="text-center">
          <h2 className="text-grey-1 text-2xl">OUR SERVICES</h2>

          <p className="text-xl max-w-[750px] mx-auto">
            We help individuals become more flexible and responsible with their
            finances and handle payments smooth and easy.{" "}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 my-16 gap-3">
          <div className="p-3">
            <img className="mx-auto" src={payments} alt="payments" />
            <div className="text-center mt-6 max-w-[320px] mx-auto">
              <h2 className="bold text-xl">Easy Payments</h2>
              <p>
                Grow your money by investing in pre-vetted investment
                opportunities.
              </p>
            </div>
          </div>
          <div className="p-3">
            <img className="mx-auto" src={investments} alt="investments" />
            <div className="text-center mt-6 max-w-[320px] mx-auto">
              <h2 className="bold text-xl">Investment</h2>
              <p>
                Build a dedicated savings faster on your terms automatically or
                manually.
              </p>
            </div>
          </div>
          <div className="p-3">
            <img className="mx-auto" src={savings} alt="savings" />
            <div className="text-center mt-6 max-w-[320px] mx-auto">
              <h2 className="bold text-xl">Fixed Savings</h2>
              <p>
                Stress-free payment for all transactions that you do at any
                time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services