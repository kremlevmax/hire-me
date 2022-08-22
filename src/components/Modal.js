import React from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Modal = ({ hideModal }) => {
  return (
    <div className='modal__dark-background' onClick={hideModal}>
      <div className='modal__modal-container'>
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
      </div>
    </div>
  );
};
