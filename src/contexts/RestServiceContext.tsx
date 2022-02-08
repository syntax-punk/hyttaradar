import { createContext, useContext } from 'react';
import RestService from '../services/RestService';
import { RestApiServiceInterface } from '../services/RestService/RestService';

interface RestApiServiceContextInterface {
  restService: RestApiServiceInterface;
}

const RestServiceContext = createContext<RestApiServiceContextInterface>({
  restService: new RestService()
});

export const useRestService = () => {
  const restService = useContext(RestServiceContext);
  return restService;
};

export default RestServiceContext;
