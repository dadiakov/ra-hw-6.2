import React from 'react';

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