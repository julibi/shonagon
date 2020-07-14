import React from 'react';
import classNames from 'classnames';
import './EndModal.css';

const EndModal = ({ handleClose, show, children }) => {
  return (
    <div className={classNames(show ? "modal display-block" : "modal display-none")}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default EndModal;