import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { getImages } from '../../store/request/getImages';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      <p>IMAGES</p>
      <ImageGalleryItem />
    </ul>
  );
};
