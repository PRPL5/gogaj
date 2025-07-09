import React from 'react';
import '../scss/styles.css'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        {/* Show Room Prishtinë */}
        <div className="footer__column">
          <h4>Show Room Prishtinë</h4>
          <p>Tel: +38344200403</p>
          <p>Magjistralja Prishtinë Fushë Kosovë</p>
          <p>Prishtinë, 10000</p>
          <div className="footer__hours">
            <h5>Open hours</h5>
            <p>Mon - Fri: 08:00 - 20:00</p>
            <p>Saturday: 08:00 - 20:00</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* Show Room Pejë */}
        <div className="footer__column">
          <h4>Show Room Pejë</h4>
          <p>Tel: +38345120222</p>
          <p>Rr. Bekim Berisha</p>
          <p>Pejë, 30000</p>
          <div className="footer__hours">
            <h5>Open hours</h5>
            <p>Mon - Fri: 08:00 - 20:00</p>
            <p>Saturday: 08:00 - 20:00</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* Show Room Deçan */}
        <div className="footer__column">
          <h4>Show Room Deçan</h4>
          <p>Tel: +38344180325</p>
          <p>Rr. Luan Haradinaj</p>
          <p>Deçan, 51000</p>
          <div className="footer__hours">
            <h5>Open hours</h5>
            <p>Mon - Fri: 08:00 - 20:00</p>
            <p>Saturday: 08:00 - 20:00</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* Bau Pejë */}
        <div className="footer__column">
          <h4>Bau Pejë</h4>
          <p>Tel: +38345740074</p>
          <p>Magjistralja Pejë Deçan</p>
          <p>Pejë, 30000</p>
          <div className="footer__hours">
            <h5>Open hours</h5>
            <p>Mon - Fri: 07:00 - 20:00</p>
            <p>Saturday: 08:00 - 20:00</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© GOGAJ</p>
        <div className="footer__payments">
          <img src="https://gogaj.com/assets/static/mclogo.png" alt="MasterCard" />
          <img src="https://gogaj.com/assets/static/Visalogo.png" alt="Visa" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
