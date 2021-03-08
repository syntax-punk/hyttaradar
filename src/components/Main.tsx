import React, { useCallback } from 'react';
import Page from '../hocs/Page'
import { endpoints } from '../services/RestService'
import useGet from '../hooks/useGet';
import BoxStack from './common/BoxStack';
import DataBox, {DataItem} from './common/DataBox';

const Main: React.FC = () => {
  const { error, loading, results } = useGet({ apiUrl : endpoints.cabins }); 
  
  const onBookClickhandler = useCallback((id: number) => {
    const found = results.find((dataItem: DataItem) => dataItem.id === id);
    console.log('found ... ', found);
  }, [results]);
  
  return (
    <Page loading={loading} error={error}>
      <BoxStack>
        {results?.map((dataItem: DataItem) => 
          <DataBox key={dataItem.id} content={dataItem} onBookClick={onBookClickhandler} />
        )}
      </BoxStack>
    </Page>
  );
}

export default Main;