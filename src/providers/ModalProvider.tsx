import React, { useState, useMemo } from 'react';
import ModalContext from '../contexts/ModalContext';

const ModalProvider: React.FC = ({ children }) => {
  const [isActive, setActive] = useState(false);

  const modal = useMemo(() => {
    return {
      isModalActive: isActive,
      toggleModal: () => {
        setActive(!isActive);
      }
    };
  }, [isActive, setActive]);

  return <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
