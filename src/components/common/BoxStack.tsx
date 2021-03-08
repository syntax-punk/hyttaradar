import React from 'react';

const BoxStack: React.FC = ({ children }) => {
  return (
    <section className="box-stack">
      {children}
    </section>
  )
}

export default BoxStack;