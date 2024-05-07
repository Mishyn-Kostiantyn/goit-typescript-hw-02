import React from 'react'
import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  
  return (<p className={css.errorMessage}>Whoops, something went wrong! Please try reloading this page!</p>)
 
}
export default ErrorMessage