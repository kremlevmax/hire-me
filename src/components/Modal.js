import React from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export const Modal = ({ hideModal }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className='modal__dark-background'
      onClick={hideModal}
    >
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className='modal__modal-container'
      >
        <FontAwesomeIcon
          icon={faXmark}
          className='modal__close-button'
          onClick={hideModal}
        />
        <div className='modal__first-line-container'>
          <span className='modal__first-line'>
            I'll get in touch with you ASAP
          </span>
          <FontAwesomeIcon className='modal__icon' icon={faCommentDots} />
        </div>

        <div className='modal__second-line-container'>
          <span className='modal__second-line'>Thank you!</span>
        </div>
        <div className='modal__button-container' onClick={hideModal}>
          <span className='modal__button'>OK</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
