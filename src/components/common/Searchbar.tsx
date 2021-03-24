import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateInput } from '../../redux/actions';
import { GeneralStore } from '../../redux/reducers/hyttaReducer'


const Searchbar: React.FC = () => {
  
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const searchValue = useSelector((store: GeneralStore) => store.searchValue)

  useEffect(() => {
    dispatch(updateInput(inputValue))
  }, [inputValue, dispatch])

  const inputChange = (event: any) => {
    setInputValue(event.target.value);
  }

  return(
    <input 
      type="text" 
      className="searchbar" 
      placeholder="Search for the hytta" 
      onChange={inputChange} 
      value={searchValue}
      />
  )
}

export default Searchbar;