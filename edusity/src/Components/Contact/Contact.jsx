import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "d7d6cf1e-d2d6-4028-bbd9-116620052b7d");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Javite nam se <img src={msg_icon} alt="" />
        </h3>
        <p>
          Slobodno nas kontaktirajte putem kontakt forme ili pronađite naše
          kontakt informacije ispod. Vaši utisci, pitanja i predlozi su nam
          veoma važni dok težimo da pružimo izvanrednu uslugu.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            danelsr4@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +381 60 643 4755
          </li>
          <li>
            <img src={location_icon} alt="" />
            Ratarski put 8a, Naselje Altina
            <br />
            Beograd, 11000
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          {/* Honeypot anti-bot field */}
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />

          <label htmlFor="name">Vaše ime</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="phone">Telefon</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your mobile number"
            required
            pattern="[0-9+()\- ]{7,15}"
            title="Enter a valid phone number"
          />

          <label htmlFor="message">Vaša poruka</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="btn dark-btn">
            Pošalji <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
