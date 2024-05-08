import React, { FC } from 'react'
import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard';
import { PhotoCard } from '../../Types';
interface ImageGalleryProps {
  photos: PhotoCard[];
  handleImageClick: (photo: PhotoCard) => void;
  
}
const ImageGallery : FC<ImageGalleryProps> = ({ photos, handleImageClick }) => {
  return (
    <ul className={css.photoContainer}>
      {photos.map((photo: PhotoCard) => {
        return (<li key={photo.id}> <ImageCard photo={photo}  handleImageClick={handleImageClick} />
		
        </li>)
      })}
	
</ul>

  )
}

export default ImageGallery