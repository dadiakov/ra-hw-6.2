import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ data, cardDelete, id }) {
    return (
      <React.Fragment>
        <div className="message-card">
          <div>{data}</div>
          <button className="delete-button" onClick={() => cardDelete(id)}>
            Удалить
          </button>
        </div>
      </React.Fragment>
    );
  }

Card.propTypes = {
  data: PropTypes.string.isRequired,
  cardDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}