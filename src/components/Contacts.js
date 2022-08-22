import React, { useState } from "react";
import { EmailForm } from "./EmailForm";
import "./Contacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "./Modal";
import { motion } from "framer-motion";

function Contacts() {
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.section exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
      {showModal && <Modal hideModal={() => setShowModal(false)} />}
      <section className='contacts'>
        <div className='contacts__container'>
          <div className='contacts__email-location-telefone-container'>
            <div className='contacts__data-container'>
              <a className='contacts__text' href='tel:+14253754075'>
                <div className='contacts__data-icon-container'>
                  <FontAwesomeIcon icon={faPhone} />
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
        </div>
      </section>
    </motion.section>
  );
}

export default Contacts;
