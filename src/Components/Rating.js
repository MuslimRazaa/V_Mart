import React, { useState } from 'react';
export default function Rating(props) {
    const [rating, setRating] = useState(props.rating || null);
    const [tempRating, setTempRating] = useState(null);
  
    const rate = (newRating) => {
      setRating(newRating);
      setTempRating(newRating);
    };
  
    const starOver = (newRating) => {
      setTempRating(rating);
      setRating(newRating);
    };
  
    const starOut = () => {
      setRating(tempRating);
    };
  
    const stars = [];
    for (let i = 0; i < 5; i++) {
      let klass = 'star-rating__star';
      if (rating >= i && rating !== null) {
        klass += ' is-selected';
      }
  
      stars.push(
        <label
          key={i}
          className={klass}
          onClick={() => rate(i)}
          onMouseOver={() => starOver(i)}
          onMouseOut={starOut}
        >
          ★
        </label>
      );
    }
  
    return <div className="star-rating">{stars}</div>;
  }
  