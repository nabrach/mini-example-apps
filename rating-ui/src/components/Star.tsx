interface StarProps {
  star: number;
  rating: number;
  ratingClick: (star: number) => void;
  hover: number;
  color: string;
  hoverEnter: (star: number) => void;
  hoverLeave: () => void;
}

const Star = ({
  star,
  rating,
  ratingClick,
  hover,
  color,
  hoverEnter,
  hoverLeave,
}: StarProps) => {
  return (
    <span
      className="star"
      style={{ color: star <= (hover || rating) ? color : "lightgray" }}
      onClick={() => ratingClick(star)}
      onMouseEnter={() => hoverEnter(star)}
      onMouseLeave={hoverLeave}
    >
      {"\u2605"} {/* Unicode star character */}
    </span>
  );
};
export default Star;
