import { ImageGalleryItem } from 'components/ImageGelleryItem/ImageGelleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, onImageClick }) => (
  <ul className={css.ImageGallery}>
    {images.map((image, index) => (
      <ImageGalleryItem onclick={onImageClick} image={image} key={index} />
    ))}
  </ul>
);
