import React, { useState } from "react";
import { Title } from "./";

import { validate, ConfirmationModal } from "./utils.jsx";


const svg = (
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

const Contact = () => {
  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  // State for managing the modal
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsOpen(true);

  // Function to close the modal
  const closeModal = () => setIsOpen(false);

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form Submit function
  const formSubmit = async (e) => {
    e.preventDefault();
    openModal(); // Open the modal when the form is submitted
  };

  // Form Submit function
  const confirmSubmit = async (e) => {
    closeModal();
    // Reset form status
    setFormStatus(null);

    if (validate(query)) {
      setIsLoading(true);
      const formData = new FormData();
      Object.entries(query).forEach(([key, value]) => {
        formData.append(key, value);
      });

      try {
        await fetch(
          "https://getform.io/f/3fd4df01-8ca6-46d9-911b-b361258db202",
          {
            method: "POST",
            body: formData,
          }
        );

        setFormStatus("Thank you for contacting me! I will get back to you as soon as I can.");
        setQuery({ name: "", email: "", message: "" });
      } catch (error) {
        setFormStatus("Failed to submit the form. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    } else {
      setFormStatus(
        "Form submission failed. Please ensure all fields are valid."
      );
    }
  };

  return (
    <div className="mb-10 mx-auto">
      <div className="flex flex-col items-center md:items-start">
        <Title svg={svg} title={"Work with me"} />
        <form className="flex flex-col w-full md:w-96" onSubmit={formSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
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
            required
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
            required
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
        <ConfirmationModal
          isOpen={isOpen}
          closeModal={closeModal}
          confirmSubmit={confirmSubmit}
          formStatus={formStatus}
        />
      </div>
    </div>
  );
};

export default Contact;
