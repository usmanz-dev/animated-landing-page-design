import React, { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const variants = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
};

const Contact = () => {
  const formRef = useRef();

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_30b6y0t",
        "template_b8abn75",
        formRef.current, // ✅ CORRECT
        "38-QWR8L2t2TKSmzm"
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset(); // optional but nice
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div className="textContainer" variants={variants}>
        <h1>Let's Work Together</h1>

        <p>
          Have a project in mind? Let’s build something meaningful together.
        </p>

        <div className="item">
          <FiMail className="icon" />
          <span>hello@gmail.com</span>
        </div>

        <div className="item">
          <FiMapPin className="icon" />
          <span>Punjab, Pakistan</span>
        </div>

        <div className="item">
          <FiPhone className="icon" />
          <span>+92 312 3456789</span>
        </div>
      </motion.div>

      <motion.div className="formContainer" variants={variants}>
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            required
          />
          <button type="submit">Send Message</button>

          {success && <span className="success">Message sent successfully ✅</span>}
          {error && <span className="error">Something went wrong ❌</span>}
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;