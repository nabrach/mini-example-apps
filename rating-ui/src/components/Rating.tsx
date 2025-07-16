import { useState } from "react";
import Star from "./Star";

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
          <Star
            key={star}
            star={star}
            rating={rating}
            ratingClick={setRating}
            hover={hover}
            color={color}
            hoverEnter={setHover}
            hoverLeave={() => setHover(0)}
          />
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
