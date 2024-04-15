import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const ContactUs = () => {
  return (
    <div className=" mx-auto max-w-5xl my-5 flex flex-col">
      <h1 className="text-4xl text-[#00008B] font-bold mb-3 my-7">
        Contact Us
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-x-20 gap-y-10">
        <div className="flex flex-col justify-center px-16 py-10">
          <div>
            <div className=" flex justify-center">
              <FaPhoneAlt fill="#CC5500" />
            </div>
            <h3 className="text-center font-bold text-lg">Call Us Today</h3>
            <p className="text-[#CC5500] text-center"> +254 71-362-2228</p>
          </div>
        </div>
        <div className="flex flex-col justify-center px-16 py-10 ">
          <div>
            <div className=" flex justify-center">
              <MdEmail fill="#CC5500" />
            </div>
            <h3 className="text-center font-bold text-lg">Email Us On</h3>
            <p className="text-[#CC5500] text-center"> move@safemovers.co.ke</p>
          </div>
        </div>
        <div className="flex flex-col justify-center px-16 py-10 ">
          <div>
            <div className=" flex justify-center">
              <FaLocationDot fill="#CC5500" />
            </div>
            <h3 className="text-center font-bold text-lg">Visit Us Today</h3>
            <p className="text-[#CC5500] text-center">
              {' '}
              Muringa Road, Kilimani, <br /> Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>
      <div className="my-14">
        <h1 className="text-4xl font-bold text-[#00008B]">Write to Us</h1>
        <form className="mt-8 flex flex-col">
          <div className="flex flex-col sm:flex-row mb-12 gap-x-24">
            <div className="w-1/2 flex gap-y-12 flex-col">
              <input
                type="text"
                className="bg-gray-200 max-w-full mt-2 p-2 h-14 focus:outline-none focus:bg-white"
                placeholder="Name"
              />
              <input
                type="email"
                className="bg-gray-200 max-w-full mt-2 p-2 h-14 focus:outline-none focus:bg-white"
                placeholder="Email"
              />
              <input
                type="tel"
                className="bg-gray-200 max-w-full mt-2 p-2 h-14 focus:outline-none focus:bg-white"
                placeholder="Phone Number"
              />
              <textarea
                className="bg-gray-200 max-w-full mt-2 p-2 focus:outline-none focus:bg-white"
                placeholder="Message"
                rows={5}
              />
              <div className="mt-4">
                <input
                  type="checkbox"
                  id="terms-checkbox"
                  className="mr-2 border-black rounded text-[#00008B] shadow-xl focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <label htmlFor="terms-checkbox">
                  Agree to the terms and conditions of our Privacy Policy
                </label>
              </div>
              <button className="mt-4 bg-[#00008B] text-white w-40 py-4 px-12 hover:bg-[#CC5500] focus:outline-none">
                Submit
              </button>
            </div>
            <div className="flex sm:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4526.727059348421!2d36.83625187510637!3d-1.2704792529466724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17bc40a2a929%3A0x80a1c1147ca35909!2sSafe%20Movers%20Kenya!5e0!3m2!1sen!2ske!4v1711714375125!5m2!1sen!2ske"
                width="600"
                height="450"
                style={{ border: '0' }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
