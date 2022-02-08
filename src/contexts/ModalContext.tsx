import { createContext, useContext } from 'react';

interface ModalContextInterface {
  isModalActive: boolean;
  toggleModal: () => void;
}

const ModalContext = createContext({
  isModalActive: false,
  toggleModal: () => {
    console.log('Modal Uninitialized!');
  }
} as ModalContextInterface);

export const useModal = () => {
  const modal = useContext(ModalContext);
  return modal;
};

export default ModalContext;
