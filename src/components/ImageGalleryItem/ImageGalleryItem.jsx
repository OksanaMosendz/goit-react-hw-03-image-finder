import css from './ImageCalleryItem.module.css';

export const ImageGalleryItem = ({ src, alt, id }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img src={src} alt={alt} id={id} className={css.ImageGalleryItemImage} />
    </li>
  );
};
