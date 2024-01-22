import React, { FormEvent, useState, useRef, forwardRef } from 'react';
import emailjs from '@emailjs/browser';
import { IoClose, IoNewspaperOutline } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { Tooltip } from 'flowbite-react';
export default forwardRef(function Contact(
  { close, handleClose }: { close: boolean; handleClose: () => void },
  ref
) {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const form = useRef(null);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log('Delayed for 1 second.');
      setLoading(false);
      setSent(true);
    }, 1000);

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_ID
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div
      className={`${
        close ? 'hidden' : 'fixed'
      } z-50 flex w-full items-center justify-center overflow-hidden bg-black-rgba shadow-2xl lg:h-full`}
    >
      <div className="fixed bottom-0 top-0 inline-flex w-full flex-col-reverse overflow-y-scroll rounded-xl lg:m-16 lg:h-[80%] lg:w-[90vw] lg:max-w-[89.4rem] lg:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center bg-gray-400 px-20 ">
          <h2 className="mb-5 pt-5 text-3xl font-semibold text-black">
            Hello!
          </h2>
          <p className="mb-6 px-0 text-center text-base leading-relaxed text-gray-800 sm:px-24 sm:text-lg md:text-xl lg:mb-12 lg:px-0 lg:text-left lg:text-lg xl:text-xl">
            I appreciate you checking out my website! I'm always looking for new
            opportunities to learn and grow as a developer. If you have any
            questions or would like to get in touch, please feel free to send me
            an email!
          </p>
          <div className="mb-4 flex h-[2.8rem] gap-4">
            <a href="https://www.linkedin.com/in/tuan-dang-uf/" target="_blank">
              <FaLinkedin
                size="2.8rem"
                className="transition-colors duration-300 hover:cursor-pointer hover:text-gray-700"
              />
            </a>
            <a href="https://github.com/tuan-dang-0" target="_blank">
              <FaGithub
                size="2.8rem"
                className="transition-colors duration-300 hover:cursor-pointer hover:text-gray-700"
              />
            </a>
            <Tooltip content="Resume">
              <a
                href="https://drive.google.com/drive/folders/1RzRTRVRvF-UMXxIY1WRN5U0jl-RmJHCg?usp=drive_link"
                target="_blank"
              >
                <IoNewspaperOutline
                  size="2.8rem"
                  className="transition-colors duration-300 hover:cursor-pointer hover:text-gray-700"
                />
              </a>
            </Tooltip>
          </div>
        </div>
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="relative w-full flex-col items-center justify-center bg-primary-800 px-20 xl:px-36"
        >
          <IoClose
            className="absolute right-5 top-5 justify-self-end text-3xl text-white transition-colors duration-300 hover:cursor-pointer hover:text-gray-500"
            onClick={handleClose}
          />
          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-10 flex h-full w-full flex-col justify-center gap-10 py-10 text-sm text-white"
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm lg:text-base">Name*</label>
              <input
                type="text"
                name="user_name"
                required
                className="border-0 border-b-2 border-gray-400 bg-transparent pb-1 focus:border-gray-100 focus:outline-none"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm lg:text-base">Email*</label>
              <input
                type="email"
                name="user_email"
                required
                className="border-0 border-b-2 border-gray-400 bg-transparent pb-1 focus:border-gray-100 focus:outline-none"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm">Message*</label>
              <textarea
                required
                name="message"
                rows={4}
                className="border-0 border-b-2 border-gray-400 bg-transparent focus:border-gray-100 focus:outline-none"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              {(sent && (
                <div className="rounded-lg border-2 px-4 py-2 transition-colors duration-500 hover:cursor-not-allowed hover:bg-primary-400 sm:text-lg lg:px-6 lg:py-4">
                  Sent!
                </div>
              )) ||
                (loading && <div className="loader"></div>) || (
                  <button
                    type="submit"
                    value="Send Email"
                    className="rounded-lg border-2 px-4 py-2 transition-colors duration-500 hover:cursor-pointer hover:bg-primary-400 sm:text-lg lg:px-6 lg:py-4"
                  >
                    Send Email
                  </button>
                )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});
