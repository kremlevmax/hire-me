import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./EmailForm.css";
import { useState } from "react";

export const EmailForm = ({ showModal }) => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    showModal();
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='email-form'>
      <label htmlFor='user_name' className='email-form__name-label'>
        Your Name:
      </label>
      <input
        type='text'
        name='user_name'
        id='user_name'
        className={
          name === ""
            ? "email-form__name-input"
            : "email-form__name-input active"
        }
        required
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor='user_email' className='email-form__email-label'>
        Your Email:
      </label>
      <input
        type='email'
        name='user_email'
        id='user_email'
        className={
          email === ""
            ? "email-form__name-input"
            : "email-form__name-input active"
        }
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <label htmlFor='message' className='email-form__message-label'>
        Message:
      </label>
      <textarea
        id='message'
        name='message'
        className={
          message === ""
            ? "email-form__message-input"
            : "email-form__message-input active"
        }
        required
        onChange={(event) => setMessage(event.target.value)}
      />
      <input
        type='submit'
        value='SUBMIT'
        className='email-form__submit-button'
      />
    </form>
  );
};
