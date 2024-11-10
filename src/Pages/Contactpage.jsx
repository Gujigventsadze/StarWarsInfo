import { motion } from "framer-motion";
import "./Contactpage.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contactpage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_e3lze39", "template_rf180lm", form.current, {
        publicKey: "FDSXdgkm668lEA5FX",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
          form.current.reset();
          setTimeout(() => {
            setSuccess(false);
          }, 2000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 2000);
        }
      );
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="contact-container"
    >
      <h1 className="contact-header">CONTACT</h1>
      <form className="email-form" ref={form} onSubmit={sendEmail}>
        <input placeholder="Username" type="text" name="user_name" required />
        <input placeholder="Email" type="email" name="user_email" required />
        <textarea name="message" placeholder="Message" required />
        <input className="input-btn" type="submit" value="Send" />
      </form>
      <div className={success ? "success-visible" : "success"}>
        Message Sent Successfully
      </div>
      <div className={error ? "error-visible" : "error"}>
        Error Sending a Message
      </div>
    </motion.div>
  );
};

export default Contactpage;
