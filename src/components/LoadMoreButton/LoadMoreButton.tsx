import React from 'react'
import css from './LoadMoreButton.module.css';

const LoadMoreButton = ({handleClick}) => {
  return (
    <div>
      <button className={css.loadMoreButton} type="button" onClick={handleClick}>Load more</button>
    </div>
  )
}

export default LoadMoreButton