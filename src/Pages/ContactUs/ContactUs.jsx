import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../../Components/Navbar/Navbar';
import HeroImg2 from '../../Components/HeroImg2/HeroImg2';
import Footer from '../../Components/Footer/Footer';
import './ContactUs.css';

const ContactUs = () => {
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      emailjs.sendForm(
        'service_ghuvltu',
        'template_jxxopvo',
        form.current,
        'jg_ByiXz3XTPqG-au'
      ).then(
        (result) => {
          console.log(result.text);
          setFormSubmitted(true);
          setSuccessMessage('Message sent successfully!');
          resetForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  const validateInputs = () => {
    if (!name || !email || !message) {
      setErrorMessage('Please fill in all fields.');
      return false;
    } else if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    } else {
      setErrorMessage('');
      return true;
    }
  };

  const validateEmail = (value) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(value);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setFormSubmitted(false);
    form.current.reset();
  };

  // Clear messages after 5 seconds
  if (errorMessage || successMessage) {
    setTimeout(() => {
      setErrorMessage('');
      setSuccessMessage('');
    }, 5000);
  }

  return (
    <>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="Contact me for your next project." />
      <section className="contact" id="contact">
        <div className="row">
          
          <form ref={form} onSubmit={sendEmail}>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
            <input
              type="text"
              placeholder="Name:"
              className="box"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
           
            <input
              type="email"
              placeholder="Email:"
              className="box"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="message"
              className="box2"
              placeholder="Message...."
              cols="20"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <input type="submit" value="Send message" className="btn" />
          </form>

          <div className="image">
            <img src="https://media.istockphoto.com/id/1456509727/photo/cybersecurity-and-privacy-concept-of-data-protection-secure-encryption-technology-secure.jpg?s=612x612&w=0&k=20&c=lkgJXoYhilvqHQBv9FUcJruZcPjQDUYQJ_T2Yo2LYDs=" alt="Movicks" />
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
