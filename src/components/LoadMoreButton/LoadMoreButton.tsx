import {FC} from 'react'
import css from './LoadMoreButton.module.css';
interface LoadMoreButtonProps {
  handleClick: () => void;
}
const LoadMoreButton:FC<LoadMoreButtonProps> = ({handleClick}) => {
  return (
    <div>
      <button className={css.loadMoreButton} type="button" onClick={handleClick}>Load more</button>
    </div>
  )
}

export default LoadMoreButton