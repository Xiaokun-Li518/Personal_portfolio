import { Modal, Button, Group } from "@mantine/core";

import React, { useState } from "react";
import { ConfirmSuccessful } from "./utils";

const ConfirmationModal = ({
  isOpen,
  closeModal,
  confirmSubmit,
  formStatus,
}) => {
  // State for managing the confirmation modal
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  // Function to open the confirmation modal
  const openConfirmationModal = () => setIsConfirmationOpen(true);

  // Function to close the confirmation modal
  const closeConfirmationModal = () => setIsConfirmationOpen(false);

  const handleConfirmSubmit = async () => {
      await confirmSubmit();
      openConfirmationModal();
  };

  return (
    <>
      <Modal
        opened={isOpen}
        onClose={closeModal}
        title="Confirm submission"
        centered
      >
        <p className="mb-3"> Are you sure you want to submit this form? </p>
        <Group position="center">
          <Button
            onClick={closeModal}
            style={{ marginRight: 10 }}
            className="font-normal text-center inline-block px-8 py-1 w-max text-base rounded-xl text-white border-2 bg-black dark:border-stone-500 hover:bg-stone-600 dark:hover:bg-black dark:hover:border-white"
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirmSubmit}
            color="primary"
            className="font-normal text-center inline-block px-8 py-1 w-max text-base rounded-xl text-white border-2 bg-black dark:border-stone-500 hover:bg-stone-600 dark:hover:bg-black dark:hover:border-white"
          >
            Submit
          </Button>
        </Group>
      </Modal>
        <ConfirmSuccessful 
         isConfirmationOpen={isConfirmationOpen}
         closeConfirmationModal={closeConfirmationModal}
         formStatus={formStatus}
        />
    </>
  );
};

export default ConfirmationModal;
