import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './EndModal.css';

const EndModal = ({ show }) => {
  return (
    <div className={classNames(show ? "modal display-block" : "modal display-none")}>
      <section className="modal-main">
        <div className="modal-content-wrapper">
          <h2 className="modal-title">
            {"Danke!"}
          </h2> 
          <p className="modal-text">
            {"Das waren die systematisch geshuffelten 24 ersten Kapitel meines Romanprojekts! Vielen Dank, dass du sie alle gelesen hast. Das bedeutet mir sehr viel. Wenn du mehr über dieses Romanprojekt erfahren möchtest, klick einfach "}
            <Link to="/about">hier.</Link>
          </p>
          <p className="modal-text">
            {"Vielleicht möchtest du mir Feedback geben, oder dich über das Thema austauschen... Würde mich freuen, von dir zu hören. Drop me a message on "}
            <a href="https://www.xing.com/profile/HyunKyung_Yi4/cv">XING</a>
            {" oder Facebook (wenn es sein muss :D) "}
            <a href="https://www.facebook.com/jly.aorta">Facebook.</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default EndModal;