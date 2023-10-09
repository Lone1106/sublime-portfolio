import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import classes from "./Contact.module.css";

function Contact() {
  const form = useRef();
  const [hidden, setHidden] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        form.current,
        process.env.REACT_APP_PUBLIC,
      )
      .then(
        () => {
          e.target.reset();
          setHidden(true);
        },
        (error) => {
          setError(true);
        },
      );
  };

  return (
    <section className={classes.contact}>
      <h2>Toss me a message</h2>

      {!hidden && (
        <form ref={form} className={classes.form} onSubmit={sendEmail}>
          <label className={classes.label} htmlFor="name">
            Name
          </label>
          <input
            className={classes.input}
            id="name"
            placeholder="Your name"
            type="text"
            name="user_name"
            required
          />

          <label className={classes.label} htmlFor="mail">
            Email
          </label>
          <input
            className={classes.input}
            id="mail"
            placeholder="Your email"
            type="email"
            name="user_email"
            required
          />

          <label className={classes.label} htmlFor="message">
            Message
          </label>
          <textarea
            className={classes.area}
            id="message"
            placeholder="Your message"
            maxLength="500"
            name="user_message"
            required
          />
          {error && (
            <p className={classes.error}>
              An error occured while sending. Try again later.
            </p>
          )}
          <button className={classes.send} type="submit">
            Send
          </button>
        </form>
      )}
      {hidden && (
        <div className={classes.field}>
          <p className={classes.succ}>Email successfully sent!</p>
        </div>
      )}
    </section>
  );
}

export default Contact;
