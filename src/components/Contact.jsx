import React from "react";
import PropTypes from "prop-types";

// Contact data moved to constants
const CONTACT_ITEMS = [
  {
    id: 1,
    title: "Email Address",
    content: (
      <a href="mailto:mahdi.khrrousheh@gmail.com" className="contact-link" >
        mahdi.khrrousheh@gmail.com
      </a>
    ),
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Phone Number",
    content: (
      <>
        <p>(+972) 598-633-610</p>
        <p>(+972) 568-633-610</p>
      </>
    ),
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 1H7C5.895 1 5 1.895 5 3v18c0 1.105.895 2 2 2h10c1.105 0 2-.895 2-2V3c0-1.105-.895-2-2-2zM12 21.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5-5.5H7V4h10v12z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Located in",
    content: (
      <>
        <p>Khrrousheh 8 Ghassan Harb st., Apt. 103,</p>
        <p>Ramallah, West Bank, Palestine</p>
      </>
    ),
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 12C10.89 12 10 11.1 10 10C10 8.9 10.89 8 12 8C13.11 8 14 8.9 14 10C14 11.1 13.11 12 12 12Z" fill="currentColor"/>
      </svg>
    ),
  },
];

const ContactItem = ({ title, content, icon }) => (
  <article className="project-card contact-item">
    <div className="project-content">
      <h3 className="contact-title">{title}</h3>
      <div className="contact-content">{content}</div>
    </div>
    <div className="floating-image" aria-hidden="true">
      {icon}
    </div>
  </article>
);

ContactItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
};

const Contact = () => {
  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact Me</h2>
      <div className="contact-container">
        {CONTACT_ITEMS.map((item) => (
          <ContactItem
            key={item.id}
            title={item.title}
            content={item.content}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;