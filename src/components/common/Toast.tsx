import React, { useEffect } from 'react';

const Toast: React.FC<{ message: string; type: string; display: boolean; switcher: any }> = ({
  message,
  type,
  display,
  switcher
}) => {
  useEffect(() => {
    if (display) {
      setTimeout(() => {
        switcher(false);
      }, 400);
    }
  }, [display, switcher]);

  return display ? <article className="toast-message">{message}</article> : null;
};

export default Toast;
