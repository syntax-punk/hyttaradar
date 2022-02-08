import React, { useState, useCallback, useEffect } from 'react';
import Page from '../hocs/Page';
import { endpoints } from '../services/RestService';
import useGet from '../hooks/useGet';
import BoxStack from './common/BoxStack';
import DataBox, { DataItem } from './common/DataBox';
import { useModal } from '../contexts/ModalContext';
import ModalForm from './common/ModalHyttaForm';

const Main: React.FC = () => {
  const tilesTrashold = 6;
  const { isModalActive, toggleModal } = useModal();
  const [tilesAmount, setTilesAmount] = useState(tilesTrashold);
  const { error, loading, results } = useGet({ apiUrl: endpoints.cabins });
  const [dataList, setDataList] = useState([] as DataItem[]);

  useEffect(() => {
    setDataList(results);
  }, [results]);

  const onShowMore = useCallback(() => {
    setTilesAmount(Math.min(dataList.length, tilesAmount + tilesTrashold));
  }, [tilesAmount, setTilesAmount, dataList]);

  const addNewHytta = useCallback(() => {
    !isModalActive && toggleModal();
  }, [isModalActive, toggleModal]);

  const onBookClickhandler = useCallback(
    (id: number) => {
      const found = dataList.find((dataItem: DataItem) => dataItem.id === id);
      console.log('book > ', found);
    },
    [dataList]
  );

  const updateDataList = (dataItem: DataItem) => {
    setDataList([dataItem, ...dataList]);
  };

  return (
    <>
      <Page loading={loading} error={error}>
        <BoxStack>
          <span className={'round-button add-new-button'} tabIndex={0} onClick={addNewHytta}>
            ➕
          </span>
          {dataList?.slice(0, tilesAmount).map((dataItem: DataItem) => (
            <DataBox key={dataItem.id} content={dataItem} onBookClick={onBookClickhandler} />
          ))}
          <span
            className={`round-button more-button ${
              tilesAmount === dataList.length ? 'button-disabled' : ''
            }`}
            tabIndex={0}
            onClick={onShowMore}
          >
            ⬇︎
          </span>
        </BoxStack>
      </Page>
      <ModalForm onDataSaved={updateDataList} />
    </>
  );
};

export default Main;
