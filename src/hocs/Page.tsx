import React, { useEffect, useState, useCallback } from 'react';
import { ErrorPage, LoadingPage } from '../templates';
import ErrorContext from '../contexts/ErrorContext';
import LoadingContext from '../contexts/LoadingContext';

export interface PageProps {
  error: string;
  loading: boolean;
  children: any;
}

const Page: React.FC<PageProps> = ({ error, loading, children }) => {
  const [pageError, setPageError] = useState('');
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    setPageError(error);
    setPageLoading(loading);
  }, [error, loading]);

  const setErrorCallback = useCallback(
    (callbackError: string) => {
      setPageError(callbackError);
    },
    [setPageError]
  );

  const setLoadingCallback = useCallback(
    (callbackLoading: boolean) => {
      setPageLoading(callbackLoading);
    },
    [setPageLoading]
  );

  return (
    <ErrorContext.Provider
      value={{
        error: pageError,
        setErrorCallback
      }}
    >
      <LoadingContext.Provider
        value={{
          loading: pageLoading,
          setLoadingCallback
        }}
      >
        {loading ? <LoadingPage /> : error ? <ErrorPage message={pageError} /> : children}
      </LoadingContext.Provider>
    </ErrorContext.Provider>
  );
};

export default Page;
