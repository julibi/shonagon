import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './StartModal.css';

const StartModal = ({ className, onContinue }) => {
  return (
    <div className={classNames(className, "start-modal-main")}>
      <section className="start-modal-content">
        <h2 className="start-modal-title">
          {"Shanghai Shônagon"}
        </h2> 
        <p className="start-modal-text">
          {"Shanghai Shônagon ist ein Romanprojekt. Du liest die ersten 24 Kapitel in einer dynamisch erstellten Reihenfolge. Sie beruht zur einen Hälfte auf Zufall und zur anderen auf inhaltlichen Zusammenhängen. Mehr Informationen zum Algorithmus findest du "}
          <Link to="/about" target="_blank">hier. </Link>
          {"(Achtung! Auf der Seite, zu die der Link führt, sind Spoiler enthalten.)"}
        </p>
        <button onClick={ () => onContinue() } className="start-confirmationButton">
          {"Ok, weiter im Text"}
        </button>
      </section>
    </div>
  );
};

export default StartModal;