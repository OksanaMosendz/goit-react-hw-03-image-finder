import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
export const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.ImageGallery} onClick={onClick}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          src={image.webformatURL}
          alt={image.tags}
          id={image.id}
        />
      ))}
    </ul>
  );
};
