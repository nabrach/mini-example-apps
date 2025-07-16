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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
    setHover(0);
  };

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
      <button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit Rating
      </button>
      {submitted && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Thank You</h2>
            <p>
              Your rating of {rating} star{rating > 1 ? "s" : ""} has been
              submitted.
            </p>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rating;
