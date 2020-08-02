import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './EndModal.css';

const EndModal = ({ className }) => {
  return (
    <div className={classNames(className, "end-modal-main")}>
        <div className="end-modal-content">
          <h2 className="end-modal-title">
            {"Danke"}
          </h2> 
          <p className="end-modal-text">
            {"Das waren die systematisch geshuffelten 24 ersten Kapitel meines Romanprojekts. Vielen Dank, dass du sie alle gelesen hast. Das bedeutet mir sehr viel. Wenn du mehr über dieses Romanprojekt erfahren möchtest, klick einfach "}
            <Link to="shanghaishonagon.com/about">hier.</Link>
          </p>
          <p className="end-modal-text">
            {"Wie du siehst, befasse ich mich mit Fusionen von Programmierung und Schreiben. Vielleicht möchtest du mir Feedback geben, oder dich über das Thema austauschen... Drop me a message on "}
            <a href="https://www.facebook.com/jly.aorta" target="_blank" rel="noopener noreferrer">Facebook.</a>
          </p>
        </div>
    </div>
  );
};

export default EndModal;