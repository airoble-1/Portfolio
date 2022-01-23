import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
// import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import './contact.css';

const Contact = () => {
  // const { contact } = useContext(PortfolioContext);
  // const { cta } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p style={{ fontSize: '30px' }} className="contact-wrapper__text">
              Would you like to work with me? Awesome!
            </p>
            <div className="form-style-6">
              <h1 style={{ fontSize: '25px' }}>Contact Us</h1>
              <form action="https://formspree.io/f/xoqrjrgp" method="POST">
                <input
                  style={{ fontSize: '23px' }}
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                />
                <input
                  style={{ fontSize: '23px' }}
                  type="email"
                  name="_replyto"
                  required
                  placeholder="Email Address"
                />
                <textarea
                  style={{ fontSize: '23px' }}
                  name="message"
                  required
                  placeholder="Message"
                />
                <input style={{ fontSize: '23px' }} type="submit" value="Send" />
              </form>
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
