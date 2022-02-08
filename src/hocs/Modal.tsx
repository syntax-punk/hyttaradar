import React, { useEffect } from 'react';
import { useModal } from '../contexts/ModalContext';

const Modal: React.FC = ({ children }) => {
  const { isModalActive, toggleModal } = useModal();
  useEffect(() => {
    const onModalClick = (event: any) => {
      [...(event?.target?.classList ?? '')].includes('modal-active') && toggleModal();
    };

    if (isModalActive) {
      document.addEventListener('click', onModalClick);
    } else {
      document.removeEventListener('click', onModalClick);
    }
  }, [isModalActive, toggleModal]);

  return <div className={`modal-screen ${isModalActive ? 'modal-active' : ''}`}>{children}</div>;
};

export default Modal;
