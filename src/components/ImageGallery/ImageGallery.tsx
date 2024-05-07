import React from 'react'
import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard';
const ImageGallery = ({ photos, handleImageClick }) => {
  return (
    <ul className={css.photoContainer}>
      {photos.map((photo) => {
        return (<li key={photo.id}> <ImageCard photo={photo}  handleImageClick={handleImageClick} />
		
        </li>)
      })}
	
</ul>

  )
}

export default ImageGallery