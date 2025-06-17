import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contacts</h2>
      <div className="contact-container">
        {/* Email */}
        <div className="contact-item">
          <div className="icon-circle">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#1D4ED8"/>
            </svg>
          </div>
          <h4>Email Address</h4>
          <p><a href="mailto:mahdi.khrrousheh@gmail.com">mahdi.khrrousheh@gmail.com</a></p>
        </div>

        {/* Phone */}
        <div className="contact-item">
          <div class="icon-circle">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 1H7C5.895 1 5 1.895 5 3v18c0 1.105.895 2 2 2h10c1.105 0 2-.895 2-2V3c0-1.105-.895-2-2-2zM12 21.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5-5.5H7V4h10v12z" fill="#1D4ED8"/>
            </svg>
            </div>
          <h4>Phone Number</h4>
          <p>(+972) 598-633-610</p>
          <p>(+972) 568-633-610</p>
        </div>

        {/* Address */}
        <div className="contact-item">
          <div className="icon-circle">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 12C10.89 12 10 11.1 10 10C10 8.9 10.89 8 12 8C13.11 8 14 8.9 14 10C14 11.1 13.11 12 12 12Z" fill="#1D4ED8"/>
            </svg>
          </div>
          <h4>Located in</h4>
          <p>Khrrousheh 8 Ghassan Harb st., Apt. 103,</p>
          <p>Ramallah, West Bank, Palestine</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
