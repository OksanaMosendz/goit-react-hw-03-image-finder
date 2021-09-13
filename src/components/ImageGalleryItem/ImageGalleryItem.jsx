import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, alt, id, onClick }) => {
  return (
    <li className={css.ImageGalleryItem} onClick={onClick}>
      <img src={src} alt={alt} id={id} className={css.ImageGalleryItemImage} />
    </li>
  );
};
