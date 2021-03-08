import React from 'react';
import Page from '../hocs/Page'
import { endpoints } from '../services/RestService'
import useGet from '../hooks/useGet';

const Main: React.FC = () => {
  const { error, loading, results } = useGet({ apiUrl : endpoints.cabins }); 
  console.log("got this >> ", results);
  
  return (
    <Page loading={loading} error={error}>
      <main>Halla peeps</main>
    </Page>
  );
}

export default Main;