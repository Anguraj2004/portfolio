import React from "react";
import { XIcon } from "@heroicons/react/outline";
import Modal from "react-modal";
import classnames from "classnames";
import ChatApp from "./ChatApp.jsx";

const ContactModal = ({ toggleOpen, toggleClose, children, className }) => {
  const modalClassNames = classnames(
    className,
    "modal",
    // eslint-disable-next-line comma-dangle
    "absolute my-auto mx-6 top-0 bottom-0 right-0 bg-white dark:bg-primary rounded-lg max-w-[565px] h-[435px]  p-2 sm:mx-auto md:h-[500px] "
  );

  return (
    <div className="w-full ">
      <button
        onClick={toggleClose}
        className="relative inline-flex items-center py-3 overflow-hidden text-white font-semibold bg-secondary px-12 rounded-md group active:bg-secondary-500 focus:outline-none focus:ring"
        href="/download"
      >
        <span className="absolute right-0 md:transition-transform md:translate-x-full md:group-hover:-translate-x-10 hidden md:block">
          👋
        </span>

        <span className="text-sm font-medium transition-all group-hover:mr-4">
          Talk to my AI version
        </span>
      </button>
      <Modal
        ariaHideApp={false}
        className={modalClassNames}
        overlayClassName={"modal-overlay"}
        isOpen={toggleOpen}
        onRequestClose={toggleClose}
      >
        <button
          className="absolute flex justify-end right-5 top-5 z-[150] text-primary-500 dark:text-gray-200"
          onClick={toggleClose}
        >
          {" "}
          <XIcon className="w-6 h-6" />
        </button>
        <div className="w-full  dark:text-white">
          
          {/* AI chat screen - ChatAPP */}
          <ChatApp />
        </div>
      </Modal>
    </div>
  );
};

export default ContactModal;
