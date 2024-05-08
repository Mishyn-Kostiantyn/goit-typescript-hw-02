import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import LoadMoreButton from './components/LoadMoreButton/LoadMoreButton';
import { requestImageGallery } from './services/HTTPRequest/HTTPRequest';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal.tsx';
import ReactModal from 'react-modal';
import { AxiosResponse } from 'axios';
import { PhotoCard } from './Types.ts';
function App() {
  const [query, setQuery] = useState<string>('');
  const [photos, setPhotos] = useState<object|null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPageNumber, setTotalPageNumber] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoCard|null>(null);
ReactModal.setAppElement('#root');
  const onSetQuery = (queryWord: string): void => {
    setQuery(queryWord); setPageNumber(1); setTotalPageNumber(0); setPhotos(null); 
  };
  const onSetPageNumber = (): void => { setPageNumber(pageNumber + 1); };
  interface ServerResponse{
    total_pages: number;
    results: object[];

  }
  useEffect(() => {
    if (query.length === 0) return;
    async  function fetchPhotoGallery():Promise<void> {
      try {
        setIsLoading(true);
        const data:ServerResponse = await requestImageGallery(query, pageNumber);

        setTotalPageNumber(data.total_pages);
        if (data.results && data.results.length > 0) {
          setPhotos(prevPhotos => {
            if (!Array.isArray(prevPhotos)) {
              return data.results;
            }
            return [...prevPhotos, ...data.results];
          
          })
        } else { toast('Sorry, there are no images matching your search query. Please try again with anover search term!'); }
              }
      catch (error) { setIsError(true); }
      finally { setIsLoading(false); }
    }
    fetchPhotoGallery();
  }, [query, pageNumber]);
  const handleCloseModal = () :void=> { setModalIsOpen(false); }
  const handleImageClick = (photo: PhotoCard): void => { setSelectedPhoto(photo); setModalIsOpen(true); }
  return (
    <>
      <div className='container'>
      <h1>World of Photo</h1>
        <Toaster  position="top-center" reverseOrder={true}/>
        <SearchBar onSetQuery={onSetQuery} />
        {isError && <ErrorMessage />}
        {Array.isArray(photos) && <ImageGallery photos={photos} handleImageClick={handleImageClick} />}
        {selectedPhoto && <ImageModal isOpen={modalIsOpen} handleCloseModal={handleCloseModal} selectedPhoto={selectedPhoto} />}
        {isLoading && <Loader/>}
        {totalPageNumber -pageNumber >= 1 && <LoadMoreButton handleClick={onSetPageNumber} />};
    </div>
      
    </>
  )
}

export default App












































































