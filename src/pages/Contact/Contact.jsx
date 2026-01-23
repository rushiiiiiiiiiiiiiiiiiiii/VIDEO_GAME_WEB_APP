import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <h2>GET IN TOUCH</h2>
        <p className="contact-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          consequatur commodi magni consectetur earum voluptatem assumenda,
          fugiat expedita, odio quidem quibusdam? Velit quae eveniet, iure hic
          culpa numquam ipsa reprehenderit!
        </p>

        <div className="contact-card">
          <h4>Contact Form</h4>

          <div className="contact-row">
            <div className="contact-field">
              <label>Name *</label>
              <input type="text" />
            </div>

            <div className="contact-field">
              <label>Email Address *</label>
              <input type="email" />
            </div>
          </div>

          <div className="contact-field">
            <label>Message *</label>
            <textarea rows="4" />
          </div>

          <div className="contact-actions">
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
