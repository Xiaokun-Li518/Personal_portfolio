import React from "react";
import { Title } from './'
import EmailIcon from '@mui/icons-material/Email';

const svg = <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
          />
        </svg>

const Contact = () => {
  const form = document.querySelector("form");
  function handleSubmit() {
    form.reset();
  }
  return (
    <div className="mb-10 mx-auto">
      <div className="flex flex-col items-center md:items-start">
       <Title svg={svg} title={'Work with me'} />
        <form
          action="https://getform.io/f/3fd4df01-8ca6-46d9-911b-b361258db202"
          method="POST"
          className="flex flex-col w-full md:w-4/12"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transpent border-2 border-black hover:border-stone-300 rounded-xl focus:outline-none dark:hover:bg-slate-100"
          />
          <input
            type="text"
            name="email"
            placeholder="type_your@email.here"
            className="my-2 p-2  bg-transpent border-2 border-black hover:border-stone-300 rounded-xl focus:outline-none dark:hover:bg-slate-100"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transarent border-2 border-black hover:border-stone-300 rounded-xl focus:outline-none dark:hover:bg-slate-100"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-xl text-white border-2 bg-black dark:border-stone-500 hover:bg-stone-600 dark:hover:bg-black dark:hover:border-white"
          >
            Contact me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
