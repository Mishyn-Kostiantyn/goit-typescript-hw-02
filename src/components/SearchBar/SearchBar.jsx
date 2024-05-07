import React from 'react'
import css from './SearchBar.module.css';
import { toast } from 'react-hot-toast';

function SearchBar({onSetQuery}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.elements.search.value.trim() === "") {
      toast.error("Please enter search term!");
      return;
    } else { onSetQuery(event.target.elements.search.value); }
  }
//   const [inputValue, setInputValue] = useState("");
// const handleChange=(evt)=>{setInputValue(evt.target.value)}
  return (
   <header>
  <form className={css.searchBar} onSubmit={handleSubmit}  >
    <input
      type="text"
      autoComplete="off"
      autoFocus
     placeholder="Search images and photos"
    name="search" 
     
    />
    <button type="submit" >Search</button>
  </form>
</header>

  );
}


export default SearchBar