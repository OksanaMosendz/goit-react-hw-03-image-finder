import css from './Modal.module.css';

export const Modal = ({ image, onClick }) => {
  return (
    <div className={css.Overlay} onClick={onClick} id="overley">
      <div className={css.Modal}>
        <img
          className={css.ModalImage}
          src={image.largeImageURL}
          alt={image.tags}
        />
      </div>
    </div>
  );
};
