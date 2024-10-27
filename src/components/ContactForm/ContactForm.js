import React from 'react';

const ContactForm = () => {
  return (
    <div className="pt-[16rem]">
      <div className="container-style flex items-center justify-center">
        <div className="flex w-full max-w-[60rem] flex-col gap-[3.2rem]">
          <h2 className="font-Righteous text-[4.2rem] leading-[6rem] md:text-[6rem] md:leading-[6.6rem] md:tracking-[-2.4px]">
            Contact.
          </h2>

          <div className="flex flex-col gap-[2rem]">
            <p className="text-[1.6rem] leading-[2.8rem] text-Light_Gray">
              Get in touch if you would like to work together.
            </p>
            <p className="text-[1.6rem] leading-[2.8rem] text-Light_Gray">
              Thanks for stopping by. 🤘
            </p>
          </div>

          <form className="grid grid-cols-2 gap-[1.5rem]">
            <div className="rounded-[0.8rem] bg-[#292929] p-[1.5rem]">
              <input
                type="text"
                className="w-full bg-[transparent] text-[1.6rem] font-medium leading-[2.24rem] outline-none placeholder:text-Light_Gray"
                placeholder="Name"
                id="name"
                name="name"
                required
              />
            </div>

            <div className="rounded-[0.8rem] bg-[#292929] p-[1.5rem]">
              <input
                type="email"
                className="w-full bg-[transparent] text-[1.6rem] font-medium leading-[2.24rem] outline-none placeholder:text-Light_Gray"
                placeholder="Email"
                id="email"
                name="email"
                required
              />
            </div>

            <div className="col-span-2 rounded-[0.8rem] bg-[#292929] p-[1.5rem]">
              <textarea
                className="h-[15rem] w-full resize-y bg-[transparent] text-[1.6rem] font-medium leading-[2.24rem] outline-none placeholder:text-Light_Gray"
                placeholder="Message"
                id="message"
                name="message"
                required
              ></textarea>
            </div>

            <div className="col-span-2">
              <button
                type="submit"
                className="w-full rounded-[0.8rem] bg-[#fcfcfc] p-[1.5rem] text-center text-[1.6rem] font-semibold leading-[2.24rem] text-[#454545] transition-opacity duration-300 ease-in hover:opacity-80"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
