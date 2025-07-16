interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  rating: number;
}

const Modal = ({ isOpen, onClose, rating }: ModalProps) => {
  if(!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Thank You</h2>
        <p>
          Your rating of {rating} star{rating > 1 ? "s" : ""} has been
          submitted.
        </p>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;