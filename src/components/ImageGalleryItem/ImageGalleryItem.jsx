export const ImageGalleryItem = ({ src, alt, id }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={src} alt={alt} id={id} className="ImageGalleryItem-image" />
    </li>
  );
};
