import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

type RatingProps = {
  numReviews: number;
  rating: number;
};

const Rating = ({ rating, numReviews }: RatingProps) => (
  <div className="rating">
    <span>
      {rating >= 1 ? (
        <FaStar />
      ) : rating >= 0.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar />
      )}
      {rating >= 2 ? (
        <FaStar />
      ) : rating >= 1.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar />
      )}
      {rating >= 3 ? (
        <FaStar />
      ) : rating >= 2.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar />
      )}
      {rating >= 4 ? (
        <FaStar />
      ) : rating >= 3.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar />
      )}
      {rating >= 5 ? (
        <FaStar />
      ) : rating >= 4.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar />
      )}
    </span>
    <span className="rating-numReviews">{numReviews && numReviews}</span>
  </div>
);

export default Rating;
