import React, { useState, useCallback } from 'react';
import Page from '../hocs/Page'
import { endpoints } from '../services/RestService'
import useGet from '../hooks/useGet';
import BoxStack from './common/BoxStack';
import DataBox, { DataItem } from './common/DataBox';
import { useModal } from '../contexts/ModalContext';

const Main: React.FC = () => {
  const tilesTrashold = 6;
  const { isModalActive, toggleModal } = useModal();
  const [ tilesAmount, setTilesAmount ] = useState(tilesTrashold);
  const { error, loading, results } = useGet({ apiUrl : endpoints.cabins }); 
  
  const onShowMore = useCallback(() => {
    setTilesAmount(Math.min(results.length, tilesAmount + tilesTrashold));
  }, [tilesAmount, setTilesAmount, results])

  const addNewHytta = useCallback(() => {
    (!isModalActive) && toggleModal();
  }, [isModalActive, toggleModal]);

  const onBookClickhandler = useCallback((id: number) => {
    const found = results.find((dataItem: DataItem) => dataItem.id === id);
    console.log('found ... ', found);
  }, [results]);
  
  return (
    <Page loading={loading} error={error}>
      <BoxStack>
        <span 
          className={"round-button add-new-button"} 
          onClick={addNewHytta}>
            ➕
        </span>
        {results?.slice(0, tilesAmount).map((dataItem: DataItem) => 
          <DataBox key={dataItem.id} content={dataItem} onBookClick={onBookClickhandler} />
        )}
        <span 
          className={`round-button more-button ${(tilesAmount === results.length) ? "button-disabled" : ""}`} 
          onClick={onShowMore}>
            ⬇︎
        </span>
      </BoxStack>
    </Page>
  );
}

export default Main;