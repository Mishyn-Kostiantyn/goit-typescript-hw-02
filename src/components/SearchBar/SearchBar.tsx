import { FormEvent, FC } from 'react'
import css from './SearchBar.module.css';
import { toast } from 'react-hot-toast';
interface SearchBarProps {
  onSetQuery: (query: string) => void;
}

const SearchBar:FC<SearchBarProps>=({onSetQuery})=> {
  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   const searchValue = (event.currentTarget.elements.namedItem('search') as HTMLInputElement).value.trim();
    if (searchValue === "") {
      toast.error("Please enter search term!");
      return;
    } else { onSetQuery(searchValue); }
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