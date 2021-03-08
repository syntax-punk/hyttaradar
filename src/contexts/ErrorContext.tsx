import { createContext } from 'react';

interface ErrorContextType {
  error: string;
  setErrorCallback: (errorText: string) => void;
}

const ErrorContext = createContext({
  error: '',
  setErrorCallback: () => undefined,
} as ErrorContextType);

export default ErrorContext;
