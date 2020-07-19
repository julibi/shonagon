import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './StartModal.css';

const StartModal = ({ show, className, onContinue }) => {
  return (
    <div className={classNames(className, show ? "modal display-block" : "modal display-none")}>
      <section className="modal-main">
        <div className="modal-content-wrapper">
          <h2 className="modal-title">
            {"Shanghai Shônagon"}
          </h2> 
          <p className="modal-text">
            {"Shanghai Shônagon ist ein Romanprojekt. Du liest die ersten Kapitel in einer dynamisch erstellten Reihenfolge. Sie beruht zur einen Hälfte auf Zufall und zur anderen auf inhaltlichen Zusammenhängen. Mehr Informationen zum Algorithmus findest du "}
            <Link to="/about" target="_blank">hier. </Link>
            {"(Achtung! Auf der Seite, zu die der Link führt, sind Spoiler enthalten.)"}
          </p>
          <div className="buttonWrapper">
            <button onClick={ () => onContinue() } className="confirmationButton">
              {"Ok, weiter im Text"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartModal;