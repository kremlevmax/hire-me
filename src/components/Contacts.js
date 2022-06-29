import React, { useState } from "react";
import { EmailForm } from "./EmailForm";
import "./Contacts.css";
import AnimatedPage from "./AnimatedPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMobileRetro,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Modal } from "./Modal";

function Contacts() {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  return (
    <AnimatedPage>
      {showModal && <Modal hideModal={() => setShowModal(false)} />}
      <section className='contacts'>
        <div className='contacts__top'>
          <div className='contacts__header-container'>
            <span className='contacts__header'>Contacts</span>
          </div>
        </div>

        <div className='contacts__container'>
          <div className='contacts__email-location-telefone-container'>
            <div className='contacts__data-container'>
              <div className='contacts__data-icon-container'>
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <span className='contacts__text'>Seattle, WA, United States</span>
            </div>

            <div className='contacts__data-container'>
              <a className='contacts__text' href='tel:+14253754075'>
                <div className='contacts__data-icon-container'>
                  <FontAwesomeIcon icon={faMobileRetro} />
                </div>
                +1 (425) 375-4075
              </a>
            </div>

            <div className='contacts__data-container'>
              <a
                className='contacts__text'
                href='mailto:kremlevmax.webdev@icloud.com'
              >
                <div className='contacts__data-icon-container'>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                kremlevmax.webdev@icloud.com
              </a>
            </div>
          </div>
          <div className='contacts__email-container'>
            <EmailForm showModal={() => setShowModal(true)} />
          </div>
          <div className='contacts__circle' />
          <div className='pacman' />
        </div>
      </section>
    </AnimatedPage>
  );
}

export default Contacts;
