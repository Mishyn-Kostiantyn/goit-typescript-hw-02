import React from 'react'
import css from './ImageCard.module.css';

const ImageCard = ({ photo, handleImageClick }) => {
  const handleClick = () => { handleImageClick(photo);}
  return (
    <div>
  <img className={css.photoCard} src={photo.urls.small} alt={photo.alt_description} onClick={handleClick} />
</div>
  )
}

export default ImageCard