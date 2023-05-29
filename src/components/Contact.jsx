import React, { useState } from "react";
import { Title } from "./";

import { validate, ContactForm, svg, ValidationError } from "./utils.jsx";
import { ConfirmationModal } from './';
import { Modal, Button, Group } from "@mantine/core";


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


  // State for managing the validation error modal
const [isValidationErrorOpen, setIsValidationErrorOpen] = useState(false);

// Function to open the validation error modal
const openValidationErrorModal = () => setIsValidationErrorOpen(true);

// Function to close the validation error modal
const closeValidationErrorModal = () => setIsValidationErrorOpen(false);

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
    
    if (!validate(query))
    {
      openValidationErrorModal()
      setFormStatus("Please fill out all fields and leave a valid email.")
    }
    else
    {
      openModal(); // Open the modal when the form is submitted
    }
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
        <ContactForm 
        formSubmit={formSubmit}
        handleParam={handleParam}
        query={query}
        isLoading={isLoading}
        />
        <ConfirmationModal
          isOpen={isOpen}
          closeModal={closeModal}
          confirmSubmit={confirmSubmit}
          formStatus={formStatus}
        />
      </div>
      <ValidationError 
      isValidationErrorOpen={isValidationErrorOpen}
      closeValidationErrorModal={closeValidationErrorModal}
      formStatus={formStatus}/>
    </div>
  );
};

export default Contact;
