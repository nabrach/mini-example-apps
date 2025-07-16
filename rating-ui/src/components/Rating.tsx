import { useState } from "react";

interface RatingProps {
  heading?: string;
  color?: string;
  feedbackMessages?: string[];
}

const Rating = ({
  heading = "Rate your experience",
  color = "gold",
  feedbackMessages = ["Poor", "Fair", "Good", "Very Good", "Excellent"],
}: RatingProps) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star) => (
          <span
            className={"star"}
            style={{ color: star <= (hover || rating) ? color : "lightgray" }}
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
