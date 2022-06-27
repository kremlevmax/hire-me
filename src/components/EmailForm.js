import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./EmailForm.css";

export const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rn2uir5",
        "template_5bx5uxh",
        form.current,
        "tTVPsRNaKWKmIyq4N"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='email-form'>
      <label className='email-form__name-label'>Your Name:</label>
      <input type='text' name='user_name' className='email-form__name-input' />
      <label className='email-form__email-label'>Your Email:</label>
      <input
        type='email'
        name='user_email'
        className='email-form__email-input'
        id='email'
      />
      <label className='email-form__message-label'>Message:</label>
      <textarea name='message' className='email-form__message-input' />
      <input
        type='submit'
        value='Submit'
        className='email-form__submit-button'
      />
    </form>
  );
};
