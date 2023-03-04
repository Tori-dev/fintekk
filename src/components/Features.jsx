import React from "react";
import send from "../assets/img/send.png";
import spend from "../assets/img/spend.png";
import bank from "../assets/img/bank.png";
import mockup from "../assets/img/mockup.png";
import banksvg from "../assets/img/bank.svg";
import mastercard from "../assets/img/mastercard.svg";
import cardgif from "../assets/img/cardgif.gif";
import { CgArrowRight } from "react-icons/cg";

function Features() {
  return (
    <section className="pad">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <img src={send} alt="send" />
          <div className="text-center mt-6 px-12">
            <h1 className="bold text-[2.5rem] tracking-wider">Send</h1>
            <p>Send & receive money globally in seconds.</p>
          </div>
        </div>
        <div>
          <img src={spend} alt="spend" />
          <div className="text-center mt-6 px-12">
            <h1 className="bold text-[2.5rem] tracking-wider">Spend</h1>
            <p>A virtual Mastercard that fits your online lifestyle.</p>
          </div>
        </div>
        <div>
          <img src={bank} alt="bank" />
          <div className="text-center mt-6 px-12">
            <h1 className="bold text-[2.5rem] tracking-wider">Bank</h1>
            <p>Own multiple global accounts in your name.</p>
          </div>
        </div>
      </div>

      {/* FEATURE TWO */}
      <section>
        <div className="bg-accent text-white rounded-3xl p-8 flex items-center max-h-[32rem] overflow-hidden">
          <div className="md:w-[55%]">
            <img src={banksvg} alt="banksvg" />
            <div className="my-8">
              <h1 className="bold text-2xl">
                USD, GBP & EUR bank accounts for free
              </h1>
              <p>
                Receive payments from your employers, clients, social media
                platforms, and other businesses directly to your own foreign
                account – without hidden fees
              </p>
            </div>
            <button className="cursor-pointer flex items-center gap-2 bg-white text-primary bold py-3 px-6 rounded-lg">
              Download fintekh <CgArrowRight />
            </button>
          </div>
          <div className="hidden md:flex text-center w-[45%]">
            <img
              className="w-56 lg:w-72 xl:w-80 mx-auto"
              src={mockup}
              alt="mockup"
            />
          </div>
        </div>
      </section>

      {/* FEATURE THREE */}
        <div className="bg-primary text-white rounded-3xl p-8 flex items-center max-h-[32rem] overflow-hidden">
          <div className="md:w-[55%]">
            <img src={mastercard} alt="banksvg" />
            <div className="my-8">
              <h1 className="bold text-2xl">
                Global <br /> Mastercard
              </h1>
              <p>
                Spend worldwide with your brand new virtual or physical
                Mastercard debit card.
              </p>
            </div>
            <button className="cursor-pointer flex items-center gap-2 bg-white text-primary bold py-3 px-6 rounded-lg">
              Download fintekh <CgArrowRight />
            </button>
          </div>
          <div className="hidden md:flex text-center w-[45%]">
            <img
              className="w-56 lg:w-72 xl:w-80 mx-auto"
              src={cardgif}
              alt="card gif"
            />
          </div>
        </div>
    </section>
  );
}

export default Features;
