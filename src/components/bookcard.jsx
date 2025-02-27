import React from 'react';
import PropTypes from 'prop-types';
import './bookcard.css';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.name} className="book-image" />
      <h2>{book.name}</h2>
      <p>{book.author}</p>
      <p>{book.genre}</p>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookCard;
