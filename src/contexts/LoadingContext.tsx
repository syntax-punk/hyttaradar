import { createContext } from 'react';

interface LoadingContextType {
  loading: boolean;
  setLoadingCallback: (loading: boolean) => void;
}

const LoadingContext = createContext({
  loading: false,
  setLoadingCallback: () => undefined,
} as LoadingContextType);

export default LoadingContext;
