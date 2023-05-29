import { Modal, Button, Group } from "@mantine/core";

import React, { useState } from "react";
// utils.js
export const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const validate = (query) => {
  return (
    query.name.length > 0 &&
    validateEmail(query.email) &&
    query.message.length > 5
  );
};

export const svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
    />
  </svg>
);

export const ContactForm = ({
  formSubmit,
  handleParam,
  query,
  isLoading,
}) => {
  return (
    <>
      <form className="flex flex-col w-full md:w-96" onSubmit={formSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
        //   required
          value={query.name}
          onChange={handleParam()}
          className="p-2 bg-transparent border-2 border-black hover:border-stone-300 rounded-xl focus:outline-none dark:hover:bg-slate-100"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="type_your@email.here"
          value={query.email}
        //   required
          onChange={handleParam()}
          className="my-2 p-2 bg-transparent border-2 border-black hover:border-stone-300 rounded-xl focus:outline-none dark:hover:bg-slate-100"
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          value={query.message}
          onChange={handleParam()}
        //   required
          rows="10"
          className="p-2 mb-4 bg-transparent border-2 border-black hover:border-stone-300 rounded-xl focus:outline-none dark:hover:bg-slate-100"
        />
        <button
          id="button"
          type="submit"
          className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-xl text-white border-2 bg-black dark:border-stone-500 hover:bg-stone-600 dark:hover:bg-black dark:hover:border-white"
        >
          {isLoading ? "Submitting..." : "Contact me"}
        </button>
      </form>


    </>
  );
};


export const ValidationError = ({
    isValidationErrorOpen,
    closeValidationErrorModal,
    formStatus
}) => {
    return (
        <Modal
        opened={isValidationErrorOpen}
        onClose={closeValidationErrorModal}
        title="Something went wrong"
        centered
      >
        <p className="mb-3">{formStatus}</p>
        <Button
          onClick={closeValidationErrorModal}
          color="primary"
          className="font-normal text-center inline-block px-8 py-1 w-max text-base rounded-xl text-white border-2 bg-black dark:border-stone-500 hover:bg-stone-600 dark:hover:bg-black dark:hover:border-white"
        >
          Close
        </Button>
      </Modal>
    )
}


export const ConfirmSuccessful = ({
    isConfirmationOpen,
    closeConfirmationModal,
    formStatus
}) => {
    return (
        <Modal
        opened={isConfirmationOpen}
        onClose={closeConfirmationModal}
        title="Form Submitted Successfully"
        centered
      >
        <p className="mb-3">{formStatus}</p>
        <Button
          onClick={closeConfirmationModal}
          color="primary"
          className="font-normal text-center inline-block px-8 py-1 w-max text-base rounded-xl text-white border-2 bg-black dark:border-stone-500 hover:bg-stone-600 dark:hover:bg-black dark:hover:border-white"
        >
          Close
        </Button>
      </Modal>
    )
} 


export const ConfirmDownload = ({
    opened,
    close
}) => {
    return (
        <Modal opened={opened} onClose={close} title="Confirm Download" size="xl">
        <p className="mb-3">Are you sure you want to download the Resume?</p>
        <img
          className="mb-3"
          src="/assets/xiaokunli_snapshot.png"
          alt="Resume Snapshot"
        />
        <Group position="center">
          <Button
            className="font-normal text-center inline-block px-8 py-1 w-max text-base rounded-xl text-white border-2 bg-black dark:border-stone-500 hover:bg-stone-600 dark:hover:bg-black dark:hover:border-white"
            onClick={close}
          >
            Cancel
          </Button>
          <Button
            className="font-normal text-center inline-block px-8 py-1 w-max text-base rounded-xl text-white border-2 bg-black dark:border-stone-500 hover:bg-stone-600 dark:hover:bg-black dark:hover:border-white"
            component="a"
            href="/assets/XiaokunLi.pdf"
            download
            onClick={close}
          >
            Download
          </Button>
        </Group>
      </Modal>
    )
}
