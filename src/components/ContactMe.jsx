import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactMe = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l3nvw7h",
        "template_vfb8l8d",
        form.current,
        "Xp2dGro_qcymDGwGf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setIsSubmitted(true);
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Contact Me</h2>
      <span className="section_subtitle">Get in touch</span>
      <div className="contact_container container grid">
        <div>
          <div className="contact_information">
            <i className="uil uil-envelope contact_icon" />
            <div>
              <h3 className="contact_title">Email</h3>
              <span className="contact_subtitle">
                mensikovapolina@gmail.com
              </span>
            </div>
          </div>
          <div className="contact_information">
            <i className="uil uil-map-marker contact_icon" />
            <div>
              <h3 className="contact_title">Location</h3>
              <span className="contact_subtitle">Vancouver, BC</span>
            </div>
          </div>
        </div>
        {isSubmitted ? (
          <div className="contact_form-submitted">
            <p>Thank you for reaching out! I'll be in touch soon.</p>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="contact_form grid">
            <div className="contact_inputs grid">
              <div className="contact_content">
                <label className="contact_label">Name</label>
                <input type="text" className="contact_input" name="user_name" />
              </div>
              <div className="contact_content">
                <label className="contact_label">Email</label>
                <input
                  type="email"
                  className="contact_input"
                  name="user_email"
                />
              </div>
            </div>
            <div className="contact_content">
              <label className="contact_label">Message</label>
              <textarea
                cols={0}
                rows={7}
                className="contact_input"
                defaultValue={""}
                name="message"
              />
            </div>
            <div>
              <button
                className="button button--flex"
                type="submit"
                value="Send"
              >
                Send Message
                <i className="uil uil-message button_icon" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
