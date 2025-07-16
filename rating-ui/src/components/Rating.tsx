import { useState } from "react";

const Rating = () => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const feedbackMessages = ["Poor", "Fair", "Good", "Very Good", "Excellent"];

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <div className="stars">
        {stars.map((star) => (
          <span
            className={`star ${star <= (hover || rating) ? "active" : ""}`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            key={star}
          >
            {"\u2605"} {/* Unicode star character */}
          </span>
        ))}
      </div>
      <div className="feedback">
        {rating > 0 && (
          <p>
            <strong>{feedbackMessages[rating - 1]}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default Rating;
