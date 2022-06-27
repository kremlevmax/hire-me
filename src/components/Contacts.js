import React from "react";
import { EmailForm } from "./EmailForm";
import "./Contacts.css";
import AnimatedPage from "./AnimatedPage";

function Contacts() {
  return (
    <AnimatedPage>
      <section className='contacts'>
        <div className='contacts__header-container'>
          <span className='contacts__header'>Contacts</span>
        </div>

        <div className='contacts__container'>
          <div className='contacts__email-container'>
            <EmailForm />
            <div className='contacts__circle' />
            <div className='pacman' />
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}

export default Contacts;
