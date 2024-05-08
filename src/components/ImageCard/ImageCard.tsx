import React, { FC} from 'react'
import css from './ImageCard.module.css';
import { PhotoCard } from '../../Types';
interface ImageCardProps {
  photo: Pick<PhotoCard, 'urls' | 'alt_description'>;
  handleImageClick: (photo: object) => void;
}
const ImageCard : FC<ImageCardProps> = ({ photo, handleImageClick }) => {
  const handleClick = () => { handleImageClick(photo);}
  return (
    <div>
  <img className={css.photoCard} src={photo.urls.small} alt={photo.alt_description} onClick={handleClick} />
</div>
  )
}

export default ImageCard